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
             Import Export Data of 200+ Countries

          </h1>

          <p className="text-md md:text-lg text-black mb-8">
            Exim Trade Data gives exporters, importers and researchers searchable customs shipment data from more than 200 countries. See who is trading what, where, in what quantity and at what price, then use that information to find real buyers, reliable suppliers and new markets.
          </p>

          <p className="text-md md:text-lg text-black mb-8">
           Our global import export database brings together importer and exporter names, HS codes, product descriptions, shipment values, quantities, origin and destination countries, ports and shipment dates. The exact fields vary by country, depending on what each customs authority publishes.
</p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={()=>{setShowForm(true)}}
              className="relative inline-block px-6 py-3 text-white font-semibold text-sm md:text-lg overflow-hidden group bg-blue-600"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
              <span className="relative z-10">Get a Free Demo</span>
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
