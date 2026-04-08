'use client';

import ChefCard from '@/components/ChefCard';
import SoultwareShowcase from '@/components/SoultwareShowcase';
import { mockChefs } from '@/lib/chef-data';
import { motion } from 'framer-motion';

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const pageTitleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const chefsListContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const chefCardItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function AboutPageClient() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          variants={pageTitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center text-4xl font-bold text-[#FFF8F0] md:text-5xl"
        >
          About Zestora
        </motion.h1>

        <motion.section
          className="mb-16 rounded-lg border border-[#2a2a2a] bg-[#181818] p-8 shadow-lg md:p-12"
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="mb-6 text-center text-3xl font-bold text-[#FFF8F0] md:text-4xl"
            variants={sectionHeaderVariants}
          >
            Our Story
          </motion.h2>
          <div className="space-y-4 text-[#FDF6EC]/90 md:text-lg">
            <p>
              Welcome to Zestora, where culinary passion meets a commitment to excellence. Our journey began with a simple idea:
              create a dining experience that delights the senses and warms the soul.
            </p>
            <p>
              The concept blends Mediterranean inspiration with a modern visual identity to demonstrate how an elevated restaurant
              brand can feel online. Every section is designed to make the experience immersive, elegant, and conversion-friendly.
            </p>
            <p>
              Zestora also functions as a portfolio showcase for SOULTWARE LLC, highlighting how strong storytelling, premium UI,
              and technical SEO can work together in a production-quality demo.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-16 rounded-lg border border-[#2a2a2a] bg-[#121212] p-8 shadow-lg md:p-12"
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="mb-6 text-center text-3xl font-bold text-[#FFF8F0] md:text-4xl"
            variants={sectionHeaderVariants}
          >
            Why SOULTWARE Built This Demo
          </motion.h2>
          <div className="space-y-4 text-[#FDF6EC]/80 md:text-lg">
            <p>
              This site exists to show what SOULTWARE LLC can deliver for businesses that need a high-end website with strong
              performance, technical SEO foundations, and a memorable brand experience.
            </p>
            <p>
              The same approach can be adapted for restaurants, hospitality groups, e-commerce stores, and service businesses
              looking to compete in Texas, across the United States, and in Canada.
            </p>
          </div>
        </motion.section>

        <SoultwareShowcase />

        <motion.section
          variants={sectionRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2
            className="mb-10 text-center text-3xl font-bold text-[#FFF8F0] md:text-4xl"
            variants={sectionHeaderVariants}
          >
            Meet Our Culinary Artists
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={chefsListContainerVariants}
          >
            {mockChefs.map((chef) => (
              <motion.div key={chef.id} variants={chefCardItemVariants}>
                <ChefCard chef={chef} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
