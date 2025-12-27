"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const MarketIntel = ({ companyName, importData, exportData }) => {
  const [activeTab, setActiveTab] = useState("import");


  const renderTable = (data) => (
    <div className="grid gap-8 md:grid-cols-2">
      {/* HS Codes */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold ">Top {activeTab}ed HS Code</h3>
        <h3 className="text-md  mb-4">Shipment Wise</h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">HS Code</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {data.hsCodes.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.code}</td>
                <td className="py-2">{item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Countries */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">Top {activeTab}ing Countries</h3>
        <h3 className="text-md  mb-4">Shipment Wise</h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">Country</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {data.countries.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.qty.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold ">Top {activeTab == "export" ?"Loading":"Unloading"}</h3>
        <h3 className="text-md  mb-4">Shipment Wise</h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">Port</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {data.ports.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.qty.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold ">Top {activeTab=="export"?"Buyers":"Suppliers"}</h3>
        <h3 className="text-md  mb-4">Shipment Wise</h3>

        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">{activeTab=="export"?"Buyers":"Suppliers"}</th>
              <th className="py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {activeTab=="export"?data.buyers.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.qty.toLocaleString()}</td>
              </tr>
            )):data.suppliers.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.qty.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-black text-center mb-2"
        >
          {companyName} Import and Export Data Shipment Analysis
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl  text-black text-center mb-10"
        >
          {companyName}  Market Intelligence Report
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("import")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "import"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Import
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "export"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Export
          </button>
        </div>

        {/* Content */}
        {activeTab === "import" ? renderTable(importData) : renderTable(exportData)}
      </div>
    </section>
  );
};

export default MarketIntel;