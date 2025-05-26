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
		<div className="text-[#FDF6EC]">
			<Hero />
			{/* Chef's Specials Section */}
			<motion.section
				className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
				variants={sectionVariants(0.2)}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
			>
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFF8F0]">Chef's Specials</h2>
					<p className="text-lg text-[#FDF6EC]/80 mb-12 max-w-2xl mx-auto">
						Discover a selection of our most beloved and artfully prepared dishes, showcasing the best of Zestora.
					</p>
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
						<Link
							href="/menu"
							className="inline-flex items-center justify-center px-8 py-3 bg-[#FF7E5F] text-white rounded-lg font-medium
								hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20"
						>
							View Full Menu <ChevronRight size={20} className="ml-2" />
						</Link>
					</motion.div>
				</div>
			</motion.section>

			{/* Our Philosophy Section */}
			<motion.section
				className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#181818]"
				variants={sectionVariants()}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
			>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<motion.div variants={itemVariants}>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFF8F0]">Our Culinary Philosophy</h2>
							<p className="text-lg text-[#FDF6EC]/80 mb-4 leading-relaxed">
								At Zestora, our philosophy is rooted in a deep respect for ingredients and a relentless pursuit of flavor.
								We believe that dining is more than just eating; it's an experience, a journey of arousing the senses.
							</p>
							<p className="text-lg text-[#FDF6EC]/80 leading-relaxed">
								We meticulously source the freshest local produce, the finest cuts of meat, and the most vibrant spices.
								Our chefs, true artisans of their craft, transform these elements into culinary creations that are both
								innovative and comforting, always aiming for that perfect balance where "Flavor Meets Finesse."
							</p>
						</motion.div>
						<motion.div className="mt-8 md:mt-0" variants={itemVariants}>
							<div className="relative rounded-lg overflow-hidden shadow-xl border border-[#2a2a2a] transition-transform duration-500 hover:scale-[1.02]">
								<Image
									src="/images/home/philosophy-image.webp"
									alt="Zestora's culinary passion"
									width={600}
									height={400}
									className="object-cover w-full"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-50" />
							</div>
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
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFF8F0]">What Our Guests Say</h2>
					<p className="text-lg text-[#FDF6EC]/80 mb-12 max-w-2xl mx-auto">
						Hear from those who have experienced the magic of Zestora firsthand.
					</p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

			{/* Call to Action Section */}
			<motion.section
				className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#181818] border-t border-[#2a2a2a] overflow-hidden"
				variants={sectionVariants()}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{/* Background Decorative Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7E5F]/10 rounded-full filter blur-3xl transform -translate-y-1/2" />
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7E5F]/5 rounded-full filter blur-3xl transform translate-y-1/2" />
				</div>

				<div className="container mx-auto relative z-10">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left Column: Main CTA */}
						<motion.div
							className="text-center md:text-left"
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
							}}
						>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#FFF8F0] leading-tight">
								Experience the Art of <span className="text-[#FF7E5F]">Fine Dining</span> Tonight
							</h2>
							<p className="text-lg md:text-xl mb-8 text-[#FDF6EC]/80 max-w-xl">
								Join us for an unforgettable culinary journey. Our expert chefs are ready to craft an extraordinary dining experience just for you.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
								<motion.div variants={itemVariants}>
									<Link
										href="/reservation"
										className="inline-block px-8 py-4 bg-[#FF7E5F] text-white text-lg font-semibold rounded-lg
											shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105
											hover:shadow-xl hover:shadow-orange-500/20 w-full sm:w-auto text-center"
									>
										Book Your Table
									</Link>
								</motion.div>
								<motion.div variants={itemVariants}>
									<Link
										href="/menu"
										className="inline-block px-8 py-4 text-[#FF7E5F] text-lg font-semibold rounded-lg
											border-2 border-[#FF7E5F] hover:bg-[#FF7E5F] hover:text-white
											transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
									>
										View Menu
									</Link>
								</motion.div>
							</div>
						</motion.div>

						{/* Right Column: Additional Info */}
						<motion.div
							className="text-center md:text-left space-y-6"
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
							}}
						>
							<div className="bg-[#242424] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FF7E5F]/20 transition-colors duration-300">
								<h3 className="text-xl font-semibold mb-4 text-[#FFF8F0]">Opening Hours</h3>
								<div className="space-y-2 text-[#FDF6EC]/80">
									<p>Monday - Friday: 11:00 AM - 10:00 PM</p>
									<p>Saturday - Sunday: 09:00 AM - 11:00 PM</p>
								</div>
							</div>
							<div className="bg-[#242424] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FF7E5F]/20 transition-colors duration-300">
								<h3 className="text-xl font-semibold mb-4 text-[#FFF8F0]">Special Events</h3>
								<p className="text-[#FDF6EC]/80">
									Planning a celebration? Our private dining rooms are perfect for special occasions.
									Contact us for custom arrangements.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
