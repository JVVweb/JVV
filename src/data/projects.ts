export interface Project {
  id: number;
  title: { es: string; en: string };
  client: string;
  talent?: string;
  year: string;
  description: { es: string; en: string };
  image: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: { es: 'Valeria Vegas × La Más Grande & Movistar Plus+', en: 'Valeria Vegas × La Más Grande & Movistar Plus+' },
    client: 'Movistar Plus+',
    talent: 'Valeria Vegas',
    year: '2026',
    description: {
      es: 'Participación de Valeria Vegas en la campaña de promoción de La Más Grande, la serie documental original de Movistar Plus+ sobre la vida y el legado de Rocío Jurado.',
      en: 'Participation of Valeria Vegas in the promotional campaign of La Más Grande, the original documentary series of Movistar Plus+ about the life and legacy of Rocío Jurado.'
    },
    image: '/valeria-movistar-1.jpg',
    images: [
      '/valeria-movistar-1.jpg',
      '/valeria-movistar-2.jpg',
      '/valeria-movistar-3.jpg'
    ]
  },
  {
    id: 2,
    title: { es: 'Yaiza Canosa × Show Me The Money', en: 'Yaiza Canosa × Show Me The Money' },
    client: 'Show Me The Money',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Yaiza Canosa como ponente en Show Me The Money en Madrid, el evento dedicado a finanzas, inversión y economía que reúne a expertos y líderes del sector.',
      en: 'Yaiza Canosa as a speaker at Show Me The Money in Madrid, the event dedicated to finance, investment, and economy that gathers experts and industry leaders.'
    },
    image: '/show-the-money-1.jpg',
    images: [
      '/show-the-money-1.jpg',
      '/show-the-money-2.jpg'
    ]
  },
  {
    id: 3,
    title: { es: 'Giorgio Ciccone × Kave Home | Salone del Mobile Milano', en: 'Giorgio Ciccone × Kave Home | Salone del Mobile Milano' },
    client: 'Kave Home',
    talent: 'Giorgio Ciccone',
    year: '2026',
    description: {
      es: 'Colaboración entre Giorgio Ciccone, director creativo y la marca de muebles Kave Home durante la Milan Design Week, con una instalación inmersiva presentada en el Salone del Mobile de Milán.',
      en: 'Collaboration between Giorgio Ciccone, creative director, and the furniture brand Kave Home during Milan Design Week, with an immersive installation presented at the Salone del Mobile in Milan.'
    },
    image: '/giorgio-kave-3.jpg',
    images: [
      '/giorgio-kave-3.jpg',
      '/giorgio-kave-1.jpg',
      '/giorgio-kave-2.jpg',
      '/giorgio-kave-4.jpg'
    ]
  },
  {
    id: 4,
    title: { es: 'Sepiia × Yaiza Canosa y Lorenzo Castillo', en: 'Sepiia × Yaiza Canosa & Lorenzo Castillo' },
    client: 'Sepiia',
    talent: 'Yaiza Canosa, Lorenzo Castillo',
    year: '2026',
    description: {
      es: 'Colaboración entre la marca española de ropa con tecnología textil Sepiia y la emprendedora Yaiza Canosa y el decorador Lorenzo Castillo.',
      en: 'Collaboration between the Spanish clothing brand with textile technology Sepiia and entrepreneur Yaiza Canosa and interior designer Lorenzo Castillo.'
    },
    image: '/sepiia-yaiza.jpg',
    images: ['/sepiia-yaiza.jpg']
  },
  {
    id: 5,
    title: { es: 'Yaiza Canosa × INFECAR', en: 'Yaiza Canosa × INFECAR' },
    client: 'INFECAR',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Yaiza Canosa como ponente en el evento organizado por INFECAR en Gran Canaria.',
      en: 'Yaiza Canosa as a speaker at the event organized by INFECAR in Gran Canaria.'
    },
    image: '',
    images: []
  },
  {
    id: 6,
    title: { es: 'Adidas Originals Eyewear × Ana Julieta', en: 'Adidas Originals Eyewear × Ana Julieta' },
    client: 'Adidas Originals Eyewear',
    talent: 'Ana Julieta',
    year: '2026',
    description: {
      es: 'Colaboración entre Adidas Originals Eyewear y la DJ Ana Julieta para una acción de visibilidad de marca.',
      en: 'Collaboration between Adidas Originals Eyewear and DJ Ana Julieta for a brand visibility action.'
    },
    image: '/adidas-ana-julieta.jpg',
    images: ['/adidas-ana-julieta.jpg']
  },
  {
    id: 7,
    title: { es: 'Yaiza Canosa × Marketing Rocks', en: 'Yaiza Canosa × Marketing Rocks' },
    client: 'Marketing Rocks',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Yaiza Canosa como ponente en Marketing Rocks, el encuentro para profesionales y apasionados del marketing celebrado en Mallorca.',
      en: 'Yaiza Canosa as a speaker at Marketing Rocks, the meeting for marketing professionals and enthusiasts held in Mallorca.'
    },
    image: '/marketing-rocks-1.jpg',
    images: [
      '/marketing-rocks-1.jpg',
      '/marketing-rocks-2.jpg',
      '/marketing-rocks-3.jpg',
      '/marketing-rocks-4.jpg'
    ]
  },
  {
    id: 8,
    title: { es: 'Yaiza Canosa × CEGID', en: 'Yaiza Canosa × CEGID' },
    client: 'CEGID',
    talent: 'Yaiza Canosa',
    year: '2025',
    description: {
      es: 'Participación de Yaiza Canosa en el evento organizado por CEGID en Málaga.',
      en: 'Participation of Yaiza Canosa in the event organized by CEGID in Malaga.'
    },
    image: '',
    images: []
  },
  {
    id: 9,
    title: { es: 'Yaiza Canosa × Woman Rocks', en: 'Yaiza Canosa × Woman Rocks' },
    client: 'Woman Rocks',
    talent: 'Yaiza Canosa',
    year: '2025',
    description: {
      es: 'Yaiza Canosa como ponente en Woman Rocks, el evento dedicado al liderazgo y al emprendimiento femenino celebrado en Madrid.',
      en: 'Yaiza Canosa as a speaker at Woman Rocks, the event dedicated to leadership and female entrepreneurship held in Madrid.'
    },
    image: '/woman-rocks-1.jpg',
    images: [
      '/woman-rocks-1.jpg',
      '/woman-rocks-2.jpg'
    ]
  },
  {
    id: 10,
    title: { es: 'Valeria Vegas × Mes del Orgullo', en: 'Valeria Vegas × Mes del Orgullo' },
    client: 'Torrejón de Ardoz',
    talent: 'Valeria Vegas',
    year: '2025',
    description: {
      es: 'Ponencia de Valeria Vegas sobre diversidad sexual con motivo del Mes del Orgullo, celebrada en Torrejón de Ardoz.',
      en: 'Valeria Vegas lecture on sexual diversity on the occasion of Pride Month, held in Torrejón de Ardoz.'
    },
    image: '/valeria-orgullo-1.jpg',
    images: [
      '/valeria-orgullo-1.jpg',
      '/valeria-orgullo-2.jpg'
    ]
  },
  {
    id: 11,
    title: { es: 'Sara Matos × Punto Nemo | Prime Video', en: 'Sara Matos × Punto Nemo | Prime Video' },
    client: 'Prime Video',
    talent: 'Sara Matos',
    year: '2025',
    description: {
      es: 'Shooting realizado por nuestro fotógrafo Ayub el Kadmiri en la convocatoria de prensa para la presentación de Punto Nemo, la serie de Prime Video protagonizada por Sara Matos, durante su visita promocional a Madrid.',
      en: 'Shooting by our photographer Ayub el Kadmiri at the press call for the presentation of Punto Nemo, the Prime Video series starring Sara Matos, during her promotional visit to Madrid.'
    },
    image: '/sara-matos-1.jpg',
    images: [
      '/sara-matos-1.jpg',
      '/sara-matos-2.jpg',
      '/sara-matos-3.jpg',
      '/sara-matos-4.jpg'
    ]
  }
];
