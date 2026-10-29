import React from "react";

const CustomsSection = () => {
  return (
    <section
      className="relative py-14 px-4 md:px-16 bg-slate-50 overflow-hidden"
      id="insights"
    >
      <div className="max-w-8xl text-center mb-12 animate-fadeUp">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          What You Get in Our Import Export Database
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Card 1 */}
        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-100">
          <img
            src="/homepage/actionable-insights.webp"
            alt="Actionable insights"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            Importer and Exporter Details
          </h3>
          <p className="text-gray-600 text-md text-center">
            Review trading partners and shipment history to find suppliers, buyers and new markets. Explore <a href="/import-export-data-country-wise" className="text-blue-600 font-bold hover:underline">country-wise import and export data</a> to compare activity by market.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-200">
          <img
            src="/homepage/know-your-market.webp"
            alt="Know your market"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            HS Code and Product Data
          </h3>
          <p className="text-gray-600 text-md text-center">
            Search shipments by HS code or product description to see where goods are traded and compare origins.
          </p>
        </div>

        {/* Card 3 */}

        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-300">
          <img
            src="/homepage/streamline-your-business.webp"
            alt="Streamline business operations"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            Trade Statistics, Ports and Routes
          </h3>
          <p className="text-gray-600 text-md text-center">
            Compare values, volumes and unit prices to size a market. See which ports and routes carry which goods, and review trade activity by country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomsSection;
