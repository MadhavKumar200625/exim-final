import React from "react";

/* ---------- DATA ---------- */
const features = [
  "HS Code Wise Data",
  "Global Buyer Details",
  "Value & Price Trends",
  "Port Information",
  "Shipment Details",
  "Market Analysis",
];

/* ---------- HELPERS ---------- */
const capitalize = (v = "") => v.replace(/^./, (s) => s.toUpperCase());

const imageSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

/* ---------- COMPONENT ---------- */
export default function Includes({ country, desc1, desc2 }) {
  const countryName = capitalize(country);

  return (
    <section className="py-16 bg-white">
      {/* ---------- TOP CONTENT ---------- */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold text-black">
          {countryName} Export Trade Data
        </p>

        <h2 className="text-3xl font-bold mt-2 text-black">
          What Does {countryName} Export Data Include?
        </h2>

        {desc1 && (
          <p
            className="mt-4 text-base leading-relaxed text-black"
            dangerouslySetInnerHTML={{ __html: desc1 }}
          />
        )}

        {desc2 && (
          <p
            className="mt-4 text-base leading-relaxed text-black"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          />
        )}
      </div>

      {/* ---------- CONTENT GRID ---------- */}
      <div className="max-w-7xl mx-auto mt-12 px-4 grid lg:grid-cols-2 gap-10">
        {/* ---------- LEFT: FEATURES ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {features.map((text) => (
            <div
              key={text}
              className="flex flex-col items-center p-4 bg-linear-to-tr from-gray-100 to-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={`/countries/${imageSlug(text)}.webp`}
                alt={text}
                width={180}
                height={140}
                loading="lazy"
                className="object-contain mb-4"
              />

              <p className="text-lg font-medium text-black text-center">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- RIGHT: SAMPLE TABLE ---------- */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-gray-100 to-gray-200">
                <th className="p-3 font-semibold text-black border-r border-gray-300">
                  Field Name
                </th>
                <th className="p-3 font-semibold text-black">
                  Detail
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Date", "Jan 31 2024"],
                ["HS Code", "84831099"],
                ["Product Details", `Sample Product from ${countryName}`],
                ["Quantity", "3111"],
                ["Quantity Unit", "Kilo"],
                ["Value ($)", "2190"],
                ["Country of Origin", countryName],
                ["Destination Country", "Multiple Countries"],
                ["Exporter", "Sample Exporter LLC"],
                ["Importer", "Verified Global Buyer"],
              ].map(([field, detail], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-3 font-medium text-black border-r border-gray-300">
                    {field}
                  </td>
                  <td className="p-3 text-black">
                    {detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}