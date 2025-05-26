export type Chef = {
  id: string;
  name: string;
  bio: string;
  avatar: string; // Path to SVG, e.g., '/images/about/chef-name.svg'
};

export const mockChefs: Chef[] = [
  {
    id: 'chef-1',
    name: 'Marco Bianchi',
    bio: 'With over 20 years of experience in Italian kitchens, Chef Marco brings passion and authenticity to every dish. He believes in using the freshest seasonal ingredients.',
    avatar: '/images/about/marco-bianchi.webp',
  },
  {
    id: 'chef-2',
    name: 'Sofia Rossi',
    bio: 'Chef Sofia is our pastry visionary. Her desserts are a delightful blend of classic techniques and modern creativity, always with a surprising twist.',
    avatar: '/images/about/sofia-rossi.webp',
  },
  {
    id: 'chef-3',
    name: 'Leo Verdi',
    bio: 'Chef Leo, a master of the grill and modern European cuisine, focuses on bold flavors and innovative presentations. He champions sustainable and local sourcing.',
    avatar: '/images/about/leo-verdi.webp',
  },
];
