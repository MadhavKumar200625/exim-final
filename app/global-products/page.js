import { redirect } from "next/navigation";

export const metadata = {
  title: "Global Import-Export Products Directory (A-Z) | Exim Trade Data",
  description:
    "Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.",
  keywords: [
    "Global import-export directory",
    "Import export products A to Z",
    "International trade products",
    "Global trade directory",
    "Import export product list",
    "Alphabetical list of export items",
    "Import export product information",
    "Global trade data",
  ],
  alternates: {
    canonical: "https://eximtradedata.com/global-products",
  },
  openGraph: {
    title: "Global Import-Export Products Directory (A-Z) | Exim Trade Data",
    description:
      "Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.",
    url: "https://eximtradedata.com/global-products",
    type: "website",
    siteName: "Exim Trade Data",
    images: [
      {
        url: "/logo.png",
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Import-Export Products Directory (A-Z) | Exim Trade Data",
    description:
      "Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    images: ["/logo.png"],
  },
};

export default function Page() {
  redirect("/global-products/product-a/country-vietnam/type-import/pg-1");
}