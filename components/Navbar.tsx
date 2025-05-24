'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/menu', label: 'Menu' },
	{ href: '/about', label: 'About' },
	{ href: '/reservation', label: 'Reservation' },
	{ href: '/contact', label: 'Contact' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

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

	const mobileMenuVariants = {
		hidden: {
			opacity: 0,
			y: -20,
			transition: { duration: 0.3, ease: 'easeOut' },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 },
		},
	};

	const mobileLinkVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${isScrolled || isOpen ? 'bg-[#1a1a1a] shadow-lg' : 'bg-[#1a1a1a]'}
                  ${isScrolled && !isOpen ? 'py-3' : 'py-5'}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Brand Name */}
					<Link href="/" className="text-2xl font-bold text-[#FDF6EC] hover:text-[#FF7E5F] transition-colors">
						Zestora
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						{navLinks.map((link) => (
							<Link key={link.href} href={link.href} className="text-[#FDF6EC] hover:text-[#FF7E5F] transition-colors px-3 py-2 rounded-md text-sm font-medium">
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={toggleMenu} aria-label="Toggle menu" className="text-[#FDF6EC] hover:text-[#FF7E5F] focus:outline-none">
							{isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div className="md:hidden bg-[#1a1a1a] shadow-xl absolute w-full left-0 top-full" variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navLinks.map((link) => (
								<motion.div key={link.href} variants={mobileLinkVariants}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)} // Close menu on link click
										className="block px-3 py-2 rounded-md text-base font-medium text-[#FDF6EC] hover:bg-[#FF7E5F] hover:text-[#1a1a1a] transition-colors"
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
