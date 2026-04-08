import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const SoultwareShowcase = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-3xl border border-[#2a2a2a] bg-[radial-gradient(circle_at_top_left,_rgba(255,126,95,0.2),_transparent_40%),linear-gradient(135deg,_#111111,_#181818_55%,_#101010)] p-8 shadow-2xl shadow-black/20 md:p-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF7E5F]/25 bg-[#FF7E5F]/10 px-4 py-2 text-sm text-[#FFD8CD]">
            <Sparkles className="h-4 w-4" />
            Built to send qualified traffic to SOULTWARE LLC
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr,0.9fr] lg:items-end">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[#FFF8F0] md:text-4xl">
                This is a live portfolio demo for businesses comparing web partners in Texas, the US, and Canada.
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-[#FDF6EC]/80">
                Zestora demonstrates how SOULTWARE LLC approaches premium website design, Next.js builds,
                on-page SEO, structured data, AI-readable content, and conversion-focused UX for modern
                brands in hospitality, e-commerce, and service industries.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2a2a2a] bg-black/20 p-6">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#FDF6EC]/55">
                Why this matters
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#FDF6EC]/80">
                <li>Fast, indexable App Router build with canonical metadata and structured data.</li>
                <li>Portfolio messaging that clearly attributes the site to SOULTWARE LLC.</li>
                <li>Search-friendly copy aligned to commercial web development intent.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={siteConfig.company.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#FF7E5F] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#ff6d4a]"
            >
              Start a Project With SOULTWARE <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.company.homeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#FF7E5F]/40 px-6 py-3 font-semibold text-[#FFD8CD] transition-colors duration-300 hover:bg-[#FF7E5F]/10"
            >
              Visit soultware.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoultwareShowcase;
