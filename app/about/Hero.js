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
            Exim Trade Data provides global export and import trade analysis. We started with a simple goal: to make the day-to-day work of exporters and importers easier. To do that, we built a modern data infrastructure that delivers accurate, customised analysis for each client.
          </p>

          <p className="text-base md:text-lg text-black leading-relaxed">
            Our technical team brings more than ten years of experience in data mining and data processing. That experience goes into organised, reliable global export-import statistics, so you can follow current trade flows and see where demand is strongest around the world.
          </p>
          <p className="text-base md:text-lg text-black leading-relaxed mt-4">
            We collect customs shipment data from official sources across 200+ countries, clean and standardise it, and organise it by product, HS code, port, company and country. The result is an import export database you can search in seconds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
