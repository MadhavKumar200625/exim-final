"use client";

import Link from "next/link";
import React from "react";

const GlobalImpact = ({ country, points }) => {
  const countryName =
    country?.replace(/^./, (s) => s.toUpperCase()) || "Global";

  const defaultPoints = [
    "Explore 200+ international markets.",
    "Get the latest trends, prices, and risk forecasts.",
    "Keep an eye on your competitors.",
    `Find verified ${countryName} buyers and suppliers.`,
    "Increase your ROI with quality leads.",
  ];

  const displayPoints =
    Array.isArray(points) && points.length > 0 ? points : defaultPoints;

  return (
    <section className="px-6 sm:px-10 lg:px-16 mt-6 py-12 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-96">
            <img
              src="/countries/common-dashboard.webp"
              alt="Global Trade Intelligence Dashboard"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Exim Global Trade Intelligence System
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">
            Grow Your Global Reach with Global Trade Intelligence
          </h2>

          <ul className="mb-8 space-y-3">
            {displayPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"
                  aria-hidden="true"
                ></span>
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex md:justify-start md:ml-4 justify-center">
            <Link
              href="/pricing"
              className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow hover:scale-105 transition"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;