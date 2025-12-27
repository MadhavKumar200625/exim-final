"use client";

import React from "react";

const num = (v) =>
  typeof v === "number" && !Number.isNaN(v) ? v : 0;

const Stats = ({ portName = "", data = {} }) => {
  const stats = [
    {
      label: "Shipment Sent",
      value: num(data.shipmentSent),
      color: "text-blue-600",
    },
    {
      label: "Buyers",
      value: num(data.buyers),
      color: "text-green-600",
    },
    {
      label: "Shipment Received",
      value: num(data.shipmentReceived),
      color: "text-indigo-600",
    },
    {
      label: "Suppliers",
      value: num(data.suppliers),
      color: "text-purple-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          {portName} Total Buyers and Suppliers Data
        </h2>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white shadow-lg border border-gray-200 p-8 rounded-2xl"
            >
              <div className={`text-4xl font-bold ${stat.color}`}>
                {stat.value.toLocaleString()}
              </div>
              <p className="text-black mt-3 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;