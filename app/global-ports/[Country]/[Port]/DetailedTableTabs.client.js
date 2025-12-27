"use client";

import { useState } from "react";

function Table({ data }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-gray-300 text-left text-black">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2 border-r">HS Code</th>
            <th className="px-4 py-2 border-r">Product Description</th>
            <th className="px-4 py-2 border-r">Qty</th>
            <th className="px-4 py-2 border-r">Origin</th>
            <th className="px-4 py-2 border-r">Destination</th>
            <th className="px-4 py-2 border-r">Importer</th>
            <th className="px-4 py-2">Exporter</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                <td className="px-4 py-2 border-r">{item.hsCode || "-"}</td>
                <td className="px-4 py-2 border-r">{item.description || "-"}</td>
                <td className="px-4 py-2 border-r">{item.qty || "-"}</td>
                <td className="px-4 py-2 border-r">{item.origin || "-"}</td>
                <td className="px-4 py-2 border-r">{item.destination || "-"}</td>
                <td className="px-4 py-2 border-r">*****</td>
                <td className="px-4 py-2">*****</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function DetailedTableTabs({ importData, exportData }) {
  const [activeTab, setActiveTab] = useState("import");

  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
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

      {activeTab === "import" ? (
        <Table data={importData} />
      ) : (
        <Table data={exportData} />
      )}
    </>
  );
}