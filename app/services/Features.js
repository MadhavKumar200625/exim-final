"use client";

import { useState } from "react";
import Link from "next/link";
import SampleDataForm from "../Components/SampleDataForm";

const features = [
  "Self-service search with expert help: run your own analysis and ask our analysts for guidance.",
  "Organised records: search shipments by HS code, product, company, port and country.",
  "Custom dashboards: view the trade metrics that matter to your team.",
  <>
    Easily organize fresh and old data. Dashboards, shipping records, and custom
    fields including{" "}
    <a href="/global-hs-code-list" className="text-blue-600 underline">
      HS codes
    </a>{" "}
    are all accessible on the move.
  </>,
  "Reports on request: order customised import export data reports for your products and countries.",
  "Price insight: compare the price range buyers pay and spot rising products and markets.",
  "Export-ready data: download results into your database or sales list.",
  "Team sharing: share findings with colleagues so everyone works from the same data.",
  "API access: connect shipment data to your CRM, ERP or BI tool.",
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
