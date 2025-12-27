import React from "react";
import { CheckCircle } from "lucide-react";

const SearchGlobalData = ({ data }) => {
  return (
    <section className="w-full bg-gray-100 py-6 mt-4 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md md:h-96   ">
            <img
              src="/search-data-results/search-global-export-import-trade-data.webp"
              alt={data?.heading || "Search global export import trade data"}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            {data.heading}
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {data.content}
          </p>
{/* 
          {/* Pointers */}
          {/* <ul className="space-y-3">
            {data.pointers.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul> */} 
        </div>
      </div>
    </section>
  );
};

export default SearchGlobalData;