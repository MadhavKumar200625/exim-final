const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Googlebot",
  "Google-Extended",
  "GoogleOther",
  "Bingbot",
  "MicrosoftPreview",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/api/" },
    ],
    sitemap: "https://eximtradedata.com/sitemap.xml",
    host: "https://eximtradedata.com",
  };
}
