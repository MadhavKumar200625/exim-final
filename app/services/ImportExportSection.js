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
        Get Valuable Import Export Data Statistics
      </h2>
      <p className="mt-4 text-black text-base md:text-lg">
        Identify business prospects from top trading countries by <strong>HS Code</strong>, Product Name, Description, Quantity, Value, Importer Name, Exporter Name, Port and Shipment Details. Get customised import export data reports and expand your business to the global market.
      </p>
    </div>
    <div className="flex justify-center">
      <button onClick={()=>{setShowForm(true)}}  className="relative text-xl cursor-pointer inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300  bg-blue-600  hover:scale-105">
             Explore More
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