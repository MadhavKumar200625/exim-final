import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white text-black pt-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-md md:text-lg text-black">
          Exim Trade Data specializes in providing all-around export and import trade data for different nations. By taking a close look at worldwide trade deals, we assist companies in the decision-making process, explore new market chances, and gain the lead over others in the international trading sector.
          <br className="hidden md:block" />
          <br />
          <strong>
            To get the information, reach out to us today
          </strong>{' '}
          to access reliable and up-to-date global import-export trade data for your business needs.
        </p>
      </div>
    </section>
  );
};

export default Hero;