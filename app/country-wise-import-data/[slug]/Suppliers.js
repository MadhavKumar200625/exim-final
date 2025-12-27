import Link from "next/link";
import React from "react";

const Suppliers = ({ country, data = [] }) => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-slate-100">
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Top Importers in {country}
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">
            {country} Buyers List
          </h2>

          {/* Buyers List */}
          <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {data.map((name, idx) => (
              <li key={idx} className="text-black flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                <span>{name}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex justify-start">
            <Link
              href="/contact"
              className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition-transform inline-flex"
            >
              Get Global Buyers Details
            </Link>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center lg:justify-end">
          <Link href="/global-ports" className="w-full max-w-xs sm:max-w-sm">
            <img
              src="https://old-net.eximtradedata.com/images/port-card.webp"
              alt={`${country} Importers`}
              width={500}
              height={600}
              loading="lazy"
              className="rounded-lg shadow-md object-contain w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;