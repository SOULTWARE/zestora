'use client';

import ReservationForm from '@/components/ReservationForm';
import { motion } from 'framer-motion';

export default function ReservationPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-2xl">
				<motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="mb-10 text-center text-4xl font-bold text-gray-800 md:text-5xl">
					Book Your Table
				</motion.h1>
				<ReservationForm />
			</div>
		</div>
	);
}
