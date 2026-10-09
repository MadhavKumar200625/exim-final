const origin = (process.env.SEO_AUDIT_ORIGIN || "https://eximtradedata.com").replace(/\/$/, "");
const configuredUrls = (process.env.SEO_AUDIT_URLS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const representativePaths = [
  { group: "home", path: "/" },
  { group: "static", path: "/services" },
  { group: "static", path: "/global-ports" },
  { group: "static", path: "/global-hs-code-list" },
  { group: "industry", path: "/industries/agribusiness" },
  { group: "blog-index", path: "/blogs" },
  { group: "sitemap-index", path: "/sitemap.xml" },
  { group: "core-sitemap", path: "/sitemap-core.xml" },
];

for (const value of configuredUrls) {
  const separatorIndex = value.indexOf("=");
  const group = separatorIndex > 0 ? value.slice(0, separatorIndex).trim() : "configured";
  const rawUrl = separatorIndex > 0 ? value.slice(separatorIndex + 1).trim() : value;
  const url = new URL(rawUrl, origin);
  representativePaths.push({ group, path: `${url.pathname}${url.search}` });
}

function getMeta(html, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const tag = html.match(new RegExp(`<meta\\b(?=[^>]*\\bname=["']${escapedName}["'])[^>]*>`, "i"))?.[0];
  return tag?.match(/\bcontent=["']([^"']*)["']/i)?.[1] || null;
}

function getCanonical(html) {
  const tag = html.match(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i)?.[0];
  return tag?.match(/\bhref=["']([^"']*)["']/i)?.[1] || null;
}

const results = await Promise.all(
  representativePaths.map(async ({ group, path }) => {
    const requestedUrl = new URL(path, origin).href;
    try {
      const response = await fetch(requestedUrl, {
        redirect: "manual",
        signal: AbortSignal.timeout(15000),
        headers: { "User-Agent": "EximIndexabilityAudit/1.0" },
      });
      const contentType = response.headers.get("content-type") || "";
      const body = contentType.includes("text/html") ? await response.text() : "";
      const canonicalValue = getCanonical(body);
      const canonicalUrl = canonicalValue ? new URL(canonicalValue, requestedUrl).href : null;
      const canonicalParsed = canonicalUrl ? new URL(canonicalUrl) : null;
      const requestedParsed = new URL(requestedUrl);
      const robots = getMeta(body, "robots");
      const googleBot = getMeta(body, "googlebot");

      return {
        group,
        requestedUrl,
        status: response.status,
        location: response.headers.get("location"),
        contentType,
        canonical: canonicalUrl,
        canonicalHost: canonicalParsed?.host || null,
        canonicalPathMatchesRequested: canonicalParsed?.pathname === requestedParsed.pathname,
        canonicalHasQuery: Boolean(canonicalParsed?.search),
        robots,
        googleBot,
        indexableByMeta: ![robots, googleBot].some((value) => /\bnoindex\b/i.test(value || "")),
      };
    } catch (error) {
      return { group, requestedUrl, error: error.message };
    }
  })
);

// console.log(JSON.stringify({ checkedAt: new Date().toISOString(), origin, results }, null, 2));

if (results.some((result) =>
  result.error ||
  (result.status >= 500 && result.group !== "configured") ||
  (result.status >= 200 && result.status < 300 && result.contentType.includes("text/html") && !result.canonical)
)) {
  process.exitCode = 1;
}