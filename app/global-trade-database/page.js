

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
  title: "Global Trade Database | Verified Import Export Data at Exim Trade Data",
  description:
    "Access real-time global trade database with detailed import-export records, HS codes, and shipment data. Trusted by businesses worldwide for market insights.",
  keywords: [
    "global trade database",
    "import export data",
    "trade data platform",
    "shipment data",
    "hs code data",
    "international trade statistics",
    "global trade data",
  ],
  alternates: {
    canonical: "https://eximtradedata.com/global-trade-database",
  },
  openGraph: {
    title: "Global Trade Database – import export market intelligence",
    type: "website",
    url: "https://eximtradedata.com/global-trade-database",
    description:
      "Find high ROI sales through our Global trade database of 200+ countries. Search top product trends, countries, ports, buyers, and suppliers by HS Code.",
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
      "Find high ROI sales through our Global trade database of 200+ countries. Search top product trends, countries, ports, buyers, and suppliers by HS Code.",
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
        Exim Global Trade Information System is the leading trade intelligence platform helping businesses thrive in the global market.<br /><br/>
        We provide expert market intelligence reports of <b>200+ countries</b> that highlight the latest market trends, product lists, port shipment records, and importer/exporter lists.<br /><br/>
        Through our platform, you can mitigate financial risk by connecting with genuine buyers and suppliers worldwide — helping you generate higher ROI and establish a strong global brand presence.
      `,
    },
    {
      question:
        "2. How many countries are covered in your global trade database? What types of data do you provide?",
      answer: `
        Our global trade database covers <b>200+ countries</b>, including exclusive data for Turkey, Bangladesh, Thailand, Ghana, Chad, Mexico, Tanzania, and more.<br /><br/>
        We provide detailed trade statistics reports based on shipment transactions, invoices, bills, port shipments, and customs data.<br /><br/>
        <b>Our database contains 4 types of data:</b><br/>
        <ul class="list-disc ml-6">
          <li><b>Statistical Data:</b> Identifies market trends, demand, and evaluates product pricing.</li>
          <li><b>Customs Data:</b> Official customs data with HS Code, buyer, supplier, and ports.</li>
          <li><b>Mirror Data:</b> Extracted from partner countries for limited-coverage regions.</li>
          <li><b>Bill of Lading Data:</b> Shipping records excluding pricing.</li>
        </ul>
      `,
    },
    {
      question:
        "3. What's the difference between the plans? How do I decide which plan is best?",
      answer: `
        We offer multiple plans — Starter, Basic, Plus, Pro, and Premium — each with different
        search limits, download credits, and user licenses.<br /><br/>
        You can also request a fully customized plan based on your budget and requirements.
      `,
    },
    {
      question:
        "4. How can I subscribe to Exim GTIS? How does the point system work?",
      answer: `
        Visit our pricing page, compare plans, and complete payment. After verification,
        your account will be activated.<br /><br/>
        <ul class="list-disc ml-6">
          <li>1 point = 1 shipment for Indonesia / Vietnam</li>
          <li>10 points = 1 shipment for Turkey Direct Export data</li>
        </ul>
      `,
    },
    {
      question: "5. How much time does account activation take?",
      answer: `
        Account activation happens shortly after payment verification.
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
        Our experts are available <b>24×7</b>.<br /><br/>
        Call <a href="tel:+919625812393" class="text-blue-600">+91-9625812393</a>
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