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
  title: "Trade Data API | Import Export Data Integration",
  description:
    "Bring shipment records and trade statistics into your CRM, ERP or BI tool with the Exim Trade Data API. Request API access today.",
  /* keywords: [
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
  ], */
  alternates: {
    canonical: "https://eximtradedata.com/api-development-and-integration-company"
  },
  openGraph: {
    title: "Trade Data API | Import Export Data Integration",
    type: "website",
    url: "https://eximtradedata.com/api-development-and-integration-company",
    description: "Bring shipment records and trade statistics into your CRM, ERP or BI tool with the Exim Trade Data API. Request API access today.",
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
    title: "Trade Data API | Import Export Data Integration",
    description: "Bring shipment records and trade statistics into your CRM, ERP or BI tool with the Exim Trade Data API. Request API access today.",
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
    answer: "The Exim Trade Data API delivers shipment records and trade statistics into your CRM, ERP, BI dashboard or product.",
  },
  {
    question: "What are the benefits of using a Trade API?",
    answer: "Use the API to enrich your CRM, power dashboards, automate research by product, HS code or country, and build products with trade statistics.",
  },
  {
    question: "How to get started with your API?",
    answer: "Tell us your use case, products and countries. We will provide API access and documentation, help with integration, then support you as you go live and scale.",
  },
  {
    question: "What is the cost of developing an API from Exim Trade Data?",
    answer: "Contact us with your products, countries and integration needs for a custom quote.",
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
        <a href="tel:+919314619475" className="text-blue-600 hover:underline">
          +91 93146 19475
        </a>
        . Our team can help with API access and onboarding.
      </>
    ),
  },
];

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
      "name": "API",
      "item": "https://eximtradedata.com/api-development-and-integration-company"
    }
  ]
}
`}
        </script>
      </head>
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
