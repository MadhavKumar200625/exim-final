import Hero from "./Hero";
import MainSection from "./MainSection";
import { getPortsData } from "@/lib/global-ports/getPortsData";
import { notFound } from "next/navigation";

// export const dynamic = "force-static";
export const revalidate = 86400; // bots + SEO safe

export async function generateMetadata({ params }) {
  const { country, code } = await params;
  const [letter, pageStr] = code.split("-");
  const data = await getPortsData({
    country,
    letter: letter.toUpperCase(),
    page: Number(pageStr) || 1,
  });

  return {
    title: `${country} Ports Data | Exim Trade Data`,
    description: `Search port-wise export and import shipment data of ${country}.`,
    alternates: {
      canonical: `https://eximtradedata.com/ports-data/${country.toLowerCase()}/${code.toLowerCase()}`,
    },
    ...(!data.data.length && { robots: { index: false, follow: true } }),
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

  if (!data.data.length) {
    notFound();
  }

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