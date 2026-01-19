"use client"
import React, { useState } from "react";
import DetailedTableTabs from "./DetailedTableTabs.client";
import UnlockDataForm from "@/app/Components/UnlockDataForm";

/* ---------------- FALLBACK DATA ---------------- */

const FALLBACK_IMPORT_DATA = [
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
];

const FALLBACK_EXPORT_DATA = [
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
  {
    hsCode: "84529090",
    description:
      "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
    qty: "9.5",
    origin: "Sri Lanka",
    destination: "China",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function DetailedTable({ portName, importData, exportData }) {
                const [showForm, setShowForm] = useState(false);

  const safeImportData =
    Array.isArray(importData) && importData.length > 0
      ? importData
      : FALLBACK_IMPORT_DATA;

  const safeExportData =
    Array.isArray(exportData) && exportData.length > 0
      ? exportData
      : FALLBACK_EXPORT_DATA;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
          Get Detailed {portName} Port Shipment Data
        </h2>

        <DetailedTableTabs
          importData={safeImportData}
          exportData={safeExportData}
        />

        <div className="flex justify-center mt-8">
          <button
             onClick={()=>{setShowForm(true)}}
            className="px-8 py-3 bg-blue-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View All
          </button>
        </div>
      </div>
      <UnlockDataForm
                                      isOpen={showForm}
                                      onClose={() => setShowForm(false)}
                                    />
    </section>
  );
}