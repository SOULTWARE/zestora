import { DishCategory } from '@/lib/dish-data';
import { motion } from 'framer-motion';

interface MenuFilterProps {
	selectedCategory: DishCategory | 'all';
	onSelectCategory: (category: DishCategory | 'all') => void;
}

const categories: (DishCategory | 'all')[] = ['all', 'Starter', 'Main', 'Dessert', 'Drink'];

const MenuFilter: React.FC<MenuFilterProps> = ({ selectedCategory, onSelectCategory }) => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-3">
			{categories.map((category) => (
				<motion.button
					key={category}
					onClick={() => onSelectCategory(category)}
					className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
						selectedCategory === category
							? 'bg-[#FF7E5F] text-white shadow-lg shadow-orange-500/20'
							: 'bg-[#242424] text-[#FDF6EC]/80 hover:text-[#FFF8F0] hover:bg-[#2a2a2a] border border-[#2a2a2a]'
					}`}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</motion.button>
			))}
		</div>
	);
};

export default MenuFilter;
