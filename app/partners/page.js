import React from 'react'
import Hero from './Hero';
import ClinetsAndPartners from './ClinetsAndPartners';
import PartnerToday from './PartnerToday';
import ContactUs from '@/app/about/ContactUs';


export const metadata = {
  title: "Global Trade Data Network | Partners - Exim Trade Data",
  description:
    "Meet our trusted global partners who help deliver accurate trade data insights. Explore our growing network of data providers, agents, and trade experts.",
  keywords: [
    "exim trade data partners",
    "global trade data network",
    "trade data providers",
    "import export data partners",
    "data agents",
    "international trade collaboration"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/partners"
  },
  
    "openGraph": {
      "title": "Become a Partner with Exim Trade Data",
      "type": "website",
      "url": "https://eximtradedata.com/partners",
      "description": "Our mission is to provide more sustainable, cost-effective and result centric data solutions to our customers.",
      "siteName": "Exim Trade Data",
      "images": [
        {
          "url": "/logo.png",
          "alt": "Exim Trade Data Logo"
        }
      ]
    },
    "twitter": {
      "card": "summary",
      "title": "Become a Partner with Exim Trade Data",
      "description": "Our mission is to provide more sustainable, cost-effective and result centric data solutions to our customers.",
      "site": "@eximtradedata",
      "creator": "@eximtradedata",
      "url": "https://eximtradedata.com/partners",
      "images": ["/logo.png"]
    }
  };
  


const page = () => {
  return (
    <main>
    <Hero></Hero>
    <ClinetsAndPartners></ClinetsAndPartners>
    <PartnerToday></PartnerToday>
    <ContactUs></ContactUs>
    </main>
  )
}

export default page