

import React from "react";
import Hero from "./Hero";
import EximBenefitsSection from "./ExclusiveFeatures";
import FeaturesSection from "./FeaturesSection";
import CountrySection from "./CountryLinksSection";
import PricingSection from "./PricingSection";
import GlobalTradeClientsClient from "./GlobalTradeClientsClient";
import GlobalTradeTestimonialsClient from "./GlobalTradeTestimonialsClient";
import FAQSection from "../Components/FAQ";
import Stats from "./Stats";


export const metadata = {
  title: "Global Trade Database | Exim GTIS Trade Data",
  description:
    "Explore Exim GTIS, a searchable global trade database with customs shipment records, HS codes, ports and trade trends.",
  /* keywords: [
    "global trade database",
    "import export data",
    "trade data platform",
    "shipment data",
    "hs code data",
    "international trade statistics",
    "global trade data",
  ], */
  alternates: {
    canonical: "https://eximtradedata.com/global-trade-database",
  },
  openGraph: {
    title: "Global Trade Database – import export market intelligence",
    type: "website",
    url: "https://eximtradedata.com/global-trade-database",
    description:
      "Explore Exim GTIS, a searchable global trade database built from customs shipment records, HS codes, ports and trade statistics.",
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
    title: "Global Trade Database – import export market intelligence",
    description:
      "Explore Exim GTIS, a searchable global trade database built from customs shipment records, HS codes, ports and trade statistics.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/global-trade-database",
    images: ["/logo.png"],
  },
};

export default function Page() {
  // NOTE:
  // FAQ HTML content is STATIC & TRUSTED.
  // Do NOT inject user-generated or CMS content here.
  const faq = [
    {
      question:
        "1. What is the Exim Global Trade Information System? How can it help my business?",
      answer: `
        Exim GTIS (Global Trade Information Service) is a searchable global trade database built from customs shipment data. Use it to find buyers and suppliers, follow competitors and understand where demand is moving.
      `,
    },
    {
      question:
        "2. How many countries are covered in your global trade database? What types of data do you provide?",
      answer: `
        Available details can include importer and exporter names, product descriptions, HS codes, quantity, value, ports and dates. Country trade statistics show top imports, exports and partners. Exact fields vary by country, depending on what customs authorities publish.
      `,
    },
    {
      question:
        "3. What's the difference between the plans? How do I decide which plan is best?",
      answer: `
        Plans are based on the countries you need, the amount of data you view or download, and whether you need API access. Starter covers one or two countries, Professional covers several countries with a larger allowance, and Enterprise adds required countries, API access and priority support. Contact us for pricing.
      `,
    },
    {
      question:
        "4. How can I subscribe to Exim GTIS? How does the point system work?",
      answer: `
        Visit the Pricing page to compare plans. Our team will explain the data allowance and onboarding before you subscribe.
      `,
    },
    {
      question: "5. How much time does account activation take?",
      answer: `
        Our team will explain the onboarding timeline when you choose a plan.
      `,
    },
    {
      question:
        "6. How can I create a customized data plan?",
      answer: `
        Email us at <a href="mailto:info@eximtradedata.com" class="text-blue-600">info@eximtradedata.com</a>
        with your requirements and budget.
      `,
    },
    {
      question: "7. How do I get customer support?",
      answer: `
        Contact our team for help with your account or API integration.<br /><br/>
        Call <a href="tel:+919314619475" class="text-blue-600">+91 93146 19475</a>
        or email <a href="mailto:info@eximtradedata.com" class="text-blue-600">info@eximtradedata.com</a>.
      `,
    },
  ];

  return (
    <main>
      <Hero />
      <CountrySection />
      <EximBenefitsSection />
      <Stats />
      <FeaturesSection />
      <PricingSection />
      <GlobalTradeClientsClient />
      <GlobalTradeTestimonialsClient />
      <FAQSection faqs={faq} />
    </main>
  );
}
