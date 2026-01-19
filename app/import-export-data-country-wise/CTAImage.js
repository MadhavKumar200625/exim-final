"use client"
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import ScheduleADemo from '../Components/ScheduleADemo';

const CTAImage = () => {
        const [showForm, setShowForm] = useState(false);
    
  return (
    <section className="w-full bg-linear-to-r from-blue-200 to-blue-50 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl max-w-2xl font-bold leading-tight text-center md:text-left">
            GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!
          </h2>

        <button onClick={()=>{setShowForm(true)}}

            className="flex items-center gap-3 bg-blue-600 text-white text-lg px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Schedule a Demo
            <ArrowRight size={20} />
          </button>
        </div>
        <ScheduleADemo
                                        isOpen={showForm}
                                        onClose={() => setShowForm(false)}
                                      />
      </section>

      
  )
}

export default CTAImage