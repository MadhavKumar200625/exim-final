"use client";

import React from "react";

const num = (v) =>
  typeof v === "number" && !Number.isNaN(v) ? v : 0;

const Overview = ({ portName = "", stats = {} }) => {
  const shipments = num(stats.shipments);
  const buyers = num(stats.buyers);
  const suppliers = num(stats.suppliers);

  return (
    <section className="relative bg-linear-to-br from-gray-50 via-white to-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          {portName} Port Overview
        </h2>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-3">
          
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Shipments
            </h3>
            <p className="text-black">
              As per <span className="font-semibold">{portName}</span> port data,
              around{" "}
              <span className="font-bold text-blue-600">
                {shipments.toLocaleString()}
              </span>{" "}
              shipments were made during FY 2023–24.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Buyers
            </h3>
            <p className="text-black">
              There were around{" "}
              <span className="font-bold text-green-600">
                {buyers.toLocaleString()}
              </span>{" "}
              active buyers to{" "}
              <span className="font-semibold">{portName}</span> port.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Suppliers
            </h3>
            <p className="text-black">
              There were{" "}
              <span className="font-bold text-purple-600">
                {suppliers.toLocaleString()}
              </span>{" "}
              active suppliers from{" "}
              <span className="font-semibold">{portName}</span> port.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;