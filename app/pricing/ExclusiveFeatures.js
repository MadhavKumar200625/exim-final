import Link from 'next/link'
import React from 'react'

const ExclusiveFeatures = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Some Exclusive Features of our Global Trade Database
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="shadow-xl p-8 text-left bg-linear-to-br from-[#f9f9ff] to-[#e6f0ff] border border-blue-100">
            <h3 className="text-xl font-semibold text-black mb-4">
              Analyze Your Product Demand
            </h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">➤</span> Real-time shipment records</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">➤</span> Global Products List</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">➤</span> Potential Buyers List</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">➤</span> Global Suppliers Data</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">➤</span> Most traded HS Codes</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="shadow-xl p-8 text-left bg-linear-to-br from-[#fff8f5] to-[#ffeae0] border border-orange-100">
            <h3 className="text-xl font-semibold text-black mb-4">
              Empower Your Research With
            </h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">✔</span> Global Trends Reports</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">✔</span> Chapter Wise Reports</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">✔</span> Product Specific Reports</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">✔</span> Country-Wise Data Records</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">✔</span> Importer Exporter Nexus</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="shadow-xl p-8 text-left bg-linear-to-br from-[#f5fff9] to-[#e0ffee] border border-green-100">
            <h3 className="text-xl font-semibold text-black mb-4">
              Find Quality Business Leads With
            </h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">★</span> Buyers Dashboard</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">★</span> Exporters Directory</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">★</span> Contact Information</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">★</span> Global Company Profiles</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 text-lg">★</span> Importers Exporters Tree</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mt-10 mx-4 md:mx-24 text-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Our Plan Inclusions
        </h2>

        <p className="mb-4">
          Get subscribed to our plans, specially crafted for the Canadian market, and boost your import export business.
        </p>

        <p className="mb-4">
          We have the most cost-effective plans with extensive features and more control. You can access, save, and download the import export data reports of multiple countries by HS Code, product, price, quantity, importer, exporter, and port at any point in time.
        </p>

        <p className="mb-4">
          Get affordable and customizable plans, pricing that meet your requirements. The Search and Download Limit may differ for every single subscription plan.
        </p>

        <p className="mb-4">
          The Search and Download Limit may differ for every subscription plan.
        </p>

        <p className="font-semibold text-red-600 mb-4">
          The above pricing plans are exclusive of 18% GST.
        </p>

        <p>
          <span className="font-semibold">
            To check our plans and pricing for other countries –
          </span>{" "}
          <a
            href="/offer-pricing"
            className="cursor-pointer bg-blue-600 px-3 py-2 text-white font-bold animate-pulse"
          >
            Click Here
          </a>
        </p>
      </div>
    </section>
  )
}

export default ExclusiveFeatures