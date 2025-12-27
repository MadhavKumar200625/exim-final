'use client';

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 200, suffix: "+", label: "Countries" },
  { number: 50, suffix: "M+", label: "Importer Companies" },
  { number: 50, suffix: "M+", label: "Exporter Companies" },
  { number: 500, suffix: "M+", label: "Shipment Records" },
];

export default function Stats() {
  const [count, setCount] = useState(() => stats.map(() => 0));
  const intervalsRef = useRef([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    intervalsRef.current = stats.map((stat, index) =>
      setInterval(() => {
        setCount((prev) => {
          const next = [...prev];

          if (next[index] >= stat.number) {
            clearInterval(intervalsRef.current[index]);
            next[index] = stat.number;
            return next;
          }

          const increment = Math.ceil(stat.number / 50);
          next[index] = Math.min(next[index] + increment, stat.number);
          return next;
        });
      }, 40)
    );

    return () => {
      intervalsRef.current.forEach((id) => clearInterval(id));
      intervalsRef.current = [];
    };
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="transform transition-all duration-500 hover:scale-105"
            >
              <h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {count[i]}
                {stat.suffix}
              </h2>
              <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}