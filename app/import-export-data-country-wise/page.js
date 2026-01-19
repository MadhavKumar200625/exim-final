import React from "react";
import Hero from "./Hero";
import Countries from "./Countries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTAImage from "./CTAImage";

export const metadata = {
  title: "Unlock Global Trade Insights Across 200+ Countries | Import Export Data Country-wise",
  description:
    "Access detailed import-export data for 200+ countries. Find verified trade information, including shipment records, market trends, and top trading partners worldwide.",
  keywords: [
    "import export data",
    "import export database",
    "importers exporters directory",
    "import export data by country",
    "country wise import export data",
    "import export trade data",
    "import export customs data",
    "import export data with importer name",
  ],
  alternates: {
    canonical: "https://eximtradedata.com/import-export-data-country-wise",
  },
  openGraph: {
    title: "Import Export Data of 200+ Countries, Importer Exporters",
    type: "website",
    url: "https://eximtradedata.com/import-export-data-country-wise",
    description:
      "Grow your business globally with country wise import export data. Discover 200+ markets, and get high ROI leads from importers exporters directory.",
    siteName: "Exim Trade Data",
    images: [
      {
        url: "/logo.png",
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Data of 200+ Countries, Importer Exporters",
    description:
      "Grow your business globally with country wise import export data. Discover 200+ markets, and get high ROI leads from importers exporters directory.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    images: ["/logo.png"],
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Countries />

      {/* CTA Section */}
      <CTAImage></CTAImage>
    </main>
  );
}