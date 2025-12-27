"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const MainSection = ({ heading, subheading, data, totalValues , letter , pg}) => {
  const router = useRouter();
  const cardsPerPage = 8; 
  const totalPages = Math.ceil(totalValues / cardsPerPage);

  const [page, setPage] = useState(pg);
  const [selectedLetter, setSelectedLetter] = useState(letter);

  // Counter function
  const runCounter = (id, target) => {
    let count = 0;
    const step = Math.ceil(target / 120);
    const el = document.getElementById(id);

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      if (el) el.innerText = count.toLocaleString();
    }, 20);
  };

  useEffect(() => {
    data.forEach((item, i) => {
      runCounter(`exporter-${i}`, item.exporter);
      runCounter(`ex_total-${i}`, item.ex_total_shipment);
      runCounter(`importer-${i}`, item.importer);
      runCounter(`im_total-${i}`, item.im_total_shipment);
    });
  }, [data]);

  // Handle select change
  const handleSelect = (e) => {
    const letter = e.target.value;
    setSelectedLetter(selectedLetter);
    router.push(`/ports-data/${heading}/${letter}-1`);
  };

  // Handle page change
  const handlePageChange = (p) => {
    setPage(p);
    router.push(`/ports-data/${heading}/${selectedLetter}-${p}`);
  };

  const getPagination = () => {
    let pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (page >= totalPages - 2) {
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", page - 1, page, page + 1, "...", totalPages];
      }
    }
    return pages;
  };

  return (
    <section className="py-16 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-black"
        >
          Search Port Data of {heading} Sea Ports
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-slate-600"
        >
          Export Import Port Data {subheading}
        </motion.p>

        {/* Letter Select */}
        <div className="mt-8">
          <select
            value={selectedLetter}
            onChange={handleSelect}
            className="px-30 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500"
          >
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <option key={letter} value={letter}>
                {letter}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => router.push( `/global-ports/${ heading.toLowerCase().trim().replaceAll(" ", "-")}/port-${ item.Port.toLowerCase().trim().replaceAll(" ", "-")}`) }
            
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer p-6 rounded-2xl bg-white shadow-lg border border-slate-200 group transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                {item.Port} Port
              </h3>
              <div className="space-y-2 text-left text-slate-700">
                <p>
                  Exporter:{" "}
                  <span id={`exporter-${i}`} className="font-bold text-blue-600">
                    0
                  </span>
                </p>
                <p>
                  Total Exports:{" "}
                  <span id={`ex_total-${i}`} className="font-bold text-blue-600">
                    0
                  </span>
                </p>
                <p>
                  Importer:{" "}
                  <span id={`importer-${i}`} className="font-bold text-blue-600">
                    0
                  </span>
                </p>
                <p>
                  Total Imports:{" "}
                  <span id={`im_total-${i}`} className="font-bold text-blue-600">
                    0
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          {getPagination().map((p, i) =>
            p === "..." ? (
              <span key={i} className=" py-2 text-slate-500">
                ...
              </span>
            ) : (
              <button
                key={i}
                onClick={() => handlePageChange(p)}
                className={`px-4 py-2 cursor-pointer rounded-lg ${
                  p === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                } transition`}
              >
                {p}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(page + 1 <= totalPages ? page + 1 : totalPages)}
            className="px-4 py-2 cursor-pointer rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
          >
            &raquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;