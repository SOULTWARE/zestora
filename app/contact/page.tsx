import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact SOULTWARE LLC",
  description:
    "Talk to SOULTWARE LLC about building a website like Zestora. This demo contact page points prospects in Texas, the US, and Canada toward SOULTWARE for premium web projects.",
  path: "/contact",
  keywords: ["contact SOULTWARE", "Texas web design contact", "Next.js agency contact"],
});

export default function ContactPage() {
  return <ContactPageClient />;
}
