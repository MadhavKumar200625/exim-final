import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ---------- STATIC FALLBACK DATA ---------- */
const continentsFallback = {
  ASIA: [
    { name: "India", code: "in" },
    { name: "China", code: "cn" },
    { name: "Japan", code: "jp" },
    { name: "Turkey", code: "tr" },
    { name: "South Korea", code: "kr" },
  ],
  AFRICA: [
    { name: "Chad", code: "td" },
    { name: "Ghana", code: "gh" },
    { name: "Kenya", code: "ke" },
    { name: "Tanzania", code: "tz" },
    { name: "South Africa", code: "za" },
  ],
  EUROPE: [
    { name: "UK", code: "gb" },
    { name: "Spain", code: "es" },
    { name: "Netherlands", code: "nl" },
    { name: "Germany", code: "de" },
  ],
  AMERICA: [
    { name: "US", code: "us" },
    { name: "Mexico", code: "mx" },
    { name: "Argentina", code: "ar" },
    { name: "Canada", code: "ca" },
    { name: "Brazil", code: "br" },
  ],
  OCEANIA: [
    { name: "Fiji", code: "fj" },
    { name: "Australia", code: "au" },
    { name: "New Zealand", code: "nz" },
  ],
};

/* ---------- COMPONENT ---------- */
export default function CountryLinksSection({ section2 }) {
  const hasStrapiData =
    section2?.Continent_name &&
    Array.isArray(section2.Continent_name) &&
    section2.Continent_name.length > 0;

  return (
    <section className="w-full bg-white text-black pt-6 pb-14 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto bg-linear-to-b from-blue-50 via-sky-50 to-sky-50 rounded-md py-10 px-6 lg:px-20 shadow-2xl space-y-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {section2?.Title || "Data available for 200+ other countries"}
        </h2>

        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">

          {/* ---------- STRAPI VERSION ---------- */}
          {hasStrapiData &&
            section2.Continent_name.map((continent) => (
              <div
                key={continent.id}
                className="bg-blue-100 rounded-xl p-5 shadow text-center"
              >
                <h3 className="font-semibold text-lg mb-4">
                  {continent.Continent_name}
                </h3>

                <ul className="space-y-3">
                  {continent.button_with_image?.map((country) => (
                    <li key={country.id}>
                      <a
                        href={country.button_url}
                        className="flex items-center justify-center gap-3 hover:translate-x-1 transition-transform"
                      >
                        <img
                          src={country.image_url}
                          alt={`${country.button_text} export data`}
                          width={24}
                          height={16}
                          loading="lazy"
                          className="rounded-sm object-cover"
                        />
                        <span className="text-black hover:text-sky-600 hover:underline transition">
                          {country.button_text}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* ---------- FALLBACK VERSION ---------- */}
          {!hasStrapiData &&
            Object.entries(continentsFallback).map(([continent, countries]) => (
              <div
                key={continent}
                className="bg-blue-100 rounded-xl p-5 shadow text-center"
              >
                <h3 className="font-semibold text-lg mb-4">
                  {continent}
                </h3>

                <ul className="space-y-3">
                  {countries.map(({ name, code }) => {
                    const slug = name.toLowerCase().replace(/\s+/g, "-");

                    return (
                      <li key={name}>
                        <a
                          href={`/country-wise-${slug}-export-data`}
                          className="flex items-center justify-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${code}.png`}
                            alt={`${name} export data`}
                            width={24}
                            height={16}
                            loading="lazy"
                            className="rounded-sm object-cover"
                          />
                          <span className="text-black hover:text-sky-600 hover:underline transition">
                            {name}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href={
              section2?.button?.[0]?.button_link ||
              "/pricing"
            }
            className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center gap-2 shadow hover:scale-105 transition"
          >
            {section2?.button?.[0]?.button_text ||
              "Enquire Now"}{" "}
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}