import sanitizeHtml from "sanitize-html";

const STRAPI_BASE_URL = "https://content-admin.eximtradedata.com";
const BLOGS_ENDPOINT = "/api/blogs";

const BLOG_HTML_OPTIONS = {
  allowedTags: [
    "a", "b", "blockquote", "br", "code", "div", "em", "figcaption", "figure",
    "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "li", "ol", "p",
    "pre", "s", "span", "strong", "sub", "sup", "table", "tbody", "td",
    "th", "thead", "tr", "u", "ul",
  ],
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "alt", "width", "height"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
};
const BLOG_PARAGRAPH_OPTIONS = {
  ...BLOG_HTML_OPTIONS,
  allowedTags: ["a", "b", "br", "code", "em", "img", "s", "span", "strong", "sub", "sup", "u"],
};
const VOID_HTML_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function repairMalformedBlogHtml(html) {
  const openTags = [];
  const tagPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<\/>/gi;

  return html.replace(tagPattern, (tag) => {
    if (tag === "</>") {
      const openTag = openTags.pop();
      return openTag ? `</${openTag}>` : "";
    }

    const match = tag.match(/^<\/?([a-z][a-z0-9]*)\b/i);
    if (!match) return tag;
    const tagName = match[1].toLowerCase();
    const closing = tag.startsWith("</");

    if (tagName === "a" && !closing && /^<a\s*>$/i.test(tag) && openTags.includes("a")) {
      const anchorIndex = openTags.lastIndexOf("a");
      openTags.splice(anchorIndex);
      return "</a>";
    }

    if (closing) {
      const openIndex = openTags.lastIndexOf(tagName);
      if (openIndex !== -1) openTags.splice(openIndex);
      return tag;
    }

    if (!VOID_HTML_TAGS.has(tagName) && !tag.endsWith("/>")) {
      openTags.push(tagName);
    }
    return tag;
  });
}

function renderRichTextNode(node, separateListItems = false) {
  if (typeof node === "string") return escapeHtml(node);
  if (Array.isArray(node)) {
    const isListItems = separateListItems && node.length > 1 && node.every(
      (item) => typeof item === "string" || item?.type === "list-item"
    );

    return node
      .map((item, index) => `${renderRichTextNode(item)}${isListItems && index < node.length - 1 ? "<br>" : ""}`)
      .join("");
  }
  if (!node || typeof node !== "object") return "";

  const children = renderRichTextNode(node.children || node.content || []);
  if (node.type === "link") {
    return `<a href="${escapeHtml(String(node.url || node.href || "#"))}">${children}</a>`;
  }
  if (typeof node.text === "string") {
    if (/<\/?[a-z][\s\S]*>|<\/>/i.test(node.text)) return node.text;
    let text = escapeHtml(node.text);
    if (node.code) text = `<code>${text}</code>`;
    if (node.italic) text = `<em>${text}</em>`;
    if (node.bold) text = `<strong>${text}</strong>`;
    if (node.underline) text = `<u>${text}</u>`;
    if (node.strikethrough) text = `<s>${text}</s>`;
    return text;
  }

  const tagByType = {
    paragraph: "p",
    quote: "blockquote",
    "list-item": "li",
    "heading-one": "h1",
    "heading-two": "h2",
    "heading-three": "h3",
    "heading-four": "h4",
    "heading-five": "h5",
    "heading-six": "h6",
  };
  const tag = tagByType[node.type];
  if (tag) return `<${tag}>${children}</${tag}>`;
  if (node.type === "list") {
    const listTag = node.format === "ordered" ? "ol" : "ul";
    return `<${listTag}>${children}</${listTag}>`;
  }
  if (node.type === "code") return `<pre><code>${children}</code></pre>`;
  return children;
}

function normalizeBlogHtml(value, { wrapPlainText = true } = {}) {
  if (typeof value === "string") {
    const source = /<\/?[a-z][\s\S]*>/i.test(value)
      ? value
      : wrapPlainText
        ? value.split(/\n+/).filter(Boolean).map((line) => `<p>${escapeHtml(line)}</p>`).join("")
        : escapeHtml(value);
    return sanitizeHtml(repairMalformedBlogHtml(source), BLOG_HTML_OPTIONS);
  }

  if (Array.isArray(value)) {
    const isContentEntryList = value.some(
      (item) => item && typeof item === "object" && "id" in item && "text" in item
    );

    if (isContentEntryList) {
      const paragraphs = value.flatMap((item) => {
        if (typeof item?.text !== "string") return [];
        return item.text
          .split(/\r?\n\s*\r?\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean)
          .map((paragraph) => `<p>${paragraph.replace(/\r?\n/g, "<br>")}<br></p>`);
      }).join("");
      return sanitizeHtml(repairMalformedBlogHtml(paragraphs), BLOG_HTML_OPTIONS);
    }

    return sanitizeHtml(repairMalformedBlogHtml(renderRichTextNode(value, true)), BLOG_HTML_OPTIONS);
  }

  if (value && typeof value === "object") {
    return normalizeBlogHtml(value.html || value.blocks || value.content || value.children || "");
  }

  return "";
}

function toPlainText(html) {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).trim();
}

function convertListsToParagraphs(html) {
  const convertItems = (items) => {
    const paragraphItems = items
      .replace(/<li\b[^>]*>/gi, "")
      .replace(/<\/li>/gi, "<br>");
    return `<p>${paragraphItems}</p>`;
  };

  return html
    .replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_match, _listTag, items) => convertItems(items))
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_match, item) => `<p>${item}<br></p>`);
}

function extractParagraphs(html) {
  const paragraphContent = convertListsToParagraphs(html);
  const paragraphs = [...paragraphContent.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => sanitizeHtml(match[1].trim(), BLOG_PARAGRAPH_OPTIONS))
    .filter(Boolean);

  return paragraphs.length
    ? paragraphs
    : paragraphContent.trim()
      ? [sanitizeHtml(paragraphContent.trim(), BLOG_PARAGRAPH_OPTIONS)]
      : [];
}

export function normalizeBlog(entry) {
  const fields = entry?.attributes || entry || {};
  const coverImage = getMediaUrl(fields.cover_image || fields.coverImage || fields.image);
  const category = getRelationValue(fields.category || fields.categories || fields.blog_category);
  const categoryFields = category?.attributes || category || {};
  const categoryName = typeof category === "string"
    ? category
    : categoryFields.name || categoryFields.title || fields.category_name || "General";
  const titleHtml = normalizeBlogHtml(fields.title || fields.Title || "", { wrapPlainText: false });
  const excerptHtml = normalizeBlogHtml(fields.excerpt || fields.description || fields.summary || "");
  const contentHtml = normalizeBlogHtml(fields.content || fields.body || fields.article_content);
  const contentParagraphsHtml = extractParagraphs(contentHtml);

  return {
    id: String(entry?.id ?? fields.id ?? fields.slug ?? ""),
    slug: String(fields.slug || "").trim(),
    title: toPlainText(titleHtml),
    titleHtml,
    excerpt: toPlainText(excerptHtml),
    excerptHtml,
    category: String(categoryName).trim(),
    publishedAt: fields.publishedAt || fields.published_at || fields.createdAt || "",
    coverImage,
    content: contentParagraphsHtml.map(toPlainText),
    contentParagraphsHtml,
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
      {
        headers: headers(),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );
    if (!response.ok) {
      const details = await response.text();
      console.error(
        `Strapi blogs request failed (${response.status}): ${details.slice(0, 500)}`
      );
      throw new Error(`Strapi blogs request failed with status ${response.status}`);
    }

    const payload = await response.json();
    if (!Array.isArray(payload?.data)) {
      throw new Error("Strapi blogs response did not contain a data array");
    }
    const records = payload.data;
    const blogs = records.map(normalizeBlog).filter((blog) => blog.slug && blog.title);
    return blogs;
  } catch (error) {
    console.error("Strapi blogs fetch failed:", error);
    throw error;
  }
}

export async function getPublishedBlogSlugs() {
  try {
    const query = new URLSearchParams({
      "fields[0]": "slug",
      status: "published",
      locale: "en",
      "pagination[pageSize]": "1000",
    });
    const response = await fetch(
      `${STRAPI_BASE_URL}${BLOGS_ENDPOINT}?${query}`,
      {
        headers: headers(),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      throw new Error(`Strapi sitemap blog request failed with status ${response.status}`);
    }

    const payload = await response.json();
    if (!Array.isArray(payload?.data)) {
      throw new Error("Strapi sitemap response did not contain a data array");
    }

    return payload.data
      .map((entry) => String((entry?.attributes || entry)?.slug || "").trim())
      .filter((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));
  } catch (error) {
    console.error("Published blog sitemap fetch failed:", error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      populate: "*",
      status: "published",
      locale: "en",
    });
    const response = await fetch(
      `${STRAPI_BASE_URL}${BLOGS_ENDPOINT}?${query}`,
      {
        headers: headers(),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );
    if (!response.ok) {
      const details = await response.text();
      console.error(
        `Strapi blog request for "${slug}" failed (${response.status}): ${details.slice(0, 500)}`
      );
      throw new Error(`Strapi blog request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const record = Array.isArray(payload?.data) ? payload.data[0] : payload?.data;
    const blog = record ? normalizeBlog(record) : null;
    return blog?.slug && blog?.title ? blog : null;
  } catch (error) {
    console.error("Strapi blog fetch failed:", error);
    throw error;
  }
}
