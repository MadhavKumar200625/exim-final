"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ end, duration = 100 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration /10); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

const Stats = ({ companyName, data }) => {
  const stats = [
    { label: "Shipment Sent", value: data.shipmentSent, color: "text-blue-600" },
    { label: "Buyers", value: data.buyers, color: "text-green-600" },
    { label: "Shipment Received", value: data.shipmentReceived, color: "text-indigo-600" },
    { label: "Suppliers", value: data.suppliers, color: "text-purple-600" },
  ];

  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          {companyName} Total Buyers and Suppliers Data
        </motion.h2>

        {/* Stats grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg border border-gray-200 p-8 rounded-2xl"
            >
              <div className={`text-4xl font-bold ${stat.color}`}>
                <Counter end={stat.value} duration={2000} />
              </div>
              <p className="text-black mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;