import redis from "@/lib/redis";

const UPSTREAM = "http://103.30.72.94:8011/countriesProductList";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const CACHE_TTL = 60 * 60 * 24 * 15; // 15 days

export async function getGlobalProducts({
  letter,
  country,
  type,
  page,
  size = 100,
}) {
  const redisKey = `global-products:${letter}:${country}:${type}:${page}`;

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
    size,
    filters: letter.toUpperCase(),
    columns: `${country}_${type}_on`,
  };

  /* ---------- Upstream fetch ---------- */
  try {
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
    if (!Array.isArray(json?.data)) {
      throw new Error("Product list response did not contain a data array");
    }

    const safeData = {
      products: Array.isArray(json?.data)
        ? json.data.map((i) => ({ product: i.product }))
        : [],
      total: Number(json?.total_values) || 0,
    };

    /* ---------- Cache ---------- */
    redis.set(redisKey, JSON.stringify(safeData), "EX", CACHE_TTL).catch(() => {});

    return safeData;
  } catch (error) {
    console.error("Global product data fetch failed:", error);
    throw error;
  }
}