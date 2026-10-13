import React from "react";
import HeroSection from "./Hero";
import BenifitsSection from "./BenifitsSection";
import CodeOfConductSection from "./CodeConduct";
import ClientsSection from "../Components/ClientSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import ContactUs from "./ContactUs";
import Head from "next/head";
// import BenifitsSection from "../components/About/BenifitsSection";
// import ClientsSection from "../components/ClientsSection";
// import CodeOfConductSection from "../components/About/CodeOfConductSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import ContactUs from "../components/ContactUs";

export const metadata = {
  title: "About Exim Trade Data | Global Trade Intelligence",
  description:
    "Learn about Exim Trade Data and how our global trade intelligence platform helps businesses explore import-export data, research markets and identify trade opportunities.",
  keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Data",
    "Export Data",
    "Shipments Data",
    "Customs Data",
    "Import Trade Data",
    "Export Trade Data",
    "Importers",
    "Exporters",
    "Buyers",
    "Suppliers",
  ],
  alternates: {
    canonical: "https://eximtradedata.com/about",
  },
  openGraph: {
    title: "About Exim Trade Data | Global Trade Intelligence",
    type: "website",
    url: "https://eximtradedata.com/about",
    description:
      "Learn about Exim Trade Data and how our global trade intelligence platform helps businesses explore import-export data, research markets and identify trade opportunities.",
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
    title: "About Exim Trade Data | Global Trade Intelligence",
    description:
      "Learn about Exim Trade Data and how our global trade intelligence platform helps businesses explore import-export data, research markets and identify trade opportunities.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/about",
    images: ["/logo.png"],
  },
};

export default function Page() {
  return (
    <><head>
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
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://eximtradedata.com/about"
    }
  ]
}
`}
        </script>
      </head>
    <main id="main-content">
      <HeroSection />
      <BenifitsSection />
      <CodeOfConductSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactUs/>  
    </main>
    </>
  );
}
