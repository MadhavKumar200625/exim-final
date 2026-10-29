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

function sanitizeBlogMarkup(html) {
  return sanitizeHtml(repairMalformedBlogHtml(html), BLOG_HTML_OPTIONS)
    .replace(/<(p|div|li|h[1-6])\b([^>]*)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "")
    .replace(/(<(?:p|h[1-6])\b[^>]*>)(?:\s*<br\s*\/?>\s*)+/gi, "$1")
    .replace(/(?:\s*<br\s*\/?>\s*)+<\/(p|h[1-6])>/gi, "</$1>")
    .replace(/(?:\s*<br\s*\/?>\s*){2,}/gi, "<br />");
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

function renderMarkdownInline(value) {
  let text = escapeHtml(value);
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/gi, '<a href="$2">$1</a>');
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  text = text.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  return text;
}

function renderPlainTextMarkdown(value) {
  const cleaned = value
    .replace(/\r\n?/g, "\n")
    .replace(/\\+[ \t]*(?=\n|$)/g, "")
    .replace(/^\s*\\+\s*$/gm, "")
    .replace(/[\u00a0\t]+/g, " ");
  const lines = cleaned.split("\n").map((line) => line.trim());
  const blocks = [];

  for (let index = 0; index < lines.length;) {
    if (!lines[index]) {
      index += 1;
      continue;
    }

    const listMatch = lines[index].match(/^([-*]|\d+[.)])\s+(.+)$/);
    if (listMatch) {
      const ordered = /^\d/.test(listMatch[1]);
      const tag = ordered ? "ol" : "ul";
      const items = [];
      while (index < lines.length) {
        if (!lines[index]) {
          let next = index + 1;
          while (next < lines.length && !lines[next]) next += 1;
          if (!lines[next]?.match(/^([-*]|\d+[.)])\s+(.+)$/)) break;
          index = next;
          continue;
        }
        const item = lines[index].match(/^([-*]|\d+[.)])\s+(.+)$/);
        if (!item || /^\d/.test(item[1]) !== ordered) break;
        items.push(`<li>${renderMarkdownInline(item[2])}</li>`);
        index += 1;
      }
      blocks.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    const paragraphLines = [];
    while (index < lines.length && lines[index]) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    let text = paragraphLines.join(" ").replace(/\s+/g, " ").trim();
    // Copy/paste from some editors separates a link onto its own paragraph,
    // even when the preceding fragment (for example, "With") belongs to it.
    if (text.length < 30 && !/[.!?:;]$/.test(text)) {
      let next = index;
      while (next < lines.length && !lines[next]) next += 1;
      if (/^\[[^\]]+\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/i.test(lines[next] || "")) {
        text = `${text} ${lines[next]}`;
        index = next + 1;
      }
    }
    const heading = text.length <= 110 && !/[.!:;]$/.test(text) &&
      (!/[?]$/.test(text) || /^(what|why|how|when|where|can|is)\b/i.test(text));
    const formatted = renderMarkdownInline(text);
    blocks.push(heading ? `<h2>${formatted}</h2>` : `<p>${formatted}</p>`);
  }

  return blocks.join("");
}

function normalizeBlogHtml(value, { wrapPlainText = true } = {}) {
  if (typeof value === "string") {
    const source = /<\/?[a-z][\s\S]*>/i.test(value)
      ? value
      : wrapPlainText
        ? renderPlainTextMarkdown(value)
        : escapeHtml(value);
    return sanitizeBlogMarkup(source);
  }

  if (Array.isArray(value)) {
    const isContentEntryList = value.some(
      (item) => item && typeof item === "object" && "id" in item && "text" in item
    );

    if (isContentEntryList) {
      const paragraphs = value
        .filter((item) => typeof item?.text === "string")
        .map((item) => normalizeBlogHtml(item.text))
        .join("");
      return sanitizeBlogMarkup(paragraphs);
    }

    return sanitizeBlogMarkup(renderRichTextNode(value, true));
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

function extractArticleContent(value) {
  if (typeof value !== "string") return value;

  // The admin may receive a complete standalone HTML document. Keep only the
  // article body so document controls, metadata, scripts, and global styles do
  // not become visible blog content.
  const articleMatch = value.match(/<article\b[^>]*\bid\s*=\s*(["'])blog-article\1[^>]*>([\s\S]*?)<\/article\s*>/i);
  return articleMatch ? articleMatch[2] : value;
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
  const title = toPlainText(titleHtml);
  const excerptHtml = normalizeBlogHtml(fields.excerpt || fields.description || fields.summary || "");
  const rawContent = fields.content || fields.body || fields.article_content;
  const normalizedContentHtml = normalizeBlogHtml(extractArticleContent(rawContent));
  const contentHtml = normalizedContentHtml.replace(
    /^\s*<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]\s*>/i,
    (heading, headingContent) => toPlainText(headingContent).trim().toLowerCase() === title.trim().toLowerCase()
      ? ""
      : heading
  );
  const contentParagraphsHtml = extractParagraphs(contentHtml);

  return {
    id: String(entry?.id ?? fields.id ?? fields.slug ?? ""),
    slug: String(fields.slug || "").trim(),
    title,
    titleHtml,
    excerpt: toPlainText(excerptHtml),
    excerptHtml,
    category: String(categoryName).trim(),
    publishedAt: fields.publishedAt || fields.published_at || fields.createdAt || "",
    coverImage,
    content: contentParagraphsHtml.map(toPlainText),
    contentParagraphsHtml,
    contentHtml,
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
