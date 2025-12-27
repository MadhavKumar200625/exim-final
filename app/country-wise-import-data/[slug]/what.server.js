import React from "react";
import WhatChart from "./what.client";

export default function What({ country, description = "", data = [] }) {
  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — SERVER RENDERED (SEO SAFE) */}
        <div>
          <p className="uppercase tracking-wide font-semibold mb-2">
            {country.toUpperCase()} Top Imports
          </p>

          <h2 className="text-3xl font-bold mb-4">
            What Does {country.toUpperCase()} Import?
          </h2>

          {description && (
            <p
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        {/* RIGHT — CLIENT ISOLATED */}
        {Array.isArray(data) && data.length > 0 && (
          <WhatChart data={data} />
        )}

      </div>
    </section>
  );
}