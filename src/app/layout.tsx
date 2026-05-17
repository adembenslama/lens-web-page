import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LENS Production - Professional Wedding & Sports Videography in Tunisia",
  description: "Professional videography and photography services in Tunisia. Specializing in weddings, sports events, and commercial productions. 10 years of experience, 500+ weddings filmed, 160k+ social media followers.",
  keywords: [
    "wedding videography Tunisia",
    "sports videography Tunisia",
    "professional photography Tunisia",
    "wedding photographer Tunisia",
    "event videography",
    "cinematic wedding films",
    "Bizerte videographer",
    "Tunisia wedding films",
    "marathon coverage",
    "sports events Tunisia",
    "commercial videography",
    "drone footage Tunisia",
    "4K wedding videos",
    "destination weddings Tunisia"
  ],
  authors: [{ name: "Walid Benslama", url: "https://www.instagram.com/walid_benslama_photography" }],
  creator: "LENS Production",
  publisher: "LENS Production",
  metadataBase: new URL('https://lensproduction.tn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lensproduction.tn',
    title: 'LENS Production - Professional Wedding & Sports Videography in Tunisia',
    description: 'Professional videography and photography services in Tunisia. 10 years of experience, 500+ weddings filmed.',
    siteName: 'LENS Production',
    images: [
      {
        url: '/images/fullLogo.svg',
        width: 1200,
        height: 630,
        alt: 'LENS Production Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LENS Production - Professional Wedding & Sports Videography',
    description: 'Professional videography and photography services in Tunisia. 10 years of experience.',
    images: ['/images/fullLogo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/minimLogo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "LENS Production",
              "image": "https://lensproduction.tn/images/fullLogo.svg",
              "description": "Professional videography and photography services in Tunisia specializing in weddings, sports events, and commercial productions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TN",
                "addressRegion": "Bizerte"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.2744,
                "longitude": 9.8739
              },
              "url": "https://lensproduction.tn",
              "telephone": "+216-55-708-018",
              "email": "benslamacommercial@gmail.com",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/photobenslama",
                "https://www.instagram.com/walid_benslama_photography"
              ],
              "founder": {
                "@type": "Person",
                "name": "Walid Benslama"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "500"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Videography Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Videography",
                      "description": "Professional cinematic wedding films and photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sports Event Coverage",
                      "description": "Dynamic sports event videography and photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Production",
                      "description": "High-quality commercial videos and brand content"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
