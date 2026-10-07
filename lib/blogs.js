const STRAPI_BASE_URL = "https://content-admin.eximtradedata.com";
const BLOGS_ENDPOINT = "/api/blogs";

export const FALLBACK_BLOGS = [
  {
    id: "fallback-trade-data-guide",
    slug: "a-practical-guide-to-global-trade-data",
    title: "A Practical Guide to Using Global Trade Data",
    excerpt:
      "Learn how shipment records, HS codes, and trading-partner trends can support better market research.",
    category: "Trade Intelligence",
    publishedAt: "2026-01-15T00:00:00.000Z",
    cover_image: null,
    content: [
      "Global trade data helps businesses understand how products move between markets. Shipment records can reveal trading partners, product classifications, ports, and changes in demand over time.",
      "Start with a clear question, such as which markets import a product or which suppliers are active in a region. Then use HS codes and country filters to narrow the records to a useful comparison.",
      "Treat trade data as one input to research. Validate important findings against current regulations, market sources, and direct business checks before making commercial decisions.",
    ],
  },
];

function getRelationValue(value) {
  if (Array.isArray(value)) return value[0] || null;
  if (value?.data) return getRelationValue(value.data);
  return value || null;
}

function getMediaUrl(value) {
  const media = getRelationValue(value);
  const fields = media?.attributes || media;
  const url = fields?.url || fields?.formats?.large?.url || fields?.formats?.medium?.url;

  if (!url) return "";
  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
}

function getPlainText(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(getPlainText).filter(Boolean).join("\n");
  if (!value || typeof value !== "object") return "";
  if (typeof value.text === "string") return value.text;
  if (Array.isArray(value.children)) return getPlainText(value.children);
  if (Array.isArray(value.content)) return getPlainText(value.content);
  return "";
}

export function normalizeBlog(entry) {
  const fields = entry?.attributes || entry || {};
  const coverImage = getMediaUrl(fields.cover_image || fields.coverImage || fields.image);
  const category = getRelationValue(fields.category || fields.categories || fields.blog_category);
  const categoryFields = category?.attributes || category || {};
  const categoryName = typeof category === "string"
    ? category
    : categoryFields.name || categoryFields.title || fields.category_name || "General";
  const content = getPlainText(fields.content || fields.body || fields.article_content);

  return {
    id: String(entry?.id ?? fields.id ?? fields.slug ?? ""),
    slug: String(fields.slug || "").trim(),
    title: String(fields.title || fields.Title || "").trim(),
    excerpt: String(fields.excerpt || fields.description || fields.summary || "").trim(),
    category: String(categoryName).trim(),
    publishedAt: fields.publishedAt || fields.published_at || fields.createdAt || "",
    coverImage,
    content: content.split(/\n+/).map((part) => part.trim()).filter(Boolean),
  };
}

function headers() {
  const token = process.env.STRAPI_API_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getBlogs() {
  try {
    const query = new URLSearchParams({
      populate: "*",
      status: "published",
      locale: "en",
    });
    const response = await fetch(
      `${STRAPI_BASE_URL}${BLOGS_ENDPOINT}?${query}`,
      { headers: headers(), next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      const details = await response.text();
      console.error(
        `Strapi blogs request failed (${response.status}): ${details.slice(0, 500)}`
      );
      return FALLBACK_BLOGS.map(normalizeBlog);
    }

    const payload = await response.json();
    const records = Array.isArray(payload?.data) ? payload.data : [];
    const blogs = records.map(normalizeBlog).filter((blog) => blog.slug && blog.title);
    return blogs.length ? blogs : FALLBACK_BLOGS.map(normalizeBlog);
  } catch (error) {
    console.error("Strapi blogs fetch failed:", error);
    return FALLBACK_BLOGS.map(normalizeBlog);
  }
}

export async function getBlogBySlug(slug) {
  const fallbackRecord = FALLBACK_BLOGS.find((blog) => blog.slug === slug);
  const fallback = fallbackRecord ? normalizeBlog(fallbackRecord) : null;

  try {
    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      populate: "*",
      status: "published",
      locale: "en",
    });
    const response = await fetch(
      `${STRAPI_BASE_URL}${BLOGS_ENDPOINT}?${query}`,
      { headers: headers(), next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      const details = await response.text();
      console.error(
        `Strapi blog request for "${slug}" failed (${response.status}): ${details.slice(0, 500)}`
      );
      return fallback || null;
    }

    const payload = await response.json();
    const record = Array.isArray(payload?.data) ? payload.data[0] : payload?.data;
    const blog = record ? normalizeBlog(record) : null;
    return blog?.slug && blog?.title ? blog : fallback || null;
  } catch (error) {
    console.error("Strapi blog fetch failed:", error);
    return fallback || null;
  }
}
