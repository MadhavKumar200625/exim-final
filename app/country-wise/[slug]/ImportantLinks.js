import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function ImportantLinks({ country }) {
  const countryName =
    country.charAt(0).toUpperCase() + country.slice(1);

  const links = [
    {
      title: `${countryName} Import Data`,
      url: `/country-wise-${country}-import-data`,
    },
    {
      title: `${countryName} Export Data`,
      url: `/country-wise-${country}-export-data`,
    },
    {
      title: `${countryName} Import Export Product`,
      url: `/global-products`,
    },
    {
      title: "Global Port Volume Report",
      url: `/global-ports`,
    },
    {
      title: "Global Companies List",
      url: `/global-companies-list`,
    },
    {
      title: "Country Wise Trade Data",
      url: `/import-export-data-country-wise`,
    },
    {
      title: "Global Trade API",
      url: `/api-development-and-integration-company`,
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
          Important Links
        </p>

        <h2 className="text-3xl font-bold text-black mb-8">
          Important links related to {countryName} Import and Export data
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-3">
                <ChevronRight size={18} className="text-sky-500 shrink-0" />
                <span className="text-black font-medium underline group-hover:text-sky-600 transition">
                  {item.title}
                </span>
              </div>

              <ArrowUpRight
                size={18}
                className="text-black group-hover:text-sky-500 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}