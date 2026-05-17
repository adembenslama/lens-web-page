import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Events Videography & Photography in Tunisia | LENS Production',
  description: 'Professional sports event coverage in Tunisia. Marathon filming, trail running, ultra-trails, football club media. 20+ events covered, 10,000+ athletes captured. Dynamic action photography and videography.',
  keywords: [
    'sports videography Tunisia',
    'marathon coverage Tunisia',
    'trail running photography',
    'sports events Tunisia',
    'Hippo Diarrhytus Run',
    'Ultra Trail Gazelles Sahara',
    'Rimel Challenge',
    'football club media',
    'ASMD media coverage',
    'action sports photography',
    'event filming Tunisia',
    'sports documentary'
  ],
  openGraph: {
    title: 'Sports Events Videography | LENS Production',
    description: 'Professional sports event coverage in Tunisia. 20+ events, 10,000+ athletes captured.',
    url: 'https://lensproduction.tn/sports',
    type: 'website',
    images: [
      {
        url: 'https://lensproduction.tn/images/fullLogo.svg',
        width: 1200,
        height: 630,
        alt: 'LENS Production Sports Coverage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Events Videography | LENS Production',
    description: 'Professional sports event coverage in Tunisia.',
    images: ['https://lensproduction.tn/images/fullLogo.svg'],
  },
  alternates: {
    canonical: 'https://lensproduction.tn/sports',
  },
};

export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
