import React from 'react'
import Hero from './Hero';
import ApiAccess from './ApiAccess';
import CustomizedData from './CustomizedData';
import EximBenefitsSection from './UniqueBenefits';
import FAQSection from '../Components/FAQ';


const faqs = [
  {
    question: "What is Exim GTIS? How can Exim GTIS help my company?",
    answer: `
      <p class="text-black mb-4">
        Exim GTIS is the leading trade intelligence platform helping businesses to prosper
        in the global market.
      </p>
      <p class="text-black mb-4">
        We provide expert market intelligence reports of over 200+ countries that highlight the
        latest market trends, product lists, port shipment records, importers and exporters list.
      </p>
      <p class="text-black">
        Through our platform, you could mitigate the financial risk involved in the business by
        reaching out to genuine buyers and suppliers from the international market. In return,
        you can generate more ROI and create a strong brand presence.
      </p>
    `,
  },
  {
    question: "How many countries are covered in your database? What types of data do you provide?",
    answer: `
      <p class="text-black mb-4">
        Exim GTIS has a well-researched database of over 200+ countries.
      </p>
      <p class="text-black mb-4">
        Also, you could access the exclusive countries' data including Turkey, Bangladesh, Thailand,
        Ghana, Chad, Mexico, Tanzania etc.
      </p>
      <p class="text-black mb-4">
        We provide detailed trade statistics reports based on the information collected from latest
        transactions, invoices, bills, port shipments and customs department.
      </p>
      <p class="text-black font-semibold mb-2">Our global trade database contains 4 types of data:</p>
      <ul class="list-disc list-inside pl-4 space-y-2 text-black">
        <li><span class="font-semibold">Statistical Data:</span> Helps you identify market trends, demand and evaluate product pricing. It contains Date of shipment, Product Quantity, Price, Country of Origin/Destination, etc.</li>
        <li><span class="font-semibold">Customs Data:</span> Data from customs departments worldwide, includes HS Code, description, country, buyer, supplier name, and port of loading/unloading.</li>
        <li><span class="font-semibold">Mirror Data:</span> Covers countries with little data coverage. Extracted from their trading partners' records.</li>
        <li><span class="font-semibold">Bill of Lading Data:</span> Based on shipping details of companies (excluding pricing).</li>
      </ul>
    `,
  },
  {
    question: "What's the difference between the plans? How do I decide which plan is best for me?",
    answer: `
      <p class="text-black mb-4">
        We have 5 plans: Starter, Basic, Plus, Pro and Premium.
      </p>
      <p class="text-black">
        Each plan has different search limits, download credits, and user licences.
        You can compare different plans, choose your desired plan, and even customize
        a plan as per your requirements & budget.
      </p>
    `,
  },
  {
    question: "How can I subscribe to Exim GTIS? How does your point system work?",
    answer: `
      <p class="text-black mb-4">
        To subscribe, visit our pricing plan page and compare our plans.
        Then, click on the Request Demo button. After payment, you'll receive an
        activation email and after verification, your account will be activated.
      </p>
      <p class="text-black mb-4">
        Our point system varies as per plans. Once activated, you can access the
        database of all countries. Points are deducted based on the country
        and type of data under your plan.
      </p>
      <p class="text-black font-semibold mb-2">For example:</p>
      <ul class="list-disc list-inside pl-4 space-y-2 text-black">
        <li>For <span class="font-semibold">Indonesia Data</span>, 1 point = 1 shipment.</li>
        <li>For <span class="font-semibold">Vietnam Trade Data</span>, 1 point = 1 shipment.</li>
        <li>For <span class="font-semibold">Turkey Direct Export Data</span>, 10 points = 1 shipment.</li>
      </ul>
      <p class="text-black mt-4">Feel free to connect with our experts for any assistance.</p>
    `,
  },
  {
    question: "How much time will it take for my account to be activated?",
    answer: `
      <p class="text-black">
        Once you make the payment, you will receive an activation email.
        After verification, your account will be activated.
      </p>
    `,
  },
  {
    question: "How can I contact you for creating my Customized Data Plan as per my requirement and budget?",
    answer: `
      <p class="text-black">
        To cater to customer requirements, we provide customized data plans
        that best suit your budget and needs. Simply email us at
        <span class="font-semibold">info@eximtradedata.com</span>
        with your requirement and we will get back to you soon.
      </p>
    `,
  },
  {
    question: "How do I get customer support?",
    answer: `
      <p class="text-black mb-2">
        Our Team of Experts is available 24*7 to provide assistance.
        You can also reach us at 
        <span class="text-blue-600 font-semibold">+91-9625812393</span>.
      </p>
    `,
  },
];

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <ApiAccess></ApiAccess>
        <CustomizedData></CustomizedData>
        <EximBenefitsSection></EximBenefitsSection>
        <FAQSection faqs={faqs}></FAQSection>
    </main>
  )
}

export default page