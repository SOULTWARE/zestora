'use client';

import ReservationForm from '@/components/ReservationForm';
import { motion } from 'framer-motion';

const pageTitleVariants = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const formContainerVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }, // Delay after title
	},
};

export default function ReservationPage() {
	return (
		<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-2xl">
				<motion.h1
					variants={pageTitleVariants}
					initial="hidden"
					animate="visible"
					className="mb-10 text-center text-4xl font-bold text-gray-800 md:text-5xl"
				>
					Book Your Table
				</motion.h1>
				<motion.div
					variants={formContainerVariants}
					initial="hidden"
					animate="visible"
				>
					<ReservationForm />
				</motion.div>
			</div>
		</div>
	);
}
