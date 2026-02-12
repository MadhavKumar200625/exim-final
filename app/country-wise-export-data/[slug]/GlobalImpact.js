import React from "react";

export default function GlobalImpact({
  points = [],
  section8,
}) {
  /* ---------- STRAPI DATA ---------- */
  const strapiTitle = section8?.Title;

  const strapiPoints = section8?.Description
    ? section8.Description.split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const finalPoints =
    strapiPoints.length > 0 ? strapiPoints : points;

  const imageUrl =
    section8?.image?.[0]?.image_url ||
    "/countries/common-dashboard.webp";

  const imageAlt =
    section8?.image?.[0]?.image_text ||
    "Global Trade Intelligence Dashboard";

  const buttonText =
    section8?.button?.[0]?.button_text ||
    "Get Free Trial";

  const buttonLink =
    section8?.button?.[0]?.button_link ||
    "/pricing";

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* ---------- LEFT IMAGE ---------- */}
        <div className="flex justify-center">
          <div className="relative w-full h-96">
            <img
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={400}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* ---------- RIGHT CONTENT ---------- */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Exim Global Trade Intelligence System
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">
            {strapiTitle || "Make an impact in the global market"}
          </h2>

          {/* Points */}
          {finalPoints.length > 0 && (
            <ul className="mb-8 space-y-3">
              {finalPoints.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <a
              href={buttonLink}
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