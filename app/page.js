import dynamic from "next/dynamic";

import Hero from "./HOME/hero";
import CountryExportSection from "./HOME/CountryExportSection";
import GrowthSection from "./HOME/GrowthSection";
import IndustrySection from "./HOME/IndustrySection";
import CustomsSection from "./HOME/CustomsSection";
import GrowWithGlobalSection from "./HOME/GrowWithGlobalSection";
import WhyChooseUs from "./HOME/WhyChooseUs";
import HomeSearchClient from "./HOME/HomeSearchClient";
import HomeClientsClient from "./HOME/HomeClientsClient";
import HomeTestimonialsClient from "./HOME/HomeTestimonialSection";
import Head from "next/head";

export const metadata = {
  title: "Import Export Data | Global Trade Data – Exim Trade Data",
  description:
    "Find import export data, shipment records and importer-exporter details to research global markets, understand trade trends and discover new business opportunities.",
  keywords: [
    "import export data",
    "global trade data",
    "import data",
    "export data",
    "customs shipment data",
    "importer exporter details",
    "international trade data",
    "trade statistics",
    "import export database",
    "global trade information",
  ],
  openGraph: {
    title: "Import Export Data | Global Trade Data – Exim Trade Data",
    description:
      "Find import export data, shipment records and importer-exporter details to research global markets, understand trade trends and discover new business opportunities.",
    url: "https://eximtradedata.com/",
    siteName: "Exim Trade Data",
    type: "website",
    images: [{ url: "/logo.png", alt: "Exim Trade Data Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Data | Global Trade Data – Exim Trade Data",
    description:
      "Find import export data, shipment records and importer-exporter details to research global markets, understand trade trends and discover new business opportunities.",
    images: ["/logo.png"],
  },
  alternates: { canonical: "https://eximtradedata.com/" },
};

export default function Home() {
  return (
    <>
      <head>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eximtradedata.com/"
    }
  ]
}
`}
        </script>
      </head>
      <main>
        {/* SEO-critical */}
        <Hero />

        {/* Interactive (humans only) */}
        <HomeSearchClient></HomeSearchClient>

        <CountryExportSection />

        <GrowthSection />
        <IndustrySection />
        <CustomsSection />
        <GrowWithGlobalSection />
        <WhyChooseUs />

        {/* Heavy sliders */}
        <HomeClientsClient />
        <HomeTestimonialsClient />
      </main>
    </>
  );
}
