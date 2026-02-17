import CountryLinksSection from "./CountryLinksSection";
import Stats from "./Stats";
import GlobalImpact from "./GlobalImpact";
import DetailedTable from "./DetailedTable";
import ImportantLinks from "./ImportantLinks";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import { countriesData } from "@/lib/data/countries";
import Hero from "./Hero";
import FAQSection from "@/app/Components/FAQ";

/* ================== STATIC CONFIG ================== */
// // export const dynamic = "force-static";
// export const revalidate = 86400; // 24 hours (SEO + bot safe)
const mapHeroSection = (entry) => {
  if (!entry?.section_1) return null;

  return {
    title: entry.section_1.Title,
    description: entry.section_1.Description,

    // buttons
    onlineDataText: entry.section_1.button?.[0]?.button_text,
    onlineDataLink: entry.section_1.button?.[0]?.button_link,

    offlineDataText: entry.section_1.button?.[1]?.button_text,
    offlineDataLink: entry.section_1.button?.[1]?.button_link,

    // image (optional for later use)
    image: entry.section_1.image?.[0],
  };
};

async function fetchCountryFromStrapi(slug) {
  try {
    const res = await fetch(
      `https://content-admin.eximtradedata.com/api/country-common-pages?filters[slug][$eq]=${slug}&status=published&locale=en&populate[section_1][populate][button]=*&populate[section_1][populate][image]=*&populate[section_2][populate][Continent_name][populate][button_with_image]=*&populate[section_2][populate][button]=*&populate[section_3][populate][imp_exp_dynamic_fig][populate][button]=*&populate[section_4][populate][button]=*&populate[section_6][populate][button]=*&populate[section_7][populate][button]=*&populate[section_8][populate][faq_section]=*&populate[meta_tags][populate]=*&populate[section_5][populate][trade_tabs][populate][table_with_values][populate][table_row]=*`,
      {
        headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
        next: { revalidate: 86400 },
      }
    );


    if (!res.ok) return null;

    const json = await res.json();
    return json?.data?.[0] || null;
  } catch (err) {
    console.error("Strapi fetch failed:", err);
    return null;
  }
}


/* ================== HELPERS ================== */
const normalizeSlug = (slug = "") =>
  slug.toLowerCase().trim().replace(/\s+/g, "-");

const getSlug = (params) => {
  if (!params?.slug || typeof params.slug !== "string") return null;
  return normalizeSlug(params.slug);
};

const extractCountryFromSlug = (slug = "") =>
  slug
    .replace(/^country-wise-/, "")
    .replace(/-(import|export|import-export)-data$/, "");

const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

const pickBuyers = (section4 = {}, slug) =>
  section4.buyers_list ||
  section4[`${slug}_buyers_list`] ||
  { companies: [] };

const pickSuppliers = (section4 = {}, slug) =>
  section4.suppliers_list ||
  section4[`${slug}_suppliers_list`] ||
  { companies: [] };


const formatCountryName = (slug = "") =>
  slug
    .replace(/^country-wise-/, "")
    .replace(/-(import|export|import-export)-data$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const normalizeCountryData = (raw, slug) => ({
  hero_section: raw.hero_section,
  overview: raw.overview,
  search_section: raw.search_section,
  benefits_section: raw.benefits_section,
  section3: raw.section3,
  section4: {
    ...raw.section4,
    buyers: pickBuyers(raw.section4, slug),
    suppliers: pickSuppliers(raw.section4, slug),
  },
  detailed_info: raw.detailed_info,
  leads_section: raw.leads_section,
  faq_section: raw.faq_section,
});

/* ================== METADATA ================== */
export async function generateMetadata({ params }) {
  params = await params;
  const slug = getSlug(params);

  if (!slug) {
    return {
      robots: { index: false, follow: false },
    };
  }

  // 🔥 Fetch Strapi data
  const strapiEntry = await fetchCountryFromStrapi(slug);
  const strapiMeta = strapiEntry?.meta_tags?.[0];

  const country = countriesData[slug];
  const formattedSlug = formatCountryName(slug);

  /* ---------------- PRIORITY LOGIC ----------------
     1️⃣ Strapi meta_tags
     2️⃣ JS country.meta
     3️⃣ Fallback default
  -------------------------------------------------- */

  const finalTitle =
    strapiMeta?.meta_title ||
    country?.meta?.title ||
    `${formattedSlug} Import Export Data | ${formattedSlug} Customs Data - Exim Trade Data`;

  const finalDescription =
    strapiMeta?.meta_description ||
    country?.meta?.description ||
    `Access up-to-date ${formattedSlug} import export data, customs reports and shipment details.`;

  const finalKeywords =
    strapiMeta?.meta_keywords ||
    country?.meta?.keywords ||
    [
      `${slug} import data`,
      `${slug} export data`,
      `${slug} customs data`,
      `${slug} shipment data`,
      `${slug} importers`,
      `${slug} exporters`,
    ];

  const canonical =
    country?.meta?.canonical ||
    `https://eximtradedata.com/${slug}-import-export-data`;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,

    alternates: {
      canonical,
    },

    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonical,
      images: [{ url: "/logo.png" }],
      type: "website",
    },

    twitter: {
      card: "summary",
      title: finalTitle,
      description: finalDescription,
      images: ["/logo.png"],
    },
  };
}
/* ================== PAGE ================== */
export default async function Page({ params }) {
  params=await params
  const slug = getSlug(params);
  const strapiEntry = await fetchCountryFromStrapi(slug);
  const strapiHero = strapiEntry ? mapHeroSection(strapiEntry) : null;

  const DEFAULT_COUNTRY_DATA = {
    hero_section: {
      description: `Discover business opportunities in ${slug.replace(/^./, (s) => s.toUpperCase())} through reliable and up-to-date import-export data. Our platform offers historical and current ${slug} Import Data, customs data 2025, allowing you to explore trade patterns, find verified buyers and suppliers, and develop strategic marketing plans. Get accurate and verified information based on ${slug} customs data. Identify year-wise ${slug} imports and exports by HS code, country, product, and access ${slug} buyers list, ${slug} suppliers list, and ports volume reports. You can also access a trade API to integrate this data into your workflows.`
    },
    overview: {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Import-Export Data Overview (2024–2025)`,
      total_imports: "$305.81 million",
      total_exports: "$227.80 million"
    },
    search_section: {
      title: `Search Trade Data and ${slug.replace(/^./, (s) => s.toUpperCase())} Import and Export Data by Country-wise, or Product`,
      description: `Use our search tool to dive into ${slug.replace(/^./, (s) => s.toUpperCase())}’s trade data by HS code, product, or partner country. Each report includes Product & HS code descriptions, Quantities and units, Price and total value, Origin & destination countries, Importer & exporter names, Port of loading-unloading, and shipping details.`
    },
    benefits_section: {
      title: "Grow Your Global Reach with Global Trade Intelligence",
      points: [
        "Explore 200+ global markets",
        "Track real-time trends, prices & risks",
        "Monitor competitor shipments",
        `Locate verified ${slug.replace(/^./, (s) => s.toUpperCase())} buyers & suppliers`,
        "Improve conversion using quality trade leads"
      ]
    },
    section3: {
      description: `Gain a clear understanding of ${slug.replace(/^./, (s) => s.toUpperCase())}’s trade performance with detailed import and export data for the fiscal year 2024–25. Our verified shipment records provide insights into market demand, trade partners, top-performing sectors, and key companies involved in international trade. Whether you’re planning to enter the ${slug} market or expand your global reach, this data helps you make informed, strategic decisions backed by real-time intelligence`
    },
    section4: {
      top_import_countries: {
        data: [
          { country: "USA", value: "$100.36M" },
          { country: "Mexico", value: "$24.16M" },
          { country: slug, value: "$21.98M" },
          { country: "Canada", value: "$15.16M" },
          { country: "El Salvador", value: "$12.65M" }
        ]
      },
      top_import_products: {
        data: [
          { product: "Crude Oil", value: "$9.81M" },
          { product: "Medicine for Human Use", value: "$5.60M" },
          { product: "Cut Fabric for T-Shirts", value: "$3.59M" },
          { product: "Fuel Oil", value: "$3.28M" },
          { product: "Raw Oil", value: "$3.26M" }
        ]
      },
      buyers_list: {
        companies: [
          "ASAHI REFINING CANADA LTD",
          `YAZAKI DE ${slug.replace(/^./, (s) => s.toUpperCase())} SA (WAREHOUSE)`,
          "Gildan NDC (EDEN, NC DC/50)",
          "TARGET",
          "BANK OF AMERICA"
        ]
      },
      top_export_countries: {
        data: [
          { country: "USA", value: "$66.48M" },
          { country: "China", value: "$41.38M" },
          { country: "Honduras", value: "$25.91M" },
          { country: "Mexico", value: "$24.31M" },
          { country: "Guatemala", value: "$22.44M" }
        ]
      },
      top_export_products: {
        data: [
          { product: "Fineness of Gold", value: "$10.78M" },
          { product: "Electrical Cables", value: "$9.26M" },
          { product: "Gold", value: "$8.47M" },
          { product: "Gold Bars", value: "$6.17M" },
          { product: "Fresh Boneless Meat", value: "$4.78M" }
        ]
      },
      suppliers_list: {
        companies: [
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD.",
          "PACIFICA PETROLEUM",
          "Gildan Mayan Textiles S. de RL",
          "PUMA ENERGY SUPPLY & TRADING PTE. LTD., -",
          "BELLA + CANVAS LLC"
        ]
      }
    },
    sample_data_section: {
      title: `${slug.replace(/^./, (s) => s.toUpperCase())} Export Import Trade Data Sample`,
      description1: `Before committing to full access to the ${slug.replace(/^./, (s) => s.toUpperCase())} trade data, you can request a sample report on the ${slug} export data and the ${slug} import data. The sample will include key data fields such as HS code, product details, origin-destination countries, unit, quantity, ports, and verified exporter and importer shipment records. You can also customize the ${slug} trade statistics based on monthly, quarterly, or yearly data.`,
      description2: `You'll receive essential data fields, including: HS code and product description, Origin and destination countries, Quantity, unit, and value, Port and shipment details, Verified importer and exporter records. You can also customize your data by month, quarter, or full year, depending on your needs.`
    },
    leads_section: {
      title: "Get High-Quality Leads with Exim GTIS",
      description: `Our regularly updated ${slug.replace(/^./, (s) => s.toUpperCase())} trade database helps you identify genuine and verified business leads, enabling you to increase sales and boost revenue.`
    },
    faq_section: {
      title: `${slug} Import-Export FAQs`,
      faqs: [
        {
          question: `What are ${slug.replace(/^./, (s) => s.toUpperCase())}'s main exports?`,
          answer: "Fineness of Gold, Electrical Cables, Gold, Gold Bars, Fresh Boneless Meat, Cigars"
        },
        {
          question: `What are ${slug.replace(/^./, (s) => s.toUpperCase())}'s main imports?`,
          answer: "Crude Oil, Medicine for Human Use, Cut Fabric for T-Shirts, Fuel Oil, Raw Oil"
        },
        {
          question: `Who are ${slug.replace(/^./, (s) => s.toUpperCase()) }'s main trading partners?`,
          answer: "USA, Honduras, China, Guatemala, Mexico"
        },
        {
          question: `What is the ${slug.replace(/^./, (s) => s.toUpperCase())} trade balance?`,
          answer: "Trade deficit, imports exceed exports"
        },
        {
          question: `What industries drive ${slug.replace(/^./, (s) => s.toUpperCase())} exports?`,
          answer: "Light Manufacturing, Aquaculture, Agriculture, Livestock"
        }
      ]
    }
  };

  const rawCountry = countriesData[slug];

const countrySlug = extractCountryFromSlug(slug);

const countryname = formatCountryName(countrySlug)

const country = normalizeCountryData(
  { ...DEFAULT_COUNTRY_DATA, ...rawCountry },
  slug
);

const section2Data = strapiEntry?.section_2
  ? {
      title: strapiEntry.section_2.Title,
      continents: strapiEntry.section_2.Continent_name,
      cta: strapiEntry.section_2.button?.[0],
    }
  : null;

  const section3Data = strapiEntry?.section_3
  ? {
      title: strapiEntry.section_3.Title,
      figures: strapiEntry.section_3.imp_exp_dynamic_fig,
    }
  : null;
const section4Data = strapiEntry?.section_4
  ? {
      heading: strapiEntry.section_4.Heading_1,
      points: strapiEntry.section_4.Description
        ?.split("\n")
        .map(p => p.trim())
        .filter(Boolean),
      ctaText: strapiEntry.section_4.button?.[0]?.button_text,
      ctaLink: strapiEntry.section_4.button?.[0]?.button_link,
    }
  : null;
  

  const section5Data = strapiEntry?.section_5
  ? {
      title: strapiEntry.section_5.Title,
      description: strapiEntry.section_5.Description,

      trade_tabs: Array.isArray(strapiEntry.section_5.trade_tabs)
        ? strapiEntry.section_5.trade_tabs.map((tab) => ({
            tab_type: tab.tab_type,

            table_with_values: Array.isArray(tab.table_with_values)
              ? tab.table_with_values.map((table) => ({
                  title: table.Tittle,
                  label_1: table.label_1,
                  label_2: table.label_2,

                  table_row: Array.isArray(table.table_row)
                    ? table.table_row.map((row) => ({
                        label_1_text: row.label_1_text,
                        label_2__text: row.label_2__text,
                      }))
                    : [],
                }))
              : [],
          }))
        : [],
    }
  : null;

  const section6Data = strapiEntry?.section_6
  ? {
      title: strapiEntry.section_6.Title,
      description: strapiEntry.section_6.Description,
      buttonText: strapiEntry.section_6.button?.[0]?.button_text,
      buttonLink: strapiEntry.section_6.button?.[0]?.button_link,
    }
  : null;

  const section7Data = strapiEntry?.section_7
  ? {
      title: strapiEntry.section_7.Title,
      links: strapiEntry.section_7.button?.map((b) => ({
        title: b.button_text,
        url: b.button_link,
      })),
    }
  : null;

  const section8Data = strapiEntry?.section_8
  ? {
      title: strapiEntry.section_8.Title,
      faqs: strapiEntry.section_8.faq_section?.map((f) => ({
        question: f.question_text,
        answer: f.answer_text,
      })),
    }
  : null;

  

  return (
    <main>
      
      <Hero hero={strapiHero?strapiHero: country.hero_section} country={countryname} />

      <CountryLinksSection data={section2Data} />

      <Stats
  country={countryname}
  imports={country.overview?.total_imports}
  exports={country.overview?.total_exports}
  data={section3Data}
/>

      

      <GlobalImpact
  country={countryname}
  points={country.benefits_section?.points}
  data={section4Data}
/>

     <MarketIntel
  country={countryname}
  desc={country.section3?.description} // existing behavior stays
  data={country.section4}               // existing behavior stays
  section5={section5Data}
/>

      {country.detailed_info && (
        <DetailedTable
          country={countryname}
          description={country.detailed_info.description}
        />
      )}

      <CtaImage
  description={country.leads_section?.description}
  section6={section6Data}
/>
      <ImportantLinks
  country={countryname}
  section7={section7Data}
/>

     {section8Data?.faqs?.length > 0 && (
  <FAQSection
    title={section8Data.title}
    faqs={section8Data.faqs}
  />
)}
    </main>
  );
}