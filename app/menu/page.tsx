'use client';

import { useState } from 'react';
import DishCard from '@/components/DishCard';
import MenuFilter from '@/components/MenuFilter';
import { mockDishes, Dish, DishCategory } from '@/lib/dish-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuPage() {
	const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');

	const filteredDishes = selectedCategory === 'all' ? mockDishes : mockDishes.filter((dish) => dish.category === selectedCategory);

	const pageTitleVariants = {
		hidden: { opacity: 0, y: -30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
	};

	const filterVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' } },
	};

	// Staggered animation for the grid container itself
	const gridContainerParentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.4, // Delay after title and filter
				when: 'beforeChildren', // Animate this container first
				staggerChildren: 0.1, // Then stagger its direct motion.div children (the cards)
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
		exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
	};

	const noDishesVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
	};

	return (
		<div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<motion.h1 variants={pageTitleVariants} initial="hidden" animate="visible" className="mb-10 text-center text-4xl font-bold text-gray-800 md:text-5xl">
					Our Menu
				</motion.h1>

				<motion.div variants={filterVariants} initial="hidden" animate="visible">
					<MenuFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
				</motion.div>

				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					variants={gridContainerParentVariants}
					initial="hidden"
					animate="visible"
				>
					<AnimatePresence mode="popLayout">
						{filteredDishes.length > 0 ? (
							filteredDishes.map((dish: Dish) => (
								<motion.div
									key={dish.id} // Key is crucial for AnimatePresence
									layout // Enables smooth layout changes
									variants={itemVariants} // Children will inherit from parent stagger
									// initial, animate, exit are implicitly handled by parent variants + AnimatePresence
								>
									<DishCard dish={dish} />
								</motion.div>
							))
						) : (
							<motion.div
								key="no-dishes-message" // Unique key for the empty state message
								layout
								variants={noDishesVariants}
								initial="hidden" // Explicitly define for this standalone animated element
								animate="visible"
								exit="exit"
								className="col-span-full py-10 text-center text-gray-500"
							>
								{' '}
								{/* Ensure it spans all columns */}
								<p className="text-xl">No dishes found for this category.</p>
								<p>Please try another selection or check back later!</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
}
