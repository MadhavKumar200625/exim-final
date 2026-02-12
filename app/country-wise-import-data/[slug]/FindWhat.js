import React from "react";

const FindWhat = ({ country, section10 }) => {
  /* ---------- STRAPI DATA ---------- */
  const strapiButtons = section10?.button?.map((btn) => ({
    text: btn.button_text,
    link: btn.button_link,
  }));

  /* ---------- FALLBACK DATA ---------- */
  const defaultCountries = [
    "Bangladesh",
    "China",
    "Russia",
    "Australia",
    "Tanzania",
  ];

  const links =
    Array.isArray(strapiButtons) && strapiButtons.length > 0
      ? strapiButtons
      : defaultCountries.map((item) => ({
          text: item,
          link: `/${item.toLowerCase()}-import-data`,
        }));

  const finalTitle =
    section10?.Title ||
    `Find What ${country.toUpperCase()} Imports to Other Countries`;

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {finalTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindWhat;