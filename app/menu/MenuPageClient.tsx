'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import DishCard from '@/components/DishCard';
import MenuFilter from '@/components/MenuFilter';
import { mockDishes } from '@/lib/dish-data';
import type { DishCategory } from '@/lib/dish-data';
import { easeOut } from '@/lib/motion';

const pageTitleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const dishCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function MenuPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');

  const filteredDishes =
    selectedCategory === 'all'
      ? mockDishes
      : mockDishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          variants={pageTitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 text-center text-4xl font-bold text-[#FFF8F0] md:text-5xl"
        >
          Our Menu
        </motion.h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#FDF6EC]/75">
          This sample menu demonstrates how SOULTWARE LLC builds content-rich pages that remain visually polished, crawlable,
          and easy to expand for real hospitality brands.
        </p>

        <div className="mb-12">
          <MenuFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredDishes.map((dish) => (
            <motion.div key={dish.id} variants={dishCardVariants}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

        {filteredDishes.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg text-[#FDF6EC]/80"
          >
            No dishes found in this category.
          </motion.p>
        )}
      </div>
    </div>
  );
}
