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
            About Us
          </h2>

          <p className="text-base md:text-lg text-black mb-4 leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-600">
              Exim Trade Data
            </span>{" "}
            analysis helps you provide global export and import trade analysis.
            Exim Trade Data was founded to resolve all your export-import business
            operations. We have come up with a modern infrastructure setup that
            provides more accurate and custom-made data analysis solutions. Our
            highly professional technical team has more than a decade of
            expertise in data mining and data processing.
          </p>

          <p className="text-base md:text-lg text-black leading-relaxed">
            We are capable of delivering the most accurate systematic global
            export-import statistics that help you to analyze ongoing trade
            inflow and suitable demand positions across India and around the
            globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;