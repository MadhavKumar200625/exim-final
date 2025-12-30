import React from "react";

/* ---------- SECTIONS ---------- */
import Hero from "./Hero";
import Includes from "./Includes";
import What from "./what.server";
import Who from "./Who.server";
import Suppliers from "./Suppliers";
import GlobalImpact from "./GlobalImpact";
import ImportantLinks from "./ImportantLinks";
import FindWhat from "./FindWhat";
import GetTradeData from "./GetTradeData";

/* ---------- DATA ---------- */
import { countriesData } from "@/lib/data/countries_imp";
import ImportClientsClient from "./ImportClientsClient";
import CountrySection from "./CountryLinksSection";

// /* ---------- NEXT CONFIG ---------- */
export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours (safe for bots + SEO)






/* ---------- HELPERS ---------- */
const normalizeSlug = (slug = "") =>
  slug.toLowerCase().trim().replace(/\s+/g, "-");

const extractCountryFromSlug = (slug = "") =>
  slug
    .replace(/^country-wise-/, "")
    .replace(/-(import|export|import-export)-data$/, "");

/* ---------- METADATA ---------- */
export async function generateMetadata({ params }) {
  params = await params
  const slug = normalizeSlug(params.slug);
  const country = countriesData[`${slug}_import_section`];

  const title =
    country?.meta?.title ||
    `${slug.toUpperCase()} Import Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`;

  const description =
    country?.meta?.description ||
    `Get verified ${slug} Import Data, ${slug} customs data and shipment data including importers, exporters, trade patterns, HS codes and port information at Exim Trade Data.`;

  const canonical =
    country?.meta?.canonical ||
    `https://eximtradedata.com/country-wise-${slug}-import-data`;

  return {
    title,
    description,
    keywords:
      country?.meta?.keywords || [
        `${slug} Import Data`,
        `${slug} Customs Data`,
        `${slug} Shipment Data`,
        `${slug} Trade Statistics`,
        `${slug} Exporters`,
        `${slug} Importers`,
        `${slug} Trade Data`,
        `${slug} Market Analysis`,
      ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Exim Trade Data",
      images: [
        {
          url: "/logo.png",
          alt: "Exim Trade Data Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      site: "@eximtradedata",
      creator: "@eximtradedata",
      url: canonical,
      images: ["/logo.png"],
    },
  };
}

/* ---------- PAGE ---------- */
export default async function Page({ params }) {
  params= await params
  const slug = normalizeSlug(params.slug);
  const countryKey = `${slug}_import_section`;

  /* ---------- SAFE FALLBACK (NO 404 = BETTER SEO) ---------- */
  const defaultData = {
  title: `${slug.replace(/^./, (s) => s.toUpperCase())} Import Customs Shipment Trade Data`,
  "description": `Gain comprehensive insights into the ${slug.replace(/^./, (s) => s.toUpperCase())} 's import landscape with the most up-to-date customs shipment data. In 2025, the ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total imports were valued at approximately $533 billion, reflecting a slight decline from previous years. Top import sources included Germany and Belgium, while the most in-demand products were mineral fuels, nuclear reactors, vehicles, and electrical machinery. ${slug.replace(/^./, (s) => s.toUpperCase())}   remains a strategic import hub and niche market for global suppliers. With the right trade intelligence, international importers can connect with verified ${slug.replace(/^./, (s) => s.toUpperCase())}   buyers and expand their market share.`,
  what_included: {
    title: "What’s Included in Our Import Data?",
    "desc_1": `Our ${slug.replace(/^./, (s) => s.toUpperCase())}   Import Shipment Data provides detailed and verified information sourced from customs records, invoices, bills of lading, and shipping manifests. You’ll get data fields such as HS Code, Product Description, Importer and Importer Name, Unit and Quantity, Value (USD), Port of Loading-Unloading, Country of Destination, and Shipment Date. You can also download a free ${slug.replace(/^./, (s) => s.toUpperCase())}   Import Data Sample for reference.`,
  },
  top_import_products: {
    title: "Top Import Products from " + slug,
    description: `As per ${slug.replace(/^./, (s) => s.toUpperCase())}   Import Statistics, the country’s top 5 Imports include Uganda - $967.0 M, United States - $592.0 M, Netherlands - $143.6 M, Pakistan - $125.7 M, United Kingdom - $120.1 M. Together, these Imports accounted for nearly 59% of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total Import value in FY 2024–25. You will find more detailed statistics of ${slug.replace(/^./, (s) => s.toUpperCase())}  's major Imports by HS Code, Total Import Value, and Total Import Share in the chart given below.`,
    data: [
      { product: "Fineness of Gold", value: "$10.78M" },
      { product: "Electrical Cables", value: "$9.26M" },
      { product: "Gold", value: "$8.47M" },
      { product: "Gold Bars", value: "$6.17M" },
      { product: "Fresh Boneless Meat", value: "$4.78M" }
    ]
  },
  import_sources: {
    title: `Import Destinations for ${slug.replace(/^./, (s) => s.toUpperCase())}`,
    description: `${slug.replace(/^./, (s) => s.toUpperCase())}   Customs Shipment Data suggests that Uganda is the largest Importer of goods from ${slug.replace(/^./, (s) => s.toUpperCase())}  . In terms of total Import share, ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s Top Import Trading Partners in 2024 were DR Congo - $2813.4 M, United Arab Emirates - $2273.7 M, China- $1231.6 M, India - $594.1 M, Oman- $539.2 M. In the chart mentioned below, we have provided a detailed analysis of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s top 10 trading partners based on total Import value and total Import share.`,
    data: [
      { country: "USA", value: "$66.48M" },
      { country: "China", value: "$41.38M" },
      { country: "Honduras", value: "$25.91M" },
      { country: "Mexico", value: "$24.31M" },
      { country: "Guatemala", value: "$22.44M" }
    ]
  },
  trusted_clients: {
    title: "Trusted by Industry Leaders",
    description: `Join the list of prestigious clients who trust our comprehensive Import data to grow their businesses.`,
    companies: [
      "PUMA ENERGY SUPPLY & TRADING PTE. LTD.",
      "PACIFICA PETROLEUM",
      "Gildan Mayan Textiles S. de RL",
      "BELLA + CANVAS LLC"
    ]
  },
  grow_with_intelligence: {
    title: "Grow Your Import Potential with Global Trade Intelligence",
    benefits: [
      "Explore 200+ global markets",
      "Track market trends and competitors",
      "Locate verified buyers and suppliers",
      "Enhance your market entry strategy",
      "Get actionable insights to boost ROI"
    ]
  }
}; 

  const countryData = countriesData[countryKey] || defaultData;
  const country = extractCountryFromSlug(slug);

  return (
    <main>
      {/* HERO */}
      <Hero
        country={country}
        hero={{
          title: countryData.title,
          description: countryData.description,
        }}
      />

      <CountrySection />

      <Includes
        country={country}
        desc1={countryData.what_included?.desc_1 || ""}
        desc2={countryData.what_included?.desc_2 || ""}
      />

      <What
        country={country}
        description={countryData.top_import_products?.description || ""}
        data={countryData.top_import_products?.data || []}
      />

      <Who
        country={country}
        description={countryData.import_sources?.description || ""}
        data={countryData.import_sources?.data || []}
      />

      <Suppliers
        description={countryData.trusted_clients?.description || ""}
        data={countryData.trusted_clients?.companies || []}
      />

      <ImportClientsClient />

      <GlobalImpact
        points={countryData.grow_with_intelligence?.benefits || []}
      />

      <ImportantLinks country={country} />
      <FindWhat country={country} />
      <GetTradeData />
    </main>
  );
}