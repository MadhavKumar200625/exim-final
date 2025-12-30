'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const industries = [
  {
    name: "Importers",
    desc: "Leading Trade Intelligence Platform for Global Importers",
    img: "/importer_md_banner1.webp",
    link: "importers"
  },
  {
    name: "Exporters",
    desc: "Enhance Your Sales Potential with Our Global Exporters Database",
    img: "/exporters_md_banner1.webp",
    link: "importers"
  },
  {
    name: "Corporation",
    desc: "Best Market Intelligence Platform for Corporate Companies",
    img: "/corporation_md_banner1.webp",
    link: "corporation"
  },
  {
    name: "Automotive",
    desc: "Identify the Current Market Trends & Demands in the Automotive Market",
    img: "/automative_md_banner1.webp",
    link: "automative"
  },
];

export default function IndustrySection() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🤖 bot detection (logic only)
  const isBot =
    typeof navigator !== "undefined" &&
    (navigator.webdriver ||
      /bot|crawler|spider|headless/i.test(navigator.userAgent));

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth =
      container.firstChild instanceof HTMLElement
        ? container.firstChild.offsetWidth + 24
        : 274;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  // ✅ single stable interval, humans only
  useEffect(() => {
    if (isBot) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % industries.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isBot]);

  return (
    <div className="relative px-4 py-10">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">Explore More Industries</h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 px-2"
          style={{ scrollbarWidth: "none" }}
          ref={sliderRef}
        >
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 relative">
                <img
                  src={`/solutions/${industry.name.toLowerCase().replace(/ /g, "-")}.webp`}
                  alt={industry.name}
                  className="object-contain w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col space-y-3 text-left">
                <h3 className="text-lg font-semibold text-black">
                  {industry.name}
                </h3>
                <p className="text-sm text-black">{industry.desc}</p>

                <Link
                  href={`/${industry.link.toLowerCase()}`}
                  prefetch={false}
                >
                  <button className="mt-2 w-fit bg-[#0067b8] text-white text-sm px-4 py-2 shadow-md hover:bg-[#005fa3] transition-all">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}