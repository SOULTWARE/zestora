'use client';

import { Testimonial } from '@/lib/testimonial-data';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
	testimonial: Testimonial;
}

const cardVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
	return (
		<motion.div
			className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col h-full border border-gray-200"
			variants={cardVariants}
			// initial, animate, exit will be handled by parent staggering or whileInView
		>
			<div className="flex items-center mb-3">
				{[...Array(5)].map((_, i) => (
					<Star key={i} size={20} className={i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
				))}
			</div>
			<blockquote className="text-gray-700 italic mb-4 flex-grow">"{testimonial.quote}"</blockquote>
			<p className="text-right font-semibold text-brand-orange">- {testimonial.name}</p>
		</motion.div>
	);
};

export default TestimonialCard;
