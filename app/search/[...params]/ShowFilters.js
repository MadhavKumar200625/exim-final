import React from 'react'
import { X } from "lucide-react";
import Link from 'next/link';

const ShowFilters = ({ appliedFilters }) => {
  const baseUrl = "search"
  const buildUrl = (filters) => {
    return `${baseUrl}/${filters
      .map((f) => `${f.label.replace(" ","-").toLowerCase()}-${f.value.replace(" ","_").toLowerCase()}`)
      .join("/")}`;
  };

  return (
    <div className=" bg-transparent px-4 pb-4 -mt-10 ml-24">
      <div className="flex flex-wrap gap-2">
        {appliedFilters?.map((filter, index) => {
          // New filters array without current one
          const updatedFilters = appliedFilters.filter((_, i) => i !== index);
          const newUrl = buildUrl(updatedFilters);
          if(filter.label.toLowerCase() != "type" && filter.label.toLowerCase() != "country"){
            return (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >

              <span>
                {filter.label}: {filter.value}
              </span>

              {/* Link instead of button */}
              <a
                href={`/${newUrl}`}
                className="hover:bg-blue-100 rounded-full p-1 transition"
              >
                <X className="w-4 h-4" />
              </a>
            </div>
          );
          }
          
        })}
      </div>
    </div>
  )
}

export default ShowFilters