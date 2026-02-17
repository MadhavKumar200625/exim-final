import Hero from "@/app/global-companies-list/Hero";
import Companies from "@/app/global-companies-list/Companies";
import { getCompaniesList } from "@/lib/companies/getCompaniesList";

// export const dynamic = "force-static";
export const revalidate = 86400;

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capWords(str) {
  return str.replace(/_/g, " ").split(" ").map(cap).join(" ");
}

export async function generateMetadata({ params }) {
  const { country, page } = await params;
  const name = capWords(country);

  return {
    title: `${name} Import Export Companies List | Exim Trade Data`,
    description: `Browse verified ${name} companies, buyers and suppliers with shipment history.`,
    alternates: {
      canonical: `https://eximtradedata.com/global-companies-list/${country}/${page}`,
    },
  };
}

export default async function Page({ params }) {
  const { country, page } = await params;

  const data = await getCompaniesList({ country, page });

  return (
    <main>
      <Hero
        heading={`${capWords(country)} Companies List`}
        subHeading={`Verified ${capWords(country)} buyers and suppliers directory`}
      />

      <Companies
        defaultCountry={country}
        defaultLetter={page.split("-")[0]}
        companies={data.companies}
        totalValues={data.totalValues}
        currentPage={Number(page.split("-")[1])}
      />
    </main>
  );
}