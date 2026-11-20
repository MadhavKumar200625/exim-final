import "./globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoaderHandler from "./Components/LoaderHandler";
import { GlobalLinkLoader } from "./Components/GlobalLinkLoader";
import AllPageForm from "./Components/AllPageForm";
import ScrollArrows from "./Components/ScrollArrows";
import GeoBootstrap from "./Components/GeoBootstrap";
import EximSmartBot from "./Components/EximSmartBot";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eximtradedata.com/#organization",
      name: "Exim Trade Data",
      url: "https://eximtradedata.com/",
      logo: "https://eximtradedata.com/logo.png",
      description:
        "Exim Trade Data is a global trade intelligence platform providing import-export data, customs shipment records, importer-exporter details, trade analytics and international market insights across 200+ countries.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 93146 19475",
        email: "info@eximtradedata.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/eximtradedataofficial",
        "https://www.instagram.com/eximtradedata/",
        "https://x.com/Exim_Trade_Data",
        "https://www.linkedin.com/company/exim-trade-data",
        "https://in.pinterest.com/exim_trade_data/",
        "https://www.youtube.com/channel/UCsbKPsVwgAgqJi4EB20iBvg",
      ],
      knowsAbout: [
        "Import Export Data",
        "Global Trade Data",
        "International Trade Intelligence",
        "Customs Shipment Records",
        "Importer and Exporter Database",
        "Global Buyers and Suppliers",
        "HS Code Data",
        "Country Wise Import Export Data",
        "Product Wise Trade Data",
        "International Trade Statistics",
        "Global Market Research",
        "Port Shipment Data",
        "Global Import Export Data Provider",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://eximtradedata.com/#website",
      url: "https://eximtradedata.com/",
      name: "Exim Trade Data",
      publisher: { "@id": "https://eximtradedata.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://eximtradedata.com/#gtis",
      name: "Exim GTIS",
      alternateName: "Exim Global Trade Intelligence System",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Global Trade Intelligence Platform",
      operatingSystem: "Web",
      url: "https://eximtradedata.com/",
      description:
        "Exim GTIS is a global trade intelligence platform that helps businesses research international shipments, identify potential buyers and suppliers, analyse product-wise trade data, explore HS codes and discover market opportunities across 200+ countries.",
      publisher: { "@id": "https://eximtradedata.com/#organization" },
      featureList: [
        "Global Import Export Data",
        "Country Wise Trade Data",
        "Importer and Exporter Information",
        "Global Buyer and Supplier Database",
        "HS Code and Product Search",
        "Customs Shipment Records",
        "International Trade Statistics",
        "Global Port Data",
        "Product Market Research",
        "Competitor Trade Analysis",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://eximtradedata.com/#trade-data-service",
      name: "Global Import Export Data Services",
      serviceType: "Global Trade Data and Market Intelligence",
      provider: { "@id": "https://eximtradedata.com/#organization" },
      url: "https://eximtradedata.com/",
      description:
        "Exim Trade Data provides global import export data, customs shipment records, importer and exporter details, HS code information, product-wise trade statistics and international market intelligence across 200+ countries.",
      areaServed: { "@type": "Place", name: "Worldwide" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: [
          "Importers",
          "Exporters",
          "Manufacturers",
          "International Traders",
          "Market Researchers",
          "Business Development Professionals",
        ],
      },
    },
  ],
};

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

  /* keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Data",
    "Export Data",
    "Shipments Data",
    "Customs Data",
  ], */

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
      </head>
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
        <GeoBootstrap />

        <Header />
        <main>{children}</main>
        <ScrollArrows />
        {/* <EximSmartBot></EximSmartBot> */}
        <Footer />
      </body>
    </html>
  );
}
