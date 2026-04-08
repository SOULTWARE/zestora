import { siteConfig } from "@/lib/seo";

const SoultwareBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={siteConfig.company.homeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 rounded-lg bg-[#181818]/80 border border-[#2a2a2a] px-3 py-2 text-sm text-[#FDF6EC]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#FF7E5F]/20 hover:text-[#FF7E5F] hover:shadow-lg hover:shadow-orange-500/10"
      >
        <span>Built by</span>
        <span className="font-semibold">SOULTWARE LLC</span>
      </a>
    </div>
  );
};

export default SoultwareBadge;
