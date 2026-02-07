'use client';

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

/* ---------- HELPERS ---------- */
const parseNumericValue = (val) => {
  if (!val) return 0;

  const cleaned = val.toString().replace(/[, $]/g, '').toUpperCase();

  if (cleaned.includes('B')) return parseFloat(cleaned) * 1000;
  if (cleaned.includes('M')) return parseFloat(cleaned);

  return parseFloat(cleaned) || 0;
};

/* ---------- COMPONENT ---------- */
const Stats = ({ country, imports, exports, data }) => {
  const statsFromStrapi = data?.figures?.length
  ? data.figures.map((item) => ({
      value: Number(item.imp_exp_dynamic_fig),
      label: item.Title,
      title: item.button?.[0]?.button_text,
      link: item.button?.[0]?.button_link || "/pricing",
    }))
  : null;

    const importValue = parseNumericValue(imports);
  const exportValue = parseNumericValue(exports);

  const stats = statsFromStrapi || [
  {
    value: importValue,
    label: "Total Import Value",
    title: `${country.toUpperCase()} Import Data`,
    link: "/pricing",
  },
  {
    value: exportValue,
    label: "Total Export Value",
    title: `${country.toUpperCase()} Export Data`,
    link: "/pricing",
  },
];

  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    // Do not animate for bots / reduced motion users
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCounts(stats.map(s => Math.round(s.value)));
      return;
    }

    const duration = 2000;
    const frameRate = 16;

    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / (duration / frameRate);

      const interval = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }

        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.round(current);
          return next;
        });
      }, frameRate);
    });
  }, [importValue, exportValue]);

  return (
    <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-black pb-8 text-xl sm:text-2xl md:text-3xl font-bold text-center">
        {country.replace(/^./, s => s.toUpperCase())} Import–Export Data Overview (2024–2025)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-2xl shadow bg-white border flex flex-col items-center"
          >
            <a
              href="/pricing"
              className="mb-4 border border-black px-3 py-2 text-sm hover:bg-slate-100 transition"
            >
              {stat.title}
            </a>

            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black my-3">
              ${counts[i].toLocaleString()}M
            </p>

            <p className="text-md sm:text-lg font-medium text-black">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;