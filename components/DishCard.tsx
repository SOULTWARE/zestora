import Image from 'next/image';
import { Dish } from '@/lib/dish-data';

interface DishCardProps {
	dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
	return (
		<div className="group overflow-hidden rounded-lg bg-[#181818] border border-[#2a2a2a] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FF7E5F]/20">
			<div className="relative w-full aspect-[1.33] overflow-hidden">
				<Image
					src={dish.image}
					alt={dish.name}
					fill
					quality={75}
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-50" />
			</div>
			<div className="p-6">
				<div className="mb-4">
					<span className="inline-block rounded-full bg-[#FF7E5F]/10 px-3 py-1 text-sm font-semibold text-[#FF7E5F]">
						{dish.category}
					</span>
				</div>
				<h3 className="mb-2 text-2xl font-semibold text-[#FFF8F0] group-hover:text-[#FF7E5F] transition-colors">
					{dish.name}
				</h3>
				<p className="mb-3 text-sm text-[#FDF6EC]/80">{dish.description}</p>
				<p className="text-xl font-bold text-[#FF7E5F]">${dish.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default DishCard;
