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
        Discover New Markets with the Exim GTIS Import Export Database
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Trade Data for 200+ Countries, All in One Place
      </h2>

      {/* Sub Heading */}
      <p className="text-base text-black text-center max-w-4xl mx-auto mb-4">
        Want to find buyers abroad? Our import export data reports show you who is buying and selling, and where. With the Exim Global Trade Intelligence System (GTIS), you can look up verified importers and exporters in more than 200 countries and contact the right people directly. You can also use the platform to follow market trends, price movements and product demand, with industry-wise insights and key performance indicators to help shape your plans. Check the top imports, exports, trading partners, companies and port volumes in major markets such as China, the USA, Turkey, Australia and across Europe.
      </p>

      {/* Italic Text */}
      <p className="italic text-black text-center mb-6">
        Not sure where to begin? Ask for a sample trade data report or book a free demo, and see what real shipment data can do for your business.
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
