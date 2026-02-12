import React from "react";
import { ArrowRight } from "lucide-react";

export default function GetTradeData({ section11 }) {
  /* ---------- STRAPI DATA ---------- */
  const strapiTitle = section11?.Title;

  const strapiButton = Array.isArray(section11?.button)
    ? section11.button[0]
    : null;

  const buttonText = strapiButton?.button_text || "Schedule a Demo";
  const buttonLink = strapiButton?.button_link || "/contact";

  return (
    <section className="w-full bg-linear-to-r from-sky-300 to-sky-100 text-black py-8 px-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-32">
        
        {/* Left Content */}
        <h2 className="text-3xl max-w-2xl font-bold leading-tight">
          {strapiTitle ||
            "GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!"}
        </h2>

        {/* CTA Button */}
        <a
          href={buttonLink}
          className="flex items-center gap-3 bg-blue-600 text-white text-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          {buttonText}
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}