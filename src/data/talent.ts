export type TalentType = 'all' | 'models' | 'actors' | 'artists';

export interface Talent {
  id: number;
  name: string;
  type: TalentType;
  location: string;
  image: string;
  description: { es: string; en: string };
  gallery: string[];
  stats: {
    es: Record<string, string>;
    en: Record<string, string>;
  };
  projects: { title: { es: string; en: string }; year: string }[];
}

export const TALENT_DATA: Talent[] = [
  { 
    id: 1, 
    name: 'Valeria Vegas', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/valeria-vegas.jpg',
    description: {
      es: 'Valeria Vegas es licenciada en Comunicación Audiovisual. Desde 2015 es columnista y escritora habitual en diversos medios españoles como Vanity Fair, Shangay, Candy y Lecturas. Reconocida como co-guionista junto a Los Javis de la exitosa serie "Veneno" y "Vestidas de azul", es autora de múltiples libros aclamados y directora del galardonado documental "Manolita, La Chen de Arcos". Actualmente es colaboradora semanal en el programa de televisión "Y ahora Sonsoles" y embajadora de The Body Shop.',
      en: 'Valeria Vegas holds a degree in Audiovisual Communication. Since 2015, she has been a regular columnist and writer for multiple major Spanish media outlets including Vanity Fair, Shangay, Candy, and Lecturas. Celebrated as the co-writer together with Los Javis of the hit series "Veneno" and "Vestidas de azul", she is the author of multiple acclaimed books and the director of the award-winning documentary "Manolita, La Chen de Arcos". She is currently a weekly contributor to the program "Y ahora Sonsoles" and an ambassador for The Body Shop.'
    },
    gallery: [
      '/valeria-vegas.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Escritora / Comunicadora', 'Estudios': 'Comunicación Audiovisual', 'Destacado': 'Veneno, Vestidas de azul, Libérate' },
      en: { 'Profession': 'Writer / Communicator', 'Education': 'Audiovisual Communication', 'Notable': 'Veneno, Vestidas de azul, Libérate' }
    },
    projects: [
      { title: { es: 'Y ahora Sonsoles (Colaboradora semanal)', en: 'Y ahora Sonsoles (Weekly Contributor)' }, year: '2024-2026' },
      { title: { es: 'Nadiuska (Directora de serie documental)', en: 'Nadiuska (Documentary Series Director)' }, year: '2023' },
      { title: { es: 'Actriz de Reparto (Publicación de novela)', en: 'Actriz de Reparto (Novel Publication)' }, year: '2023' },
      { title: { es: 'Vestidas de Azul (Co-guionista y adaptación)', en: 'Vestidas de Azul (Co-writer & adaptation)' }, year: '2023' }
    ]
  },
  { 
    id: 2, 
    name: 'Joan Pedrola', 
    type: 'actors', 
    location: 'Barcelona', 
    image: '/joan-pedrola.jpg',
    description: {
      es: 'Descubierto a la edad de 19 años, Joan Pedrola aceleró rápidamente su carrera internacional como modelo, comenzando con una campaña mundial de D&G fotografiada por Mario Testino. Desfiló en las mejores pasarelas del mundo (Milán, París, Nueva York) para firmas como D&G, Versace, Armani y Prada, y fue imagen del perfume 212 VIP de Carolina Herrera. Estudió ilustración en la escuela Llotja y completó su formación actoral en Eòlia, protagonizando las series de Netflix "El Inocente" y "Bienvenidos a Edén". En 2021, fue elegido embajador e imagen oficial de Armani Exchange.',
      en: 'Discovered at the age of 19, Joan Pedrola quickly accelerated his international modeling career, starting with a worldwide D&G campaign shot by Mario Testino. He walked the best catwalks in the world (Milan, Paris, New York) for D&G, Versace, Armani, and Prada, and was the image of Carolina Herrera\'s 212 VIP perfume. He studied illustration at Llotja and completed acting training at Eòlia, starring in Netflix series "El Inocente" and "Bienvenidos a Edén". In 2021, he was chosen as the ambassador and image for Armani Exchange.'
    },
    gallery: [
      '/joan-pedrola.jpg'
    ],
    stats: {
      es: { 'Altura': '189cm', 'Ojos': 'Marrones', 'Idiomas': 'ES, EN, CAT', 'Agencias': 'JVV Agency' },
      en: { 'Height': '189cm', 'Eyes': 'Brown', 'Languages': 'ES, EN, CAT', 'Agencies': 'JVV Agency' }
    },
    projects: [
      { title: { es: 'Bienvenidos a Edén (Serie de Netflix)', en: 'Bienvenidos a Edén (Netflix Series)' }, year: '2022-2023' },
      { title: { es: 'Armani Exchange (Embajador oficial)', en: 'Armani Exchange (Official Ambassador)' }, year: '2021' },
      { title: { es: 'El Inocente (Serie de Netflix)', en: 'El Inocente (Netflix Series)' }, year: '2021' },
      { title: { es: 'Campaña Mundial de D&G (Testino)', en: 'D&G Worldwide Campaign (Testino)' }, year: '2010' }
    ]
  },
  { 
    id: 3, 
    name: 'Andrea Tivadar', 
    type: 'actors', 
    location: 'Londres / Barcelona', 
    image: '/andrea-tivadar.jpg',
    description: {
      es: 'Actriz británica de origen rumano, Andrea divide actualmente su tiempo entre Londres y Barcelona. Tras graduarse en Ciencia e Ingeniería de Materiales por la Queen Mary University de Londres, debutó en la pantalla en 2012. Su trayectoria internacional incluye la serie de HBO "Killing Eve" (Temporada 2), "Warrior Nun" de Netflix (Temporada 2), "Si Lo Hubiera Sabido", y papeles protagónicos en "Safe Inside" (nominada a Mejor Actriz) y "Lumina". Es la imagen internacional de los relojes Festina junto a Gerard Butler y la imagen mundial de los chocolates Lindt.',
      en: 'British actress of Romanian origin, Andrea currently divides her time between London and Barcelona. After graduating in Materials Science & Engineering from Queen Mary University of London, she debuted in 2012. Her international screen career includes HBO\'s Killing Eve (Season 2), Netflix\'s Warrior Nun (Season 2), Si Lo Hubiera Sabido, and lead roles in Safe Inside (nominated for Best Actress) and Lumina. She is the international image of Festina watches alongside Gerard Butler and the worldwide image of Lindt.'
    },
    gallery: [
      '/andrea-tivadar.jpg',
      '/Andrea.jpg',
      '/Andrea 2.jpg'
    ],
    stats: {
      es: { 'Idiomas': 'EN, ES, RO, FR', 'Estudios': 'QMUL Ciencia e Ingeniería de Materiales', 'Marcas': 'Relojes Festina, Lindt' },
      en: { 'Languages': 'EN, ES, RO, FR', 'Education': 'QMUL Materials Science & Eng.', 'Brands': 'Festina Watches & Lindt' }
    },
    projects: [
      { title: { es: 'Warrior Nun Temporada 2 (Netflix)', en: 'Warrior Nun Season 2 (Netflix)' }, year: '2022' },
      { title: { es: 'Si Lo Hubiera Sabido (Netflix España)', en: 'Si Lo Hubiera Sabido (Netflix Spain)' }, year: '2022' },
      { title: { es: 'Campaña de Relojes Festina', en: 'Festina Watches Campaign' }, year: '2021' },
      { title: { es: 'Killing Eve Temporada 2 (HBO)', en: 'Killing Eve Season 2 (HBO)' }, year: '2019' }
    ]
  },
  { 
    id: 4, 
    name: 'David Castillo', 
    type: 'actors', 
    location: 'Madrid', 
    image: '/david-castillo.jpg',
    description: {
      es: 'David Castillo comenzó su carrera actoral profesional en la pantalla a los 7 años, logrando más tarde una enorme popularidad nacional en España como Jonathan en la exitosa serie de comedia "Aída". Hizo la transición al teatro clásico, uniéndose a la Joven Compañía Nacional de Teatro Clásico y recorriendo el país en papeles protagónicos. En televisión y plataformas, protagoniza la epopeya histórica de Amazon Prime "El Cid" como el escudero Lisardo, y la serie de Disney+ "Besos al aire". También es poeta y publicó su libro de poesía "Piedra de madera" en 2023.',
      en: 'David Castillo began his professional screen career at age 7, later achieving massive national popularity in Spain as Jonathan in the hit comedy series "Aída". He transitioned to classical theater, joining the Joven Compañía Nacional de Teatro Clásico and touring the country in leading roles. On screen, he stars in Amazon Prime\'s historical epic "El Cid" as Squire Lisardo, and Disney+\'s series "Besos al aire". He is also a poet and published his poetry book "Piedra de madera" in 2023.'
    },
    gallery: [
      '/david-castillo.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Actor / Poeta', 'Publicaciones': 'Piedra de madera (2023)', 'Teatro': 'Miembro de la Cía. Nacional de Teatro Clásico' },
      en: { 'Profession': 'Actor / Poet', 'Publications': 'Piedra de madera (2023)', 'Theater': 'CNTC Company member' }
    },
    projects: [
      { title: { es: 'Retorno al hogar (Gira Nacional de Teatro)', en: 'Retorno al hogar (National Theater Tour)' }, year: '2023' },
      { title: { es: 'Besos al Aire (Serie de Disney+)', en: 'Besos al Aire (Disney+ Series)' }, year: '2021' },
      { title: { es: 'El Cid (Serie de Amazon Prime Video)', en: 'El Cid (Amazon Prime Video Series)' }, year: '2020-2021' },
      { title: { es: 'Aída (Telecinco - 10 Temporadas)', en: 'Aída (Telecinco - 10 Seasons)' }, year: '2005-2014' }
    ]
  },
  { 
    id: 5, 
    name: 'Rocío Saiz', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/rocio-saiz.jpg',
    description: {
      es: 'Activista, cantante, DJ y comunicadora. Rocío es la vocalista principal de Monterrosa y Las Chillers, y un destacado icono LGTBIQ+ en España. Su trabajo fusiona el activismo político, el feminismo y los himnos del pop electrónico. En televisión, presentó el nuevo espacio de Movistar+ "La Nevera de Inverfest" y presentó el desfile de moda "Out of the closet" para el Hotel W Ibiza. Ha participado en grandes festivales como el Atlantic Fest, Cala Mijas y Culture Business Pride en Tenerife.',
      en: 'Activist, singer, DJ, and communicator. Rocío is a lead singer of Monterrosa and Las Chillers, and a prominent LGTBIQ+ icon in Spain. Her work merges political activism, feminism, and electronic pop anthems. On television, she presented the new Movistar+ space "La Nevera de Inverfest" and hosted the fashion show "Out of the closet" for Hotel W Ibiza. She has participated in major festivals including Atlantic Fest, Cala Mijas, and Culture Business Pride in Tenerife.'
    },
    gallery: [
      '/rocio-saiz.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Cantante / DJ / Activista', 'Bandas': 'Las Chillers, Monterrosa', 'Plataformas': 'Movistar+, W Ibiza' },
      en: { 'Profession': 'Singer / DJ / Activist', 'Bands': 'Las Chillers, Monterrosa', 'Platforms': 'Movistar+, W Ibiza' }
    },
    projects: [
      { title: { es: 'La Nevera de Inverfest (Presentadora de Movistar+)', en: 'La Nevera de Inverfest (Movistar+ Presenter)' }, year: '2022' },
      { title: { es: 'Out of the Closet (Presentadora en W Ibiza)', en: 'Out of the Closet (W Ibiza Host)' }, year: '2022' },
      { title: { es: 'Proyecto Electro-Pop Monterrosa', en: 'Monterrosa Electro-Pop Project' }, year: '2020' }
    ]
  },
  { 
    id: 6, 
    name: 'Delaporte', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/delaporte.jpg',
    description: {
      es: 'Delaporte es un galardonado proyecto de música electrónica italo-español con sede en Madrid, creado por Sandra Delaporte y Sergio Salvi. Ganadores de tres Premios de la Música Independiente (MIN), han producido bandas sonoras para "Fama a Bailar" de Movistar y "Sin Huellas" de Prime Video. Lanzaron el proyecto de visibilización femenina "Titanas" en 2021. Sandra Delaporte ha sido elegida imagen de Amazon Fashion y ambos actúan como embajadores de Nike y Armani Exchange.',
      en: 'Delaporte is an award-winning Italian-Spanish electronic music project based in Madrid, created by Sandra Delaporte and Sergio Salvi. Winners of three MIN Independent Music Awards, they have produced soundtracks for Movistar\'s "Fama a Bailar" and Prime Video\'s "Sin Huellas". They launched the female visibility project "Titanas" in 2021. Sandra Delaporte has been chosen as the face of Amazon Fashion and both serve as ambassadors for Nike and Armani Exchange.'
    },
    gallery: [
      '/delaporte.jpg'
    ],
    stats: {
      es: { 'Género': 'Electrónica / Pop', 'Miembros': 'Sandra Delaporte, Sergio Salvi', 'Premios': '3 Premios MIN' },
      en: { 'Genre': 'Electronic / Pop', 'Members': 'Sandra Delaporte, Sergio Salvi', 'Awards': '3 MIN Awards' }
    },
    projects: [
      { title: { es: 'Banda sonora de Sin Huellas (Serie de Prime Video)', en: 'Sin Huellas OST (Prime Video Series)' }, year: '2023' },
      { title: { es: 'Campaña Titanas (Colaboraciones)', en: 'Titanas Campaign (Collaborations)' }, year: '2021' },
      { title: { es: 'Las Montañas (Videoclip ganador Premio MIN)', en: 'Las Montañas (MIN Award Video)' }, year: '2021' },
      { title: { es: 'Lanzamiento de los EPs UNO y DOS', en: 'UNO & DOS EP Releases' }, year: '2018-2019' }
    ]
  },
  { 
    id: 7, 
    name: 'Pepa Charro (La Terremoto)', 
    type: 'actors', 
    location: 'Palma', 
    image: '/pepa-charro.jpg',
    description: {
      es: 'Versátil actriz, comediante, vedette, promotora cultural y empresaria. Pepa Charro y su alter ego "La Terremoto de Alcorcón" tienen una trayectoria legendaria en el cabaret, el cine, el teatro y la televisión. Colaboradora de Pedro Almodóvar ("Los Amantes Pasajeros") y Agustí Villaronga ("Loli Tormenta"), es copresentadora habitual de programas como "Masterchef Celebrity" de TVE y "Niquelao!" de Netflix. Es también propietaria y dinamizadora cultural del emblemático Bar Flexas en Palma de Mallorca.',
      en: 'Versatile actress, comedian, vedette, cultural promoter, and businesswoman. Pepa Charro and her alter ego "La Terremoto de Alcorcón" have a legendary career in cabaret, film, theater, and television. A collaborator of Pedro Almodóvar ("Los Amantes Pasajeros") and Agustí Villaronga ("Loli Tormenta"), she is a regular host on TVE\'s "Masterchef Celebrity" and Netflix\'s "Niquelao!". She is also the owner and cultural promoter of the iconic Bar Flexas in Palma.'
    },
    gallery: [
      '/pepa-charro.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Actriz / Humorista / Vedette', 'Negocios': 'Bar Flexas (Palma)', 'Directores': 'Pedro Almodóvar, Agustí Villaronga' },
      en: { 'Profession': 'Actress / Comedian / Vedette', 'Business': 'Bar Flexas (Palma)', 'Directors': 'Pedro Almodóvar, Agustí Villaronga' }
    },
    projects: [
      { title: { es: 'Loli Tormenta (Película de Agustí Villaronga)', en: 'Loli Tormenta (Agustí Villaronga Film)' }, year: '2023' },
      { title: { es: 'Niquelao! (Presentadora en Netflix)', en: 'Niquelao! (Netflix Host)' }, year: '2020' },
      { title: { es: 'Los Amantes Pasajeros (Película de Almodóvar)', en: 'Los Amantes Pasajeros (Almodóvar Film)' }, year: '2013' }
    ]
  },
  { 
    id: 8, 
    name: 'Natalie Batlle', 
    type: 'artists', 
    location: 'Chicago / Barcelona', 
    image: '/natalie-batlle.jpg',
    description: {
      es: 'Emprendedora, consultora de marca y conferenciante internacional. Natalie destaca por su experiencia en la narración de historias (storytelling) y en la creación de marcas impulsadas por un propósito, con gran impacto social y fuerte presencia mediática. Ha colaborado con marcas internacionales de la talla de LVMH, Bumble y Under Armour, y su trabajo ha aparecido en revistas y diarios líderes como Vogue, La Vanguardia y Forbes. Natalie divide su tiempo entre Chicago y Barcelona, conectando marcas y personas para cocrear proyectos innovadores.',
      en: 'Entrepreneur, brand consultant, and international speaker. Natalie stands out for her expertise in storytelling and building purpose-driven brands with high social impact and strong media presence. She has collaborated with brands such as LVMH, Bumble, and Under Armour, and has been featured in Vogue, La Vanguardia, and Forbes. Natalie splits her time between Chicago and Barcelona, connecting brands and people to create innovative, purpose-driven projects.'
    },
    gallery: [
      '/natalie-batlle.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Emprendedora / Consultora', 'Base': 'Chicago y Barcelona', 'Clientes': 'LVMH, Bumble, Under Armour' },
      en: { 'Profession': 'Entrepreneur / Consultant', 'Base': 'Chicago & Barcelona', 'Clients': 'LVMH, Bumble, Under Armour' }
    },
    projects: [
      { title: { es: 'Consultoría de Marca y Narración Estratégica', en: 'Storytelling and Brand Consulting' }, year: '2020-2026' },
      { title: { es: 'Artículos editoriales en Vogue y Forbes', en: 'Vogue & Forbes Editorial Features' }, year: '2024' }
    ]
  },
  { 
    id: 9, 
    name: 'DJ Suri', 
    type: 'artists', 
    location: 'Madrid / Valencia', 
    image: '/dj-suri.jpg',
    description: {
      es: 'Galardonado DJ internacional, productor y activista LGTBIQ+ con una destacada trayectoria de 18 años. Fue el primer DJ español en remezclar oficialmente a Lady Gaga ("Til It Happens To You"), logrando el número 1 en el Billboard Dance Club Chart, y ha producido remixes para Beyonce, P!nk y Paris Hilton (coproduciendo "Summer Reign" en Ibiza). DJ residente de la marca global "Papa Party", Republik Madrid y Deseo 54 Valencia, ha encabezado los mayores festivales de orgullo en Nueva York, Madrid y Sydney World Pride.',
      en: 'Award-winning international DJ, producer, and LGTBIQ+ activist with an outstanding 18-year career. He was the first Spanish DJ to officially remix Lady Gaga ("Til It Happens To You"), achieving No. 1 on the Billboard Dance Club Chart, and has produced remixes for Beyonce, P!nk, and Paris Hilton (co-producing "Summer Reign" in Ibiza). A resident DJ for the global brand "Papa Party", Republik Madrid, and Deseo 54 Valencia, he has headlined the biggest prides in New York, Madrid, and Sydney World Pride.'
    },
    gallery: [
      '/dj-suri.jpg'
    ],
    stats: {
      es: { 'Género': 'Club / House', 'Logros': 'Remix de Lady Gaga #1 en Billboard', 'Festivales': 'Sydney & NY World Pride' },
      en: { 'Genre': 'Club / House', 'Charts': 'Lady Gaga Remix #1 Billboard', 'Festivals': 'Sydney & NY World Pride' }
    },
    projects: [
      { title: { es: 'Sydney World Pride (Artista Oficial)', en: 'Sydney World Pride (Official Artist)' }, year: '2023' },
      { title: { es: 'Paris Hilton - Summer Reign (Productor)', en: 'Paris Hilton - Summer Reign (Producer)' }, year: '2018' },
      { title: { es: 'Lady Gaga - Remix (#1 Billboard)', en: 'Lady Gaga - Remix (#1 Billboard)' }, year: '2016' }
    ]
  },
  { 
    id: 10, 
    name: 'Martina Benvenutto', 
    type: 'models', 
    location: 'Mallorca / Barcelona', 
    image: '/martina-benvenutto.jpg',
    description: {
      es: 'Directora creativa, diseñadora de interiores y modelo. Martina es la fundadora y directora creativa de la firma de moda boho chic "Benvenutto", diseñada para mujeres de espíritu libre. Formada en diseño de interiores en Barcelona, es una apasionada coleccionista de arte y embajadora de Knack Art Show. Ha sido musa de destacados fotógrafos y ha modelado en campañas para San Miguel, Port Aventura y desfiles del Hotel W Ibiza (Ivvana Mestre).',
      en: 'Creative director, interior designer, and model. Martina is the founder and creative director of the boho chic clothing label "Benvenutto", designed for free-spirited women. Trained in interior design in Barcelona, she is a passionate art collector and ambassador for the Knack Art Show. She has been the muse for prominent photographers and modeled in campaigns for San Miguel, Port Aventura, and W Ibiza fashion parades (Ivvana Mestre).'
    },
    gallery: [
      '/martina-benvenutto.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Diseñadora / Modelo', 'Marca': 'Benvenutto Clothing', 'Embajadora': 'Knack Art Show' },
      en: { 'Profession': 'Designer / Model', 'Brand': 'Benvenutto Clothing', 'Ambassador': 'Knack Art Show' }
    },
    projects: [
      { title: { es: 'Desfile de moda del W Ibiza', en: 'W Ibiza Fashion Parade' }, year: '2022' },
      { title: { es: 'Embajadora de Knack Art Show', en: 'Knack Art Show Ambassador' }, year: '2021' }
    ]
  },
  { 
    id: 11, 
    name: 'Rebeca Khamlichi', 
    type: 'artists', 
    location: 'Madrid', 
    image: '/rebeca-khamlichi.jpg',
    description: {
      es: 'Pintora, diseñadora gráfica y creadora de contenido. El universo colorido del arte pop de Rebeca mezcla la iconografía religiosa del siglo XVII, los dibujos animados, la cultura pop contemporánea y las pinturas negras. Trabajando desde su pintoresca terraza sobre los tejados del viejo Madrid, ha colaborado en murales creativos, diseños y personalización de productos para marcas globales como Reebok, Coca-Cola, Beefeater y Absolut.',
      en: 'Painter, graphic designer, and influencer. Rebeca\'s colorful pop-art universe blends XVII century religious iconography, cartoons, contemporary pop culture, and dark paintings. Working from her scenic terrace over Old Madrid, she has collaborated on creative murals, designs, and product customisation for global brands including Reebok, Coca-Cola, Beefeater, and Absolut.'
    },
    gallery: [
      '/rebeca-khamlichi.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Pintora / Diseñadora Gráfica', 'Estilo': 'Pop-Art / Contemporáneo', 'Clientes': 'Reebok, Beefeater, Coca-Cola, Absolut' },
      en: { 'Profession': 'Painter / Graphic Designer', 'Style': 'Pop-Art / Contemporary', 'Clients': 'Reebok, Beefeater, Coca-Cola, Absolut' }
    },
    projects: [
      { title: { es: 'Campaña de Murales Absolut', en: 'Absolut Murals Campaign' }, year: '2023' },
      { title: { es: 'Diseño de Colaboración Reebok', en: 'Reebok Collaboration Design' }, year: '2022' }
    ]
  },
  { 
    id: 12, 
    name: 'Pablo Erroz', 
    type: 'artists', 
    location: 'Palma de Mallorca', 
    image: '/pablo-erroz.jpg',
    description: {
      es: 'Pablo Erroz es uno de los diseñadores de moda con mayor proyección en España y una voz muy influyente en la moda contemporánea española. Nacido en Palma de Mallorca y formado en Barcelona, lanzó su marca de lujo unisex y atemporal en 2010 tras adquirir una amplia experiencia en prendas de abrigo y piel con Inditex. Fusionando el estilo callejero con un lujo sofisticado y accesible, sus colecciones anuales promueven una moda ética y circular. Erroz ha sido pionero en tender puentes entre la moda y la tecnología, colaborando con Xiaomi en la Smart Band 8 Pro, y diseñó la carroza personalizada de Air Europa para el desfile del Orgullo de Madrid en 2024.',
      en: 'Pablo Erroz is one of Spain\'s most promising fashion designers and a highly influential voice in contemporary Spanish fashion. Born in Palma de Mallorca and trained in Barcelona, he launched his unisex and timeless luxury label in 2010 after gaining extensive outerwear and leather experience with Inditex. Fusing street style with sophisticated luxury, his annual collections promote ethical and circular fashion. Erroz has pioneered bridges between fashion and tech, collaborating with Xiaomi on the Smart Band 8 Pro, and designed the customized Air Europa float for the Madrid Pride parade in 2024.'
    },
    gallery: [
      '/pablo-erroz.jpg'
    ],
    stats: {
      es: { 'Profesión': 'Diseñador de Moda', 'Experiencia': 'Diseño unisex y circular', 'Destacado': 'Colaboraciones con Xiaomi, Air Europa, Montblanc' },
      en: { 'Profession': 'Fashion Designer', 'Experience': 'Unisex & circular design', 'Notable': 'Xiaomi, Air Europa, Montblanc collaborations' }
    },
    projects: [
      { title: { es: 'Personalización de Carroza LGTBIQ+ de Air Europa', en: 'Air Europa LGTBIQ+ Float Customization' }, year: '2024' },
      { title: { es: 'Colaboración Xiaomi Smart Band 8 Pro', en: 'Xiaomi Smart Band 8 Pro Collaboration' }, year: '2023-2024' },
      { title: { es: 'Lanzamiento de Colecciones de Lujo Atemporales', en: 'Annual Unisex Luxury Collection Launches' }, year: '2010-2026' }
    ]
  }
];
