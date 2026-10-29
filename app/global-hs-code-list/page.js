import React from 'react'
import Search from './Search'
import { getHSChapters } from '@/lib/global-hs-code/getHsChapters';
import FAQSection from '../Components/FAQ';
import Head from "next/head";


export const dynamic = "force-dynamic";
export const revalidate = false;

export async function generateMetadata() {
  return {
    title:
      "Global HS Code List | HS Code Search by Product",

    description:
      "Look up HS and HSN codes by product and see who imports and exports each code. Free HS code list from Exim Trade Data.",

    alternates: {
      canonical: "https://eximtradedata.com/global-hs-code-list",
    },

    keywords:
      "global hs code list, hs code search, harmonized system codes, import export hs code, custom tariffs codes, international trade hs codes",
  };
}

const HSCodeFAQ = [
  {
    question: "What is an HS or HSN code?",
    answer: "The Harmonized System (HS) is the international code used to classify traded goods. Customs authorities use HS codes to record what is imported and exported.",
  },
  {
    question: "How are HS codes structured?",
    answer: "HS codes use 2 digits for a chapter, 4 digits for a heading, and 6 digits for the international sub-heading. National extensions add further digits, often 8 to 10, such as India's HSN code.",
  },
  {
    question: "How can I find the HS code for a product?",
    answer: "Search by product name or code to find a classification. Open the code's trade data to review importing and exporting markets and active shipment flows.",
  },
  {
    question: "Why do HS codes matter?",
    answer: "Using the right HS code helps you find relevant shipments, compare prices fairly, calculate duties and avoid customs delays. Search by code to research buyers and suppliers for a product.",
  },
];

const page = async () => {

    
      const result = await getHSChapters();
    
      const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];
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
      "name": "Global HS Code List",
      "item": "https://eximtradedata.com/global-hs-code-list"
    }
  ]
}
`}
        </script>
      </head>
    
    <main>
            <Search></Search>

        <section className=" px-4 py-12 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            Global HS Code and HSN Code List

          </h2>

          <h3 className="text-2xl  text-black mb-4">
            The Harmonized System classifies traded goods. Search by product name or code, then explore the trade data for that code.



          </h3>

          <div className=" mt-10 border border-gray-300  shadow-md">
            <table className="min-w-full text-left text-black border-collapse">
                  <thead className="sticky top-16  text-white z-10">

                <tr className="bg-gray-200 text-black">
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-40">
                    Chapter
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b w-[60%] border-gray-300 border-l">
                    Chapter Description
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
                    Import Data
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
                    Export Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      rowColors[idx % 3]
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-6 py-4 font-semibold border-b border-gray-200">
                      <a href={`global-hs-code-list/chapter-${row.hs_code}`} className="block w-full">chapter {row.hs_code}</a>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 border-l">
                      <a href={`global-hs-code-list/chapter-${row.hs_code}`} className="block w-full">{row.HS_code_Description}</a>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <a href={`/search/type-import/country-vietnam/hscode-${row.hs_code}`} className="block bg-blue-600 text-white p-2 text-x cursor-pointer underline text-center w-full">Chapter - {row.hs_code}</a>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <a href={`/search/type-export/country-vietnam/hscode-${row.hs_code}`} className="block text-center bg-gray-400 p-2 text-white underline cursor-pointer  w-full">Chapter - {row.hs_code}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

        <FAQSection faqs={HSCodeFAQ}/>
    </main>
    </>
  )
}

export default page

// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
