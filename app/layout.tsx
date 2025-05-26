import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zestora | Where Flavor Meets Finesse',
  description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
  authors: [{ name: 'Soultware' }],
  metadataBase: new URL('https://soultware.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://soultware.com',
    siteName: 'Zestora Restaurant',
    title: 'Zestora | Where Flavor Meets Finesse',
    description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
    images: [
      {
        url: '/images/Zestora.png',
        width: 1200,
        height: 630,
        alt: 'Zestora Restaurant',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zestora | Where Flavor Meets Finesse',
    description: 'Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients.',
    site: '@soultware',
    creator: '@soultware',
    images: ['/images/Zestora.png'],
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
    <html lang="en" className="dark">
      <head>
        <meta name="author" content="Soultware" />
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
