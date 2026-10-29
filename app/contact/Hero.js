import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white text-black pt-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let&apos;s Talk About Your Trade Data Needs
        </h2>

        <p className="text-md md:text-lg text-black">
          Tell us the product, HS code and countries you are interested in, and we will show you real shipment data in a live demo.
          <br className="hidden md:block" />
          <br />
          <strong>
            Book a free demo
          </strong>{' '}
          and we will show you records for your target market.
        </p>
      </div>
    </section>
  );
};

export default Hero;
