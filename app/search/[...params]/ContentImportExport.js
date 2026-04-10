"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContentImportExport({
  section1,
  section2,
}) {
  return (
    <div className="w-full bg-white">

      {/* ================= SECTION 1 ================= */}
      <section className="py-28 px-6 border-b border-gray-100">
        <div className="px-20 mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp}>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0A2540] leading-tight mb-8">
              {section1.heading}
            </h2>

            <div className="space-y-5 text-black text-md leading-relaxed">
              {section1.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative w-full max-w-lg mx-auto lg:mx-0">
            <img
              src="/search-data-results/sec2.jpg"
              alt=""
              className="w-full rounded-xl h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-5 px-6 border-b border-gray-100">
        <div className="px-20 mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp} className="relative w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
            <img
              src="/search-data-results/common.jpg"
              alt=""
              className="w-full rounded-xl h-auto object-contain"
            />
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0A2540] leading-tight mb-8">
              {section2.heading}
            </h2>

            <div className="space-y-5 text-black text-md leading-relaxed">
              {section2.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}