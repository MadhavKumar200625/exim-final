// app[slug]/page.js
import React from "react";
import Hero from "./Hero";
import TabsSection from "./TabsSection";
import Points from "./Points";
import Section4 from "./Section4";
import Section5 from "./Section5.js";
import { industries } from "./data";
import { notFound } from "next/navigation";

const documentCopy = {
  agribusiness: {
    title: "Trade Data for Agribusiness",
    description: "Agricultural markets move with seasons, weather and policy. Our import and export data helps you see where crops, spices, oils and processed foods are going, and at what price. Find importers of rice, wheat, pulses, spices, tea, coffee and edible oils, track seasonal demand, benchmark prices and discover export destinations.",
    metaTitle: "Agribusiness Trade Data | Agri Import Export Data",
    metaDescription: "Find buyers and suppliers for grains, spices, oils, fruit and more with agricultural import export data.",
  },
  automative: {
    title: "Identify Market Trends and Demand in the Automotive Industry",
    description: "From vehicles to components, the automotive supply chain is global. Use shipment data to see who is moving which parts, where demand is rising and which suppliers are gaining share. Find component suppliers by HS code, track EV and battery trade, compare volumes by country and port, and identify distributors and OEM buyers.",
    metaTitle: "Automotive Import Export Data | Parts and Vehicle Trade",
    metaDescription: "Track automotive import and export data for vehicles, parts and components. Spot demand trends and find suppliers and buyers.",
  },
  energy: {
    title: "Trade Data for the Energy Sector",
    description: "Energy markets move quickly. Shipment-level trade statistics show who is buying and selling fuels and energy equipment, and which routes and ports carry them. Monitor fuel and commodity flows, track solar, wind and battery equipment, identify suppliers and buyers by country, and follow port-level volumes.",
    metaTitle: "Energy Sector Trade Data | Oil, Gas, Coal and Renewables",
    metaDescription: "Track energy trade flows for oil, gas, coal and renewable equipment with global import export data.",
  },
  corporation: {
    title: "Market Intelligence for Corporate Teams",
    description: "Large organisations need trade information they can trust and share. Exim Trade Data gives strategy, procurement and sales teams a single source of international trade data for competitor benchmarking, supplier risk checks, market entry planning and internal dashboards through our API.",
    metaTitle: "Market Intelligence Platform for Corporate Teams",
    metaDescription: "Track competitors, benchmark prices and manage supply chain risk with global trade data built for corporate teams.",
  },
  construction: {
    title: "Trade Intelligence for the Construction Industry",
    description: "Material costs and lead times can make or break a project. See who supplies steel, tiles, fittings, machinery and building materials, and where they ship. Find suppliers by HS code, compare prices across countries, identify major importers in growing markets and plan procurement around trade flow trends.",
    metaTitle: "Construction Import Export Data | Materials and Equipment",
    metaDescription: "Source steel, cement, tiles, machinery and more. Track construction material trade flows and find suppliers.",
  },
  chemical: {
    title: "Global Trade Data for the Chemical Industry",
    description: "Chemical trade is specific and regulated. HS-code-level shipment data helps you find the right buyers and suppliers and understand prices and volumes in each market. Find importers of specific chemicals, track regional demand and price movement, identify alternative origins and benchmark trade activity.",
    metaTitle: "Chemical Import Export Data | Buyers and Suppliers",
    metaDescription: "Find chemical buyers and suppliers worldwide. Track industrial, specialty and agro chemicals by HS code.",
  },
  importers: {
    title: "Trade Intelligence Platform for Global Importers",
    description: "Good sourcing starts with good information. Our import export database shows which suppliers ship your product, to whom, in what volume and at what price. Find new suppliers in 200+ countries, compare unit prices, check shipment history and reduce dependence on a single supplier.",
    metaTitle: "Import Data for Importers | Find Verified Suppliers",
    metaDescription: "Use import data and exporter details to find reliable suppliers, compare prices and reduce sourcing risk. Try Exim Trade Data free.",
  },
  exporters: {
    title: "Grow Your Export Sales With a Global Importers Database",
    description: "The hardest part of exporting is finding the right buyer. Search our global trade data to see which markets import your product, how often and in what quantity. Build targeted buyer lists by product and country, identify high-demand markets, study prices and spot new markets before they get crowded.",
    metaTitle: "Export Data for Exporters | Find Overseas Buyers",
    metaDescription: "Find importers worldwide with export data. See who buys your product and grow your export sales.",
  },
  "asset-management": {
    title: "Trade Data That Supports Investment Research",
    description: "Shipment data can signal company performance and sector health. Track shipments, monitor commodity and sector trade flows, assess supply chain concentration and risk, and support investment views with trade statistics.",
    metaTitle: "Trade Data for Asset Management | Investment Research",
    metaDescription: "Use global trade statistics and shipment data to research sectors and supply chains before you invest.",
  },
  "academic-and-education": {
    title: "International Trade Data for Researchers and Students",
    description: "Real data makes better research. Use country and commodity trade flows for thesis work, case studies and classroom teaching in economics, logistics and international business.",
    metaTitle: "Trade Data for Academia | Research and Education",
    metaDescription: "Give students and researchers access to international trade data for economics, supply chain and business studies.",
  },
  "aerospace-and-defence": {
    title: "Supply Chain Visibility for Aerospace and Defence",
    description: "Complex supply chains need clear visibility. Research component and raw material flows, monitor supplier concentration, support due diligence and track commercial aerospace trade flows.",
    metaTitle: "Aerospace and Defence Trade Data | Supplier Intelligence",
    metaDescription: "Research aerospace components, materials and suppliers with global shipment data for informed sourcing.",
  },
  "law-firms": {
    title: "Verified Trade Records for Legal Teams",
    description: "Shipment records provide a documented view of trading history. Use trade data for counterparty due diligence, trade and customs research, trade remedy work and compliance checks.",
    metaTitle: "Trade Data for Law Firms | Due Diligence and Compliance",
    metaDescription: "Support due diligence, trade disputes and compliance work with global import export records.",
  },
  "sales-and-marketing": {
    title: "Turn Trade Data Into Qualified B2B Leads",
    description: "Build prospect lists from buyers and sellers of your products, with shipment history to help prioritise prospects by HS code, country and volume. Personalise outreach using real trade activity.",
    metaTitle: "Sales and Marketing Lead Generation | Trade Data",
    metaDescription: "Build B2B lead lists from importer and exporter activity. Target prospects by product, country and volume.",
  },
  retail: {
    title: "Trade Intelligence for Retail and E-commerce",
    description: "Know what is selling before shelves are stocked. Our import data shows which products are entering which markets, and which suppliers ship them. Spot trending products by country, compare landed price benchmarks and track sourcing patterns over time.",
    metaTitle: "Retail Import Export Data | Find Products and Suppliers",
    metaDescription: "Discover trending products, source suppliers and benchmark prices with retail-focused global trade data.",
  },
};

// export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata({ params }) {
  params = await params
  const slug = params.slug?.toLowerCase();
  const industry = industries[slug];

  if (!industry) {
    return {
      title: "Industry Not Found - Exim Trade Data",
      description: "The requested industry page does not exist.",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `https://eximtradedata.com/industries/${slug}`;

  return {
    title: documentCopy[slug]?.metaTitle || industry.meta?.title || `${slug} Industry Trade Data`,
    description: documentCopy[slug]?.metaDescription || industry.meta?.description,
    alternates: { canonical },
    openGraph: {
      title: documentCopy[slug]?.metaTitle || industry.openGraph?.title || industry.meta?.title,
      url: canonical,
      images: [{ url: industry.openGraph?.image || "/logo.png" }],
    },
  twitter: documentCopy[slug] ? {
  card: "summary_large_image",
  title: documentCopy[slug].metaTitle,
  description: documentCopy[slug].metaDescription,
  images: ["/logo.png"],
} : industry.twitter || {
  card: "summary_large_image",
  title: industry.meta?.title,
  description: industry.meta?.description,
  images: ["/logo.png"],
},
  };
}

const Page = async ({ params }) => {
    params = await params

  const slug =  params.slug?.toLowerCase();
  const industry = industries[slug];
  if (!industry) notFound();

  return (
    <main>
      <Hero {...industry.section1} {...(documentCopy[slug] || {})} image={slug} />

      {industry.section2 && (
        <TabsSection
          heading={industry.section2.heading}
          points={industry.section2.points}
        />
      )}

      {industry.section3 && (
        <Points
          {...industry.section3}
          peviousSection={!!industry.section2}
        />
      )}

      <Section4 {...industry.section4} />
      <Section5 industries={industry.section5.industries} />
    </main>
  );
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export default Page;
