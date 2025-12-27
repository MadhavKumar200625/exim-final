import Hero from "@/app/global-products/Hero";
import Products from "./Products";
import { getGlobalProducts } from "@/lib/globalProducts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  params = await params;

  const { products, country, type, page } = params;

  const letter = products.replace("product-", "").toUpperCase();
  const readableCountry = country.replace("country-", "").replace(/_/g, " ");
  const trade = type.replace("type-", "");

  return {
    title: `${readableCountry} ${trade} Products Starting With ${letter}`,
    alternates: {
      canonical: `https://eximtradedata.com/global-products/${products}/${country}/${type}/${page}`,
    },
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

  return (
    <main>
      <Hero heading={`Products Starting With ${letter.toUpperCase()}`} />

      <Products
        defaultLetter={letter.toUpperCase()}
        defaultCountry={country.replace(/_/g, " ")}
        defaultTradeType={type === "import" ? "Import" : "Export"}
        products={data.products}
        totalValues={data.total}
      />
    </main>
  );
}