export type TalentType = 'all' | 'models' | 'actors' | 'artists';

export interface Talent {
  id: number;
  name: string;
  type: TalentType;
  location: string;
  image: string;
  description: string;
  gallery: string[];
  stats: Record<string, string>;
  projects: { title: string; year: string }[];
}

export const TALENT_DATA: Talent[] = [
  { 
    id: 1, 
    name: 'Elena García', 
    type: 'models', 
    location: 'Madrid', 
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    description: 'Elena represents the new wave of Spanish fashion with a presence that balances strength and vulnerability. Her editorial work has been featured in major European publications.',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1502673530728-f79b4cbd31bb'
    ],
    stats: { height: '178cm', eyes: 'Brown', hair: 'Brunette' },
    projects: [{ title: 'Loewe SS26', year: '2026' }, { title: 'Vogue Spain June', year: '2025' }]
  },
  { 
    id: 2, 
    name: 'Marc Soler', 
    type: 'actors', 
    location: 'Barcelona', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    description: 'A versatile actor known for his depth in both dramatic and comedic roles. Marc has a classical training that shows in his nuanced performances on screen.',
    gallery: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
      'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4'
    ],
    stats: { height: '185cm', eyes: 'Hazel', language: 'ES, EN, CAT' },
    projects: [{ title: 'Netflix Original "Sombra"', year: '2026' }, { title: 'Teatro Real: Hamlet', year: '2025' }]
  },
  { 
    id: 3, 
    name: 'Sara Miller', 
    type: 'artists', 
    location: 'Londres / Madrid', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    description: 'Sara is a multi-disciplinary artist whose work explores the intersection of movement and digital texture. Her performances are visceral and visually stunning.',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2'
    ],
    stats: { medium: 'Performance / Digital', experience: '12 Years' },
    projects: [{ title: 'Sónar Festival', year: '2026' }, { title: 'Prado Museum Residency', year: '2025' }]
  },
  { 
    id: 4, 
    name: 'Daniel Ross', 
    type: 'models', 
    location: 'Valencia', 
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    description: 'Daniel brings a classical masculine aesthetic with a modern twist. His ability to adapt to diverse styles makes him a favorite for high-fashion campaigns.',
    gallery: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
      'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4'
    ],
    stats: { height: '188cm', eyes: 'Blue', hair: 'Dark Blonde' },
    projects: [{ title: 'Zara Man Autumn', year: '2025' }, { title: 'Massimo Dutti Editorial', year: '2026' }]
  },
  { 
    id: 5, 
    name: 'Julia Benn', 
    type: 'models', 
    location: 'Paris / Barcelona', 
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    description: 'Julia is an international model whose career spans Milan, Paris, and New York. She is known for her editorial transformability and runway confidence.',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1502673530728-f79b4cbd31bb'
    ],
    stats: { height: '180cm', eyes: 'Green', hair: 'Auburn' },
    projects: [{ title: 'Dior Cruise', year: '2026' }, { title: 'Vogue France', year: '2025' }]
  },
  { 
    id: 6, 
    name: 'Hugo Vance', 
    type: 'actors', 
    location: 'Madrid', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    description: 'Hugo has a magnetic screen presence. His transition from theater to film has been marked by critical acclaim in independent cinema.',
    gallery: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4'
    ],
    stats: { height: '182cm', eyes: 'Dark Brown', accents: 'Andaluz, Rioplatense' },
    projects: [{ title: 'Feature Film "Noche"', year: '2026' }, { title: 'HBO Series "Tierra"', year: '2025' }]
  },
  { 
    id: 7, 
    name: 'Mia Chen', 
    type: 'artists', 
    location: 'Sevilla', 
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    description: 'Mia is a conceptual photographer and visual artist. Her work is characterized by its exploration of symmetry and color in urban landscapes.',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
    ],
    stats: { medium: 'Photography', base: 'Sevilla' },
    projects: [{ title: 'Solo Exhibition "Urbanity"', year: '2026' }, { title: 'Phaidon Monograph', year: '2025' }]
  },
  { 
    id: 8, 
    name: 'Oscar Wilde', 
    type: 'actors', 
    location: 'Madrid', 
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    description: 'An actor with a commanding stage presence and a subtle filmic sensibility. Oscar brings intensity and intelligence to every project.',
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce'
    ],
    stats: { height: '180cm', eyes: 'Blue', hair: 'Grey/Silver' },
    projects: [{ title: 'Spanish National Theatre', year: '2026' }, { title: 'Indie Feature "Otoño"', year: '2025' }]
  },
];
