"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { countries } from "@/lib/data";

export default function SearchComponent({ heading, subHeading }) {
  const router = useRouter();

  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  if (isBot) {
  return (
    <section
      className={`w-full px-6 pt-8 ${
        heading && subHeading
          ? "pb-8"
          : heading
          ? "pb-16 bg-linear-to-br from-sky-200 via-sky-50 to-sky-200"
          : "pb-8"
      }`}
    >
      {heading && (
        <h2 className="text-3xl font-black text-center mb-8 text-black">
          {heading}
        </h2>
      )}

      {subHeading && (
        <p className="md:text-xl text-center mb-8 text-black md:px-40">
          {subHeading}
        </p>
      )}

      <div className="max-w-7xl mx-auto bg-white shadow-xl p-8 text-center">
        <p className="text-lg text-black">
          Search global import export trade data by country, product, HS code,
          importers, exporters, and shipment records.
        </p>
      </div>
    </section>
  );
}

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef(null);

  // ✅ Only compute countries when dropdown is open
  const filteredCountries = showDropdown
    ? Object.entries(countries).filter(([country]) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // ✅ Scoped click handler (NO document listener storm)
  useEffect(() => {
    if (!showDropdown) return;

    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    window.addEventListener("pointerdown", handleClickOutside);
    return () => window.removeEventListener("pointerdown", handleClickOutside);
  }, [showDropdown]);

  function handleSearch() {
    if (!selectedCountry || !selectedType) {
      setError("Country and Type are required!");
      return;
    }

    setError("");
    setLoading(true);

    let url = `/search/type-${selectedType
      .replace(/\s+/g, "-")
      .toLowerCase()}/country-${selectedCountry
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    if (product)
      url += `/product-${product.replace(/\s+/g, "-").toLowerCase()}`;
    if (hsCode) url += `/hscode-${hsCode.toLowerCase()}`;

    router.push(url);
  }

  return (
     <section
      className={`w-full px-6 pt-8 ${
        heading && subHeading
          ? "pb-8"
          : heading
          ? "pb-16 bg-linear-to-br from-sky-200 via-sky-50 to-sky-200"
          : "pb-8"
      }`}>
      {heading && (
        <h2 className="text-3xl font-black text-center mb-8 text-black">
          {heading}
        </h2>
      )}

      {subHeading && (
        <p className="md:text-xl text-center mb-8 text-black md:px-40">
          {subHeading}
        </p>
      )}

      <div className="max-w-7xl mx-auto bg-white shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          <input
            type="text"
            placeholder="Enter Products"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            placeholder="HS Code"
            value={hsCode}
            onChange={(e) => setHsCode(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <div ref={dropdownRef} className="relative lg:col-span-2">
            <button
              type="button"
              onClick={() => setShowDropdown((v) => !v)}
              className="w-full border rounded-xl px-4 py-3 flex justify-between"
            >
              {selectedCountry || "Select Country"}
              <ChevronDown size={18} />
            </button>

            {showDropdown && (
              <div className="absolute z-20 mt-2 bg-white rounded-xl shadow-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-80 overflow-y-auto">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="col-span-full border px-3 py-2 rounded-md"
                />

                {filteredCountries.map(([country, flag]) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-indigo-100"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowDropdown(false);
                    }}
                  >
                    <img
                      src={flag}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-sm">{country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="">Select Type</option>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>

          <button
            onClick={handleSearch}
            disabled={loading}
            className={`px-10 py-3 rounded-full text-white font-semibold flex items-center justify-center ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:scale-105"
            }`}
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                <Search className="w-4 h-4 mr-1" /> Search
              </>
            )}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </section>
  );
}
