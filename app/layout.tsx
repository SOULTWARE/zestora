import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import SoultwareBadge from "@/components/SoultwareBadge";
import { buildMetadata, siteConfig } from "@/lib/seo";
import {
  demoProjectJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  ...buildMetadata({
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: siteConfig.siteTitle,
    template: "%s | SOULTWARE LLC",
  },
  manifest: "/manifest.json",
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.company.name, url: siteConfig.company.url }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
        <meta name="creator" content={siteConfig.company.name} />
        <meta name="publisher" content={siteConfig.company.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.siteName} />
        <link
          rel="preload"
          href="/images/home/hero-background.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              websiteJsonLd,
              demoProjectJsonLd,
            ]),
          }}
        />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen bg-[#1a1a1a] text-[#FDF6EC]`}>
        <BackgroundBlobs />
        <Navbar />
        <main className="pt-24 flex-grow relative">
          {children}
        </main>
        <Footer />
        <SoultwareBadge />
      </body>
    </html>
  );
}
