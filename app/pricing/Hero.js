"use client";
import { useState } from "react";
import AppointmentForm from "../Components/AppointmentForm";

export default function Hero() {
  const [currency, setCurrency] = useState("INR");
  const [isOpen, setIsOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Access one or two countries for focused market research.",
      priceLabel: "Quote",
      features: ["1–2 countries", "Data allowance for search and download", "Onboarding support"],
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
    },
    {
      name: "Professional",
      description: "Access several countries with a larger data allowance for regular research.",
      priceLabel: "Quote",
      features: ["Several countries", "Larger data allowance", "Onboarding support"],
      gradient: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    {
      name: "Enterprise",
      description: "Configure required countries, API access and priority support for your team.",
      priceLabel: "Quote",
      features: ["Required countries", "API access", "Priority support"],
      gradient: "bg-gradient-to-r from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section
      id="pricing_section"
      className="pt-28 pb-24 bg-linear-to-t from-white to-blue-50 text-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Import Export Data Plans <br />
            <span className="text-blue-600 drop-shadow-lg">and Pricing</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide">
            Exim GTIS Dashboard Access
          </h3>
          <p className="text-lg max-w-3xl mx-auto font-medium">
            Choose a plan that fits the markets you trade in and the way you work. Every plan includes dashboard access, search by product, HS code and port, and onboarding support.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-2 border-blue-600 rounded-full overflow-hidden shadow-lg">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              aria-pressed={currency === "INR"}
              className={`px-6 py-2 font-semibold transition ${
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
              aria-pressed={currency === "USD"}
              className={`px-6 py-2 font-semibold transition ${
                currency === "USD"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              USD
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl shadow-lg overflow-hidden bg-white"
            >
              {/* Header */}
              <div className="relative">
                <div
                  className={`${plan.gradient} text-white font-bold text-center pt-4 pb-24 text-xl`}
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 65%, 0% 100%)",
                  }}
                >
                  {plan.name.toUpperCase()}
                </div>

                {/* Price Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-10">
                  <div className="bg-gray-900 text-white rounded-full border-4 border-white w-28 h-28 flex items-center justify-center text-2xl font-bold shadow-lg">
                    {plan.priceLabel || (currency === "INR"
                      ? `₹${plan.inr.toLocaleString("en-IN")}`
                      : `$${plan.usd.toLocaleString("en-US")}`)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-6 text-center mt-14 h-14 text-sm text-black">
                {plan.description}
              </div>

              {/* Features */}
              <div className="px-6 py-4 text-sm">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={`mr-2 ${plan.gradient} bg-clip-text text-transparent`}>✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className={`block w-full py-2 rounded-lg ${plan.gradient} text-white font-semibold hover:scale-105 transition`}
                >
                  Get a Custom Quote →
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
