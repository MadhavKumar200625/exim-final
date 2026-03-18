import React from "react";
import {
  Package,
  Globe,
  DollarSign,
  MapPin,
  Truck,
  BarChart,
} from "lucide-react";

/* ---------- STATIC FEATURES (Fallback) ---------- */
const FEATURES = [
  { icon: Package, text: "HS Code Wise Data" },
  { icon: Globe, text: "Global Buyer Details" },
  { icon: DollarSign, text: "Value & Price Trends" },
  { icon: MapPin, text: "Port Information" },
  { icon: Truck, text: "Shipment Details" },
  { icon: BarChart, text: "Market Analysis" },
];

export default function Includes({
  country,
  desc1 = "",
  desc2 = "",
  section3,
}) {
  const COUNTRY = country?.toUpperCase() || "";

  /* ---------- STRAPI SECTION ---------- */
  const strapiSection = section3?.[0]; // because repeatable

  const hasStrapiData =
    strapiSection &&
    strapiSection.Description &&
    strapiSection.table;

  const heading =
    strapiSection?.Title ||
    `What Does ${COUNTRY} Import Data Include?`;

  const description =
    strapiSection?.Description || desc1;

  const table = strapiSection?.table;

  return (
    <section className="py-16 bg-white text-black">
      {/* ---------- HEADER ---------- */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p
          className="uppercase tracking-wide text-sm font-semibold"
          dangerouslySetInnerHTML={{
            __html: `${country} Import Trade Data`,
          }}
        />

        <h2
          className="text-3xl font-bold mt-2"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {description && (
          <p
            className="mt-4 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {desc2 && !hasStrapiData && (
          <p
            className="mt-4 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          />
        )}
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="max-w-7xl mx-auto mt-12 px-4 grid lg:grid-cols-2 gap-10">
        {/* ---------- FEATURES ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {FEATURES.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center p-4 bg-linear-to-tr from-gray-100 to-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={`/countries/${item.text
                    .toLowerCase()
                    .replace(/ & /g, "-and-")
                    .replace(/\s+/g, "-")}.webp`}
                  alt={item.text}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <p
                className="text-lg font-medium text-center"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>

        {/* ---------- TABLE ---------- */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-gray-100 to-gray-200">
                <th
                  className="p-3 font-semibold border-r border-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: table?.label_1 || "Field Name",
                  }}
                />
                <th
                  className="p-3 font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: table?.label_2 || "Detail",
                  }}
                />
              </tr>
            </thead>

            <tbody>
              {hasStrapiData
                ? table.table_row?.map((row, idx) => (
                    <tr
                      key={row.id || idx}
                      className={
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td
                        className="p-3 font-medium border-r border-gray-300"
                        dangerouslySetInnerHTML={{
                          __html: row.label_1_text,
                        }}
                      />
                      <td
                        className="p-3"
                        dangerouslySetInnerHTML={{
                          __html: row.label_2__text,
                        }}
                      />
                    </tr>
                  ))
                : [
                    ["Date", "Jan 31, 2024"],
                    ["HS Code", "84831099"],
                    [
                      "Product Details",
                      `Sample Product from ${country}`,
                    ],
                    ["Quantity", "3111"],
                    ["Quantity Unit", "Kilo"],
                    ["Value ($)", "2,190"],
                    ["Country of Origin", country],
                    ["Destination Country", "Multiple Countries"],
                    ["Importer", "Verified Global Buyer"],
                  ].map(([field, detail], idx) => (
                    <tr
                      key={field}
                      className={
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td
                        className="p-3 font-medium border-r border-gray-300"
                        dangerouslySetInnerHTML={{ __html: field }}
                      />
                      <td
                        className="p-3"
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}