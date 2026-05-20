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
    name: 'Valeria Vegas', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/Valeria vegas.jpg',
    description: 'Valeria Vegas has a degree in Audiovisual Communication. Since 2015 she is a columnist and writes in several Spanish media such as Vanity Fair, Shangay, Candy, Lecturas... Co-writer of the hit series "Veneno" and "Vestidas de azul", she is also the author of multiple books and the director of acclaimed documentaries.',
    gallery: [
      '/Valeria vegas.jpg',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ],
    stats: { profession: 'Writer / Communicator', education: 'Audiovisual Communication', notable: 'Veneno, Vestidas de azul, Libérate' },
    projects: [
      { title: 'Y ahora Sonsoles (Weekly Contributor)', year: '2024-2026' },
      { title: 'Nadiuska (Documentary Series Director)', year: '2023' },
      { title: 'Actriz de Reparto (Novel Publication)', year: '2023' },
      { title: 'Vestidas de Azul (Co-writer & adaptation)', year: '2023' }
    ]
  },
  { 
    id: 2, 
    name: 'Joan Pedrola', 
    type: 'actors', 
    location: 'Barcelona', 
    image: '/Joan Pedrola.jpg',
    description: 'Discovered at the age of 19, Joan Pedrola quickly accelerated his international career, modeling for D&G, Versace, Armani, and Prada, and appearing in Carolina Herrera\'s 212 VIP campaign. He studied illustration at Llotja and transitioned to acting, starring in Netflix series "El Inocente" and "Bienvenidos a Edén".',
    gallery: [
      '/Joan Pedrola.jpg',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    ],
    stats: { height: '189cm', eyes: 'Brown', languages: 'ES, EN, CAT', agencies: 'JVV Agency' },
    projects: [
      { title: 'Bienvenidos a Edén (Netflix Series)', year: '2022-2023' },
      { title: 'Armani Exchange (Official Ambassador)', year: '2021' },
      { title: 'El Inocente (Netflix Series)', year: '2021' },
      { title: 'D&G Worldwide Campaign (Testino)', year: '2010' }
    ]
  },
  { 
    id: 3, 
    name: 'Andrea Tivadar', 
    type: 'actors', 
    location: 'Londres / Barcelona', 
    image: '/Andrea Tivadar.jpg',
    description: 'British actress of Romanian origin, Andrea is the international image of Festina watches alongside Gerard Butler and a worldwide image for Lindt. Her screen appearances include HBO\'s Killing Eve, Netflix\'s Warrior Nun, and films like Safe Inside (nominated for Best Actress) and Lumina.',
    gallery: [
      '/Andrea Tivadar.jpg',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
    ],
    stats: { languages: 'EN, ES, RO, FR', education: 'QMUL Materials Science & Eng.', brand: 'Festina Watches & Lindt' },
    projects: [
      { title: 'Warrior Nun Season 2 (Netflix)', year: '2022' },
      { title: 'Si Lo Hubiera Sabido (Netflix Spain)', year: '2022' },
      { title: 'Festina Watches Campaign', year: '2021' },
      { title: 'Killing Eve Season 2 (HBO)', year: '2019' }
    ]
  },
  { 
    id: 4, 
    name: 'David Castillo', 
    type: 'actors', 
    location: 'Madrid', 
    image: '/David Castillo.jpg',
    description: 'Beginning his career at age 7, David gained massive popularity as Jonathan in the hit TV series "Aída". He has toured the country in classical theater productions with the Compañía Nacional de Teatro Clásico and stars in Amazon Prime\'s "El Cid" as Squire Lisardo, and Disney+\'s "Besos al aire".',
    gallery: [
      '/David Castillo.jpg',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce'
    ],
    stats: { profession: 'Actor / Poet', publications: 'Piedra de madera (2023)', theater: 'CNTC Company member' },
    projects: [
      { title: 'Retorno al hogar (National Theater Tour)', year: '2023' },
      { title: 'Besos al Aire (Disney+ Series)', year: '2021' },
      { title: 'El Cid (Amazon Prime Video Series)', year: '2020-2021' },
      { title: 'Aída (Telecinco - 10 Seasons)', year: '2005-2014' }
    ]
  },
  { 
    id: 5, 
    name: 'Rocío Saiz', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/Rocío Saiz.jpg',
    description: 'Activist, singer, DJ, and communicator. Rocío is a lead singer of Monterrosa and Las Chillers, and a prominent LGTBIQ+ icon in Spain. Her work merges political activism, feminism, and electronic pop anthems, presenting for W Ibiza, Movistar+, and performing at major national festivals.',
    gallery: [
      '/Rocío Saiz.jpg',
      'https://images.unsplash.com/photo-1516873240891-4bf014598ab4',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
    ],
    stats: { profession: 'Singer / DJ / Activist', bands: 'Las Chillers, Monterrosa', platforms: 'Movistar+, W Ibiza' },
    projects: [
      { title: 'La Nevera de Inverfest (Movistar+ Presenter)', year: '2022' },
      { title: 'Out of the Closet (W Ibiza Host)', year: '2022' },
      { title: 'Monterrosa Electro-Pop Project', year: '2020' }
    ]
  },
  { 
    id: 6, 
    name: 'Delaporte', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/Delaporte.jpg',
    description: 'Delaporte is an Italian-Spanish electronic music duo created by Sandra Delaporte and Sergio Salvi. Winners of three MIN Independent Music Awards, they have produced soundtracks for Movistar\'s "Fama a Bailar" and Prime Video\'s "Sin Huellas". They launched the female visibility project "Titanas" in 2021.',
    gallery: [
      '/Delaporte.jpg',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745'
    ],
    stats: { genre: 'Electronic / Pop', members: 'Sandra Delaporte, Sergio Salvi', awards: '3 MIN Awards' },
    projects: [
      { title: 'Sin Huellas OST (Prime Video Series)', year: '2023' },
      { title: 'Titanas Campaign (Collaborations)', year: '2021' },
      { title: 'Las Montañas (MIN Award Video)', year: '2021' },
      { title: 'UNO & DOS EP Releases', year: '2018-2019' }
    ]
  },
  { 
    id: 7, 
    name: 'Pepa Charro (La Terremoto)', 
    type: 'actors', 
    location: 'Palma', 
    image: '/Pepa Charro _La terremoto_.jpg',
    description: 'Versatile actress, comedian, vedette, and cultural promoter, Pepa Charro and her alter ego "La Terremoto de Alcorcón" have a long career in film, theater, and television. Collaborator of Pedro Almodóvar, host of Netflix\'s "Niquelao" and TVE\'s "Masterchef Celebrity", she also runs the iconic Bar Flexas in Palma.',
    gallery: [
      '/Pepa Charro _La terremoto_.jpg',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176'
    ],
    stats: { profession: 'Actress / Comedian / Vedette', business: 'Bar Flexas (Palma)', directors: 'Pedro Almodóvar, Agustí Villaronga' },
    projects: [
      { title: 'Loli Tormenta (Agustí Villaronga Film)', year: '2023' },
      { title: 'Niquelao! (Netflix Host)', year: '2020' },
      { title: 'Los Amantes Pasajeros (Almodóvar Film)', year: '2013' }
    ]
  },
  { 
    id: 8, 
    name: 'Natalie Batlle', 
    type: 'artists', 
    location: 'Chicago / Barcelona', 
    image: '/Natalie_batlle.jpg',
    description: 'Entrepreneur, brand strategist, storyteller, and international speaker. Natalie stands out for building purpose-driven brands with a social impact. With roots in both Chicago and Spain, she has collaborated with LVMH, Bumble, and Under Armour, and has been featured in Vogue, La Vanguardia, and Forbes.',
    gallery: [
      '/Natalie_batlle.jpg',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      'https://images.unsplash.com/photo-1580894732444-8fecef2271ff'
    ],
    stats: { profession: 'Entrepreneur / Consultant', base: 'Chicago & Barcelona', clients: 'LVMH, Bumble, Under Armour' },
    projects: [
      { title: 'Storytelling and Brand Consulting', year: '2020-2026' },
      { title: 'Vogue & Forbes Editorial Features', year: '2024' }
    ]
  },
  { 
    id: 9, 
    name: 'DJ Suri', 
    type: 'artists', 
    location: 'Madrid / Valencia', 
    image: '/Dj Suri.jpg',
    description: 'Award-winning international DJ and producer with 18 years of career. He was the first Spaniard to officially remix Lady Gaga, achieving No. 1 on the Billboard Dance Club Chart, and has produced remixes for Beyonce, P!nk, Lady Gaga, and Paris Hilton. Headliner of global prides (New York, Sydney World Pride).',
    gallery: [
      '/Dj Suri.jpg',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
      'https://images.unsplash.com/photo-1487180142328-0c4e37023af5'
    ],
    stats: { genre: 'Club / House', charts: 'Lady Gaga Remix #1 Billboard', festivals: 'Sydney & NY World Pride' },
    projects: [
      { title: 'Sydney World Pride (Official Artist)', year: '2023' },
      { title: 'Paris Hilton - Summer Reign (Producer)', year: '2018' },
      { title: 'Lady Gaga - Remix (#1 Billboard)', year: '2016' }
    ]
  },
  { 
    id: 10, 
    name: 'Martina Benvenutto', 
    type: 'models', 
    location: 'Mallorca / Barcelona', 
    image: '/Martina BENVENUTTO.jpg',
    description: 'Creative director, interior designer, and model. Martina is the founder of "Benvenutto", a boho chic fashion label. Trained in interior design in Barcelona, she is a Knack Art Show ambassador, photographer\'s muse, and has modeled for campaigns for W Ibiza, Ivvana Mestre, and San Miguel.',
    gallery: [
      '/Martina BENVENUTTO.jpg',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2'
    ],
    stats: { profession: 'Designer / Model', brand: 'Benvenutto Clothing', ambassador: 'Knack Art Show' },
    projects: [
      { title: 'W Ibiza Fashion Parade', year: '2022' },
      { title: 'Knack Art Show Ambassador', year: '2021' }
    ]
  },
  { 
    id: 11, 
    name: 'Rebeca Khamlichi', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/REBECA KHAMLICHI.jpg',
    description: 'Painter, graphic designer, and influencer. Rebeca\'s colorful pop-art universe blends XVII century religious iconography, cartoons, and Goya\'s dark paintings. She has collaborated on murals, fashion campaigns, and designs for Reebok, Coca-Cola, Beefeater, and Absolut.',
    gallery: [
      '/REBECA KHAMLICHI.jpg',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab'
    ],
    stats: { profession: 'Painter / Graphic Designer', style: 'Pop-Art / Contemporary', clients: 'Reebok, Beefeater, Coca-Cola, Absolut' },
    projects: [
      { title: 'Absolut Murals Campaign', year: '2023' },
      { title: 'Reebok Collaboration Design', year: '2022' }
    ]
  }
];
