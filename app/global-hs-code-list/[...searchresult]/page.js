import React from "react";
import Search from "../Search";
import Link from "next/link";
import FAQSection from "@/app/Components/FAQ";
import { getHSCodeData } from "@/lib/global-hs-code/getHsCodeData";
import DataNotFound from "@/app/Components/DataNotFound";

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

export async function generateMetadata({ params }) {
  params = await params
  const segments = params?.searchresult || [];

  /* -------------------------
     DEFAULT (ROOT)
  -------------------------- */
  let title =
    "Global HS Code List | HS Code Search by Product";
  let description =
    "Look up HS and HSN codes by product and see trade data for each classification. Search by product name or code with Exim Trade Data.";
  let keywords =
    "global hs code list, hs code search, harmonized system codes, import export hs code, custom tariffs codes, international trade hs codes";

  if (segments.length === 0) {
    return { title, description /* keywords */ };
  }

  const seg1 = segments[0];
  const seg2 = segments[1];

  /* =========================
     CHAPTER
     /chapter-01
  ========================= */
  if (seg1.startsWith("chapter-")) {
    const chapter = seg1.replace("chapter-", "");

    const data = await getHSCodeData("chapter", chapter);
    const chapterDesc = data?.rows?.[0]?.item_description || "";

    title = `Chapter ${chapter} - ${chapterDesc} | Global HS Code List | Exim Trade Data`;
    description = `Explore Chapter ${chapter} of the Global HS Code List: detailed Harmonized System codes for ${chapterDesc.toLowerCase()}. Find import-export classification codes and product descriptions.`;
    keywords = `Chapter ${chapter}, ${chapterDesc} HS Codes, harmonized system ${chapterDesc.toLowerCase()}, global hs code list`;

    return {
      title,
      description,
      // keywords,
      alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
      ...(!data?.rows?.length && { robots: { index: false, follow: true } }),
    };
  }

  /* =========================
     HEADING
     /heading-0101
  ========================= */
  if (seg1.startsWith("heading-")) {
    const headingCode = seg1.replace("heading-", "");

    const data = await getHSCodeData("heading", headingCode);
    const headingDesc = data?.rows?.[0]?.item_description || "";

    title = `Heading ${headingCode} - ${headingDesc} | Global HS Code List`;
    description = `Explore Heading ${headingCode} in the Global HS Code List- covering ${headingDesc.toLowerCase()} with detailed harmonized system (HS) classification codes used in international trade.`;
    keywords = `Heading ${headingCode}, ${headingDesc} HS Code, harmonized system codes, global hs code list, import export classification`;

    return {
      title,
      description,
      // keywords,
      alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
      ...(!data?.rows?.length && { robots: { index: false, follow: true } }),
    };
  }

  /* =========================
     HS CODE ONLY
     /hs-code-01011010
  ========================= */
  if (seg1.startsWith("hs-code-") && segments.length === 1) {
    const hs = seg1.replace("hs-code-", "");

    const data = await getHSCodeData("hs", hs);
    const hsDesc = data?.heading || "";

    title = `HS Code ${hs} - ${hsDesc} | Global HS Code List`;
    description = `Discover HS Code ${hs} in the Global HS Code List: classification for ${hsDesc.toLowerCase()} used in international trade. Learn about HSN Codes for precise import-export documentation.`;
    keywords = `HS Code ${hs}, ${hsDesc} HS Code, harmonized system code, hsn code, global hs code list, import export classification, HS Code ${hs} description`;

    return {
      title,
      description,
      // keywords,
      alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
      ...(!data?.rows?.length && { robots: { index: false, follow: true } }),
    };
  }

  /* =========================
     PRODUCT ONLY
     /product-mobile
  ========================= */
  if (seg1.startsWith("product-") && segments.length === 1) {
    const product = seg1.replace("product-", "").replace(/-/g, " ");
    const productTitle =
      product.charAt(0).toUpperCase() + product.slice(1);
    const data = await getHSCodeData("product", product);

    title = `HS Codes for ${productTitle} Products | Global HS Code List`;
    description = `Explore Harmonized System Code for ${productTitle} Products in the Global HS Code List. Find HS Classifications for ${productTitle.toLowerCase()} and related items to support accurate import-export documentation and customs compliance.`;
    keywords = `HS Code ${productTitle}, ${productTitle.toLowerCase()} hs code, harmonized system code ${productTitle.toLowerCase()}, global hs code list, import export ${productTitle.toLowerCase()} classification`;

    return {
      title,
      description,
      // keywords,
      alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
      ...(!data?.rows?.length && { robots: { index: false, follow: true } }),
    };
  }

  /* =========================
     HS + PRODUCT
     /hs-code-85/product-mobile
  ========================= */
  if (
    seg1.startsWith("hs-code-") &&
    seg2?.startsWith("product-")
  ) {
    const hs = seg1.replace("hs-code-", "");
    const product = seg2.replace("product-", "").replace(/-/g, " ");
    const productTitle =
      product.charAt(0).toUpperCase() + product.slice(1);
    const data = await getHSCodeData("hs-product", hs, product);

    title = `HS Code ${hs} - ${productTitle} | Global HS Code List | Exim Trade Data`;
    description = `Browse HS Code ${hs} entries for ${productTitle.toLowerCase()} in the Global HS Code List. Find harmonized system codes for ${productTitle.toLowerCase()} and related items used in global import export classification.`;
    keywords = `HS Code ${hs}, HS Code ${productTitle}, ${productTitle.toLowerCase()} hs code, harmonized system code ${productTitle.toLowerCase()}, global hs code list, import export mobile classification`;

    return {
      title,
      description,
      // keywords,
      alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
      ...(!data?.rows?.length && { robots: { index: false, follow: true } }),
    };
  }

  /* -------------------------
     FALLBACK
  -------------------------- */
  return {
    title,
    description,
    // keywords,
    alternates: { canonical: `https://eximtradedata.com/global-hs-code-list/${segments.join("/").toLowerCase()}` },
    robots: { index: false, follow: true },
  };
}
function parseSegment(seg) {
  if (seg.startsWith("hs-code-")) {
    return { type: "hs", value: seg.replace("hs-code-", "") };
  }
  if (seg.startsWith("hs-")) {
    return { type: "hs", value: seg.replace("hs-", "") };
  }
  if (seg.startsWith("product-")) {
    return {
      type: "product",
      value: seg.replace("product-", "").replace(/-/g, " "),
    };
  }
  if (seg.startsWith("chapter-")) {
    return { type: "chapter", value: seg.replace("chapter-", "") };
  }
  if (seg.startsWith("heading-")) {
    return { type: "heading", value: seg.replace("heading-", "") };
  }
  return null;
}
export default async function Page({ params }) {
  params = await params
  const segments = params.searchresult;

  let type = "";
  let value = "";
  let extra = "";

  // ONE segment
  if (segments.length === 1) {
    const parsed = parseSegment(segments[0]);
    if (!parsed) return <p>Invalid search</p>;

    type = parsed.type;
    value = parsed.value;
  }

  // TWO segments (HS + PRODUCT)
  if (segments.length === 2) {
    const p1 = parseSegment(segments[0]);
    const p2 = parseSegment(segments[1]);

    if (p1?.type === "hs" && p2?.type === "product") {
      type = "hs-product";
      value = p1.value;
      extra = p2.value;
    }
  }

  const data = await getHSCodeData(type, value, extra);

  if (!data?.rows?.length) {
    return <DataNotFound subject="HS code data" />;
  }

  const { rows, heading, tc1Heading } = data;
  const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];
  return (
    <main>
      <Search></Search>

      <section className=" px-4 py-12 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            {type == "hs"
              ? `Harmonized System code ${value} - ${heading}`
              : `${
                  type == "chapter"
                          ? `${heading} import export HS code data`
                    : `${
                        type == "heading"
                          ? `HS code heading ${value} - ${heading}`
                          : `Harmonized System code`
                      }`
                }`}
          </h2>

          <h3 className="text-2xl  text-black mb-4">
            Search by product name or code to find a classification, then explore trade data for that code.
          </h3>

          <div className="mt-10 border border-gray-300  shadow-md">
            <table className="min-w-full text-left text-black border-collapse">
              <thead className="sticky top-16 z-10">
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-40">
                    {type == "hs"
                      ? `Heading - ${value}`
                      : tc1Heading ?? "HS Code"}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-[55%] border-l">
                    {heading ?? "HS Code Description"}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">Import Data</th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">Export Data</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      rowColors[idx % 3]
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-6 py-4 font-semibold border-b border-gray-200">
                      <a
                        href={`/global-hs-code-list/${
                          type == "heading"
                            ? `hs-code-${row.hs_code}`
                            : `${type=="hs"?`hs-code-${row.hs_code}`:`heading-${row.hs_code}`}`
                        }`}
                        className="block w-full"
                      >
                        {type == "chapter"
                          ? `Heading ${row.hs_code}`
                          : row.hs_code}
                      </a>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 border-l">
                      <a
                        href={`/global-hs-code-list/${
                          type == "heading"
                            ? `hs-code-${row.hs_code}`
                            : `${type=="hs"?`hs-code-${row.hs_code}`:`heading-${row.hs_code}`}`
                        }`}
                        className="block  w-full"
                      >
                        {row.item_description}
                      </a>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <a
                        href={`/search/type-import/country-vietnam/hscode-${row.hs_code}`}
                        className="block bg-blue-600 text-white p-2 text-x cursor-pointer underline text-center w-full"
                      >
                        HS Code - {row.hs_code}
                      </a>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <a
                        href={`/search/type-export/country-vietnam/hscode-${row.hs_code}`}
                        className="block text-center bg-gray-400 p-2 text-white underline cursor-pointer  w-full"
                      >
                        HS Code - {row.hs_code}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection title="FAQs About Global HS Code List" faqs={HSCodeFAQ} />
    </main>
  );
};

// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
