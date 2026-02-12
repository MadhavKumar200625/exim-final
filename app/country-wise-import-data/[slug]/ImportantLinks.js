import React from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const ImportantLinks = ({ country, section9 }) => {
  const normalizedCountry = country?.toLowerCase();

  /* ---------- STRAPI LINKS ---------- */
  const strapiLinks = section9?.button?.map((btn) => ({
    title: btn.button_text,
    url: btn.button_link,
  }));

  /* ---------- FALLBACK LINKS ---------- */
  const defaultLinks = [
    {
      title: `${country.toUpperCase()} Import Data`,
      url: `/country-wise-${normalizedCountry}-import-data`,
    },
    {
      title: `${country.toUpperCase()} Export Data`,
      url: `/country-wise-${normalizedCountry}-export-data`,
    },
    {
      title: `${country.toUpperCase()} Import Export Products`,
      url: `/global-products`,
    },
    {
      title: "Global Port Volume Report",
      url: `/global-ports`,
    },
    {
      title: "Global Companies List",
      url: `/global-companies-list`,
    },
    {
      title: "Country Wise Trade Data",
      url: `/import-export-data-country-wise`,
    },
    {
      title: "Global Trade API",
      url: `/api-development-and-integration-company`,
    },
  ];

  const links =
    Array.isArray(strapiLinks) && strapiLinks.length > 0
      ? strapiLinks
      : defaultLinks;

  const finalTitle =
    section9?.Title ||
    `Important links related to ${country.replace(
      /^./,
      (s) => s.toUpperCase()
    )} Import and Export Data`;

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
          Important Links
        </p>

        <h2 className="text-3xl font-bold text-black mb-8">
          {finalTitle}
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-3">
                <ChevronRight
                  size={18}
                  className="text-sky-500 shrink-0"
                />
                <span className="text-black font-medium underline group-hover:text-sky-600 transition">
                  {item.title}
                </span>
              </div>

              <ArrowUpRight
                size={18}
                className="text-black group-hover:text-sky-500 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;