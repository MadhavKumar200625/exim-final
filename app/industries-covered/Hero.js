import React from 'react'
import Link from 'next/link'

const industries = [
  {
    id: 1,
    name: 'Agribusiness',
    subheading: 'Get Expert Data Solutions for a Successful Agribusiness',
image:"/solutions/agribusiness.webp",
    description:
      'The Agribusiness Industry is a field of uncertainty and risk. Exim Trade Data provides expert market intelligence solutions that help you analyze financial risks involved in the agriculture sector.',
    link: 'agribusiness'
  },
  {
    id: 2,
    name: 'Automotive',
    subheading: 'Identify the Current Market Trends & Demands in the Automotive Market',
image:"/solutions/automotive.webp",
    description:
      'The Automotive Market is a very fast paced market in which everyone wants to excel with each other. Through our impressive trade intelligence platform, you can stand out amongst your competitors. Our interactive business intelligence reports help you with the accurate forecasts of the latest market technology, trends, and demands.',
    link: 'automotive'
  },
  {
    id: 3,
    name: 'Energy & Natural Resources',
    subheading: 'Become a Leader in the Energy Sector through Expert Market Intelligence',
image:"/solutions/energy.webp",
    description:
      'The Energy Market is continuously striving for new innovations that offer a sustainable future and reasonable pricing. In order to keep pace with the challenging Energy market, you need to plan strategically. At Exim Trade Data, we provide expert energy market intelligence reports that help you predict the future risks, product pricing, production demand and discover the top buyers & suppliers in the Energy Market.',
    link: 'energy'
  },
  {
    id: 4,
    name: 'Research & Consulting',
    subheading: 'Global Trade Intelligence Platform for Research & Consulting Companies',
image:"/solutions/research_and_consulting.webp",
    description:
      'Empower your market research through our global trade intelligence platform. Make more accurate decisions based on our business intelligence reports. Identify the most profitable markets by HSN Code, product details, quantity, price, port shipments, country, buyers, and supplier details. Reach to the top trading companies through our global companies list and discover the potential business growth opportunities.',
    link: 'research-and-consulting'
  },
  {
    id: 5,
    name: 'Corporate Companies',
    subheading: 'Best Market Intelligence Platform for Corporate Companies',
image:"/solutions/corporation.webp",
    description:
      'Exim Trade Data provides the best market intelligence platform for corporate companies. Get in-depth insights into the international trade markets, industry specific trends, demand, and competitor analysis. Discover the best investment opportunities in the global market through our global companies’ portfolio. Drive more sales for your business in a cost-effective manner. Outrank your competitors in the international market through our impressive trade intelligence reports.',
    link: 'corporation'
  },
  {
    id: 6,
    name: 'Asset Management',
    subheading: 'Best Market Research Platform for Assets & Investment Companies',
image:"/solutions/asset_management.webp",
    description:
      'Exim Trade Data provides the best market research platform for assets and investment companies. Explore the tons of global import and export companies’ profiles. Get into their shipment activities, identify their top assets and evaluate their market share. Identify the most profitable opportunities for investment and enhance your company’s assets.',
    link: 'asset-management'
  },
  {
    id: 7,
    name: 'Goverment Agencies',
    subheading: 'Market Intelligence Platform for Government Agencies',
image:"/solutions/government_agencies.webp",
    description:
      'Exim Trade Data provides the best global market intelligence platform for government agencies. We help government bodies in analyzing the international market trends, demand, risks and trade forecasts. We provide comprehensive business reports that assist them in making accurate strategic decisions, framing trade policies, adding tariffs and generating more revenue on goods and services.',
    link: 'government-agencies'
  },
  {
    id: 8,
    name: 'Law Firms',
    subheading: 'Expert Trade Data Solutions for Law Firms & Legal Professionals',
image:"/solutions/law_firms.webp",
    description:
      'Exim Trade Data provides the expert data solutions for Law firms & legal professionals. Get a track of the global market trends, trade policies regarding goods through our comprehensive market intelligence reports. Discover the key performing factors through our reports and identify the growth opportunities to expand your relationships.',
    link: 'law-firms'
  },
  {
    id: 9,
    name: 'Importers',
    subheading: 'Leading Trade Intelligence Platform for Global Importers',
image:"/solutions/importer.webp",
    description:
      'Reach out to the leading suppliers, retailers and distributers across the globe through our global exporters’ database. Get in-depth visibility into their shipment activities and find out the potential business prospects. Expand your network to the international market by identifying the most profitable investment opportunities.',
    link: 'importers'
  },
  {
    id: 10,
    name: 'Exporters',
    subheading: 'Enhance Your Sales Potential with Our Global Importers Database',
image:"/solutions/exporters.webp",
    description:
      'Get more qualifying sales and leads for your business through our global importers database. Discover the verified buyers and importers related to your business. Identify the potential business prospects with high ROI. Find the most traded goods and commodities in the foreign market through our market research platform. And conclude the most profitable products for your business. Outrank your competition with a comprehensive marketing strategy based on accurate trade statistics.',
    link: 'exporters'
  },
  {
    id: 11,
    name: 'Supply Chain & Logistics',
    subheading: 'The Leading Trade Intelligence Platform for Supply Chain & Logistics Companies',
image:"/solutions/logistic.webp",
    description:
      'Exim Trade Data provides the best market research platform for supply chain & logistics companies. Get the detailed insights on global ports shipments, cargo volumes, and import-export companies along with product description, HS Code, quantity, price, unit, and country of origin. Identify the sales opportunities and increase profitability. Our data assists you with the procurement and sourcing process for your business. Ensure efficient supply chain operations and achieve your business goals.',
    link: 'supply-chain-and-logistics'
  },
  {
    id: 12,
    name: 'IT & Consulting',
    subheading: 'Revolutionize your business through our Trade Intelligence Platform',
image:"/solutions/it_and_consulting.webp",
    description:
      'Transform your business through Exim Trade Data Market Intelligence Platform. Get in-depth insights into the global market trends, demand, and technologies. Utilize these valuable insights to refine your services and ensure seamless experience for your customers.',
    link: 'it-and-consulting'
  },
  {
    id: 13,
    name: 'Insurance Companies',
    subheading: 'Seek Business Growth with our Market Intelligence Platform',
image:"/solutions/insurance_companies.webp",
    description:
      'Refine your services with expert business intelligence reports. Get a more detailed financial overview of global import export companies, trading goods and countries. Utilize these valuable statistics to identify risks, fraud claims and investment opportunities. Enhance your customer base through our Market Intelligence Platform.',
    link: 'insurance-companies'
  },
  {
    id: 14,
    name: 'Construction',
    subheading: 'Best Market Intelligence Platform for Construction Companies',
image:"/solutions/construction.webp",
    description:
      'Analyze the global construction market of over 60+ countries through our market intelligence platform. Utilize the financial trade data of countries, companies and commodities for an efficient project planning. Eliminate market risks, overspending, project delays, workflaws and discover profitable investment opportunities.',
    link: 'construction'
  },
  {
    id: 15,
    name: 'Retail',
    subheading: 'Boost Your Company’s Sales through Our Market Research Platform',
image:"/solutions/retail.webp",
    description:
      'Exim Trade Data provides the best market research platform for retail companies. We provide actionable data insights that help your business flourish in the global market. Our brief business intelligence reports assist you in analyzing your customer’s intent, market demand, product pricing, supply chain and identifying business growth opportunities.',
    link: 'retail'
  },
  {
    id: 16,
    name: 'Finance',
    subheading: 'Improve Your Decision Making With Our Impressive Financial Reports',
image:"/solutions/finance.webp",
    description:
      'Finance market is a very complex and unpredictable market. Exim Trade Data provides detailed insights into the finance market that helps you make fast and accurate decisions regarding loans, insurance and investments. Our financial reports help you analyze the latest market trends, calculate risk and identify best investment opportunities.',
    link: 'finance'
  },
  {
    id: 17,
    name: 'Chemical',
    subheading: 'Best Market Intelligence Platform for Chemical Industries',
image:"/solutions/chemical.webp",
    description:
      'Exim Trade Data provides the best market intelligence platform for chemical industries. Gain unique insights of the global chemical market such as top imports, exports, trading countries and chemical companies. Get versed with the latest trends, technologies and innovations in the chemical market through our quality business reports.',
    link: 'chemical'
  },
  {
    id: 18,
    name: 'Sales & Marketing',
    subheading: 'Boost your sales & Marketing Business with a Market Intelligence Report.',
image:"/solutions/sales_and_marketing.webp",
    description:
      'Discover the business opportunities in the global trade market and facilitate your business growth through a research solution report of Exim Trade Data. Collect the in-depth international trade market insights report of top import-export commodities, top Buyers & suppliers, and top shipment data. for enhancing your Sales & Marketing Business.',
    link: 'sales-and-marketing'
  },
  {
    id: 19,
    name: 'Academic & Education',
    subheading: 'Collect the customized market intelligence report of Academic & Educational Institutions',
image:"/solutions/academic_and_education.webp",
    description:
      'Exim Trade Data is the best market intelligence platform for providing the in-depth market insight report on Academic & Educational Institutions. Our trade data helps you to stand out amongst your competitors and gather the most accurate knowledge of market trends, technologies, and customer base.',
    link: 'academic-and-education'
  },
  {
    id: 20,
    name: 'Aerospace & Defence',
    subheading: 'Collect the Real-time analytic report of Aerospace & Defence',
image:"/solutions/aerospace_and_defence.webp",
    description:
      'Exim Trade Data is the most prominent global market intelligence platform for Aerospace & Defence. Our trade market intelligence report helps Aerospace & Defence agencies to stay up-to-date with the latest market trends, technologies, and demand. Explore the aerospace market through the Customized Trade Intelligence report.',
    link: 'aerospace-and-defence'
  }
];

const Hero = () => {
  return (
    <section className="bg-white pt-32 pb-14 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black text-center mb-16">
          Industries We Cover
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white  overflow-hidden shadow-xl  hover:shadow-2xl transition-all  duration-300 border border-slate-200"
            >
              <Link href={industry.link} prefetch={false}>
                <div className="h-48 overflow-hidden cursor-pointer">
                  <img
  src={industry.image}
  alt={industry.name}
  loading="lazy"
  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
/>
                </div>
              </Link>

              <div className="p-6 space-y-3">
                <Link href={industry.link}>
                  <div className="space-y-1 cursor-pointer">
                    <h3 className="text-xl sm:text-2xl text-black  font-extrabold  tracking-tight">
                      {industry.name}
                    </h3>
                    <h4 className="text-lg line-clamp-2 text-ellipsis font-semibold text-black">
                      {industry.subheading}
                    </h4>
                  </div>
                </Link>

<p className="text-black text-sm leading-relaxed h-16 overflow-hidden text-ellipsis line-clamp-4">
  {industry.description}
</p>
                <div className='w-full text-center'>

                
                <Link href={industry.link} >
                  <span className="inline-flex text-md items-center mt-4  px-5 py-2 bg-blue-600 text-white hover:scale-105  font-semibold transition-all duration-300 shadow-md group">
                    Gain Insight
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero