import redis from "@/lib/redis";

const UPSTREAM = "http://103.30.72.94:8001/countriesProductList";
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
    });

    if (!res.ok) {
      return { products: [], total: 0 };
    }

    const json = await res.json();

    const safeData = {
      products: Array.isArray(json?.data)
        ? json.data.map((i) => ({ product: i.product }))
        : [],
      total: Number(json?.total_values) || 0,
    };

    /* ---------- Cache ---------- */
    redis.set(redisKey, JSON.stringify(safeData), "EX", CACHE_TTL).catch(() => {});

    return safeData;
  } catch {
    return { products: [], total: 0 };
  }
}