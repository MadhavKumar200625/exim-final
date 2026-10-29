import React from 'react';
import Link from 'next/link';
const benefits = [
  {
    title: "Shipment Data API",
    desc: "Bring import and export shipment records into the systems your team already uses.",
    image: "import-export-data.webp",
  },
  {
    title: "CRM and ERP Integration",
    desc: "Connect trade data to your CRM or ERP and reduce manual file handling.",
    image: "trade-apis.webp",
  },
  {
    title: "Power Dashboards",
    desc: "Feed import data and export data into Power BI, Tableau or your own tools.",
    image: "cloud-api-solutions.webp",
  },
  {
    title: "Automate Research",
    desc: "Pull shipments for a product, HS code or country on a schedule.",
    image: "api-development.webp",
  },
  {
    title: "Build Products",
    desc: "Use trade statistics inside your own application.",
    image: "fix-api.webp",
  },
  {
    title: "Authentication and Support",
    desc: "Get secure authentication, API documentation and onboarding help from our team.",
    image: "api-maintenance-and-support.webp",
  },
];

const BestApiSolutions = () => {
  return (
   <section className="py-16 bg-linear-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-black">
        What You Can Do With the API
      </h2>
      <p className='text-lg pt-3 md:px-20'>
        Connect shipment data and trade statistics to your CRM, ERP, BI dashboard or product.


      </p>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white  shadow-xl border border-zinc-200 p-6 hover:shadow-2xl transition duration-300"
                >
                  <div className="h-34 w-[55%] mx-auto relative overflow-hidden">
  <img
    src={`/api-page/${benefit.image}`}
    alt={benefit.title}
    className="w-full h-full object-contain"
    loading="lazy"
    decoding="async"
  />
</div>
                  <h3 className="text-lg md:text-xl min-h-14 flex items-center justify-center font-semibold text-black my-3">{benefit.title}</h3>
                  <p className="text-sm text-black text-center">{benefit.desc}</p>
                </div>
              ))}
            </div>
  </div>
</section>
  )
}

export default BestApiSolutions
