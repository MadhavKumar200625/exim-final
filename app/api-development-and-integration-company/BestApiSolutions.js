import React from 'react';
import Link from 'next/link';
const benefits = [
  {
    title: "import export data",
    desc: (
      <>
        RESTful API
        <br />
        REST API or RESTful APIs are the best way to build expert trading platforms. It uses HTTP requests and performs database functions like read, create, update or delete.
      </>
    ),
    image: "",
  },
  {
    title: "FIX API",
    desc: (
      <>
        FIX (Financial Information Exchange) API helps companies to communicate between client, trader, broker, liquidity provider & investment fund. We provide expert FIX API solutions that assist companies in developing high speed trading systems to access real time market insights.
      </>
    ),
    image: "",
  },
  {
    title: "Trade APIs",
    desc: (
      <>
        Through our trade API, companies can create an expert market intelligence platform that helps them achieve their business goals. In a trade API, you get complete{" "}
        <a href='/import-export-data-country-wise' className="text-blue-600">import export data</a>{" "}
        information at one place and can perform various searches as per your intent (like importer/exporter, country, date, etc.).
      </>
    ),
    image: "",
  },
  {
    title: "Cloud API Solutions",
    desc: (
      <>
        Exim Trade Data is the best cloud API service provider company offering secure and seamless cloud API solutions. We have a dedicated team of developers having years of experience in working on PaaS, SaaS, Iaas APIs. Get the best reasonable cloud API solutions from our experts and ensure a seamless user experience across all portals and devices.
      </>
    ),
    image: "",
  },
  {
    title: "Third Party API Integration",
    desc: (
      <>
        We also offer open API solutions to the clients that helps them easily make third party integrations such as Zulu, Chartlist, Tradency, Auto. Our Experts provide full support till the successful integration of the API ensuring high performance and security.
      </>
    ),
    image: "",
  },
  {
    title: "API Maintenance & Support",
    desc: (
      <>
        Customers are our foremost priority. We do not rest until the customer is satisfied. We provide thorough APi maintenance and support for the smooth and secure API operations by developing robust API architectures with secure API keys, RBAC modules, user, IP controls, etc.
      </>
    ),
    image: "",
  },
];

const BestApiSolutions = () => {
  return (
   <section className="py-16 bg-linear-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-black">
        Best API Solutions
      </h2>
      <p className='text-lg pt-3 md:px-20'>
        Being the best API development agency, we provide reliable and customer centric API solutions that help you build more innovative products. Choose from our wide range of API development services.


      </p>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white  shadow-xl border border-zinc-200 p-6 hover:shadow-2xl transition duration-300"
                >
                  <div className="h-34 w-[55%] mx-auto relative overflow-hidden">
  <img
    src={`/api-page/${benefit.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace("&", "and")}.webp`}
    alt={benefit.title}
    className="w-full h-full object-contain"
    loading="lazy"
    decoding="async"
  />
</div>
                  <h3 className="text-lg md:text-xl min-h-14 flex items-center justify-center font-semibold text-black my-3">{benefit.title}</h3>
                  <p className="text-sm text-black text-center">{benefit.desc}</p>
                </div>
              ))}
            </div>
  </div>
</section>
  )
}

export default BestApiSolutions