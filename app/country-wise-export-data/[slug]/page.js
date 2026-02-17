import React from "react";

/* ---------- SECTIONS ---------- */
import Hero from "./Hero";
import CountryLinksSection from "./CountryLinksSection";
import Includes from "./Includes";
import What from "./What.server";
import Who from "./Who.server";
import Suppliers from "./Suppliers";
import GlobalImpact from "./GlobalImpact";
import ImportantLinks from "./ImportantLinks";
import FindWhat from "./FindWhat";
import GetTradeData from "./GetTradeData";


async function fetchExportPageFromStrapi(slug) {
  try {
    const res = await fetch(
      `https://content-admin.eximtradedata.com/api/country-export-pages?filters[slug][$eq]=${slug}&status=published&locale=en&populate[meta_tags][populate][meta_tags]=*&populate[section_1][populate][button]=*&populate[section_2][populate][Continent_name][populate][button_with_image]=*&populate[section_2][populate][button]=*&populate[section_3][populate][table][populate][table_row]=*&populate[section_4]=*&populate[section_5][populate][button]=*&populate[section_6][populate][button]=*&populate[section_7][populate][image]=*&populate[section_8][populate][image]=*&populate[section_8][populate][button]=*&populate[section_9][populate][button]=*&populate[section_10][populate][button]=*&populate[section_11][populate][button]=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 86400 }, // 24h cache
      }
    );

    if (!res.ok) return null;

    const json = await res.json();
    return json?.data?.[0] || null;
  } catch (err) {
    console.error("Strapi export fetch failed:", err);
    return null;
  }
}
/* ---------- DATA ---------- */
import { countriesData } from "@/lib/data/countries_exp";
import ExportClientsClient from "./ExportClientsClient";

// /* ---------- NEXT CONFIG ---------- */
export const dynamic = "force-static";
export const revalidate = 86400; // 24h – ideal for bots + SEO

/* ---------- HELPERS ---------- */
const normalizeSlug = (slug = "") =>
  slug.toLowerCase().trim().replace(/\s+/g, "-");

const extractCountryFromSlug = (slug = "") =>
  slug
    .replace(/^country-wise-/, "")
    .replace(/-(import|export|import-export)-data$/, "");

/* ---------- METADATA ---------- */
/* ---------- METADATA ---------- */
export async function generateMetadata({ params }) {
  params = await params;
  const slug = normalizeSlug(params.slug);

  /* ---------- FETCH STRAPI ---------- */
  const strapiEntry = await fetchExportPageFromStrapi(slug);

  /* ---------- STRAPI META ---------- */
  const strapiMeta = strapiEntry?.meta_tags?.meta_tags;

  const strapiTitle = strapiMeta?.meta_title;
  const strapiDescription = strapiMeta?.meta_description;
  const strapiKeywords = strapiMeta?.meta_keywords;

  /* ---------- STATIC FALLBACK ---------- */
  const country = countriesData[`${slug}_export_section`];

  const title =
    strapiTitle ||
    country?.meta?.title ||
    `${slug.toUpperCase()} Export Data | ${slug.toUpperCase()} Customs Data - Exim Trade Data`;

  const description =
    strapiDescription ||
    country?.meta?.description ||
    `Get verified ${slug} Export Data, ${slug} customs data and shipment data including exporters, buyers, trade patterns, HS codes and port information at Exim Trade Data.`;

  const canonical =
    country?.meta?.canonical ||
    `https://eximtradedata.com/country-wise-${slug}-export-data`;

  const keywords =
    strapiKeywords
      ? strapiKeywords.split(",").map((k) => k.trim())
      : country?.meta?.keywords || [
          `${slug} Export Data`,
          `${slug} Customs Data`,
          `${slug} Shipment Data`,
          `${slug} Trade Statistics`,
          `${slug} Exporters`,
          `${slug} Importers`,
          `${slug} Trade Data`,
          `${slug} Market Analysis`,
        ];

  return {
    title,
    description,
    keywords,
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
  
  const countryKey = `${slug}_export_section`;
  const formattedSlug = slug.replace(/^./, (s) => s.toUpperCase())
  /* ---------- SAFE FALLBACK (NO 404 = BETTER SEO) ---------- */
  // const defaultData = {
  //   title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Customs Shipment Trade Data`,
  //   description: `Gain comprehensive insights into ${slug.replace(
  //     /^./,
  //     (s) => s.toUpperCase()
  //   )}'s export landscape with the most up-to-date customs shipment data.`,
  //   what_included: { desc_1: "", desc_2: "" },
  //   top_export_products: { title: "", description: "", data: [] },
  //   export_destinations: { title: "", description: "", data: [] },
  //   trusted_clients: { title: "", description: "", data: [] },
  //   grow_with_intelligence: { benefits: [] },
  // };

  const defaultData = {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Customs Shipment Trade Data`,
      "description": `Gain comprehensive insights into the ${slug.replace(/^./, (s) => s.toUpperCase())} 's import landscape with the most up-to-date customs shipment data. In 2025, the ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total imports were valued at approximately $533 billion, reflecting a slight decline from previous years. Top import sources included Germany and Belgium, while the most in-demand products were mineral fuels, nuclear reactors, vehicles, and electrical machinery. ${slug.replace(/^./, (s) => s.toUpperCase())}   remains a strategic import hub and niche market for global suppliers. With the right trade intelligence, international importers can connect with verified ${slug.replace(/^./, (s) => s.toUpperCase())}   buyers and expand their market share.`,
      what_included: {
        title: "What’s Included in Our Export Data?",
        "desc_1": `Our ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Shipment Data provides detailed and verified information sourced from customs records, invoices, bills of lading, and shipping manifests. You’ll get data fields such as HS Code, Product Description, Exporter and Importer Name, Unit and Quantity, Value (USD), Port of Loading-Unloading, Country of Destination, and Shipment Date. You can also download a free ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Data Sample for reference.`,
      },
      top_export_products: {
        title: "Top Export Products from " + slug,
        description: `As per ${slug.replace(/^./, (s) => s.toUpperCase())}   Export Statistics, the country’s top 5 exports include Uganda - $967.0 M, United States - $592.0 M, Netherlands - $143.6 M, Pakistan - $125.7 M, United Kingdom - $120.1 M. Together, these exports accounted for nearly 59% of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s total export value in FY 2024–25. You will find more detailed statistics of ${slug.replace(/^./, (s) => s.toUpperCase())}  's major exports by HS Code, Total Export Value, and Total Export Share in the chart given below.`,
        data: [
          { product: "Fineness of Gold", value: "$10.78M" },
          { product: "Electrical Cables", value: "$9.26M" },
          { product: "Gold", value: "$8.47M" },
          { product: "Gold Bars", value: "$6.17M" },
          { product: "Fresh Boneless Meat", value: "$4.78M" }
        ]
      },
      export_destinations: {
        title: `Export Destinations for ${slug.replace(/^./, (s) => s.toUpperCase())}`,
        description: `${slug.replace(/^./, (s) => s.toUpperCase())}   Customs Shipment Data suggests that Uganda is the largest exporter of goods from ${slug.replace(/^./, (s) => s.toUpperCase())}  . In terms of total export share, ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s Top export Trading Partners in 2024 were DR Congo - $2813.4 M, United Arab Emirates - $2273.7 M, China- $1231.6 M, India - $594.1 M, Oman- $539.2 M. In the chart mentioned below, we have provided a detailed analysis of ${slug.replace(/^./, (s) => s.toUpperCase())}  ’s top 10 trading partners based on total export value and total export share.`,
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
        description: `Join the list of prestigious clients who trust our comprehensive export data to grow their businesses.`,
        data: [
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD.",
          "PACIFICA PETROLEUM",
          "Gildan Mayan Textiles S. de RL",
          "BELLA + CANVAS LLC"
        ]
      },
      grow_with_intelligence: {
        title: "Grow Your Export Potential with Global Trade Intelligence",
        benefits: [
          "Explore 200+ global markets",
          "Track market trends and competitors",
          "Locate verified buyers and suppliers",
          "Enhance your market entry strategy",
          "Get actionable insights to boost ROI"
        ]
      }
    };
  
  const strapiEntry = await fetchExportPageFromStrapi(slug);

  const countryData = countriesData[countryKey] || defaultData;
  const country = extractCountryFromSlug(slug);

  return (
    <main>
      {/* HERO */}
      <Hero
  country={country}
  hero={{
    title:
      strapiEntry?.section_1?.Title ||
      countryData.title,

    description:
      strapiEntry?.section_1?.Description ||
      countryData.description,

    onlineDataText:
      strapiEntry?.section_1?.button?.[0]?.button_text,

    onlineDataLink:
      strapiEntry?.section_1?.button?.[0]?.button_link,

    offlineDataText:
      strapiEntry?.section_1?.button?.[1]?.button_text,

    offlineDataLink:
      strapiEntry?.section_1?.button?.[1]?.button_link,
  }}
/>

      <CountryLinksSection section2={strapiEntry?.section_2} />

    <Includes
  country={country}
  desc1={countryData.what_included?.desc_1 || ""}
  desc2={countryData.what_included?.desc_2 || ""}
  section3={strapiEntry?.section_3}
/>

      <What
  country={country}
  description={countryData.top_export_products?.description || ""}
  data={countryData.top_export_products?.data || []}
  section4={strapiEntry?.section_4}
/>

      <Who
  country={country}
  description={countryData.export_destinations?.description || ""}
  data={countryData.export_destinations?.data || []}
  section5={strapiEntry?.section_5}
/>

      <Suppliers
  country={country}
  data={countryData.trusted_clients?.data || []}
  section6={strapiEntry?.section_6}
/>

      <ExportClientsClient section7={strapiEntry?.section_7}/>

      <GlobalImpact
  points={countryData.grow_with_intelligence?.benefits || []}
  section8={strapiEntry?.section_8}
/>

      <ImportantLinks
  country={country}
  section9={strapiEntry?.section_9}
/>
      <FindWhat
  country={country}
  section10={strapiEntry?.section_10}
/>
      <GetTradeData section11={strapiEntry?.section_11} />
    </main>
  );
}