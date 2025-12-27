import Hero from "./Hero";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import DetailedTable from "./DetailedTable.server";
import { getPortData } from "@/lib/global-ports/PortData";
import FAQSection from "@/app/Components/FAQ";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

/* ---------------- METADATA ---------------- */
export async function generateMetadata({ params }) {
  const { Country, Port } = await params;

  const readableCountry =
    Country.charAt(0).toUpperCase() + Country.slice(1).toLowerCase();

  const readablePort = Port.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const title = `${readablePort} Port - ${readableCountry} Port Data | Exim Trade Data`;
  const description = `View detailed import export shipment data, buyers, suppliers, HS codes and trade statistics for ${readablePort} port in ${readableCountry}.`;

  const canonical = `${baseURL}/global-ports/${Country}/${Port}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary",
      images: ["/logo.png"],
    },
  };
}

/* ---------------- PAGE ---------------- */
export default async function Page({ params }) {
  const { Country, Port } = await params;

  const country = Country.toLowerCase();
  const port = Port.toLowerCase();

  const data = await getPortData(country, port);

  // Safety fallback (SEO-safe, no crash)
  if (!data) {
    return (
      <main>
        <Hero heading="Port Trade Data" />
        <p className="p-10 text-center">
          Port data is temporarily unavailable.
        </p>
      </main>
    );
  }

  return (
    <main>
      <Hero heading={`${data.portName} Port Data`} />

      <Overview portName={data.portName} stats={data.section2} />

      <Stats portName={data.portName} data={data.section3} />

      <MarketIntel
        portName={data.portName}
        importData={data.section4.import}
        exportData={data.section4.export}
      />

      <CtaImage portName={data.portName} />

      <DetailedTable
        portName={data.portName}
        importData={data.section6.importData}
        exportData={data.section6.exportData}
      />

      <FAQSection faqs={data.section7.faqs} />
    </main>
  );
}