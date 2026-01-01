import React from 'react'
import Link from 'next/link'

const Hero = ({heading,subHeading}) => {
  return (
    <section className="bg-blue-50 pb-12 pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          {heading ?? "Global Companies List - Importers Exporters Directory - Country Wise"}
        </h2>
        <h3 className=" text-md  text-black mb-8">
          {subHeading?? "Find top buyers and suppliers of over 200+ countries from our global companies list. Discover top import export companies from our importers exporters directory database. Search top importers and exporters of a country in an alphabetical order. Here, we have listed the top importers and exporters from India. Similarly you can search for other countries."}
        </h3>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/pricing"
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Schedule a Demo
          </a>
          <a
            href="/api-development-and-integration-company"
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Get API Access
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero