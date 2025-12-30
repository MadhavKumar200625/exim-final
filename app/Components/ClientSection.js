'use client';
import React from 'react';

const logos = [
  '/our-clients/lonza.webp',
  '/our-clients/duracell.webp',
  '/our-clients/absolute-advantage_logo.png',
  '/our-clients/bcg.webp',
  '/our-clients/afepasa.png',
  '/our-clients/neohealth.webp',
];

const ClientsSection = () => {
  // 🤖 bot detection
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  // bots: no animation, no duplication
  const displayLogos = isBot ? logos : [...logos, ...logos];

  return (
    <section className="relative py-14 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT */}
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Clients
          </h2>
          <h3 className="text-2xl text-black mb-4">Trusted By Top Brands</h3>
          <p className="text-black text-lg leading-relaxed">
            We are privileged to work with some of the most prestigious clients in the industry. Our vision is to deliver fast, prompt and reliable information to our clients that adds value to their business.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full overflow-hidden">
          {/* Fader Left & Right */}
          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          {/* Slider */}
          <div
            className={`flex w-max gap-10 ${
              isBot ? "" : "animate-slide-left"
            }`}
          >
            {displayLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client company logo"
                width={136}
                height={136}
                className="drop-shadow-md object-contain"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;