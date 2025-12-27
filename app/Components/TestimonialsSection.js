"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Arun Singh",
    content: `Vietnam trade data intelligence reports from Exim Trade Data helped us in building an impactful marketing strategy. We were able to find verified Vietnamese buyers for our business and achieved significant business growth.`,
    rating: 5,
  },
  {
    name: "Ankush Pant",
    content:
      "Tea import data of China from Exim Trade Data assisted me in starting a successful Tea export business from India. It helped me reduce financial risk and generate high ROI for my business",
    rating: 5,
  },
  {
    name: "Naveen Kumar ",
    content: `I was looking to expand my garment business to the global market. Exim Trade Data provided me with quality global trade data statistics that helped me identify the potential buyers for my product. I must thanks Exim Trade Data for my business success.`,
    rating: 5,
  },
  {
    name: "Brayden",
    content:
      "Anyone who wants to build their business in the import industry will find Exim Trade Data to be extremely helpful. Exim trade data consists of every single detail of shipment activities occurring throughout the world.",
    rating: 5,
  },
  {
    name: "Toshima Sahani Electronics",
    content: `I found the data very useful provide by the Exim Trade data. It help me to grow my business
and provide me more clients.
Also the customer support team is very active and provide me the quick responce whenever
I have any problem.`,
    rating: 5,
  },
  {
    name: "Sonali More",
    content: `Good portal with all HSN data ..Service is also prompt...`,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  // 🤖 bot detection
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  // 👉 Bots: static render (NO Swiper)
  if (isBot) {
    return (
      <section className="bg-linear-to-br from-sky-50 via-white to-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Our Client&apos;s Testimonials
          </h2>
          <p className="text-gray-600 text-lg">
            We are known to deliver quality services to our clients. See what they are saying?
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-6 md:p-8 bg-white shadow-2xl border border-gray-100 min-h-80 flex flex-col justify-between"
            >
              <div className="text-lg font-bold text-blue-600 mb-2">
                {t.name}
              </div>

              <p className="text-lg text-black leading-relaxed mb-6 whitespace-pre-line">
                {t.content}
              </p>

              <div className="flex items-center gap-1 text-yellow-500 text-lg">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={starIdx}>{starIdx < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 👉 Humans: full Swiper experience
  return (
    <section className="bg-linear-to-br from-sky-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Our Client&apos;s Testimonials
        </h2>
        <p className="text-gray-600 text-lg">
          We are known to deliver quality services to our clients. See what they are saying?
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={24}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative p-6 md:p-8 mb-16 bg-white shadow-2xl border border-gray-100 min-h-80 flex flex-col justify-between">
              <div className="text-lg font-bold text-blue-600 mb-2">
                {t.name}
              </div>

              <p className="text-lg text-black leading-relaxed mb-6 line-clamp-4 overflow-hidden whitespace-pre-line">
                {t.content}
              </p>

              <div className="flex items-center gap-1 text-yellow-500 text-lg">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={starIdx}>{starIdx < t.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="absolute -bottom-3 left-6 rotate-90"
              >
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              </svg>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;