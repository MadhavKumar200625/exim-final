import React from "react";
import WhoChartClient from "./Who.client";

export default function Who({ country, description, data = [] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* ---------- LEFT: CHART (CLIENT ONLY) ---------- */}
        {data.length > 0 && (
          <WhoChartClient data={data} />
        )}

        {/* ---------- RIGHT: TEXT (SERVER / SEO) ---------- */}
        <div>
          <p className="text-sm font-semibold text-black uppercase tracking-wider mb-2">
            {country.toUpperCase()}’s Top Export Partners
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">
            Where Does {country.toUpperCase()} Export To?
          </h2>

          {description && (
            <p className="text-gray-700 mb-4">
              {description}
            </p>
          )}

          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow hover:scale-105 transition"
            >
              Get Country Wise Data
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}