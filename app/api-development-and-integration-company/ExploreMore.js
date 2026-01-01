import Link from "next/link";
import React from "react";

const industries = [
  {
    title: "Automotive",
    heading:
      "Identify the Current Market Trends & Demands in the Automotive Market",
    description:
      "The Automotive Market is a very fast paced market in which everyone wants to excel with each other. Through our impressive trade intelligence platform, you can stand out amongst your competitors. Our interactive business intelligence reports help you with the accurate forecasts of the latest market technology, trends, and demands.",
    link: "automative",
  },
  {
    title: "Asset Management",
    heading:
      "Best Market Research Platform for Assets & Investment Companies",
    description:
      "Exim Trade Data provides the best market research platform for assets and investment companies. Explore the tons of global import and export companies’ profiles. Get into their shipment activities, identify their top assets and evaluate their market share. Identify the most profitable opportunities for investment and enhance your company’s assets.",
    link: "asset-management",
  },
  {
    title: "Energy",
    heading:
      "Become a Leader in the Energy Sector through Expert Market Intelligence",
    description:
      "The Energy Market is continuously striving for new innovations that offer a sustainable future and reasonable pricing. In order to keep pace with the challenging Energy market, you need to plan strategically. At Exim Trade Data, we provide expert energy market intelligence reports that help you predict the future risks, product pricing, production demand and discover the top buyers & suppliers in the Energy Market.",
    link: "energy",
  },
  {
    title: "Importers",
    heading:
      "Identify the Current Market Trends & Demands in the Automotive Market",
    description:
      "The Automotive Market is a very fast paced market in which everyone wants to excel with each other. Through our impressive trade intelligence platform, you can stand out amongst your competitors. Our interactive business intelligence reports help you with the accurate forecasts of the latest market technology, trends, and demands.",
    link: "importers",
  },
];

const ExploreMore = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14">
          Explore More Industries
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 p-5 group hover:-translate-y-1"
            >
              <div className="relative w-full sm:w-40 md:w-48 lg:w-60 aspect-4/3 border border-gray-200 bg-gray-50 shrink-0 overflow-hidden">
                <img
                  src={`/solutions/${industry.title
                    .toLowerCase()
                    .replace(/ /g, "-")}.webp`}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col text-center sm:text-left">
                <h4 className="text-md uppercase tracking-wide text-black font-semibold">
                  {industry.title}
                </h4>
                <h3 className="text-lg md:text-xl font-semibold text-black mt-1">
                  {industry.heading}
                </h3>
                <p className="text-black text-sm mt-2 line-clamp-3 leading-relaxed">
                  {industry.description}
                </p>
                <a
                  href={`${industry.link}`}
                  className="mt-3 inline-block text-sm font-medium text-blue-600"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/industries-covered"
            className="inline-block bg-blue-600 text-white font-semibold text-lg px-7 py-3 hover:scale-105 shadow-md transition-all duration-300"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;