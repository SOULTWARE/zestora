// app/page.tsx
'use client';

import Hero from '@/components/Hero';
import DishCard from '@/components/DishCard';
import TestimonialCard from '@/components/TestimonialCard';
import { mockDishes } from '@/lib/dish-data';
import { mockTestimonials } from '@/lib/testimonial-data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Animation Variants
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
		transition: { staggerChildren: stagger, delayChildren: delayChildren },
	},
});

export default function HomePage() {
	const featuredDishes = mockDishes.slice(0, 3); // Show 3 featured dishes

	return (
		<div className="text-gray-800">
			<Hero />
			{/* Chef's Specials Section */}
			<motion.section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" variants={sectionVariants(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Chef's Specials</h2>
					<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Discover a selection of our most beloved and artfully prepared dishes, showcasing the best of Zestora.</p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
						variants={listVariants()}
					>
						{featuredDishes.map((dish) => (
							<motion.div key={dish.id} variants={itemVariants}>
								<DishCard dish={dish} />
							</motion.div>
						))}
					</motion.div>
					<motion.div variants={itemVariants} className="mt-12">
						<Link href="/menu" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-opacity-90 transition-colors">
							View Full Menu <ChevronRight size={20} className="ml-2" />
						</Link>
					</motion.div>
				</div>
			</motion.section>
			{/* Our Philosophy Section */}
			<motion.section
				className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm"
				variants={sectionVariants()}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
			>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<motion.div variants={itemVariants}>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culinary Philosophy</h2>
							<p className="text-lg text-gray-700 mb-4 leading-relaxed">At Zestora, our philosophy is rooted in a deep respect for ingredients and a relentless pursuit of flavor. We believe that dining is more than just eating; it's an experience, a journey of arousing the senses.</p>
							<p className="text-lg text-gray-700 leading-relaxed">We meticulously source the freshest local produce, the finest cuts of meat, and the most vibrant spices. Our chefs, true artisans of their craft, transform these elements into culinary creations that are both innovative and comforting, always aiming for that perfect balance where "Flavor Meets Finesse."</p>
						</motion.div>
						<motion.div className="mt-8 md:mt-0" variants={itemVariants}>
							<Image src="/images/home/philosophy-image.svg" alt="Zestora's culinary passion" width={600} height={400} className="rounded-lg shadow-xl object-cover w-full" />
						</motion.div>
					</div>
				</div>
			</motion.section>
			{/* Testimonials Section */}
			<motion.section
				className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
				variants={sectionVariants()}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
			>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
					<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Hear from those who have experienced the magic of Zestora firsthand.</p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={listVariants(0.2, 0.3)}
					>
						{mockTestimonials.map((testimonial) => (
							<motion.div key={testimonial.id} variants={itemVariants} className="flex">
								{' '}
								{/* Ensure cards in a row stretch equally if needed */}
								<TestimonialCard testimonial={testimonial} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.section>
			{/* Call to Action Section */}
			<motion.section
				className="bg-brand-dark text-brand-ivory py-20 md:py-28 px-4 sm:px-6 lg:px-8"
				variants={sectionVariants()}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="container mx-auto text-center relative">
					{/* Optional: subtle background pattern or overlay element here if desired */}
					<div className="absolute inset-0 bg-black opacity-20 z-0"></div> {/* Subtle overlay */}
					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Experience Zestora Tonight</h2>
						<p className="text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-90">Indulge in an unforgettable dining experience. Book your table now and let us take care of the rest.</p>
						<motion.div variants={itemVariants}>
							<Link href="/reservation" className="inline-block px-10 py-4 bg-brand-orange text-white text-lg font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
								Make a Reservation
							</Link>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
