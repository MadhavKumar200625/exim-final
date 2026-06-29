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
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl border border-zinc-200">
        <h1 className="text-4xl font-extrabold text-center text-black mb-4">
          Refund Policy
        </h1>

        <h2 className="text-xl font-semibold text-black mb-6 mt-10">
          Refund Policy
        </h2>

        <p className="text-black text-lg mb-6">
          At Exim Trade Data, we are committed to providing authentic, accurate,
          and reliable global import-export trade data. Customer satisfaction is
          our priority, and we strive to deliver the best possible service.
        </p>

        <h3 className="text-lg font-semibold text-black mb-3">
          Refund Eligibility
        </h3>

        <p className="text-black text-lg mb-6">
          Customers may request a refund only on the same day the payment is
          made, provided that the subscribed service or data has not been
          delivered or activated.
        </p>

        <p className="text-black text-lg mb-6">
          Once the data access has been provided, the subscription has been
          activated, or the service has been utilized, no refund will be
          processed.
        </p>

        <h3 className="text-lg font-semibold text-black mb-3">
          Government Restrictions
        </h3>

        <p className="text-black text-lg mb-6">
          In certain situations, government authorities may impose restrictions,
          suspend, or prohibit the distribution of specific import-export data
          (including country-specific trade data). Such restrictions are beyond
          the control of Exim Trade Data.
        </p>

        <p className="text-black text-lg mb-3">
          In these circumstances:
        </p>

        <ul className="list-disc list-inside text-black text-lg mb-6 space-y-2">
          <li>
            Refund requests will not be accepted or processed due to the
            unavailability of the restricted data.
          </li>
          <li>
            As an alternative, Exim Trade Data will provide access to All
            Country Trade Data or other available trade data relevant to your
            business requirements, subject to the terms of your subscription.
          </li>
          <li>
            Where applicable, we may also extend your subscription validity to
            compensate for any interruption in service.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-black mb-3">
          Data Accuracy
        </h3>

        <p className="text-black text-lg mb-6">
          If you identify any discrepancies or inaccuracies in the data
          provided, please notify us immediately by emailing{" "}
          <a
            href="mailto:info@eximtradedata.com"
            className="text-blue-600 underline font-medium"
          >
            info@eximtradedata.com
          </a>
          . Our team will review your concern and make every reasonable effort
          to resolve the issue.
        </p>

        <h3 className="text-lg font-semibold text-black mb-3">
          Refund Process
        </h3>

        <p className="text-black text-lg mb-6">
          If your refund request is approved under the above eligibility
          criteria, the refund will be processed through the original payment
          method (Online Payment, Net Banking, UPI, or other applicable payment
          mode).
        </p>

        <h3 className="text-lg font-semibold text-black mb-3">
          TDS
        </h3>

        <p className="text-black text-lg mb-6">
          If Tax Deducted at Source (TDS) has been deducted from the payment, it
          is the customer's responsibility to manage the applicable TDS through
          their finance or accounts department. Exim Trade Data will process
          refunds only for the amount actually received and will not be
          responsible for refunding any deducted TDS.
        </p>

        <p className="text-black text-lg">
          By purchasing our services, you acknowledge that you have read,
          understood, and agreed to this Refund Policy.
        </p>
      </div>
    </div>
  );
};

export default Page;

