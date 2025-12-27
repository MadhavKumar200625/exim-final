import React from 'react'

const ClinetsAndPartners = () => {
  return (
    <section className="bg-slate-100 px-4 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
    
    {/* Left Text Content */}
    <div className="space-y-6 lg:text-left text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
        We are looking for more reputed and trusted
        import export data providers across the globe.
      </h2>
      <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
        We believe in growing together with our<br />
        clients and partners.
      </h2>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
  src="/partners/import-export-data-providers.webp"
  alt="Global Partnership"
  className="w-[65%]"
  loading="lazy"
  decoding="async"
/>
    </div>
    
  </div>
</section>
  )
}

export default ClinetsAndPartners