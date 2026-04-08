"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ArmeniaSections() {
  return (
    <div className="w-full bg-white">

      {/* ================= SECTION 1 ================= */}
      <section className="py-28 px-6 border-b border-gray-100">
        <div className="px-20 mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div {...fadeUp}>
            

            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0A2540] leading-tight mb-8">
              Armenia customs shipment data | verified trade information
            </h2>

            <div className="space-y-5 text-black text-md leading-relaxed">
              <p>
                The trade data of Armenia shows all details of the country's import and export operations, which include various products from different industries. The search page provides users with access to complete shipment data and trade patterns, along with market trends, which help users understand Armenia's trading activities. The information allows businesses to discover their main suppliers and buyers who conduct business with them in Armenia.
              </p>

              <p>
                The country-level trade data of Armenia enables users to better understand economic conditions and market needs, along with the processes that drive supply chains. Businesses can use their import and export data to observe trade movements and track their products through the Armenian market, which helps them find new business opportunities and develop their strategic expansion plans.
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            {...fadeUp}
            className="relative w-full h-[380px] rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center"
          >
            <span className="text-black text-sm">
              Image Placeholder
            </span>
          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 2 ================= */}
      <section className="py-5 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            {...fadeUp}
            className="relative w-full h-[380px] rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center order-2 lg:order-1"
          >
            <span className="text-black text-sm">
              Image Placeholder
            </span>
          </motion.div>

          {/* TEXT */}
          <motion.div {...fadeUp} className="order-1 lg:order-2">

            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0A2540] leading-tight mb-8">
              Verified Armenia Import Data | Detailed Trade Insights
            </h2>

            <div className="space-y-5 text-black text-md leading-relaxed">
              <p>
                This search page provides the latest and most reliable import data of Armenia, which shows complete information about goods that enter the country. The system contains essential information, which includes product details, pricing information, product quantity, names of importing and exporting companies, dates of shipment, entry ports, and overall trade patterns. The country of <a href="/country-wise-armenia-import-data" className="font-semibold underline text-blue-600">Armenia imports data</a>  and products from various categories, which include industrial equipment and machinery, and consumer goods, to help companies understand their market requirements. The analysis of Armenia's import data enables users to find current buyers while they study new market developments and track products that customers want to buy. The data provides crucial information to exporters who want to enter the Armenian market because it offers them concrete details about market opportunities and competitor activities, and points out existing market deficiencies.

              </p>
            </div>

          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 3 ================= */}
      

    </div>
  );
}