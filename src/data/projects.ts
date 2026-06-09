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
    id: 4,
    title: { es: "Fotos de Andrea Tivadar por Patrick Shuttler", en: "Fotos de Andrea Tivadar por Patrick Shuttler" },
    client: "",
    year: "2024",
    description: { es: "Fotos de Andrea Tivadar por Patrick Shuttler", en: "Fotos de Andrea Tivadar por Patrick Shuttler" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/IMG_3074.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/IMG_3074.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/IMG_3075.jpg"]
  },
  {
    id: 5,
    title: { es: "Patrocinio de Fevertree para el festival de Dise\u00f1o y Mobiliario Mayrit en Madrid", en: "Patrocinio de Fevertree para el festival de Dise\u00f1o y Mobiliario Mayrit en Madrid" },
    client: "",
    year: "2024",
    description: { es: "Patrocinio de Fevertree para el festival de Dise\u00f1o y Mobiliario Mayrit en Madrid", en: "Patrocinio de Fevertree para el festival de Dise\u00f1o y Mobiliario Mayrit en Madrid" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/IMG_3070.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/IMG_3070.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/IMG_3069.jpg"]
  },
  {
    id: 6,
    title: { es: "Zumos Linda para Desigual", en: "Zumos Linda para Desigual" },
    client: "",
    year: "2024",
    description: { es: "Zumos Linda para Desigual", en: "Zumos Linda para Desigual" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/LINDA.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/LINDA.jpg"]
  },
  {
    id: 7,
    title: { es: "Bonawa (Barco de la actriz Ana Fernandez) para Mo\u00ebt & Chandon y Zumos Linda", en: "Bonawa (Barco de la actriz Ana Fernandez) para Mo\u00ebt & Chandon y Zumos Linda" },
    client: "",
    year: "2024",
    description: { es: "Bonawa (Barco de la actriz Ana Fernandez) para Mo\u00ebt & Chandon y Zumos Linda", en: "Bonawa (Barco de la actriz Ana Fernandez) para Mo\u00ebt & Chandon y Zumos Linda" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Moet.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Moet.png", "https://jvv.com.es/wp-content/uploads/2026/01/Linda.png"]
  },
  {
    id: 8,
    title: { es: "Abraham Garc\u00eda para L\u00edo Mallorca", en: "Abraham Garc\u00eda para L\u00edo Mallorca" },
    client: "",
    year: "2024",
    description: { es: "Abraham Garc\u00eda para L\u00edo Mallorca", en: "Abraham Garc\u00eda para L\u00edo Mallorca" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Lio-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Lio-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Lio-2.png"]
  },
  {
    id: 9,
    title: { es: "Valeria Vegas para IMAGIN (La Caixa)", en: "Valeria Vegas para IMAGIN (La Caixa)" },
    client: "",
    year: "2024",
    description: { es: "Valeria Vegas para IMAGIN (La Caixa)", en: "Valeria Vegas para IMAGIN (La Caixa)" },
    image: "",
    images: []
  },
  {
    id: 10,
    title: { es: "Rocio Saiz y Valeria Vegas, embajadoras de The Body Shop", en: "Rocio Saiz y Valeria Vegas, embajadoras de The Body Shop" },
    client: "",
    year: "2024",
    description: { es: "Rocio Saiz y Valeria Vegas, embajadoras de The Body Shop", en: "Rocio Saiz y Valeria Vegas, embajadoras de The Body Shop" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/Sin-titulo.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/Sin-titulo.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/1.jpg"]
  },
  {
    id: 11,
    title: { es: "Yaiza Canosa para Sage", en: "Yaiza Canosa para Sage" },
    client: "",
    year: "2024",
    description: { es: "Yaiza Canosa para Sage", en: "Yaiza Canosa para Sage" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/IMG-20240326-WA0100.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/A0153E3D-DBC0-4CB7-AB14-E7EDCF8EB4AB.png"]
  },
  {
    id: 12,
    title: { es: "Abraham Garc\u00eda para Disaronno", en: "Abraham Garc\u00eda para Disaronno" },
    client: "",
    year: "2024",
    description: { es: "Abraham Garc\u00eda para Disaronno", en: "Abraham Garc\u00eda para Disaronno" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Disaronno-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Disaronno-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Disaronno-2.png"]
  },
  {
    id: 13,
    title: { es: "Mery Miles para Levi's y Vespa", en: "Mery Miles para Levi's y Vespa" },
    client: "",
    year: "2024",
    description: { es: "Mery Miles para Levi's y Vespa", en: "Mery Miles para Levi's y Vespa" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Levis.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Levis.png"]
  },
  {
    id: 14,
    title: { es: "Alex de la Croix para Vogue Hong Kong", en: "Alex de la Croix para Vogue Hong Kong" },
    client: "",
    year: "2024",
    description: { es: "Alex de la Croix para Vogue Hong Kong", en: "Alex de la Croix para Vogue Hong Kong" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Vogue-HK1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Vogue-HK1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Vogue-HK2.png"]
  },
  {
    id: 15,
    title: { es: "Rocio Saiz presentadora para el desfile \"Out of the Closet\" en el hotel W Ibiza", en: "Rocio Saiz presentadora para el desfile \"Out of the Closet\" en el hotel W Ibiza" },
    client: "",
    year: "2024",
    description: { es: "Rocio Saiz presentadora para el desfile \"Out of the Closet\" en el hotel W Ibiza", en: "Rocio Saiz presentadora para el desfile \"Out of the Closet\" en el hotel W Ibiza" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-27-1.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/PHOTO-2024-03-27-18-17-28.jpg"]
  },
  {
    id: 16,
    title: { es: "Proyecto Mastercard con Valeria Vegas", en: "Proyecto Mastercard con Valeria Vegas" },
    client: "",
    year: "2024",
    description: { es: "Proyecto Mastercard con Valeria Vegas", en: "Proyecto Mastercard con Valeria Vegas" },
    image: "",
    images: []
  },
  {
    id: 17,
    title: { es: "Yaiza Canosa para Meta futuro de laSexta", en: "Yaiza Canosa para Meta futuro de laSexta" },
    client: "",
    year: "2024",
    description: { es: "Yaiza Canosa para Meta futuro de laSexta", en: "Yaiza Canosa para Meta futuro de laSexta" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36.jpeg", "https://jvv.com.es/wp-content/uploads/2025/12/WhatsApp-Image-2022-12-30-at-10.37.36-1.jpeg"]
  },
  {
    id: 18,
    title: { es: "Andrea Tivadar y Paloma Lopez para Antonio Riva Milano en Gala Bridal Barcelona", en: "Andrea Tivadar y Paloma Lopez para Antonio Riva Milano en Gala Bridal Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Andrea Tivadar y Paloma Lopez para Antonio Riva Milano en Gala Bridal Barcelona", en: "Andrea Tivadar y Paloma Lopez para Antonio Riva Milano en Gala Bridal Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Bridal-1.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Bridal-1.jpg", "https://jvv.com.es/wp-content/uploads/2026/01/Bridal-2.jpg"]
  },
  {
    id: 19,
    title: { es: "Videos de Amazon Prime con Alex De La Croix e Invitades", en: "Videos de Amazon Prime con Alex De La Croix e Invitades" },
    client: "",
    year: "2024",
    description: { es: "Videos de Amazon Prime con Alex De La Croix e Invitades", en: "Videos de Amazon Prime con Alex De La Croix e Invitades" },
    image: "",
    images: []
  },
  {
    id: 20,
    title: { es: "Sandra Delaporte y Joan Pedrola embajadores de Armani Exchange para Espa\u00f1a y Portugal", en: "Sandra Delaporte y Joan Pedrola embajadores de Armani Exchange para Espa\u00f1a y Portugal" },
    client: "",
    year: "2024",
    description: { es: "Sandra Delaporte y Joan Pedrola embajadores de Armani Exchange para Espa\u00f1a y Portugal", en: "Sandra Delaporte y Joan Pedrola embajadores de Armani Exchange para Espa\u00f1a y Portugal" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/AX_ALTA_delaporte02.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/AX_ALTA_delaporte02.jpg", "https://jvv.com.es/wp-content/uploads/2025/12/AX_ALTA_17-joan-pedrola.jpg"]
  },
  {
    id: 21,
    title: { es: "Jesus Vazquez Viedma - Director de M\u00e1ster de Comunicaci\u00f3n, Marketing y Producci\u00f3n de Eventos de Moda en el LCI de Barcelona", en: "Jesus Vazquez Viedma - Director de M\u00e1ster de Comunicaci\u00f3n, Marketing y Producci\u00f3n de Eventos de Moda en el LCI de Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Jesus Vazquez Viedma - Director de M\u00e1ster de Comunicaci\u00f3n, Marketing y Producci\u00f3n de Eventos de Moda en el LCI de Barcelona", en: "Jesus Vazquez Viedma - Director de M\u00e1ster de Comunicaci\u00f3n, Marketing y Producci\u00f3n de Eventos de Moda en el LCI de Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/unnamed-2.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/unnamed-2.jpg", "https://jvv.com.es/wp-content/uploads/2026/01/LCI-1.png"]
  },
  {
    id: 22,
    title: { es: "Verbena Studio para AD", en: "Verbena Studio para AD" },
    client: "",
    year: "2024",
    description: { es: "Verbena Studio para AD", en: "Verbena Studio para AD" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Untitled.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Untitled.png", "https://jvv.com.es/wp-content/uploads/2026/01/Verbena-2.png"]
  },
  {
    id: 23,
    title: { es: "Carla Cervantes para Volkswagen", en: "Carla Cervantes para Volkswagen" },
    client: "",
    year: "2024",
    description: { es: "Carla Cervantes para Volkswagen", en: "Carla Cervantes para Volkswagen" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/VW-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/VW-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/VW-2.png"]
  },
  {
    id: 24,
    title: { es: "Portada de Julia de Castro para Yodona", en: "Portada de Julia de Castro para Yodona" },
    client: "",
    year: "2024",
    description: { es: "Portada de Julia de Castro para Yodona", en: "Portada de Julia de Castro para Yodona" },
    image: "https://jvv.com.es/wp-content/uploads/2025/12/unnamed-1.jpg",
    images: ["https://jvv.com.es/wp-content/uploads/2025/12/unnamed-1.jpg"]
  },
  {
    id: 25,
    title: { es: "Julia de Castro para J&B", en: "Julia de Castro para J&B" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para J&B", en: "Julia de Castro para J&B" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/JB-2.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/JB-2.png", "https://jvv.com.es/wp-content/uploads/2026/01/JB-3.png"]
  },
  {
    id: 26,
    title: { es: "Carla Cervantes y Sandra Egido para Oysho", en: "Carla Cervantes y Sandra Egido para Oysho" },
    client: "",
    year: "2024",
    description: { es: "Carla Cervantes y Sandra Egido para Oysho", en: "Carla Cervantes y Sandra Egido para Oysho" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Oysho-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Oysho-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Oysho-2.png"]
  },
  {
    id: 27,
    title: { es: "Adriana Gastellum y Jon Morales para H&M y Moschino", en: "Adriana Gastellum y Jon Morales para H&M y Moschino" },
    client: "",
    year: "2024",
    description: { es: "Adriana Gastellum y Jon Morales para H&M y Moschino", en: "Adriana Gastellum y Jon Morales para H&M y Moschino" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/HM-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/HM-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/HM-2.png"]
  },
  {
    id: 28,
    title: { es: "Jose Lamu", en: "Jose Lamu" },
    client: "",
    year: "2024",
    description: { es: "Jose Lamu", en: "Jose Lamu" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Volvo-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Volvo-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Volvo-2.png"]
  },
  {
    id: 29,
    title: { es: "Carla Cervantes por Cozarllado", en: "Carla Cervantes por Cozarllado" },
    client: "",
    year: "2024",
    description: { es: "Carla Cervantes por Cozarllado", en: "Carla Cervantes por Cozarllado" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Carla-Cervantes-x-Cozarllado.png"]
  },
  {
    id: 30,
    title: { es: "Adriana Gastellum y Jose Lamu\u00f1o para Aperol Spritz en Mad Cool", en: "Adriana Gastellum y Jose Lamu\u00f1o para Aperol Spritz en Mad Cool" },
    client: "",
    year: "2024",
    description: { es: "Adriana Gastellum y Jose Lamu\u00f1o para Aperol Spritz en Mad Cool", en: "Adriana Gastellum y Jose Lamu\u00f1o para Aperol Spritz en Mad Cool" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Aperol-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Aperol-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Aperol-2.png"]
  },
  {
    id: 31,
    title: { es: "Adriana Gastellum y Marco Llorente para Emporio Armani Occhiali en Mad Cool", en: "Adriana Gastellum y Marco Llorente para Emporio Armani Occhiali en Mad Cool" },
    client: "",
    year: "2024",
    description: { es: "Adriana Gastellum y Marco Llorente para Emporio Armani Occhiali en Mad Cool", en: "Adriana Gastellum y Marco Llorente para Emporio Armani Occhiali en Mad Cool" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Armani-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Armani-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Armani-2.png"]
  },
  {
    id: 32,
    title: { es: "Jose Lamu\u00f1o para Schweppes", en: "Jose Lamu\u00f1o para Schweppes" },
    client: "",
    year: "2024",
    description: { es: "Jose Lamu\u00f1o para Schweppes", en: "Jose Lamu\u00f1o para Schweppes" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Schweppes.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Schweppes.png", "https://jvv.com.es/wp-content/uploads/2026/01/Schweppes-2.png"]
  },
  {
    id: 33,
    title: { es: "Fashion for Lunch con Vestiaire Collective en Soho House Barcelona", en: "Fashion for Lunch con Vestiaire Collective en Soho House Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Fashion for Lunch con Vestiaire Collective en Soho House Barcelona", en: "Fashion for Lunch con Vestiaire Collective en Soho House Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Vestiaire-Collective-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Vestiaire-Collective-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Vestiaire-Collective-2.png"]
  },
  {
    id: 34,
    title: { es: "Julia de Castro y Patricia Valley para Zalando", en: "Julia de Castro y Patricia Valley para Zalando" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro y Patricia Valley para Zalando", en: "Julia de Castro y Patricia Valley para Zalando" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Zalando-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Zalando-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Zalando-2.png"]
  },
  {
    id: 35,
    title: { es: "Presentaci\u00f3n Bultaco Perfumes", en: "Presentaci\u00f3n Bultaco Perfumes" },
    client: "",
    year: "2024",
    description: { es: "Presentaci\u00f3n Bultaco Perfumes", en: "Presentaci\u00f3n Bultaco Perfumes" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Bultaco-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Bultaco-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Bultaco-3.png"]
  },
  {
    id: 36,
    title: { es: "Fashion for Lunch con Alejandro Gomez Palomo en Soho House Barcelona", en: "Fashion for Lunch con Alejandro Gomez Palomo en Soho House Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Fashion for Lunch con Alejandro Gomez Palomo en Soho House Barcelona", en: "Fashion for Lunch con Alejandro Gomez Palomo en Soho House Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Palomo-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Palomo-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Palomo-2.png"]
  },
  {
    id: 37,
    title: { es: "Palito Domingu\u00edn para Angel Schlesser", en: "Palito Domingu\u00edn para Angel Schlesser" },
    client: "",
    year: "2024",
    description: { es: "Palito Domingu\u00edn para Angel Schlesser", en: "Palito Domingu\u00edn para Angel Schlesser" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Palito-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Palito-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Palito-2.png"]
  },
  {
    id: 38,
    title: { es: "Fashion for Lunch con Juanjo Oliva en Soho House Barcelona", en: "Fashion for Lunch con Juanjo Oliva en Soho House Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Fashion for Lunch con Juanjo Oliva en Soho House Barcelona", en: "Fashion for Lunch con Juanjo Oliva en Soho House Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Juanjo-Oliva.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Juanjo-Oliva.png"]
  },
  {
    id: 39,
    title: { es: "Cristina Casta\u00f1o y Alejandra Prats para Starlite Marbella", en: "Cristina Casta\u00f1o y Alejandra Prats para Starlite Marbella" },
    client: "",
    year: "2024",
    description: { es: "Cristina Casta\u00f1o y Alejandra Prats para Starlite Marbella", en: "Cristina Casta\u00f1o y Alejandra Prats para Starlite Marbella" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Cristina-Castano.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Cristina-Castano.png", "https://jvv.com.es/wp-content/uploads/2026/01/Alejandra-Prats.png"]
  },
  {
    id: 40,
    title: { es: "Julia de Castro para Vogue", en: "Julia de Castro para Vogue" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para Vogue", en: "Julia de Castro para Vogue" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Vogue.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Vogue.png", "https://jvv.com.es/wp-content/uploads/2026/01/Vogue-2.png"]
  },
  {
    id: 41,
    title: { es: "Julia de Castro para Harper's Bazaar", en: "Julia de Castro para Harper's Bazaar" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para Harper's Bazaar", en: "Julia de Castro para Harper's Bazaar" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Harpers-Bazaar-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Harpers-Bazaar-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Harpers-Bazaar-2.png"]
  },
  {
    id: 42,
    title: { es: "Julia de Castro para Bvlgari", en: "Julia de Castro para Bvlgari" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para Bvlgari", en: "Julia de Castro para Bvlgari" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Bvlgari-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Bvlgari-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Bvlgari-2.png"]
  },
  {
    id: 43,
    title: { es: "Patricia Valley para Dior Barcelona", en: "Patricia Valley para Dior Barcelona" },
    client: "",
    year: "2024",
    description: { es: "Patricia Valley para Dior Barcelona", en: "Patricia Valley para Dior Barcelona" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Dior-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Dior-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Dior-2.png"]
  },
  {
    id: 44,
    title: { es: "Convocatoria de evento para Guiness en Madrid", en: "Convocatoria de evento para Guiness en Madrid" },
    client: "",
    year: "2024",
    description: { es: "Convocatoria de evento para Guiness en Madrid", en: "Convocatoria de evento para Guiness en Madrid" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Guinness-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Guinness-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Guinness-2.png"]
  },
  {
    id: 45,
    title: { es: "Julia de Castro para San Isidro (Madrid)", en: "Julia de Castro para San Isidro (Madrid)" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para San Isidro (Madrid)", en: "Julia de Castro para San Isidro (Madrid)" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/San-Isidro-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/San-Isidro-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/San-Isidro-2.png"]
  },
  {
    id: 46,
    title: { es: "Andrea Vandall para Jameson Whiskey", en: "Andrea Vandall para Jameson Whiskey" },
    client: "",
    year: "2024",
    description: { es: "Andrea Vandall para Jameson Whiskey", en: "Andrea Vandall para Jameson Whiskey" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Jameson.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Jameson.png"]
  },
  {
    id: 47,
    title: { es: "Producci\u00f3n de evento en residencia privada en Madrid", en: "Producci\u00f3n de evento en residencia privada en Madrid" },
    client: "",
    year: "2024",
    description: { es: "Producci\u00f3n de evento en residencia privada en Madrid", en: "Producci\u00f3n de evento en residencia privada en Madrid" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Evento-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Evento-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Evento-2.png"]
  },
  {
    id: 48,
    title: { es: "Convocatoria VIP para Cha Cha", en: "Convocatoria VIP para Cha Cha" },
    client: "",
    year: "2024",
    description: { es: "Convocatoria VIP para Cha Cha", en: "Convocatoria VIP para Cha Cha" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Cha-Cha-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Cha-Cha-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Cha-Cha-2.png"]
  },
  {
    id: 49,
    title: { es: "Julia de Castro para Hendrick's", en: "Julia de Castro para Hendrick's" },
    client: "",
    year: "2024",
    description: { es: "Julia de Castro para Hendrick's", en: "Julia de Castro para Hendrick's" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Julia-Castro-Hendricks.png"]
  },
  {
    id: 50,
    title: { es: "Pop-up Store Lydia Delgado", en: "Pop-up Store Lydia Delgado" },
    client: "",
    year: "2024",
    description: { es: "Pop-up Store Lydia Delgado", en: "Pop-up Store Lydia Delgado" },
    image: "https://jvv.com.es/wp-content/uploads/2026/01/Lydia-Delgado-1.png",
    images: ["https://jvv.com.es/wp-content/uploads/2026/01/Lydia-Delgado-1.png", "https://jvv.com.es/wp-content/uploads/2026/01/Lydia-Delgado-2.png"]
  },
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
