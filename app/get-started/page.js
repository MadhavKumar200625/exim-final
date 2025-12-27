export const metadata = {
  title: "Get Started with Exim Trade Data | Global Trade Intelligence Platform",
  description:
    "Begin your journey with Exim Trade Data's Global Trade Intelligence System. Access the world's largest trade database to connect with international buyers and suppliers.",
  alternates: {
    canonical: "https://eximtradedata.com/get-started",
  },
  openGraph: {
    title: "Get started with Exim GTIS",
    type: "website",
    url: "https://eximtradedata.com/get-started",
    description:
      "World's largest global trade database. Connect with millions of international buyers and suppliers in one go",
    siteName: "Exim Trade Data",
    images: [
      {
        url: "/logo.png",
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Get started with Exim GTIS",
    description:
      "World's largest global trade database. Connect with millions of international buyers and suppliers in one go",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    images: ["/logo.png"],
  },
};

import GetStartedClient from "./GetStartedClient";

export default function Page() {
  return <GetStartedClient />;
}
