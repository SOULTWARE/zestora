// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/menu', label: 'Menu' },
	{ href: '/about', label: 'About Us' },
	{ href: '/reservation', label: 'Reservation' },
	{ href: '/contact', label: 'Contact' },
];

const socialLinks = [
	{ href: 'https://instagram.com', label: 'Instagram', icon: <Instagram size={20} /> },
	{ href: 'https://facebook.com', label: 'Facebook', icon: <Facebook size={20} /> },
	{ href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={20} /> },
];

const contactDetails = [
	{ icon: <MapPin size={18} className="mr-2 flex-shrink-0" />, text: '123 Culinary Avenue, Flavor Town, FT 54321, USA' },
	{ icon: <Phone size={18} className="mr-2 flex-shrink-0" />, text: '(123) 456-7890' },
	{ icon: <Mail size={18} className="mr-2 flex-shrink-0" />, text: 'info@zestora.com' },
	{ icon: <Clock size={18} className="mr-2 flex-shrink-0" />, text: 'Mon-Sun: 11 AM - 11 PM' },
];

const Footer = () => {
	return (
		<footer className="bg-[#1a1a1a] text-[#FDF6EC] pt-16 pb-8">
			<div className="container mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* About Zestora Section */}
					<div className="md:col-span-2 lg:col-span-1">
						<h3 className="text-xl font-semibold mb-4 text-white">Zestora</h3>
						<p className="text-sm leading-relaxed">Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients. Join us for an unforgettable culinary journey.</p>
					</div>

					{/* Quick Links Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className="text-sm hover:text-[#FF7E5F] transition-colors duration-300">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
						<div className="space-y-3 text-sm">
							{contactDetails.map((detail, index) => (
								<div key={index} className="flex items-start">
									{detail.icon}
									<span>{detail.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* Social Media Section */}
					<div className="lg:justify-self-end">
						<h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-[#FDF6EC] hover:text-[#FF7E5F] transition-colors duration-300">
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-700 pt-8 text-center">
					<p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Zestora. All Rights Reserved. Designed with passion.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
