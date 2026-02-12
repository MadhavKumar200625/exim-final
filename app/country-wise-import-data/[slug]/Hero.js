import Link from "next/link";
import React from "react";

/* ---------- HELPERS ---------- */
const formatCountry = (country = "") =>
  country
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

const Hero = ({ country, hero }) => {
  const countryName = formatCountry(country);

  const buttons = Array.isArray(hero?.buttons) ? hero.buttons : [];

  return (
    <section className="w-full bg-white text-black pt-28 pb-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">

        {/* Eyebrow Title */}
        <p className="uppercase tracking-wider text-sm font-semibold text-black">
          {countryName} Import Data
        </p>

        {/* Main Heading (H1) */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {hero?.title ||
            `Get Latest ${countryName} Import Customs Shipment Trade Data`}
        </h1>

        {/* Description */}
        {hero?.description && (
          <p className="text-lg leading-relaxed">
            {hero.description}
          </p>
        )}

        {/* Optional CTA text */}
        {hero?.ctaText && (
          <p className="italic text-gray-700">{hero.ctaText}</p>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-2">
          {buttons.length > 0 ? (
            buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.button_link || "#"}
                className={
                  index === 0
                    ? "bg-blue-600 text-white text-lg px-6 py-2 shadow hover:scale-105 transition"
                    : "border border-blue-600 text-black text-lg px-6 py-2 shadow hover:scale-105 transition"
                }
              >
                {btn.button_text}
              </a>
            ))
          ) : (
            <>
              <a
                href="/pricing"
                className="bg-blue-600 text-white text-lg px-6 py-2 shadow hover:scale-105 transition"
              >
                Online Data
              </a>

              <a
                href="/contact"
                className="border border-blue-600 text-black text-lg px-6 py-2 shadow hover:scale-105 transition"
              >
                Offline Data
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;