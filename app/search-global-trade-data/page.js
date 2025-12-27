import React from "react";
import Hero from "./Hero";
import IndustriesSection from "./IndustriesSection";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export const metadata = {
  title: "Search Global Trade Data | Import Export Records | Exim Trade Data",
  description:
    "Search detailed global trade data by product, HS code, country, or company. Access real-time import-export records and shipment insights worldwide.",
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
};

export default function Page() {
  return (
    <main>
      <Hero />
      <IndustriesSection />
    </main>
  );
}