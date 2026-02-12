import React from "react";

const GlobalImpact = ({ section8, points = [] }) => {
  /* ---------- STRAPI DATA ---------- */
  const title =
    section8?.Title || "Make an impact in the global market";

  const imageUrl =
    section8?.image?.image_url ||
    "/countries/common-dashboard.webp";

  const imageAlt =
    section8?.image?.image_text ||
    "Global Trade Intelligence Dashboard";

  const ctaText =
    section8?.button?.[0]?.button_text || "Get Free Trial";

  const ctaLink =
    section8?.button?.[0]?.button_link || "/pricing";

  /* ---------- BULLET POINTS ---------- */
  const finalPoints =
    section8?.Description
      ? section8.Description.split("\n")
          .map((p) => p.trim())
          .filter(Boolean)
      : points;

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-96">
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Exim Global Trade Intelligence System
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">
            {title}
          </h2>

          {/* Points List */}
          <ul className="mb-8 space-y-3">
            {finalPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <a
              href={ctaLink}
              className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition inline-flex"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;