import { industries } from "@/app/industries/[slug]/data";
import { getPublishedBlogSlugs } from "@/lib/blogs";

const SITE_URL = "https://eximtradedata.com";

const staticPaths = [
  "/",
  "/about",
  "/api-development-and-integration-company",
  "/blogs",
  "/contact",
  "/faq",
  "/get-started",
  "/global-hs-code-list",
  "/global-ports",
  "/global-trade-database",
  "/import-export-data-country-wise",
  "/industries-covered",
  "/our-client",
  "/partners",
  "/offer-pricing",
  "/pricing",
  "/privacy",
  "/refund-policy",
  "/search-global-trade-data",
  "/services",
  "/terms",
];

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const blogSlugs = await getPublishedBlogSlugs();
  const paths = new Set([
    ...staticPaths,
    ...Object.keys(industries).map((slug) => `/industries/${slug}`),
    ...blogSlugs.map((slug) => `/blogs/${encodeURIComponent(slug)}`),
  ]);

  const urls = [...paths]
    .sort()
    .map((path) => `  <url><loc>${xmlEscape(`${SITE_URL}${path}`)}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}