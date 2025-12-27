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
    description: `Gain comprehensive insights into ${slug.replace(
      /^./,
      (s) => s.toUpperCase()
    )}'s import landscape with the most up-to-date customs shipment data.`,
    what_included: { desc_1: "", desc_2: "" },
    top_import_products: { description: "", data: [] },
    import_sources: { description: "", data: [] },
    trusted_clients: { description: "", companies: [] },
    grow_with_intelligence: { benefits: [] },
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