'use client';

import ChefCard from '@/components/ChefCard';
import { mockChefs } from '@/lib/chef-data';
import { motion } from 'framer-motion';

// General variant for sections to fade and slide in
const sectionRevealVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: 'easeOut' },
	},
};

// Variant for the main page title
const pageTitleVariants = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Variant for section titles (like "Our Story", "Meet Our Culinary Artists")
const sectionHeaderVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Variant for the container of chef cards to handle staggering
const chefsListContainerVariants = {
	hidden: { opacity: 0 }, // Parent container initially hidden
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Stagger the animation of children
			delayChildren: 0.1, // Optional delay before children start animating
		},
	},
};

// Variant for individual chef cards
const chefCardItemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<motion.h1
					variants={pageTitleVariants}
					initial="hidden"
					animate="visible" // Animate on initial load
					className="mb-12 text-center text-4xl font-bold text-gray-800 md:text-5xl"
				>
					About Zestora
				</motion.h1>

				{/* Story Section */}
				<motion.section
					className="mb-16 rounded-lg bg-white p-8 shadow-lg md:p-12"
					variants={sectionRevealVariants}
					initial="hidden"
					whileInView="visible" // Trigger animation when section scrolls into view
					viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the section is visible
				>
					<motion.h2
						className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl"
						variants={sectionHeaderVariants} // Use a simpler variant if part of an already animated section
						// initial="hidden" // Not needed if parent controls initial state
						// whileInView="visible" // Can be controlled by parent or individually
						// viewport={{ once: true, amount: 0.5 }}
						// transition={{ delay: 0.1 }} // Adjust delay if needed
					>
						Our Story
					</motion.h2>
					<div className="space-y-4 text-gray-700 md:text-lg">
						<p>Welcome to Zestora, where culinary passion meets a commitment to excellence. Our journey began with a simple idea: to create a dining experience that delights the senses and warms the soul. Inspired by the rich traditions of Mediterranean cuisine and a desire for innovation, Zestora was born.</p>
						<p>Our mission is to serve extraordinary food made with the freshest, locally-sourced ingredients whenever possible. We believe in the art of fine cooking, where every dish is a masterpiece crafted with care and precision. At Zestora, we offer a modern take on classic flavors, presenting a menu that is both familiar and exciting.</p>
						<p>From the vibrant herbs to the perfectly aged wines, every element of your meal is thoughtfully selected. Our cuisine style is a celebration of flavor, texture, and aroma, designed to provide an unforgettable gastronomic adventure. Join us at Zestora, and taste the finesse in every bite.</p>
					</div>
				</motion.section>

				{/* Meet Our Chefs Section */}
				<motion.section
					variants={sectionRevealVariants} // Whole section fades/slides in
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of section is visible
				>
					<motion.h2
						className="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl"
						variants={sectionHeaderVariants} // Title animates as part of the section
					>
						Meet Our Culinary Artists
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
						variants={chefsListContainerVariants} // This container handles staggering of cards
						// initial="hidden" // Inherits from parent section's whileInView
						// whileInView="visible"
						// viewport={{ once: true, amount: 0.1 }}
					>
						{mockChefs.map((chef) => (
							<motion.div key={chef.id} variants={chefCardItemVariants}>
								{' '}
								{/* Each card uses item variant */}
								<ChefCard chef={chef} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>
			</div>
		</div>
	);
}
