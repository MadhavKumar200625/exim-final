"use client";

const benefits = [
  {
    title: "Trade Metrics",
    desc: "Use values, volumes and unit prices to size a market and compare origins.",
    image: "/VISUAL-REPORT.webp",
  },
  {
    title: "Product Trends",
    desc: "Spot rising products and markets with trade activity over time.",
    image: "/PRODUCT-TRENDS.webp",
  },
  {
    title: "Advanced Search",
    desc: "Filter by product, HS code, country, port, date, quantity and value.",
    image: "/ADVANCE-SEARCH.webp",
  },
  {
    title: "API Access",
    desc: "Connect shipment data to your CRM, ERP, BI dashboard or product.",
    image: "/Importer-Exporter-Tree.webp",
  },
];

export default function EximBenefitsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          Plan Features for Exim GTIS
        </h2>

        <p className="text-black mb-10 max-w-3xl mx-auto">
          Plans include dashboard access and onboarding support, with data allowances and optional API access based on your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl border border-zinc-200 p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={`/pricing${benefit.image}`}
                  alt={benefit.title}
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 "
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-black my-3">
                {benefit.title}
              </h3>

              <p className="text-sm text-black text-left">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
