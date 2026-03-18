'use client';

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

/* ---------- HELPER ---------- */
const parseValue = (val = "") => {
  const str = val.toString().trim().toUpperCase();

  const unit = str.includes("B")
    ? "B"
    : str.includes("M")
    ? "M"
    : "";

  const number = parseFloat(str.replace(/[^0-9.]/g, "")) || 0;

  return { number, unit };
};

/* ---------- COMPONENT ---------- */
const Stats = ({ country, imports, exports, data }) => {

  const statsFromStrapi = data?.figures?.length
    ? data.figures.map((item) => {
        const { number, unit } = parseValue(item.imp_exp_dynamic_fig);

        return {
          value: number,
          unit,
          label: item.Title,
          title: item.button?.[0]?.button_text,
          link: item.button?.[0]?.button_link || "/pricing",
        };
      })
    : null;

  const { number: importValue, unit: importUnit } = parseValue(imports);
  const { number: exportValue, unit: exportUnit } = parseValue(exports);

  const stats = statsFromStrapi || [
    {
      value: importValue,
      unit: importUnit,
      label: "Total Import Value",
      title: `${country.toUpperCase()} Import Data`,
      link: "/pricing",
    },
    {
      value: exportValue,
      unit: exportUnit,
      label: "Total Export Value",
      title: `${country.toUpperCase()} Export Data`,
      link: "/pricing",
    },
  ];

  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
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

        setCounts((prev) => {
          const next = [...prev];
          next[i] = Number(current.toFixed(1));
          return next;
        });
      }, frameRate);
    });
  }, [imports, exports]);

  return (
    <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-12">
      <h2
        className="text-black pb-8 text-xl sm:text-2xl md:text-3xl font-bold text-center"
        dangerouslySetInnerHTML={{
          __html: `${country.replace(/^./, (s) => s.toUpperCase())} Import–Export Data Overview (2024–2025)`,
        }}
      />

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
              href={stat.link}
              className="mb-4 border border-black px-3 py-2 text-sm hover:bg-slate-100 transition"
              dangerouslySetInnerHTML={{
                __html: stat.title,
              }}
            />

            {/* COUNTER */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black my-3">
              ${counts[i].toLocaleString()}{stat.unit}
            </p>

            <p
              className="text-md sm:text-lg font-medium text-black"
              dangerouslySetInnerHTML={{
                __html: stat.label,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;