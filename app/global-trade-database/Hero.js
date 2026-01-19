
"use client"
import Link from "next/link";
import React, { useState } from "react";
import ScheduleADemo from "../Components/ScheduleADemo";

const Hero = () => {
      const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-linear-to-r pt-32 from-blue-50 via-white to-blue-50 pb-4 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Access the Global Trade Database of over 200+ Countries.
          </h2>
          <p className="text-xl text-black mb-8">
            Find High ROI business opportunities. Maximize your profit through{" "}
            <strong>Exim Global Trade Information System</strong>.
          </p>

          <div className="flex  gap-4">
            <button
              onClick={() => {
              setShowForm(true);
            }}
              className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Schedule a Demo
            </button>
            <a
              href="/api-development-and-integration-company"
              className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="p-10">
<div className="w-full">
          <img
  src="/global-trade-database/access-the-global-trade-database-of-over-200-countries.webp"
  alt="Access the global trade database of over 200 countries"
  loading="lazy"
  decoding="async"
  className="w-full rounded-lg h-full"
/>
        </div>
        </div>
        
      </div>
      <ScheduleADemo isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default Hero;
