"use client";

const benefits = [
  {
    title: "200+ Countries Shipment Records",
    desc: "Our Global trade information system gives you instant access to the 200+ countries shipment records including exclusive countries. You can explore new markets, top products in demand by quantity and value that helps you analyze production quantity and build a competitive pricing strategy.",
    image: "/global-trade-database/200-plus-countries-shipment-records.webp",
  },
  {
    title: "Impressive Visual Reports",
    desc: "Our Dashboard combines all raw data into useful information. You can find impressive visual reports and line graphs for better market analysis. Discover month wise shipments, HS code wise, importer wise, exporter wise, and country wise reports.",
    image: "/global-trade-database/impressive-visual-reports.webp",
  },
  {
    title: "Advance Search",
    desc: "Our Advance search option helps you perform more refined searches by product name, HS code, country, and duration. Further, you can apply data fields’ filters as per your requirement and save your work. Also, you can export these reports in Excel/PDF format.",
    image: "/global-trade-database/advance-search.webp",
  },
  {
    title: "Importer-Exporter Tree",
    desc: "Discover the worldwide supply chain network through our exclusive feature called Importer Exporter Tree. With this feature, you can access the network of a buyer or supplier. You can find their connections from which they are sourcing or exporting their goods.",
    image: "/global-trade-database/importer-exporter-tree.webp",
  },
  {
    title: "Customized Data Reports",
    desc: "You can opt for a customized plan that best suits your budget and requirements. All you need is to fill our contact form with your requirements and we will get back to you in no time. Also, you can avail our offline global trade data reports if they meet your requirements.",
    image: "/global-trade-database/customized-data-reports.webp",
  },
  {
    title: "24×7 Customer Support",
    desc: (
      <>
        We believe in growing with our clients. We are always here to provide assistance to our customers. Our experts will guide you throughout the process. Also, you can contact us at{" "}
        <a
          href="mailto:info@eximtradedata.com"
          className="text-blue-600 hover:underline"
        >
          info@eximtradedata.com
        </a>{" "}
        or call us at{" "}
        <a
          href="tel:+919625812393"
          className="text-blue-600 hover:underline"
        >
          +91-9625812393
        </a>
        .
      </>
    ),
    image: "/global-trade-database/customer-support.webp",
  },
];

export default function EximBenefitsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          Exim Global Trade Information System
        </h2>
        <p className="text-black text-xl mb-10 max-w-3xl mx-auto">
          Some Exclusive Features of our Global Trade Database
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl border border-zinc-200 p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  loading="lazy"
                  decoding="async"
                  className="w-24 h-24 justify-center"
                />
              </div>

              <h3 className="text-lg md:text-xl min-h-14 flex items-center justify-center font-semibold text-black my-3">
                {benefit.title}
              </h3>

              <p className="text-sm text-black text-center">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}