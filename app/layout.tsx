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
