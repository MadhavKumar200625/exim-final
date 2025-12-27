import React from "react";

const CustomsSection = () => {
  return (
    <section
      className="relative py-14 px-4 md:px-16 bg-slate-50 overflow-hidden"
      id="insights"
    >
      <div className="max-w-8xl text-center mb-12 animate-fadeUp">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Empower Your Market Research With Global Import Export Data
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Card 1 */}
        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-100">
          <img
            src="/homepage/actionable-insights.webp"
            alt="Actionable insights from global import export customs data"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            Actionable Insights
          </h3>
          <p className="text-gray-600 text-md text-center">
            We combine the years of accumulated expertise of our data scientists and business intelligence tools to discover meaningful insights from the global customs data. All categories to make data-driven current market opportunities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-200">
          <img
            src="/homepage/know-your-market.webp"
            alt="Know your market using global shipment and trade data"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            Know Your Market
          </h3>
          <p className="text-gray-600 text-md text-center">
            For any business, the main challenge is to find buyers for their products. Our well-researched global shipment data helps you to evaluate and develop your marketing strategy to grab new buyers in the foreign market.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-300">
          <img
            src="/homepage/streamline-your-business.webp"
            alt="Streamline business operations with import export trade data"
            className="px-2 pb-10 pt-2 mx-auto"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-xl font-semibold text-black mb-3 text-center">
            Streamline Your Business
          </h3>
          <p className="text-gray-600 text-md text-center">
            Streamline all your trading operations and pave the way for top-line growth for your business. With a precise overview of every business activity, discover the inefficient processes and optimize your business operation through our global import export trade data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomsSection;