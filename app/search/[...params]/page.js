// /app/search/[...params]/page.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import Hero from "./Hero";
import ShowFilters from "./ShowFilters";
import MainSection from "./MainSection";
import SearchGlobalData from "./SearchGlobalData";
import { getSearchData } from "@/lib/getSearchData";

/* -------------------------------------------------
   Helpers (same logic as before)
-------------------------------------------------- */
function parseFilters(raw) {
  return raw.map((param) => {
    const [label, ...value] = param.split("-");
    return {
      label: label.replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()),
      value: value.join(" ").replace(/_/g, " "),
    };
  });
}

function extractQuery(filters) {
  return {
    type: filters.find((f) => f.label === "Type")?.value?.toLowerCase() || "export",
    country: filters.find((f) => f.label === "Country")?.value || "",
    product: filters.find((f) => f.label === "Product")?.value || "",
    hscode: filters.find((f) => f.label === "Hscode")?.value || "",
    countryin: filters.find((f) => f.label === "Countryin")?.value || "",
    port: filters.find((f) => f.label === "Port")?.value || "",
  };
}

/* -------------------------------------------------
   ✅ generateMetadata (UNCHANGED)
-------------------------------------------------- */
export async function generateMetadata({ params }) {
  params = await params
  const raw = params.params || [];
  const applied = parseFilters(raw);
  const query = extractQuery(applied);

  /* 🔥 YOUR ORIGINAL SEO LOGIC — UNTOUCHED */
  let title = `Search Global Trade Data by Country, HS Code & Product`;
  let description =
    "Explore global trade data by country, HS code, and product. Access detailed shipment records.";
  let keywords = ["global trade data", "import export data"];

  const url = `https://eximtradedata.com/search/${raw.join("/")}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Exim Trade Data",
      type: "website",
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

/* -------------------------------------------------
   ✅ FULL SSR PAGE (REDIS + UPSTREAM)
-------------------------------------------------- */
export default async function Page({ params }) {
  params = await params
  const raw = params.params || [];
  const appliedFilters = parseFilters(raw);
  const query = extractQuery(appliedFilters);

  let api;
  try {
    // 🔥 Redis-backed service (you already copied this)
    api = await getSearchData(query);
  } catch {
    return (
      <div className="p-10 text-center">
        <p className="text-red-600 text-lg font-semibold">
          We&apos;re experiencing heavy traffic
        </p>
        <p className="text-gray-500 mt-2">
          Please refresh or try again in a moment.
        </p>
      </div>
    );
  }

  /* -------------------------------------------------
     Normalize response safely
  -------------------------------------------------- */
  const rowsRaw = Array.isArray(api?.data) ? api.data : [];
  const unique = Array.isArray(api?.unique) ? api.unique : [];

  const filters = {
    hsCodes: unique
      .filter((u) => u.startsWith("hs_code:"))
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),

    countries: unique
      .filter((u) =>
        u.startsWith(
          query.type === "export"
            ? "destination_country:"
            : "origin_country:"
        )
      )
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),

    ports: unique
      .filter((u) =>
        u.startsWith(
          query.type === "export"
            ? "Port_of_loading:"
            : "Port_of_Unloading:"
        )
      )
      .map((u) => u.split(":")[1]?.split(",")[0]?.trim())
      .filter(Boolean),
  };

  const rows = rowsRaw.map((d) => {
    const s = d?._source || {};
    return {
      date: s.date || "-",
      hsCode: s.hs_code || "-",
      product: s.Product_Description || "-",
      exporter:
        query.type === "export" ? s.exporter || "-" : s.importer || "-",
      qty: s.quantity || "-",
      unit: s.unit || "-",
      value: s.total_value_usd || "-",
      origin:
        query.type === "export"
          ? s.destination_country || "-"
          : s.origin_country || "-",
      port:
        query.type === "export"
          ? s.Port_of_Loading || "-"
          : s.Port_of_Unloading || "-",
    };
  });

  /* -------------------------------------------------
     Build final page data
  -------------------------------------------------- */
  const data = {
    section1: {
      heading: `Latest ${query.country} ${query.type} Data`,
      subheading: "",
    },
    section3: { appliedFilters },
    section4: {
      filters,
      table: {
        headers: [
          "DATE",
          "HS CODE",
          "PRODUCT DESCRIPTION",
          query.type === "export" ? "EXPORTER" : "IMPORTER",
          "QUANTITY",
          "UNIT",
          "TOTAL VALUE USD",
          query.type === "export"
            ? "DESTINATION COUNTRY"
            : "ORIGIN COUNTRY",
          query.type === "export"
            ? "PORT OF LOADING"
            : "PORT OF UNLOADING",
        ],
        rows,
        pagination: {
          currentPage: 1,
          totalPages: Math.max(1, Math.ceil(rows.length / 10)),
        },
      },
    },
    section5: {
      heading: "Search Global Export - Import Trade Data",
      content: "",
    },
  };

  /* -------------------------------------------------
     Render SSR HTML
  -------------------------------------------------- */
  return (
    <main>
      <Hero data={data.section1} />
      <ShowFilters appliedFilters={data.section3.appliedFilters} />
      <MainSection
        data={data.section4}
        appliedFilters={data.section3.appliedFilters}
      />
      <SearchGlobalData data={data.section5} />
    </main>
  );
}