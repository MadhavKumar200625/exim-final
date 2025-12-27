import Hero from "./Hero";
import MainSection from "./MainSection";
import { getPortsData } from "@/lib/global-ports/getPortsData";

export const dynamic = "force-static";
export const revalidate = 86400; // bots + SEO safe

export async function generateMetadata({ params }) {
  const { country, code } = await params;

  return {
    title: `${country} Ports Data | Exim Trade Data`,
    description: `Search port-wise export and import shipment data of ${country}.`,
    alternates: {
      canonical: `https://eximtradedata.com/ports-data/${country}/${code}`,
    },
  };
}

export default async function Page({ params }) {
  const { country, code } = await params;

  const [letter, pageStr] = code.split("-");
  const page = Number(pageStr) || 1;

  const data = await getPortsData({
    country,
    letter: letter.toUpperCase(),
    page,
  });

  return (
    <main>
      <Hero countryName={country} />
      <MainSection
        heading={country}
        letter={data.letter}
        pg={data.page}
        data={data.data}
        totalValues={data.totalValues}
      />
    </main>
  );
}