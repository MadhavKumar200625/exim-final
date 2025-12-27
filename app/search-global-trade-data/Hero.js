"use client";

import React from "react";
import Link from "next/link";
import SearchComponent from "../Components/SearchComponent";

const Hero = () => {
  return (
    <section className="px-6 pb-12 pt-28 bg-linear-to-b from-blue-100 via-sky-50 to-white">
      <div className="mx-auto space-y-12">
        {/* First Block */}
        <div>
          <h2 className="text-2xl md:text-3xl mx-auto max-w-6xl text-center font-bold text-black mb-4">
            Search Global Trade Data by Country, HS Code &amp; Product
          </h2>

          <p className="text-black max-w-6xl mx-auto text-center mb-6">
            Get unlimited access to our online global trade data portal. Perform
            free search on global trade data by country, HS Code and product.
            Find detailed shipment records with essential data fields including
            product description, quantity, unit, value, country of
            origin/destination, buyer supplier name and port of
            loading/unloading.
          </p>

          <div className="mb-8">
            <SearchComponent />
          </div>
        </div>

        {/* Second Block */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Discover World Bank Trade Data by Country with Exim GTIS
          </h3>

          <p className="text-gray-700 mb-6">
            Exim Global Trade Information System is a cost effective business
            tool that helps you find potential business opportunities in the
            international market. Get accurate analytics and forecasts on
            industry wise international imports and exports, product pricing,
            production quantity, importers exporters shipments, competitors and
            risk involved in the business.
          </p>

          <Link
            href="/pricing"
            prefetch={false}
            className="inline-block bg-blue-600 text-white text-lg px-6 py-3 font-medium shadow hover:scale-105 transition-transform"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;