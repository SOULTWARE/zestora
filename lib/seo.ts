import type { Metadata } from "next";

const soultwareCampaign = "utm_source=zestora.soultware.com&utm_medium=demo-site&utm_campaign=portfolio-seo";

export const siteConfig = {
  name: "Zestora",
  siteName: "Zestora by SOULTWARE LLC",
  siteTitle: "Zestora Demo Restaurant Website by SOULTWARE LLC",
  description:
    "Zestora is a premium restaurant website demo built by SOULTWARE LLC to showcase high-performance Next.js development, technical SEO, and conversion-focused digital experiences.",
  baseUrl: "https://zestora.soultware.com",
  ogImage: "/images/Zestora.png",
  locale: "en_US",
  company: {
    name: "SOULTWARE LLC",
    url: "https://soultware.com",
    contactUrl: `https://soultware.com/en/contact?${soultwareCampaign}`,
    homeUrl: `https://soultware.com?${soultwareCampaign}`,
    email: "contact@soultware.com",
    location: "New Mexico, USA",
    serviceAreas: ["Texas", "United States", "Canada"],
    linkedin: "https://www.linkedin.com/company/soultware",
  },
  keywords: [
    "SOULTWARE LLC",
    "Soultware",
    "restaurant website demo",
    "Next.js agency",
    "technical SEO",
    "AI SEO",
    "Texas web development company",
    "United States web design agency",
    "Canada web development",
    "hospitality website design",
    "custom business websites",
    "performance-focused web development",
  ],
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = new URL(path, `${siteConfig.baseUrl}/`).toString();

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    category: "technology",
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@soultware",
    },
  };
}
