import Image from 'next/image';
import { Chef } from '@/lib/chef-data';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: React.FC<ChefCardProps> = ({ chef }) => {
  return (
    <div className="group flex flex-col items-center rounded-lg bg-[#181818] border border-[#2a2a2a] p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FF7E5F]/20">
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#FF7E5F] md:h-40 md:w-40 group-hover:border-[#FF7E5F]/80 transition-colors">
        <Image
          src={chef.avatar}
          alt={chef.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#FFF8F0] group-hover:text-[#FF7E5F] transition-colors md:text-2xl">
        {chef.name}
      </h3>
      <p className="text-sm text-[#FDF6EC]/80 md:text-base">{chef.bio}</p>
    </div>
  );
};

export default ChefCard;
