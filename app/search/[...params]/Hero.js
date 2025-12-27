"use client";
import SearchComponent from "@/app/Components/SearchComponent";
import Link from "next/link";
import React from "react";
const Hero = ({data}) => {
  return (
    <section className="px-6   pt-28 bg-linear-to-b from-blue-100 via-sky-50 to-white">
      <div className=" mx-auto space-y-12">
        {/* First Block */}
        <div>
          <h2 className="text-2xl md:text-3xl mx-auto max-w-6xl text-center font-bold text-black mb-4">
            {data.heading ?? "Search Global Trade Data by Country, HS Code &amp; Product"}
          </h2>
          <p className="text-black max-w-6xl mx-auto text-center mb-6">
            {data.subheading ?? `Get unlimited access to our online global trade data portal. Perform
            free search on global trade data by country, HS Code and product.
            Find detailed shipment records with essential data fields including
            product description, quantity, unit, value, country of
            origin/destination, buyer supplier name and port of
            loading/unloading.`}
          </p>

          {/* Search Bar Placeholder */}
          <div className="mb-8">
              <SearchComponent></SearchComponent>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero