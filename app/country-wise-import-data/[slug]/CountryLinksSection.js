import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ---------- STATIC DATA ---------- */
const continents = {
  ASIA: [
    { name: "India", slug: "india", code: "in" },
    { name: "China", slug: "china", code: "cn" },
    { name: "Japan", slug: "japan", code: "jp" },
    { name: "Turkey", slug: "turkey", code: "tr" },
    { name: "South Korea", slug: "korea", code: "kr" },
  ],
  AFRICA: [
    { name: "Chad", slug: "chad", code: "td" },
    { name: "Ghana", slug: "ghana", code: "gh" },
    { name: "Kenya", slug: "kenya", code: "ke" },
    { name: "Tanzania", slug: "tanzania", code: "tz" },
    { name: "South Africa", slug: "south-africa", code: "za" },
  ],
  EUROPE: [
    { name: "UK", slug: "uk", code: "gb" },
    { name: "Spain", slug: "spain", code: "es" },
    { name: "Netherlands", slug: "netherlands", code: "nl" },
    { name: "Germany", slug: "germany", code: "de" },
    { name: "France", slug: "france", code: "fr" },
  ],
  AMERICA: [
    { name: "USA", slug: "usa", code: "us" },
    { name: "Mexico", slug: "mexico", code: "mx" },
    { name: "Argentina", slug: "argentina", code: "ar" },
    { name: "Canada", slug: "canada", code: "ca" },
    { name: "Brazil", slug: "brazil", code: "br" },
  ],
  OCEANIA: [
    { name: "Australia", slug: "australia", code: "au" },
    { name: "New Zealand", slug: "new-zealand", code: "nz" },
    { name: "Fiji", slug: "fiji", code: "fj" },
  ],
};

export default function CountrySection() {
  return (
    <section className="w-full bg-white text-black pt-6 pb-14 px-6">
      <div className="max-w-7xl mx-auto bg-linear-to-b from-blue-50 to-sky-50 rounded-md py-10 px-6 md:px-20 shadow-2xl space-y-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Data Available for 200+ Countries Worldwide
        </h2>

        {/* Continents */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8">
          {Object.entries(continents).map(([continent, countries]) => (
            <div
              key={continent}
              className="bg-blue-100 rounded-xl p-5 shadow-md text-center"
            >
              <h3 className="font-semibold text-lg mb-4">{continent}</h3>

              <ul className="space-y-3">
                {countries.map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`/country-wise-${c.slug}-import-data`}
                      className="flex items-center gap-3 justify-center hover:translate-x-1 transition-transform"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code}.png`}
                        alt={`${c.name} flag`}
                        className="w-6 h-4 rounded-sm"
                        loading="lazy"
                      />
                      <span className="hover:underline">{c.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <a
            href="/pricing"
            className="bg-blue-600 text-white text-lg px-6 py-2 flex items-center gap-2 shadow hover:scale-105 transition"
          >
            Enquire Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}