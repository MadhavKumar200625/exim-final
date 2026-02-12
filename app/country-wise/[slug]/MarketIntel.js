"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const MarketIntel = ({ country, desc, data, section5 }) => {
  const countryName =
    country?.replace(/^./, (s) => s.toUpperCase()) || "Country";

  /* ---------------- STRAPI TRADE TABS ---------------- */
  const tradeTabs = section5?.trade_tabs || [];

  const hasStrapiTabs = Array.isArray(tradeTabs) && tradeTabs.length > 0;

  const [activeTab, setActiveTab] = useState(
    hasStrapiTabs
      ? tradeTabs[0]?.tab_type?.toLowerCase()
      : "import"
  );

  /* ---------------- OLD FALLBACK DATA ---------------- */
  const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

  const importCountries = safeArray(data?.top_import_countries?.data);
  const exportCountries = safeArray(data?.top_export_countries?.data);

  const importProducts = safeArray(data?.top_import_products?.data);
  const exportProducts = safeArray(data?.top_export_products?.data);

  const buyers = safeArray(data?.buyers?.companies);
  const suppliers = safeArray(data?.suppliers?.companies);

  const finalTitle =
    section5?.title || `${countryName} Import Export Data 2024–25`;

  const finalDescription =
    section5?.description || desc;

  /* ---------------- STRAPI RENDER TABLE ---------------- */
  const renderStrapiTables = () => {
    const currentTab = tradeTabs.find(
      (tab) => tab.tab_type?.toLowerCase() === activeTab
    );

    if (!currentTab) return null;

    return (
      <div className="grid gap-8 md:grid-cols-3">
        {currentTab.table_with_values?.map((table, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold">
              {table.title}
            </h3>

            <table className="w-full text-left text-black mt-4">
              {(table.label_1 || table.label_2) && (
                <thead className="border-b">
                  <tr>
                    {table.label_1 && (
                      <th className="py-2">{table.label_1}</th>
                    )}
                    {table.label_2 && (
                      <th className="py-2">{table.label_2}</th>
                    )}
                  </tr>
                </thead>
              )}

              <tbody>
                {table.table_row?.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{row.label_1_text}</td>
                    {table.label_2 && (
                      <td className="py-2">{row.label_2__text}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  /* ---------------- OLD RENDER (FALLBACK) ---------------- */
  const renderFallback = (type) => (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Countries */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import"
            ? `Top Imports of ${countryName} by Country`
            : `Top Exports of ${countryName} by Country`}
        </h3>

        <table className="w-full text-left text-black mt-4">
          <thead className="border-b">
            <tr>
              <th className="py-2">Country</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {(type === "import"
              ? importCountries
              : exportCountries
            ).map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.country}</td>
                <td className="py-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Products */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import"
            ? `Top Imports of ${countryName} by Product`
            : `Top Exports of ${countryName} by Product`}
        </h3>

        <table className="w-full text-left text-black mt-4">
          <thead className="border-b">
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {(type === "import"
              ? importProducts
              : exportProducts
            ).map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.product}</td>
                <td className="py-2">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buyers / Suppliers */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold">
          {type === "import"
            ? `${countryName} Buyers List`
            : `${countryName} Suppliers List`}
        </h3>

        <table className="w-full text-left text-black mt-4">
          <tbody>
            {(type === "import" ? buyers : suppliers).map(
              (item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{item}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  /* ---------------- RENDER ---------------- */
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-4"
        >
          {finalTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-black text-center mb-10"
        >
          {finalDescription}
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {(hasStrapiTabs
            ? tradeTabs.map((tab) => tab.tab_type.toLowerCase())
            : ["import", "export"]
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium rounded-lg border ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {hasStrapiTabs
          ? renderStrapiTables()
          : renderFallback(activeTab)}
      </div>
    </section>
  );
};

export default MarketIntel;