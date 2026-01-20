"use client";
import { useState } from "react";
import Link from "next/link";
import AppointmentForm from "../Components/AppointmentForm";

export default function Hero() {
  const [currency, setCurrency] = useState("INR");
  const [countryType, setCountryType] = useState("one"); // "one" or "all"
const [isOpen, setIsOpen] = useState(false);
  // Plans for ONE COUNTRY
  const oneCountryPlans = [
    {
      name: "Micro",
      description:
        "Get More Searches, More Downloads, & More Control With The Basic Plan",
      inr: "₹30000 + GST",
      usd: "$450",
      features: [
        "100 Searches daily",
        "50,000 Download Point",
        "3 year historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "20 Save Work Shipment",
        "View Unlimited Shipment",
        "One User License",
        "Unlimited HSCode & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "Choose Any One country (except restricted list)",
        "3 Month Validity",
      ],
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
    },
    {
      name: "SME",
      description:
        "Get More Coverage On The Overseas Buyers And Suppliers Shipment Records",
      inr: "₹50000 + GST",
      usd: "$700",
      features: [
        "200 Searches daily",
        "1,50,000 Download Point",
        "5 year historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "50 Save Work Shipment",
        "View Unlimited Shipment",
        "Two User License",
        "Unlimited HS Code & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "Choose Any One Country",
        "6 Month Validity",
      ],
      gradient: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    {
      name: "Corporate",
      description:
        "Fuel your research with unlimited searches, more downloads, full data & 1 year validity.",
      inr: "₹80000 + GST",
      usd: "$1000",
      features: [
        "Unlimited Searches",
        "3,00,000 Download Point",
        "All historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "Unlimited Save Work Shipment",
        "View Unlimited Shipment",
        "Four User License",
        "Unlimited HS Code & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "Choose Any One Country",
        "One Year Validity",
      ],
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
  ];

  // Plans for ALL COUNTRY
  const allCountryPlans = [
    {
      name: "Micro",
      description:
        "Get More Searches, More Downloads, & More Control With The Basic Plan",
      inr: "₹124999 + GST",
      usd: "$1499",
      features: [
        "200 Searches daily",
        "2,00,000 Download Point",
        "3 year historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "50 Save Work Shipment",
        "View Unlimited Shipment",
        "Two User License",
        "Unlimited HS Code & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "All countries except restricted list",
        "One Year Validity",
      ],
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
    },
    {
      name: "SME",
      description:
        "Get More Coverage On The Overseas Buyers And Suppliers Shipment Records",
      inr: "₹249999 + GST",
      usd: "$2999",
      features: [
        "500 Searches daily",
        "5,00,000 Download Point",
        "5 year historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "100 Save Work Shipment",
        "View Unlimited Shipment",
        "Four User License",
        "Unlimited HS Code & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "All 200+ Countries",
        "One Year Validity",
      ],
      gradient: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    {
      name: "Corporate",
      description:
        "Access 200+ Countries Data Reports By Product, Country, & Ports With Premium Plan",
      inr: "₹399999 + GST",
      usd: "$4999",
      features: [
        "Unlimited Searches",
        "10,00,000 Download Point",
        "All historical data",
        "Unlimited Clicks daily on the Buyer/Supplier list",
        "Unlimited Clicks daily on the Visual report",
        "Unlimited Save Work Shipment",
        "View Unlimited Shipment",
        "Four User License",
        "Unlimited HS Code & Product Search",
        "Unlimited Company search",
        "Unlimited Port Data Search Shipment",
        "All 200+ Countries",
        "Two Year Validity",
      ],
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
  ];

  const plans = countryType === "one" ? oneCountryPlans : allCountryPlans;

  return (
    <section
      id="pricing_section"
      className="pt-28 pb-24 bg-linear-to-t from-white to-blue-50 text-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to the World&apos;s Largest <br />
            <span className="text-blue-600 drop-shadow-lg">
              Global Trade Analysis
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide">
            Import Export Trade Analysis That Delivers Results
          </h3>
          <p className="text-lg max-w-3xl mx-auto font-medium">
            Expand your business network across the most dominating markets including China, USA, India, Turkey etc. Access the verified import export data of 200+ countries. Find product trends sourcing, port shipments, competitors, buyers and suppliers from the global market. Get cost effective leads with high ROI from our platform.<br />
            
          </p>

          <h1 className="text-xl font-semibold text-black mt-8">Exclusive Pricing</h1>
                    <h1 className="text-2xl font-bold text-black mt-2">Affordable and Flexible Pricing
</h1>

        </div>

        {/* Toggles */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {/* Currency Toggle */}
          <div className="inline-flex border-2 border-blue-600 cursor-pointer rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-6 py-2 font-semibold transition ${
                currency === "INR"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 font-semibold transition ${
                currency === "USD"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              USD
            </button>
          </div>

          {/* Country Toggle */}
          <div className="inline-flex border-2 border-blue-600 cursor-pointer rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => setCountryType("one")}
              className={`px-6 py-2 font-semibold transition ${
                countryType === "one"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              One Country
            </button>
            <button
              onClick={() => setCountryType("all")}
              className={`px-6 py-2 font-semibold transition ${
                countryType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              All Country
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <div
                  className={`${plan.gradient} text-white font-bold text-center pt-4 pb-24 text-xl`}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 65%, 0% 100%)",
                  }}
                >
                  {plan.name.toUpperCase()}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-18 z-10">
                  <div className="bg-gray-900 text-white rounded-full border-4 border-white w-40 h-40 flex items-center justify-center text-lg font-bold shadow-lg text-center px-2">
                    {currency === "INR" ? plan.inr : plan.usd}
                  </div>
                </div>
              </div>

              <div className="px-6 text-center mt-24 h-16 text-sm font-medium">
                {plan.description}
              </div>

              <div className="px-6 py-4 text-sm">
                <ul className="space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <span
                        className={`bg-clip-text text-transparent mr-2 ${plan.gradient}`}
                      >
                        ✔️
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6">
                 <button
                  
                  onClick={() => setIsOpen(true)}
                  className={`block text-center py-2 w-full cursor-pointer rounded-lg ${plan.gradient} text-white font-semibold hover:scale-105 transition`}
                >
                  Get Demo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AppointmentForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}