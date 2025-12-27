"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function CtaImage({ description }) {
  return (
    <section className="relative w-full py-14 bg-linear-to-br from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden">
      {/* Soft background accents (NO infinite animation) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 p-4 rounded-full bg-white shadow-md border border-gray-200"
        >
          <BarChart3 className="w-10 h-10 text-indigo-600" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          Get High-Quality Trade Leads with Exim GTIS
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* CTA */}
        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 px-7 py-4 bg-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          Get Full Report
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}