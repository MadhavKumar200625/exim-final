import React from "react";
import Hero from "./Hero";
import Countries from "./Countries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTAImage from "./CTAImage";

export const metadata = {
  title: "Import Export Data by Country | Global Trade Data & Insights",
  description:
    "Explore import export data by country to research global markets, review shipment records, identify potential buyers and suppliers, and understand trade trends.",
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
    title: "Import Export Data by Country | Global Trade Data & Insights",
    type: "website",
    url: "https://eximtradedata.com/import-export-data-country-wise",
    description:
      "Explore import export data by country to research global markets, review shipment records, identify potential buyers and suppliers, and understand trade trends.",
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
    title: "Import Export Data by Country | Global Trade Data & Insights",
    description:
      "Explore import export data by country to research global markets, review shipment records, identify potential buyers and suppliers, and understand trade trends.",
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
