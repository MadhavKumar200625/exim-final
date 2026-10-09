const SITE_URL = "https://eximtradedata.com";

const existingSitemaps = [
  "/sitemap/pages/sitemap.xml",
  "/sitemap/countries/sitemap.xml",
  "/sitemap/products/sitemap.xml",
  "/sitemap/search/sitemap.xml",
];

export async function GET() {
  const sitemapUrls = [
    ...existingSitemaps.map((path) => `${SITE_URL}${path}`),
    `${SITE_URL}/sitemap-core.xml`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <sitemap><loc>${url}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}