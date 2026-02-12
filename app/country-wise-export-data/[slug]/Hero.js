import Link from "next/link";
import React from "react";

const Hero = ({ country, hero }) => {
  return (
    <section className="w-full bg-white text-black pb-14 pt-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">

        {/* Upper Small Title */}
        <p className="uppercase tracking-wider text-md font-semibold text-black">
          {country} Export Data
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {hero?.title || `Get Latest ${country} Export Customs Shipment Trade Data`}
        </h2>

        {/* Description */}
        {hero?.description && (
          <p className="text-lg leading-relaxed">
            {hero.description}
          </p>
        )}

        {/* Optional CTA Text */}
        {hero?.ctaText && (
          <p className="italic text-gray-700">{hero.ctaText}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href={hero?.onlineDataLink || "/pricing"}
            className="bg-blue-600 text-lg text-white px-6 py-2 shadow cursor-pointer hover:scale-105 transition"
          >
            {hero?.onlineDataText || "Online Data"}
          </a>

          <a
            href={hero?.offlineDataLink || "/contact"}
            className="bg-white border-blue-600 border text-lg text-black px-6 py-2 shadow cursor-pointer hover:scale-105 transition"
          >
            {hero?.offlineDataText || "Offline Data"}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;