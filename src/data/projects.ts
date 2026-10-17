export interface Project {
  id: number;
  title: { es: string; en: string };
  client: string;
  talent?: string;
  year: string;
  description: { es: string; en: string };
  image: string;
  images: string[];
  videoUrl?: string;
  videoLinks?: { label: { es: string; en: string }; url: string }[];
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
    image: '/sepiia-1.jpg',
    images: [
      '/sepiia-1.jpg',
      '/sepiia-2.jpg',
      '/sepiia-3.jpg',
      '/sepiia-4.jpg'
    ]
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
    image: '/infecar-1.jpg',
    images: [
      '/infecar-1.jpg',
      '/infecar-2.jpg'
    ]
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
    image: '/cegid-1.jpg',
    images: [
      '/cegid-1.jpg',
      '/cegid-2.jpg',
      '/cegid-3.jpg',
      '/cegid-4.jpg'
    ]
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
  },
  {
    id: 12,
    title: { es: 'Fotos por Patrick Schuttler', en: 'Photos by Patrick Schuttler' },
    client: 'Patrick Schuttler',
    talent: 'Andrea Tivadar',
    year: '2024',
    description: {
      es: 'Fotos de Andrea Tivadar por Patrick Schuttler.',
      en: 'Photos of Andrea Tivadar by Patrick Schuttler.'
    },
    image: '/wp-content/uploads/2025/12/IMG_3074.jpg',
    images: [
      '/wp-content/uploads/2025/12/IMG_3074.jpg',
      '/wp-content/uploads/2025/12/IMG_3075.jpg'
    ]
  },
  {
    id: 13,
    title: { es: 'Patrocinio Festival Mayrit Madrid', en: 'Mayrit Madrid Festival Sponsorship' },
    client: 'Festival Mayrit Madrid',
    talent: 'Fevertree',
    year: '2024',
    description: {
      es: 'Patrocinio de Fevertree para el festival de Diseño y Mobiliario Mayrit en Madrid.',
      en: 'Fevertree sponsorship for the Mayrit Design and Furniture Festival in Madrid.'
    },
    image: '/wp-content/uploads/2025/12/IMG_3070.jpg',
    images: [
      '/wp-content/uploads/2025/12/IMG_3070.jpg',
      '/wp-content/uploads/2025/12/IMG_3069.jpg'
    ]
  },
  {
    id: 14,
    title: { es: 'Desigual', en: 'Desigual' },
    client: 'Desigual',
    talent: 'Zumos Linda',
    year: '2024',
    description: {
      es: 'Zumos Linda para Desigual.',
      en: 'Zumos Linda for Desigual.'
    },
    image: '/wp-content/uploads/2025/12/LINDA.jpg',
    images: ['/wp-content/uploads/2025/12/LINDA.jpg']
  },
  {
    id: 15,
    title: { es: 'Moët & Chandon y Zumos Linda', en: 'Moët & Chandon and Zumos Linda' },
    client: 'Moët & Chandon / Zumos Linda',
    talent: 'Ana Fernández',
    year: '2024',
    description: {
      es: 'Bonawa (barco de la actriz Ana Fernández) para Moët & Chandon y Zumos Linda.',
      en: 'Bonawa (actress Ana Fernández’s boat) for Moët & Chandon and Zumos Linda.'
    },
    image: '/wp-content/uploads/2026/01/Moet.png',
    images: [
      '/wp-content/uploads/2026/01/Moet.png',
      '/wp-content/uploads/2026/01/Linda.png'
    ]
  },
  {
    id: 16,
    title: { es: "Chloe's Clue", en: "Chloe's Clue" },
    client: 'Caudalie Menorca',
    talent: 'Caudalie',
    year: '2024',
    description: {
      es: "La escénica campaña editorial 'Chloe's Clue' creada para la marca de cosmética de lujo francesa Caudalie en la naturaleza virgen de Menorca. Una fusión de belleza limpia y orgánica, luz solar y elementos mediterráneos.",
      en: "The scenic 'Chloe's Clue' editorial campaign created for French luxury skincare brand Caudalie in the pristine nature of Menorca. A fusion of clean, organic beauty, sunlight, and Mediterranean elements."
    },
    image: '/caudile 3.jpg',
    images: [
      '/caudile 3.jpg',
      '/Caudile1.jpg',
      '/caudile2.jpg'
    ]
  },
  {
    id: 17,
    title: { es: 'Fashion Day', en: 'Fashion Day' },
    client: 'Juno House Club',
    talent: 'Juno House',
    year: '2024',
    description: {
      es: 'Coordinación a medida y activación de invitados para el exclusivo Fashion Day celebrado en Juno House Club en Barcelona. Conectando marcas de moda ética, diseñadores y creadores premium dentro de un entorno creativo curado.',
      en: 'Bespoke coordination and selective guest activation for the exclusive Fashion Day hosted at Juno House Club in Barcelona. Connecting ethical fashion brands, designers, and premium creators inside a curated creative environment.'
    },
    image: '/Juno 2.jpg',
    images: [
      '/juno 1.jpg',
      '/Juno 2.jpg',
      '/juno 3.jpg'
    ]
  },
  {
    id: 18,
    title: { es: 'Lío Mallorca', en: 'Lío Mallorca' },
    client: 'Lío Mallorca',
    talent: 'Abraham García',
    year: '2024',
    description: {
      es: 'Abraham García para Lío Mallorca.',
      en: 'Abraham García for Lío Mallorca.'
    },
    image: '/wp-content/uploads/2026/01/Lio-1.png',
    images: [
      '/wp-content/uploads/2026/01/Lio-1.png',
      '/wp-content/uploads/2026/01/Lio-2.png'
    ]
  },
  {
    id: 19,
    title: { es: 'IMAGIN (La Caixa)', en: 'IMAGIN (La Caixa)' },
    client: 'IMAGIN (La Caixa)',
    talent: 'Valeria Vegas',
    year: '2024',
    description: {
      es: 'Valeria Vegas para IMAGIN (La Caixa) — Visiones Creativas.',
      en: 'Valeria Vegas for IMAGIN (La Caixa) — Creative Visions.'
    },
    image: '/Talents/JVV _ VALERIA VEGAS/imgi_5_Valeria4325.jpg',
    images: ['/Talents/JVV _ VALERIA VEGAS/imgi_5_Valeria4325.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=3NqkSXQG1og'
  },
  {
    id: 20,
    title: { es: 'Editorial & Entrevista Neo2', en: 'Editorial & Interview Neo2' },
    client: 'Neo2 Magazine',
    talent: 'Andrea Tivadar',
    year: '2024',
    description: {
      es: 'Editorial exclusiva y entrevista en profundidad en la prestigiosa revista Neo2 Magazine con la actriz y modelo Andrea Tivadar. Un ensayo visual de alta moda que captura la estética y el estilo contemporáneos.',
      en: 'Exclusive editorial and in-depth interview in the prestigious Neo2 Magazine featuring actress and model Andrea Tivadar. A high-fashion visual essay capturing contemporary aesthetics and style statements.'
    },
    image: '/Andrea 3.jpg',
    images: [
      '/Andrea.jpg',
      '/Andrea 2.jpg',
      '/Andrea 3.jpg'
    ]
  },
  {
    id: 21,
    title: { es: 'Sage', en: 'Sage' },
    client: 'Sage',
    talent: 'Yaiza Canosa',
    year: '2024',
    description: {
      es: 'Yaiza Canosa para Sage.',
      en: 'Yaiza Canosa for Sage.'
    },
    image: '/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg',
    images: [
      '/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg',
      '/wp-content/uploads/2025/12/A0153E3D-DBC0-4CB7-AB14-E7EDCF8EB4AB.png'
    ]
  },
  {
    id: 22,
    title: { es: 'Disaronno', en: 'Disaronno' },
    client: 'Disaronno',
    talent: 'Abraham García',
    year: '2024',
    description: {
      es: 'Abraham García para Disaronno.',
      en: 'Abraham García for Disaronno.'
    },
    image: '/wp-content/uploads/2026/01/Disaronno-1.png',
    images: [
      '/wp-content/uploads/2026/01/Disaronno-1.png',
      '/wp-content/uploads/2026/01/Disaronno-2.png'
    ]
  },
  {
    id: 23,
    title: { es: "Levi's y Vespa", en: "Levi's and Vespa" },
    client: "Levi's & Vespa",
    talent: 'Mery Miles',
    year: '2024',
    description: {
      es: "Mery Miles para Levi's y Vespa.",
      en: "Mery Miles for Levi's and Vespa."
    },
    image: '/wp-content/uploads/2026/01/Levis.png',
    images: ['/wp-content/uploads/2026/01/Levis.png']
  },
  {
    id: 24,
    title: { es: 'Vogue Hong Kong', en: 'Vogue Hong Kong' },
    client: 'Vogue Hong Kong',
    talent: 'Alex de la Croix',
    year: '2024',
    description: {
      es: 'Alex de la Croix para Vogue Hong Kong.',
      en: 'Alex de la Croix for Vogue Hong Kong.'
    },
    image: '/wp-content/uploads/2026/01/Vogue-HK1.png',
    images: [
      '/wp-content/uploads/2026/01/Vogue-HK1.png',
      '/wp-content/uploads/2026/01/Vogue-HK2.png'
    ]
  },
  {
    id: 25,
    title: { es: 'Desfile Out of the Closet W Ibiza', en: 'Out of the Closet Show at W Ibiza' },
    client: 'W Ibiza',
    talent: 'Rocío Saiz',
    year: '2024',
    description: {
      es: 'Rocío Saiz presentadora para el desfile "Out of the Closet" en el hotel W Ibiza.',
      en: 'Rocío Saiz as host for the "Out of the Closet" fashion show at W Ibiza hotel.'
    },
    image: '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg',
    images: [
      '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg',
      '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-28.jpg'
    ]
  },
  {
    id: 26,
    title: { es: 'Proyecto Mastercard', en: 'Mastercard Project' },
    client: 'Mastercard',
    talent: 'Valeria Vegas',
    year: '2024',
    description: {
      es: 'Proyecto Mastercard con Valeria Vegas.',
      en: 'Mastercard project featuring Valeria Vegas.'
    },
    image: '/Talents/JVV _ VALERIA VEGAS/imgi_4_VALERIA-VEGAS-scaled.jpg',
    images: ['/Talents/JVV _ VALERIA VEGAS/imgi_4_VALERIA-VEGAS-scaled.jpg'],
    videoUrl: 'https://www.facebook.com/jvv.pr/videos/513497697623111/'
  },
  {
    id: 27,
    title: { es: 'Meta futuro de laSexta', en: 'laSexta Meta Futuro' },
    client: 'laSexta',
    talent: 'Yaiza Canosa',
    year: '2024',
    description: {
      es: 'Yaiza Canosa para Meta futuro de laSexta.',
      en: 'Yaiza Canosa for laSexta Meta Futuro.'
    },
    image: '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg',
    images: [
      '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg',
      '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36-1.jpeg'
    ]
  },
  {
    id: 28,
    title: { es: 'Antonio Riva Milano', en: 'Antonio Riva Milano' },
    client: 'Antonio Riva Milano',
    talent: 'Andrea Tivadar y Paloma López',
    year: '2024',
    description: {
      es: 'Andrea Tivadar y Paloma López para Antonio Riva Milano en Gala Bridal Barcelona.',
      en: 'Andrea Tivadar and Paloma López for Antonio Riva Milano at Barcelona Bridal Gala.'
    },
    image: '/wp-content/uploads/2026/01/Bridal-1.jpg',
    images: [
      '/wp-content/uploads/2026/01/Bridal-1.jpg',
      '/wp-content/uploads/2026/01/Bridal-2.jpg'
    ]
  },
  {
    id: 29,
    title: { es: 'Videos Amazon Prime', en: 'Amazon Prime Videos' },
    client: 'Amazon Prime Video',
    talent: 'Alex de la Croix',
    year: '2024',
    description: {
      es: 'Videos de Amazon Prime con Alex de la Croix e invitades (Yolanda Ramos, Miren Ibarguren y La Terremoto de Alcorcón).',
      en: 'Amazon Prime Videos featuring Alex de la Croix and special guests (Yolanda Ramos, Miren Ibarguren, and La Terremoto de Alcorcón).'
    },
    image: '/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg',
    images: ['/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=0zeGOpYVQQw',
    videoLinks: [
      {
        label: { es: 'Ver Video 1 — Yolanda Ramos', en: 'Watch Video 1 — Yolanda Ramos' },
        url: 'https://www.youtube.com/watch?v=0zeGOpYVQQw'
      },
      {
        label: { es: 'Ver Video 2 — Miren Ibarguren', en: 'Watch Video 2 — Miren Ibarguren' },
        url: 'https://www.youtube.com/watch?v=3CmwQCNfo1Q'
      },
      {
        label: { es: 'Ver Video 3 — La Terremoto', en: 'Watch Video 3 — La Terremoto' },
        url: 'https://www.youtube.com/watch?v=lGkURikIdzI'
      }
    ]
  },
  {
    id: 30,
    title: { es: 'Embajadores Armani Exchange', en: 'Armani Exchange Ambassadors' },
    client: 'Armani Exchange',
    talent: 'Sandra Delaporte y Joan Pedrola',
    year: '2024',
    description: {
      es: 'Sandra Delaporte y Joan Pedrola, embajadores de Armani Exchange para España y Portugal.',
      en: 'Sandra Delaporte and Joan Pedrola, Armani Exchange ambassadors for Spain and Portugal.'
    },
    image: '/wp-content/uploads/2025/12/AX_ALTA_delaporte02.jpg',
    images: [
      '/wp-content/uploads/2025/12/AX_ALTA_delaporte02.jpg',
      '/wp-content/uploads/2025/12/AX_ALTA_17-joan-pedrola.jpg'
    ]
  },
  {
    id: 31,
    title: { es: 'Director Máster LCI Barcelona', en: 'LCI Barcelona Master Director' },
    client: 'LCI Barcelona',
    talent: 'Jesús Vázquez Viedma',
    year: '2024',
    description: {
      es: 'Jesús Vázquez Viedma — Director de Máster de Comunicación, Marketing y Producción de Eventos de Moda en el LCI de Barcelona.',
      en: 'Jesús Vázquez Viedma — Director of the Master in Fashion Communication, Marketing and Event Production at LCI Barcelona.'
    },
    image: '/wp-content/uploads/2025/12/unnamed-2.jpg',
    images: [
      '/wp-content/uploads/2025/12/unnamed-2.jpg',
      '/wp-content/uploads/2026/01/LCI-1.png'
    ]
  },
  {
    id: 32,
    title: { es: 'AD', en: 'AD' },
    client: 'Architectural Digest (AD)',
    talent: 'Verbena Studio',
    year: '2024',
    description: {
      es: 'Verbena Studio para AD.',
      en: 'Verbena Studio for AD.'
    },
    image: '/wp-content/uploads/2026/01/Untitled.png',
    images: [
      '/wp-content/uploads/2026/01/Untitled.png',
      '/wp-content/uploads/2026/01/Verbena-2.png'
    ]
  },
  {
    id: 33,
    title: { es: 'Volkswagen', en: 'Volkswagen' },
    client: 'Volkswagen',
    talent: 'Carla Cervantes',
    year: '2024',
    description: {
      es: 'Carla Cervantes para Volkswagen.',
      en: 'Carla Cervantes for Volkswagen.'
    },
    image: '/wp-content/uploads/2026/01/VW-1.png',
    images: [
      '/wp-content/uploads/2026/01/VW-1.png',
      '/wp-content/uploads/2026/01/VW-2.png'
    ]
  },
  {
    id: 34,
    title: { es: 'Portada Yodona', en: 'Yodona Cover' },
    client: 'Yo Dona',
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: 'Portada de Julia de Castro para Yodona.',
      en: 'Julia de Castro cover for Yodona.'
    },
    image: '/wp-content/uploads/2025/12/unnamed-1.jpg',
    images: ['/wp-content/uploads/2025/12/unnamed-1.jpg']
  },
  {
    id: 35,
    title: { es: 'J&B', en: 'J&B' },
    client: 'J&B',
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: 'Julia de Castro para J&B.',
      en: 'Julia de Castro for J&B.'
    },
    image: '/wp-content/uploads/2026/01/JB-2.png',
    images: [
      '/wp-content/uploads/2026/01/JB-2.png',
      '/wp-content/uploads/2026/01/JB-3.png'
    ]
  },
  {
    id: 36,
    title: { es: 'Oysho', en: 'Oysho' },
    client: 'Oysho',
    talent: 'Carla Cervantes y Sandra Egido',
    year: '2024',
    description: {
      es: 'Carla Cervantes y Sandra Egido para Oysho.',
      en: 'Carla Cervantes and Sandra Egido for Oysho.'
    },
    image: '/wp-content/uploads/2026/01/Oysho-1.png',
    images: [
      '/wp-content/uploads/2026/01/Oysho-1.png',
      '/wp-content/uploads/2026/01/Oysho-2.png'
    ]
  },
  {
    id: 37,
    title: { es: 'H&M y Moschino', en: 'H&M and Moschino' },
    client: 'H&M × Moschino',
    talent: 'Adriana Gastellum y Jon Morales',
    year: '2024',
    description: {
      es: 'Adriana Gastellum y Jon Morales para H&M y Moschino.',
      en: 'Adriana Gastellum and Jon Morales for H&M and Moschino.'
    },
    image: '/wp-content/uploads/2026/01/HM-1.png',
    images: [
      '/wp-content/uploads/2026/01/HM-1.png',
      '/wp-content/uploads/2026/01/HM-2.png'
    ]
  },
  {
    id: 38,
    title: { es: 'Volvo', en: 'Volvo' },
    client: 'Volvo',
    talent: 'Jose Lamuño',
    year: '2024',
    description: {
      es: 'Jose Lamuño para Volvo.',
      en: 'Jose Lamuño for Volvo.'
    },
    image: '/wp-content/uploads/2026/01/Volvo-1.png',
    images: [
      '/wp-content/uploads/2026/01/Volvo-1.png',
      '/wp-content/uploads/2026/01/Volvo-2.png'
    ]
  },
  {
    id: 39,
    title: { es: 'Cozarllado', en: 'Cozarllado' },
    client: 'Cozarllado',
    talent: 'Carla Cervantes',
    year: '2024',
    description: {
      es: 'Carla Cervantes por Cozarllado.',
      en: 'Carla Cervantes by Cozarllado.'
    },
    image: '/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png',
    images: ['/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png']
  },
  {
    id: 40,
    title: { es: 'Aperol Spritz Mad Cool', en: 'Aperol Spritz Mad Cool' },
    client: 'Aperol Spritz',
    talent: 'Adriana Gastellum y Jose Lamuño',
    year: '2024',
    description: {
      es: 'Adriana Gastellum y Jose Lamuño para Aperol Spritz en Mad Cool.',
      en: 'Adriana Gastellum and Jose Lamuño for Aperol Spritz at Mad Cool.'
    },
    image: '/wp-content/uploads/2026/01/Aperol-1.png',
    images: [
      '/wp-content/uploads/2026/01/Aperol-1.png',
      '/wp-content/uploads/2026/01/Aperol-2.png'
    ]
  },
  {
    id: 41,
    title: { es: 'Emporio Armani Occhiali', en: 'Emporio Armani Occhiali' },
    client: 'Emporio Armani Occhiali',
    talent: 'Adriana Gastellum y Marco Llorente',
    year: '2024',
    description: {
      es: 'Adriana Gastellum y Marco Llorente para Emporio Armani Occhiali en Mad Cool.',
      en: 'Adriana Gastellum and Marco Llorente for Emporio Armani Occhiali at Mad Cool.'
    },
    image: '/wp-content/uploads/2026/01/Armani-1.png',
    images: [
      '/wp-content/uploads/2026/01/Armani-1.png',
      '/wp-content/uploads/2026/01/Armani-2.png'
    ]
  },
  {
    id: 42,
    title: { es: 'Schweppes', en: 'Schweppes' },
    client: 'Schweppes',
    talent: 'Jose Lamuño',
    year: '2024',
    description: {
      es: 'Jose Lamuño para Schweppes.',
      en: 'Jose Lamuño for Schweppes.'
    },
    image: '/wp-content/uploads/2026/01/Schweppes.png',
    images: [
      '/wp-content/uploads/2026/01/Schweppes.png',
      '/wp-content/uploads/2026/01/Schweppes-2.png'
    ]
  },
  {
    id: 43,
    title: { es: 'Zalando', en: 'Zalando' },
    client: 'Zalando',
    talent: 'Julia de Castro y Patricia Valley',
    year: '2024',
    description: {
      es: 'Julia de Castro y Patricia Valley para Zalando.',
      en: 'Julia de Castro and Patricia Valley for Zalando.'
    },
    image: '/wp-content/uploads/2026/01/Zalando-1.png',
    images: [
      '/wp-content/uploads/2026/01/Zalando-1.png',
      '/wp-content/uploads/2026/01/Zalando-2.png'
    ]
  },
  {
    id: 44,
    title: { es: 'Presentación Perfumes', en: 'Perfumes Presentation' },
    client: 'Bultaco',
    talent: 'Bultaco',
    year: '2024',
    description: {
      es: 'Presentación Bultaco Perfumes.',
      en: 'Bultaco Perfumes presentation.'
    },
    image: '/wp-content/uploads/2026/01/Bultaco-1.png',
    images: [
      '/wp-content/uploads/2026/01/Bultaco-1.png',
      '/wp-content/uploads/2026/01/Bultaco-3.png'
    ]
  },
  {
    id: 45,
    title: { es: 'Fashion for Lunch — Palomo Spain', en: 'Fashion for Lunch — Palomo Spain' },
    client: 'Soho House Barcelona',
    talent: 'Alejandro Gómez Palomo',
    year: '2024',
    description: {
      es: 'Fashion for Lunch con Alejandro Gómez Palomo en Soho House Barcelona.',
      en: 'Fashion for Lunch with Alejandro Gómez Palomo at Soho House Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Palomo-1.png',
    images: [
      '/wp-content/uploads/2026/01/Palomo-1.png',
      '/wp-content/uploads/2026/01/Palomo-2.png'
    ]
  },
  {
    id: 46,
    title: { es: 'Angel Schlesser', en: 'Angel Schlesser' },
    client: 'Angel Schlesser',
    talent: 'Palito Dominguín',
    year: '2024',
    description: {
      es: 'Palito Dominguín para Angel Schlesser.',
      en: 'Palito Dominguín for Angel Schlesser.'
    },
    image: '/wp-content/uploads/2026/01/Palito-1.png',
    images: [
      '/wp-content/uploads/2026/01/Palito-1.png',
      '/wp-content/uploads/2026/01/Palito-2.png'
    ]
  },
  {
    id: 47,
    title: { es: 'Fashion for Lunch — Juanjo Oliva', en: 'Fashion for Lunch — Juanjo Oliva' },
    client: 'Soho House Barcelona',
    talent: 'Juanjo Oliva',
    year: '2024',
    description: {
      es: 'Fashion for Lunch con Juanjo Oliva en Soho House Barcelona.',
      en: 'Fashion for Lunch with Juanjo Oliva at Soho House Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Juanjo-Oliva.png',
    images: ['/wp-content/uploads/2026/01/Juanjo-Oliva.png']
  },
  {
    id: 48,
    title: { es: 'Starlite Marbella', en: 'Starlite Marbella' },
    client: 'Starlite Marbella',
    talent: 'Cristina Castaño y Alejandra Prats',
    year: '2024',
    description: {
      es: 'Cristina Castaño y Alejandra Prats para Starlite Marbella.',
      en: 'Cristina Castaño and Alejandra Prats for Starlite Marbella.'
    },
    image: '/wp-content/uploads/2026/01/Cristina-Castano.png',
    images: [
      '/wp-content/uploads/2026/01/Cristina-Castano.png',
      '/wp-content/uploads/2026/01/Alejandra-Prats.png'
    ]
  },
  {
    id: 49,
    title: { es: 'Vogue', en: 'Vogue' },
    client: 'Vogue',
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: 'Julia de Castro para Vogue.',
      en: 'Julia de Castro for Vogue.'
    },
    image: '/wp-content/uploads/2026/01/Vogue.png',
    images: [
      '/wp-content/uploads/2026/01/Vogue.png',
      '/wp-content/uploads/2026/01/Vogue-2.png'
    ]
  },
  {
    id: 50,
    title: { es: "Harper's Bazaar", en: "Harper's Bazaar" },
    client: "Harper's Bazaar",
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: "Julia de Castro para Harper's Bazaar.",
      en: "Julia de Castro for Harper's Bazaar."
    },
    image: '/wp-content/uploads/2026/01/Harpers-Bazaar-1.png',
    images: [
      '/wp-content/uploads/2026/01/Harpers-Bazaar-1.png',
      '/wp-content/uploads/2026/01/Harpers-Bazaar-2.png'
    ]
  },
  {
    id: 51,
    title: { es: 'Bvlgari', en: 'Bvlgari' },
    client: 'Bvlgari',
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: 'Julia de Castro para Bvlgari.',
      en: 'Julia de Castro for Bvlgari.'
    },
    image: '/wp-content/uploads/2026/01/Bvlgari-1.png',
    images: [
      '/wp-content/uploads/2026/01/Bvlgari-1.png',
      '/wp-content/uploads/2026/01/Bvlgari-2.png'
    ]
  },
  {
    id: 52,
    title: { es: 'Dior Barcelona', en: 'Dior Barcelona' },
    client: 'Dior',
    talent: 'Patricia Valley',
    year: '2024',
    description: {
      es: 'Patricia Valley para Dior Barcelona.',
      en: 'Patricia Valley for Dior Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Dior-1.png',
    images: [
      '/wp-content/uploads/2026/01/Dior-1.png',
      '/wp-content/uploads/2026/01/Dior-2.png'
    ]
  },
  {
    id: 53,
    title: { es: 'San Isidro', en: 'San Isidro' },
    client: 'San Isidro (Madrid)',
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: 'Julia de Castro para San Isidro (Madrid).',
      en: 'Julia de Castro for San Isidro (Madrid).'
    },
    image: '/wp-content/uploads/2026/01/San-Isidro-1.png',
    images: [
      '/wp-content/uploads/2026/01/San-Isidro-1.png',
      '/wp-content/uploads/2026/01/San-Isidro-2.png'
    ]
  },
  {
    id: 54,
    title: { es: 'Jameson Whiskey', en: 'Jameson Whiskey' },
    client: 'Jameson Whiskey',
    talent: 'Andrea Vandall',
    year: '2024',
    description: {
      es: 'Andrea Vandall para Jameson Whiskey.',
      en: 'Andrea Vandall for Jameson Whiskey.'
    },
    image: '/wp-content/uploads/2026/01/Jameson.png',
    images: ['/wp-content/uploads/2026/01/Jameson.png']
  },
  {
    id: 55,
    title: { es: 'Convocatoria VIP Cha Cha', en: 'Cha Cha VIP Event' },
    client: 'Cha Cha',
    talent: 'Cha Cha',
    year: '2024',
    description: {
      es: 'Convocatoria VIP para Cha Cha.',
      en: 'VIP event call for Cha Cha.'
    },
    image: '/wp-content/uploads/2026/01/Cha-Cha-1.png',
    images: [
      '/wp-content/uploads/2026/01/Cha-Cha-1.png',
      '/wp-content/uploads/2026/01/Cha-Cha-2.png'
    ]
  },
  {
    id: 56,
    title: { es: "Hendrick's", en: "Hendrick's" },
    client: "Hendrick's",
    talent: 'Julia de Castro',
    year: '2024',
    description: {
      es: "Julia de Castro para Hendrick's.",
      en: "Julia de Castro for Hendrick's."
    },
    image: '/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png',
    images: ['/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png']
  },
  {
    id: 57,
    title: { es: 'Pop-up Store Lydia Delgado', en: 'Lydia Delgado Pop-up Store' },
    client: 'Lydia Delgado',
    talent: 'Lydia Delgado',
    year: '2024',
    description: {
      es: 'Pop-up Store Lydia Delgado.',
      en: 'Lydia Delgado Pop-up Store.'
    },
    image: '/wp-content/uploads/2026/01/Lydia-Delgado-1.png',
    images: [
      '/wp-content/uploads/2026/01/Lydia-Delgado-1.png',
      '/wp-content/uploads/2026/01/Lydia-Delgado-2.png'
    ]
  }
];
