'use client'
import React, { useState } from 'react'


const TabsSection = ({ heading, points }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="w-full bg-slate-100 py-14 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14 tracking-tight">
          {heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Tabs */}
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            {points.map((point, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 px-6 py-1 cursor-pointer border transition-all text-left shadow-md hover:shadow-lg duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-600 text-white border-blue-600 scale-[1.02] backdrop-blur-sm'
                    : 'bg-white text-black border-gray-300 hover:bg-gray-50'
                }`}
              >
                {point.icon && point.icon!=""(
                  <img
                    src={point.icon}
                    alt={point.heading}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                )}
                <span className="font-medium text-base md:text-lg">
                  {point.heading}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
<div className="relative w-full md:w-2/3 p-10 bg-white/80 backdrop-blur-md border border-blue-300/30 shadow-xl  transition-all duration-300 group hover:scale-[1.01]">
  {/* Glow Layer */}

  <div className="relative z-10">
    <div className="flex items-start mb-6">
      {points[activeIndex].icon && points[activeIndex].icon != ""(
        <img
          src={points[activeIndex].icon}
          alt={points[activeIndex].heading}
          width={48}
          height={48}
          className="mr-4"
        />
      )}
      <h3 className="text-2xl md:text-3xl font-semibold text-black">
        {points[activeIndex].heading}
      </h3>
    </div>
    <p className="text-black text-lg leading-relaxed">
      {points[activeIndex].description}
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

export default TabsSection