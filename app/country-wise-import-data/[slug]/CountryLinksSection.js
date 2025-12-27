import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ---------- STATIC DATA (OUTSIDE COMPONENT) ---------- */
const continents = {
  ASIA: [
    { name: "India", slug: "india", flag: "/flags/in.png" },
    { name: "China", slug: "china", flag: "/flags/cn.png" },
    { name: "Japan", slug: "japan", flag: "/flags/jp.png" },
    { name: "Turkey", slug: "turkey", flag: "/flags/tr.png" },
    { name: "South Korea", slug: "korea", flag: "/flags/kr.png" },
  ],
  AFRICA: [
    { name: "Chad", slug: "chad", flag: "/flags/td.png" },
    { name: "Ghana", slug: "ghana", flag: "/flags/gh.png" },
    { name: "Kenya", slug: "kenya", flag: "/flags/ke.png" },
    { name: "Tanzania", slug: "tanzania", flag: "/flags/tz.png" },
    { name: "South Africa", slug: "south-africa", flag: "/flags/za.png" },
  ],
  EUROPE: [
    { name: "UK", slug: "uk", flag: "/flags/gb.png" },
    { name: "Spain", slug: "spain", flag: "/flags/es.png" },
    { name: "Netherlands", slug: "netherlands", flag: "/flags/nl.png" },
    { name: "Germany", slug: "germany", flag: "/flags/de.png" },
    { name: "France", slug: "france", flag: "/flags/fr.png" },
  ],
  AMERICA: [
    { name: "USA", slug: "usa", flag: "/flags/us.png" },
    { name: "Mexico", slug: "mexico", flag: "/flags/mx.png" },
    { name: "Argentina", slug: "argentina", flag: "/flags/ar.png" },
    { name: "Canada", slug: "canada", flag: "/flags/ca.png" },
    { name: "Brazil", slug: "brazil", flag: "/flags/br.png" },
  ],
  OCEANIA: [
    { name: "Australia", slug: "australia", flag: "/flags/au.png" },
    { name: "New Zealand", slug: "new-zealand", flag: "/flags/nz.png" },
    { name: "Fiji", slug: "fiji", flag: "/flags/fj.png" },
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
                    <Link
                      href={`/country-wise-${c.slug}-import-data`}
                      className="flex items-center gap-3 justify-center hover:translate-x-1 transition-transform"
                    >
                      <img
                        src={c.flag}
                        alt={`${c.name} flag`}
                        className="w-6 h-4 rounded-sm"
                        loading="lazy"
                      />
                      <span className="hover:underline">{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="/pricing"
            className="bg-blue-600 text-white text-lg px-6 py-2 flex items-center gap-2 shadow hover:scale-105 transition"
          >
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}