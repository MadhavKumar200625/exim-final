"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import UnlockDataForm from '../Components/UnlockDataForm';


const ImportExportSection = () => {
    const [showForm, setShowForm] = useState(false);

  return (
    <section className="w-full py-20 bg-linear-to-br from-white via-sky-50 to-white ">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Import Export Data Statistics That Matter
      </h2>
      <p className="mt-4 text-black text-base md:text-lg">
        Our records can include HS code, product description, quantity, value, ports and shipment details, depending on the country. Ask for a customised import export data report to take your business into new markets.
      </p>
    </div>
    <div className="flex justify-center">
      <button onClick={()=>{setShowForm(true)}}  className="relative text-xl cursor-pointer inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300  bg-blue-600  hover:scale-105">
             Request a Free Demo
              </button>
    </div>
  </div>
   <UnlockDataForm
                      isOpen={showForm}
                      onClose={() => setShowForm(false)}
                    />
</section>
  )
}

export default ImportExportSection
