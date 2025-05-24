// lib/testimonial-data.ts
export interface Testimonial {
	id: string;
	name: string;
	quote: string;
	stars: number; // e.g., 5 for 5 stars
	avatar?: string; // Optional path to an avatar image
}

export const mockTestimonials: Testimonial[] = [
	{
		id: 'testimonial-1',
		name: 'Sarah L.',
		quote: "Absolutely breathtaking! The ambiance, the service, and most importantly, the food at Zestora were all top-notch. The Spaghetti Carbonara was the best I've ever had.",
		stars: 5,
	},
	{
		id: 'testimonial-2',
		name: 'Michael B.',
		quote: "A true gem. From the moment we walked in, we felt welcomed. The Chef's Specials were innovative and delicious. Zestora is our new favorite spot for special occasions.",
		stars: 5,
	},
	{
		id: 'testimonial-3',
		name: 'Jessica P.',
		quote: "The attention to detail at Zestora is incredible. Every dish was a work of art, and the flavors were exquisite. The 'Where Flavor Meets Finesse' tagline truly lives up to its promise!",
		stars: 4,
	},
];
