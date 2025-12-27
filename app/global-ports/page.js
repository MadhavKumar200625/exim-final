import React from 'react'
import Hero from './Hero';
import PortDataByCountry from './PortDataByCountry';
import ContactUs from '../about/ContactUs';

export const metadata = {
  title: 'Global Ports Data by Country – Container Port Information & Statistics | Exim Trade Data',
  description:
    'Access detailed global port data by country. Explore thousands of international sea ports and download the complete world port list in Excel or PDF format.',
  keywords: [
    'Global ports data',
    'Container ports data',
    'World sea port list',
    'Port data by country',
    'International port database',
    'Download global port list in Excel',
    'Container port statistics by country',
    'Sea port data in PDF format',
    'Detailed global shipping port data',
    'Country-wise port information',
    'Maritime trade data',
    'Global shipping ports',
    'International sea ports directory',
    'Port traffic statistics',
    'Export import ports data',
  ],
  alternates: {
    canonical: 'https://eximtradedata.com/global-ports',
  },
  openGraph: {
    title: 'Global Ports Data by Country – Container Port Information & Statistics | Exim Trade Data',
    description:
      'Access detailed global port data by country. Explore thousands of international sea ports and download the complete world port list in Excel or PDF format.',
    url: 'https://eximtradedata.com/global-ports',
    type: 'website',
    siteName: 'Exim Trade Data',
    images: [
      {
        url: '/logo.png',
        alt: 'Exim Trade Data Logo',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Ports Data by Country – Container Port Information & Statistics | Exim Trade Data',
    description:
      'Access detailed global port data by country. Explore thousands of international sea ports and download the complete world port list in Excel or PDF format.',
    site: '@eximtradedata',
    creator: '@eximtradedata',
    url: 'https://eximtradedata.com/global-ports',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <PortDataByCountry />
      <ContactUs />
    </main>
  );
}