import redis from "@/lib/redis";

const UPSTREAM = "http://103.30.72.94:8011/countriesProductList";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 60 * 60 * 24 * 15; // 15 days
const PAGE_SIZE = 50;
const FETCH_SIZE = 100;

const parseCount = (value) => {
  const count = Number(String(value ?? "0").replace(/,/g, "").trim());
  return Number.isFinite(count) && count > 0 ? count : 0;
};

export async function getGlobalProducts({
  letter,
  country,
  type,
  page,
}) {
  const pageNumber = Math.max(1, Number(page) || 1);
  const from = (pageNumber - 1) * PAGE_SIZE + 1;
  const to = pageNumber * PAGE_SIZE;
  const redisKey = `global-products:v3:${letter}:${country}:${type}:${pageNumber}`;

  /* ---------- Redis HIT ---------- */
  try {
    const cached = await redis.get(redisKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {
    // Redis failure should NOT break page
  }

  /* ---------- Build payload ---------- */
  const payload = {
    source: "countries_product",
    type: "list",
    size: FETCH_SIZE,
    from,
    to,
    filters: letter.toUpperCase(),
    columns: `${country}_${type}_on`,
  };

  /* ---------- Upstream fetch ---------- */
  try {
    console.log("Global products API payload:", payload);
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        Authorization: AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      throw new Error(`Product list request failed with status ${res.status}`);
    }

    const json = await res.json();
    console.log(json);
    if (!Array.isArray(json?.data)) {
      throw new Error("Product list response did not contain a data array");
    }

    const safeData = {
      products: Array.isArray(json?.data)
        ? json.data.map((i) => ({ product: i.product }))
        : [],
      total: parseCount(
        json?.["Total Count"] ??
          json?.data?.[0]?.["Total Count"] ??
          json?.total_values ??
          json?.total
      ),
    };

    /* ---------- Cache ---------- */
    redis.set(redisKey, JSON.stringify(safeData), "EX", CACHE_TTL).catch(() => {});

    return safeData;
  } catch (error) {
    console.error("Global product data fetch failed:", error);
    throw error;
  }
}
