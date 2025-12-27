import Link from "next/link";

export default function CtaImage({ portName }) {
  return (
    <section className="relative text-black py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://old-net.eximtradedata.com/images/port_shipmet_data.png')",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Get Detailed {portName} Port Shipment Data
        </h2>

        <p className="text-xl md:text-2xl font-bold text-black mb-8">
          Find detailed {portName} Port shipment data. Discover top traded goods
          by price, quantity, country, and import-export company records through
          our market intelligence reports.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/pricing"
            className="px-8 py-4 bg-blue-600 text-white font-semibold shadow-md transition-transform hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}