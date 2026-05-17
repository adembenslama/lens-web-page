import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Videography & Photography Services in Tunisia | LENS Production',
  description: 'Professional wedding videography and photography in Tunisia. Cinematic films, full day coverage, highlight reels, pre-wedding sessions. 500+ weddings filmed, 10 years experience. Book your wedding coverage today.',
  keywords: [
    'wedding videography Tunisia',
    'wedding photographer Tunisia',
    'cinematic wedding films',
    'Tunisia wedding coverage',
    'destination weddings Tunisia',
    'traditional Tunisian weddings',
    'wedding highlight reels',
    'pre-wedding photography',
    'full day wedding coverage',
    'Bizerte wedding photographer'
  ],
  openGraph: {
    title: 'Wedding Videography Services | LENS Production',
    description: 'Professional wedding videography and photography in Tunisia. 500+ weddings filmed, 10 years experience.',
    url: 'https://lensproduction.tn/weddings',
    type: 'website',
    images: [
      {
        url: '/images/fullLogo.svg',
        width: 1200,
        height: 630,
        alt: 'LENS Production Wedding Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Videography Services | LENS Production',
    description: 'Professional wedding videography and photography in Tunisia.',
    images: ['/images/fullLogo.svg'],
  },
  alternates: {
    canonical: '/weddings',
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
