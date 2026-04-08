import type { Metadata } from "next";
import Script from "next/script";
import HomePageClient from "./HomePageClient";
import { buildMetadata } from "@/lib/seo";
import { demoFaqJsonLd, demoShowcaseWebPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Website Demo Built by SOULTWARE LLC",
  description:
    "Explore Zestora, a premium restaurant website demo by SOULTWARE LLC. This showcase highlights Next.js development, technical SEO, AI-readable content, and high-conversion UX for modern brands.",
  path: "/",
  keywords: [
    "restaurant website design",
    "Next.js restaurant website",
    "SOULTWARE portfolio",
    "Texas SEO web design",
    "US and Canada web development",
  ],
});

export default function HomePage() {
  return (
    <>
      <Script
        id="home-showcase-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            demoShowcaseWebPageJsonLd,
            demoFaqJsonLd,
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "SOULTWARE LLC core capabilities highlighted by the Zestora demo",
              itemListElement: [
                "Next.js websites",
                "technical SEO",
                "AI SEO",
                "conversion-focused UX",
                "responsive web development",
              ].map((name, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
              })),
            },
          ]),
        }}
      />
      <HomePageClient />
    </>
  );
}
