import React from "react";

const CodeOfConductSection = () => {
  return (
    <section className="py-12 bg-linear-to-br from-white via-gray-50 to-blue-100">
      <div className="mx-8 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="/about/code-of-conduct.webp"
            alt="code of conduct"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-2/3 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our Mission and Values
          </h2>

          <p className="text-black mb-4 leading-relaxed">
            Our mission is to make international trade data accessible, accurate and actionable for every exporter, importer and researcher.
          </p>

          <p className="text-black mb-4 leading-relaxed">
            We put accuracy first, make trade statistics clear and easy to use, and support customers from demo to deal, not just until the invoice.
          </p>

          <p className="text-black mb-6 leading-relaxed">
            We serve exporters looking for buyers, importers looking for suppliers, corporations tracking competitors, banks and law firms checking counterparties, and universities studying trade flows.
          </p>

          <blockquote className="italic text-blue-600 font-semibold text-lg border-l-4 border-blue-600 pl-4">
            A world where any business can enter any market with the same visibility as a large corporation.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;
