import React from 'react'
import ContactInfo from './ContactInfo';
import Hero from './Hero';


export const metadata = {
  title: 'Contact US - Get Expert Insights on Import-Export Market Trends | Exim Trade Data',
  description:
    'Get in touch with Exim Trade Data for reliable global trade data. Reach out for inquiries, support, or to learn more about how we can help your business grow.',
  keywords: [
    'export and import data',
    '60 countries global trade data',
    'contact us',
    'usa export and import data',
    'global trade data',
    'data by hs code',
    'hs code list'
  ],
  alternates: {
    canonical: 'https://eximtradedata.com/contact',
  },
  openGraph: {
    title: 'Exim Trade Data:- Contact Us',
    type: 'website',
    url: 'https://eximtradedata.com/contact',
    description:
      'To get information, reach out to us today to access reliable and up-to-date global import-export trade data for your business needs.',
    siteName: 'Exim Trade Data',
    images: [
      {
        url: '/logo.png',
        alt: 'Exim Trade Data Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Exim Trade Data:- Contact Us',
    description:
      'To get information, reach out to us today to access reliable and up-to-date global import-export trade data for your business needs.',
    site: '@eximtradedata',
    creator: '@eximtradedata',
    url: 'https://eximtradedata.com/contact',
    images: ['/logo.png'],
  },
};

const Page = () => {
  return (
    <main>
      <Hero />
      <ContactInfo />
    </main>
  );
};

export default Page;