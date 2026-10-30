'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: 134002002, label: "Global Shipments" },
  { value: 942542, label: "Global Verified Buyers" },
  { value: 802870, label: "Global Verified Suppliers" },
];

export default function Hero() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total animation time
    const frameRate = 16; // ~60fps
    const intervals = [];

    stats.forEach((stat, i) => {
      let current = 0;
      const steps = duration / frameRate;
      const increment = stat.value / steps;

      const interval = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }

        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.floor(current);
          return next;
        });
      }, frameRate);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="bg-linear-to-b from-sky-100 via-sky-50 to-white pt-28 pb-12 px-6">
      {/* Top Text */}
      <p className="text-lg font-medium text-black text-center mb-2">
        International Trade Data by Country
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Import Export Data by Country
      </h2>

      {/* Sub Heading */}
      <p className="text-base text-black text-center max-w-4xl mx-auto mb-4">
        Our country-wise import export data covers more than 200 countries. Open a country to see its top imports and exports, trading partners, active importers and exporters, and port volumes. Use Exim GTIS to look up companies and follow market trends, price movements and product demand.
      </p>

      {/* Italic Text */}
      <p className="italic text-black text-center mb-6">
        Browse by region: Asia, Africa, Europe, North America, Oceania and South America. Not sure where to begin? Ask for a sample trade data report or book a free demo.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <a
          href="/contact"
          className="bg-blue-600 text-xl text-white px-6 py-2 shadow hover:scale-105 transition"
        >
          Get a Sample Report
        </a>

        <a
          href="/contact"
          className="bg-green-600 text-xl text-white px-6 py-2 shadow hover:scale-105 transition"
        >
          Book a Free Demo
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-white border"
          >
            <p className="text-3xl md:text-4xl font-bold text-black">
              {counts[i].toLocaleString()}
            </p>
            <p className="text-lg font-medium text-black">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
