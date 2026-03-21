import React from "react";
import Link from "next/link";

const GrowthSection = () => {
  return (
    <section className="bg-[#f4f9ff] py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Best Market Research Platform
          </h2>

          <p className="text-md md:text-lg text-gradient text-black bg-clip-text mb-4">
            Get Meaningful Industrial Insights with Exim GTIS (Global Trade Information Service).
We are amongst the top global <span className="font-bold">import and export data</span> providers and also the best market intelligence platform that helps identify the key performance factors for your company and streamline your workflow. Find the latest market trends, most traded HS codes, countries, ports, competitors, and top import-export companies. Mitigate financial risk and reach out to the verified buyers and suppliers. Double your sales and maximize revenue with our market research platform, which provides HS codes, country-wise trade data, <a href="/global-ports" className="text-blue-600 hover:underline">Ports Data</a>, and top import-export companies. Mitigate financial risk and reach out to the verified buyers and suppliers. Double your sales and maximize revenue with our market research platform.
          </p>

          

          <div className="flex flex-wrap gap-4">
            {/* Explore Button */}
            <a
              href="/global-trade-database"
              
              className="relative px-6 py-3 bg-blue-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <span className="z-10 relative">Explore Exim GTIS</span>
            </a>

            {/* Get API Access Button */}
            <a
              href="/api-development-and-integration-company"
              
              className="cursor-pointer relative px-6 py-3 bg-blue-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10">Get API Access</span>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src="/homepage/best-market-research-platform.webp"
            alt="Market research platform "
            className="max-w-md w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;