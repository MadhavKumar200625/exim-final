import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Heading */}
        <div >
          <h2 className="text-3xl pb-10 sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Helping <span className="text-[#0067b8] drop-shadow-md">Businesses</span> with Improved
            Decision Making & Strategic Planning
          </h2>
        </div>

        {/* Paragraphs Section */}
        <div className="space-y-4">
          {/* Box 1 */}
          <div className="bg-white border-l-4 border-[#0067b8] p-5 shadow hover:shadow-lg transition duration-300 rounded-md">
            <p className="text-black text-base md:text-lg leading-relaxed">
              In business, it&apos;s all about building connections and sharing healthy business relationships.
              At <strong>Exim Trade Data</strong>, we believe in growing along with our customers.
              Customer satisfaction is our utmost priority. That is why we provide solutions that are crafted to our client&apos;s needs.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white border-l-4 border-[#0067b8] p-5 shadow hover:shadow-lg transition duration-300 rounded-md">
            <p className="text-black text-base md:text-lg leading-relaxed">
              Over the years, we have worked across all sectors and successfully delivered result-centric data solutions.
              We have served businesses in retail, finance, academia, aerospace, construction, chemicals, law firms, and more.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white border-l-4 border-[#0067b8] p-5 shadow hover:shadow-lg transition duration-300 rounded-md">
            <p className="text-black text-base md:text-lg leading-relaxed">
              We are glad to have added value to our clients by providing
              quality business reports. Our cost-effective tools helped many <span className="text-[#0067b8] font-semibold">businesses</span>
              with global market research and sales growth. We hope to build more connections and contribute to their success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;