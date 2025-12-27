import React from "react";
import Hero from "./Hero";
import CustomPlan from "./CustomPlan";
import EximBenefitsSection from "./UniqueBenefits";
import PricingClientsClient from "./PricingClientsClient";
import FAQSection from "../Components/FAQ";
import ContactUs from "../about/ContactUs";
import ExclusiveFeatures from "./ExclusiveFeatures";


export const metadata = {
  title: "Affordable Global Trade Data Solutions | Exim Trade Data",
  description:
    "Explore flexible pricing plans for Exim Trade Data’s global trade data. Choose from Starter to Premium plans with customizable options for unlimited access and detailed insights.",
  keywords: [
    "import export data",
    "global trade data",
    "global trade database",
    "import export details",
    "usa import export data",
    "international trade imports and exports",
    "imports and exports data by country",
    "import export platform"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/pricing"
  },
  openGraph: {
    title: "Import Export data of 200+ Countries - Exim Trade Data",
    type: "website",
    url: "https://eximtradedata.com/pricing",
    description: "With the latest updated import export data of over 200+ countries, expand your reach to most diverse markets.",
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
    title: "Import Export data of 200+ Countries - Exim Trade Data",
    description: "With the latest updated import export data of over 200+ countries, expand your reach to most diverse markets.",
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
      "Exim GTIS is the leading trade intelligence platform helping businesses to prosper in the global market We provide expert market intelligence reports that highlight the latest market trends, product lists, port shipment records, importers, and exporters listsThrough our platform, you could mitigate the financial risk involved in the business by reaching out to the genuine buyers and suppliers from the international market. In return, you can generate more ROI and create a strong brand presence.",


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
      "We have 5 plans: Starter, Basic, Plus, Pro, and Premium.Each plan has different search limits, download credits, and user licenses.ou can compare different plans, you can choose your desired plan and also, and you can also customize your plan according to your requirements & budget.",
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
      "Once you make the payment, you will receive an activation email. After the verification, your account will be activated.",
  },
  {
    question: "How can I contact you to create my Customized Data Plan as per my requirements and budget?",
    answer:
      "To cater to our customers' requirements, we provide customized data plans that best suit their needs and budget. You could simply write an email to us at info@eximtradedata.com with your requirement, and we will get back to you soon.",
  },
  {
    question: "How do I get customer support?",
    answer:
      "Our Team of Experts is available 24*7 to provide assistance to our customers. Also, you can connect with us for any help or training at +91-9625812393."
  },
];




const page = () => {
  return (
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
  );
};

export default page;
