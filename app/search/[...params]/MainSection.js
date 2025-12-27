import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // <-- Import Lucide icon

const MainSection = ({ data, appliedFilters }) => {
  const { filters, table } = data;

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
    <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 mt-10 px-2">
      {/* Left Filters */}
      <aside className="col-span-2 bg-blue-600 shadow-md rounded-2xl p-6 space-y-8 border border-gray-200">
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
<ul className="list-disc list-outside space-y-2 px-4 marker:text-white">
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

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm border-collapse table-fixed">
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
                    ${head.toLowerCase() === "product description" ? "w-64" : ""}`}
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
                      className="truncate overflow-hidden whitespace-nowrap"
                      title={row.product}
                    >
                      {row.product}
                    </p>
                  </td>
                  <td className="px-3 py-2">{row.exporter}</td>
                  <td className="px-3 py-2 text-center">{row.qty}</td>
                  <td className="px-3 py-2">{row.unit}</td>
                  <td className="px-3 text-center py-2">{row.value}</td>
                  <td className="px-3 py-2 text-center">{row.origin}</td>
                  <td className="px-3 py-2">{row.port}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {Array.from({ length: 5 }, (_, i) => {
            const page = i + 1;
            const isActive = page === table.pagination.currentPage;

            return isActive ? (
              <span
                key={page}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow cursor-default"
              >
                {page}
              </span>
            ) : (
              <a
                key={page}
                href="/pricing"
                className="px-4 py-2 bg-gray-100 text-black text-sm rounded-lg hover:bg-gray-200 transition"
              >
                {page}
              </a>
            );
          })}

          {table.pagination.currentPage < table.pagination.totalPages && (
            <a
              href={table.pagination.nextPageUrl}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
            >
              Next Page →
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainSection;