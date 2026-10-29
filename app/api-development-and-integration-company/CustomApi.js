import React from 'react'
import { Lightbulb } from 'lucide-react'

const CustomApi = () => {
  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-black">
        Trade Data API for Your Own Systems
      </h2>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8 border border-gray-200 hover:shadow-2xl transition">
      <div className="shrink-0 flex justify-center items-center w-40 h-40">
<Lightbulb className="w-32 h-32 text-blue-600 animate-pulse" />
     </div>

      <div>
        <p className="text-lg text-black leading-relaxed">
          Get global trade data where your team already works. The Exim Trade Data API delivers shipment records and trade statistics into your CRM, ERP, BI dashboard or product, so your team does not have to download and upload files by hand.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default CustomApi
