import redis from "@/lib/redis";

const UPSTREAM = "http://103.30.72.94:8001/globalPortLoading";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const TTL = 60 * 60 * 24 * 15; // 15 days
const list = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe"
const CUSTOMS_COUNTRIES = new Set(list.split(","));

export async function getPortsData({ country, letter, page }) {
  const cacheKey = `ports-data:${country}:${letter}:${page}`;

  /* ---------- Redis HIT ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  const source = CUSTOMS_COUNTRIES.has(country)
    ? country
    : "all";

  const from_ = (page - 1) * 8 + 1;
  const to = page * 8;

  const payload = {
    source,
    type: "master",
    country_name: country,
    from_: String(from_),
    to: String(to),
  };

  try {
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        Authorization: AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const json = await res.json().catch(() => ({}));

    const response = {
      data: Array.isArray(json?.data) ? json.data : [],
      totalValues: Number(json?.total_values) || 0,
      letter,
      page,
    };

    redis.set(cacheKey, JSON.stringify(response), "EX", TTL).catch(() => {});
    return response;

  } catch {
    return { data: [], totalValues: 0, letter, page };
  }
}