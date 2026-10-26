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
    title: {
      es: 'Promoción documental Valeria Vegas x La Más Grande',
      en: 'Documentary promotion Valeria Vegas x La Más Grande'
    },
    client: 'Movistar Plus',
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
    title: {
      es: 'Ponente Yaiza Canosa',
      en: 'Speaker Yaiza Canosa'
    },
    client: 'Show Me The Money (Madrid)',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Yaiza Canosa como ponente en Show Me The Money en Madrid, el evento dedicado a finanzas, inversión y economía que reúne a expertos y líderes del sector.',
      en: 'Yaiza Canosa as a speaker at Show Me The Money in Madrid, the event dedicated to finance, investment, and economy that gathers experts and industry leaders.'
    },
    image: '/show-me-the-money-new.jpg',
    images: [
      '/show-me-the-money-new.jpg',
      '/show-the-money-2.jpg'
    ]
  },
  {
    id: 3,
    title: {
      es: 'Giorgio x Salone del Mobile Milano',
      en: 'Giorgio x Salone del Mobile Milano'
    },
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
    title: {
      es: 'Embajador Lorenzo Castillo y embajadora Yaiza Canosa',
      en: 'Ambassador Lorenzo Castillo and Ambassador Yaiza Canosa'
    },
    client: 'Sepiia',
    talent: 'Lorenzo Castillo, Yaiza Canosa',
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
    title: {
      es: 'Ponente Yaiza Canosa',
      en: 'Speaker Yaiza Canosa'
    },
    client: 'Infecar',
    talent: 'Yaiza Canosa',
    year: '2026',
    description: {
      es: 'Yaiza Canosa como ponente en el evento organizado por Infecar en Gran Canaria.',
      en: 'Yaiza Canosa as a speaker at the event organized by Infecar in Gran Canaria.'
    },
    image: '/infecar-1.jpg',
    images: [
      '/infecar-1.jpg',
      '/infecar-2.jpg'
    ]
  },
  {
    id: 6,
    title: {
      es: 'Embajadora Ana Julieta',
      en: 'Ambassador Ana Julieta'
    },
    client: 'ADIDAS ORIGINALS EYEWEAR',
    talent: 'Ana Julieta',
    year: '2025',
    description: {
      es: 'Colaboración entre Adidas Originals Eyewear y la DJ Ana Julieta para una acción de visibilidad de marca.',
      en: 'Collaboration between Adidas Originals Eyewear and DJ Ana Julieta for a brand visibility action.'
    },
    image: '/adidas-ana-julieta.jpg',
    images: ['/adidas-ana-julieta.jpg']
  },
  {
    id: 7,
    title: {
      es: 'Ponente Yaiza Canosa',
      en: 'Speaker Yaiza Canosa'
    },
    client: 'Marketing Rocks (Mallorca)',
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
    id: 58,
    title: {
      es: 'Ponente Jesús Vázquez Viedma',
      en: 'Speaker Jesús Vázquez Viedma'
    },
    client: 'Marketing Rocks (Mallorca)',
    talent: 'Jesús Vázquez Viedma',
    year: '2026',
    description: {
      es: 'Jesús Vázquez Viedma como ponente en Marketing Rocks en Mallorca.',
      en: 'Jesús Vázquez Viedma as a speaker at Marketing Rocks in Mallorca.'
    },
    image: '/marketing-rocks-jesus.jpg',
    images: ['/marketing-rocks-jesus.jpg']
  },
  {
    id: 8,
    title: {
      es: 'Yaiza Canosa',
      en: 'Yaiza Canosa'
    },
    client: 'Cegid (Málaga-Alicante)',
    talent: 'Yaiza Canosa',
    year: '2025',
    description: {
      es: 'Participación de Yaiza Canosa en el evento organizado por Cegid en Málaga y Alicante.',
      en: 'Participation of Yaiza Canosa in the event organized by Cegid in Málaga and Alicante.'
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
    id: 10,
    title: {
      es: 'Valeria Vegas x Mes Orgullo',
      en: 'Valeria Vegas x Pride Month'
    },
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
    id: 9,
    title: {
      es: 'Ponente Yaiza Canosa',
      en: 'Speaker Yaiza Canosa'
    },
    client: 'Woman Rocks (Madrid)',
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
    id: 11,
    title: {
      es: 'Sara Matos x Punto Nemo',
      en: 'Sara Matos x Punto Nemo'
    },
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
    id: 20,
    title: {
      es: 'Andrea Tivadar',
      en: 'Andrea Tivadar'
    },
    client: 'NEO2',
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
    id: 12,
    title: {
      es: 'Andrea Tivadar',
      en: 'Andrea Tivadar'
    },
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
    title: {
      es: 'Patrocinio Festival Mayrit',
      en: 'Mayrit Festival Sponsorship'
    },
    client: 'Fevertree (Madrid)',
    talent: 'Fevertree',
    year: '2024',
    description: {
      es: 'Patrocinio de Fevertree para el festival de Diseño y Mobiliario Mayrit en Madrid.',
      en: 'Fevertree sponsorship for the Mayrit Design and Furniture Festival in Madrid.'
    },
    image: '/fevertree-mayrit-mesa.jpg',
    images: [
      '/fevertree-mayrit-mesa.jpg',
      '/fevertree-mayrit-bar.jpg'
    ]
  },
  {
    id: 14,
    title: {
      es: 'Zumos Linda + Desigual',
      en: 'Zumos Linda + Desigual'
    },
    client: 'Zumos Linda + Desigual',
    talent: 'Zumos Linda',
    year: '2021',
    description: {
      es: 'Zumos Linda para Desigual.',
      en: 'Zumos Linda for Desigual.'
    },
    image: '/desigual-linda-new.jpg',
    images: [
      '/desigual-linda-new.jpg',
      '/wp-content/uploads/2025/12/LINDA.jpg'
    ]
  },
  {
    id: 15,
    title: {
      es: 'Patrocinio Barco Bonawa',
      en: 'Bonawa Boat Sponsorship'
    },
    client: 'Moët Chandon y Zumos Linda (Islas Baleares)',
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
    title: {
      es: "Actuación Chloé's Clue",
      en: "Performance Chloé's Clue"
    },
    client: 'Caudalie',
    talent: "Chloé's Clue",
    year: '2024',
    description: {
      es: "Actuación y campaña editorial con Chloé's Clue para la marca de cosmética francesa Caudalie en la naturaleza virgen de Menorca.",
      en: "Performance and scenic editorial campaign with Chloé's Clue for French skincare brand Caudalie in the pristine nature of Menorca."
    },
    image: '/caudile 3.jpg',
    images: [
      '/caudile 3.jpg',
      '/caudalie-chloe-new.jpg',
      '/Caudile1.jpg',
      '/caudile2.jpg'
    ]
  },
  {
    id: 17,
    title: {
      es: 'Fashion Day',
      en: 'Fashion Day'
    },
    client: 'Juno House',
    talent: 'Juno House',
    year: '2023',
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
    title: {
      es: 'Abraham García',
      en: 'Abraham García'
    },
    client: 'Lio Mallorca',
    talent: 'Abraham García',
    year: '2023',
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
    title: {
      es: 'Ponente Valeria Vegas',
      en: 'Speaker Valeria Vegas'
    },
    client: 'Imagine La Caixa',
    talent: 'Valeria Vegas',
    year: '2023',
    description: {
      es: 'Valeria Vegas como ponente para Imagine (La Caixa) — Visiones Creativas.',
      en: 'Valeria Vegas as a speaker for Imagine (La Caixa) — Creative Visions.'
    },
    image: '/Talents/JVV _ VALERIA VEGAS/imgi_5_Valeria4325.jpg',
    images: ['/Talents/JVV _ VALERIA VEGAS/imgi_5_Valeria4325.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=3NqkSXQG1og'
  },
  {
    id: 21,
    title: {
      es: 'Ponente Yaiza Canosa',
      en: 'Speaker Yaiza Canosa'
    },
    client: 'Sage',
    talent: 'Yaiza Canosa',
    year: '2023',
    description: {
      es: 'Yaiza Canosa como ponente para Sage.',
      en: 'Yaiza Canosa as a speaker for Sage.'
    },
    image: '/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg',
    images: [
      '/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg',
      '/wp-content/uploads/2025/12/A0153E3D-DBC0-4CB7-AB14-E7EDCF8EB4AB.png'
    ]
  },
  {
    id: 22,
    title: {
      es: 'Abraham García',
      en: 'Abraham García'
    },
    client: 'Disaronno',
    talent: 'Abraham García',
    year: '2023',
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
    title: {
      es: 'Actuación de Mery Myles en Casa Levis Madrid',
      en: 'Mery Myles performance at Casa Levis Madrid'
    },
    client: 'Levis',
    talent: 'Mery Myles',
    year: '2022',
    description: {
      es: 'Actuación de Mery Myles en Casa Levis Madrid.',
      en: 'Mery Myles performance at Casa Levis Madrid.'
    },
    image: '/wp-content/uploads/2026/01/Levis.png',
    images: ['/wp-content/uploads/2026/01/Levis.png']
  },
  {
    id: 59,
    title: {
      es: 'Participación Mery Myles y ganadora del premio',
      en: 'Mery Myles participation and award winner'
    },
    client: 'Concurso Vespa',
    talent: 'Mery Myles',
    year: '2022',
    description: {
      es: 'Participación de Mery Myles en el Concurso Vespa, resultando ganadora del premio.',
      en: 'Participation of Mery Myles in the Vespa Contest, winning the award.'
    },
    image: '/vespa-mery-1.jpg',
    images: [
      '/vespa-mery-1.jpg',
      '/vespa-mery-2.jpg'
    ],
    videoUrl: '/wp-content/uploads/2026/01/Vespa.mp4'
  },
  {
    id: 24,
    title: {
      es: 'Entrevista y editorial de moda Alex de la Croix',
      en: 'Fashion interview and editorial Alex de la Croix'
    },
    client: 'Vogue',
    talent: 'Alex de la Croix',
    year: '2022',
    description: {
      es: 'Entrevista y editorial de moda con Alex de la Croix para Vogue Hong Kong.',
      en: 'Fashion interview and editorial with Alex de la Croix for Vogue Hong Kong.'
    },
    image: '/wp-content/uploads/2026/01/Vogue-HK1.png',
    images: [
      '/wp-content/uploads/2026/01/Vogue-HK1.png',
      '/wp-content/uploads/2026/01/Vogue-HK2.png'
    ]
  },
  {
    id: 25,
    title: {
      es: 'Presentación del desfile outdoor The Closet — Rocío Saiz',
      en: 'Host of the outdoor fashion show The Closet — Rocío Saiz'
    },
    client: 'W Ibiza',
    talent: 'Rocío Saiz',
    year: '2022',
    description: {
      es: 'Rocío Saiz presentadora para el desfile outdoor "The Closet" en el hotel W Ibiza.',
      en: 'Rocío Saiz as host for the outdoor fashion show "The Closet" at W Ibiza hotel.'
    },
    image: '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg',
    images: [
      '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg',
      '/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-28.jpg'
    ]
  },
  {
    id: 26,
    title: {
      es: 'Valeria Vegas embajadora de proyecto',
      en: 'Valeria Vegas project ambassador'
    },
    client: 'Mastercard',
    talent: 'Valeria Vegas',
    year: '2023',
    description: {
      es: 'Valeria Vegas embajadora de proyecto para Mastercard.',
      en: 'Valeria Vegas as project ambassador for Mastercard.'
    },
    image: '/Talents/JVV _ VALERIA VEGAS/imgi_4_VALERIA-VEGAS-scaled.jpg',
    images: ['/Talents/JVV _ VALERIA VEGAS/imgi_4_VALERIA-VEGAS-scaled.jpg'],
    videoUrl: 'https://www.facebook.com/jvv.pr/videos/513497697623111/'
  },
  {
    id: 27,
    title: {
      es: 'Yaiza Canosa participante de Metafuturo',
      en: 'Yaiza Canosa participant in Metafuturo'
    },
    client: 'La Sexta',
    talent: 'Yaiza Canosa',
    year: '2022',
    description: {
      es: 'Yaiza Canosa participante de Metafuturo de La Sexta.',
      en: 'Yaiza Canosa participant in La Sexta Metafuturo.'
    },
    image: '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg',
    images: [
      '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg',
      '/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36-1.jpeg'
    ]
  },
  {
    id: 28,
    title: {
      es: 'Andrea Tivadar y Paloma López embajadora Gala Bridal Barcelona',
      en: 'Andrea Tivadar and Paloma López ambassadors Gala Bridal Barcelona'
    },
    client: 'Antonio Riva Milano',
    talent: 'Andrea Tivadar y Paloma López',
    year: '2021',
    description: {
      es: 'Andrea Tivadar y Paloma López embajadoras para Antonio Riva Milano en Gala Bridal Barcelona.',
      en: 'Andrea Tivadar and Paloma López ambassadors for Antonio Riva Milano at Gala Bridal Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Bridal-1.jpg',
    images: [
      '/wp-content/uploads/2026/01/Bridal-1.jpg',
      '/wp-content/uploads/2026/01/Bridal-2.jpg'
    ]
  },
  {
    id: 29,
    title: {
      es: 'Promoción Aesthetics x Alex de la Croix',
      en: 'Aesthetics promotion x Alex de la Croix'
    },
    client: 'Amazon Prime',
    talent: 'Alex de la Croix',
    year: '2021',
    description: {
      es: 'Videos de Amazon Prime con Alex de la Croix e invitadas (Yolanda Ramos, Miren Ibarguren y La Terremoto de Alcorcón).',
      en: 'Amazon Prime Videos featuring Alex de la Croix and special guests (Yolanda Ramos, Miren Ibarguren, and La Terremoto de Alcorcón).'
    },
    image: '/amazon-prime-alex-new.jpg',
    images: ['/amazon-prime-alex-new.jpg'],
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
    title: {
      es: 'Embajadora Sandra Delaporte - Embajador Joan Pedrola',
      en: 'Ambassador Sandra Delaporte - Ambassador Joan Pedrola'
    },
    client: 'Armani Exchange',
    talent: 'Sandra Delaporte y Joan Pedrola',
    year: '2021',
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
    title: {
      es: 'Jesús Vázquez Viedma director de máster',
      en: "Jesús Vázquez Viedma Master's Director"
    },
    client: 'LCI Barcelona',
    talent: 'Jesús Vázquez Viedma',
    year: '2020-2024',
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
    title: {
      es: 'Mesa de domingo x Verbena Studio',
      en: 'Sunday Table x Verbena Studio'
    },
    client: 'AD',
    talent: 'Verbena Studio',
    year: '2021',
    description: {
      es: 'Mesa de domingo por Verbena Studio para AD.',
      en: 'Sunday Table by Verbena Studio for AD.'
    },
    image: '/wp-content/uploads/2026/01/Untitled.png',
    images: [
      '/wp-content/uploads/2026/01/Untitled.png',
      '/wp-content/uploads/2026/01/Verbena-2.png'
    ]
  },
  {
    id: 33,
    title: {
      es: 'Ponente Carla Cervantes',
      en: 'Speaker Carla Cervantes'
    },
    client: 'VOLKSWAGEN',
    talent: 'Carla Cervantes',
    year: '2019',
    description: {
      es: 'Carla Cervantes como ponente para Volkswagen.',
      en: 'Carla Cervantes as a speaker for Volkswagen.'
    },
    image: '/wp-content/uploads/2026/01/VW-1.png',
    images: [
      '/wp-content/uploads/2026/01/VW-1.png',
      '/wp-content/uploads/2026/01/VW-2.png'
    ]
  },
  {
    id: 34,
    title: {
      es: 'Portada Julia de Castro',
      en: 'Cover Julia de Castro'
    },
    client: 'Yo Dona',
    talent: 'Julia de Castro',
    year: '2020',
    description: {
      es: 'Portada de Julia de Castro para Yo Dona.',
      en: 'Julia de Castro cover for Yo Dona.'
    },
    image: '/wp-content/uploads/2025/12/unnamed-1.jpg',
    images: ['/wp-content/uploads/2025/12/unnamed-1.jpg']
  },
  {
    id: 35,
    title: {
      es: 'Julia de Castro presentadora ‘De Repente’',
      en: 'Julia de Castro host of ‘De Repente’'
    },
    client: '‘De Repente’',
    talent: 'Julia de Castro',
    year: '2019',
    description: {
      es: 'Julia co presentadora junto con Brays Efe de ‘De Repente’.',
      en: 'Julia co-host alongside Brays Efe of ‘De Repente’.'
    },
    image: '/wp-content/uploads/2026/01/JB-2.png',
    images: [
      '/wp-content/uploads/2026/01/JB-2.png',
      '/wp-content/uploads/2026/01/JB-3.png'
    ]
  },
  {
    id: 36,
    title: {
      es: 'Spot con Carla Cervantes y Sandra Egido',
      en: 'Spot with Carla Cervantes and Sandra Egido'
    },
    client: 'Oysho',
    talent: 'Carla Cervantes y Sandra Egido',
    year: '2019',
    description: {
      es: 'Spot de Oysho con Carla Cervantes y Sandra Egido.',
      en: 'Oysho spot featuring Carla Cervantes and Sandra Egido.'
    },
    image: '/wp-content/uploads/2026/01/Oysho-1.png',
    images: [
      '/wp-content/uploads/2026/01/Oysho-1.png',
      '/wp-content/uploads/2026/01/Oysho-2.png'
    ]
  },
  {
    id: 60,
    title: {
      es: 'Natty Peluso Portada',
      en: 'Natty Peluso Cover'
    },
    client: 'Revista Mine',
    talent: 'Natty Peluso',
    year: '2019',
    description: {
      es: 'Portada de Natty Peluso para Revista Mine.',
      en: 'Natty Peluso cover for Revista Mine.'
    },
    image: '/revista-mine-nathy.jpg',
    images: ['/revista-mine-nathy.jpg']
  },
  {
    id: 37,
    title: {
      es: 'Embajadora Adriana Gastellum y embajador Jon Morales',
      en: 'Ambassador Adriana Gastellum and Ambassador Jon Morales'
    },
    client: 'H&M Moschino',
    talent: 'Adriana Gastellum y Jon Morales',
    year: '2018',
    description: {
      es: 'Adriana Gastellum y Jon Morales embajadores para H&M Moschino.',
      en: 'Adriana Gastellum and Jon Morales ambassadors for H&M Moschino.'
    },
    image: '/wp-content/uploads/2026/01/HM-1.png',
    images: [
      '/wp-content/uploads/2026/01/HM-1.png',
      '/wp-content/uploads/2026/01/HM-2.png'
    ]
  },
  {
    id: 38,
    title: {
      es: 'Embajador José Lamuño',
      en: 'Ambassador José Lamuño'
    },
    client: 'Volvo',
    talent: 'José Lamuño',
    year: '2018',
    description: {
      es: 'José Lamuño embajador para Volvo.',
      en: 'José Lamuño ambassador for Volvo.'
    },
    image: '/wp-content/uploads/2026/01/Volvo-1.png',
    images: [
      '/wp-content/uploads/2026/01/Volvo-1.png',
      '/wp-content/uploads/2026/01/Volvo-2.png'
    ]
  },
  {
    id: 39,
    title: {
      es: 'Embajadora Carla Cervantes',
      en: 'Ambassador Carla Cervantes'
    },
    client: 'COZARLLADO',
    talent: 'Carla Cervantes',
    year: '2018',
    description: {
      es: 'Carla Cervantes embajadora por COZARLLADO.',
      en: 'Carla Cervantes ambassador by COZARLLADO.'
    },
    image: '/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png',
    images: ['/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png']
  },
  {
    id: 40,
    title: {
      es: 'Embajadora Adriana Gastellum - embajador x Mad Cool festival',
      en: 'Ambassador Adriana Gastellum - Ambassador x Mad Cool festival'
    },
    client: 'Aperol Spritz',
    talent: 'Adriana Gastellum y José Lamuño',
    year: '2018',
    description: {
      es: 'Adriana Gastellum y José Lamuño para Aperol Spritz en Mad Cool festival.',
      en: 'Adriana Gastellum and José Lamuño for Aperol Spritz at Mad Cool festival.'
    },
    image: '/wp-content/uploads/2026/01/Aperol-1.png',
    images: [
      '/wp-content/uploads/2026/01/Aperol-1.png',
      '/wp-content/uploads/2026/01/Aperol-2.png'
    ]
  },
  {
    id: 41,
    title: {
      es: 'Embajadora Adriana Gastellum - embajador Marco Llorente x Mad Cool',
      en: 'Ambassador Adriana Gastellum - Ambassador Marco Llorente x Mad Cool'
    },
    client: 'EMPORIO ARMANI OCCHIALI',
    talent: 'Adriana Gastellum y Marco Llorente',
    year: '2018',
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
    title: {
      es: 'Embajador José Lamuño',
      en: 'Ambassador José Lamuño'
    },
    client: 'Schweppes Venecia',
    talent: 'José Lamuño',
    year: '2018',
    description: {
      es: 'José Lamuño embajador para Schweppes Venecia.',
      en: 'José Lamuño ambassador for Schweppes Venice.'
    },
    image: '/wp-content/uploads/2026/01/Schweppes.png',
    images: [
      '/wp-content/uploads/2026/01/Schweppes.png',
      '/wp-content/uploads/2026/01/Schweppes-2.png'
    ]
  },
  {
    id: 43,
    title: {
      es: 'Actuación Navidad Julia de Castro y embajadora Patricia Valley',
      en: 'Christmas Performance Julia de Castro and Ambassador Patricia Valley'
    },
    client: 'Zalando',
    talent: 'Julia de Castro y Patricia Valley',
    year: '2018',
    description: {
      es: 'Actuación de Navidad de Julia de Castro y embajadora Patricia Valley para Zalando.',
      en: 'Christmas performance by Julia de Castro and ambassador Patricia Valley for Zalando.'
    },
    image: '/wp-content/uploads/2026/01/Zalando-1.png',
    images: [
      '/wp-content/uploads/2026/01/Zalando-1.png',
      '/wp-content/uploads/2026/01/Zalando-2.png'
    ]
  },
  {
    id: 44,
    title: {
      es: 'Presentación perfumes',
      en: 'Perfumes presentation'
    },
    client: 'Bultaco',
    talent: 'Bultaco',
    year: '2017',
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
    title: {
      es: 'Fashion For Lunch - Host Alejandro Gómez Palomo',
      en: 'Fashion For Lunch - Host Alejandro Gómez Palomo'
    },
    client: 'Soho House Barcelona',
    talent: 'Alejandro Gómez Palomo',
    year: '2017',
    description: {
      es: 'Fashion For Lunch con Alejandro Gómez Palomo en Soho House Barcelona.',
      en: 'Fashion For Lunch with Alejandro Gómez Palomo at Soho House Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Palomo-1.png',
    images: [
      '/wp-content/uploads/2026/01/Palomo-1.png',
      '/wp-content/uploads/2026/01/Palomo-2.png'
    ]
  },
  {
    id: 46,
    title: {
      es: 'Modelo Palito Dominguín',
      en: 'Model Palito Dominguín'
    },
    client: 'ANGEL SCHLESSER',
    talent: 'Palito Dominguín',
    year: '2017',
    description: {
      es: 'Palito Dominguín modelo para Angel Schlesser.',
      en: 'Palito Dominguín model for Angel Schlesser.'
    },
    image: '/wp-content/uploads/2026/01/Palito-1.png',
    images: [
      '/wp-content/uploads/2026/01/Palito-1.png',
      '/wp-content/uploads/2026/01/Palito-2.png'
    ]
  },
  {
    id: 47,
    title: {
      es: 'Fashion For Lunch - Host Juanjo Oliva',
      en: 'Fashion For Lunch - Host Juanjo Oliva'
    },
    client: 'Soho House Barcelona',
    talent: 'Juanjo Oliva',
    year: '2017',
    description: {
      es: 'Fashion For Lunch con Juanjo Oliva en Soho House Barcelona.',
      en: 'Fashion For Lunch with Juanjo Oliva at Soho House Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Juanjo-Oliva.png',
    images: ['/wp-content/uploads/2026/01/Juanjo-Oliva.png']
  },
  {
    id: 48,
    title: {
      es: 'Embajadoras La Perla y Alejandra Prats x Starlite Marbella',
      en: 'Ambassadors La Perla and Alejandra Prats x Starlite Marbella'
    },
    client: 'LA PERLA',
    talent: 'Cristina Castaño y Alejandra Prats',
    year: '2017',
    description: {
      es: 'Embajadoras de La Perla y Alejandra Prats en Starlite Marbella.',
      en: 'La Perla ambassadors and Alejandra Prats at Starlite Marbella.'
    },
    image: '/wp-content/uploads/2026/01/Cristina-Castano.png',
    images: [
      '/wp-content/uploads/2026/01/Cristina-Castano.png',
      '/wp-content/uploads/2026/01/Alejandra-Prats.png'
    ]
  },
  {
    id: 49,
    title: {
      es: 'Entrevista y editorial Julia de Castro',
      en: 'Interview and editorial Julia de Castro'
    },
    client: 'Vogue',
    talent: 'Julia de Castro',
    year: '2017',
    description: {
      es: 'Entrevista y editorial de Julia de Castro para Vogue.',
      en: 'Interview and editorial featuring Julia de Castro for Vogue.'
    },
    image: '/wp-content/uploads/2026/01/Vogue.png',
    images: [
      '/wp-content/uploads/2026/01/Vogue.png',
      '/wp-content/uploads/2026/01/Vogue-2.png'
    ]
  },
  {
    id: 50,
    title: {
      es: 'Entrevista y editorial Julia de Castro',
      en: 'Interview and editorial Julia de Castro'
    },
    client: "Harper's Bazaar",
    talent: 'Julia de Castro',
    year: '2017',
    description: {
      es: "Entrevista y editorial de Julia de Castro para Harper's Bazaar.",
      en: "Interview and editorial featuring Julia de Castro for Harper's Bazaar."
    },
    image: '/wp-content/uploads/2026/01/Harpers-Bazaar-1.png',
    images: [
      '/wp-content/uploads/2026/01/Harpers-Bazaar-1.png',
      '/wp-content/uploads/2026/01/Harpers-Bazaar-2.png'
    ]
  },
  {
    id: 51,
    title: {
      es: 'Actuación Julia de Castro',
      en: 'Performance Julia de Castro'
    },
    client: 'BVLGARI',
    talent: 'Julia de Castro',
    year: '2017',
    description: {
      es: 'Actuación de Julia de Castro para BVLGARI.',
      en: 'Performance by Julia de Castro for BVLGARI.'
    },
    image: '/wp-content/uploads/2026/01/Bvlgari-1.png',
    images: [
      '/wp-content/uploads/2026/01/Bvlgari-1.png',
      '/wp-content/uploads/2026/01/Bvlgari-2.png'
    ]
  },
  {
    id: 52,
    title: {
      es: 'Evento Patricia Valley',
      en: 'Event Patricia Valley'
    },
    client: 'Dior',
    talent: 'Patricia Valley',
    year: '2017',
    description: {
      es: 'Evento con Patricia Valley para Dior Barcelona.',
      en: 'Event featuring Patricia Valley for Dior Barcelona.'
    },
    image: '/wp-content/uploads/2026/01/Dior-1.png',
    images: [
      '/wp-content/uploads/2026/01/Dior-1.png',
      '/wp-content/uploads/2026/01/Dior-2.png'
    ]
  },
  {
    id: 53,
    title: {
      es: 'Actuación Julia de Castro',
      en: 'Performance Julia de Castro'
    },
    client: 'San Isidro (Madrid)',
    talent: 'Julia de Castro',
    year: '2016',
    description: {
      es: 'Actuación de Julia de Castro en San Isidro (Madrid).',
      en: 'Performance by Julia de Castro at San Isidro (Madrid).'
    },
    image: '/wp-content/uploads/2026/01/San-Isidro-1.png',
    images: [
      '/wp-content/uploads/2026/01/San-Isidro-1.png',
      '/wp-content/uploads/2026/01/San-Isidro-2.png'
    ]
  },
  {
    id: 54,
    title: {
      es: 'Embajadora Andrea Vandall',
      en: 'Ambassador Andrea Vandall'
    },
    client: 'Jameson Whiskey',
    talent: 'Andrea Vandall',
    year: '2016',
    description: {
      es: 'Andrea Vandall embajadora para Jameson Whiskey.',
      en: 'Andrea Vandall ambassador for Jameson Whiskey.'
    },
    image: '/wp-content/uploads/2026/01/Jameson.png',
    images: ['/wp-content/uploads/2026/01/Jameson.png']
  },
  {
    id: 55,
    title: {
      es: 'CONVOCATORIA VIP CHA CHA',
      en: 'VIP EVENT CHA CHA'
    },
    client: 'CHA CHA',
    talent: 'Cha Cha',
    year: '2016',
    description: {
      es: 'Convocatoria VIP para CHA CHA.',
      en: 'VIP event call for CHA CHA.'
    },
    image: '/wp-content/uploads/2026/01/Cha-Cha-1.png',
    images: [
      '/wp-content/uploads/2026/01/Cha-Cha-1.png',
      '/wp-content/uploads/2026/01/Cha-Cha-2.png'
    ]
  },
  {
    id: 56,
    title: {
      es: 'Actuación Julia de Castro Halloween',
      en: 'Halloween Performance Julia de Castro'
    },
    client: "Hendrick's",
    talent: 'Julia de Castro',
    year: '2016',
    description: {
      es: "Actuación de Julia de Castro en Halloween para Hendrick's.",
      en: "Halloween performance by Julia de Castro for Hendrick's."
    },
    image: '/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png',
    images: ['/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png']
  }
];
