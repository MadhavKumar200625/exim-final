import React from "react";
import WhatChartClient from "./What.client";

export default function What({
  country,
  description,
  data = [],
  section4,
}) {
  const countryName = country?.toUpperCase() || "";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT CONTENT (SEO SAFE) ---------- */}
        <div>
          <p className="uppercase tracking-wide font-semibold mb-2 text-black">
            {countryName} Top 10 Major Exports
          </p>

          <h2 className="text-3xl font-bold mb-4 text-black">
            {section4?.Title ||
              `What Does ${countryName} Export?`}
          </h2>

          {/* STRAPI DESCRIPTION */}
          {section4?.Description ? (
            <p
              className="text-lg mb-4 text-black"
              dangerouslySetInnerHTML={{
                __html: section4.Description,
              }}
            />
          ) : (
            description && (
              <p
                className="text-lg mb-4 text-black"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )
          )}
        </div>

        {/* ---------- RIGHT CHART (CLIENT ONLY) ---------- */}
        {Array.isArray(data) && data.length > 0 && (
          <WhatChartClient data={data} />
        )}
      </div>
    </section>
  );
}