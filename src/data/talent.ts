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
    image: '/valeria-vegas.jpg',
    description: 'Valeria Vegas holds a degree in Audiovisual Communication. Since 2015, she has been a regular columnist and writer for multiple major Spanish media outlets including Vanity Fair, Shangay, Candy, and Lecturas. Celebrated as the co-writer together with Los Javis of the hit series "Veneno" and "Vestidas de azul", she is the author of multiple acclaimed books and the director of the award-winning documentary "Manolita, La Chen de Arcos". She is currently a weekly contributor to the program "Y ahora Sonsoles" and an ambassador for The Body Shop.',
    gallery: [
      '/valeria-vegas.jpg',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
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
    image: '/joan-pedrola.jpg',
    description: 'Discovered at the age of 19, Joan Pedrola quickly accelerated his international modeling career, starting with a worldwide D&G campaign shot by Mario Testino. He walked the best catwalks in the world (Milan, Paris, New York) for D&G, Versace, Armani, and Prada, and was the image of Carolina Herrera\'s 212 VIP perfume. He studied illustration at Llotja and completed acting training at Eòlia, starring in Netflix series "El Inocente" and "Bienvenidos a Edén". In 2021, he was chosen as the ambassador and image for Armani Exchange.',
    gallery: [
      '/joan-pedrola.jpg',
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
    image: '/andrea-tivadar.jpg',
    description: 'British actress of Romanian origin, Andrea currently divides her time between London and Barcelona. After graduating in Materials Science & Engineering from Queen Mary University of London, she debuted in 2012. Her international screen career includes HBO\'s Killing Eve (Season 2), Netflix\'s Warrior Nun (Season 2), Si Lo Hubiera Sabido, and lead roles in Safe Inside (nominated for Best Actress) and Lumina. She is the international image of Festina watches alongside Gerard Butler and the worldwide image of Lindt.',
    gallery: [
      '/andrea-tivadar.jpg',
      '/Andrea.jpg',
      '/Andrea 2.jpg'
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
    image: '/david-castillo.jpg',
    description: 'David Castillo began his professional screen career at age 7, later achieving massive national popularity in Spain as Jonathan in the hit comedy series "Aída". He transitioned to classical theater, joining the Joven Compañía Nacional de Teatro Clásico and touring the country in leading roles. On screen, he stars in Amazon Prime\'s historical epic "El Cid" as Squire Lisardo, and Disney+\'s series "Besos al aire". He is also a poet and published his poetry book "Piedra de madera" in 2023.',
    gallery: [
      '/david-castillo.jpg',
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
    image: '/rocio-saiz.jpg',
    description: 'Activist, singer, DJ, and communicator. Rocío is a lead singer of Monterrosa and Las Chillers, and a prominent LGTBIQ+ icon in Spain. Her work merges political activism, feminism, and electronic pop anthems. On television, she presented the new Movistar+ space "La Nevera de Inverfest" and hosted the fashion show "Out of the closet" for Hotel W Ibiza. She has participated in major festivals including Atlantic Fest, Cala Mijas, and Culture Business Pride in Tenerife.',
    gallery: [
      '/rocio-saiz.jpg',
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
    image: '/delaporte.jpg',
    description: 'Delaporte is an award-winning Italian-Spanish electronic music project based in Madrid, created by Sandra Delaporte and Sergio Salvi. Winners of three MIN Independent Music Awards, they have produced soundtracks for Movistar\'s "Fama a Bailar" and Prime Video\'s "Sin Huellas". They launched the female visibility project "Titanas" in 2021. Sandra Delaporte has been chosen as the face of Amazon Fashion and both serve as ambassadors for Nike and Armani Exchange.',
    gallery: [
      '/delaporte.jpg',
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
    image: '/pepa-charro.jpg',
    description: 'Versatile actress, comedian, vedette, cultural promoter, and businesswoman. Pepa Charro and her alter ego "La Terremoto de Alcorcón" have a legendary career in cabaret, film, theater, and television. A collaborator of Pedro Almodóvar ("Los Amantes Pasajeros") and Agustí Villaronga ("Loli Tormenta"), she is a regular host on TVE\'s "Masterchef Celebrity" and Netflix\'s "Niquelao!". She is also the owner and cultural promoter of the iconic Bar Flexas in Palma.',
    gallery: [
      '/pepa-charro.jpg',
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
    image: '/natalie-batlle.jpg',
    description: 'Entrepreneur, brand consultant, and international speaker. Natalie stands out for her expertise in storytelling and building purpose-driven brands with high social impact and strong media presence. She has collaborated with brands such as LVMH, Bumble, and Under Armour, and has been featured in Vogue, La Vanguardia, and Forbes. Natalie splits her time between Chicago and Barcelona, connecting brands and people to create innovative, purpose-driven projects.',
    gallery: [
      '/natalie-batlle.jpg',
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
    image: '/dj-suri.jpg',
    description: 'Award-winning international DJ, producer, and LGTBIQ+ activist with an outstanding 18-year career. He was the first Spanish DJ to officially remix Lady Gaga ("Til It Happens To You"), achieving No. 1 on the Billboard Dance Club Chart, and has produced remixes for Beyonce, P!nk, and Paris Hilton (co-producing "Summer Reign" in Ibiza). A resident DJ for the global brand "Papa Party", Republik Madrid, and Deseo 54 Valencia, he has headlined the biggest prides in New York, Madrid, and Sydney World Pride.',
    gallery: [
      '/dj-suri.jpg',
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
    image: '/martina-benvenutto.jpg',
    description: 'Creative director, interior designer, and model. Martina is the founder and creative director of the boho chic clothing label "Benvenutto", designed for free-spirited women. Trained in interior design in Barcelona, she is a passionate art collector and ambassador for the Knack Art Show. She has been the muse for prominent photographers and modeled in campaigns for San Miguel, Port Aventura, and W Ibiza fashion parades (Ivvana Mestre).',
    gallery: [
      '/martina-benvenutto.jpg',
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
    image: '/rebeca-khamlichi.jpg',
    description: 'Painter, graphic designer, and influencer. Rebeca\'s colorful pop-art universe blends XVII century religious iconography, cartoons, contemporary pop culture, and dark paintings. Working from her scenic terrace over Old Madrid, she has collaborated on creative murals, designs, and product customisation for global brands including Reebok, Coca-Cola, Beefeater, and Absolut.',
    gallery: [
      '/rebeca-khamlichi.jpg',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab'
    ],
    stats: { profession: 'Painter / Graphic Designer', style: 'Pop-Art / Contemporary', clients: 'Reebok, Beefeater, Coca-Cola, Absolut' },
    projects: [
      { title: 'Absolut Murals Campaign', year: '2023' },
      { title: 'Reebok Collaboration Design', year: '2022' }
    ]
  },
  { 
    id: 12, 
    name: 'Pablo Erroz', 
    type: 'artists', 
    location: 'Palma de Mallorca', 
    image: '/pablo-erroz.jpg',
    description: 'Pablo Erroz is one of Spain\'s most promising fashion designers and a highly influential voice in contemporary Spanish fashion. Born in Palma de Mallorca and trained in Barcelona, he launched his unisex and timeless luxury label in 2010 after gaining extensive outerwear and leather experience with Inditex. Fusing street style with sophisticated luxury, his annual collections promote ethical and circular fashion. Erroz has pioneered bridges between fashion and tech, collaborating with Xiaomi on the Smart Band 8 Pro, and designed the customized Air Europa float for the Madrid Pride parade in 2024.',
    gallery: [
      '/pablo-erroz.jpg',
      'https://images.unsplash.com/photo-1507679799987-c73774573b2a',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'
    ],
    stats: { profession: 'Fashion Designer', education: 'Inditex outer & leather background', notable: 'Xiaomi collaboration, Air Europa Float' },
    projects: [
      { title: 'Air Europa LGTBIQ+ Float Customization', year: '2024' },
      { title: 'Xiaomi Smart Band 8 Pro Collaboration', year: '2023-2024' },
      { title: 'Annual Unisex Luxury Collection Launches', year: '2010-2026' }
    ]
  }
];
