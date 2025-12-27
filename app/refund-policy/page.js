import React from 'react'


export const metadata = {
  title: "Review Exim Trade Data's Refund Policy",
  description:
    "Review Exim Trade Data's refund policy for global trade data. Learn how to request a refund within 48 hours for any discrepancies in our import-export reports.",
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
    "Import Trade Data",
    "Export Trade Data",
    "Importers",
    "Exporters",
    "Buyers",
    "Suppliers"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/refund-policy"
  },
  openGraph: {
    title: "Exim Trade Data : Refund Policy",
    type: "website",
    url: "https://eximtradedata.com/refund-policy",
    description: "We are dedicated to providing our customers with genuine and precise global import export data. If you find inaccuracies in our global trade reports within 48 hours, we'll fix them and process your refund",
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
    title: "Exim Trade Data : Refund Policy",
    description: "We are dedicated to providing our customers with genuine and precise global import export data. If you find inaccuracies in our global trade reports within 48 hours, we'll fix them and process your refund",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/refund-policy",
    images: ["/logo.png"],
  }
  
};




const Page = () => {
  return (
    <div className="bg-white px-4 pb-12 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl  border border-zinc-200">
        <h1 className="text-4xl font-extrabold text-center text-black mb-4">
          Refund Policy
        </h1>
        <h2 className="text-xl font-semibold text-black mb-6 mt-10">
          Refund Policy:
        </h2>

        <p className="text-black text-lg mb-6">
          We are dedicated to providing our customers with genuine and precise
          global import export data. If you find inaccuracies in our global
          trade reports within <span className="font-semibold">48 hours</span>,
          we&apos;ll fix them and process your refund—whatever your payment
          mode—within <span className="font-semibold">48 hours</span>!
        </p>

        <p className="text-black text-lg mb-6">
          Please notify us via email at{" "}
          <a
            href="mailto:info@eximtradedata.com"
            className="text-blue-600 underline font-medium"
          >
            info@eximtradedata.com
          </a>{" "}
          to clarify any inaccuracies in our data.
        </p>

        <p className="text-black text-lg mb-8">
          Your complete satisfaction is our priority, and we aim to grow
          together with our clients.
        </p>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-5 rounded-xl shadow-sm">
          <p className="font-semibold mb-2 text-lg">Note:</p>
          <ul className="list-disc list-inside text-base text-yellow-800 space-y-2">
            <li>
              You will get your refund as per your payment mode (Online, net
              banking, or UPI).
            </li>
            <li>
              <span className="font-semibold">TDS</span> should be deducted by
              your own financial team or else we will{" "}
              <span className="font-semibold">not initiate</span> any refund for
              the same.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page