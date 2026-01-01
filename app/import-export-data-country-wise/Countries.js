"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/lib/CountriesPageData";
/* ---------------------------------------------------
   SAFE SLUG (SEO + ROUTING SAFE)
--------------------------------------------------- */
const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

/* ---------------------------------------------------
   DATA
--------------------------------------------------- */


/* ---------------------------------------------------
   COMPONENT
--------------------------------------------------- */
export default function Countries() {
  const continents = [...new Set(countries.map(c => c.continent))];
  const [activeContinent, setActiveContinent] = useState(continents[0]);

  const filteredCountries = countries.filter(
    c => c.continent === activeContinent
  );

  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Country wise Import Export Data
      </h2>

      <p className="text-base text-black text-center max-w-4xl mx-auto mb-8">
        Access accurate import export data for 200+ countries based on global
        customs shipment records.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {continents.map(continent => (
          <button
            key={continent}
            type="button"
            onClick={() => setActiveContinent(continent)}
            className={`px-4 py-2 rounded-lg font-medium border ${
              activeContinent === continent
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-black mb-6 text-center">
        {activeContinent} Import-Export Trade Data
      </h3>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:px-20">
        {filteredCountries.map(country => {
          const slug = slugify(country.name);

          return (
            <div
              key={`${country.name}-${country.continent}`}
              className="relative group flex items-center gap-4 p-4 border border-blue-300 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Flag */}
              <a href={country.link_main}>
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={64}
                  height={48}
                  loading="lazy"
                  className="w-16 h-auto"
                  onError={e => (e.currentTarget.style.display = "none")}
                />
              </a>

              {/* Info */}
              <div className="flex flex-col">
                <a
                  href={country.link_main}
                  className="font-semibold text-lg hover:underline text-black hover:text-blue-600"
                >
                  {country.name} Import Export Data
                </a>

                <div className="flex gap-2 mt-2">
                  <a
                    href={country.link_imp}
                    className="text-sm px-3 py-1 border border-blue-600 text-black hover:bg-blue-600 hover:text-white transition"
                  >
                    Import Data
                  </a>
                  <a
                    href={country.link_exp}
                    className="text-sm px-3 py-1 border border-orange-500 text-black hover:bg-orange-500 hover:text-white transition"
                  >
                    Export Data
                  </a>
                </div>
              </div>

              {/* Other Links */}
              {country.otherLinks && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  <h4 className="px-4 py-2 font-semibold border-b">
                    Other Links
                  </h4>
                  <ul className="p-4 space-y-2">
                    <li>
                      <a
                        href={`/global-products/product-A/country-${slug}/type-export/pg-1`}
                        className="flex items-center text-sm underline"
                      >
                        {country.name} Export Products
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/global-products/product-A/country-${slug}/type-import/pg-1`}
                        className="flex items-center text-sm underline"
                      >
                        {country.name} Import Products
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/global-companies-list/${slug}/A-1`}
                        className="flex items-center text-sm underline"
                      >
                        {country.name} Companies
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}