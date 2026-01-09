import redis from "@/lib/redis";

/* -----------------------------------------
   Constants
------------------------------------------ */
const UPSTREAM = "http://103.30.72.94:8011/distinctCount";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 1800; // 30 min
const UPSTREAM_TIMEOUT = 8000;

/* -----------------------------------------
   Helpers
------------------------------------------ */
function safeJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url, options, timeout) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(id);
  }
}

/* -----------------------------------------
   MAIN SSR FUNCTION
------------------------------------------ */
export async function getSearchData(query) {
  const {
    type = "export",
    country = "",
    product = "",
    hscode = "",
    port = "",
    countryin = "",
  } = query;

  /* customs country logic */

  const list = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe"
  const customsCountries = new Set(list.split(","));

  const source = customsCountries.has(country.toLowerCase())
    ? country.toLowerCase()
    : "all";

  /* payload */
  const payload = {
    source,
    type: "master",
    size: 10,
    filters: {},
    distinct_filters: [],
  };

  if (type === "export") {
    payload.filters.origin_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = `${hscode}%`;
    if (countryin) payload.filters.destination_country = countryin;
    if (port) payload.filters.Port_of_loading = port;
    payload.distinct_filters = [
      "destination_country",
      "hs_code",
      "Port_of_loading",
    ];
  } else {
    payload.filters.destination_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = `${hscode}%`;
    if (countryin) payload.filters.origin_country = countryin;
    if (port) payload.filters.Port_of_Unloading = port;
    payload.distinct_filters = [
      "origin_country",
      "hs_code",
      "Port_of_Unloading",
    ];
  }

  const cacheKey = `search:ssr:${JSON.stringify(payload)}`;

  /* ---------- Redis ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      const parsed = safeJSON(cached);
      if (parsed) return parsed;
    }
  } catch {
    // Redis failure should never block SSR
  }

  /* ---------- Upstream ---------- */
  const res = await fetchWithTimeout(
    UPSTREAM,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH,
      },
      body: JSON.stringify(payload),
    },
    UPSTREAM_TIMEOUT
  );

  if (!res.ok) {
    throw new Error("Upstream unavailable");
  }

  const text = await res.text();
  const json = safeJSON(text);

  if (!json || !Array.isArray(json.data)) {
    throw new Error("Invalid upstream response");
  }

  /* ---------- Cache (non-blocking) ---------- */
  redis.set(cacheKey, JSON.stringify(json), "EX", CACHE_TTL).catch(() => {});

  return json;
}