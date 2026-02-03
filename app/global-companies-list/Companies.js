
"use client";

import { useState,useEffect } from "react";
import React from "react";
import { ChevronDown } from "lucide-react";

const countries = {
  "Bangladesh": "https://flagcdn.com/w20/bd.png",
  "Brazil": "https://flagcdn.com/w20/br.png",
  "Indonesia": "https://flagcdn.com/w20/id.png",
  "Pakistan": "https://flagcdn.com/w20/pk.png",
  "Philippines": "https://flagcdn.com/w20/ph.png",
  "Russia": "https://flagcdn.com/w20/ru.png",
  "Sri Lanka": "https://flagcdn.com/w20/lk.png",
  "Tanzania": "https://flagcdn.com/w20/tz.png",
  "Vietnam": "https://flagcdn.com/w20/vn.png",
  "Argentina": "https://flagcdn.com/w20/ar.png",
  "Bolivia": "https://flagcdn.com/w20/bo.png",
  "Botswana": "https://flagcdn.com/w20/bw.png",
  "Chile": "https://flagcdn.com/w20/cl.png",
  "Nigeria": "https://flagcdn.com/w20/ng.png",
  "Colombia": "https://flagcdn.com/w20/co.png",
  "Costa Rica": "https://flagcdn.com/w20/cr.png",
  "DR Congo": "https://flagcdn.com/w20/cd.png",
  "Kazakhstan": "https://flagcdn.com/w20/kz.png",
  "Kenya": "https://flagcdn.com/w20/ke.png",
  "Moldova": "https://flagcdn.com/w20/md.png",
  "Uganda": "https://flagcdn.com/w20/ug.png",
  "Ukraine": "https://flagcdn.com/w20/ua.png",
  "Uzbekistan": "https://flagcdn.com/w20/uz.png",
  "Australia": "https://flagcdn.com/w20/au.png",
  "Spain": "https://flagcdn.com/w20/es.png",
  "United Kingdom": "https://flagcdn.com/w20/gb.png",
  "Netherland": "https://flagcdn.com/w20/nl.png",
  "Germany": "https://flagcdn.com/w20/de.png",
  "United Arab Emirates": "https://flagcdn.com/w20/ae.png",
  "Saudi Arabia": "https://flagcdn.com/w20/sa.png",
  "Oman": "https://flagcdn.com/w20/om.png",
  "Singapore": "https://flagcdn.com/w20/sg.png",
  "Canada": "https://flagcdn.com/w20/ca.png",
  "China": "https://flagcdn.com/w20/cn.png",
  "USA": "https://flagcdn.com/w20/us.png",
  "Afghanistan": "https://flagcdn.com/w20/af.png",
  "Algeria": "https://flagcdn.com/w20/dz.png",
  "Angola": "https://flagcdn.com/w20/ao.png",
  "Armenia": "https://flagcdn.com/w20/am.png",
  "Austria": "https://flagcdn.com/w20/at.png",
  "Azerbaijan": "https://flagcdn.com/w20/az.png",
  "Bahrain": "https://flagcdn.com/w20/bh.png",
  "Barbados": "https://flagcdn.com/w20/bb.png",
  "Belgium": "https://flagcdn.com/w20/be.png",
  "Belarus": "https://flagcdn.com/w20/by.png",
  "Benin": "https://flagcdn.com/w20/bj.png",
  "Bermuda": "https://flagcdn.com/w20/bm.png",
  "Bhutan": "https://flagcdn.com/w20/bt.png",
  "Bulgaria": "https://flagcdn.com/w20/bg.png",
  "Burundi": "https://flagcdn.com/w20/bi.png",
  "Cambodia": "https://flagcdn.com/w20/kh.png",
  "Cameroon": "https://flagcdn.com/w20/cm.png",
  "Chad": "https://flagcdn.com/w20/td.png",
  "Cote d ivoire": "https://flagcdn.com/w20/ci.png",
  "Croatia": "https://flagcdn.com/w20/hr.png",
  "Cyprus": "https://flagcdn.com/w20/cy.png",
  "Czech Republic": "https://flagcdn.com/w20/cz.png",
  "Denmark": "https://flagcdn.com/w20/dk.png",
  "Dominican Republic": "https://flagcdn.com/w20/do.png",
  "Ecuador": "https://flagcdn.com/w20/ec.png",
  "Egypt": "https://flagcdn.com/w20/eg.png",
  "Estonia": "https://flagcdn.com/w20/ee.png",
  "Ethiopia": "https://flagcdn.com/w20/et.png",
  "El Salvador": "https://flagcdn.com/w20/sv.png",
  "Fiji": "https://flagcdn.com/w20/fj.png",
  "Finland": "https://flagcdn.com/w20/fi.png",
  "France": "https://flagcdn.com/w20/fr.png",
  "Gabon": "https://flagcdn.com/w20/ga.png",
  "Georgia": "https://flagcdn.com/w20/ge.png",
  "Ghana": "https://flagcdn.com/w20/gh.png",
  "Greece": "https://flagcdn.com/w20/gr.png",
  "Guatemala": "https://flagcdn.com/w20/gt.png",
  "Guinea": "https://flagcdn.com/w20/gn.png",
  "Guyana": "https://flagcdn.com/w20/gy.png",
  "Hungary": "https://flagcdn.com/w20/hu.png",
  "Honduras": "https://flagcdn.com/w20/hn.png",
  "Iran": "https://flagcdn.com/w20/ir.png",
  "Iraq": "https://flagcdn.com/w20/iq.png",
  "Ireland": "https://flagcdn.com/w20/ie.png",
  "Israel": "https://flagcdn.com/w20/il.png",
  "Italy": "https://flagcdn.com/w20/it.png",
  "Jamaica": "https://flagcdn.com/w20/jm.png",
  "Japan": "https://flagcdn.com/w20/jp.png",
  "Jordan": "https://flagcdn.com/w20/jo.png",
  "Kosovo": "https://flagcdn.com/w20/xk.png",
  "Kuwait": "https://flagcdn.com/w20/kw.png",
  "Kyrgyzstan": "https://flagcdn.com/w20/kg.png",
  "Latvia": "https://flagcdn.com/w20/lv.png",
  "Lesotho": "https://flagcdn.com/w20/ls.png",
  "Liberia": "https://flagcdn.com/w20/lr.png",
  "Libya": "https://flagcdn.com/w20/ly.png",
  "Lithuania": "https://flagcdn.com/w20/lt.png",
  "Luxembourg": "https://flagcdn.com/w20/lu.png",
  "Malawi": "https://flagcdn.com/w20/mw.png",
  "Malaysia": "https://flagcdn.com/w20/my.png",
};
const countryFlags = {
  "Bangladesh":"https://flagcdn.com/w640/bd.png", // Bangladesh
  "Brazil":"https://flagcdn.com/w640/br.png", // Brazil
  "Indonesia":"https://flagcdn.com/w640/id.png", // Indonesia
  "Mexico":"https://flagcdn.com/w640/mx.png", // Mexico
  "Pakistan":"https://flagcdn.com/w640/pk.png", // Pakistan
  "Philippines":"https://flagcdn.com/w640/ph.png", // Philippines
  "Russia":"https://flagcdn.com/w640/ru.png", // Russia
  "Sri Lanka":"https://flagcdn.com/w640/lk.png", // Sri Lanka
  "Tanzania":"https://flagcdn.com/w640/tz.png", // Tanzania
  "Vietnam":"https://flagcdn.com/w640/vn.png", // Vietnam
};




/* -----------------------------------------
   Component
------------------------------------------ */
const Companies = ({
  defaultLetter = "A",
  defaultCountry = "Vietnam",
  currentPage = 1,
  companies = [],
  totalValues = 0,
}) => {
  const [letter, setLetter] = useState(defaultLetter);
  const [country, setCountry] = useState(defaultCountry);
  const [showDropdown, setShowDropdown] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalValues / 100));
const [search, setSearch] = useState("");
  /* -----------------------------------------
     Sync state with parent props
  ------------------------------------------ */
  useEffect(() => setLetter(defaultLetter), [defaultLetter]);
  useEffect(() => setCountry(defaultCountry), [defaultCountry]);

  /* -----------------------------------------
     Helpers
  ------------------------------------------ */
  const slugify = (v = "") =>
  String(v)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  const buildUrl = (page, newLetter = letter, newCountry = country) => {
  const safeCountry = slugify(newCountry || defaultCountry);
  const safeLetter = (newLetter || defaultLetter).toLowerCase();
  

  return `/global-companies-list/${safeCountry}/${safeLetter}-${page}`;
};
const filteredCountries = Object.entries(countries).filter(([name]) =>
  name.toLowerCase().includes(search.toLowerCase())
);

  /* -----------------------------------------
     Pagination numbers (stable)
  ------------------------------------------ */
  const pageNumbers = (() => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  })();

  /* -----------------------------------------
     Render
  ------------------------------------------ */
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- Search Bar ---------------- */}
        <div className="bg-blue-50 p-6 rounded shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Letter */}
            <div className="text-4xl flex items-center px-5 text-black">
              {letter}
            </div>

            {/* Country Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown((s) => !s)}
                className="w-full border rounded-md px-4 py-2 flex justify-between bg-white"
              >
                {country}
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
  <div className="absolute z-20 mt-2 w-full bg-white border rounded shadow">
    
    {/* Search bar */}
    <div className="p-2 border-b">
      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-1.5 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Country list */}
    <div className="max-h-56 overflow-y-auto">
      {filteredCountries.length ? (
        filteredCountries.map(([name, flag]) => (
          <div
            key={name}
            onClick={() => {
              setCountry(name);
              setShowDropdown(false);
              setSearch("");
            }}
            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
          >
            <img src={flag} alt={name} width={20} height={14} />
            <span>{name}</span>
          </div>
        ))
      ) : (
        <div className="p-2 text-sm text-gray-500">
          No countries found
        </div>
      )}
    </div>
  </div>
)}
            </div>

            {/* Search */}
            <a
              href={buildUrl(1)}
              className="bg-blue-600 text-white px-4 py-2 text-center hover:scale-105 transition"
            >
              Search
            </a>
          </div>
        </div>

        {/* ---------------- Companies Grid ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {companies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-4 hover:shadow-lg transition"
            >
              <a
                href={`/global-companies/${slugify(country)}/${slugify(item)}`}
                className="font-medium hover:text-blue-600"
              >
                {item}
              </a>
            </div>
          ))}
        </div>

        {/* ---------------- Pagination ---------------- */}
        <div className="flex justify-center gap-2 mb-10">
          {currentPage > 1 && (
            <a href={buildUrl(currentPage - 1)} className="px-3 py-1 border">
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
                  p === currentPage
                    ? "bg-blue-600 text-white"
                    : "text-blue-600"
                }`}
              >
                {p}
              </a>
            )
          )}

          {currentPage < totalPages && (
            <a href={buildUrl(currentPage + 1)} className="px-3 py-1 border">
              &gt;&gt;
            </a>
          )}
        </div>

        {/* ---------------- Browse by Letter ---------------- */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4">Browse by Letter</h3>
          <div className="flex flex-wrap gap-2">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
              <a
                key={char}
                href={buildUrl(1, char)}
                className="px-3 py-1 border hover:bg-blue-600 hover:text-white"
              >
                {char}
              </a>
            ))}
          </div>
        </div>

        {/* ---------------- Browse by Country ---------------- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Browse by Country</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(countryFlags).map(([name, flag]) => (
              <a
                key={name}
                href={buildUrl(1, letter, name)}
                className="border shadow p-2"
              >
                <img src={flag} alt={`${name} companies list`} className="w-20" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Companies;