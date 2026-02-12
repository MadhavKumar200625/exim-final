import React from "react";
import WhoChartClient from "./Who.client";

export default function Who({
  country,
  description,
  data = [],
  section5,
}) {
  const countryName = country?.toUpperCase() || "";

  const buttonText =
    section5?.button?.[0]?.button_text || "Get Country Wise Data";

  const buttonLink =
    section5?.button?.[0]?.button_link || "/contact";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* ---------- LEFT: CHART (CLIENT ONLY) ---------- */}
        {Array.isArray(data) && data.length > 0 && (
          <WhoChartClient data={data} />
        )}

        {/* ---------- RIGHT: TEXT (SERVER / SEO) ---------- */}
        <div>
          <p className="text-sm font-semibold text-black uppercase tracking-wider mb-2">
            {countryName}’s Top Export Partners
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">
            {section5?.Title ||
              `Where Does ${countryName} Export To?`}
          </h2>

          {/* STRAPI DESCRIPTION */}
          {section5?.Description ? (
            <p
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{
                __html: section5.Description,
              }}
            />
          ) : (
            description && (
              <p
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )
          )}

          {/* BUTTON */}
          <div className="mt-6 flex justify-center">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow hover:scale-105 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}