"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScheduleADemo from "@/app/Components/ScheduleADemo";

const Overview = ({ companyName = "" , country, data = {} }) => {

  const safeCompany = companyName
    ? companyName.toUpperCase()
    : "COMPANY";
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="w-full mt-10 px-6 md:px-20">
      <h1 className="text-black text-3xl text-center mb-8 font-semibold">
        {safeCompany} – Overview
      </h1>

      {/* Export Overview */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">Export Overview</h2>

        <p className="text-black text-lg mb-4">
          As per our global export database, {companyName} made total{" "}
          <strong>{data.exportShipment?.toLocaleString?.() || 0}</strong>{" "}
          export shipments with a total export value of{" "}
          <strong>${data.exportValue?.toLocaleString?.() || 0}</strong>.
        </p>
      </div>

      {/* Import Overview */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3">Import Overview</h2>

        <p className="text-black text-lg mb-4">
          As per our global import database, {companyName} made total{" "}
          <strong>{data.importShipment?.toLocaleString?.() || 0}</strong>{" "}
          import shipments with a total import value of{" "}
          <strong>${data.importValue?.toLocaleString?.() || 0}</strong>.
        </p>
      </div>

      {/* Static CTA */}
      <div className="bg-blue-50 rounded-2xl text-center items-center shadow-md p-6 flex flex-col">
        <p className="text-black text-lg mb-6">
          Exim GTIS provides verified import-export intelligence across 200+
          countries. Identify buyers, suppliers, ports, HS codes and market
          trends with confidence.
        </p>

        <button
          onClick={()=>{setShowForm(true)}}
          className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 w-50 rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Schedule Demo <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <ScheduleADemo
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        country={country}
      />
    </section>
  );
};

export default Overview;