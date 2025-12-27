"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const MarketIntel = ({ country, desc, data }) => {
  const [activeTab, setActiveTab] = useState("import");

  const countryName =
    country?.replace(/^./, (s) => s.toUpperCase()) || "Country";

  /* ---------- SAFE ACCESS HELPERS ---------- */
  const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

  const importCountries = safeArray(data?.top_import_countries?.data);
  const exportCountries = safeArray(data?.top_export_countries?.data);

  const importProducts = safeArray(data?.top_import_products?.data);
  const exportProducts = safeArray(data?.top_export_products?.data);

  const buyers = safeArray(data?.buyers?.companies);
  const suppliers = safeArray(data?.suppliers?.companies);

  const renderTable = (type) => (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Top Countries */}
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
            {(type === "import" ? importCountries : exportCountries).map(
              (item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{item.country}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Top Products */}
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
            {(type === "import" ? importProducts : exportProducts).map(
              (item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{item.product}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              )
            )}
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
            {(type === "import" ? buyers : suppliers).map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-4"
        >
          {countryName} Import Export Data 2024–25
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-black text-center mb-10"
        >
          {desc}
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["import", "export"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium rounded-lg border ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab === "import" ? "Import" : "Export"}
            </button>
          ))}
        </div>

        {renderTable(activeTab)}
      </div>
    </section>
  );
};

export default MarketIntel;