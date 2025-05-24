'use client';

import { useState } from 'react';
import DishCard from '@/components/DishCard';
import MenuFilter from '@/components/MenuFilter';
import { mockDishes, Dish, DishCategory } from '@/lib/dish-data';
import { motion } from 'framer-motion';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');

  const filteredDishes = selectedCategory === 'all'
    ? mockDishes
    : mockDishes.filter(dish => dish.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center text-4xl font-bold text-gray-800 md:text-5xl"
        >
          Our Menu
        </motion.h1>

        <MenuFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {filteredDishes.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredDishes.map((dish: Dish) => (
              <motion.div key={dish.id} variants={itemVariants}>
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-500">
            <p className="text-xl">No dishes found for this category.</p>
            <p>Please try another selection or check back later!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
