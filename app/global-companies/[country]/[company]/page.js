export const dynamic = "force-static";
export const revalidate = 86400;

import Hero from "./Hero";
import CompanyView from "./CompanyView";
import { getCompanyData } from "@/lib/companies/getCompanyData";

export async function generateMetadata({ params }) {
  params = await params
  const { country = "", company = "" } = params;

  const companyName = company
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const countryName = country.charAt(0).toUpperCase() + country.slice(1);

  const url = `https://eximtradedata.com/global-companies/${country}/${company}`;

  return {
    title: `${companyName} Import Export Trade Data | Exim Trade Data`,
    description: `Explore import export data, buyers, suppliers and shipment intelligence of ${companyName}.`,
    alternates: { canonical: url },
    openGraph: {
      title: companyName,
      description: `Trade intelligence for ${companyName}`,
      url,
      images: [{ url: "/logo.png" }],
    },
    twitter: { card: "summary", images: ["/logo.png"] },
  };
}

export default async function Page({ params }) {
  params = await params
  const data = await getCompanyData(params);

  return (
    <main>
      <Hero companyName={data.companyName} />
      <CompanyView data={data} />
    </main>
  );
}