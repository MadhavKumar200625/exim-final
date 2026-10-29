import React from "react";
import Hero from "./Hero";
import IndustriesSection from "./IndustriesSection";

// export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export const metadata = {
  title: "Search Global Trade Data by HS Code and Product | Exim Trade Data",
  description:
    "Search import and export shipment records by product, HS code, port or country. Filter by date, value and quantity. Start free.",
  keywords: [
    "search global trade data",
    "import export records",
    "hs code search",
    "shipment data",
    "trade analytics",
    "international trade data",
    "exim search tool",
  ],
  alternates: {
    canonical: "https://eximtradedata.com/search-global-trade-data",
  },
  openGraph: {
    title: "Search Global Trade Data by HS Code and Product | Exim Trade Data",
    description:
      "Search import and export shipment records by product, HS code, port or country. Filter by date, value and quantity. Start free.",
    url: "https://eximtradedata.com/search-global-trade-data",
    siteName: "Exim Trade Data",
    type: "website",
    images: [{ url: "/logo.png", alt: "Exim Trade Data Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Global Trade Data by HS Code and Product | Exim Trade Data",
    description:
      "Search import and export shipment records by product, HS code, port or country. Filter by date, value and quantity. Start free.",
    images: ["/logo.png"],
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <IndustriesSection />
    </main>
  );
}
