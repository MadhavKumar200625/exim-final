import Hero from "@/app/global-products/Hero";
import Products from "./Products";
import { getGlobalProducts } from "@/lib/globalProducts";
import DataNotFound from "@/app/Components/DataNotFound";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  params = await params;

  const { products, country, type, page } = params;
  const letter = products.replace("product-", "");
  const countryName = country.replace("country-", "");
  const tradeType = type.replace("type-", "");
  const pageNumber = Number(page.replace("pg-", "")) || 1;
  const data = await getGlobalProducts({
    letter,
    country: countryName,
    type: tradeType,
    page: pageNumber,
  });

  const readableLetter = letter.toUpperCase();
  const readableCountry = country.replace("country-", "").replace(/_/g, " ");
  const trade = tradeType;

  return {
    title: `${readableCountry} ${trade} Products Starting With ${readableLetter}`,
    alternates: {
      canonical: `https://eximtradedata.com/global-products/${products.toLowerCase()}/${country.toLowerCase()}/${type.toLowerCase()}/${page.toLowerCase()}`,
    },
    ...(!data.products.length && { robots: { index: false, follow: true } }),
  };
}

export default async function Page({ params }) {
  params = await params;

  const letter = params.products.replace("product-", "");
  const country = params.country.replace("country-", "");
  const type = params.type.replace("type-", "");
  const page = Number(params.page.replace("pg-", "")) || 1;

  const data = await getGlobalProducts({
    letter,
    country,
    type,
    page,
  });

  if (!data.products.length) {
    return <DataNotFound subject="Product data" />;
  }

  const normalizeCountry = (v) =>
  v
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main>
      <Hero heading={`Products Starting With ${letter.toUpperCase()}`} />

      

<Products
  defaultLetter={letter}
  defaultCountry={normalizeCountry(country)}
  defaultTradeType={type === "import" ? "Import" : "Export"}
  currentPage={page}
  products={data.products}
  totalValues={data.total}
/>
    </main>
  );
}