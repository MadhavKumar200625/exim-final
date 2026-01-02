"use client";

import { useState, useEffect } from "react";

const slugify = (v = "") =>
  String(v).trim().toLowerCase().replace(/\s+/g, "_");

const Products = ({
  defaultLetter = "a",
  defaultCountry = "India",
  defaultTradeType = "Import",
  currentPage = 1,
  products = [],
  totalValues = 0,
  countries = [
    "India",
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
  const [letter, setLetter] = useState(defaultLetter);
  const [country, setCountry] = useState(defaultCountry);
  const [tradeType, setTradeType] = useState(defaultTradeType);

  useEffect(() => setLetter(defaultLetter), [defaultLetter]);
  useEffect(() => setCountry(defaultCountry), [defaultCountry]);
  useEffect(() => setTradeType(defaultTradeType), [defaultTradeType]);

  const activePage = Number(currentPage) || 1;
  const totalPages = Math.max(1, Math.ceil(totalValues / 100));

  const buildUrl = (page, l = letter, c = country, t = tradeType) =>
    `/global-products/product-${l.toLowerCase()}/country-${slugify(
      c
    )}/type-${t.toLowerCase()}/pg-${page}`;

  /* ---------- Pagination numbers ---------- */
  const pageNumbers = (() => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (activePage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (activePage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", activePage - 1, activePage, activePage + 1, "...", totalPages);
    }
    return pages;
  })();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* -------- Search -------- */}
        <div className="bg-blue-50 p-6 rounded mb-8 grid md:grid-cols-4 gap-4">
          <div className="text-4xl text-black">{letter.toUpperCase()}</div>

          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((c) => <option key={c}>{c}</option>)}
          </select>

          <select value={tradeType} onChange={(e) => setTradeType(e.target.value)}>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>

          <a href={buildUrl(1)} className="bg-blue-600 text-white px-4 py-2 text-center">
            Search
          </a>
        </div>

        {/* -------- Products -------- */}
        <div className="grid md:grid-cols-4 gap-4">
          {products.map((item, idx) => (
            <a
              key={idx}
              href={`/search/country-${slugify(country)}/type-${tradeType.toLowerCase()}/product-${item.product
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="p-4 border hover:border-blue-400"
            >
              {item.product}
            </a>
          ))}
        </div>

        {/* -------- Pagination -------- */}
        <div className="flex justify-center gap-2 mt-10">
          {activePage > 1 && (
            <a href={buildUrl(activePage - 1)} className="px-3 py-1 border">
              &lt;&lt;
            </a>
          )}

          {pageNumbers.map((p, i) =>
            p === "..." ? (
              <span key={i} className="px-3 py-1">…</span>
            ) : (
              <a
                key={i}
                href={buildUrl(p)}
                className={`px-3 py-1 border ${
                  p === activePage ? "bg-blue-600 text-white" : "text-blue-600"
                }`}
              >
                {p}
              </a>
            )
          )}

          {activePage < totalPages && (
            <a href={buildUrl(activePage + 1)} className="px-3 py-1 border">
              &gt;&gt;
            </a>
          )}
        </div>

        {/* -------- Browse by Letter -------- */}
        <div className="mt-8 flex flex-wrap gap-2">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => (
            <a
              key={c}
              href={buildUrl(1, c)}
              className="px-3 py-1 border hover:bg-blue-600 hover:text-white"
            >
              {c}
            </a>
          ))}
        </div>

        <div className="mt-12">
  <h3 className="text-xl font-bold text-black mb-4">
    Browse by Country
  </h3>

  <div className="flex flex-wrap gap-4">
    {countries.map((c) => (
      <a
        key={c}
        href={buildUrl(1, letter, c, tradeType)}
        className="border border-gray-200 shadow-sm p-2 hover:shadow-md transition"
      >
        <img
          src={`https://flagcdn.com/w160/${slugify(c).slice(0, 2)}.png`}
          alt={c}
          className="w-24 h-auto"
          loading="lazy"
        />
      </a>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Products;