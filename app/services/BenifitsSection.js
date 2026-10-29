const benefits = [
  {
    img: "reduce-the-risk-involved.webp",
    title: "Lower Your Trading Risk",
    desc: "Check a buyer's or supplier's trade history before you commit to a shipment.",
  },
  {
    img: "expand-your-business-network.webp",
    title: "Grow Your Network",
    desc: "Meet potential buyers and suppliers in overseas markets using trade activity.",
  },
  {
    img: "find-potential-market.webp",
    title: "Discover Untapped Markets",
    desc: "See where your product is already in demand and compare markets before you expand.",
  },
  {
    img: "researched-market-data.webp",
    title: "Back Decisions With Evidence",
    desc: "Use trade statistics instead of guesswork when you plan your next move.",
  },
  {
    img: "affordable-pricing.webp",
    title: "Plan Pricing",
    desc: "Benchmark prices across origins and competitors to support your pricing decisions.",
  },
  {
    img: "navigate-global-market.webp",
    title: "Save Time",
    desc: "Spend less time on leads that go nowhere by filtering shipment activity for your target market.",
  },
  {
    img: "overcome-the-trade-challenges.webp",
    title: "Custom Dashboards",
    desc: "View the trade metrics that matter to you and share findings with your team.",
  },
  {
    img: "find-an-ideal-match-to-meet-your-business.webp",
    title: "Reports on Request",
    desc: "Order customised import export data reports for your products and target countries.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Benefits of Import Export Data
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md border hover:shadow-lg transition duration-300 p-4 flex flex-col h-full"
            >
              <div className="w-full h-40 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={`/services/${benefit.img}`}
                  alt={benefit.title}
                  width={320}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="object-contain max-h-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-black">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
