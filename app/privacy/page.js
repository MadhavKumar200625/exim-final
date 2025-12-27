import React from 'react';

export const metadata = {
  title: "Review Exim Trade Data's Privacy Policy",
  description:
    "Review Exim Trade Data’s Privacy Policy to understand how we collect, use, and protect your personal data. Learn about your privacy rights and data security practices.",
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
    canonical: "https://eximtradedata.com/privacy"
  },
  openGraph: {
    title: "Exim Trade Data : Privacy Policy",
    type: "website",
    url: "https://eximtradedata.com/privacy",
    description: "Exim Trade Data values the privacy of your personal information and will go to great lengths to guarantee that it is safeguarded and kept private.",
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
    title: "Exim Trade Data : Privacy Policy",
    description: "Exim Trade Data values the privacy of your personal information and will go to great lengths to guarantee that it is safeguarded and kept private.",
    site: "@eximtradedata",
    creator: "@eximtradedata",
    url: "https://eximtradedata.com/privacy",
    images: ["/logo.png"],
  }
  
};




const Page = () => {
  return (
    <div className="bg-white pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-neutral-800 mb-4">Privacy Policy</h1>
      </header>
        <h2 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Exim Trade Data : Privacy Policy</h2>

      <div className="space-y-4 text-black text-lg leading-relaxed">
        <p>
          Exim Trade Data provides Import and Export data of various countries according to HS Code of the products.
        </p>
        <p>
          This Privacy Policy describes the information that Exim Trade Data collects about you, how we use and protect this information, and the choices you can make about how we use this information. This policy applies to information, including any information that can be used to identify an individual (“Personal Information”), collected about you by Exim Trade Data in different methods, including via the website. Your privacy matters to us, so please get to know our privacy practices and contact us with any questions.
        </p>
      </div>

      <section className="space-y-16 mt-16">
        {/* Section */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Collection of Personal Information</h3>
          <p className="text-black text-base leading-relaxed">
            Your right to use the Website is personal to you. You agree not to reproduce, duplicate, copy, sell, resell, use or exploit for any commercial purposes, the Website or use of or access to the Website or any information or technology obtained from the Website. The contents of the Website, including, without limitation, any content, images, logos and other material are protected under both India and foreign copyright, patent, trademark, and other laws of Exim Trade Data.
          </p>
        </div>

        {/* Section */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Changes and Modifications to the Website</h3>
          <p className="text-black text-base leading-relaxed">
            Personal information includes any information that you choose to provide to us as part of registering for an account. This will include information such as your name, mobile number, address, date of birth, social security number, bank account information, etc. Besides any information you may directly provide, you may give us authorization to access Personal Information from third parties.
          </p>
          <p className="text-black mt-4 text-base leading-relaxed">
            In addition, we may also collect information when you use our products or services, such as the search queries you use, how you use the services we provide, and the types of requests you make.
          </p>
        </div>

        {/* Section */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Use of Personal Information</h3>
          <p className="text-black text-base leading-relaxed mb-6">
            In general we will use the Personal Information that you share for the purpose for which the information was provided, for providing you with information that you have requested or may relate to your request, for informing you about services that you may be interested in, or to improve the WebSite and services we offer customers. Our use of your Personal Information may include, without limitation, the following:
          </p>

          <div className="grid md:grid-cols-1 gap-5">
            {[
              "Register you as a user and identify you when log in",
              "Communicate regarding account information, wire transfers, customer service requests, marketing communications, etc",
              "Obtain maintain, improve, and provide to you the Service and to conduct our business",
              "Produce data analytics and reports containing anonymized summaries of Personal Information and other information that is not Personal Information (such information, \"General Information\") that we share with business partners.",
              "General Information may include Personal Information that has been aggregated, anonymized and will not identify you"
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 text-black p-4  shadow-sm border border-blue-100">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Section */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Disclosure of Personal Information</h3>
          <p className="text-black text-base leading-relaxed">
            Personal Information may be disclosed in limited circumstances, including, but not limited to, meet any applicable law, regulation, legal process or enforceable governmental request, enforce applicable Terms of Service, including investigation of potential violations, detect, prevent, or otherwise address fraud, security or technical issues, to protect and defend the rights or property of Exim Trade Data, or in an emergency threatening an individual’s life, health, or security.
          </p>
          <p className="text-black mt-4 text-base leading-relaxed">
            We rely on third-party service providers to perform a variety of services on our behalf, such as hosting our website. In so doing, we may need to share your Personal Information with them. We provide our service providers with only the Personal Information they need to perform their services and we require that they protect this information and not use it for any other purpose. We may supplement your personal information with information from third parties.
          </p>
        </div>

        {/* Section */}
        <div>
          <h3 className="text-2xl font-semibold text-black mb-4 border-l-4 pl-4 border-blue-600">Information Transfer</h3>
          <p className="text-black text-base leading-relaxed">
            Your Personal Information may be transferred to, stored, and processed in a country other than the one in which it was provided. This may include the United States. When we do so, we transfer information in compliance with applicable data protection laws. And, we take steps to protect Personal Information in whatever country it is stored in or transferred to. We have procedures and controls to help ensure this.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;