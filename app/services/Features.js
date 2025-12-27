"use client";

import { useState } from "react";
import Link from "next/link";
import SampleDataForm from "../Components/SampleDataForm";

const features = [
  "Measure trade metrics and evaluate the market with a unique do-it-yourself alternative to cumbersome raw trade data that includes on-screen assistance from a professional business analyst for a low pay-per-record fee.",
  "Create an organized database by cleaning and categorize your workplace with import export customs data fields and auto rules.",
  "Access our highly advanced customized dashboards and global export import trade data to make profitable business decisions based on current data reports and valuable industry insights.",
  <>
    Easily organize fresh and old data. Dashboards, shipping records, and custom
    fields including{" "}
    <Link href="/global-hs-code-list" className="text-blue-600 underline">
      HS codes
    </Link>{" "}
    are all accessible on the move.
  </>,
  "Access the latest import export trade data & business intelligence reports, equipped with cutting-edge features and reliable global trade.",
  "A cutting-edge platform that allows users to change trade plans based on market data by finding increasing items, markets, and the appropriate price range, as well as contact information for exporters and importers.",
  "Our import export data services empower you to spice up your database with actionable and customizable ready-to-use import export data.",
  "A platform that allows you to create, share and communicate while enlisting the help of your team and advancing your company strategies.",
];

export default function FeaturesSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return; // prevents duplicate opens (bot & user safe)
    setOpen(true);
  };

  return (
    <section className="w-full bg-linear-to-b from-white to-blue-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-black">
          Features of Import Export Data
        </h2>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <img
              src="/services/features-of-import-export-data.webp"
              alt="Features of Import Export Data"
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-8">
              {features.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="text-xl font-bold text-blue-600 shrink-0">
                    {String(index + 1).padStart(2, "0")}.
                  </div>
                  <div className="text-black text-base leading-relaxed border-b border-gray-300 pb-4">
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center lg:text-left">
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center justify-center px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:scale-105 transition"
              >
                Explore More
              </button>

              {open && (
                <SampleDataForm
                  isOpen={open}
                  onClose={() => setOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}