/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/automative", destination: "/automotive", permanent: true }];
  },
  async rewrites() {
    const solutionSlugs = [
      "importers", "exporters", "corporation", "automotive", "agribusiness",
      "asset-management", "academic-and-education", "aerospace-and-defence",
      "construction", "chemical", "energy", "law-firms", "retail", "sales-and-marketing",
    ];

    return solutionSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/industries/${slug === "automotive" ? "automative" : slug}`,
    }));
  },
};

export default nextConfig;
