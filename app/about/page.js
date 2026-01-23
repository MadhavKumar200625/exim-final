import React from "react";
import HeroSection from "./Hero";
import BenifitsSection from "./BenifitsSection";
import CodeOfConductSection from "./CodeConduct";
import ClientsSection from "../Components/ClientSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import ContactUs from "./ContactUs";
// import BenifitsSection from "../components/About/BenifitsSection";
// import ClientsSection from "../components/ClientsSection";
// import CodeOfConductSection from "../components/About/CodeOfConductSection";
// import TestimonialsSection from "./components/TestimonialsSection";
// import ContactUs from "../components/ContactUs";

export const metadata = {
  title: "Global Trade Data | About Exim Trade Data",
  description:
    "Exim Trade Data is the best global import export trade data provider, providing global trade data for 200+ countries.",
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
    title: "Exim Trade Data - Most trusted data providing company",
    type: "website",
    url: "https://eximtradedata.com/about",
    description:
      "Exim trade data helps you to provide accurate and custom-made data solutions and resolve all your export-import business operations.",
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
    title: "Exim Trade Data - Most trusted data providing company",
    description:
      "Exim trade data helps you to provide accurate and custom-made data solutions and resolve all your export-import business operations.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/about",
    images: ["/logo.png"],
  },
};

export default function Page() {
  return (
    <><Head>
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
      </Head>
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