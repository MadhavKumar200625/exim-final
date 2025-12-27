import React from 'react'
import Link from 'next/link'

const Hero = ({heading}) => {
  return (
    <section className="bg-blue-50 pb-12 pt-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          {heading ?? "Directory Of Import Export Products Starting With A Alphabet"}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Schedule a Demo
          </Link>
          <Link
            href="/api-development-and-integration-company"
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Get API Access
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero