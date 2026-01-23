import React from 'react'
import Benifits from './Benifits';
import FeaturesSection from './Features';
import BenefitsSection from './BenifitsSection';
import ContactUs from '../about/ContactUs';
import ImportExportSection from './ImportExportSection';
import Hero from './Hero';
import Head from "next/head";




 export const metadata = {
  title: "Exim Trade Data - Services | Global Import Export Trade Data Provider Company",
  description:
    "Explore Exim Trade Data's comprehensive import-export trade data services. Get access to more than 200 countries Import and Export Trade Data.",
  keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Export Data Provider",
    "export import data provider",
    "Import Data provider",
    "export data provider",
    "Free Import Export Data",
    "Import Export Report"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/services"
  },
  openGraph: {
    title: "Import Export Data Provider Company - Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/services",
    description: "Enhance your market research with world's leading import export data provider company, Exim Trade Data. Discover Business leads from over 200+ countries.",
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
    title: "Import Export Data Provider Company - Exim Trade Data",
    description: "Enhance your market research with world's leading import export data provider company, Exim Trade Data. Discover Business leads from over 200+ countries.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/services",
    images: ["/logo.png"],
  }
  
};




const page = () => {
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
      "name": "Services",
      "item": "https://eximtradedata.com/services"
    }
  ]
}
`}
        </script>
      </head>
    <main>
        <Hero></Hero>
        <Benifits></Benifits>
        <FeaturesSection></FeaturesSection>
        <BenefitsSection></BenefitsSection>
        <ImportExportSection></ImportExportSection>
        <ContactUs></ContactUs>
    </main>
    </>
  )
}

export default page