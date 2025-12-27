import React from 'react'
import { Lightbulb } from 'lucide-react'

const CustomApi = () => {
  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-black">
        Custom API Development & Integration
      </h2>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8 border border-gray-200 hover:shadow-2xl transition">
      <div className="shrink-0 flex justify-center items-center w-40 h-40">
<Lightbulb className="w-32 h-32 text-blue-600 animate-pulse" />
     </div>

      <div>
        <p className="text-lg text-black leading-relaxed">
          Leverage the power of import export data through our set of Trade-APIs. Automate your market research by applying a specific set of rules. These include various parameters like data type, country wise, importer, exporter wise, time duration etc. Streamline your company goals and improve sales potential with well organized information. Exim Trade Data is the leading custom API development and integration service provider company offering dedicated APIs that help you create advanced web applications.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default CustomApi