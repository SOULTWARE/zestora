import Image from 'next/image';
import { Dish } from '@/lib/dish-data';

interface DishCardProps {
	dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
	return (
		<div className="overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm shadow-lg transition-shadow duration-300 hover:shadow-xl">
			<div className="relative h-56 w-full">
				<Image src={dish.image} alt={dish.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
			</div>
			<div className="p-6">
				<h3 className="mb-2 text-2xl font-semibold text-gray-800">{dish.name}</h3>
				<p className="mb-3 text-sm text-gray-600">{dish.description}</p>
				<div className="mb-4">
					<span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">{dish.category}</span>
				</div>
				<p className="text-xl font-bold text-gray-900">${dish.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default DishCard;
