"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      name: "Starter",
      description: "Access one or two countries for focused market research.",
      priceLabel: "Quote",
      features: ["1–2 countries", "Data allowance for search and download", "Onboarding support"],
      gradient: "from-orange-400 to-yellow-400",
      icon: "🌐",
    },
    {
      name: "Professional",
      description: "Access several countries with a larger data allowance for regular research.",
      priceLabel: "Quote",
      features: ["Several countries", "Larger data allowance", "Onboarding support"],
      gradient: "from-red-500 to-orange-400",
      icon: "💼",
    },
    {
      name: "Enterprise",
      description: "Configure required countries, API access and priority support for your team.",
      priceLabel: "Quote",
      features: ["Required countries", "API access", "Priority support"],
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
                    {plan.priceLabel || (currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`)}
                  </div>

                  <div className="text-sm opacity-80">Contact for pricing</div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 text-sm mb-6 flex-1">
                    {plan.features.map((feature) => <li key={feature}>✔️ {feature}</li>)}
                  </ul>

                  <a
                    href="/pricing"
                    
                    className="block text-center py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Get a Custom Quote →
                  </a>
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
              Need a Custom Plan?
            </h2>
            <p className="text-lg text-gray-700">
              Tell us your products, HS codes, countries and budget, and we will build a plan around them.
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:translate-x-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black text-base font-medium mb-12 text-center sm:text-left">
            <div className="space-y-3">
              <p>✅ Choose the countries you need</p>
              <p>✅ Set a data allowance for your team</p>
            </div>
            <div className="space-y-3">
              <p>✅ Search and download shipment records</p>
              <p>✅ Add API access if needed</p>
            </div>
            <div className="space-y-3">
              <p>✅ Onboarding support</p>
              <p>✅ Priority support options</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/get-started"
              
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#0067b8] hover:scale-105 transition duration-300"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
