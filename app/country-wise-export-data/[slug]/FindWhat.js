import React from "react";
import Link from "next/link";

export default function FindWhat({ country }) {
  const relatedCountries = [
    "Bangladesh",
    "China",
    "Russia",
    "Australia",
    "Tanzania",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Find What {country.toUpperCase()} Exports to Other Countries?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {relatedCountries.map((targetCountry) => (
            <Link
              key={targetCountry}
              href={`/${targetCountry.toLowerCase()}-export-data`}
              className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold transition-transform duration-300 transform hover:scale-105"
            >
              {targetCountry}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}