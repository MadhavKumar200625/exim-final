import React from 'react'
import OurClientTestimonialsClient from './OurClientTestimonialSection';
import Hero from './Hero';
import Sectors from './Sectors';
import Reputation from './Reputation';



 export const metadata = {
  title: "Clients - Trusted by Global Importers & Exporters | Global Trade Data of 200+ Countries",
  description:
    "Discover the global companies and businesses that trust Exim Trade Data for accurate import-export data solutions. Join our growing list of satisfied clients worldwide.",
  keywords: [
    "Exim Trade Data clients",
    "import export clients",
    "global trade data customers",
    "international trade partners",
    "trade data services",
    "client testimonials",
    "trusted by exporters",
    "importers clients list"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/our-client"
  },
  openGraph: {
    title: "Our Clients | Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/our-client",
    description: "At Exim Trade Data, we believe in growing along with our customers. Customer Satisfaction is our utmost priority.",
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
    title: "Our Clients | Exim Trade Data",
    description: "At Exim Trade Data, we believe in growing along with our customers. Customer Satisfaction is our utmost priority.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/our-client",
    images: ["/logo.png"],
  }
  
};

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Sectors></Sectors>
        <Reputation></Reputation>
        <OurClientTestimonialsClient></OurClientTestimonialsClient>
    </main>
  )
}

export default page