"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TruckElectricIcon } from "lucide-react";

const tabs = [
  { name: "Summary", active: false },
  { name: "Buyers", active: false},
  { name: "Suppliers", active: false },
  { name: "Shipments", active: false },
  { name: "Products", active: false },
  { name: "Contact", active: false },
];

const Hero = ({ heading }) => {
  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 text-black pt-32 pb-16 overflow-hidden">
      

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <h1
          
          className={`text-4xl text-black font-bold ${heading?"mb-10":"mb-0"}`}
        >
          {/* {heading} */}
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab, i) =>
            tab.active ? (
              <span
                key={i}
                className="px-5 cursor-pointer py-2 border border-black/50 bg-black/5 backdrop-blur-sm rounded-lg text-black font-medium"
              >
                {tab.name}
              </span>
            ) : (
              <Link
              key={i}
              href="/pricing"
              className="px-5 py-2 border border-black/30 text-black/50 rounded-lg font-medium hover:text-black hover:border-black/50 transition cursor-pointer"
            >
              {tab.name}
            </Link>
            
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;