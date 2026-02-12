import React from "react";
import WhoChart from "./Who.client";

export default function Who({
  country,
  description = "",
  data = [],
  section5,
}) {
  const countryName = country.toUpperCase();

  /* ---------- STRAPI SECTION ---------- */
  const finalTitle =
    section5?.Title ||
    `Where Does ${countryName} Import From?`;

  const finalDescription =
    section5?.Description || description;

  const buttonText =
    section5?.button?.[0]?.button_text ||
    "Get Country Wise Data";

  const buttonLink =
    section5?.button?.[0]?.button_link ||
    "/contact";

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT — CLIENT CHART ONLY (UNCHANGED) */}
        {Array.isArray(data) && data.length > 0 && (
          <WhoChart data={data} />
        )}

        {/* RIGHT — SERVER RENDERED CONTENT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-2">
            {countryName}’s Top Import Partners
          </p>

          <h2 className="text-3xl font-bold mb-4">
            {finalTitle}
          </h2>

          {finalDescription && (
            <p
              className="text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: finalDescription }}
            />
          )}

          <div className="mt-6 flex justify-center md:justify-start">
            <a href={buttonLink}>
              <button className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition">
                {buttonText}
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}