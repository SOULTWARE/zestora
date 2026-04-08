'use client';

import Hero from '@/components/Hero';
import DishCard from '@/components/DishCard';
import TestimonialCard from '@/components/TestimonialCard';
import SoultwareShowcase from '@/components/SoultwareShowcase';
import { mockDishes } from '@/lib/dish-data';
import { mockTestimonials } from '@/lib/testimonial-data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sectionVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  },
});

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const listVariants = (stagger = 0.15, delayChildren = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export default function HomePageClient() {
  const featuredDishes = mockDishes.slice(0, 3);

  return (
    <div className="text-[#FDF6EC]">
      <Hero />
      <SoultwareShowcase />

      <motion.section
        className="px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        variants={sectionVariants(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#FFF8F0] md:text-4xl">Chef&apos;s Specials</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-[#FDF6EC]/80">
            Discover a selection of our most beloved and artfully prepared dishes, showcasing the best of Zestora.
          </p>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
            variants={listVariants()}
          >
            {featuredDishes.map((dish) => (
              <motion.div key={dish.id} variants={itemVariants}>
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-lg bg-[#FF7E5F] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-90 hover:shadow-lg hover:shadow-orange-500/20"
            >
              View Full Menu <ChevronRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#181818] px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        variants={sectionVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-3xl font-bold text-[#FFF8F0] md:text-4xl">Our Culinary Philosophy</h2>
              <p className="mb-4 text-lg leading-relaxed text-[#FDF6EC]/80">
                At Zestora, our philosophy is rooted in a deep respect for ingredients and a relentless pursuit of flavor.
                We believe that dining is more than just eating; it&apos;s an experience, a journey of arousing the senses.
              </p>
              <p className="text-lg leading-relaxed text-[#FDF6EC]/80">
                We meticulously source the freshest local produce, the finest cuts of meat, and the most vibrant spices.
                Our chefs transform these elements into creations that feel innovative, comforting, and memorable.
              </p>
            </motion.div>
            <motion.div className="mt-8 md:mt-0" variants={itemVariants}>
              <div className="relative overflow-hidden rounded-lg border border-[#2a2a2a] shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/home/philosophy-image.webp"
                  alt="Zestora culinary artistry"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        variants={sectionVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#FFF8F0] md:text-4xl">What Our Guests Say</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-[#FDF6EC]/80">
            Hear from those who have experienced the magic of Zestora firsthand.
          </p>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={listVariants(0.2, 0.3)}
          >
            {mockTestimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants} className="flex">
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden border-t border-[#2a2a2a] bg-[#181818] px-4 py-24 sm:px-6 md:py-32 lg:px-8"
        variants={sectionVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FF7E5F]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-[#FF7E5F]/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              className="text-center md:text-left"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <h2 className="mb-6 text-3xl font-bold leading-tight text-[#FFF8F0] md:text-4xl lg:text-5xl">
                Experience the Art of <span className="text-[#FF7E5F]">Fine Dining</span> Tonight
              </h2>
              <p className="mb-8 max-w-xl text-lg text-[#FDF6EC]/80 md:text-xl">
                Join us for an unforgettable culinary journey. Our expert chefs are ready to craft an extraordinary dining experience.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <motion.div variants={itemVariants}>
                  <Link
                    href="/reservation"
                    className="inline-block w-full rounded-lg bg-[#FF7E5F] px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-xl hover:shadow-orange-500/20 sm:w-auto"
                  >
                    Book Your Table
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href="/menu"
                    className="inline-block w-full rounded-lg border-2 border-[#FF7E5F] px-8 py-4 text-center text-lg font-semibold text-[#FF7E5F] transition-all duration-300 hover:scale-105 hover:bg-[#FF7E5F] hover:text-white sm:w-auto"
                  >
                    View Menu
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 text-center md:text-left"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="rounded-lg border border-[#2a2a2a] bg-[#242424] p-6 transition-colors duration-300 hover:border-[#FF7E5F]/20">
                <h3 className="mb-4 text-xl font-semibold text-[#FFF8F0]">Opening Hours</h3>
                <div className="space-y-2 text-[#FDF6EC]/80">
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 09:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="rounded-lg border border-[#2a2a2a] bg-[#242424] p-6 transition-colors duration-300 hover:border-[#FF7E5F]/20">
                <h3 className="mb-4 text-xl font-semibold text-[#FFF8F0]">Showcase Value for SOULTWARE</h3>
                <p className="text-[#FDF6EC]/80">
                  This demo doubles as a search-friendly portfolio asset that introduces SOULTWARE LLC to buyers looking for premium web development, SEO, and AI-discoverable digital experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
