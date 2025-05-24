'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfoData = [
	{
		icon: <MapPin className="h-6 w-6 text-orange-500" />,
		label: 'Address',
		value: '123 Culinary Avenue, Flavor Town, FT 54321, USA',
	},
	{
		icon: <Phone className="h-6 w-6 text-orange-500" />,
		label: 'Phone',
		value: '(123) 456-7890',
	},
	{
		icon: <Mail className="h-6 w-6 text-orange-500" />,
		label: 'Email',
		value: 'info@zestora.com',
	},
	{
		icon: <Clock className="h-6 w-6 text-orange-500" />,
		label: 'Business Hours',
		value: 'Mon - Fri: 11:00 AM - 10:00 PM | Sat - Sun: 09:00 AM - 11:00 PM',
	},
];

const pageTitleVariants = {
	hidden: { opacity: 0, y: -30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// General variant for main content columns to fade and slide in
const columnVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};

// Variant for the container of contact info items to handle staggering
const contactInfoListVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15, // Stagger the animation of children
			delayChildren: 0.2, // Delay after the parent column is visible
		},
	},
};

// Variant for individual contact info items
const contactInfoItemVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

// Variant for the map (can be a simple fade-in or part of the column animation)
const mapVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' } }, // Delay after contact info list
};

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto">
				<motion.h1
					variants={pageTitleVariants}
					initial="hidden"
					animate="visible" // Animate on initial load
					className="mb-12 text-center text-4xl font-bold text-gray-800 md:text-5xl"
				>
					Get In Touch
				</motion.h1>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
					{/* Left Column: Contact Info & Map */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the column is visible
					>
						<div className="rounded-lg bg-white p-6 shadow-xl md:p-8">
							<motion.h2 className="mb-6 text-2xl font-semibold text-gray-700" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
								Contact Information
							</motion.h2>
							<motion.div
								className="space-y-5"
								variants={contactInfoListVariants}
								// initial="hidden" // Handled by parent's whileInView
								// animate="visible"
							>
								{contactInfoData.map((item, index) => (
									<motion.div
										key={index}
										className="flex items-start space-x-4"
										variants={contactInfoItemVariants} // Each item animates based on parent stagger
									>
										<div className="flex-shrink-0 pt-1">{item.icon}</div>
										<div>
											<h3 className="text-lg font-medium text-gray-800">{item.label}</h3>
											<p className="text-gray-600">{item.value}</p>
										</div>
									</motion.div>
								))}
							</motion.div>

							<motion.div
								className="mt-8 overflow-hidden rounded-lg shadow-md"
								variants={mapVariants} // Map has its own subtle animation
								// initial="hidden" // Handled by parent's whileInView
								// animate="visible"
							>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086419385898!2d-122.41941548468159!3d37.77492957975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c121249%3A0xb1b7081c7a9ff1dc!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1620838000000!5m2!1sen!2sus" width="100%" height="350" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Restaurant Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
							</motion.div>
						</div>
					</motion.div>

					{/* Right Column: Contact Form */}
					<motion.div
						variants={columnVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the column is visible
						transition={{ delay: 0.1 }} // Slight delay for the second column if desired
					>
						<div className="rounded-lg bg-white p-6 shadow-xl md:p-8">
							<motion.h2 className="mb-6 text-2xl font-semibold text-gray-700" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
								Send Us a Message
							</motion.h2>
							<ContactForm /> {/* ContactForm has its own internal animations */}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
