"use client";

import { motion } from "framer-motion"
import { ArrowRight, BarChart3 } from "lucide-react"

const CtaImage = ({ portName }) => {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="mb-6 p-4 rounded-full bg-white shadow-md border border-gray-200"
        >
          <BarChart3 className="w-10 h-10 text-indigo-600" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          Monitor Your Competitor Shipments
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Get in-depth insights into shipment activities of top import export companies globally through our impressive trade market intelligence reports.
        </motion.p>

        {/* CTA Button */}
        <a href="/pricing">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group mt-10 inline-flex items-center gap-3 px-6 py-4   bg-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          
        >

          Get Full Report
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        </a>
      </div>
    </section>
  );
};

export default CtaImage;