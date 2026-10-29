import Link from "next/link";

import React from "react";

const Benifits = () => {
  const points = [
    {
      id: "01",
      title: (
        <>
          Find new markets for your import-export trade business with searchable{" "}
          <a
            href="/search-global-trade-data"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            import export data
          </a>
          .
        </>
      ),
    },
    {
      id: "02",
      title:
        "Reach active importers and exporters, including prospects new to your radar.",
    },
    {
      id: "03",
      title:
        "Watch competitor shipments, prices and partners to understand market activity.",
    },
    {
      id: "04",
      title:
        "Filter a large customs database in seconds instead of reading raw trade files.",
    },
  ];

  return (
<section className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-20 text-black">
        <div className="max-w-7xl mx-auto space-y-16">
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {points.map((point) => (
            <div
              key={point.id}
              className="relative group bg-white/70 backdrop-blur-md border border-gray-200  p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl font-extrabold text-blue-600 mb-4">
                {point.id}
              </div>
              <p className="text-lg font-medium leading-relaxed">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
