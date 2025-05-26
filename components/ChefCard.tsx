import Image from 'next/image';
import { Chef } from '@/lib/chef-data';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: React.FC<ChefCardProps> = ({ chef }) => {
  return (
    <div className="group flex flex-col items-center rounded-lg bg-[#181818] border border-[#2a2a2a] p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FF7E5F]/20">
      <div className="relative aspect-square w-32 md:w-40 overflow-hidden rounded-full border-4 border-[#FF7E5F] group-hover:border-[#FF7E5F]/80 transition-colors">
        <Image
          src={chef.avatar}
          alt={chef.name}
          fill
          quality={85}
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-[#FFF8F0] group-hover:text-[#FF7E5F] transition-colors">
        {chef.name}
      </h3>
      <p className="text-sm text-[#FDF6EC]/80 md:text-base">{chef.bio}</p>
    </div>
  );
};

export default ChefCard;
