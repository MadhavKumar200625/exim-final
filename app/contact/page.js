import React from 'react'
import ContactInfo from './ContactInfo';
import Hero from './Hero';
import Head from "next/head";


export const metadata = {
  title: 'Contact Exim Trade Data | Book a Free Demo',
  description:
    'Tell us your product, HS code and target countries and we will show you real shipment data in a live demo. Contact our team today.',
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
    title: 'Contact Exim Trade Data | Book a Free Demo',
    type: 'website',
    url: 'https://eximtradedata.com/contact',
    description:
      'Tell us your product, HS code and target countries and we will show you real shipment data in a live demo. Contact our team today.',
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
    title: 'Contact Exim Trade Data | Book a Free Demo',
    description:
      'Tell us your product, HS code and target countries and we will show you real shipment data in a live demo. Contact our team today.',
    site: '@eximtradedata',
    creator: '@eximtradedata',
    url: 'https://eximtradedata.com/contact',
    images: ['/logo.png'],
  },
};

const Page = () => {
  return (

    <>
    <head>
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eximtradedata.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://eximtradedata.com/contact"
    }
  ]
}
`}
        </script>
      </head>
    <main>
      <Hero />
      <ContactInfo />
    </main>
    </>
  );
};

export default Page;
