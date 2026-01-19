"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ScheduleADemo from '../Components/ScheduleADemo'

const Hero = ({heading}) => {
                const [showForm, setShowForm] = useState(false);
  
  return (
    <section className="bg-blue-50 pb-12 pt-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          {heading ?? "Directory Of Import Export Products Starting With A Alphabet"}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
             onClick={()=>{setShowForm(true)}}
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Schedule a Demo
          </button>
          <a
            href="/api-development-and-integration-company"
            className="bg-blue-600 text-white px-6 py-3 font-semibold uppercase tracking-wide shadow hover:scale-105 transition-transform duration-300"
          >
            Get API Access
          </a>
        </div>
      </div>
      <ScheduleADemo
                                            isOpen={showForm}
                                            onClose={() => setShowForm(false)}
                                          />
    </section>
  )
}

export default Hero