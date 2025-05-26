'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/menu', label: 'Menu' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/reservation', label: 'Book a Table' },
];

const mobileMenuVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const mobileLinkVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl
                ${isScrolled ? 'bg-[#0f0f0f]/60 shadow-lg' : 'bg-[#0f0f0f]/40'}
                ${isScrolled ? 'py-3' : 'py-5'}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Brand Name */}
					<Link
						href="/"
						className="text-2xl font-bold text-[#FDF6EC] hover:text-[#FF7E5F] transition-colors"
					>
						Zestora
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`text-[#FDF6EC] hover:text-[#FF7E5F] transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium
                  ${
										link.href === '/reservation'
											? 'ml-2 bg-[#FF7E5F] text-white hover:bg-[#FF7E5F] hover:text-white hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105'
											: ''
									}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							aria-label="Toggle menu"
							className="text-[#FDF6EC] hover:text-[#FF7E5F] focus:outline-none transition-colors"
						>
							{isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-md shadow-xl absolute w-full left-0 top-full border-t border-[#2a2a2a]"
						variants={mobileMenuVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navLinks.map((link) => (
								<motion.div key={link.href} variants={mobileLinkVariants}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className={`block px-3 py-2 rounded-lg text-base font-medium text-[#FDF6EC] transition-all duration-300
                      ${
												link.href === '/reservation'
													? 'bg-[#FF7E5F] text-white hover:bg-opacity-90 hover:shadow-lg hover:shadow-orange-500/20'
													: 'hover:bg-[#242424]'
											}`}
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
