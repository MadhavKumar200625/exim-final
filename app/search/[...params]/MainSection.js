"use client"
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // <-- Import Lucide icon
import UnlockDataForm from "@/app/Components/UnlockDataForm";


const MainSection = ({ data, appliedFilters ,country}) => {
  const { filters, table } = data;
  const [showUnlockForm, setShowUnlockForm] = useState(false);

  const baseUrl = "/search";
  const buildUrl = (filters) => {
    return `${baseUrl}/${filters
      .map(
        (f) =>
          `${f.label.replace(/\s+/g, "-").toLowerCase()}-${f.value
            .replace(/\s+/g, "-")
            .toLowerCase()}`
      )
      .join("/")}`;
  };

  const getFilterHref = (label, value) => {
    label = label.toLowerCase();

    const existing = appliedFilters.find(
      (f) => f.label.toLowerCase() === label
    );

    let newFilters;
    if (existing) {
      newFilters = appliedFilters.map((f) =>
        f.label.toLowerCase() === label ? { ...f, value } : f
      );
    } else {
      newFilters = [...appliedFilters, { label, value }];
    }
    return buildUrl(newFilters);
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 md:mt-10 px-2 md:px-4">
      {/* Left Filters */}
      <aside className="col-span-1 md:col-span-2 bg-blue-600 shadow-md rounded-2xl p-4 md:p-6 space-y-6 md:space-y-8 border border-gray-200">
        <h3 className="text-lg font-semibold text-white border-b pb-3">
          Filters
        </h3>

        {/* HS Code Filter */}
        <details open className="space-y-3">
          <summary className="cursor-pointer flex justify-between items-center text-sm font-medium text-white mb-2 tracking-wide">
            <div>HS Code <span className="text-white">({filters.hsCodes.length})</span></div>
            <ChevronDown size={16} className="text-white" />
          </summary>
          <ul className="list-disc list-outside space-y-2 px-4 marker:text-white">

            {filters.hsCodes.map((code, i) => (
              <li key={i}>
                <a
                  href={getFilterHref("hscode", code)}
                  className="block px-2 py-1 rounded-lg text-sm font-medium text-white"
                >
                  {code}
                </a>
              </li>
            ))}
          </ul>
        </details>

        {/* Country Filter */}
        <details open className="space-y-3">
          <summary className="cursor-pointer flex justify-between items-center text-sm font-medium text-white mb-2 tracking-wide">
            <div>Country <span className="text-white">({filters.countries.length})</span></div>
            <ChevronDown size={16} className="text-white" />
          </summary>
          <ul className="list-disc list-outside space-y-2 px-4 marker:text-white">

            {filters.countries.map((country, i) => (
              <li key={i}>
                <a
                  href={getFilterHref("countryin", country)}
                  className="block px-2 py-1 rounded-lg text-sm font-medium text-white"
                >
                  {country}
                </a>
              </li>
            ))}
          </ul>
        </details>

        {/* Port of Unloading Filter */}
        <details open className="space-y-3">
          <summary className="cursor-pointer flex justify-between items-center text-sm font-medium text-white mb-2 tracking-wide">
            <div>Port of Unloading <span className="text-white">({filters.ports.length})</span></div>
            <ChevronDown size={16} className="text-white" />
          </summary>
<ul className="list-disc list-outside space-y-2 px-4 marker:text-white text-sm break-words">
              {filters.ports.map((port, i) => (
              <li key={i}>
                <a
                  href={getFilterHref("port", port)}
                  className="block px-2 py-1 rounded-lg text-sm font-medium text-white"
                >
                  {port}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </aside>

      {/* Right Table */}
      <div className="col-span-10 bg-white shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-black mb-4">Trade Data</h3>

<div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-xs sm:text-sm border-collapse table-fixed min-w-[1200px]">
            <thead className="bg-gray-100 text-black">
              <tr>
                {table.headers.map((head, i) => (
                  <th
                    key={i}
                    className={`px-3 py-2 border-b text-left font-medium 
                    ${head.toLowerCase() === "date" ? "w-24" : ""} 
                    ${head.toLowerCase() === "hs code" ? "w-26" : ""} 
                    ${head.toLowerCase() === "exporter" ? "w-26" : ""} 
                    ${head.toLowerCase() === "quantity" ? "w-26" : ""} 
                    ${head.toLowerCase() === "unit" ? "w-14" : ""} 
                    ${head.toLowerCase() === "value" ? "w-24" : ""} 
                    ${head.toLowerCase() === "product description" ? "w-40" : ""}
                    ${head.toLowerCase() === "action" ? "w-40 text-center" : ""}`}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition border-b last:border-0"
                >
                  <td className="px-3 py-2">{row.date}</td>
                  <td className="px-3 py-2">{row.hsCode}</td>
                  <td className="px-3 py-2 max-w-xs">
                    <p
  className="overflow-hidden text-ellipsis line-clamp-3 break-words"
  title={row.product}
>
  {row.product}
</p>
                  </td>
                  <td className="px-3 py-2">{row.exporter}</td>
                  <td className="px-3 py-2 text-center">{row.qty}</td>
                  <td className="px-3 py-2 text-center">{row.unit}</td>
                  <td className="px-3  py-2">{row.value}</td>
                  <td className="px-3 py-2 ">{row.origin}</td>
                  <td className="px-3 py-2">{row.port}</td>
                  <td className="px-3 py-2 ">
  <button
    onClick={() => setShowUnlockForm(true)}
    className="px-3 sm:px-4 py-2 bg-blue-600 text-white text-[15px] sm:text-md cursor-pointer rounded-lg hover:bg-blue-700 transition shadow whitespace-nowrap"
  >
    Unlock Full Data
  </button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center mt-6 gap-2 px-2">
          {Array.from({ length: 5 }, (_, i) => {
            const page = i + 1;
            const isActive = page === table.pagination.currentPage;

            return isActive ? (
              <button
              key={i}
                className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm rounded-lg shadow "
              >
                {page}
              </button>
            ) : (
              <button
              key={i}
              onClick={()=>{setShowUnlockForm(true)}}
               
                className="px-4 cursor-pointer py-2 bg-gray-100 text-black text-sm rounded-lg hover:bg-gray-200 transition"
              >
                {page}
              </button>
            );
          })}

          {table.pagination.currentPage < table.pagination.totalPages && (
            <button
              onClick={()=>{setShowUnlockForm(true)}}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
            >
              Next Page →
            </button>
          )}
        </div>
      </div>

      <UnlockDataForm
  isOpen={showUnlockForm}
  onClose={() => setShowUnlockForm(false)}
  country={country}
/>
    </section>
  );
};

export default MainSection;