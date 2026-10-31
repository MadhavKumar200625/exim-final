import React from 'react'
import Hero from './Hero'
import ContactQuestion from './ContactQuestion'
import Head from "next/head";


 export const metadata = {
  title: "Industries Covered | Trade Data by Industry",
  description:
    "Explore trade data for agribusiness, automotive, chemical, energy, construction, retail and more. Find buyers, suppliers and trends.",
  /* keywords: [
    "industries covered",
    "trade data by sector",
    "import export industries",
    "agriculture trade data",
    "electronics trade insights",
    "global trade sectors",
    "Exim Trade Data"
  ], */
  alternates: {
    canonical: "https://eximtradedata.com/industries-covered"
  },
  openGraph: {
    title: "Industries Covered | Trade Data by Industry",
    type: "website",
    url: "https://eximtradedata.com/industries-covered",
    description: "Explore trade data for agribusiness, automotive, chemical, energy, construction, retail and more. Find buyers, suppliers and trends.",
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
    title: "Industries Covered | Trade Data by Industry",
    description: "Explore trade data for agribusiness, automotive, chemical, energy, construction, retail and more. Find buyers, suppliers and trends.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/industries-covered",
    images: ["/logo.png"],
  }
  
};

const page = () => {
  return (
    <>
    <head>
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
      "name": "Solutions",
      "item": "https://eximtradedata.com/industries-covered"
    }
  ]
}
`}
        </script>
      </head>
    <main>
    <Hero></Hero>
    <ContactQuestion></ContactQuestion>
    </main>

    </>
  )
}

export default page
