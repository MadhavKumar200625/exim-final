import React from 'react'
import Hero from './Hero'
import CustomApi from './CustomApi'
import BestApiSolutions from './BestApiSolutions'
import Advantages from './Advantages'
import HowToGetStarted from './HowToGetStarted'
import ExploreMore from './ExploreMore'
import ApiDevelopmentClientsClient from './ApiDevelopmentClientsClient'
import FAQSection from '../Components/FAQ'

import Head from "next/head";



export const metadata = {
  title: "Custom API Development & Integration | Exim Trade Data",
  description:
    "Streamline your global trade processes with Exim Trade Data’s custom API development and integration. Secure, scalable APIs for import-export, logistics, and more.",
  keywords: [
    "best api development services",
    "api development",
    "api development companies in usa",
    "api integration services",
    "api development and integration services",
    "api development agency",
    "custom api integration services",
    "api services company",
    "custom api development services",
    "rest api integration services",
    "api integration company",
    "api development and integration services"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/api-development-and-integration-company"
  },
  openGraph: {
    title: "Best API Development Services - Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/api-development-and-integration-company",
    description: "Get fast, secure and highly scalable API development & integration solutions.",
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
    title: "Best API Development Services - Exim Trade Data",
    description: "Get fast, secure and highly scalable API development & integration solutions.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/api-development-and-integration-company",
    images: ["/logo.png"],
  }
  
};




const faq = [
  {
    question: "What is an API?",
    answer: "API stands for the Application Programming Interface. It acts as an interface between two applications. Through an API, you can integrate new applications with existing software systems.",
  },
  {
    question: "Which API services do you provide?",
    answer: "We offer a wide range of API services that includes RESTful API, FIX API, Trade API, Open API, Cloud API, Third-party API, API Maintenance & Integration services.",
  },
  {
    question: "What is a Trade API?",
    answer: "A Trade API is a quality product developed by Exim Trade Data developer team. It is the best application to streamline trade information and make the most out of the data. You can make various requests like gathering country wise import-export data, importer-exporter wise data, search by specific time duration, etc. Through this API, company’s can make their own market search portal and improve their company’s productivity.",
  },
  {
    question: "What are the benefits of using a Trade API?",
    answer: "There are various benefits of using our Trade API such as improved market research, global market insights, instant access to over 200+ countries import export records, global buyers suppliers shipment records, quantity, price evaluation etc.",
  },
  {
    question: "How to get started with your API?",
    answer: "We provide our customers with detailed API documentation. Through which you get a brief overview of our API and easy steps to integrate it into your application. Also, we provide complete support to our clients throughout the process.",
  },
  {
    question: "What is the cost of developing an API from Exim Trade Data?",
    answer: "Exim Trade Data provides the most cost-effective API development and integration services. Our team of dedicated developers, quality testers are fully experienced in delivering the most robust and prompt API project delivery.",
  },
  {
    question: "How to reach out to your project manager for any inquiry?",
    answer: (
      <>
        You can easily connect to one of our project managers to share your requirement at{" "}
        <a href="mailto:info@eximtradedata.com" className="text-blue-600 hover:underline">
          info@eximtradedata.com
        </a>{" "}
        or call at{" "}
        <a href="tel:+919625812393" className="text-blue-600 hover:underline">
          +91-9625812393
        </a>
        . We are 24*7 available for your assistance.
      </>
    ),
  },
];

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
      "name": "API",
      "item": "https://eximtradedata.com/api-development-and-integration-company"
    }
  ]
}
`}
        </script>
      </Head>
    <main>

        <Hero></Hero>
        <CustomApi></CustomApi>
        <BestApiSolutions></BestApiSolutions>
        <Advantages></Advantages>
        <HowToGetStarted></HowToGetStarted>
        <ExploreMore></ExploreMore>
        <ApiDevelopmentClientsClient></ApiDevelopmentClientsClient>
        <FAQSection faqs={faq}></FAQSection>
        
    </main>
    </>
  )
}

export default page