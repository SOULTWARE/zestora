// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/menu', label: 'Menu' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/reservation', label: 'Book a Table' },
];

const contactDetails = [
	{
		icon: <MapPin className="mr-2 h-5 w-5 text-[#FF7E5F]" />,
		text: '123 Culinary Avenue, Flavor Town, FT 54321, USA',
	},
	{
		icon: <Phone className="mr-2 h-5 w-5 text-[#FF7E5F]" />,
		text: '(123) 456-7890',
	},
	{
		icon: <Mail className="mr-2 h-5 w-5 text-[#FF7E5F]" />,
		text: 'contact@soultware.com',
	},
	{
		icon: <Clock className="mr-2 h-5 w-5 text-[#FF7E5F]" />,
		text: 'Mon - Fri: 11:00 AM - 10:00 PM | Sat - Sun: 09:00 AM - 11:00 PM',
	},
];

const socialLinks = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/company/soultware',
		icon: <Linkedin className="h-6 w-6" />,
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/soultware',
		icon: <Facebook className="h-6 w-6" />,
	},
	{
		label: 'Twitter',
		href: 'https://www.twitter.com/soultware',
		icon: <Twitter className="h-6 w-6" />,
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/soultware',
		icon: <Instagram className="h-6 w-6" />,
	},
];

const Footer = () => {
	return (
		<footer className="bg-[#0f0f0f] border-t border-[#2a2a2a] text-[#FDF6EC] pt-16 pb-8">
			<div className="container mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* About Zestora Section */}
					<div className="md:col-span-2 lg:col-span-1">
						<h3 className="text-xl font-semibold mb-4 text-[#FFF8F0]">Zestora</h3>
						<p className="text-sm leading-relaxed opacity-90">
							Experience the art of fine dining at Zestora, where every dish is a masterpiece crafted with passion and the freshest ingredients. Join us for an unforgettable culinary journey.
						</p>
					</div>

					{/* Quick Links Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-[#FFF8F0]">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm opacity-90 hover:text-[#FF7E5F] hover:opacity-100 transition-all duration-300"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info Section */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-[#FFF8F0]">Contact Us</h3>
						<div className="space-y-3">
							{contactDetails.map((detail, index) => (
								<div key={index} className="flex items-start text-sm opacity-90">
									{detail.icon}
									<span className="hover:opacity-100 transition-opacity">{detail.text}</span>
								</div>
							))}
						</div>
					</div>

					{/* Social Media Section */}
					<div className="lg:justify-self-end">
						<h3 className="text-lg font-semibold mb-4 text-[#FFF8F0]">Follow Us</h3>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="text-[#FDF6EC] opacity-90 hover:text-[#FF7E5F] hover:opacity-100 transition-all duration-300"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-[#2a2a2a] pt-8 text-center">
					<p className="text-xs opacity-75 mb-2">
						&copy; {new Date().getFullYear()} Zestora. All Rights Reserved.
					</p>
					<p className="text-sm opacity-60 hover:opacity-90 transition-opacity">
						Website crafted with ❤️ by{' '}
						<a
							href="https://soultware.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#FDF6EC] hover:text-[#FF7E5F] transition-colors"
						>
							Soultware
						</a>
					</p>
				</div>
				{/* Soultware Signature */}
				{/* Built with ❤️ by Soultware */}
			</div>
		</footer>
	);
};

export default Footer;
