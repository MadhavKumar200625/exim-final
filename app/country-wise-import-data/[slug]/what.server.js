import React from "react";
import WhatChart from "./what.client";

export default function What({
  country,
  description = "",
  data = [],
  section4,
}) {
  const countryName = country.toUpperCase();

  /* ---------- STRAPI SECTION ---------- */
  const strapiSection = section4?.[0]; // repeatable component
  const finalTitle =
    strapiSection?.Title ||
    `What Does ${countryName} Import?`;

  const finalDescription =
    strapiSection?.Description || description;

  return (
    <section className="py-16 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — SERVER RENDERED (SEO SAFE) */}
        <div>
          <p className="uppercase tracking-wide font-semibold mb-2">
            {countryName} Top Imports
          </p>

          <h2 className="text-3xl font-bold mb-4">
            {finalTitle}
          </h2>

          {finalDescription && (
            <p
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: finalDescription }}
            />
          )}
        </div>

        {/* RIGHT — CLIENT ISOLATED (UNCHANGED) */}
        {Array.isArray(data) && data.length > 0 && (
          <WhatChart data={data} />
        )}
      </div>
    </section>
  );
}