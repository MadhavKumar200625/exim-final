"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Section4 = ({ heading }) => {
  if (!heading) return null;

  return (
    <section className="w-full bg-sky-100 py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image */}
        <motion.img
          src="/solutions/common-icons/1.webp"
          alt="Global Trade Suppliers"
          className="hidden md:block md:w-1/12 max-w-xs object-contain"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Center Content */}
        <div className="text-center">
          <motion.h2
            className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>

          <a
            href="/search-global-trade-data"
            className="inline-block bg-blue-600 text-white font-semibold text-md px-8 py-3 mt-3 shadow-md transition-all duration-200 hover:scale-105"
          >
            Explore More →
          </a>
        </div>

        {/* Right Image */}
        <motion.img
          src="/solutions/common-icons/2.webp"
          alt="Import Export Trade Data"
          className="hidden md:block md:w-1/12 max-w-xs object-contain"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Section4;