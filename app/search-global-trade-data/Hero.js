"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchComponent from "../Components/SearchComponent";
import ScheduleADemo from "../Components/ScheduleADemo";

const Hero = () => {
        const [showForm, setShowForm] = useState(false);
  
  return (
    <section className="px-6 pb-12 pt-28 bg-linear-to-b from-blue-100 via-sky-50 to-white">
      <div className="mx-auto space-y-12">
        {/* First Block */}
        <div>
          <h2 className="text-2xl md:text-3xl mx-auto max-w-6xl text-center font-bold text-black mb-4">
            Search Global Trade Data in Seconds
          </h2>

          <p className="text-black max-w-6xl mx-auto text-center mb-6">
            Type a product, HS code or country and see matching customs shipment data. Narrow the results by date, port, quantity and value to find the trade flow you need.
          </p>

          <div className="mb-8">
            <SearchComponent />
          </div>
        </div>

        {/* Second Block */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Search the Import Export Database
          </h3>

          <p className="text-gray-700 mb-6">
            Search by product or HS code to see who trades it, where and at what price. Search by company, country or port, compare suppliers and prices, build a buyer list, and spot new markets where imports are growing.
          </p>

          <button onClick={()=>{setShowForm(true)}}
            className="inline-block bg-blue-600 text-white cursor-pointer text-lg px-6 py-3 font-medium shadow hover:scale-105 transition-transform"
          >
            Schedule Demo
          </button>
        </div>
      </div>
      <ScheduleADemo
                                isOpen={showForm}
                                onClose={() => setShowForm(false)}
                              />
    </section>
  );
};

export default Hero;
