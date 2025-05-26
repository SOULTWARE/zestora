import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { restaurantJsonLd } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zestora.soultware.com'),
  title: 'Zestora | Where Flavor Meets Finesse',
  description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
  authors: [{ name: 'Soultware' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zestora.soultware.com',
    siteName: 'Zestora Restaurant',
    title: 'Zestora | Where Flavor Meets Finesse',
    description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
    images: [
      {
        url: '/images/Zestora.png',
        width: 1200,
        height: 630,
        alt: 'Zestora Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zestora | Where Flavor Meets Finesse',
    description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
    images: ['/images/Zestora.png'],
    creator: '@soultware',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="author" content="Soultware" />
        <link
          rel="preload"
          href="/images/home/hero-background.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen bg-[#1a1a1a] text-[#FDF6EC]`}>
        <BackgroundBlobs />
        <Navbar />
        <main className="pt-24 flex-grow relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
