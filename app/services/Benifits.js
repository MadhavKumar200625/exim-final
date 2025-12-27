import Link from "next/link";

import React from "react";

const Benifits = () => {
  const points = [
    {
      id: "01",
      title: (
        <>
          Discover a new marketplace for your import-export trade business with
          our analytically designed{" "}
          <Link
            href="/search-global-trade-data"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            global import export database
          </Link>
          .
        </>
      ),
    },
    {
      id: "02",
      title:
        "Find new, potential & active buyers and suppliers for your import-export trade business with our smartly developed tools and data.",
    },
    {
      id: "03",
      title:
        "Closely monitor the performance of your products in the global trade markets with the help of our latest and smartly developed tools and keep track of the market competition.",
    },
    {
      id: "04",
      title:
        "With our innovative and analytically built big databases, you can have fast access to thousands of millions of worldwide import export trade data to gain real-time insights into the global trade markets.",
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
