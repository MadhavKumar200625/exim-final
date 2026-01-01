import Link from "next/link";
import React from "react";

const GlobalImpact = ({ points = [] }) => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-96">
            <img
              src="/countries/common-dashboard.webp"
              alt="Global Trade Intelligence Dashboard"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Exim Global Trade Intelligence System
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">
            Make an impact in the global market
          </h2>

          {/* Points List */}
          <ul className="mb-8 space-y-3">
            {points.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/pricing"
              className="bg-blue-600 text-lg text-white px-6 py-2 shadow hover:scale-105 transition inline-flex"
            >
              Get Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;