 export type DishCategory = 'Starter' | 'Main' | 'Dessert' | 'Drink';

 export type Dish = {
		id: string;
		name: string;
		description: string;
		price: number;
		category: DishCategory;
		image: string; // Path to SVG, e.g., '/images/menu/dish-name.svg'
 };

 export const mockDishes: Dish[] = [
		{
			id: '1',
			name: 'Bruschetta Classica',
			description: 'Grilled bread rubbed with garlic and topped with ripe tomatoes, basil, and olive oil.',
			price: 8.5,
			category: 'Starter',
			image: '/images/menu/bruschetta-classica.svg',
		},
		{
			id: '2',
			name: 'Caprese Salad',
			description: 'Fresh mozzarella, ripe tomatoes, and basil, drizzled with balsamic glaze.',
			price: 10.0,
			category: 'Starter',
			image: '/images/menu/caprese-salad.svg',
		},
		{
			id: '3',
			name: 'Spaghetti Carbonara',
			description: 'Classic Roman pasta with pancetta, egg, Pecorino Romano, and black pepper.',
			price: 16.0,
			category: 'Main',
			image: '/images/menu/spaghetti-carbonara.svg',
		},
		{
			id: '4',
			name: 'Margherita Pizza',
			description: 'Traditional Neapolitan pizza with San Marzano tomatoes, mozzarella, fresh basil, and olive oil.',
			price: 14.5,
			category: 'Main',
			image: '/images/menu/margherita-pizza.svg',
		},
		{
			id: '5',
			name: 'Grilled Salmon',
			description: 'Salmon fillet grilled to perfection, served with roasted vegetables.',
			price: 22.0,
			category: 'Main',
			image: '/images/menu/grilled-salmon.svg',
		},
		{
			id: '6',
			name: 'Tiramisu',
			description: 'Classic Italian dessert made with ladyfingers, mascarpone, espresso, and cocoa.',
			price: 9.0,
			category: 'Dessert',
			image: '/images/menu/tiramisu.svg',
		},
		{
			id: '7',
			name: 'Panna Cotta',
			description: 'Italian cooked cream dessert, often flavored with vanilla and served with a berry coulis.',
			price: 8.0,
			category: 'Dessert',
			image: '/images/menu/panna-cotta.svg',
		},
		{
			id: '8',
			name: 'Espresso',
			description: 'Strong black coffee brewed by forcing steam or hot water through finely-ground coffee beans.',
			price: 3.5,
			category: 'Drink',
			image: '/images/menu/espresso.svg',
		},
		{
			id: '9',
			name: 'Fresh Orange Juice',
			description: 'Juice freshly squeezed from ripe oranges.',
			price: 5.0,
			category: 'Drink',
			image: '/images/menu/orange-juice.svg',
		},
 ];

 export const dishCategories: DishCategory[] = ['Starter', 'Main', 'Dessert', 'Drink'];
