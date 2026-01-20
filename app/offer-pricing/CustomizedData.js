"use client"
import React, { useState } from 'react'
import SampleDataForm from '../Components/SampleDataForm';

const CustomizedData = () => {
  const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      if (open) return; // prevents duplicate opens (bot & user safe)
      setOpen(true);
    };
  return (
    <section className="py-12 bg-linear-to-t from-white to-blue-50 text-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
         <img
  src="/countries/common-dashboard.webp"
  alt="Customized Import Export Data Dashboard"
  loading="lazy"
  decoding="async"
  className="w-full rounded-lg shadow-lg"
/>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
            Only Pay for Your Need
          </p>
          <h2 className=" md:text-4xl font-extrabold leading-tight mb-6">
            Customized Import Export Data
          </h2>
          <p className="text-xl mb-4">
            Through our customized data plans, you can pay accordingly as per
            your budget and requirements. Our Market Research Platform assists
            you in saving and downloading the import export shipment records by
            HS Code, Product, Buyer, and Supplier..
          </p>
          <p className="text-xl mb-8">
            You can explore exclusive countries&apos; trade data including Turkey,
            Bangladesh, Thailand, Ghana, Chad, Mexico, Tanzania etc. We provide
            data on demand and assure complete customer satisfaction. Our expert
            team of professionals is available 24*7 to assist our clients.
          </p>

          {/* CTA */}
          <button onClick={handleOpen} className="bg-blue-600 text-white font-semibold px-8 py-3 transition transform hover:scale-105">
            Get Started →
          </button>
        </div>
      </div>

      {open && (
                <SampleDataForm
                  isOpen={open}
                  onClose={() => setOpen(false)}
                />
              )}
    </section>
  )
}

export default CustomizedData