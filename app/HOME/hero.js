"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScheduleADemo from "../Components/ScheduleADemo";

export default function Hero() {
    const [showForm, setShowForm] = useState(false);
  
  return (
    <section className="bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-black flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-4">
             Best Global Import and Export Data Provider

          </h1>

          <p className="text-md md:text-lg text-black mb-8">
            Looking to grow your international import-export trade business? Access verified global import and export data to discover authentic buyers and sellers from over 200+ countries. Our platform delivers comprehensive customs shipment records, including detailed shipment records insights, and helps you connect with real trading partners through a world-class trade intelligence service.</p>

          <p className="text-md md:text-lg text-black mb-8">
           Our Global Import Export Database provides essential international trade statistics on who is trading what, where, and how much. It includes detailed information on buyers (importers) and sellers (exporters) such as company names, trade volumes, <a href="/global-hs-code-list" className="text-blue-600 font-bold hover:underline">HSN Code List</a>, product categories, shipment values, origin or destination countries, ports used, and transaction frequency.
</p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={()=>{setShowForm(true)}}
              className="relative inline-block px-6 py-3 text-white font-semibold text-sm md:text-lg overflow-hidden group bg-blue-600"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
              <span className="relative z-10">Consult Our Expert</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <Image
            src="/homepage/home.webp"
            alt="Global import export trade data platform"
            width={600}
            height={300}
            priority
            className="w-full max-w-lg mx-auto"
          />
        </div>

      </div>
      <ScheduleADemo
                    isOpen={showForm}
                    onClose={() => setShowForm(false)}
                  />
    </section>
  );
}