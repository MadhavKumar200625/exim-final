import React from "react";
import Link from "next/link";

const Hero = ({ title, description, image }) => {
  const safeImage =
    image
      ? image
          .toLowerCase()
          .replace(/ /g, "")
          .replace("automative", "automotive")
          .replace("&", "and")
      : "default";

  return (
    <section className="w-full bg-white pb-14 pt-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            {title}
          </h1>

          <p className="text-black text-base md:text-lg mb-6 whitespace-pre-line">
            {description}
          </p>

          <a href="/pricing">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 hover:scale-105 transition duration-300">
              Get Insight Reports →
            </span>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={`/solutions/${safeImage}.webp`}
            alt={title}
            width={500}
            height={400}
            className="md:min-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;