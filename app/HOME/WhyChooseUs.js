"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    title: "Comprehensive Guide",
    desc: "Get in-depth knowledge of existing market channels and consumer preferences around the globe. We provide a complete, comprehensive guide to the global <span class=\"font-bold\">import export database</span> that helps you to align your business with international trade with the help of our Global <span class=\"font-bold\">Import and Export Data</span>.",
    image: "/comprehensive-guide.webp",
  },
  {
    title: "Explore Foreign Market",
    desc: "With our Global <span class=\"font-bold\">Import Export Data</span>, find overseas customers and discover the best match that adds better economic value to your product. Simplified and genuine <span class=\"font-bold\">importers data</span> and <span class=\"font-bold\">exporters data</span> pave the way to successful overseas trade for your business.",
    image: "/explore-foreign-market.webp",
  },
  {
    title: "Build Valuable Partnership",
    desc: "With our fine-tailored global <span class=\"font-bold\">import and export data</span>, assess your readiness for the target market and grow with your business. Understand the key aspects of international trade and associate with valuable industry peers.",
    image: "/build-valuable-partnership.webp",
  },
];

// 🤖 bot detection helper
const isBot =
  typeof navigator !== "undefined" &&
  (navigator.webdriver ||
    /bot|crawler|spider|headless/i.test(navigator.userAgent));

const Card = ({ title, desc, image }) => {
  // Bots: static render, no animation hooks
  if (isBot) {
    return (
      <div className="relative w-3/5 flex flex-col md:flex-row items-center gap-8 px-8 py-8 md:py-4 shadow-2xl max-w-6xl mx-auto my-8 group">
        <div className="w-full md:w-1/3">
          <img
            src={"/homepage/" + image}
            alt={title}
            className="rounded-2xl shadow-lg object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="w-full md:w-2/3 text-left">
          <h3 className="text-2xl font-bold text-black mb-4">
            {title}
          </h3>
          <p className="text-black text-md leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className="absolute -inset-0.5 rounded-3xl"></div>
      </div>
    );
  }

  // Humans: full animation behavior
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-3/5 flex flex-col md:flex-row items-center gap-8 px-8 py-8 md:py-4 shadow-2xl max-w-6xl mx-auto my-8 group hover:scale-[1.02] transition-transform duration-200"
    >
      <div className="w-full md:w-1/3">
        <img
          src={"/homepage/" + image}
          alt={title}
          className="rounded-2xl shadow-lg object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="w-full md:w-2/3 text-left">
        <h3 className="text-2xl font-bold text-black mb-4 group-hover:underline">
          {title}
        </h3>
        <p className="text-black text-md leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>

      <div className="absolute -inset-0.5 rounded-3xl duration-400"></div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative bg-linear-to-b from-blue-50 via-white to-blue-50 py-14 px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black">
          Why Choose Us
        </h2>
      </div>

      <div className="space-y-32 -mx-20">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
