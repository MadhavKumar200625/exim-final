"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const continentData = [
  {
    name: "ASIA",
    countries: [
      { label: "Vietnam", code: "vn", url: "/vietnam-import-export-data" },
      { label: "Indonesia", code: "id", url: "/indonesia-import-export-data" },
    ],
  },
  {
    name: "AFRICA",
    countries: [
      { label: "Tanzania", code: "tz", url: "/tanzania-import-export-data" },
      { label: "Botswana", code: "bw", url: "/botswana-import-export-data" },
    ],
  },
  {
    name: "EUROPE",
    countries: [
      { label: "UK", code: "gb", url: "/country-wise-uk-import-and-export-data" },
      { label: "Moldova", code: "md", url: "/country-wise-moldova-import-and-export-data" },
      { label: "Ukraine", code: "ua", url: "/country-wise-ukraine-import-and-export-data" },
    ],
  },
  {
    name: "AMERICA",
    countries: [
      { label: "Argentina", code: "ar", url: "/argentina-import-export-data" },
      { label: "Brazil", code: "br", url: "/brazil-import-export-data" },
      { label: "Mexico", code: "mx", url: "/mexico-import-export-data" },
      { label: "US", code: "us", url: "/us-import-export-data" },
    ],
  },
  {
    name: "OCEANIA",
    countries: [
      { label: "Australia", code: "au", url: "/australia-import-export-data" },
      { label: "Fiji", code: "fj", url: "/country-wise-fiji-import-and-export-data" },
    ],
  },
];

export default function CountrySection() {
  return (
    <section className="bg-linear-to-r from-blue-50 via-white to-blue-50 py-12 px-4 md:px-20">
      <div className="bg-white shadow-lg border border-gray-200 rounded-none p-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-x divide-gray-300 text-center">
          {continentData.map((continent) => (
            <div key={continent.name} className="px-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {continent.name}
              </h3>

              <ul className="space-y-3">
                {continent.countries.map((country) => (
                  <li key={country.label}>
                    <a
                      href={country.url}
                      className="flex items-center justify-center space-x-2 text-black hover:underline hover:scale-[1.02] transition-transform duration-200"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.code}.png`}
                        alt={`${country.label} flag`}
                        width={20}
                        height={15}
                        loading="lazy"
                        decoding="async"
                        className="w-5 h-auto"
                      />
                      <span>{country.label}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/pricing"
            
            className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer inline-block"
          >
            Check Pricing →
          </a>
        </div>
      </div>
    </section>
  );
}