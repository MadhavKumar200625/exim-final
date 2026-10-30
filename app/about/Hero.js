import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-8 bg-white overflow-hidden">
      <div className="px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Image with soft gradient overlay */}
        <div className="relative w-full">
          <div className="flex justify-center">
            <img
              src="/about/about-us.webp"
              alt="About Exim Trade Data"
              className="h-96"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 blur-3xl opacity-30 z-0"></div>
        </div>

        {/* Right: Text */}
        <div className="text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            We Turn Global Trade Data Into Business Opportunity
          </h2>

          <p className="text-base md:text-lg text-black mb-4 leading-relaxed">
            Exim Trade Data is a global import export data provider. We began with a simple goal: make the daily work of exporters and importers easier. To do that we built a data platform that turns customs shipment records into clear, searchable information.
          </p>

          <p className="text-base md:text-lg text-black leading-relaxed">
            We collect customs shipment data from official sources, clean and standardise it, and organise it by product, HS code, port, company and country. You can search the result in seconds and use it to find buyers and suppliers, follow competitors and understand demand.
          </p>
          <p className="text-base md:text-lg text-black leading-relaxed mt-4">
            Our mission is to make international trade data accessible, accurate and actionable for every exporter, importer and researcher. We envision a world where any business can enter any market with the same visibility as large corporations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
