"use client";

import { useState } from "react";

const Products = ({
  defaultLetter,
  products,
  totalValues,
  defaultTradeType,
  defaultCountry,
  countries = [
    "Bangladesh",
    "Brazil",
    "Indonesia",
    "Mexico",
    "Pakistan",
    "Philippines",
    "Russia",
    "Sri Lanka",
    "Tanzania",
    "Vietnam",
  ],
  types = ["Import", "Export"],
}) => {
  const [letter] = useState(defaultLetter);
  const [country, setCountry] = useState(defaultCountry);
  const [tradeType, setTradeType] = useState(defaultTradeType);

  const totalPages = Math.ceil(totalValues / 100);

  const buildUrl = (page) =>
    `/global-products/product-${letter.toLowerCase()}/country-${country
      .replace(/\s+/g, "_")
      .toLowerCase()}/type-${tradeType.toLowerCase()}/pg-${page}`;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Search */}
        <div className="bg-blue-50 p-6 rounded mb-8 grid md:grid-cols-4 gap-4">
          <div className="text-4xl text-black">{letter}</div>

          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select value={tradeType} onChange={(e) => setTradeType(e.target.value)}>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <a href={buildUrl(1)} className="bg-blue-600 text-white px-4 py-2 text-center">
            Search
          </a>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-4 gap-4">
          {products.map((item, idx) => (
            <a
              key={idx}
              href={`/search/country-${country
                .replace(/\s+/g, "_")
                .toLowerCase()}/type-${tradeType.toLowerCase()}/product-${item.product
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="p-4 border hover:border-blue-400"
            >
              {item.product}
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map(
            (p) => (
              <a
                key={p}
                href={buildUrl(p)}
                className="px-3 py-1 border text-blue-600"
              >
                {p}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;