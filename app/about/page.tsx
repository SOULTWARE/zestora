import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About This Demo Website",
  description:
    "Learn how Zestora showcases SOULTWARE LLC's approach to premium website design, storytelling, responsive UI, and search-ready Next.js development.",
  path: "/about",
  keywords: ["portfolio website demo", "SOULTWARE case study", "restaurant website portfolio"],
});

export default function AboutPage() {
  return <AboutPageClient />;
}
