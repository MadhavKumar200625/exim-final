"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { ChevronDown, LoaderCircle, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { countries } from "@/lib/data";
import { buildSearchUrl } from "@/lib/searchUrl";

export default function SearchComponent({ heading, subHeading ,defaults = {} }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

const [showDropdown, setShowDropdown] = useState(false);

const [selectedCountry, setSelectedCountry] = useState(
  defaults.country || ""
);
const [searchTerm, setSearchTerm] = useState("");

const [product, setProduct] = useState(
  defaults.product || ""
);

const [hsCode, setHsCode] = useState(
  defaults.hscode || ""
);

const [selectedType, setSelectedType] = useState(
  defaults.type || ""
);

const [error, setError] = useState("");
const [isSearching, setIsSearching] = useState(false);
const [showNoDataPopup, setShowNoDataPopup] = useState(false);

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

  async function handleSearch() {
    if (!selectedCountry || !selectedType) {
      setError("Country and Type are required!");
      return;
    }

    setError("");
    setShowNoDataPopup(false);

    const searchFilters = [
      { label: "country", value: selectedCountry },
      { label: "type", value: selectedType },
    ];
    if (product) searchFilters.push({ label: "product", value: product });
    if (hsCode) searchFilters.push({ label: "hscode", value: hsCode });
    const url = buildSearchUrl(searchFilters);

    setIsSearching(true);

    try {
      const response = await fetch("/api/search/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectedType.toLowerCase(),
          country: selectedCountry.toLowerCase().replace(/-/g, " "),
          product: product.toLowerCase().replace(/-/g, " "),
          hscode: hsCode.toLowerCase().replace(/-/g, " "),
        }),
      });

      if (!response.ok) throw new Error("Search availability could not be checked");

      const result = await response.json();
      if (!result.available) {
        setShowNoDataPopup(true);
        return;
      }

      startTransition(() => router.push(url));
    } catch {
      setError("We're experiencing heavy traffic. Please refresh or try again in a moment.");
    } finally {
      setIsSearching(false);
    }
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
            type="button"
            onClick={handleSearch}
            disabled={isSearching || isPending}
            aria-busy={isSearching || isPending}
            className="min-w-40 px-10 py-3 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 disabled:cursor-wait disabled:opacity-80"
          >
            {isSearching || isPending ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>{isSearching ? "Checking data..." : "Loading results..."}</span>
              </>
            ) : (
              <>
                <Search className="h-4 w-4" aria-hidden="true" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      {showNoDataPopup && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed right-4 top-24 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 shadow-xl sm:right-6 sm:max-w-sm"
        >
          <p className="font-semibold">Data Not Found</p>
          <button
            type="button"
            onClick={() => setShowNoDataPopup(false)}
            aria-label="Dismiss notification"
            className="ml-auto rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
