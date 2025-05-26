import Image from 'next/image';
import { Chef } from '@/lib/chef-data';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: React.FC<ChefCardProps> = ({ chef }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white/90 backdrop-blur-sm p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-orange-500 md:h-40 md:w-40">
        {/* Placeholder for actual SVG avatar */}
        <Image
          src={chef.avatar} // e.g., /images/about/chef-name.svg
          alt={chef.name}
          layout="fill"
          objectFit="cover" // Use 'contain' if SVGs have a lot of empty space
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800 md:text-2xl">{chef.name}</h3>
      <p className="text-sm text-gray-600 md:text-base">{chef.bio}</p>
    </div>
  );
};

export default ChefCard;
