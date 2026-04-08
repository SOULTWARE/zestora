import type { Metadata } from "next";
import Script from "next/script";
import MenuPageClient from "./MenuPageClient";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { menuJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Menu Demo",
  description:
    "Browse the interactive sample menu in Zestora, a restaurant demo site created by SOULTWARE LLC to showcase indexable content architecture and polished UI.",
  path: "/menu",
  keywords: ["restaurant menu demo", "hospitality website design", "SEO-friendly menu page"],
});

export default function MenuPage() {
  return (
    <>
      <Script
        id="menu-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            menuJsonLd,
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Zestora Menu Demo",
              url: `${siteConfig.baseUrl}/menu`,
              isPartOf: {
                "@id": `${siteConfig.baseUrl}/#website`,
              },
              about: {
                "@id": `${siteConfig.baseUrl}/#demo-project`,
              },
            },
          ]),
        }}
      />
      <MenuPageClient />
    </>
  );
}
