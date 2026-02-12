'use client';
import React from 'react';

const defaultLogos = [
  { image_url: '/our-clients/lonza.webp', image_text: 'Lonza' },
  { image_url: '/our-clients/duracell.webp', image_text: 'Duracell' },
  { image_url: '/our-clients/absolute-advantage_logo.png', image_text: 'Absolute Advantage' },
  { image_url: '/our-clients/bcg.webp', image_text: 'BCG' },
  { image_url: '/our-clients/afepasa.png', image_text: 'Afepasa' },
  { image_url: '/our-clients/neohealth.webp', image_text: 'Neo Health' },
];

const ClientsSection = ({ section7 }) => {
  /* ---------- BOT DETECTION ---------- */
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  /* ---------- STRAPI DATA ---------- */
  const title = section7?.Title || "Our Clients";
  const description =
    section7?.Description ||
    "We are privileged to work with some of the most prestigious clients in the industry. Our vision is to deliver fast, prompt and reliable information to our clients that adds value to their business.";

  const logos =
    Array.isArray(section7?.image) && section7.image.length > 0
      ? section7.image
      : defaultLogos;

  // bots: no animation, no duplication
  const displayLogos = isBot ? logos : [...logos, ...logos];

  return (
    <section className="relative py-14 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT */}
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            {title}
          </h2>

          <h3 className="text-2xl text-black mb-4">
            Trusted By Top Brands
          </h3>

          <p className="text-black text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full overflow-hidden">

          {/* Faders */}
          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          {/* Slider */}
          <div
            className={`flex w-max gap-10 ${
              isBot ? "" : "animate-slide-left"
            }`}
          >
            {displayLogos.map((item, i) => (
              <img
                key={i}
                src={item.image_url}
                alt={item.image_text || "Client Logo"}
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