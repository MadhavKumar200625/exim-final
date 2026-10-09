import redis from "@/lib/redis";

const API_URL = "http://103.30.72.94:8012/companyDistinctCount";
const AUTH = "Basic YWJjOmFiY0AxMjM=";
const TTL = 60 * 60 * 24 * 15; // 15 days
const PAGE_SIZE = 100;

const parseCount = (value) => {
  const count = Number(String(value ?? "0").replace(/,/g, "").trim());
  return Number.isFinite(count) && count > 0 ? count : 0;
};

const list = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe"
const CUSTOMS_COUNTRIES = new Set(list.split(","));


export async function getCompaniesList({ country, page }) {
  const cacheKey = `company-list:v2:${country}:${page}`;

  /* ---------- Redis HIT ---------- */
  try {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  const [letter, pageNo] = page.split("-");
  const pageNum = Number(pageNo) || 1;

  const source = CUSTOMS_COUNTRIES.has(country)
    ? country
    : "all";

  const payload = {
    source,
    type: "master",
    country_name: country,
    company_start_from: letter.toUpperCase(),
    from_: (pageNum - 1) * PAGE_SIZE + 1,
    to: pageNum * PAGE_SIZE,
  };

  try {
    const res = await fetch(API_URL, {
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
      throw new Error(`Company list request failed with status ${res.status}`);
    }

    const json = await res.json();
    if (!Array.isArray(json?.data)) {
      throw new Error("Company list response did not contain a data array");
    }
    const block = json?.data?.[0] ?? {};

    const response = {
      defaultLetter: letter.toUpperCase(),
      totalValues: parseCount(
        block["Total Count"] ?? json?.total_values ?? json?.total
      ),
      companies: Array.isArray(block.Company)
        ? block.Company.map((company) => company?.Name?.trim()).filter(Boolean)
        : [],
      page: pageNum,
    };

    redis.set(cacheKey, JSON.stringify(response), "EX", TTL).catch(() => {});
    return response;

  } catch (error) {
    console.error("Company list data fetch failed:", error);
    throw error;
  }
}
