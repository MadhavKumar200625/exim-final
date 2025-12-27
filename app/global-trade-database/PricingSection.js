"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      name: "Starter",
      description:
        "Highly Recommended for Beginners. For Better Analysis & Market Research.",
      inr: 4999,
      usd: 70,
      downloads: "5,000",
      validity: "6 Months",
      gradient: "from-orange-400 to-yellow-400",
      icon: "🌐",
    },
    {
      name: "Basic",
      description:
        "More Searches, More Downloads, & More Control With the Basic Plan.",
      inr: 9999,
      usd: 140,
      downloads: "10,000",
      validity: "12 Months",
      gradient: "from-red-500 to-orange-400",
      icon: "💼",
    },
    {
      name: "Plus",
      description:
        "Explore Emerging Markets, Trends, & Get More Download Credits.",
      inr: 19999,
      usd: 300,
      downloads: "30,000",
      validity: "24 Months",
      gradient: "from-purple-500 to-indigo-500",
      icon: "🏆",
    },
    {
      name: "Premium",
      description:
        "Access Detailed Trade Info by Product, Country, & Ports.",
      inr: 29999,
      usd: 350,
      downloads: "50,000",
      validity: "30 Months",
      gradient: "from-cyan-400 to-blue-500",
      icon: "💎",
    },
  ];

  return (
    <>
      {/* MAIN PRICING */}
      <section
        id="pricing_section"
        className="pt-14 pb-12 bg-linear-to-t from-white to-blue-50 text-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Currency Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex border-2 border-blue-600 rounded-full overflow-hidden shadow-lg">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-6 py-2 font-semibold transition cursor-pointer ${
                  currency === "INR"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black hover:bg-blue-100"
                }`}
              >
                INR
              </button>

              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-6 py-2 font-semibold transition cursor-pointer ${
                  currency === "USD"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black hover:bg-blue-100"
                }`}
              >
                USD
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div
                  className={`bg-linear-to-r ${plan.gradient} p-6 flex flex-col items-center text-white`}
                >
                  <div className="w-14 h-14 flex items-center justify-center text-3xl bg-white/20 rounded-full mb-3">
                    {plan.icon}
                  </div>

                  <div className="text-3xl font-bold">
                    {currency === "INR"
                      ? `₹${plan.inr}`
                      : `$${plan.usd}`}
                  </div>

                  <div className="text-sm opacity-80">Per plan</div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 text-sm mb-6 flex-1">
                    <li>✔️ Full Data Search</li>
                    <li>✔️ {plan.downloads} Download Credits</li>
                    <li>✔️ {plan.validity} Validity</li>
                  </ul>

                  <Link
                    href="/pricing"
                    prefetch={false}
                    className="block text-center py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Explore More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PLAN */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="bg-white border border-zinc-200 shadow-xl max-w-6xl mx-auto p-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-black mb-3">
              Customized Plan
            </h2>
            <p className="text-lg text-gray-700">
              Create Your Own Plan
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:translate-x-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black text-base font-medium mb-12 text-center sm:text-left">
            <div className="space-y-3">
              <p>✅ Choose From 200+ Countries</p>
              <p>✅ Complete Historical Data Access</p>
            </div>
            <div className="space-y-3">
              <p>✅ Unlimited Searches</p>
              <p>✅ Customizable Download Records</p>
            </div>
            <div className="space-y-3">
              <p>✅ Customized User Licence</p>
              <p>✅ Priority Customer Support</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/get-started"
              prefetch={false}
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#0067b8] hover:scale-105 transition duration-300"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}