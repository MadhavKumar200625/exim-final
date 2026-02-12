import React from "react";

export default function FindWhat({ country, section10 }) {
  /* ---------- STRAPI DATA ---------- */
  const strapiTitle = section10?.Title;

  const strapiButtons = Array.isArray(section10?.button)
    ? section10.button.map((btn) => ({
        title: btn.button_text,
        url: btn.button_link,
      }))
    : [];

  /* ---------- STATIC FALLBACK ---------- */
  const fallbackCountries = [
    "Bangladesh",
    "China",
    "Russia",
    "Australia",
    "Tanzania",
  ];

  const fallbackButtons = fallbackCountries.map((name) => ({
    title: name,
    url: `/${name.toLowerCase()}-export-data`,
  }));

  const finalButtons =
    strapiButtons.length > 0 ? strapiButtons : fallbackButtons;

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {strapiTitle ||
            `Find What ${country.toUpperCase()} Exports to Other Countries`}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {finalButtons.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold transition-transform duration-300 transform hover:scale-105"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}