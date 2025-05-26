export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Zestora',
  image: 'https://zestora.soultware.com/images/Zestora.png',
  '@id': 'https://zestora.soultware.com',
  url: 'https://zestora.soultware.com',
  telephone: '(123) 456-7890',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Culinary Avenue',
    addressLocality: 'Flavor Town',
    addressRegion: 'FT',
    postalCode: '54321',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.774927,
    longitude: -122.419415
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '11:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '23:00'
    }
  ],
  menu: 'https://zestora.soultware.com/menu',
  servesCuisine: ['Italian', 'Mediterranean'],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card',
  acceptsReservations: true,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '250'
  }
};

export const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Zestora Menu',
  mainEntityOfPage: 'https://zestora.soultware.com/menu',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Starters',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Bruschetta Classica',
          description: 'Toasted bread with fresh tomatoes, garlic, and basil',
          price: '$8.99',
          image: 'https://zestora.soultware.com/images/menu/bruschetta-classica.webp'
        },
        {
          '@type': 'MenuItem',
          name: 'Caprese Salad',
          description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
          price: '$10.99',
          image: 'https://zestora.soultware.com/images/menu/caprese-salad.webp'
        }
      ]
    },
    {
      '@type': 'MenuSection',
      name: 'Main Courses',
      hasMenuItem: [
        {
          '@type': 'MenuItem',
          name: 'Spaghetti Carbonara',
          description: 'Classic carbonara with pancetta, egg, and pecorino',
          price: '$16.99',
          image: 'https://zestora.soultware.com/images/menu/spaghetti-carbonara.webp'
        },
        {
          '@type': 'MenuItem',
          name: 'Grilled Salmon',
          description: 'Fresh salmon with herbs and lemon butter sauce',
          price: '$24.99',
          image: 'https://zestora.soultware.com/images/menu/grilled-salmon.webp'
        }
      ]
    }
  ]
};
