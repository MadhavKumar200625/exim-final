import React from 'react'
import Link from 'next/link'

const Hero = ({countryName}) => {
  return (
    <section className="w-full bg-white pt-32 pb-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="w-full">
          <img
            src="https://old-net.eximtradedata.com/images/global_ports.webp"
            alt="Global Ports Data"
            className="w-full h-auto shadow-lg"
          />
        </div>
    
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Ports Data of {countryName}
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed">
Get detailed insights into the top {countryName} sea ports with verified <strong>port data {countryName}</strong>. Find a comprehensive report on {countryName}&apos;s top seaports shipment volumes, top traded goods, country of origin, destination, districts, buyers and suppliers through {countryName} ports container data. Gain the latest insights on shipment activities across {countryName} sea ports. Access the export import port data {countryName} year wise with Exim Intelligence Platform.          </p>
    
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <a
        href="/pricing"
className="relative overflow-hidden px-6 mx-1 py-3 bg-blue-600 cursor-pointer  text-white text-md hover:scale-105  transition-all    font-semibold shadow-xl group"      >
        Schedule a Demo
      </a>
      <a
        href="/api-development-and-integration-company">
        <button className="relative overflow-hidden px-6 mx-1 py-3 bg-blue-600 cursor-pointer text-white text-md hover:scale-105  transition-all    font-semibold shadow-xl group">
              Get API Access
                </button>
      </a>
    </div>
        </div>
      </div>
    </section>
  )
}

export default Hero