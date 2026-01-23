import React from 'react'
import Hero from './Hero'
import ContactQuestion from './ContactQuestion'
import Head from "next/head";


 export const metadata = {
  title: "Import Export Data by Industries | Global Trade Data of 200+ Countries",
  description:
    "Discover the wide range of industries covered by Exim Trade Data. Get trade insights for agriculture, chemicals, electronics, textiles, and more sectors.",
  keywords: [
    "industries covered",
    "trade data by sector",
    "import export industries",
    "agriculture trade data",
    "electronics trade insights",
    "global trade sectors",
    "Exim Trade Data"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/industries-covered"
  },
  openGraph: {
    title: "Market Research Reports & Consulting for All Industries",
    type: "website",
    url: "https://eximtradedata.com/industries-covered",
    description: "Stay ahead of your competition with industry specific insights through our comprehensive market research reports & consulting for all industries and sectors.",
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
    title: "Market Research Reports & Consulting for All Industries",
    description: "Stay ahead of your competition with industry specific insights through our comprehensive market research reports & consulting for all industries and sectors.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/industries-covered",
    images: ["/logo.png"],
  }
  
};

const page = () => {
  return (
    <>
    <Head>
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
      </Head>
    <main>
    <Hero></Hero>
    <ContactQuestion></ContactQuestion>
    </main>

    </>
  )
}

export default page