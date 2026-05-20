export interface Project {
  id: number;
  title: string;
  client: string;
  year: string;
  description: string;
  image: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Vogue Editorial',
    client: 'Vogue España',
    year: '2026',
    description: 'A study in minimalist elegance and high-fashion storytelling. This editorial explored the intersection of light, shadow and avant-garde silhouette.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
    images: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      'https://images.unsplash.com/photo-1539109132314-347752418b70'
    ]
  },
  {
    id: 2,
    title: 'Urban Nomads',
    client: 'Zara Home',
    year: '2025',
    description: 'Capturing the essence of modern living in transit. A cinematic campaign featuring natural textures and atmospheric interior design.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15'
    ]
  },
  {
    id: 3,
    title: 'Autumn Glow',
    client: 'Mango',
    year: '2026',
    description: 'Warm tones and soft layering for the transitional season. A campaign focused on comfort, style, and the beauty of changing landscapes.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae',
      'https://images.unsplash.com/photo-1445205170230-053b830c6050'
    ]
  },
  {
    id: 4,
    title: 'Digital Soul',
    client: 'Bershka',
    year: '2025',
    description: 'Exploring the boundary between the physical and digital realms. Vibrant colors and high-energy photography defining Gen Z aesthetics.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1529139572765-397033ef7e8f',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
    ]
  },
  {
    id: 5,
    title: 'Editorial & Entrevista para Neo2',
    client: 'Neo2 Magazine',
    year: '2024',
    description: 'Exclusive editorial and in-depth interview in the prestigious Neo2 Magazine featuring actress and model Andrea Tivadar. A high-fashion visual essay capturing contemporary aesthetics and style statements.',
    image: '/Andrea 3.jpg',
    images: [
      '/Andrea.jpg',
      '/Andrea 2.jpg',
      '/Andrea 3.jpg'
    ]
  },
  {
    id: 6,
    title: "Chloe’s Clue para Caudalie",
    client: 'Caudalie Menorca',
    year: '2024',
    description: "The scenic 'Chloe's Clue' editorial campaign created for French luxury skincare brand Caudalie in the pristine nature of Menorca. A fusion of clean, organic beauty, sunlight, and Mediterranean elements.",
    image: '/Caudile1.jpg',
    images: [
      '/caudile 3.jpg',
      '/Caudile1.jpg',
      '/caudile2.jpg'
    ]
  },
  {
    id: 7,
    title: 'Fashion Day en Juno House',
    client: 'Juno House Club',
    year: '2024',
    description: 'Bespoke coordination and selective guest activation for the exclusive Fashion Day hosted at Juno House Club in Barcelona. Connecting ethical fashion brands, designers, and premium creators inside a curated creative environment.',
    image: '/Juno 2.jpg',
    images: [
      '/juno 1.jpg',
      '/Juno 2.jpg',
      '/juno 3.jpg'
    ]
  }
];
