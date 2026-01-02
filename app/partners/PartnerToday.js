import React from 'react'


const PartnerToday = () => {
  return (
<section className="bg-white py-8 md:py-14 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
      Partner with Exim Trade Data Today!
    </h2>
    <p className="text-lg sm:text-xl text-black font-medium">
      Please email us with sample data.
    </p>
    <div className='flex justify-center gap-5'>
      <a
      href="mailto:info@eximtradedata.com"
      className="inline-flex items-center gap-2 mt-4 px-8 py-3  bg-blue-600 text-white font-semibold text-lg shadow-md transition-all hover:scale-105 hover:shadow-lg"
    >
      Email Us
      <span className="text-xl">→</span>
    </a>

    <a
      href="tel:+919625812393"
      className="inline-flex items-center gap-2 mt-4 px-8 py-3  bg-blue-600 text-white font-semibold text-lg shadow-md transition-all hover:scale-105 hover:shadow-lg"
    >
      Call Us
      <span className="text-xl">→</span>
    </a>

    </div>
    
  </div>
</section>
  )
}

export default PartnerToday