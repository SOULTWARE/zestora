'use client';

import { Testimonial } from '@/lib/testimonial-data';
import { Star } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { easeOut } from '@/lib/motion';

interface TestimonialCardProps {
	testimonial: Testimonial;
}

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
	return (
		<motion.div
			className="bg-[#181818] border border-[#2a2a2a] p-6 rounded-lg shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FF7E5F]/20"
			variants={cardVariants}
			// initial, animate, exit will be handled by parent staggering or whileInView
		>
			<div className="flex items-center mb-3">
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						size={20}
						className={i < testimonial.stars ? 'text-[#FF7E5F] fill-current' : 'text-gray-600'}
					/>
				))}
			</div>
			<blockquote className="text-[#FDF6EC]/90 italic mb-4 flex-grow">"{testimonial.quote}"</blockquote>
			<p className="text-right font-semibold text-[#FF7E5F]">- {testimonial.name}</p>
		</motion.div>
	);
};

export default TestimonialCard;
