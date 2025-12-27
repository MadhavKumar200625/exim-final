import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Global Companies List | Top Global Importers & Exporters – Exim Trade Data",
    description:
      "Explore Exim Trade Data's Global Companies List to find top importers and exporters across 200+ countries.",
    keywords:
      "global companies list, importers exporters directory, trade intelligence, international trade data",
    alternates: {
      canonical: "https://eximtradedata.com/global-companies-list",
    },
    openGraph: {
      title: "Global Companies List | Top Global Importers & Exporters – Exim Trade Data",
      description:
        "Explore Exim Trade Data's Global Companies List to find top importers and exporters across 200+ countries.",
      url: "https://eximtradedata.com/global-companies-list",
      images: [{ url: "/logo.png" }],
    },
    twitter: {
      card: "summary",
      title: "Global Companies List | Top Global Importers & Exporters – Exim Trade Data",
      description:
        "Explore Exim Trade Data's Global Companies List to find top importers and exporters across 200+ countries.",
      images: ["/logo.png"],
    },
  };
}

export default function Page() {
  redirect("/global-companies-list/vietnam/a-1");
}