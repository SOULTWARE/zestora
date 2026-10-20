import { siteConfig } from "@/lib/seo";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.company.url}#organization`,
  name: siteConfig.company.name,
  url: siteConfig.company.url,
  logo: `${siteConfig.baseUrl}/images/Logo.png`,
  email: siteConfig.company.email,
  areaServed: siteConfig.company.serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "New Mexico",
    addressCountry: "US",
  },
  sameAs: [siteConfig.company.linkedin],
  knowsAbout: [
    "Next.js development",
    "technical SEO",
    "AI SEO",
    "custom business websites",
    "web application development",
    "e-commerce development",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.baseUrl}/#website`,
  name: siteConfig.siteName,
  url: siteConfig.baseUrl,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.company.url}#organization`,
  },
  about: {
    "@id": `${siteConfig.company.url}#organization`,
  },
  inLanguage: "en-US",
};

export const demoProjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${siteConfig.baseUrl}/#demo-project`,
  name: "Zestora Demo Website",
  url: siteConfig.baseUrl,
  description:
    "A premium restaurant website concept created by SOULTWARE LLC to demonstrate high-performance Next.js development, SEO readiness, and conversion-focused UX.",
  creator: {
    "@id": `${siteConfig.company.url}#organization`,
  },
  publisher: {
    "@id": `${siteConfig.company.url}#organization`,
  },
  keywords: siteConfig.keywords,
  audience: {
    "@type": "Audience",
    audienceType: "Businesses evaluating a web development partner",
  },
};

export const demoShowcaseWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.baseUrl}/#webpage`,
  url: siteConfig.baseUrl,
  name: "Restaurant Website Demo Built by SOULTWARE LLC ",
  description:
    "Portfolio demo by SOULTWARE LLC showing restaurant website design, technical SEO, structured data, and AI-friendly publishing patterns.",
  isPartOf: {
    "@id": `${siteConfig.baseUrl}/#website`,
  },
  about: [
    {
      "@id": `${siteConfig.company.url}#organization`,
    },
    {
      "@id": `${siteConfig.baseUrl}/#demo-project`,
    },
  ],
  primaryImageOfPage: `${siteConfig.baseUrl}${siteConfig.ogImage}`,
};

export const demoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who built the Zestora demo website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zestora was built by SOULTWARE LLC as a live portfolio demo that showcases premium website design, Next.js development, technical SEO, and AI-readable content architecture.",
      },
    },
    {
      "@type": "Question",
      name: "What does this demo show about SOULTWARE LLC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It demonstrates how SOULTWARE LLC builds fast, indexable, conversion-focused websites with strong metadata, structured data, responsive design, and polished user experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is SOULTWARE LLC available for businesses in Texas, the United States, and Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This demo is optimized to attract businesses across Texas, the broader United States, and Canada that need custom website development and SEO-ready digital experiences.",
      },
    },
  ],
};

export const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Zestora Demo Menu",
  mainEntityOfPage: `${siteConfig.baseUrl}/menu`,
  description:
    "Sample restaurant menu used in the Zestora showcase by SOULTWARE LLC.",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Starters",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Bruschetta Classica",
          description: "Toasted bread with fresh tomatoes, garlic, and basil",
          image: `${siteConfig.baseUrl}/images/menu/bruschetta-classica.webp`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "8.99",
          },
        },
        {
          "@type": "MenuItem",
          name: "Caprese Salad",
          description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
          image: `${siteConfig.baseUrl}/images/menu/caprese-salad.webp`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "10.99",
          },
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Main Courses",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Spaghetti Carbonara",
          description: "Classic carbonara with pancetta, egg, and pecorino",
          image: `${siteConfig.baseUrl}/images/menu/spaghetti-carbonara.webp`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "16.99",
          },
        },
        {
          "@type": "MenuItem",
          name: "Grilled Salmon",
          description: "Fresh salmon with herbs and lemon butter sauce",
          image: `${siteConfig.baseUrl}/images/menu/grilled-salmon.webp`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "24.99",
          },
        },
      ],
    },
  ],
};
