import React from "react";
import Hero from "./Hero";
import CustomPlan from "./CustomPlan";
import EximBenefitsSection from "./UniqueBenefits";
import PricingClientsClient from "./PricingClientsClient";
import FAQSection from "../Components/FAQ";
import ContactUs from "../about/ContactUs";
import ExclusiveFeatures from "./ExclusiveFeatures";
import Head from "next/head";


export const metadata = {
  title: "Import Export Data Pricing and Plans | Exim Trade Data",
  description:
    "Compare Exim Trade Data plans for single-country and multi-country access, with API and priority support options. Get a custom quote.",
  /* keywords: [
    "import export data",
    "global trade data",
    "global trade database",
    "import export details",
    "usa import export data",
    "international trade imports and exports",
    "imports and exports data by country",
    "import export platform"
  ], */
  alternates: {
    canonical: "https://eximtradedata.com/pricing"
  },
  openGraph: {
    title: "Import Export Data Pricing and Plans | Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/pricing",
    description: "Compare plans for single-country and multi-country access, with API and priority support options. Get a custom quote.",
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
    title: "Import Export Data Pricing and Plans | Exim Trade Data",
    description: "Compare plans for single-country and multi-country access, with API and priority support options. Get a custom quote.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/pricing",
    images: ["/logo.png"],
  }
  
};



const faqs = [
  {
    question: "What is Exim GTIS? How can Exim GTIS help my company?",
    answer:
      "Exim GTIS (Global Trade Information Service) is a searchable global trade database built from customs shipment data. Use it to find buyers and suppliers, follow competitors and understand where demand is moving.",


  },
  {
    question: "How many countries are covered in your database? What types of data do you provide?",
    answer:
      `<div class="space-y-4">
  <p class="text-zinc-700">
    Exim GTIS has a well-researched database
  </p>
  <p class="text-zinc-700">
   Also, you could access the exclusive countries' data, including Turkey, Bangladesh, Thailand, Ghana, Chad, Mexico, Tanzania, etc.
  </p>
  <p class="text-zinc-700">
 We provide detailed trade statistics reports based on the information collected from the latest transactions, invoices, bills, port shipments, and the customs department.
  </p>
  
  <p class="font-semibold text-black">Our global trade database contains 4 types of data:</p>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Statistical Data</h4>
    <p class="text-zinc-700 mt-1">
       It helps you to identify market trends, demand, and evaluate product pricing. It contains Date of shipment, Product Quantity, Price, Country of Origin/Destination, etc.

    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Customs Data</h4>
    <p class="text-zinc-700 mt-1">
      Customs Data is the data provided by the customs department of global countries. It includes valuable shipping details such as product HS Code, description, country, buyer, supplier name, and port of loading/unloading.

    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Mirror Data</h4>
    <p class="text-zinc-700 mt-1">
       It contains the data of countries with little coverage. It is extracted from the data indicated by their trading partner countries.

    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Bill of Lading Data</h4>
    <p class="text-zinc-700 mt-1">
      This kind of data is determined on the basis of shipping details of a company, excluding pricing.

    </p>
  </div>
</div>`,
  },
  {
    question: "What's the difference between the plans? How do I decide which plan is best for me?",
    answer:
      "Plans are based on the number of countries you need, the amount of data you view or download, and whether you need API access. Starter covers one or two countries, Professional covers several countries with a larger data allowance, and Enterprise can include all required countries, API access and priority support. Contact us for pricing.",
  },
  {
    question: "How can I subscribe to Exim GTIS? How does your point system work?",
    answer:
      `<div class="space-y-4">
  <p class="text-zinc-700">
   To subscribe to the Exim GTIS trade intelligence platform, you first need to visit our pricing plan page and compare our given plans.


  </p>
  <p class="text-zinc-700">
Our point system varies as per the plans.

  </p>
  <p class="text-zinc-700">
Our point system varies as per plans.
  </p>
  <p class="text-zinc-700">
Once your account is activated, you can access the database of all countries.
  </p>
  <p class="text-zinc-700">
TThe points & credits will be awarded on the basis of searches and downloads available under the plan a user chooses.

  </p>
  <p class="text-zinc-700">
For example:
  </p>
  <p class="font-semibold text-black">For Example:</p>
  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Statistical Data</h4>
    <p class="text-zinc-700 mt-1">
For Indonesia Data, 1 point would be deducted for downloading 1 shipment.
.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Customs Data</h4>
    <p class="text-zinc-700 mt-1">
For Vietnam Trade Data, 1 point would be deducted for downloading 1 shipment.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Mirror Data</h4>
    <p class="text-zinc-700 mt-1">
For the Turkey Direct Export Data, 10 points would be deducted for downloading 1 shipment.

    </p>
  </div>

   </p>
  <p class="text-zinc-700">
Feel free to connect with our experts for any kind of assistance.

  </p>
</div>`,
  },
  {
    question: "How much time will it take for my account to be activated?",
    answer:
      "Our team explains your plan and data allowance clearly before you subscribe. Contact us to discuss access and onboarding.",
  },
  {
    question: "How can I contact you to create my Customized Data Plan as per my requirements and budget?",
    answer:
      "Tell us your products, HS codes, countries and budget through the Contact page, on WhatsApp at +91 93146 19475 or by email at info@eximtradedata.com. Our team will reply with a tailored proposal.",
  },
  {
    question: "How do I get customer support?",
    answer:
      "Our team can help you from your first demo through onboarding and beyond. Contact us at +91 93146 19475 or info@eximtradedata.com."
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
      "name": "Pricing",
      "item": "https://eximtradedata.com/pricing"
    }
  ]
}
`}
        </script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://eximtradedata.com/pricing#service",
  "name": "Global Import Export Trade Data Services",
  "description": "Customs import-export data, global trade intelligence, market analytics, and API-based trade data solutions for businesses worldwide.",
  "provider": {
    "@type": "Organization",
    "name": "Exim Trade Data",
    "url": "https://eximtradedata.com/"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "serviceType": [
    "Import Export Data",
    "Customs Data",
    "Trade Intelligence",
    "API Trade Data Services"
  ]
}
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://eximtradedata.com/pricing#product",
  "name": "Import Export Trade Data Subscription",
  "description": "Subscription-based access to global import export trade data, customs records, shipment details, HS codes, and market intelligence.",
  "brand": {
    "@type": "Brand",
    "name": "Exim Trade Data"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "INR",
      "price": "4999",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 6,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "USD",
      "price": "70",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 6,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Basic Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "INR",
      "price": "9999",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 12,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Basic Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "USD",
      "price": "140",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 12,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Plus Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "INR",
      "price": "19999",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 24,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Plus Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "USD",
      "price": "300",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 24,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Premium Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "INR",
      "price": "29999",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 30,
        "unitText": "Months"
      }
    },
    {
      "@type": "Offer",
      "name": "Premium Plan",
      "url": "https://eximtradedata.com/pricing",
      "priceCurrency": "USD",
      "price": "350",
      "availability": "https://schema.org/InStock",
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 30,
        "unitText": "Months"
      }
    }
  ]
}
            `,
          }}
        />
        
      </head>
    <main>
      <Hero></Hero>
      <CustomPlan></CustomPlan>
      <EximBenefitsSection></EximBenefitsSection>
      <ExclusiveFeatures></ExclusiveFeatures>
      <PricingClientsClient></PricingClientsClient>
      <FAQSection faqs={faqs}></FAQSection>
      <ContactUs></ContactUs>
      {/* <Modal></Modal> */}
    </main>
    </>
  );
};

export default page;
