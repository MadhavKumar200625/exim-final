import "./globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoaderHandler from "./Components/LoaderHandler";
import { GlobalLinkLoader } from "./Components/GlobalLinkLoader";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/**
 * Global metadata
 * Kept minimal + crawler friendly
 * Page-level SEO should override where needed
 */
export const metadata = {
  metadataBase: new URL("https://eximtradedata.com"),
  title:
    "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
  description:
    "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",

  keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Data",
    "Export Data",
    "Shipments Data",
    "Customs Data",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
    description:
      "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",
    url: "/",
    siteName: "Exim Trade Data",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Exim Trade Data Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
    description:
      "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  other: {
    "google-site-verification": "VSKuLBADMQzDxe8NHGirJ-TQgOMuWnw3ywzkGbQ-plQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WC3TFBQ989"
          strategy="lazyOnload"
        />

        <Script id="ga-init" strategy="lazyOnload">
          {`
                if (typeof window !== "undefined" && !navigator.webdriver) {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-WC3TFBQ989', {
                    send_page_view: true,
                  });
                }
              `}
        </Script>
          <div id="top-loader"></div>

        <GlobalLinkLoader />

        <LoaderHandler />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
