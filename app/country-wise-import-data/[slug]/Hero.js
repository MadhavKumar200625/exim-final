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
        <p
          className="uppercase tracking-wider text-sm font-semibold text-black"
          dangerouslySetInnerHTML={{
            __html: `${countryName} Import Data`,
          }}
        />

        {/* Main Heading (H1) */}
        <h1
          className="text-3xl md:text-4xl font-bold leading-tight"
          dangerouslySetInnerHTML={{
            __html:
              hero?.title ||
              `Get Latest ${countryName} Import Customs Shipment Trade Data`,
          }}
        />

        {/* Description */}
        {hero?.description && (
          <p
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />
        )}

        {/* Optional CTA text */}
        {hero?.ctaText && (
          <p
            className="italic text-gray-700"
            dangerouslySetInnerHTML={{ __html: hero.ctaText }}
          />
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
                <span
                  dangerouslySetInnerHTML={{
                    __html: btn.button_text,
                  }}
                />
              </a>
            ))
          ) : (
            <>
              <a
                href="/pricing"
                className="bg-blue-600 text-white text-lg px-6 py-2 shadow hover:scale-105 transition"
              >
                <span dangerouslySetInnerHTML={{ __html: "Online Data" }} />
              </a>

              <a
                href="/contact"
                className="border border-blue-600 text-black text-lg px-6 py-2 shadow hover:scale-105 transition"
              >
                <span dangerouslySetInnerHTML={{ __html: "Offline Data" }} />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;