import { ArrowRight } from "lucide-react";
import React from "react";

const GetTradeData = ({ section11 }) => {
  const finalTitle =
    section11?.Title ||
    "Get Global Trade Data Online at Your Fingertips";

  const buttonText =
    section11?.button?.[0]?.button_text || "Schedule a Demo";

  const buttonLink =
    section11?.button?.[0]?.button_link || "/contact";

  return (
    <section className="w-full bg-linear-to-r from-sky-300 to-sky-100 text-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Content */}
        <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-2xl">
          {finalTitle}
        </h2>

        {/* CTA Button */}
        <a
          href={buttonLink}
          className="flex items-center gap-3 bg-blue-600 text-white text-lg px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          {buttonText}
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default GetTradeData;