'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const points = [
  {
    title: "Emerging Markets",
    desc: "Explore the emerging markets through our interactive platform. Get accurate forecasts on top market trends, demands, risks, competitors and growth opportunities.",
  },
  {
    title: "Trending Products",
    desc: "Through our impressive visual reports, you can discover top product trends, analyze production quantity and evaluate appropriate pricing for your product.",
  },
  {
    title: "Global Buyers & Suppliers",
    desc: "Expand your network to the global market through our Global buyers & suppliers list. Get quality business leads from Exim GTIS & double your revenue.",
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-white py-20 relative">
      {/* Top heading */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Become a Leader in Import Export Industry with Exim GTIS
        </h2>
        <p className="text-lg text-black mt-4">
          Unlock the most cost-effective business tool for comprehensive market research. 
          Successfully expand your business to the global market with improved decision making 
          based on Exim GTIS reports.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 md:px-10">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-linear-to-b from-blue-600 via-sky-500 to-blue-500 animate-pulse"></div>

        <div className="flex flex-col md:gap-20">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } md:justify-between`}
            >
              {/* Image placeholder */}
              <img
  src={`/global-trade-database/${point.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace("&", "and")}.webp`}
  alt={point.title}
  loading="lazy"
  decoding="async"
  className="w-full md:w-5/12 h-56 rounded-xl shadow-md"
/>

              {/* Connector dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center text-white bg-linear-to-r font-black text-xl from-blue-600 to-sky-500 rounded-full shadow-lg">0{index+1}</div>

              {/* Content */}
              <div className="w-full md:w-5/12 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold text-black">
                  {point.title}
                </h3>
                <p className="mt-3 text-black">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}