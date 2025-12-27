import CountryLinksSection from "./CountryLinksSection";
import Stats from "./Stats";
import GlobalImpact from "./GlobalImpact";
import DetailedTable from "./DetailedTable";
import ImportantLinks from "./ImportantLinks";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import { countriesData } from "@/lib/data/countries";
import { notFound } from "next/navigation";
import Hero from "./Hero";
import FAQSection from "@/app/Components/FAQ";

/* ================== STATIC CONFIG ================== */
export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours (SEO + bot safe)

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
  params=await params
  const slug = getSlug(params);

  if (!slug) {
    return {
      robots: { index: false, follow: false },
    };
  }

  const country = countriesData[slug];

  if (!country) {
    return {
      title: "Page Not Found | Exim Trade Data",
      robots: { index: false, follow: false },
    };
  }

  const canonical =
    country.meta?.canonical ||
    `https://eximtradedata.com/${slug}-import-export-data`;

  return {
    title:
      country.meta?.title ||
      `${slug.toUpperCase()} Import Export Data | Exim Trade Data`,
    description:
      country.meta?.description ||
      `Access ${slug} import export customs data, shipment data, buyers and suppliers.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title:
        country.meta?.title ||
        `${slug.toUpperCase()} Import Export Data`,
      description: country.meta?.description,
      url: canonical,
      images: [{ url: "/logo.png" }],
      type: "website",
    },
    twitter: {
      card: "summary",
      title:
        country.meta?.title ||
        `${slug.toUpperCase()} Import Export Data`,
      description: country.meta?.description,
      images: ["/logo.png"],
    },
  };
}

/* ================== PAGE ================== */
export default async function Page({ params }) {
  params=await params
  const slug = getSlug(params);
  if (!slug) notFound();

  const rawCountry = countriesData[slug];
  if (!rawCountry) notFound();

  const countrySlug = extractCountryFromSlug(slug);
  const country = normalizeCountryData(rawCountry, slug);

  return (
    <main>
      <Hero hero={country.hero_section} country={countrySlug} />

      <CountryLinksSection />

      <Stats
        country={countrySlug}
        imports={country.overview?.total_imports}
        exports={country.overview?.total_exports}
      />

      

      <GlobalImpact
        country={countrySlug}
        points={safeArray(country.benefits_section?.points)}
      />

      <MarketIntel
        country={countrySlug}
        desc={country.section3?.description}
        data={country.section4}
      />

      {country.detailed_info && (
        <DetailedTable
          country={countrySlug}
          description={country.detailed_info.description}
        />
      )}

      <CtaImage
        country={countrySlug}
        description={country.leads_section?.description}
      />

      <ImportantLinks country={countrySlug} />

      {country.faq_section?.faqs?.length > 0 && (
        <FAQSection faqs={country.faq_section.faqs} />
      )}
    </main>
  );
}