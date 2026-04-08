'use client';

import ReservationForm from '@/components/ReservationForm';
import { motion } from 'framer-motion';

const pageTitleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
  },
};

export default function ReservationPageClient() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          variants={pageTitleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center text-4xl font-bold text-[#FFF8F0] md:text-5xl"
        >
          Book a Table
        </motion.h1>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <p className="text-lg text-[#FDF6EC]/90">
            Reserve your table at Zestora and prepare for an unforgettable dining experience. This reservation flow is also part of
            the live SOULTWARE LLC showcase, demonstrating polished form UX for hospitality websites.
          </p>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <ReservationForm />
        </motion.div>
      </div>
    </div>
  );
}
