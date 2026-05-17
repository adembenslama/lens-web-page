import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Video Production Services in Tunisia | LENS Production',
  description: 'Professional corporate video production for leading brands in Tunisia. Factory tours, brand activations, company profiles. Clients include One Tech Group, Orange Tunisie, Medicate International.',
  keywords: [
    'corporate video production Tunisia',
    'corporate videography Tunisia',
    'company profile video',
    'factory tour video',
    'brand activation video',
    'corporate event coverage',
    'business video production',
    'industrial video Tunisia',
    'One Tech Group video',
    'Orange Tunisie video',
    'Medicate video production',
    'commercial video Tunisia'
  ],
  openGraph: {
    title: 'Corporate Video Production | LENS Production',
    description: 'Professional corporate video production for leading brands in Tunisia. 50+ corporate projects completed.',
    url: 'https://lensproduction.tn/corporate',
    type: 'website',
    images: [
      {
        url: 'https://lensproduction.tn/images/fullLogo.svg',
        width: 1200,
        height: 630,
        alt: 'LENS Production Corporate Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Video Production | LENS Production',
    description: 'Professional corporate video production for leading brands in Tunisia.',
    images: ['https://lensproduction.tn/images/fullLogo.svg'],
  },
  alternates: {
    canonical: 'https://lensproduction.tn/corporate',
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
