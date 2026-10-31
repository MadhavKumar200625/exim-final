import React from 'react'
import FAQSection from '../Components/FAQ';


export const metadata = {
  title: "FAQs | Import Export Data and Exim GTIS",
  description:
    "Answers about Exim GTIS, data coverage, plans, subscriptions and custom data plans. Book a free demo with Exim Trade Data.",
  /* keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Data",
    "Export Data",
    "Shipments Data",
    "Customs Data",
    "Import Trade Data",
    "Export Trade Data",
    "Importers",
    "Exporters",
    "Buyers",
    "Suppliers"
  ], */
  alternates: {
    canonical: "https://eximtradedata.com/faq"
  },
  openGraph: {
    title: "FAQs | Import Export Data and Exim GTIS",
    type: "website",
    url: "https://eximtradedata.com/faq",
    description: "Answers about Exim GTIS, data coverage, plans, subscriptions and custom data plans. Book a free demo with Exim Trade Data.",
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
    title: "FAQs | Import Export Data and Exim GTIS",
    description: "Answers about Exim GTIS, data coverage, plans, subscriptions and custom data plans. Book a free demo with Exim Trade Data.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/faq",
    images: ["/logo.png"],
  }
  
};




const AboutEximTradeData =   [
  {
    question: "1. What is Exim GTIS and how can it help my company?",
    answer: `
      Exim GTIS (Global Trade Information Service) is our trade intelligence platform. It brings customs shipment records and trade statistics into one searchable place. Use it to find buyers and suppliers, check a partner&apos;s trading history, track competitors and spot growing products and markets.
    `,
  },
  {
    question: "2. How many countries are covered, and what data do you provide?",
    answer: `
      Our database covers more than 200 countries. Available shipment details can include importer and exporter names, product descriptions, HS codes, quantity, value, unit price, origin and destination countries, ports and dates. Exact fields vary by country, depending on what each customs authority publishes.
    `,
  },
  {
    question: "3. What is the difference between the plans?",
    answer: `
      Plans differ by the number of countries you can access, the amount of data you can view or download, and options such as API access and priority support. Starter covers one or two countries, Professional covers several countries with a larger data allowance, and Enterprise includes the countries and support your team needs.
    `,
  },
  {
    question: "4. How can I subscribe, and how does the point system work?",
    answer: `
      Contact our team to compare plans and discuss the data allowance for searching, viewing and downloading records. We will explain how your plan works before you subscribe.
    `,
  },
  {
    question: "5. How can I get a customised data plan?",
    answer: `
      Tell us your products, HS codes, countries and budget through the Contact page, on WhatsApp at +91 93146 19475 or by email at <a href="mailto:info@eximtradedata.com">info@eximtradedata.com</a>. Our team will reply with a tailored proposal.
    `,
  },
  {
    question: "6. Where does your data come from?",
    answer: `
      Data comes from customs authorities, trade ministries and port authorities in the countries we cover.
    `,
  },
  {
    question: "7. Can I download data or use an API?",
    answer: `
      Yes. You can download search results and connect shipment data to your own systems through our API.
    `,
  },
  {
    question: "8. Can I try Exim Trade Data before I buy?",
    answer: `
      Yes. Book a free demo or start a free trial and we will show shipment records for your product.
    `,
  },
  {
    question: "9. How do I get customer support?",
    answer: `
      Contact our team by email at <a href="mailto:info@eximtradedata.com">info@eximtradedata.com</a> or call +91 93146 19475.
    `,
  },
];

const FeaturesAndBenefits = [
  {
    question: "1. What are the different types of Data?",
    answer: `
      <p>There are different types of Data such as:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Statistical Data:</strong> It helps you to identify market trends, demand and evaluate product pricing. It contains Date of shipment, Product Quantity, Price, Country of Origin/Destination, etc.</li>
        <li><strong>Customs Data:</strong> Customs Data is the data indicated by the customs department of global countries. It includes valuable shipping details such as product HS Code, description, country, buyer, supplier name, and port of loading/unloading.</li>
        <li><strong>Mirror Data:</strong> It contains the data of countries with little coverage. It is extracted from the data indicated by their trading partner countries.</li>
        <li><strong>Bill of Lading Data:</strong> This kind of data is determined on the basis of shipping details of a company excluding pricing.</li>
      </ul>
    `
  },
  {
    question: "2. How do i decide which data is best suited to my needs?",
    answer: `
      <p>Well it depends on your business requirements.</p>
      <ul class="list-disc list-inside space-y-1">
        <li>If you want to gain key market insights such top product imports, exports, pricing etc., then you can opt for Statistical Data.</li>
        <li>If you want genuine leads for your business, then you can go for Customs Data. As, it includes the name of importer, exporter, country, product HS Code, description, etc.</li>
        <li>At last, you can customize your data as per your needs. At Exim Trade Data, we bring the best data solutions for your business.</li>
      </ul>
    `
  },
  {
    question: "3. How many countries data do you provide in your services?",
    answer: `Our database covers more than 200 countries. Available shipment fields vary by country depending on what each customs authority publishes.`
  },
  {
    question: "4. Which data fields do you cover in your data reports?",
    answer: `We provide vital data fields in our data such as Product HS Code, Description, Quantity, Unit, Value, Country of Origin/Destination, Importer Name, Exporter Name, Port and Shipment details.`
  },
  {
    question: "5. How many countries’ exclusive data do you provide?",
    answer: `We provide exclusive data of over 20+ countries such as Turkey, Mexico, Tanzania, Bangladesh, Fiji, Zambia, Congo, etc. So, if you are looking to explore opportunities in these exclusive markets, you can contact us.`
  },
  {
    question: "6. How do you make your data reports?",
    answer: `We provide country-wise customized data reports (monthly, quarterly & yearly). Also you can collect country wise importers and exporters’ data.`
  },
  {
    question: "7. How frequently the database is revised?",
    answer: `We make weekly updates on the data of various countries. We work our very best to keep you up to date with the latest market ups and downs through our data.`
  },
  {
    question: "8. How can I find out the HSN Code for my product?",
    answer: `You can use our HS Code Finder to find HS Code for any item. You can find the HSN Code of over 5000+ goods with our Global HSN Code List.`
  },
  {
    question: "9. Can I find global product data?",
    answer: `Yes, we have a well-defined database of global products. You can evaluate pricing and product demand by tracking shipments of those particular products. You can visit the Global Product list to search product-wise import and export data for a particular country.`
  },
  {
    question: "10. How can I find GST rates for various HSN Codes?",
    answer: `You can find GST rates for various HS Codes on our HSN GST rates list. To view the full list, click here.`
  },
  {
    question: "12. Can I track my competitor’s shipment activities?",
    answer: `Yes, we help businesses with in-depth competitor analysis using shipment activity data from various countries such as Vietnam, Turkey, Indonesia, Tanzania, etc.`
  },
  {
    question: "13. Can I search for global trade data online?",
    answer: `Yes, you can perform an unlimited search of global trade data at our website. You will get detailed data with HSN Code, Product Description, Quantity, Price, Value, Buyer Name, Supplier Name, Country of Origin/Destination, and port shipments. Please visit our Global search page.`
  },
  {
    question: "14. Can I download customs data from Exim Trade Data?",
    answer: `Yes, you can extract the data sample, HS Code List, and GST rates in excel and PDF format.`
  },
  {
    question: "15. Which is the best site for import export data?",
    answer: `Exim Trade Data provides searchable import export data for more than 200 countries.`
  },
  {
    question: "16. What is export/import data?",
    answer: `
      <ul class="list-disc list-inside space-y-1">
        <li>Import refers to the buying of goods whereas export refers to the selling of goods</li>
        <li>An Import data refers to the data of a country&apos;s or company&apos;s imports.</li>
        <li>On the other hand, export data refers to the exports of goods from a country to another country.</li>
      </ul>
    `
  },
  {
    question: "17. Where can I find trade data?",
    answer: `Exim Trade Data provides customs shipment records and trade statistics to help exporters and importers research markets and find buyers and suppliers.`
  },
  {
    question: "18. How do I renew my plan?",
    answer: `
      <ul>
        <li>You can renew your plan by logging into your account and navigating to the subscription section.</li>
        <li>There, you’ll find options to upgrade or renew your plan as per your requirement.</li>
        <li>You can also contact our sales support team for direct assistance.</li>
      </ul>
    `,
  },
  {
    question: "19. How can I get an invoice for my purchase?",
    answer: `
      <ul>
        <li>Invoices are automatically generated and can be accessed from your dashboard.</li>
        <li>You’ll also receive an email confirmation with the attached invoice after a successful transaction.</li>
      </ul>
    `,
  },
  {
    question: "20. Is my data secure on Exim Trade Data?",
    answer: `
      <ul>
        <li>Yes, we use industry-standard security protocols and data encryption to ensure your information is always safe and secure.</li>
      </ul>
    `,
  },
  {
    question: "21. Do you provide a demo before purchasing?",
    answer: `
      <ul>
        <li>Yes, we offer a free demo and sample data to help you understand the depth and utility of our services before purchasing.</li>
      </ul>
    `,
  },
  {
    question: "22. How do I track a shipment using Exim Trade Data?",
    answer: `
      <ul>
        <li>Enter the HS Code, product name, or company name in the search bar to access live global shipment details related to that entry.</li>
      </ul>
    `,
  },
  {
    question: "23. Can I search by HS Code?",
    answer: `
      <ul>
        <li>Yes, you can search using ITC HS Code, company name, product name, or port for detailed results.</li>
      </ul>
    `,
  },
  {
    question: "24. What types of reports can I download?",
    answer: `
      <ul>
        <li>You can download monthly, quarterly, or yearly reports customized based on your data requirements.</li>
      </ul>
    `,
  },
  {
    question: "25. Do you provide support for data interpretation?",
    answer: `
      <ul>
        <li>Yes, our customer support team is equipped to help you interpret and apply the data effectively for your business use case.</li>
      </ul>
    `,
  },
  {
    question: "26. Is there any training provided for using the platform?",
    answer: `
      <ul>
        <li>Yes, we offer onboarding and training sessions to ensure you make the most of your subscription and features.</li>
      </ul>
    `,
  },
  {
    question: "27. Can I get multi-user access?",
    answer: `
      <ul>
        <li>Yes, we provide customizable user licenses, including multi-user access depending on your business requirements.</li>
      </ul>
    `,
  },
  {
    question: "28. Is the data updated regularly?",
    answer: `
      <ul>
        <li>Yes, our database is updated daily to ensure you always have access to the most recent and relevant information.</li>
      </ul>
    `,
  },
  {
    question: "29. What is the validity of a subscription plan?",
    answer: `
      <ul>
        <li>The validity of each plan varies; you can choose from monthly, quarterly, or yearly packages as per your needs.</li>
      </ul>
    `,
  },
  {
    question: "30. Can I filter data by port or country?",
    answer: `
      <ul>
        <li>Yes, our platform allows you to apply multiple filters including port, country, product, and date range.</li>
      </ul>
    `,
  },
  {
    question: "31. Are your services GST compliant?",
    answer: `
      <ul>
        <li>Yes, we provide GST-compliant invoices and all tax-related details as per Indian regulations.</li>
      </ul>
    `,
  },
  {
    question: "32. Do you offer refunds?",
    answer: `
      <ul>
        <li>Yes, in case of any data discrepancy or dissatisfaction, we offer refunds as per our refund policy within 48 hours.</li>
      </ul>
    `,
  },
  {
    question: "33. What payment methods are accepted?",
    answer: `
      <ul>
        <li>We accept major debit/credit cards, UPI, Net Banking, and international payment options like PayPal.</li>
      </ul>
    `,
  },
  {
    question: "34. Can I request a customized data set?",
    answer: `
      <ul>
        <li>Yes, we specialize in creating customized reports and data sets tailored to your specific industry or business focus.</li>
      </ul>
    `,
  },
  {
    question: "35. What kind of businesses use Exim Trade Data?",
    answer: `
      <ul>
        <li>Our clients range from SMEs to large-scale enterprises across industries like manufacturing, logistics, import/export, trading, etc.</li>
      </ul>
    `,
  },
  {
    question: "36. Can I cancel my subscription anytime?",
    answer: `
      <ul>
        <li>Yes, you can cancel your subscription at any time. Please refer to the terms for any applicable cancellation policies.</li>
      </ul>
    `,
  },
  {
    question: "37. Do you provide alerts or notifications for specific data?",
    answer: `
      <ul>
        <li>Yes, you can set alerts and receive notifications based on custom queries or HS codes to stay updated on movements.</li>
      </ul>
    `,
  },
  {
    question: "38. Is there a mobile version or app available?",
    answer: `
      <ul>
        <li>Currently, we are accessible via desktop and mobile browser. A dedicated app is under development and will be released soon.</li>
      </ul>
    `,
  },


]


const GlobalMarketFacts = [
  {
    question: "1. Who is the number 1 importer in the world?",
    answer: "The United States of America is the largest importer of goods followed by China and Germany."
  },
  {
    question: "2. What is the biggest import company in the world?",
    answer: "WalMart is the leading import company in the world with over 930,000 TEUs in 2020."
  },
  {
    question: "3. What are the top 10 imports in the world?",
    answer: `
      As per global trade data, the top 10 imports in the world are:
      <ul>
        <li>Crude Oil</li>
        <li>Petroleum Oils</li>
        <li>Medicaments</li>
        <li>Motor Cars</li>
        <li>Gold</li>
        <li>Electronics</li>
        <li>Mobile Phones</li>
        <li>Semiconductors</li>
        <li>Light oils & preparations of petroleum</li>
        <li>Transmission Apparatus</li>
      </ul>`
  },
  {
    question: "4. What are the top 10 exports in the world?",
    answer: `
      As per global import export data, the top 10 exports in the world are:
      <ul>
        <li>Integrated Circuits</li>
        <li>Mineral Fuels & Oils</li>
        <li>Vehicles</li>
        <li>Refined Petroleum</li>
        <li>Mobile Phones</li>
        <li>Computers</li>
        <li>Vaccines</li>
        <li>Automobile Parts</li>
        <li>Gold</li>
        <li>Natural Gas</li>
      </ul>`
  },
  {
    question: "5. What are the major U.S. Imports?",
    answer: `
      The major U.S. Imports are:
      <ul>
        <li>Electronic Machineries (14.8%)</li>
        <li>Electrical, Equipment (13.9%)</li>
        <li>Vehicles (10%)</li>
        <li>Pharmaceutical Products (5.5%)</li>
        <li>Mineral Oils & Fuels (5.2%)</li>
      </ul>`
  },
  {
    question: "6. What are the top 3 exporting countries in the world?",
    answer: "As per our Global Import Export Data, China (3.36 Trillion US Dollars), the United States (2.52 Trillion US Dollars) and Germany (1.33 Trillion US Dollars) are the largest exporter countries in the world."
  },
  {
    question: "7. Who is the top exporter in the world?",
    answer: "China is the top exporter in the world with a total export value of 3.36 Trillion US Dollars in 2021."
  },
  {
    question: "8. Which country is best for import export business?",
    answer: "China, Germany, Russia and Ireland are major trading markets. Contact us at info@eximtradedata.com or call +91 93146 19475 to discuss your target countries."
  },
  {
    question: "9. Where can I get U.S. import data?",
    answer: "Exim Trade Data provides the latest accurate U.S. import data statistics by HS Code, Product Name, Quantity, Unit, Value, Buyer Name, Supplier Name, Country of Origin/Destination and Port of Loading/Unloading."
  },
  {
    question: "10. What are the top 3 importing countries?",
    answer: "The United States, China and Germany are the top 3 importing countries in the world."
  },
  {
    question: "11. What are the US Top Export Products?",
    answer: `
      As per US export data 2021:
      <ul>
        <li>Electronics Machineries (12.50%)</li>
        <li>Electrical Equipment, Machinery (11.1%)</li>
        <li>Mineral Oils & Fuels (10.5%)</li>
      </ul>`
  },
  {
    question: "12. Which country is import tax free?",
    answer: "Hong Kong, Singapore and Switzerland are the major countries with no import duty. Iceland (0.71%) and Canada (0.85%) are other two nations with lowest import tariffs."
  },
  {
    question: "13. What country exports the least?",
    answer: "Sudan is the country with the lowest number of imports responsible for 6.1% exports of goods and services as % of GDP in 2021."
  },
  {
    question: "14. Which industries imports the most?",
    answer: "As per 2022 Global Trade Data, Pharmaceuticals & Medicine Manufacturing was the leading industry in terms of Imports with the highest import value of 650,607,7 Billion US Dollars."
  },
  {
    question: "15. Who is the biggest oil importer in the world?",
    answer: "China is the biggest oil importer country in the world followed by India and the United States."
  },
  {
    question: "16. Which country is best to export?",
    answer: "Prior market research is very important in identifying the right market and target audience. Exim Trade Data helps you in thorough market research and brings the potential business leads through their quality import and export data."
  },
  // {
  //   question: "17. What is India&apos;s main export?",
  //   answer: "India&apos;s main exports include Aluminium, Zinc Alloys, Diamond, Medicines, Mobile Phones, and Frozen Shrimps."
  // },
  // {
  //   question: "18. How to import clothes from Thailand to India?",
  //   answer: "There are certain documents required while importing clothes from Thailand to India such as Customs Entry Document, Customs bond, Customs declarations, Import Licence, Letter of Credit, Packing List, Certificate of Origin, Insurance Certificate, Certificates of Inspection and many more. You can consult us at info@eximtradedata.com for more detailed information."
  // },
  // {
  //   question: "19. How do I get India imports products list?",
  //   answer: "Exim Trade Data provides the country wise global product list with detailed shipment data. To get India Imports Products List, please kindly visit India Imports Page."
  // }
];

const PricingPlans = [
  {
    question: "1. What is the pricing for the Data Subscription?",
    answer: `
      <ul class="list-disc list-inside">
        <li>The pricing differs from country to country.</li>
        <li>It depends on your needs and the kind of data you want for your business.</li>
      </ul>
    `
  },
  {
    question: "2. Which payment modes are available?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Debit Card</li>
        <li>Credit Card</li>
        <li>Bank Transfer</li>
        <li>PayPal</li>
        <li>Wire Transfer</li>
        <li>Demand Draft (DD)</li>
        <li>UPI</li>
        <li>Cash</li>
        <li>Cheque Deposit</li>
      </ul>
    `
  },
  {
    question: "3. Do you provide any sample data before buying the service?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Yes, we provide free sample data prior to purchase.</li>
      </ul>
    `
  },
  {
    question: "4. What types of data will I get after taking a subscription from Exim Trade Data?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Verified customs and statistical data for over 200 countries.</li>
        <li>Advanced market intelligence platform access.</li>
        <li>On-demand data support.</li>
      </ul>
    `
  },
  {
    question: "5. How soon data reports get delivered after making the payment?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Data will be delivered within 2–3 hours after payment confirmation.</li>
      </ul>
    `
  },
  {
    question: "6. Can I customize my data plan to suit my requirement and budget?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Yes, you can choose between weekly, quarterly, monthly, or annual plans.</li>
      </ul>
    `
  },
  {
    question: "7. How can I get in touch with the Exim Trade Data team for any assistance?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Email: info@eximtradedata.com</li>
        <li>Live Chat</li>
        <li>Phone: +91 93146 19475</li>
      </ul>
    `
  },
  {
    question: "8. How soon will I get a response after dropping a query?",
    answer: `
      <ul class="list-disc list-inside">
        <li>We respond immediately after receiving an inquiry.</li>
        <li>Our goal is to provide fast, reliable & expert data solutions.</li>
      </ul>
    `
  },
  {
    question: "9. Do you offer a money-back guarantee?",
    answer: `
      <ul class="list-disc list-inside">
        <li>Yes, we offer a 100% money-back guarantee if you are not satisfied.</li>
      </ul>
    `
  }
];

const page = () => {

  return (
    <>
    <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Exim Trade Data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exim GTIS (Global Trade Information Service) is our trade intelligence platform. It brings customs shipment records and trade statistics into one searchable place to help find buyers and suppliers, check trading history, track competitors and spot growing products and markets."
      }
    },
    {
      "@type": "Question",
      "name": "What are your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide customized data solutions to meet our clients’ requirements. We offer BI-powered import-export analytics, customs data, ports data, and global products data reports."
      }
    },
    {
      "@type": "Question",
      "name": "How many countries do you cover in your database?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our database covers more than 200 countries. Available shipment details vary by country depending on what each customs authority publishes."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I use Exim Trade Data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plans differ by country access, data allowance and options such as API access and priority support. Book a demo and we will suggest a plan for your products and target countries."
      }
    },
    {
      "@type": "Question",
      "name": "How can Exim Trade Data help my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help identify global market trends, demand and risks, discover genuine buyers and suppliers, and generate quality leads to boost sales."
      }
    },
    {
      "@type": "Question",
      "name": "How is Exim Trade Data different from other Market Intelligence Platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exim Trade Data provides customs shipment records, port data, product data, HS code search, a free demo and customised reports for more than 200 countries."
      }
    },
    {
      "@type": "Question",
      "name": "Who are your clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have worked with top clients including Dell, Bajaj, Mahindra, Hero Motorcorp, and Orient Bell Tiles."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide verified data? What are the sources of data and its accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our data is sourced from global bills of lading, commercial invoices, customs data, port shipments, government bodies, trade associations, logistics partners, and other trusted sources, ensuring high accuracy and reliability."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I get additional assistance using Exim Trade Data services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us by email at info@eximtradedata.com or call +91 93146 19475."
      }
    },
    {
      "@type": "Question",
      "name": "What are the different types of data you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide statistical data, customs data, mirror data, and bill of lading data, each offering different trade and shipment insights."
      }
    },
    {
      "@type": "Question",
      "name": "How do I decide which data is best suited to my needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For market trends and pricing insights, statistical data is ideal. For genuine importer and exporter leads, customs data is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Which data fields do you cover in your data reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our reports include product HS code, description, quantity, unit, value, country of origin or destination, importer name, exporter name, port, and shipment details."
      }
    },
    {
      "@type": "Question",
      "name": "How frequently is your database revised?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our database is updated weekly to ensure accuracy and freshness."
      }
    },
    {
      "@type": "Question",
      "name": "How can I find the HSN Code for my product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can use our HS Code Finder to search HSN codes for over 5000+ products."
      }
    },
    {
      "@type": "Question",
    {
      "@type": "Question",
      "name": "Can I track competitor shipment activities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can track competitor shipment activities using import and export shipment data."
      }
    },
    {
      "@type": "Question",
      "name": "Can I perform online searches for global trade data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can perform unlimited searches by country, HS code, and product through our online portal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download customs data? In what formats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can download sample customs data, HS code lists, and GST rates in Excel or PDF formats."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing structured for subscriptions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing varies by country and data type. We offer flexible plans including weekly, monthly, quarterly, and yearly subscriptions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free sample data before buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide free sample data so users can evaluate data quality before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "How soon do you deliver data after payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data is delivered within 2–3 hours after payment confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Exim Trade Data for support or queries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach us by email at info@eximtradedata.com or by phone at +91 93146 19475."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a money-back guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a 100% money-back guarantee if you are not satisfied."
      }
    }
  ]
}
            `,
          }}
        />
      </head>

    <main>
        <FAQSection faqs={AboutEximTradeData} title={"About Exim Trade Data"}></FAQSection>
        <FAQSection faqs={FeaturesAndBenefits} title={"Features & Benefits of Global Import Export Data"}></FAQSection>
        <FAQSection faqs={GlobalMarketFacts} title={"Global Market Facts & Figures"}></FAQSection>
        <FAQSection faqs={PricingPlans} title={"Pricing & Plans"}></FAQSection>


    </main>
    </>
  )
}

export default page
