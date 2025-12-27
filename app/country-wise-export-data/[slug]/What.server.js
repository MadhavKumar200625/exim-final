import React from "react";
import WhatChartClient from "./What.client";

const normalizeValue = (v = "") => v;

export default function What({ country, description, data = [] }) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT CONTENT (SEO SAFE) ---------- */}
        <div>
          <p className="uppercase tracking-wide font-semibold mb-2 text-black">
            {country.toUpperCase()} Top 10 Major Imports
          </p>

          <h2 className="text-3xl font-bold mb-4 text-black">
            What Does {country.toUpperCase()} Import?
          </h2>

          {description && (
            <p
              className="text-lg mb-4 text-black"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        {/* ---------- RIGHT CHART (CLIENT ONLY) ---------- */}
        {data.length > 0 && (
          <WhatChartClient data={data} />
        )}
      </div>
    </section>
  );
}