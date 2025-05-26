'use client';

import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Top-left blob - Burgundy */}
			<motion.div
				initial={{ scale: 1, rotate: 0 }}
				animate={{
					scale: [1, 1.5, 0.9, 1],
					rotate: [0, 10, -5, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] blur-2xl opacity-30"
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#8B1E3F"
						d="M55.2,-59.1C70.6,-45.7,81.5,-23.8,79.9,-3.4C78.3,16.9,64.1,33.8,48.7,48.3C33.3,62.8,16.6,74.9,-2.5,77.7C-21.7,80.6,-43.3,74.2,-57.4,59.7C-71.4,45.2,-77.8,22.6,-75.1,2.2C-72.4,-18.2,-60.6,-36.3,-45.7,-49.8C-30.8,-63.3,-15.4,-72.1,3.2,-75.6C21.8,-79,39.7,-72.4,55.2,-59.1Z"
						transform="translate(100 100)"
					/>
				</svg>
			</motion.div>

			{/* Center-right blob - Orange */}
			<motion.div
				initial={{ scale: 1, x: '50%' }}
				animate={{
					scale: [1, 1.3, 0.95, 1],
					x: ['50%', '53%', '48%', '50%'],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 0.5,
				}}
				className="absolute top-1/3 right-0 w-[900px] h-[900px] blur-3xl opacity-20"
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#FF7E5F"
						d="M42.7,-49.1C56.9,-36.3,71.2,-24.5,74.6,-9.5C78,5.5,70.5,23.8,58.7,37.5C46.9,51.2,30.8,60.4,13.2,64.3C-4.4,68.2,-23.4,66.8,-39.2,57.9C-54.9,49,-67.3,32.5,-71.5,13.7C-75.7,-5.2,-71.7,-26.5,-59.8,-40.8C-47.9,-55.1,-28.1,-62.4,-10.2,-60.8C7.7,-59.2,28.5,-61.8,42.7,-49.1Z"
						transform="translate(100 100)"
					/>
				</svg>
			</motion.div>

			{/* Bottom blob - Charcoal */}
			<motion.div
				initial={{ scale: 1, y: '30%' }}
				animate={{
					scale: [1, 1.5, 0.92, 1],
					y: ['30%', '33%', '28%', '30%'],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				className="absolute -bottom-1/4 left-1/4 w-[1000px] h-[1000px] blur-3xl opacity-25"
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#1a1a1a"
						d="M47.3,-51.5C59.6,-34.4,67,-13.1,65.9,7.8C64.8,28.7,55.2,49.2,38.7,58.9C22.2,68.7,-1.2,67.7,-23.6,60.5C-46,53.2,-67.5,39.7,-73.2,20.8C-78.9,1.9,-68.9,-22.4,-53.8,-40.4C-38.8,-58.4,-19.4,-70.2,1,-71C21.3,-71.9,42.7,-66.9,47.3,-51.5Z"
						transform="translate(100 100)"
					/>
				</svg>
			</motion.div>

			{/* Subtle gradient overlay for depth */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
		</div>
	);
};

export default BackgroundBlobs;
