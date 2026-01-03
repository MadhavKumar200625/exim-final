import { getConnection } from "../db";
import redis from "../redis";

const CACHE_TTL = 60 * 60 * 24; // 24 hours

const buildCacheKey = (type, value) =>
  `hs:${type}:${value.toLowerCase()}`;

/* ================================
   MAIN DATA FETCHER
================================ */
export async function getHSCodeData(type, value, extra = "") {
  const cacheKey = buildCacheKey(type, value, extra);

  /* ---------- 1. Redis ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  /* ---------- 2. DB ---------- */
  const db = await getConnection();
  let result;
  let heading = "";
  let tc1Heading = "";

  /* =========================
     HS ONLY
  ========================= */
  if (type === "hs") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE RTRIM(hs_code) LIKE ${value + "%"}
      ORDER BY hs_code
    `;

    const h = await db.query`
      SELECT hs_code_description
      FROM hscode_list
      WHERE hs_code = ${value}
    `;
    heading = h.recordset?.[0]?.hs_code_description || "";
  }

  /* =========================
     PRODUCT ONLY
  ========================= */
  else if (type === "product") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code_description LIKE ${"%" + value + "%"}
      ORDER BY hs_code
    `;
    heading = `Harmonized system code of ${value}`;
  }

  /* =========================
     HS + PRODUCT (NEW)
  ========================= */
  else if (type === "hs-product") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${value + "%"}
        AND hs_code_description LIKE ${"%" + extra.replace(/\s+/g, "%") + "%"}
      ORDER BY LEN(hs_code)
    `;

    heading = `HS Code ${value} related to ${extra}`;
    tc1Heading = `HS ${value} + Product`;
  }

  /* =========================
     CHAPTER
  ========================= */
  else if (type === "chapter") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) = 4
      ORDER BY hs_code
    `;

    tc1Heading = `Chapter - ${value}`;
  }

  /* =========================
     HEADING
  ========================= */
  else if (type === "heading") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) >= 6
      ORDER BY hs_code
    `;

    tc1Heading = `Heading - ${value}`;
  }

  else return null;

  const payload = {
    rows: result.recordset || [],
    heading,
    tc1Heading,
  };

  /* ---------- 3. Cache ---------- */
  await redis.set(cacheKey, JSON.stringify(payload), "EX", CACHE_TTL);

  return payload;
}