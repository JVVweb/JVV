export interface Project {
  id: number;
  title: { es: string; en: string };
  client: string;
  year: string;
  description: { es: string; en: string };
  image: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: {
      es: 'Editorial & Entrevista para Neo2',
      en: 'Editorial & Interview for Neo2'
    },
    client: 'Neo2 Magazine',
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
    id: 2,
    title: {
      es: 'Chloe’s Clue para Caudalie',
      en: 'Chloe’s Clue for Caudalie'
    },
    client: 'Caudalie Menorca',
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
    id: 3,
    title: {
      es: 'Fashion Day en Juno House',
      en: 'Fashion Day at Juno House'
    },
    client: 'Juno House Club',
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
  }
];
