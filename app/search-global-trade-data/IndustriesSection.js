"use client";
import React from "react";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const IndustriesWeCover = () => {
  const industries = [
    {
      title: "Education & Academics",
      description:
        "To assist researchers, educators, and trainees in filtering value from the noise of an ever-expanding digital universe, we promote world-class academic and educational practice across civilian, commercial, and military worlds.",
    },
    {
      title: "Defense & Aerospace",
      description:
        "Our offerings for the whole aviation and military supply chain make use of cutting-edge technology to provide an unrivaled mix of data, expertise, technical knowledge, and analytics.",
    },
    {
      title: "Automotive",
      description:
        "Exim’s auto specialists help suppliers, dealers, and automakers understand and act on opportunities, risk, legislation, and technology disruption with data-driven solutions across the value chain.",
    },
    {
      title: "Chemical",
      description:
        "We assist leaders in making confident decisions amid market volatility, regulatory challenges, and shifting demand using data on economic risk, raw materials, and environmental compliance.",
    },
    {
      title: "Construction",
      description:
        "From suppliers to architects, get reliable data and insights into present and future market circumstances and building requirements in the ever-changing construction sector.",
    },
    {
      title: "Natural Resources & Energy",
      description:
        "600+ energy specialists and 800+ geoscientists provide insights into the full energy value chain — from oil, gas, and coal to renewables, local stations, and power grids.",
    },
    {
      title: "Maritime & Commercial",
      description:
        "Navigate the complex world of seaborne trade with ownership data, live ship movements, risk profiles, and intelligence tools built on 250+ years of expertise.",
    },
    {
      title: "Services in the Financial Sector",
      description:
        "Financial & Capital Markets aids in strategic planning and portfolio management with award-winning forecasts and analyses for banking, asset management, and insurance.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-black mb-20">
          Industries We Cover
        </h2>

        <div className="grid gap-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 pt-16 shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
            >
              {/* Floating Icon */}
              <div className="absolute -top-16 left-6 w-30 h-30 rounded-full bg-sky-100 flex items-center justify-center shadow-md">
                <div className="w-18 h-18">
                  <img
                    src={`/search-global-trade-data/${slugify(
                      industry.title
                    )}.webp`}
                    alt={industry.title}
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeCover;