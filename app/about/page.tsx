'use client';

import ChefCard from '@/components/ChefCard';
import { mockChefs } from '@/lib/chef-data';
import { motion } from 'framer-motion';

const storySectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const chefsSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const chefCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Story Section */}
        <motion.section
          className="mb-16 rounded-lg bg-white p-8 shadow-lg md:p-12"
          variants={storySectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Story
          </motion.h2>
          <div className="space-y-4 text-gray-700 md:text-lg">
            <p>
              Welcome to Zestora, where culinary passion meets a commitment to excellence.
              Our journey began with a simple idea: to create a dining experience that delights the senses and warms the soul.
              Inspired by the rich traditions of Mediterranean cuisine and a desire for innovation, Zestora was born.
            </p>
            <p>
              Our mission is to serve extraordinary food made with the freshest, locally-sourced ingredients whenever possible.
              We believe in the art of fine cooking, where every dish is a masterpiece crafted with care and precision.
              At Zestora, we offer a modern take on classic flavors, presenting a menu that is both familiar and exciting.
            </p>
            <p>
              From the vibrant herbs to the perfectly aged wines, every element of your meal is thoughtfully selected.
              Our cuisine style is a celebration of flavor, texture, and aroma, designed to provide an unforgettable gastronomic adventure.
              Join us at Zestora, and taste the finesse in every bite.
            </p>
          </div>
        </motion.section>

        {/* Meet Our Chefs Section */}
        <motion.section
          variants={chefsSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Meet Our Culinary Artists
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockChefs.map((chef) => (
              <motion.div key={chef.id} variants={chefCardVariants}>
                <ChefCard chef={chef} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
