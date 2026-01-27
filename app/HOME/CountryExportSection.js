'use client';

import { useState, useMemo } from 'react';
import Link from "next/link";
import { countries } from "@/lib/countries"

// compute once (outside component)
const uniqueContinents = [...new Set(countries.map(c => c.continent).filter(Boolean))];

export default function CountryStatsSection() {

  // 🔒 bot detection (logic only, no UI change)
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  // bots should not hydrate or run interactions
  if (isBot) {
    return (
      <section className="py-14 bg-white text-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Global Import Export Database
          </h2>
          <h3 className="text-xl md:text-4xl text-black mb-3">
            Global Trade Data Analysis Country-wise
          </h3>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            Discover country-wise global import-export data Statistics from our exclusive Global Trade Database.
          </p>
        </div>

        {/* simple crawlable links only */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
          {countries.map((c) => (
            <a  key={c.name} href={c.link_main} className="text-blue-700 hover:underline">
              {c.name} Import Export Data
            </a>
          ))}
        </div>
      </section>
    );
  }

  // humans only (original behavior)
  const [selectedContinent, setSelectedContinent] = useState('ASIA');

  const filteredCountries = useMemo(
    () => countries.filter(c => c.continent === selectedContinent),
    [selectedContinent]
  );

  return (
    <section className="py-14 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Global Import Export Database
        </h2>
        <h3 className="text-xl md:text-4xl text-black mb-3">
          Global Trade Data Analysis Country-wise
        </h3>
        <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
          Discover country-wise global import-export data Statistics from our exclusive Global Trade Database.
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-12 gap-6">

        <div className="">
          <div className="sticky top-24">
            <ul className="px-14 grid md:grid-cols-1 grid-cols-2 text-lg font-medium">
              {uniqueContinents.map((continent) => (
                continent && (
                  <li
                    key={continent}
                    className={`cursor-pointer mt-2 px-10 py-2 flex justify-center items-center rounded-3xl transition-colors whitespace-nowrap ${
                      selectedContinent === continent
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-blue-100 text-blue-800'
                    }`}
                    onClick={() => setSelectedContinent(continent)}
                  >
                    {continent}
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>

        {/* Country Cards */}
        <div className="w-full pb-10 h-94 overflow-y-auto">
          <div className="grid grid-cols-2 px-4 lg:grid-cols-3 xl:grid-cols-5">
            {filteredCountries.map((country) => (
              <a  key={country.name} href={country.link_main}>
                <div
                  className="cursor-pointer py-2 rounded-3xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 text-center space-y-2"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} import export data`}
                    width={40}
                    height={30}
                    loading="lazy"
                    decoding="async"
                    className="w-18 mx-auto shadow-xl"
                  />
                  <h3 className="text-sm font-semibold text-black">
                    {country.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}