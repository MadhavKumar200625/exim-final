"use client";
import { motion } from "framer-motion";

const Points = ({ points, heading, subheading, peviousSection }) => {
  if (!points || points.length === 0) return null;

  return (
    <section
      className={`w-full py-24 px-6 md:px-20 ${
        peviousSection ? "bg-white" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-8 leading-tight">
          {heading}
        </h2>

        {subheading && (
          <h3 className="text-lg md:text-xl text-center text-black mb-16 leading-tight">
            {subheading}
          </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const pointNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 px-6 pt-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600 font-bold text-xl bg-blue-50 px-3 py-1 rounded-full shadow-sm">
                    {pointNumber}
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {point.heading}
                  </h3>
                </div>

                <p className="text-black mb-4 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Points;