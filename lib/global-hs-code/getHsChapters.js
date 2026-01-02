// import { getConnection } from "../db";
// import redis from "../redis";

// const CACHE_TTL = 60 * 60 * 24; // 24 hours
// const CACHE_KEY = "hs:chapters:list";

// export async function getHSChapters() {
//   /* ---------- 1. Redis first ---------- */
//   const cached = await redis.get(CACHE_KEY);
//   if (cached) {
//     return JSON.parse(cached);
//   }

//   /* ---------- 2. DB fallback ---------- */
//   const db = await getConnection();

//   const result = await db.query`
//     SELECT hs_code, HS_code_Description
//     FROM hscode_list
//     WHERE LEN(hs_code) = 2
//     ORDER BY hs_code
//   `;

//   const rows = result.recordset || [];

//   /* ---------- 3. Save to Redis ---------- */
//   await redis.set(
//     CACHE_KEY,
//     JSON.stringify(rows),
//     "EX",
//     CACHE_TTL
//   );

//   return rows;
// }