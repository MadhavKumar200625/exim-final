"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
const importData = {
  "Date": "Mar 31 2016 12:00AM",
  "HS Code": "30049099",
  "Product Details": "PHARMACEUTICAL PRODUCTS : ATRACURIUM BESYLATE INJECTION USP 10MG/ML 2.5 ML",
  "Quantity": 9450,
  "Quantity Unit": "NOS",
  "Value($)": 8127,
  "Country of Origin": "India",
  "Country of Destination": "Armenia",
  "Importer": "*****",
  "Exporter": "SWISS PARENTERALS LIMITED"
};

const exportData = {
  "Date": "Mar 18 2016 12:00AM",
  "HS Code": "90189099",
  "Product Details": "QUARTZ GLASS REFLECTOR (MONOBLOCK) WITH SILVER COATING O.D:14.75MM;I.D:11.8MM;LENGTH:46.0MM (PARTS FOR N.D YAG LASER-OP)",
  "Quantity": 48,
  "Quantity Unit": "PCS",
  "Value($)": 4752.63,
  "Country of Origin": "Armenia",
  "Country of Destination": "India",
  "Importer": "APPASAMY ASSOCIATES",
  "Exporter": "*****"
};


const DetailedTable = ({companyName  }) => {
  const [activeTab, setActiveTab] = useState("import");

  const renderTable = (data) => (
    <div className="overflow-x-auto mt-6">
    <table className="w-full border border-gray-300 text-left text-black">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="px-4 py-2 border-r w-1/3">Field Name</th>
          <th className="px-4 py-2">Detail</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([field, value], idx) => (
          <tr
            key={idx}
            className="border-b last:border-0 hover:bg-gray-50 transition"
          >
            <td className="px-4 py-2 border-r font-medium">{field}</td>
            <td className="px-4 py-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-black text-center mb-10"
        >
        {companyName} Import and Export Shipment Sample Data
        </motion.h2>

        {/* Tabs */}
        {/* <div className="flex justify-center gap-4 mb-8">
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
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {renderTable(importData)}
          {renderTable(exportData)}
        </div>

        {/* Table */}
        {/* {activeTab === "import" ? renderTable(importData) : renderTable(exportData)} */}

        
      </div>
    </section>
  );
};

export default DetailedTable;
