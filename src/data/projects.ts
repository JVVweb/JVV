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
    id: 2,
    title: { es: 'Valeria Vegas × La Más Grande & Movistar Plus+', en: 'Valeria Vegas × La Más Grande & Movistar Plus+' },
    client: 'Movistar Plus+',
    talent: 'Valeria Vegas',
    year: '2026',
    description: {
      es: 'Participación de Valeria Vegas en la campaña de promoción de La Más Grande, la serie documental original de Movistar Plus+ sobre la vida y el legado de Rocío Jurado.',
      en: 'Participation of Valeria Vegas in the promotional campaign of La Más Grande, the original documentary series of Movistar Plus+ about the life and legacy of Rocío Jurado.'
    },
    image: '',
    images: []
  },
  {
    id: 3,
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
    id: 4,
    title: { es: 'Giorgio Ciccone × Kave Home | Salone del Mobile Milano', en: 'Giorgio Ciccone × Kave Home | Salone del Mobile Milano' },
    client: 'Kave Home',
    talent: 'Giorgio Ciccone',
    year: '2026',
    description: {
      es: 'Colaboración entre Giorgio Ciccone, director creativo y la marca de muebles Kave Home durante la Milan Design Week, con una instalación inmersiva presentada en el Salone del Mobile de Milán.',
      en: 'Collaboration between Giorgio Ciccone, creative director, and the furniture brand Kave Home during Milan Design Week, with an immersive installation presented at the Salone del Mobile in Milan.'
    },
    image: '/giorgio-kave-1.jpg',
    images: [
      '/giorgio-kave-1.jpg',
      '/giorgio-kave-2.jpg',
      '/giorgio-kave-3.jpg',
      '/giorgio-kave-4.jpg'
    ]
  },
  {
    id: 5,
    title: { es: 'Sepiia × Yaiza Canosa, Natalie Batlle y Lorenzo Castillo', en: 'Sepiia × Yaiza Canosa, Natalie Batlle y Lorenzo Castillo' },
    client: 'Sepiia',
    talent: 'Yaiza Canosa, Natalie Batlle, Lorenzo Castillo',
    year: '2026',
    description: {
      es: 'Colaboración entre la marca española de ropa con tecnología textil Sepiia y la emprendedora Yaiza Canosa, la empresaria Natalie Batlle y el decorador Lorenzo Castillo.',
      en: 'Collaboration between the Spanish clothing brand with textile technology Sepiia and entrepreneur Yaiza Canosa, businesswoman Natalie Batlle, and decorator Lorenzo Castillo.'
    },
    image: '/sepiia-yaiza.jpg',
    images: ['/sepiia-yaiza.jpg']
  },
  {
    id: 6,
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
    title: { es: 'Yaiza Canosa × Sepiia', en: 'Yaiza Canosa × Sepiia' },
    client: 'Sepiia',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Colaboración entre la emprendedora Yaiza Canosa y la marca española de ropa con tecnología textil Sepiia.',
      en: 'Collaboration between entrepreneur Yaiza Canosa and the Spanish clothing brand with textile technology Sepiia.'
    },
    image: '/sepiia-yaiza.jpg',
    images: ['/sepiia-yaiza.jpg']
  },
  {
    id: 9,
    title: { es: 'Chaumet Christmas', en: 'Chaumet Christmas' },
    client: 'Chaumet',
    year: '2025',
    description: {
      es: 'Convocatoria y producción de la campaña navideña para la firma de alta joyería Chaumet.',
      en: 'Invitation and production of the Christmas campaign for the high jewelry brand Chaumet.'
    },
    image: '/Events/JVV _ CHAUMET CHRISTMAS/imgi_4_Chaumett-900x1200-main.jpg',
    images: ['/Events/JVV _ CHAUMET CHRISTMAS/imgi_4_Chaumett-900x1200-main.jpg']
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
    title: { es: 'ELLA FESTIVAL 2025', en: 'ELLA FESTIVAL 2025' },
    client: 'Ella Festival',
    year: '2025',
    description: {
      es: 'El pasado mes de agosto, tuvimos la oportunidad de colaborar en la edición del ELLA Festival Mallorca 2025, un evento que celebra la diversidad, la cultura y la innovación.',
      en: 'Last August, we had the opportunity to collaborate in the edition of the ELLA Festival Mallorca 2025, an event that celebrates diversity, culture and innovation.'
    },
    image: '/ella festival.jpg',
    images: ['/ella festival.jpg']
  },
  {
    id: 13,
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
    id: 14,
    title: { es: 'Palma International Boat Show 2025', en: 'Palma International Boat Show 2025' },
    client: 'Palma Boat Show',
    year: '2025',
    description: {
      es: 'Convocatoria y PR para el Palma International Boat Show 2025.',
      en: 'Guest coordination and PR for the Palma International Boat Show 2025.'
    },
    image: '/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5_portada.jpg',
    images: ['/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5_portada.jpg']
  },
  {
    id: 15,
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
  },
  {
    id: 16,
    title: { es: 'Casa PATYKA – Presentación de la línea Glow', en: 'Casa PATYKA – Glow Line Presentation' },
    client: 'Patyka',
    year: '2024',
    description: {
      es: 'Presentación de la línea Glow de Casa Patyka.',
      en: 'Presentation of the Glow line from Casa Patyka.'
    },
    image: '/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_4_Patyka-62_portada.jpg',
    images: ['/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_4_Patyka-62_portada.jpg']
  },
  {
    id: 17,
    title: { es: 'The Body Shop – Inauguración T4 Aeropuerto Madrid', en: 'The Body Shop – Madrid Airport T4 Grand Opening' },
    client: 'The Body Shop',
    year: '2023',
    description: {
      es: 'Inauguración de la nueva tienda de The Body Shop en la Terminal 4 del Aeropuerto de Madrid.',
      en: 'Inauguration of the new The Body Shop store at Terminal 4 of Madrid Airport.'
    },
    image: '/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_8_Tbs-T4-900x1200-main.jpg',
    images: ['/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_8_Tbs-T4-900x1200-main.jpg']
  },
  {
    id: 18,
    title: { es: 'Time Out', en: 'Time Out' },
    client: 'Time Out',
    year: '2023',
    description: {
      es: 'Colaboración y campaña con Time Out.',
      en: 'Collaboration and campaign with Time Out.'
    },
    image: '/Events/JVV _ TIMEOUT/imgi_4_unnamed-2_portada.jpg',
    images: ['/Events/JVV _ TIMEOUT/imgi_4_unnamed-2_portada.jpg']
  },
  {
    id: 19,
    title: { es: 'RIU Plaza de España – Nochevieja', en: "RIU Plaza de España – New Year's Eve" },
    client: 'RIU Hotels',
    year: '2022',
    description: {
      es: 'Producción del evento especial de Nochevieja en el hotel RIU Plaza de España.',
      en: "Production of the special New Year's Eve event at the RIU Plaza de España hotel."
    },
    image: '/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_16_MG_3556-2048x1463_PORTADA.jpg',
    images: ['/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_16_MG_3556-2048x1463_PORTADA.jpg']
  },
  {
    id: 20,
    title: { es: 'Festival Paraíso III Edición', en: 'Festival Paraíso III Edition' },
    client: 'Festival Paraíso',
    year: '2022',
    description: {
      es: 'Gestión de patrocinios y relaciones con creadores en la tercera edición del Festival Paraíso.',
      en: 'Sponsorship management and creator relations at the third edition of the Paraíso Festival.'
    },
    image: '/Events/JVV _ FESTIVAL PARAÍSO III Edición/SHYGIRL-PARAISO-FESTIVAL-5-1_portada.jpg',
    images: ['/Events/JVV _ FESTIVAL PARAÍSO III Edición/SHYGIRL-PARAISO-FESTIVAL-5-1_portada.jpg']
  },
  {
    id: 21,
    title: { es: 'Privilegiada – Presentación del corto', en: 'Privilegiada – Short Film Presentation' },
    client: 'Poble Nou Social Club',
    year: '2021',
    description: {
      es: 'Organización, producción y convocatoria de los diferentes pases del cortometraje Privilegiada.',
      en: 'Organization, production, and invitation coordination for the screening of the short film Privilegiada.'
    },
    image: '/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg',
    images: ['/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg']
  }
];
