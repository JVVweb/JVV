export type TalentType = 
  | 'all' 
  | 'emprendedoras' 
  | 'djs' 
  | 'cantantes' 
  | 'actores' 
  | 'comunicadores' 
  | 'fotografos' 
  | 'directores' 
  | 'pintoras' 
  | 'deportistas';

export interface Talent {
  id: number;
  name: string;
  type: TalentType[];
  location: string;
  image: string;
  description: { es: string; en: string };
  gallery: string[];
  stats: {
    es: Record<string, string>;
    en: Record<string, string>;
  };
  projects: { title: { es: string; en: string }; year: string }[];
  videos?: string[];
}

export const TALENT_DATA: Talent[] = [
  {
    "id": 1,
    "name": "Valeria Vegas",
    type: ['comunicadores'],
    "location": "Madrid",
    image: '/Talents/JVV _ VALERIA VEGAS/valeria-vegas-main.jpg',
    "description": {
      "es": "Valeria Vegas es licenciada en Comunicación Audiovisual. Desde 2015 es articulista y escribe en varios medios españoles como Vanity Fair, Shangay, Candy, Lecturas…\n\nCo-guionista junto con Los Javis de la serie “Veneno”, es autora de cuatro libros ‘’Grandes Actrices del Cine Español‘’, ‘’Ni puta ni santa. Las memorias de La Veneno‘’, ‘’Vestidas de azul. Análisis social y cinematográfico de la mujer transexual en los años de la Transición española‘’, y su libro, ‘’Libérate‘’, recoge la historia de la cultura LGBTQ que abrió camino en España. En 2023 publica su primera novela de ficción «Actriz de Reparto»\n\nHa dirigido el documental ‘’Manolita, La Chen de Arcos‘’, galardonado como mejor documental español en el LesGaiCineMad 2016, que recoge el testimonio y vivencias de la primera madre transexual que logró adoptar en España. Entre sus proyectos de dirección también se encuentra ‘El enigma Nadiuska’, para Atresmedia. Ha formado parte del programa de Canal Sur, ‘’El Legado‘’, destinado a recordar a artistas de antaño; así como en el spot inclusivo de Tinder con motivo del World Pride. También ha ejercido como tertuliana en distintos coloquios entre los que destacan ‘’El Congreso del Bienestar‘’, de la Cadena SER; la exposición ‘’Cultura Basura‘’ de La Térmica de Málaga, el Rizoma Festival in Madrid, ‘Periodismo, divas y cultura popular’, para Imagincafé Barcelona (La Caixa); o la mesa redonda ‘Memoria colectiva, cultura popular y estrellas, organizada por la Universidad Carlos III de Madrid.\n\nDesde enero de 2020 colabora semanalmente en el programa radiofónico de Cadena Ser ‘’A vivir Madrid‘’, conducido por Macarena Berlín, en el que entrevista a distintas artistas del panorama nacional.\n\nEn televisión actualmente colabora en el magazine matinal ‘’La hora de la 1‘’ en TVE, y el programa de Canal Sur ‘’Un año de tu vida‘’, presentado por Toñi Moreno. Es una de las embajadoras de The Body Shop para su campaña “Self Love Uprising”.",
      "en": "Valeria Vegas holds a degree in Audiovisual Communication. Since 2015, she has been a regular columnist and writer for multiple major Spanish media outlets including Vanity Fair, Shangay, Candy, and Lecturas.\n\nCo-writer together with Los Javis of the hit series \"Veneno\", she is the author of four books: \"Grandes Actrices del Cine Español\", \"Ni puta ni santa. Las memorias de La Veneno\", \"Vestidas de azul. Análisis social y cinematográfico de la mujer transexual en los años de la Transición española\", and her book \"Libérate\" covers the history of LGBTQ culture that opened the way in Spain. In 2023 she published her first fiction novel \"Actriz de Reparto\".\n\nShe directed the documentary \"Manolita, La Chen de Arcos\", awarded as the best Spanish documentary at LesGaiCineMad 2016, which collects the testimony and experiences of the first transsexual mother who managed to adopt in Spain. Her directing projects also include \"El enigma Nadiuska\" for Atresmedia. She has been part of the Canal Sur program \"El Legado\", aimed at remembering artists of yesteryear, as well as the inclusive Tinder spot on the occasion of World Pride. She has also served as a panelist in various symposiums, including \"El Congreso del Bienestar\" by Cadena SER, the exhibition \"Cultura Basura\" at La Térmica in Málaga, the Rizoma Festival in Madrid, \"Periodismo, divas y cultura popular\" for Imagincafé Barcelona (La Caixa), or the round table \"Memoria colectiva, cultura popular y estrellas\" organized by the Carlos III University of Madrid.\n\nSince January 2020, she collaborates weekly on the Cadena Ser radio program \"A vivir Madrid\", hosted by Macarena Berlín, where she interviews different artists from the national scene.\n\nOn television, she currently collaborates on the morning magazine \"La hora de la 1\" on TVE, and the Canal Sur program \"Un año de tu vida\", presented by Toñi Moreno. She is one of the ambassadors of The Body Shop for its \"Self Love Uprising\" campaign."
    },
    gallery: [
      '/Talents/JVV _ VALERIA VEGAS/imgi_4_VALERIA-VEGAS-scaled.jpg',
      '/Talents/JVV _ VALERIA VEGAS/imgi_5_Valeria4325.jpg',
      '/Talents/JVV _ VALERIA VEGAS/imgi_8_DIEZ-MINUTOS-3-1-scaled.jpg',
      '/Talents/JVV _ VALERIA VEGAS/imgi_9_DIEZ-MINUTOS-1-scaled.jpg',
      '/Talents/JVV _ VALERIA VEGAS/valeria-vegas-main.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Escritora / Comunicadora / Conductora",
        "Estudios": "Comunicación Audiovisual",
        "Destacado": "Veneno, Vestidas de azul, Libérate"
      },
      "en": {
        "Profession": "Writer / Communicator / Host",
        "Education": "Audiovisual Communication",
        "Notable": "Veneno, Vestidas de azul, Libérate"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Y ahora Sonsoles (Colaboradora semanal)",
          "en": "Y ahora Sonsoles (Weekly Contributor)"
        },
        "year": "2024-2026"
      },
      {
        "title": {
          "es": "Nadiuska (Directora de serie documental)",
          "en": "Nadiuska (Documentary Series Director)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Actriz de Reparto (Publicación de novela)",
          "en": "Actriz de Reparto (Novel Publication)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Vestidas de Azul (Co-guionista y adaptación)",
          "en": "Vestidas de Azul (Co-writer & adaptation)"
        },
        "year": "2023"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/MFVkoj2F-1k",
      "https://www.youtube.com/embed/ctQzvb4HVnQ",
      "https://www.youtube.com/embed/3NqkSXQG1og"
    ]
  },

  {
    "id": 2,
    "name": "Joan Pedrola",
    type: ['actores'],
    "location": "Barcelona",
    image: '/Talents/JVV _ JOAN PEDROLA/imgi_5_WhatsApp-Image-2021-02-08-at-11.11.16-1-main.jpg',
    "description": {
      "es": "Joan Pedrola nació el año 1989 en Barcelona, es ahí donde fue descubierto a la edad de 19 años.\n\nTuvo una gran acogida nada más empezar, con la campaña mundial D&G fotografiada por Mario Testino que aceleró su carrera ubicándolo dentro de las mejores pasarelas del mundo como Milán, París y Nueva York trabajando para firmas como Versace, D&G, Armani, Prada, entre otras.\n\nEn 2016 hizo su primer anuncio televisivo para el perfume 212 VIP de Carolina Herrera llegando a posicionarse dentro de los 50 mejores modelos del mundo según Models.com. Volvió a Barcelona para seguir con sus estudios sin dejar la moda. Estudió ilustración en la escuela Llotja de Barcelona.\n\nEn 2018 encontró lo que sería para él su punto de referencia en la actualidad, la interpretación se cruzó en su camino. Ha trabajado y sigue trabajando en distintos cortometrajes, fashion films y películas. Formado en la escuela de teatro Eòlia de Barcelona y ha participado en la serie ‘’El Inocente’’ y más recientemente en la serie “Bienvenidos a Edén’’, la superproducción española, ambas de Netflix.\n\nJoan ha sido elegido en el 2021 como embajador e imagen de Armani Exchange para Portugal, Andorra y España.\n\nEste joven catalán se define como una persona amante de los deportes y adicta al humor.",
      "en": "Joan Pedrola was born in 1989 in Barcelona, where he was discovered at the age of 19.\n\nHe had a great reception right from the start, with the worldwide D&G campaign photographed by Mario Testino that accelerated his career, placing him on the best runways in the world such as Milan, Paris, and New York, working for brands like Versace, D&G, Armani, Prada, among others.\n\nIn 2016, he did his first television commercial for the perfume 212 VIP by Carolina Herrera, reaching a position within the top 50 models in the world according to Models.com. He returned to Barcelona to continue his studies without leaving fashion, studying illustration at the Llotja school in Barcelona.\n\nIn 2018, he found what would be his current reference point, acting. He has worked and continues to work in various short films, fashion films, and movies. Trained at the Eòlia theater school in Barcelona, he participated in the series \"El Inocente\" and more recently in \"Bienvenidos a Edén\", the Spanish superproduction, both on Netflix.\n\nIn 2021, Joan was chosen as the ambassador and face of Armani Exchange for Portugal, Andorra, and Spain.\n\nThis young Catalan defines himself as a sports lover and addicted to humor."
    },
    gallery: [
      '/Talents/JVV _ JOAN PEDROLA/imgi_10_Principal-.jpg',
      '/Talents/JVV _ JOAN PEDROLA/imgi_12_AX_ALTA_17-1-scaled.jpg',
      '/Talents/JVV _ JOAN PEDROLA/imgi_13_AX_ALTA_10-1-scaled.jpg',
      '/Talents/JVV _ JOAN PEDROLA/imgi_4_WhatsApp-Image-2021-02-08-at-11.11.16-2.jpg',
      '/Talents/JVV _ JOAN PEDROLA/imgi_5_WhatsApp-Image-2021-02-08-at-11.11.16-1-main.jpg',
      '/Talents/JVV _ JOAN PEDROLA/imgi_6_WhatsApp-Image-2021-02-08-at-11.11.16-3.jpg',
      '/Talents/JVV _ JOAN PEDROLA/joan-pedrola.jpg'
    ],
    "stats": {
      "es": {
        "Altura": "189cm",
        "Ojos": "Marrones",
        "Idiomas": "ES, EN, CAT",
        "Agencias": "JVV Agency"
      },
      "en": {
        "Height": "189cm",
        "Eyes": "Brown",
        "Languages": "ES, EN, CAT",
        "Agencies": "JVV Agency"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Bienvenidos a Edén (Serie de Netflix)",
          "en": "Bienvenidos a Edén (Netflix Series)"
        },
        "year": "2022-2023"
      },
      {
        "title": {
          "es": "Armani Exchange (Embajador oficial)",
          "en": "Armani Exchange (Official Ambassador)"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "El Inocente (Serie de Netflix)",
          "en": "El Inocente (Netflix Series)"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "Campaña Mundial de D&G (Testino)",
          "en": "D&G Worldwide Campaign (Testino)"
        },
        "year": "2010"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/gKiu8ld8z4g",
      "https://www.youtube.com/embed/FoYWQ3hC5jo"
    ]
  },

  {
    "id": 3,
    "name": "Andrea Tivadar",
    type: ['actores'],
    "location": "Londres / Barcelona",
    image: '/Talents/JVV _ ANDREA TIVADAR/imgi_19_3C4A0940-768x1152-main.jpg',
    "description": {
      "es": "Andrea Tivadar es una actriz británica de origen rumano que actualmente divide su tiempo entre Londres y Barcelona. Decidió cambiar de carrera al graduarse en la Universidad ‘QMUL’- Escuela de Ciencias e Ingeniería de Materiales. Después de terminar su formación en 2012, debutó en el papel de Pam, en la película española ‘’Las aventuras de Jesús María Cristóbal Pequeño’’.\n\nComenzó a cantar a los 6 años y en marzo de 2015 fue invitada a cantar con Poncho, una banda argentina, en su concierto en Barcelona. Ese mismo año, Andrea apareció en el video musical “Elle m’a aimé” de Kendji Girac que fue recibido con más de 80 millones de visitas en YouTube. El 2016 estuvo marcado por su gira promocional para Kingsglaive: Final Fantasy XV para el cual hizo paneles en el Festival Internacional de Cine de ComiCon San Diego, Los Ángeles y Sitges.\n\nAndrea interpreta el papel principal en la producción española “Blood Metal Revenge” que estuvo en la competencia oficial en el Festival de Sitges 2019. Además, apareció en 2 episodios de la exitosa serie de televisión “Killing Eve” (temporada 2) de HBO. Por último, pero no menos importante, Andrea es el personaje principal de la película “Safe Inside”, lanzada en 2020 por la cual fue nominada para 2 premios a “Mejor Actriz” en festivales de EUA, y protagoniza la película “Lumina”, dirigida por Gino McKoy, encarnando a Dellah.\n\nPor segunda vez, es la imagen internacional de la marca de relojes Festina junto a Gerard Butler. Además, en 2019 protagonizó una editorial en Vogue España durante la celebración del Orgullo.\n\nAndrea habla inglés, español, rumano y francés.\n\nSus dos últimos proyectos han sido ‘’Maté a un Tipo’’, una obra de teatro en el Espacio R (Barcelona), y ‘’Mi cuerpo mi casa’’, una pieza de danza Butó junto a Aymara Padrón, dirigidas por Natalia López Santa Cruz.\n\nAndrea ha sido elegida como embajadora de la firma italiana de ceremonia, Antonio Riva, durante la semana Bridal 2021 en Barcelona, cerrando su desfile junto al diseñador.\n\nEs imagen mundial de Lindt y trabajó como modelo para marcas como Seat.\n\nRecientemente ha trabajado en dos grandes proyectos de la plataforma streaming Netflix, “Si Lo Hubiera Sabido” (Netlifx España) y en la temporada 2 de “Warrior Nun” (Netflix USA).",
      "en": "Andrea Tivadar is a British actress of Romanian origin who currently divides her time between London and Barcelona. She decided to change careers upon graduating from \"QMUL\" University - School of Material Sciences and Engineering. After finishing her training in 2012, she debuted in the role of Pam in the Spanish film \"Las aventuras de Jesús María Cristóbal Pequeño\".\n\nShe began singing at age 6 and in March 2015 was invited to sing with Poncho, an Argentine band, at their concert in Barcelona. That same year, Andrea appeared in the music video \"Elle m'a aimé\" by Kendji Girac, which received over 80 million views on YouTube. 2016 was marked by her promotional tour for Kingsglaive: Final Fantasy XV, for which she did panels at the San Diego, Los Angeles, and Sitges International Comic-Con Film Festivals.\n\nAndrea plays the lead role in the Spanish production \"Blood Metal Revenge\", which was in the official competition at the 2019 Sitges Festival. Additionally, she appeared in 2 episodes of the hit TV series \"Killing Eve\" (season 2) on HBO. Last but not least, Andrea is the main character in the film \"Safe Inside\", released in 2020, for which she was nominated for two \"Best Actress\" awards at US festivals, and stars in \"Lumina\", directed by Gino McKoy, playing Dellah.\n\nFor the second time, she is the international image of the Festina watch brand alongside Gerard Butler. In 2019, she also starred in an editorial in Vogue Spain during the Pride celebration.\n\nAndrea speaks English, Spanish, Romanian, and French.\n\nHer last two projects have been \"Maté a un Tipo\", a play at Espacio R (Barcelona), and \"Mi cuerpo mi casa\", a Butoh dance piece alongside Aymara Padrón, directed by Natalia López Santa Cruz.\n\nAndrea was chosen as an ambassador for the Italian ceremony label Antonio Riva during Bridal Week 2021 in Barcelona, closing the show alongside the designer.\n\nShe is the global face of Lindt and worked as a model for brands like Seat.\n\nRecently she has worked on two major projects for the streaming platform Netflix: \"Si Lo Hubiera Sabido\" (Netflix Spain) and in season 2 of \"Warrior Nun\" (Netflix USA)."
    },
    gallery: [
      '/Talents/JVV _ ANDREA TIVADAR/andrea-tivadar.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_11_003_2020_05_14_Andrea_Tivadar_2199-1-1.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_12_017_2020_05_14_Andrea_Tivadar_1902-1.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_16_andreativagerard-801x1024.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_19_3C4A0940-768x1152-main.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_23_AM20926-768x1152.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_27_Andrea-Tivadar-October-2019-3--768x1152.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_35_30-768x1152.jpg',
      '/Talents/JVV _ ANDREA TIVADAR/imgi_39_3C4A0051-768x1152.jpg'
    ],
    "stats": {
      "es": {
        "Idiomas": "EN, ES, RO, FR",
        "Estudios": "QMUL Ciencia e Ingeniería de Materiales",
        "Marcas": "Relojes Festina, Lindt, Antonio Riva"
      },
      "en": {
        "Languages": "EN, ES, RO, FR",
        "Education": "QMUL Materials Science & Eng.",
        "Brands": "Festina Watches, Lindt, Antonio Riva"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Warrior Nun Temporada 2 (Netflix)",
          "en": "Warrior Nun Season 2 (Netflix)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Si Lo Hubiera Sabido (Netflix España)",
          "en": "Si Lo Hubiera Sabido (Netflix Spain)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Campaña de Relojes Festina",
          "en": "Festina Watches Campaign"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "Killing Eve Temporada 2 (HBO)",
          "en": "Killing Eve Season 2 (HBO)"
        },
        "year": "2019"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/3w9KxkTUWBc",
      "https://www.youtube.com/embed/w9X-_D0w2xA",
      "https://www.youtube.com/embed/xQ5vZRILX3g",
      "https://www.youtube.com/embed/yVTXcC1VaEs",
      "https://www.youtube.com/embed/IyjXjK77GjQ"
    ]
  },

  {
    "id": 4,
    "name": "David Castillo",
    type: ['actores'],
    "location": "Madrid",
    image: '/Talents/JVV _ DAVID CASTILLO/david-castillo.jpg',
    "description": {
      "es": "David Castillo empezó a hablar casi entre cámaras, ya que con tan solo 7 años sus padres le adentraron en el mundo de la publicidad después de que viera un anuncio de desayunos, donde llevaban a los niños en una especie de nave espacial. Ahí fue donde decidió que él también quería dedicarse a eso. Después de esa trayectoria inicial como imagen publicitaria, intervino en varias series de televisión como ‘’Hospital Central‘’, ‘’Ana y los 7‘’ y ‘’Manolito Gafotas‘’, basada en el personaje homónimo de Elvira Lindo, dando vida a Yihad durante trece capítulos. El salto al cine tuvo lugar en 2004, con un papel menor en ‘’El séptimo día‘’de Carlos Saura y otro de mayor importancia en ‘’Cachorro‘’ donde interpretaba a Bernardo, un niño de nueve años que por las circunstancias tiene que convivir con su tío homosexual.\n\nEn 2005, entró a formar parte del reparto de ‘’Aída ‘’ con la que logró una gran popularidad a lo largo de sus casi diez años de emisión, interpretando a Jonathan García, el menor de los hijos de Aída García.\n\nA partir del año 2011, empezó a actuar en obras teatrales, como ‘’Münchhausen‘’, ‘’Naturaleza muerta en una cuneta‘’ (2012-2013) o ‘’Emilia‘’ (2014).\n\nEn 2015 es seleccionado para formar parte de la Joven Compañía Nacional de Teatro Clásico. Una de sus últimas participaciones teatrales ha sido la obra ‘’Lulu‘’, con la que ha girado por diversas ciudades de nuestro país.\n\nDavid es un aficionado de la música, pasión que le ha llevado a pinchar en fiestas privadas, discotecas y festivales de todo el país. Sus seguidores son muy fieles y les siguen tanto en estas sesiones como en sus redes sociales, por lo que son muchas las marcas que se han interesado en colaborar con él.\n\nHa participado en el rodaje de “Los Nuestros Dos”, la segunda temporada de la miniserie de Telecinco y en la serie de Antena 3 “Amar es para Siempre” en su séptima temporada. Es parte del reparto de la serie de Amazon Prime, “El Cid”, primera serie de esta plataforma de producción española estrenada a finales del 2020 cuya segunda temporada ya está disponible, y David vuelve a protagonizar al Escudero Lisardo. Además, es uno de los actores corales protagonistas de la primera serie de Disney Plus de producción española dirigida por Paco León, “Besos al aire”.\n\nCon la obra de teatro, “Retorno al hogar” ha estado todo el 2023 girando por todo el país. Además, ha comenzado su carrera como escritor con la publicación, en el mismo año, de su libro de poesía “Piedra de madera”.",
      "en": "David Castillo began speaking almost between cameras, since at only 7 years old his parents introduced him to the world of advertising after he saw a breakfast commercial where children were carried in a spaceship. That's when he decided he wanted to dedicate himself to that. After that initial path as an advertising image, he participated in several television series such as \"Hospital Central\", \"Ana y los 7\", and \"Manolito Gafotas\", based on the character by Elvira Lindo, playing Yihad for thirteen episodes. The jump to cinema took place in 2004 with a minor role in Carlos Saura's \"El séptimo día\" and another of greater importance in \"Cachorro\", where he played Bernardo, a nine-year-old boy who has to live with his homosexual uncle.\n\nIn 2005, he became part of the cast of \"Aída\", with which he achieved great popularity throughout its nearly ten years of broadcasting, playing Jonathan García, the youngest of Aída García's children.\n\nFrom 2011, he began acting in plays such as \"Münchhausen\", \"Naturaleza muerta en una cuneta\" (2012-2013), or \"Emilia\" (2014).\n\nIn 2015, he was selected to join the Joven Compañía Nacional de Teatro Clásico. One of his latest theater appearances has been the play \"Lulu\", which toured various cities in our country.\n\nDavid is a music fan, a passion that has led him to DJ at private parties, clubs, and festivals nationwide. His followers are very loyal, following him both in these sessions and on his social media, making many brands interested in collaborating with him.\n\nHe participated in the filming of \"Los Nuestros Dos\", the second season of the Telecinco miniseries, and in the seventh season of the Antena 3 series \"Amar es para Siempre\". He is part of the cast of the Amazon Prime series \"El Cid\", the platform's first Spanish-produced series premiered in late 2020, with the second season already available, where David returns to star as Squire Lisardo. Additionally, he is one of the lead ensemble actors in the first Disney Plus Spanish production directed by Paco León, \"Besos al aire\".\n\nWith the play \"Retorno al hogar\", he toured the country throughout 2023. He also started his writing career with the publication in the same year of his poetry book \"Piedra de madera\"."
    },
    gallery: [
      '/Talents/JVV _ DAVID CASTILLO/david-castillo.jpg',
      '/Talents/JVV _ DAVID CASTILLO/imgi_4_03.jpg',
      '/Talents/JVV _ DAVID CASTILLO/imgi_5_09.jpg',
      '/Talents/JVV _ DAVID CASTILLO/imgi_6_image005-3.jpg',
      '/Talents/JVV _ DAVID CASTILLO/imgi_7_11-Nov_-cap-5_79-scaled.jpg',
      '/Talents/JVV _ DAVID CASTILLO/imgi_8_25-SEP-_-CAP-2_25-scaled.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Actor / Poeta / DJ",
        "Publicaciones": "Piedra de madera (2023)",
        "Teatro": "Joven Cía. Nacional de Teatro Clásico"
      },
      "en": {
        "Profession": "Actor / Poet / DJ",
        "Publications": "Piedra de madera (2023)",
        "Theater": "Joven Cía. Nacional de Teatro Clásico Member"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Retorno al hogar (Gira Nacional de Teatro)",
          "en": "Retorno al hogar (National Theater Tour)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Besos al Aire (Serie de Disney+)",
          "en": "Besos al Aire (Disney+ Series)"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "El Cid (Serie de Amazon Prime Video)",
          "en": "El Cid (Amazon Prime Video Series)"
        },
        "year": "2020-2021"
      },
      {
        "title": {
          "es": "Aída (Telecinco - 10 Temporadas)",
          "en": "Aída (Telecinco - 10 Seasons)"
        },
        "year": "2005-2014"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/tlhja0vxL9Q",
      "https://www.youtube.com/embed/B0Ao7NfdYV0"
    ]
  },

  {
    "id": 6,
    "name": "Rocío Saiz",
    type: ['djs', 'comunicadores'],
    "location": "Madrid",
    image: '/Talents/JVV _ ROCIO SAIZ/rocio-saiz-main.jpg',
    "description": {
      "es": "Activismo, política, feminismo, reivindicación y mucha música. Rocío Saiz es cantante solista además de formar parte de los grupos Monterrosa y Las Chillers, también es DJ y comunicadora. Su discurso a favor de la diversidad y su crítica al heteropatriarcado la han convertido en uno de los referentes LGTBIQ+ con más carácter y fuerza en España.\n\nAhora se embarca en esta nueva aventura. La pista de baile es política, la diversión nunca es tan inocente como se pinta, y los dramas amorosos rara vez son una experiencia intransferible. Rocío habla de todo lo que sucede antes, durante y después del baile: desengaños, sexo con y sin amor, relaciones tóxicas, la plenitud de ser dueña de tu destino tantas horas como sea posible, pero también el insomnio derivado del estrés laboral y falta de dinero y la necesidad de cierto hedonismo para olvidarse de todo de vez en cuando.\n\nLo ha hecho con Monterrosa con éxitos eurovisivos y baladas fuera de tiempo, como si pudiéramos juntar a Tino Casal, La Oreja de Van Gogh, Abba, Astrud, Cecilia y Vengaboys para hacer himnos generacionales que expliquen cómo nos sentimos en 2020, y ahora emprende camino en solitario para unir mundos entre la sofisticación de Monterrosa y su fuerza viva con Las Chillers. En el verano de 2022 fue la presentadora del desfile ‘Out of the closet’ para el Hotel W Ibiza y la presentadora del nuevo espacio de Movistar + ‘La Nevera de Inverfest’\n\nHa participado en numerosos festivales como el Atlantic Fest, Cala Mijas o el Culture Business Pride en Tenerife junto a Village People.",
      "en": "Activism, politics, feminism, advocacy, and lots of music. Rocío Saiz is a solo singer in addition to being part of the groups Monterrosa and Las Chillers, as well as a DJ and communicator. Her discourse in favor of diversity and her criticism of the heteropatriarchy have made her one of the LGTBIQ+ references with the most character and strength in Spain.\n\nNow she embarks on this new adventure. The dance floor is political, fun is never as innocent as it is painted, and love dramas are rarely a non-transferable experience. Rocío talks about everything that happens before, during, and after the dance: disappointments, sex with and without love, toxic relationships, the fulfillment of being master of your destiny for as many hours as possible, but also insomnia derived from work stress and lack of money, and the need for a certain hedonism to forget everything from time to time.\n\nShe did it with Monterrosa with Eurovision-style hits and timeless ballads, as if we could bring together Tino Casal, La Oreja de Van Gogh, Abba, Astrud, Cecilia, and Vengaboys to make generational anthems explaining how we felt in 2020, and now she sets off on a solo journey to bridge worlds between the sophistication of Monterrosa and her live force with Las Chillers. In the summer of 2022, she hosted the \"Out of the closet\" fashion show for the W Ibiza Hotel and presented the new Movistar+ space \"La Nevera de Inverfest\".\n\nShe has participated in numerous festivals such as Atlantic Fest, Cala Mijas, or Culture Business Pride in Tenerife alongside Village People."
    },
    gallery: [
      '/Talents/JVV _ ROCIO SAIZ/imgi_60_MG_6157c-570x570.jpg',
      '/Talents/JVV _ ROCIO SAIZ/imgi_6_image0-1-900x1200.jpg',
      '/Talents/JVV _ ROCIO SAIZ/imgi_8_image2-1-900x1200.jpg',
      '/Talents/JVV _ ROCIO SAIZ/rocio-saiz-main.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Cantante / DJ / Activista",
        "Bandas": "Las Chillers, Monterrosa",
        "Plataformas": "Movistar+, W Ibiza"
      },
      "en": {
        "Profession": "Singer / DJ / Activist",
        "Bands": "Las Chillers, Monterrosa",
        "Platforms": "Movistar+, W Ibiza"
      }
    },
    "projects": [
      {
        "title": {
          "es": "La Nevera de Inverfest (Presentadora de Movistar+)",
          "en": "La Nevera de Inverfest (Movistar+ Presenter)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Out of the Closet (Presentadora en W Ibiza)",
          "en": "Out of the Closet (W Ibiza Host)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Proyecto Electro-Pop Monterrosa",
          "en": "Monterrosa Electro-Pop Project"
        },
        "year": "2020"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/9-Wag7Bog4I",
      "https://www.youtube.com/embed/WNxV2ge52qc",
      "https://www.youtube.com/embed/j--FYmTp1pc",
      "https://www.youtube.com/embed/NMOr2-xj7OI"
    ]
  },

  {
    "id": 5,
    "name": "Pablo Erroz",
    type: ['directores'],
    "location": "Palma de Mallorca",
    image: '/Talents/JVV _ PABLO ERROZ/imgi_10_PF25_Erroz_0924-1-scaled.jpg',
    "description": {
      "es": "Pablo Erroz es uno de los diseñadores de moda más prometedores de España. Nacido en Palma de Mallorca y formado en Barcelona, lanzó su propia etiqueta en 2010 tras adquirir experiencia en prendas de exterior y piel con Inditex. El trabajo de Erroz se caracteriza por la creación de piezas unisex y atemporales dirigidas a personas con personalidad que valoran la moda ética y están dispuestas a invertir en prendas que perduren en el tiempo. Sus colecciones interpretan una fusión del estilo urbano con un lujo fácil y sofisticado, adaptándose a las tendencias contemporáneas.\n\nSus designs abarcan ropa y artículos de piel con siluetas audaces y deportivas, reflejando un enfoque artesanal que armoniza el pasado y el futuro. Esta propuesta anual, que fusiona verano e invierno, busca eliminar las temporadas tradicionales y promover un consumo más consciente y respetuoso con el medio ambiente.\n\nA sus 34 años, Pablo Erroz se ha consolidado como una de las voces más influyentes de la moda en España, defendiendo la idea de que la moda es un medio de comunicación capaz de transformar la sociedad. Su colaboración con Xiaomi fusiona a la perfección moda y tecnología, mostrando productos como la Smart Band 8 Pro. Erroz considera que la tecnología es clave en su trabajo, mejorando la conectividad y la eficiencia. Para él, la moda es un puente que conecta personas y empresas, abordando temas de sostenibilidad y uso responsable de la tecnología.\n\nCabe destacar que Pablo Erroz ha diseñado y supervisado la personalización de la carroza de Air Europa para el desfile del Orgullo LGTBIQ+ de Madrid 2024. Esta colaboración refleja la ética multidisciplinar y colaborativa de su casa de moda, que también se ha expandido a través de asociaciones con sectores como la tecnología y la aviación. El diseño de la carroza fusiona la identidad de Air Europa y la marca Erroz, destacando elementos como el azul y blanco del cielo, la libertad y referencias a ciudades icónicas. Esta colaboración refuerza las alianzas estratégicas entre ambas entidades, permitiéndoles seguir explorando nuevos horizontes.\n\nSorprende en Mercedes-Benz Fashion Week Madrid 2025 con una colección inspirada en la energía vibrante de los hoteles urbanos. Sin temporadas, apuesta por la versatilidad y un enfoque unisex, reafirmando su compromiso con la sostenibilidad al minimizar el impacto ambiental y priorizar la durabilidad y atemporalidad de cada prenda.\n\nAdemás, Erroz ha colaborado con marcas destacadas como Xiaomi y Montblanc, y ha sido entrevistado en RTVE y La Razón España, consolidando aún más su reputación en la industria de la moda.",
      "en": "Pablo Erroz is one of Spain's most promising fashion designers. Born in Palma de Mallorca and trained in Barcelona, he launched his own label in 2010 after gaining experience in outerwear and leather with Inditex. Erroz's work is characterized by creating unisex, timeless pieces aimed at people with personality who value ethical fashion and are willing to invest in garments that last over time. His collections interpret a fusion of street style with easy, sophisticated luxury, adapting to contemporary trends.\n\nHis designs span clothing and leather goods with bold, sporty silhouettes, reflecting an artisanal approach that harmonizes past and future. This annual proposal, merging summer and winter, seeks to eliminate traditional seasons and promote more conscious, environmentally friendly consumption.\n\nAt 34, Pablo Erroz has consolidated himself as one of the most influential voices in Spanish fashion, defending the idea that fashion is a communication medium capable of transforming society. His collaboration with Xiaomi perfectly merges fashion and tech, showcasing products like the Smart Band 8 Pro. Erroz considers technology key to his work, improving connectivity and efficiency. For him, fashion is a bridge connecting people and companies, addressing sustainability and responsible use of tech.\n\nIt is worth noting that Pablo Erroz designed and supervised the customization of the Air Europa float for the Madrid 2024 LGTBIQ+ Pride parade. This collaboration reflects the multidisciplinary, collaborative ethics of his fashion house, which has also expanded through partnerships with tech and aviation sectors. The float design merges the identity of Air Europa and the Erroz brand, highlighting elements like blue and white sky, freedom, and references to iconic cities. This partnership reinforces strategic alliances between both entities, allowing them to continue exploring new horizons.\n\nHe surprised at Mercedes-Benz Fashion Week Madrid 2025 with a collection inspired by the vibrant energy of urban hotels. Seasonless, he bets on versatility and a unisex approach, reaffirming his commitment to sustainability by minimizing environmental impact and prioritizing durability and timelessness.\n\nAdditionally, Erroz has collaborated with notable brands like Xiaomi and Montblanc, and has been interviewed on RTVE and La Razón España, further consolidating his reputation in the fashion industry."
    },
    gallery: [
      '/Talents/JVV _ PABLO ERROZ/imgi_10_PF25_Erroz_0924-1-scaled.jpg',
      '/Talents/JVV _ PABLO ERROZ/imgi_7_Pablo_Erroz-1.png',
      '/Talents/JVV _ PABLO ERROZ/imgi_8_PF25_Erroz_0085-1-1-scaled.jpg',
      '/Talents/JVV _ PABLO ERROZ/imgi_9_PF25_Erroz_0160-1-scaled.jpg',
      '/Talents/JVV _ PABLO ERROZ/pablo-erroz.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Diseñador de Moda",
        "Experiencia": "Diseño unisex y circular",
        "Destacado": "Xiaomi, Air Europa, Montblanc, MBFWM"
      },
      "en": {
        "Profession": "Fashion Designer",
        "Experience": "Unisex & circular design",
        "Notable": "Xiaomi, Air Europa, Montblanc, MBFWM"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Mercedes-Benz Fashion Week Madrid 2025",
          "en": "Mercedes-Benz Fashion Week Madrid 2025"
        },
        "year": "2025"
      },
      {
        "title": {
          "es": "Personalización de Carroza LGTBIQ+ de Air Europa",
          "en": "Air Europa LGTBIQ+ Float Customization"
        },
        "year": "2024"
      },
      {
        "title": {
          "es": "Colaboración Xiaomi Smart Band 8 Pro",
          "en": "Xiaomi Smart Band 8 Pro Collaboration"
        },
        "year": "2023-2024"
      },
      {
        "title": {
          "es": "Lanzamiento de Colecciones de Lujo Atemporales",
          "en": "Annual Unisex Luxury Collection Launches"
        },
        "year": "2010-2026"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/0hLdo_1kkvs",
      "https://www.youtube.com/embed/XfqTDCkdxA4",
      "https://www.youtube.com/embed/ULu_gROuutA",
      "https://www.youtube.com/embed/wxQ1aIAiqHo"
    ]
  },

  {
    "id": 7,
    "name": "Giorgio Ciccone",
    type: ['directores'],
    "location": "Milán / Madrid",
    image: '/Talents/JVV _ GIORGIO CICCONE/imgi_6_IMG_7842-e1743098380963-main.jpg',
    "description": {
      "es": "Giorgio Ciccone es una de las figuras más versátiles e innovadoras del panorama de la moda italiana. Con más de diez años de experiencia en el sector, Ciccone ha desarrollado una extraordinaria carrera caracterizada por una visión artística única y un dominio del lenguaje digital. A lo largo de los años, Giorgio ha colaborado con algunas de las marcas más prestigiosas, estableciéndose como director artístico y director creativo de numerosas colecciones cápsula, persiguiendo una visión que combina la estética contemporánea y la experimentación. Su capacidad para interpretar las tendencias a través de lo digital le ha convertido en un referente tanto en el mundo físico como en el virtual. Su versatilidad le ha llevado a protagonizar numerosos proyectos y experiencias digitales como embajador, convirtiéndose en una voz autorizada para todo aquel que desee acercarse a la moda de una forma moderna e innovadora.\n\nWEALREADYOWN es un proyecto multifuncional y sostenible lanzado en 2024 por Giorgio Ciccone y la creadora de contenido Candela Pelizza, nacido de la necesidad de abordar el problema del consumismo excesivo. Basado en el concepto de «no posesión», el proyecto promueve una nueva mentalidad basada en compartir, alquilar y prestar de forma privada, creando un diálogo innovador y colaborativo dentro de la industria de la moda. A través de eventos exclusivos y dinámicos, WEALREADYOWN pretende concienciar e inspirar un cambio cultural hacia un consumo más responsable. Entre sus principales iniciativas, el proyecto organiza eventos de intercambio, cenas sociales éticas, charlas y campañas de comunicación para marcas sostenibles. A uno de los eventos emblemáticos, «Cheers to Swap», ya han asistido figuras clave de la moda en Milán, generando conciencia sobre el concepto de «no posesión» a través del intercambio simbólico de bienes. WEALREADYOWN sigue creciendo con actos previstos en Nápoles y otras ciudades, impulsando su misión de redefinir el concepto de propiedad y consumo.",
      "en": "Giorgio Ciccone is one of the most versatile and innovative figures in the Italian fashion scene. With more than ten years of experience in the sector, Ciccone has developed an extraordinary career characterized by a unique artistic vision and a mastery of digital language. Over the years, Giorgio has collaborated with some of the most prestigious brands, establishing himself as artistic director and creative director of numerous capsule collections, pursuing a vision that combines contemporary aesthetics and experimentation. His ability to interpret trends digitally has made him a reference in both the physical and virtual worlds. His versatility has led him to star in numerous digital projects and experiences as an ambassador, becoming an authorized voice for anyone wishing to approach fashion in a modern and innovative way.\n\nWEALREADYOWN is a multifunctional and sustainable project launched in 2024 by Giorgio Ciccone and content creator Candela Pelizza, born from the need to address the problem of excessive consumerism. Based on the concept of \"non-possession\", the project promotes a new mindset based on sharing, renting, and private lending, creating an innovative and collaborative dialogue within the fashion industry. Through exclusive and dynamic events, WEALREADYOWN aims to raise awareness and inspire a cultural shift towards more responsible consumption. Among its main initiatives, the project organizes swap events, ethical social dinners, talks, and communication campaigns for sustainable brands. One of the flagship events, \"Cheers to Swap\", has already been attended by key fashion figures in Milan, generating awareness of the \"non-possession\" concept through the symbolic exchange of goods. WEALREADYOWN continues to grow with events planned in Naples and other cities, driving its mission to redefine the concept of ownership and consumption."
    },
    gallery: [
      '/Talents/JVV _ GIORGIO CICCONE/imgi_11_P1080997-Edit-1-scaled.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_12_WhatsApp-Image-2025-03-27-at-1.53.10-p.m.-1.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_4_IMG_7843-e1743098728782.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_5_CHANEL-1-scaled.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_6_IMG_7842-e1743098380963-main.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_7_IMG_7847.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_8_IMG_7850.jpg',
      '/Talents/JVV _ GIORGIO CICCONE/imgi_9_IMG_7851.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Creativo de Moda / Director de Arte",
        "Proyectos": "WEALREADYOWN",
        "Colaboradora": "Candela Pelizza"
      },
      "en": {
        "Profession": "Fashion Creative / Art Director",
        "Projects": "WEALREADYOWN",
        "Collaborator": "Candela Pelizza"
      }
    },
    "projects": [
      {
        "title": {
          "es": "WEALREADYOWN (Fundador del proyecto)",
          "en": "WEALREADYOWN (Project Founder)"
        },
        "year": "2024"
      },
      {
        "title": {
          "es": "Cheers to Swap (Evento en Milán)",
          "en": "Cheers to Swap (Milán Event)"
        },
        "year": "2024"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/a2RFE5kTC4g",
      "https://www.youtube.com/embed/29x7dws-FOY"
    ]
  },

  {
    "id": 8,
    "name": "Delaporte",
    type: ['cantantes'],
    "location": "Madrid",
    image: '/Talents/JVV _ DELAPORTE/imgi_4_B0I8139edit-main.jpg',
    "description": {
      "es": "DELAPORTE es un proyecto de música electrónica ítalo-español basado en Madrid, creado por Sandra Delaporte y Sergio Salvi. Los dos provienen de la escena de la música negra en busca de nuevos lenguajes con la música electrónica.\n\nEmpezaron subiendo algunos covers a YouTube hasta que decidieron mostrar su propio material que abarca todos los géneros: JJCale, Talking Heads o Nina Simone, entre otros.\n\nDespués de dos años trabajando juntos para encontrar un sonido adecuado al mercado nacional e internacional, publicaron sus primeras canciones. Atmósferas creativas, beats y la delicada voz de Sandra, son algunos de los elementos que dan personalidad y hacen diferente su proyecto.\n\nHan sido los responsables de crear la música para la nueva versión de la reedición del legendario programa de televisión español “Fama, a Bailar” (Movistar +, #0.) Su tema “A Garden” es la banda sonora principal.\n\nHasta ahora han tocado en festivales como Paraíso, Noches del Botánico, MadTownDays o Mar Abierto. Han compartido escenario con Giorgio Moroder, Bomba Estéreo, y tocado en Madrid, Valencia, Barcelona y Nápoles con una muy buena respuesta de público y crítica.\n\nSu primer proyecto se divide en dos. ‘’ONE’’, lanzado en septiembre de 2017, un EP con seis temas, cinco en inglés y uno en castellano y ‘’UNO’’, lanzado en febrero de 2018, el EP que cierra este episodio de Delaporte que contiene seis canciones en castellano, con ritmos y atmósferas que te llevan a lugares algo más latinos y calurosos, pero que, sin embargo, te inunda del sonido propio de Delaporte, siguiendo la línea de “ONE”. Su segundo trabajo ‘’DOS’’, lanzado a primeros de febrero de 2019, un EP de 8 temas, cuyo single de presentación fue, ‘’Azul Marino’’ que es éxito de escuchas y descargas en todas las plataformas musicales.\n\nAdemás, han realizado colaboraciones con artistas como John Grvy o Alex Guerrero.\n\nEl festival Paraíso en Madrid ha contado con ellos para su primera edición, posicionándoles al nivel de grandes grupos y DJ’s nacionales e internacionales de la esfera electrónica mundial.\n\nLa primera edición del Aperol Fest que tuvo lugar en Madrid y Barcelona en el 2019 contó con Delaporte como única banda para todas sus jornadas, siendo tres tardes en el marco incomparable de la embajada italiana en Madrid y dos tardes en el espectacular Club de Polo de Barcelona.\n\nEl 8 de marzo de 2021, Día Internacional de la Mujer, Delaporte puso en marcha su proyecto llamado ‘’Titanas’’, con el objetivo de visibilizar la mujer en la industria del directo. Se unieron con siete intérpretes femeninas como Rigoberta Bandini, Amaral, Rozalén, Zahara, entre otras. Sandra Delaporte, parte femenina del dúo, ha sido elegida como imagen de Amazon Fashion para una de sus últimas campañas y ambos son imagen de la marca deportiva Nike. Sandra ha sido elegida en el 2021 como embajadora e imagen de Armani Exchange para Portugal, Andorra y España.\n\nDelaporte se hizo con 3 galardones en los Premios MIN (Música Independiente). Fueron premiados con: «Premio Amazon Music al Mejor Artista», «Premio a la Mejor Grabación de Electrónica» y «Premio Soundie al Mejor Videoclip» por »Las Montañas». En julio de 2021, presentaron ‘’Droga Dura’’ y en septiembre de 2021, presentaron su último single llamado ‘’La rosa del Penal (Llamar)’’ con la colaboración del productor Sinego.\n\nHan sido responsables de colaborar en la creación de la música de la serie “Sin huellas”, de Prime Video.",
      "en": "DELAPORTE is an Italian-Spanish electronic music project based in Madrid, created by Sandra Delaporte and Sergio Salvi. The two come from the black music scene in search of new languages with electronic music.\n\nThey started by uploading some covers to YouTube until they decided to show their own material that covers all genres: JJ Cale, Talking Heads, or Nina Simone, among others.\n\nAfter two years of working together to find a sound suitable for the national and international market, they published their first songs. Creative atmospheres, beats, and Sandra's delicate voice are some of the elements that give personality and make their project different.\n\nThey were responsible for creating the music for the new version of the re-edition of the legendary Spanish TV show \"Fama, a Bailar\" (Movistar +, #0). Their song \"A Garden\" is the main soundtrack.\n\nSo far they have played at festivals like Paraíso, Noches del Botánico, MadTownDays, or Mar Abierto. They have shared the stage with Giorgio Moroder, Bomba Estéreo, and played in Madrid, Valencia, Barcelona, and Naples with an excellent response from the public and critics.\n\nTheir first project is split into two. \"ONE\", released in September 2017, an EP with six tracks, five in English and one in Spanish, and \"UNO\", released in February 2018, the EP that closes this episode of Delaporte containing six songs in Spanish, with rhythms and atmospheres that take you to warmer, more Latin places, but which nevertheless floods you with Delaporte's own sound. Their second work, \"DOS\", released in early February 2019, an EP of 8 tracks whose presentation single \"Azul Marino\" was a listener and download hit across all music platforms.\n\nAdditionally, they have collaborated with artists like John Grvy or Alex Guerrero. The Paraíso festival in Madrid featured them in its first edition, positioning them alongside major national and international bands and DJs of the global electronic sphere.\n\nThe first edition of the Aperol Fest in 2019 featured Delaporte as the sole band, playing three afternoons at the Italian Embassy in Madrid and two afternoons at the spectacular Polo Club in Barcelona.\n\nOn March 8, 2021, International Women's Day, Delaporte launched their project \"Titanas\" to give visibility to women in the live performance industry, joining forces with seven female performers like Rigoberta Bandini, Amaral, Rozalén, and Zahara. Sandra Delaporte has been chosen as the face of Amazon Fashion for one of its latest campaigns and both are faces of the sportswear brand Nike. Sandra was chosen in 2021 as the ambassador and face of Armani Exchange for Portugal, Andorra, and Spain.\n\nDelaporte won 3 MIN (Independent Music) Awards: \"Amazon Music Best Artist\", \"Best Electronic Recording\", and \"Soundie Best Video Clip\" for \"Las Montañas\". In July 2021, they presented \"Droga Dura\" and in September 2021, \"La rosa del Penal (Llamar)\" with producer Sinego. They also collaborated on the music for the Prime Video series \"Sin huellas\"."
    },
    gallery: [
      '/Talents/JVV _ DELAPORTE/imgi_10_B0I3346-2.png',
      '/Talents/JVV _ DELAPORTE/imgi_11_DELAPORTE-PREMIOS-MIN.jpg',
      '/Talents/JVV _ DELAPORTE/imgi_4_B0I8139edit-main.jpg',
      '/Talents/JVV _ DELAPORTE/imgi_5_B0I9937-1.png',
      '/Talents/JVV _ DELAPORTE/imgi_6_sandravalencia003-1.png',
      '/Talents/JVV _ DELAPORTE/imgi_7_B0I9714-1.png',
      '/Talents/JVV _ DELAPORTE/imgi_8_B0I8793-1.png',
      '/Talents/JVV _ DELAPORTE/imgi_9_b0i8695-1.png'
    ],
    "stats": {
      "es": {
        "Género": "Electrónica / Pop / Dance",
        "Miembros": "Sandra Delaporte, Sergio Salvi",
        "Premios": "3 Premios MIN (Música Independiente)"
      },
      "en": {
        "Genre": "Electronic / Pop / Dance",
        "Members": "Sandra Delaporte, Sergio Salvi",
        "Awards": "3 MIN Independent Music Awards"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Droga Dura / La rosa del Penal (Sencillos)",
          "en": "Droga Dura / La rosa del Penal (Singles)"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "Titanas (Proyecto de visibilización femenina)",
          "en": "Titanas (Female visibility project)"
        },
        "year": "2021"
      },
      {
        "title": {
          "es": "Las Montañas (Álbum y videoclip premiado)",
          "en": "Las Montañas (Award-winning album & video)"
        },
        "year": "2020-2021"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/6npBUG80hOQ",
      "https://www.youtube.com/embed/4_CiA1bnx60",
      "https://www.youtube.com/embed/-uI-1Jv70qo",
      "https://www.youtube.com/embed/F821HEAu3O0",
      "https://www.youtube.com/embed/lyR-8c4LRtg"
    ]
  },

  {
    "id": 13,
    "name": "Natalie Batlle",
    type: ['emprendedoras', 'comunicadores'],
    "location": "Chicago / Barcelona",
    image: '/Talents/JVV _ NATALIE BATLLE/imgi_6_FOTO-3-NATALIE-main.jpg',
    "description": {
      "es": "Emprendedora, estratega de negocios y embajadora de marca, Natalie destaca por su expertise en storytelling y en la construcción de marcas con propósito, impacto social y proyección mediática. Conraíces en Chicago y España, une su experiencia en comunicaciones estratégicas, alianzas y emprendimiento creativo para convertir bold ideas en negocios de alto impacto.\n\nComo ponente internacional, Natalie inspira con charlas sobre liderazgo, emprendimiento consciente, storytelling de marca, fundraising y cultura emprendedora. Ha colaborado con marcas como LVMH, Bumble y Under Armour, y ha sido reconocida en medios como Vogue, La Vanguardia y Forbes. Vive entre Chicago y Barcelona con su esposo y dos hijos, dedicándose a conectar personas y marcas para crear proyectos innovadores y con propósito.",
      "en": "Entrepreneur, brand consultant, and international speaker. Natalie stands out for her expertise in storytelling and building purpose-driven brands with high social impact and strong media presence.\n\nWith roots in Chicago and Spain, she connects her experience in strategic communications, alliances, and creative entrepreneurship to turn bold ideas into high-impact businesses. As an international speaker, Natalie inspires with talks on leadership, conscious entrepreneurship, brand storytelling, fundraising, and startup culture. She has collaborated with brands like LVMH, Bumble, and Under Armour, and has been recognized in media outlets such as Vogue, La Vanguardia, and Forbes. She lives between Chicago and Barcelona with her husband and two children, dedicated to connecting people and brands to create innovative, purpose-driven projects."
    },
    gallery: [
      '/Talents/JVV _ NATALIE BATLLE/imgi_4_FOTO-1-NATALIE-900x724.jpg',
      '/Talents/JVV _ NATALIE BATLLE/imgi_5_FOTO-2-NATALIE-900x724.jpg',
      '/Talents/JVV _ NATALIE BATLLE/imgi_6_FOTO-3-NATALIE-main.jpg',
      '/Talents/JVV _ NATALIE BATLLE/imgi_7_FOTO-4-NATALIE-900x683.jpg',
      '/Talents/JVV _ NATALIE BATLLE/natalie-batlle.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Emprendedora / Consultora / Ponente",
        "Base": "Chicago & Barcelona",
        "Clientes": "LVMH, Bumble, Under Armour"
      },
      "en": {
        "Profession": "Entrepreneur / Consultant / Speaker",
        "Base": "Chicago & Barcelona",
        "Clients": "LVMH, Bumble, Under Armour"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Consultoría de Marca y Narración Estratégica",
          "en": "Storytelling and Brand Consulting"
        },
        "year": "2020-2026"
      },
      {
        "title": {
          "es": "Artículos editoriales en Vogue y Forbes",
          "en": "Vogue & Forbes Editorial Features"
        },
        "year": "2024"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/IUKVjmlTwp0",
      "https://www.youtube.com/embed/5ghIv0OXRVQ"
    ]
  },

  {
    "id": 11,
    "name": "Ayub El Kadmiri",
    type: ['fotografos'],
    "location": "Madrid",
    image: '/Talents/JVV _ AYUB EL KADMIRI/imgi_87_image00001-e1712686860227-2048x2048-main.jpg',
    "description": {
      "es": "Ayub El Kadmiri, nacido en Marruecos, se mudó a Madrid con apenas 4 años. Desde bien pequeño se interesó por la fotografía, y a los pocos años se convirtió en algo esencial para él. Empezó en su adolescencia retratando a sus amigos con la cámara que su hermano le había prestado, y poco a poco al ver que la fotografía realmente le motivaba y apasionaba decidió dar un paso más grande y comprarse su propio equipo fotográfico, empezando a profesionalizar lo que primero fue solo un hobby.\n\nCon el paso de los años, su fotografía, al igual que él, ha ido evolucionando. Ha realizado proyectos en videoclips (de foto fija), en colecciones de moda, en eventos sociales…Ha trabajado en revistas como Icon Magazine, Metal Magazine y La Vie Magazine. Ha fotografiado en exclusiva a la actriz e influencer Sara Matos en su paso por España, para Icon Magazine ha fotografiado al futbolista Borja Iglesias, al actor Hugo Silva y al cantante Teo Lucadamo. Sigue empapándose de nuevas experiencias y se encuentra abierto a hacer todo tipo de proyectos.",
      "en": "Ayub El Kadmiri, born in Morocco, moved to Madrid when he was just 4 years old. From a very young age he was interested in photography, and within a few years it became essential for him. He started in his adolescence portraying his friends with a camera lent by his brother, and gradually, seeing that photography really motivated and excited him, he decided to take a bigger step and buy his own equipment, starting to professionalize what was initially just a hobby.\n\nOver the years, his photography, like him, has evolved. He has carried out projects in music videos (still photography), fashion collections, social events... He has worked in magazines such as Icon Magazine, Metal Magazine, and La Vie Magazine. He has photographed actress and influencer Sara Matos exclusively during her visit to Spain, and for Icon Magazine he has photographed footballer Borja Iglesias, actor Hugo Silva, and singer Teo Lucadamo. He continues to soak up new experiences and is open to all kinds of projects."
    },
    gallery: [
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_4_FOTO-1-AYUB.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_5_FOTO-2-AYUB.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_6_FOTO-3-AYUB.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_7_FOTO-4-AYUB.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_87_image00001-e1712686860227-2048x2048-main.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_8_FOTO-5-AYUB.jpg',
      '/Talents/JVV _ AYUB EL KADMIRI/imgi_9_FOTO-6-AYUB.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Fotógrafo",
        "Revistas": "Icon, Metal, La Vie",
        "Colaboradores": "Hugo Silva, Sara Matos, Borja Iglesias"
      },
      "en": {
        "Profession": "Photographer",
        "Magazines": "Icon, Metal, La Vie",
        "Collaborators": "Hugo Silva, Sara Matos, Borja Iglesias"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Fotografía editorial para Icon Magazine",
          "en": "Editorial Photography for Icon Magazine"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Sesión exclusiva con Sara Matos",
          "en": "Exclusive Session with Sara Matos"
        },
        "year": "2023"
      }
    ]
  },

  {
    "id": 10,
    "name": "Pepa Charro (La Terremoto)",
    type: ['cantantes', 'comunicadores'],
    "location": "Palma de Mallorca",
    image: '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_10_7j9a9754-1-1.jpg',
    "description": {
      "es": "Entre mil mundos se encuentra Pepa Charro y su alterego La Terremoto de Alcorcón, con una larga trayectoria profesional que nace de la compañía teatral Diabéticas Aceleradas y que le lleva por derroteros como el más puro cabaret, el cine, el teatro, la televisión o la gastronomía de vanguardia.\n\nCon películas a sus espaldas como “Piedras” de Ramón Salazar, “Carta a Eva” de Agustí Villaronga o “Los Amantes pasajeros” de Pedro Almodóvar con quien colabora artísticamente en sus estrenos como maestra de ceremonias y coordinadora artística desde “Volver” acompañándole al Festival de Cannes con “La mala Educación” y “Julieta”.\n\nEntre sus últimos estrenos se encuentran las películas como ‘’Loli Tormenta’’ de Agustí Villaronga y “La Novia de América” de Alfonso Albacete.\n\nPresentadora de multitud de galas desde las galas “Shangay”, aniversario de la revista AD o cualquier evento LGTBIQ+ , colectivo con el que lleva trabajando después de más de 20 años en España, Italia, Inglaterra, Portugal, Bélgica, Francia o EEUU.\n\nSe atreve a hacer cameos con artistas de la talla de Fangoria o Hidrogenesse, a producir su propio espectáculo con la dirección de Antonia San Juan o a coordinar el cabaret del MACBA, confeccionar su propia pieza para el Museo de Arte Contemporáneo Es Baluard e inaugurar el MUSAC.\n\nEl entretenimiento  en diversos formatos es pieza clave para alcanzar popularidad concursante de programas de la talla de “Masterchef Celebrity” de TVE, “Tu cara me suena” o “Me resbala” de Antena 3 o presentadora de “Niquelaó” de la plataforma Netflix.\n\nProtagoniza la serie “Escenas de matrimonio” y “Fenómenos” de Antena 3 y colabora en otras como “Aída”, “Paquita Salas” o “Arde Madrid”, “Con el culo al aire” y “El Ministerio del tiempo”\n\nParticipa también siempre en tono de humor del programa de RNE “Tarde lo que tarde” después de haberlo sido de Onda Cero con “Surtido de Ibéricos” de la mano de Carlos Latre o “Lo que es la vida” con Nieves Herrero.\n\nCompagina su vida artística con la hostelería siendo propietaria y dinamizadora cultural del Bar Flexas en Palma donde congrega cada año a cerca de 10.000 personas con un cartel artístico muy ecléctico colaborando con artistas de la talla de EL niño de Elche, Joe Crepúsculo, Massiel, la Bienquerida, Papá Topo, Milly Vanilly, Betty Missiego o Chicks on speed.",
      "en": "Between a thousand worlds lies Pepa Charro and her alter ego La Terremoto de Alcorcón, with a long professional career born from the theater company Diabéticas Aceleradas, leading her to paths such as pure cabaret, cinema, theater, television, or avant-garde gastronomy.\n\nWith films under her belt such as \"Piedras\" by Ramón Salazar, \"Carta a Eva\" by Agustí Villaronga, or \"Los Amantes pasajeros\" by Pedro Almodóvar, with whom she collaborates artistically in his premieres as master of ceremonies and artistic coordinator since \"Volver\", accompanying him to the Cannes Film Festival with \"La mala Educación\" and \"Julieta\".\n\nAmong her latest releases are films like \"Loli Tormenta\" by Agustí Villaronga and \"La Novia de América\" by Alfonso Albacete.\n\nHost of many galas from the \"Shangay\" galas, the AD magazine anniversary, or any LGTBIQ+ event, a community she has been working with for more than 20 years in Spain, Italy, England, Portugal, Belgium, France, and the US.\n\nShe dares to make cameos with artists of the caliber of Fangoria or Hidrogenesse, to produce her own show under the direction of Antonia San Juan, or to coordinate the cabaret of MACBA, make her own piece for the Es Baluard Museum of Contemporary Art, and inaugurate the MUSAC.\n\nEntertainment in various formats is key to achieving popularity, as a contestant in shows such as TVE's \"Masterchef Celebrity\", \"Tu cara me suena\" or \"Me resbala\" on Antena 3, or host of Netflix's \"Niquelaó\".\n\nShe stars in the series \"Escenas de matrimonio\" and \"Fenómenos\" on Antena 3 and collaborates in others such as \"Aída\", \"Paquita Salas\", \"Arde Madrid\", \"Con el culo al aire\" and \"El Ministerio del tiempo\".\n\nShe also participates, always in a humorous tone, in the RNE program \"Tarde lo que tarde\" after having done so on Onda Cero with \"Surtido de Ibéricos\" alongside Carlos Latre, or \"Lo que es la vida\" with Nieves Herrero.\n\nShe balances her artistic life with hospitality, being the owner and cultural promoter of Bar Flexas in Palma, where she gathers around 10,000 people each year with an eclectic artistic lineup, collaborating with artists of the caliber of El Niño de Elche, Joe Crepúsculo, Massiel, La Bienquerida, Papá Topo, Milli Vanilli, Betty Missiego, or Chicks on Speed."
    },
    gallery: [
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_10_7j9a9754-1-1.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_11_image1-1-900x1200.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_4_LA-TERREMOTO-10-ANIBEARSARIO-azul-1-900x1139.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_5_PEPA-CHARRO-1-copia-1-900x1200.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_6_PEPA-CHARRO-CHAQUETA-ROJA-copia-1-900x1200.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_7_PEPA-CHARRO-20183545-web-1-853x1200.png',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_8_TERREMOTO-ABRIGO-DEPIE-1-857x1200.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/imgi_9_7j9a9622-1-1.jpg',
      '/Talents/JVV _ PEPA CHARRO _ LA TERREMOTO DE ALCORCÓN/pepa-charro.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Actriz / Humorista / Vedette",
        "Negocios": "Bar Flexas (Palma)",
        "Directores": "Pedro Almodóvar, Agustí Villaronga"
      },
      "en": {
        "Profession": "Actress / Comedian / Vedette",
        "Business": "Bar Flexas (Palma)",
        "Directors": "Pedro Almodóvar, Agustí Villaronga"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Loli Tormenta (Película de Agustí Villaronga)",
          "en": "Loli Tormenta (Agustí Villaronga Film)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Niquelao! (Presentadora en Netflix)",
          "en": "Niquelao! (Netflix Host)"
        },
        "year": "2020"
      },
      {
        "title": {
          "es": "Los Amantes Pasajeros (Película de Almodóvar)",
          "en": "Los Amantes Pasajeros (Almodóvar Film)"
        },
        "year": "2013"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/BQhF7urz5uU",
      "https://www.youtube.com/embed/W9OlHX5vmNU",
      "https://www.youtube.com/embed/HDuL-maCC7A",
      "https://www.youtube.com/embed/j22ybj-flh4",
      "https://www.youtube.com/embed/lGkURikIdzI"
    ]
  },

  {
    "id": 12,
    "name": "Ion Leibar",
    type: ['fotografos'],
    "location": "Madrid",
    image: '/Talents/JVV _ ION LEIBAR/imgi_4_Ion-Leibal-900x1200-main.jpg',
    "description": {
      "es": "Ion Leibar nacido en Bermeo, País Vasco, recientemente dejó su vida atrás y su puesto de Ingeniero informático para mudarse a Madrid a perseguir sus sueños y empezar a dedicarse de lleno a lo que le apasiona, la fotografía.\n\nDesde entonces ha participado en diferentes proyectos y ha trabajado con marcas como Gucci, Jimmy Choo, Loewe, Louis Vuitton, Carolina Herrera, entre muchas otras.\n\nHan sido ya bastantes editoriales las que han contado con él como fotógrafo, como Vogue Spain, Fucking Young, Vein Magazine, Neo2, entre otras.",
      "en": "Ion Leibar, born in Bermeo, Basque Country, recently left his life behind and his position as an IT Engineer to move to Madrid to pursue his dreams and dedicate himself fully to his passion, photography.\n\nSince then, he has participated in different projects and worked with brands such as Gucci, Jimmy Choo, Loewe, Louis Vuitton, Carolina Herrera, among many others.\n\nQuite a few editorials have already counted on him as a photographer, such as Vogue Spain, Fucking Young, Vein Magazine, Neo2, among others."
    },
    gallery: [
      '/Talents/JVV _ ION LEIBAR/imgi_10_unnamed.png',
      '/Talents/JVV _ ION LEIBAR/imgi_4_Ion-Leibal-900x1200-main.jpg',
      '/Talents/JVV _ ION LEIBAR/imgi_5_Ion-Leibar-4-900x1200.jpg',
      '/Talents/JVV _ ION LEIBAR/imgi_6_Ion-Leibar-3-900x1200.jpg',
      '/Talents/JVV _ ION LEIBAR/imgi_7_Ion-Leibar-2-900x1200.jpg',
      '/Talents/JVV _ ION LEIBAR/imgi_8_2-scaled-900x1200.jpg',
      '/Talents/JVV _ ION LEIBAR/imgi_9_unnamed-2.png'
    ],
    "stats": {
      "es": {
        "Profesión": "Fotógrafo",
        "Marcas": "Gucci, Loewe, Louis Vuitton, Jimmy Choo",
        "Editoriales": "Vogue Spain, Fucking Young, Vein, Neo2"
      },
      "en": {
        "Profession": "Photographer",
        "Brands": "Gucci, Loewe, Louis Vuitton, Jimmy Choo",
        "Editoriales": "Vogue Spain, Fucking Young, Vein, Neo2"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Campañas de Moda Internacional (Gucci & Loewe)",
          "en": "International Fashion Campaigns (Gucci & Loewe)"
        },
        "year": "2023-2024"
      },
      {
        "title": {
          "es": "Editoriales Editoras (Vogue & Neo2)",
          "en": "Editorial shoots (Vogue & Neo2)"
        },
        "year": "2023"
      }
    ]
  },

  {
    "id": 18,
    "name": "Diego Osorio",
    type: ['actores'],
    "location": "Nueva York",
    image: '/Talents/JVV _ DIEGO OSORIO/imgi_5_image-2-main.png',
    "description": {
      "es": "Diego lleva varios años dedicado en pleno a su carrera como actor, tanto formándose en EEUU como participando en ficciones como «Drug Mule» o «Roshambo». Desde Nueva York, donde reside, no para de sumarse y crear proyectos interesantes.\n\nAdemás también hemos podido verle recientemente en el especial de Callejeros Viajeros de Nueva York donde pudo hablar sobre su carrera como actor y su vida en América.\n\nHa colaborado con un sinfín de marcas y ha aparecido en casi todas las revistas más importantes de nuestro país. En esta etapa está encantado de sumarse a acciones afines a su perfil y su trayectoria y espera que también en nuestro país se le conozca más en detalle y conseguir emocionar y transmitir a quienes le sigan a través de series, fashion films, cortos y películas.",
      "en": "Diego has spent several years fully dedicated to his acting career, both training in the US and participating in productions like \"Drug Mule\" or \"Roshambo\". From New York, where he resides, he keeps joining and creating interesting projects.\n\nAdditionally, we could recently see him in the Callejeros Viajeros special on New York, where he spoke about his acting career and life in America.\n\nHe has collaborated with countless brands and appeared in almost all the most important magazines in Spain. In this phase, he is delighted to join actions aligned with his profile and career, hoping to be known in more detail in our country to move and connect with those who follow him through series, fashion films, shorts, and films."
    },
    gallery: [
      '/Talents/JVV _ DIEGO OSORIO/imgi_4_image-3.png',
      '/Talents/JVV _ DIEGO OSORIO/imgi_5_image-2-main.png',
      '/Talents/JVV _ DIEGO OSORIO/imgi_6_MG_1160-copia.jpg',
      '/Talents/JVV _ DIEGO OSORIO/imgi_7_DiegoOsorio-1.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Actor",
        "Residencia": "Nueva York (EEUU)",
        "Trabajos Destacados": "Drug Mule, Roshambo, Callejeros Viajeros"
      },
      "en": {
        "Profession": "Actor",
        "Residence": "New York (USA)",
        "Notable Works": "Drug Mule, Roshambo, Callejeros Viajeros"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Callejeros Viajeros: Nueva York (Especial)",
          "en": "Callejeros Viajeros: New York (Special)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Roshambo (Actor principal)",
          "en": "Roshambo (Lead actor)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Drug Mule (Cortometraje de ficción)",
          "en": "Drug Mule (Fiction short film)"
        },
        "year": "2021"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/zRcBJFCmmmk"
    ]
  },

  {
    "id": 15,
    "name": "Chloe’s Clue",
    type: ['cantantes'],
    "location": "Valencia",
    image: '/Talents/JVV _ CHLOE’S CLUE/imgi_6_Cloes2-main.jpg',
    "description": {
      "es": "Chlöe’s Clue es el proyecto de la valenciana Raquel Adalid (1996) que surge como resultado de casualidades románticas del destino en el año 2014 y acaba convirtiéndose en la vía bendita para desenmascarar y desvelar sus delicias más intimistas, misteriosas, ocultas y prohibidas a través de los “cantos/llantos ligeros” -así denomina Raquel a las melodías que crea y predica-. La vena musical de la cantautora se venía prediciendo en una de esas mágicas y majestuosas bolas de cristal desde sus primeros años de vida. Melómana de nacimiento, a los tres años ya pedía mini-guitarras de juguete a los Reyes Magos y robaba todos los mandos de televisión para utilizarlos a modo de micrófono.",
      "en": "Chlöe's Clue is the project of Raquel Adalid (1996) from Valencia, arising from romantic coincidences of destiny in 2014, becoming a blessed way to unmask and reveal her most intimate, mysterious, hidden, and forbidden delights through \"light songs/cries\" — as Raquel calls the melodies she creates and preaches. The singer-songwriter's musical vein had been predicted in a magic crystal ball from her earliest years of life. A music lover by birth, at age three she was already asking the Three Wise Men for toy mini-guitars and stealing all the TV remotes to use as microphones."
    },
    gallery: [
      '/Talents/JVV _ CHLOE’S CLUE/imgi_10_Ismael-Nasrollah-11.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_11_Ismael-Nasrollah-1.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_4_Cloes1principal.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_5_Cloes3.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_6_Cloes2-main.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_7_Cloes.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_8_Ismael-Nasrollah-17.jpg',
      '/Talents/JVV _ CHLOE’S CLUE/imgi_9_Ismael-Nasrollah-15.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Cantautora / Artista",
        "Nombre Real": "Raquel Adalid",
        "Instrumentos": "Voz, Guitarra"
      },
      "en": {
        "Profession": "Singer-songwriter / Artist",
        "Real Name": "Raquel Adalid",
        "Instruments": "Vocals, Guitar"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Lanzamiento y Producciones Independientes",
          "en": "Releases & Independent Productions"
        },
        "year": "2014-2026"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/8eSabd_tKeY",
      "https://www.youtube.com/embed/1T497MY4o9E"
    ]
  },

  {
    "id": 9,
    "name": "Impulsiva",
    type: ['djs'],
    "location": "Valencia / Madrid",
    image: '/Talents/JVV _ IMPULSIVA/imgi_4_IMPULSIVA-ph_Luz_Soria-web-9135-900x1200-main.jpg',
    "description": {
      "es": "IMPULSIVA es un duo español de música electrónica vocal que nace en 2015, compuesto por el valenciano Carlos Gorbe y el madrileño Daniel Jumillas.\n\nSu música está muy influenciada por el sonido británico de antes y de ahora. En 2020 sacan su primer álbum “As We Are”, un LP de 9 temas que hace un recorrido emocional sobre diferentes facetas de sus propios autores. Algunos de estos se pueden escuchar en la serie de HBO “Todo lo Otro”.\n\nTambién han participado haciendo música para diversos espectáculos teatrales tanto en solitario como en conjunto.",
      "en": "IMPULSIVA is a Spanish vocal electronic music duo born in 2015, composed of Carlos Gorbe from Valencia and Daniel Jumillas from Madrid.\n\nTheir music is highly influenced by British sounds of the past and present. In 2020 they released their first album \"As We Are\", an LP of 9 tracks that takes an emotional journey through different facets of its authors. Some of these tracks can be heard in the HBO series \"Todo lo Otro\".\n\nThey have also participated in making music for various theater shows, both individually and collectively."
    },
    gallery: [
      '/Talents/JVV _ IMPULSIVA/imgi_4_IMPULSIVA-ph_Luz_Soria-web-9135-900x1200-main.jpg',
      '/Talents/JVV _ IMPULSIVA/imgi_5_IMPULSIVA-ph_Luz_Soria-web-9267-900x1200.jpg',
      '/Talents/JVV _ IMPULSIVA/imgi_6_IMPULSIVA-ph_Luz_Soria-web-9330-900x1200.jpg',
      '/Talents/JVV _ IMPULSIVA/imgi_7_IMPULSIVA-ph_Luz_Soria-web-9475-900x1200.jpg',
      '/Talents/JVV _ IMPULSIVA/imgi_8_image_6483441-4-900x1200.jpg',
      '/Talents/JVV _ IMPULSIVA/imgi_9_image_6483441-5-900x1200.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Duo de Música Electrónica Vocal",
        "Miembros": "Carlos Gorbe, Daniel Jumillas",
        "Álbumes": "As We Are (2020)"
      },
      "en": {
        "Profession": "Vocal Electronic Music Duo",
        "Members": "Carlos Gorbe, Daniel Jumillas",
        "Albums": "As We Are (2020)"
      }
    },
    "projects": [
      {
        "title": {
          "es": "As We Are (Álbum de Debut)",
          "en": "As We Are (Debut Album)"
        },
        "year": "2020"
      },
      {
        "title": {
          "es": "Música para Todo Lo Otro (Serie de HBO)",
          "en": "Music for Todo Lo Otro (HBO Series)"
        },
        "year": "2021"
      }
    ]
  },

  {
    "id": 16,
    "name": "Eli Kapowski",
    type: ['djs'],
    "location": "Barcelona",
    image: '/Talents/JVV _ ELI KAPOWSKI/imgi_5_09-WS-160822-WEB-96-900x1200-main.jpg',
    "description": {
      "es": "Eli Kapowski es una selectora que explora el sonido disco láser más 80′. Sus sesiones eclécticas de principio a final y profundizan en el sonido de la música funky y disco con toques houseros y ritmo electrónico con mucho beat, que sin duda no te harán parar de bailar.\n\nEn activo desde 2014, ha estado detrás de los platos en los lugares más emblemáticos de la ciudad condal y alrededores.\n\nEs pura explosión de good vibe remezclada estilosamente con mucha energía y elegancia. No hay ninguna restricción que valga: disfrute y baile por dentro y por fuera, sentado o de pie.",
      "en": "Eli Kapowski is a selector exploring the laser disco sound of the 80s. Her sessions are eclectic from start to finish, delving into funky and disco music with house touches and electronic rhythms with heavy beats that will surely keep you dancing.\n\nActive since 2014, she has been behind the decks in the most iconic spots of Barcelona and its surroundings.\n\nShe is a pure explosion of good vibes stylishly mixed with energy and elegance. No restrictions apply: enjoy and dance inside and out, sitting or standing."
    },
    gallery: [
      '/Talents/JVV _ ELI KAPOWSKI/imgi_10_2020-03-26-2-1.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_4_WhatsApp-Image-2022-10-27-at-12.27.21-7.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_5_09-WS-160822-WEB-96-900x1200-main.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_6_image2-900x1200.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_7_image1-900x1200.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_8_B173ABFE-2BFE-4437-8FE8-D40E9BE41A86-900x1200.jpg',
      '/Talents/JVV _ ELI KAPOWSKI/imgi_9_2020-03-26-1-1.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "DJ / Selectora",
        "Estilo": "Disco Láser 80s / Funky / House",
        "Trayectoria": "Activa desde 2014"
      },
      "en": {
        "Profession": "DJ / Selector",
        "Style": "Disco Laser 80s / Funky / House",
        "Career": "Active since 2014"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Sesiones Residencias en Barcelona",
          "en": "Residency Sessions in Barcelona"
        },
        "year": "2014-2026"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/mfF6bnxwpQk"
    ]
  },

  {
    "id": 17,
    "name": "Martina Benvenutto",
    type: ['comunicadores'],
    "location": "Mallorca",
    image: '/Talents/JVV _ MARTINA BENVENUTTO/imgi_4_image_50408961-900x1200-main.jpg',
    "description": {
      "es": "Martina Benvenutto es divertida, creativa, auténtica y cosmopolita.\nNacida en Uruguay y residente desde hace varios años en Mallorca es actualmente la directora creativa y fundadora de la marca de ropa “Benvenutto”, inspirada en la tendencia boho chic creada para la mujer con un espíritu libre.\n\nAdemás, es diseñadora de interiores, especialidad para la que se formó en Barcelona. De ahí nació su pasión por coleccionar obras de arte, siendo embajadora de Knack Art Show.\n\nHa sido musa de grandes fotógrafos reconocidos como Blaise Retenward, Anna Panic y Leonardo Condor, entre otros y ha aparecido en revistas, diarios nacionales y locales, así como en televisiones, como por ejemplo en el programa Holi Málaga donde ha sido requerida ya en diversas ocasiones.\n\nSon muchas las marcas que colaboran con ella para que a través de su mirada comunique, tales como San Miguel, Port Aventura y ha sido musa de diseñadores en el desfile del hotel W Ibiza donde desfiló con las grandes creaciones de firmas nacionales como las de Ivvana Mestre, Natividad Castillo, Vigina Vald, Weyler, entre otras.",
      "en": "Martina Benvenutto is fun, creative, authentic, and cosmopolitan. Born in Uruguay and residing in Mallorca for several years, she is currently the creative director and founder of the clothing brand \"Benvenutto\", inspired by the boho chic trend created for free-spirited women.\n\nAdditionally, she is an interior designer, a specialty she trained for in Barcelona. From there, her passion for collecting artwork was born, serving as an ambassador for the Knack Art Show.\n\nShe has been a muse to great renowned photographers such as Blaise Retenward, Anna Panic, and Leonardo Condor, among others, and has appeared in magazines, national and local newspapers, and TV shows like Holi Málaga. Many brands collaborate with her, such as San Miguel and Port Aventura, and she has desfiled at the W Ibiza hotel with creations of national firms like Ivvana Mestre, Natividad Castillo, Virginia Vald, and Weyler, among others."
    },
    gallery: [
      '/Talents/JVV _ MARTINA BENVENUTTO/imgi_4_image_50408961-900x1200-main.jpg',
      '/Talents/JVV _ MARTINA BENVENUTTO/imgi_5_Foto-7-9-22-13-36-55.jpg',
      '/Talents/JVV _ MARTINA BENVENUTTO/imgi_6_Foto-6-9-22-8-51-22-900x1200.jpg',
      '/Talents/JVV _ MARTINA BENVENUTTO/imgi_7_Foto-1-9-22-9-43-43-3-900x1200.jpg',
      '/Talents/JVV _ MARTINA BENVENUTTO/imgi_8_Captura-de-pantalla-2022-12-29-a-las-11.33.29-824x1200.png'
    ],
    "stats": {
      "es": {
        "Profesión": "Diseñadora de Interiores / Modelo",
        "Marca": "Benvenutto Clothing",
        "Embajadora": "Knack Art Show"
      },
      "en": {
        "Profession": "Interior Designer / Model",
        "Brand": "Benvenutto Clothing",
        "Ambassador": "Knack Art Show"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Desfile de moda del W Ibiza (Musa)",
          "en": "W Ibiza Fashion Parade (Muse)"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Embajadora de Knack Art Show",
          "en": "Knack Art Show Ambassador"
        },
        "year": "2021"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/nBREkdaodv8",
      "https://www.youtube.com/embed/BjNhHC0y5Mk"
    ]
  },

  {
    "id": 19,
    "name": "Alexctiv",
    type: ['fotografos'],
    "location": "Madrid",
    image: '/Talents/JVV _ ALEXCTIV/Alexctiv_main.jpeg',
    "description": {
      "es": "Alexctiv, a su corta edad, es director de campañas de vídeo publicitarias, dirige arte y diseña estrategias de marca para empresas en la industria de la moda, la belleza y el lujo.\n\nGraduado en Telecomunicaciones en la Universidad Politécnica de Madrid, desarrolló su pasión por las películas cinematográficas en 2015. Desde entonces, la atención a los detalles le ha llevado a crear películas de moda, estilo de vida, comerciales de automóviles y más recientemente, también vídeos de hospitalidad (principalmente de hoteles) …\n\nSu estilo personal, con imágenes minimalistas, dinámicas y emotivas, le llevan a realizar vídeos con una técnica narrativa cercana que unifica exclusividad con perspectivas culturales y de tendencia.\n\nAunque su principal rol es el de director, siempre disfruta cogiendo la cámara y también editando.\n\nAlgunos de sus clientes son el grupo LVMH, Audi, Alma en Pena, Vogue, Mastercard, Fever Tree, Prada, etc.",
      "en": "Alexctiv, at a young age, is a director of commercial video campaigns, art director, and brand strategist for companies in the fashion, beauty, and luxury industries.\n\nGraduated in Telecommunications from the Polytecnic University of Madrid, he developed his passion for films in 2015. Since then, his attention to detail has led him to create fashion films, lifestyle films, car commercials, and more recently, hospitality videos (mainly for hotels)...\n\nHis personal style, with minimalist, dynamic, and emotional images, leads him to make videos with a close narrative technique that unifies exclusivity with cultural and trend perspectives.\n\nAlthough his main role is director, he always enjoys taking the camera and editing.\n\nSome of his clients include the LVMH group, Audi, Alma en Pena, Vogue, Mastercard, Fever Tree, Prada, etc."
    },
    gallery: [
      '/Talents/JVV _ ALEXCTIV/Alexctiv_main.jpeg',
      '/Talents/JVV _ ALEXCTIV/imgi_10_image_6487327-6.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_11_Iova_02.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_12_Iova_07.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_13_Iova_05.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_14_Iova_06.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_15_image_6487327-3.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_16_image_6487327-2.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_17_Iova_01.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_18_image_6483441-4.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_19_unnamed-2-1.png',
      '/Talents/JVV _ ALEXCTIV/imgi_22_unnamed-1.png',
      '/Talents/JVV _ ALEXCTIV/imgi_4_image_6483441-1.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_52_image_6487327-768x756.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_5_image_6483441-3.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_6_Iova_04.jpg',
      '/Talents/JVV _ ALEXCTIV/imgi_7_image_6483441-5.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Director / Filmmaker / Productor",
        "Clientes": "LVMH, Audi, Vogue, Prada",
        "Estudios": "Telecomunicaciones (UPM)"
      },
      "en": {
        "Profession": "Director / Filmmaker / Producer",
        "Clients": "LVMH, Audi, Vogue, Prada",
        "Education": "Telecommunications (UPM)"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Producciones de moda y lujo internacionales",
          "en": "International fashion and luxury shoots"
        },
        "year": "2020-2026"
      }
    ],
    "videos": [
      "https://player.vimeo.com/video/299179817?h=345e75eb67",
      "https://player.vimeo.com/video/299179724?h=924fc54e78",
      "https://player.vimeo.com/video/299179756?h=afe4d8b5e5"
    ]
  },

  {
    "id": 21,
    "name": "Ana Julieta",
    type: ['djs'],
    "location": "Madrid",
    image: '/Talents/JVV _ ANA JULIETA/imgi_5_ensaio2-3-900x1080-main.jpg',
    "description": {
      "es": "Ana Julieta es mitad española, mitad brasileña y nacida en París, sus orígenes multiculturales hacen que su música tenga elementos únicos.\n\nSu nicho musical es el circuit, estilo predominante en la escena LGBTQIA+. Con una performance siempre enérgica, es conocida por llevar su energía brasileña a cualquier evento de manera a crear momentos que se quedan en la memoria.\n\nAna Julieta vivió toda su vida en Salvador de Bahía, Brasil donde allí ha compartido escenario con los grandes de la música brasileña. Recién llegada a Madrid, ya conserva dos residencias en la capital y mantiene su residencia en uno de los mayores grupos de eventos LGBTQIA+ de Brasil.",
      "en": "Ana Julieta is half Spanish, half Brazilian, and born in Paris; her multicultural origins give her music unique elements.\n\nHer musical niche is circuit, the predominant style in the LGBTQIA+ scene. With an energetic performance, she is known for bringing her Brazilian energy to any event to create memorable moments.\n\nAna Julieta lived her whole life in Salvador de Bahía, Brazil, where she shared the stage with greats of Brazilian music. Recently arrived in Madrid, she already holds two residencies in the capital and maintains her residency in one of Brazil's largest LGBTQIA+ event groups."
    },
    gallery: [
      '/Talents/JVV _ ANA JULIETA/imgi_4_IMG_8995.jpg.jpg',
      '/Talents/JVV _ ANA JULIETA/imgi_5_ensaio2-3-900x1080-main.jpg',
      '/Talents/JVV _ ANA JULIETA/imgi_6_ANAJU-SHINE-37.jpg-900x1200.jpg',
      '/Talents/JVV _ ANA JULIETA/imgi_7_ANA-JULIETA_5a-FOTO-900x1200.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "DJ / Arquitecta",
        "Origen": "Franco-Español-Brasileña",
        "Residencias": "Madrid y Salvador de Bahía"
      },
      "en": {
        "Profession": "DJ / Architect",
        "Origin": "French-Spanish-Brazilian",
        "Residencies": "Madrid & Salvador de Bahía"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Residencias musicales en Madrid",
          "en": "Madrid Club Residencies"
        },
        "year": "2024"
      },
      {
        "title": {
          "es": "Shows en vivo en Salvador de Bahía (Brasil)",
          "en": "Live Shows in Salvador de Bahía (Brazil)"
        },
        "year": "2022-2023"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/W4pKyTbJDoY"
    ]
  },

  {
    "id": 20,
    "name": "Patrick Schuttler",
    type: ['fotografos'],
    "location": "Barcelona",
    image: '/Talents/JVV _ PATRICK SCHUTTLER/imgi_4_image-main.png',
    "description": {
      "es": "El fotógrafo alemán – australiano, Patrick Schuttler se mudó a Barcelona en 2019 después de 10 años viviendo en Londres. Empezando en el mundo de la fotografía con 12 años en el estudio de fotografía de su padre en Perth, Australia, y más tarde viajando el mundo durante más de 18 años fotografiando moda, publicidad y paisajes. Patrick ahora considera Barcelona su nuevo hogar y base de su carrera en expansión.\n\nLas influencias artísticas de Patrick son diversas y su mayor pasión nace de su amor por la naturaleza y el mar, habiendo crecido surfeando las mejores olas de Australia.",
      "en": "German-Australian photographer Patrick Schuttler moved to Barcelona in 2019 after living in London for 10 years. Starting in the photography world at age 12 in his father's studio in Perth, Australia, and later traveling the world for over 18 years shooting fashion, advertising, and landscapes. Patrick now considers Barcelona his new home and base for his expanding career.\n\nPatrick's artistic influences are diverse, and his greatest passion comes from his love of nature and the sea, having grown up surfing Australia's best waves."
    },
    gallery: [
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_4_image-main.png',
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_5_Patrick_Schuttler001.jpg',
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_6_Patrick_Schuttler003.jpg',
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_7_Patrick_Schuttler002.jpg',
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_8_Patrick_Schuttler005.jpg',
      '/Talents/JVV _ PATRICK SCHUTTLER/imgi_9_Portada.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Fotógrafo",
        "Especialidad": "Moda, Publicidad, Paisaje",
        "Experiencia": "Más de 18 años"
      },
      "en": {
        "Profession": "Photographer",
        "Specialty": "Fashion, Advertising, Landscape",
        "Experience": "Over 18 years"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Fotografía comercial y editorial en Barcelona",
          "en": "Commercial & Editorial Photography in Barcelona"
        },
        "year": "2019-2026"
      }
    ]
  },

  {
    "id": 14,
    "name": "Suri",
    type: ['djs'],
    "location": "Madrid / Valencia",
    image: '/Talents/JVV _ SURI/imgi_10_Foto-27-6-18-5-52-09 (1)-main.jpg',
    "description": {
      "es": "DJ Suri, DJ internacional y productor, Ganador en 2011 de un EMA (Espiral Music Award) al Productor revelación del año. Lleva 18 Años dedicados a la música, actuando en las cabinas de medio mundo, y ha producido música y remixes oficiales para las mayores artistas nacionales e internacionales como Lady Gaga, PINK, Wyclef Jean, Beyonce, Paris Hilton, Azealia Banks, Rozalla o Mónica Naranjo, entre muches otres.\n\nActualmente, es DJ residente de la marca mundial “Papa Party” de Eliad Cohen, de la discoteca Republik en Madrid y Deseo 54 en Valencia.\n\nSin duda cabe destacar el remix para Lady Gaga en 2016 del single “Til It Happens To You”, canción nominada a un Óscar, convirtiendo a Suri en el primer español en hacer un remix para la mundialmente conocida y multipremiada artista internacional, consiguiendo llegara al N.º 1 de la lista Billboard Dance Club Chart, la lista de éxitos más importante del mundo. Miles de medios nacionales e internacionales se hicieron eco de los dos españoles que habían remezclado a Lady Gaga.\n\nEn 2018 remezclo la canción ‘Secrets’ de la artista Pink consiguiendo también el N.º 1 en la lista Billboard. DJ Suri ha conseguido tener más de 15 remixes en el top 20 de dicha lista.\n\nEn 2018 llego otro gran momento en la carrera de Dj Suri cuando produjo y compuso el single del retorno a la música de Paris Hilton, un tema original llamado “Summer Reign”. La presentación mundial del tema tuvo lugar en una fiesta especial en Amnesia Ibiza junto a la artista.\n\nSuri ha conseguido tener todos sus temas originales y remixes en el top 5 de iTunes, habiendo conseguido sus dos últimos singles originales, ‘Papas World’ y el reciente single lanzado este 2022 ‘Yeah!’, en el N.º 1 de ventas de iTunes en España.\n\nSuri ha actuado con su música alrededor de todo el mundo en los eventos más importantes, además de en las salas más reconocidas mundialmente y en grandes festivales, sobre todo para un público LGTBIQ+. Ha sido cabeza de cartel de los mayores festivales LGTBIQ+ del mundo, ha actuado en más de 17 Prides y es un reclamo habitual para las mejores marcas del mundo. Ha actuado en los World Pride de Nueva York y Madrid y en 2023 actuó en el World Pride de Sidney, ante más de 24.000 personas siendo el único español en actuar para la fiesta oficial de World Pride.\n\nHa compartido cartel y escenario con artistas de la talla de Kylie Minogue, Mel C o Kelly Rowland, además de ser telonero de la gira 4.0 de Mónica Naranjo en Valencia.\n\nSuri tiene un estilo muy personal que le ha llevado a que su sonido sea reconocido mundialmente, combinando beats frescos y fuertes con poderosas melodías y vocales épicas, que hacen que las sesiones de Suri sean una experiencia inolvidable.",
      "en": "DJ Suri is an international DJ, producer, and LGTBIQ+ activist with an outstanding 18-year career. Winner of the 2011 EMA (Espiral Music Award) for Revelation Producer of the Year. He has produced music and official remixes for major national and international artists such as Lady Gaga, PINK, Wyclef Jean, Beyonce, Paris Hilton, Azealia Banks, Rozalla, and Mónica Naranjo, among many others.\n\nCurrently, he is a resident DJ for the global brand \"Papa Party\" by Eliad Cohen, as well as Republik Madrid and Deseo 54 Valencia.\n\nSuri was the first Spanish DJ to officially remix Lady Gaga (\"Til It Happens To You\"), which was nominated for an Oscar, achieving No. 1 on the Billboard Dance Club Chart. In 2018 he remixed the song \"Secrets\" by Pink, also achieving No. 1 on the Billboard chart. DJ Suri has had more than 15 remixes in the top 20 of the Billboard charts. In 2018 he produced and composed the single for Paris Hilton's return to music, an original track called \"Summer Reign\" with a world presentation at Amnesia Ibiza.\n\nSuri has reached the top 5 on iTunes with all his original tracks and remixes, with his singles \"Papas World\" and \"Yeah!\" reaching No. 1 in Spain. He has headlined the biggest prides in New York, Madrid, and Sydney World Pride 2023, performing for over 24,000 people. He has shared the stage with artists like Kylie Minogue, Mel C, and Kelly Rowland, and opened for Mónica Naranjo. Suri's personal style combines fresh and hard beats with powerful melodies and epic vocals, making his sessions an unforgettable experience."
    },
    gallery: [
      '/Talents/JVV _ SURI/imgi_10_Foto-27-6-18-5-52-09 (1)-main.jpg',
      '/Talents/JVV _ SURI/imgi_4_IMG_8058.jpg',
      '/Talents/JVV _ SURI/imgi_5_Gxbriellemxry-33.jpg',
      '/Talents/JVV _ SURI/imgi_6_IMG_1749.jpg',
      '/Talents/JVV _ SURI/imgi_7_ddp_cc_selects_suri-7.jpg',
      '/Talents/JVV _ SURI/imgi_8_IMG_1997-1.jpg',
      '/Talents/JVV _ SURI/imgi_9_suri-pride.jpg'
    ],
    "stats": {
      "es": {
        "Género": "Club / House / Dance",
        "Logros": "Remix de Lady Gaga & Pink #1 en Billboard",
        "Festivales": "Sydney & NY World Pride"
      },
      "en": {
        "Genre": "Club / House / Dance",
        "Charts": "Lady Gaga & Pink Remix #1 Billboard",
        "Festivals": "Sydney & NY World Pride"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Sydney World Pride (Artista Oficial)",
          "en": "Sydney World Pride (Official Artist)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Paris Hilton - Summer Reign (Productor)",
          "en": "Paris Hilton - Summer Reign (Producer)"
        },
        "year": "2018"
      },
      {
        "title": {
          "es": "Lady Gaga - Remix (#1 Billboard)",
          "en": "Lady Gaga - Remix (#1 Billboard)"
        },
        "year": "2016"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/b8eZydt519I",
      "https://www.youtube.com/embed/jnHPE1AK6es"
    ]
  },

  {
    "id": 22,
    "name": "Ana Fernández",
    type: ['actores'],
    "location": "Madrid",
    image: '/Talents/JVV _ ANA FERNÁNDEZ/imgi_7_Anafernandez_04-main.jpg',
    "description": {
      "es": "Una de las actrices con mayor talante y trayectoria en España. Empezó muy joven como protagonista en diversas series españolas como ‘’Cuestión de Sexo‘’ o ‘’Los Protegidos‘’, esta última con una nueva temporada en emisión.\n\nSu salto como protagonista al cine ha sido de la mano de Alfonso Albacete con la película estrenada en 2015, ‘’Solo Química’’. Posteriormente interpreto en el Teatro Español textos de José Luis García en ‘’Arte Nuevo’’, también en 2015.\n\nDespués de formar parte del reparto de la serie televisiva “Amar Es Para Siempre”, fue una de las protagonistas de “Las Chicas del Cable”, interpretando a Carlota, primera serie española producida por Netflix.",
      "en": "One of the actresses with the greatest character and trajectory in Spain. She started very young as a protagonist in various Spanish series such as \"Cuestión de Sexo\" or \"Los Protegidos\", the latter with a new season in broadcast.\n\nHer jump to cinema as a protagonist was with Alfonso Albacete's film \"Solo Química\", premiered in 2015. Subsequently, she performed classical texts by José Luis García at the Teatro Español in \"Arte Nuevo\" (2015).\n\nAfter forming part of the cast of the TV series \"Amar Es Para Siempre\", she was one of the protagonists of \"Las Chicas del Cable\", playing Carlota, the first Spanish series produced by Netflix."
    },
    gallery: [
      '/Talents/JVV _ ANA FERNÁNDEZ/imgi_4_Anafernandez_01 Ana-Carlota-Fernández ana_carlot2.jpg',
      '/Talents/JVV _ ANA FERNÁNDEZ/imgi_5_Anafernandez_02.jpg',
      '/Talents/JVV _ ANA FERNÁNDEZ/imgi_6_Anafernandez_03 Ana-Carlota-Fernández ana_carlota.jpg',
      '/Talents/JVV _ ANA FERNÁNDEZ/imgi_7_Anafernandez_04-main.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Actriz",
        "Papeles Destacados": "Las Chicas del Cable (Carlota), Los Protegidos",
        "Idiomas": "Español, Inglés"
      },
      "en": {
        "Profession": "Actress",
        "Notable Roles": "Las Chicas del Cable (Carlota), Los Protegidos",
        "Languages": "Spanish, English"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Los Protegidos: El Regreso (Atresplayer)",
          "en": "Los Protegidos: El Regreso (Atresplayer)"
        },
        "year": "2021-2023"
      },
      {
        "title": {
          "es": "Las Chicas del Cable (Serie de Netflix)",
          "en": "Las Chicas del Cable (Netflix Series)"
        },
        "year": "2017-2020"
      },
      {
        "title": {
          "es": "Solo Química (Película de Alfonso Albacete)",
          "en": "Solo Química (Alfonso Albacete Film)"
        },
        "year": "2015"
      }
    ]
  },

  {
    "id": 29,
    "name": "Damián López",
    type: ['comunicadores', 'deportistas'],
    "location": "Buenos Aires / Madrid",
    image: '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_5_2021-09-22-13_42_26.8100200-01-900x1200-main.jpg',
    "description": {
      "es": "Damián López es argentino, nacido en Buenos Aires en 1987, de familia emigrante que cruzo el océano en épocas de crisis europeas descendiente de portugueses, italianos y españoles.\n\nHa dedicado su vida al deporte y al activismo por los derechos de las personas del colectivo LGTB+, en sus comienzos deportivos comenzó su carrera en Taekwondo ITF en donde consiguió numerosos logros nacionales e internacionales. Actualmente es deportista federado por España en la que se desempeña como atleta de Taekwondo WT.\n\nA los 23 años tras recuperarse de un cáncer con metástasis que le pronosticaba una esperanza de vida del 35%, decidió dedicar su vida por completo al activismo para mostrar al mundo que el deporte puede cambiar tu vida.\n\nActualmente es el primer activista por los derechos LGTBIQ+ de Taekwondo del mundo, es el creador y entrenador del primer Club LGTBIQ+ federado de Taekwondo del mundo, presidente de la primera secretaria de diversidad dentro de un ente que regula el Taekwondo en España, es también la imagen deportiva y embajador de la candidatura de valencia para albergar los juegos olímpicos de la diversidad en el año 2026. Fue También el impulsor de la creación del primer departamento de diversidad dentro de una institución que regula el Taekwondo a nivel nacional en Argentina.",
      "en": "Damián López is Argentine, born in Buenos Aires in 1987, from an immigrant family that crossed the ocean in times of European crisis, descending from Portuguese, Italians, and Spaniards.\n\nHe has dedicated his life to sport and activism for the rights of LGTB+ people; in his sporting beginnings, he started his career in ITF Taekwondo, where he achieved numerous national and international successes. Currently, he is a federated athlete in Spain playing as a WT Taekwondo athlete.\n\nAt age 23, after recovering from metastasized cancer that gave him a 35% life expectancy, he decided to dedicate his life entirely to activism to show the world that sport can change your life.\n\nCurrently, he is the first Taekwondo LGTBIQ+ rights activist in the world, the creator and coach of the first federated LGTBIQ+ Taekwondo club in the world, president of the first diversity secretariat within a Taekwondo regulating body in Spain, and is also the sports face and ambassador for Valencia's bid to host the Diversity Olympic Games in 2026. He was also the promoter of the creation of the first department of diversity within a national Taekwondo regulating institution in Argentina."
    },
    gallery: [
      '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_4_Damian-2.png',
      '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_5_2021-09-22-13_42_26.8100200-01-900x1200-main.jpg',
      '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_6_2021-09-10-16_29_56.0660200-scaled-900x1200.jpg',
      '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_6_WhatsApp-Image-2023-05-17-at-14.46.48-900x1200.jpg',
      '/Talents/JVV _ DAMIÁN LÓPEZ/imgi_7_WhatsApp-Image-2023-05-17-at-14.47.21-1-900x1200.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Taekwondista WT / Activista LGTBIQ+",
        "Logros": "Creador del primer Club LGTBIQ+ de Taekwondo federado",
        "Embajador": "Candidatura Valencia Juegos Diversidad 2026"
      },
      "en": {
        "Profession": "Taekwondo WT Athlete / LGTBIQ+ Activist",
        "Achievements": "Creator of the first federated LGTBIQ+ Taekwondo club",
        "Ambassador": "Valencia Diversity Games 2026 Candidacy"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Candidatura Juegos Olímpicos de la Diversidad Valencia 2026",
          "en": "Valencia Diversity Olympic Games 2026 Bid"
        },
        "year": "2024-2026"
      },
      {
        "title": {
          "es": "Fundación del primer Club de Taekwondo LGTBIQ+ federado",
          "en": "Founding of the first federated LGTBIQ+ Taekwondo Club"
        },
        "year": "2021"
      }
    ]
  },

  {
    "id": 24,
    "name": "Plates, Tables and More",
    type: ['directores'],
    "location": "Milán / Madrid",
    image: '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_4_Plates-tables-and-more-3-scaled-900x1200-main.jpg',
    "description": {
      "es": "Aliroska Adams es fashion stylist (graduada en Instituto Marangoni de Milán) madre de dos hijos, con una pasión para recibir invitados y la creación de mesas especiales. Table setting, centros de mesa, arreglos florales, bandejas de café y té y cualquier cosa que requiera una presentación impecable.\n\nPlates, tables and more es su proyecto, una idea que nació después de años de experiencia en organización de eventos privados tanto pequeños como grandes.\n\nEl objetivo es trabajar con las personas y las marcas en el arte de la decoración de mesas para crear experiencias únicas.",
      "en": "Aliroska Adams is a fashion stylist (graduated from Istituto Marangoni in Milan), mother of two, with a passion for hosting and creating special tables. Table setting, centerpieces, floral arrangements, coffee and tea trays, and anything requiring impeccable presentation.\n\nPlates, Tables and More is her project, an idea born after years of experience organizing private events both small and large.\n\nThe goal is to work with individuals and brands in the art of table decoration to create unique experiences."
    },
    gallery: [
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_4_Plates-tables-and-more-3-scaled-900x1200-main.jpg',
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_5_Plates-tables-and-more-2-scaled-900x1200.jpg',
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_6_Aliroska-Plates-table-and-more-scaled-900x1200.jpg',
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_7_WhatsApp-Image-2022-04-07-at-3.02.38-PM-1-900x1200.jpg',
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_8_WhatsApp-Image-2022-04-07-at-6.21.12-PM-1.jpg',
      '/Talents/JVV _ PLATES, TABLES AND MORE/imgi_9_WhatsApp-Image-2022-04-07-at-6.21.55-PM-1.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Estilista / Especialista en Tablescapes",
        "Fundadora": "Aliroska Adams",
        "Estudios": "Istituto Marangoni (Milán)"
      },
      "en": {
        "Profession": "Stylist / Tablescapes Specialist",
        "Founder": "Aliroska Adams",
        "Education": "Istituto Marangoni (Milan)"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Diseño de mesas y dirección de arte en eventos privados",
          "en": "Table design & art direction in private events"
        },
        "year": "2020-2026"
      }
    ]
  },

  {
    "id": 26,
    "name": "Rebeca Khamlichi",
    type: ['pintoras'],
    "location": "Madrid",
    image: '/Talents/JVV _ REBECA KHAMLICHI/8717_image_586216.jpg',
    "description": {
      "es": "Rebeca Khamlichi (Madrid, 1987) es una artista plástica, ilustradora y escritora inspirada por la iconografía religiosa del siglo XVII, los dibujos animados y Michael Haneke, el rosa chicle y las Pinturas Negras de Goya, el Superflat y la copla: algo así como si Doña Concha Piquer se arrancara por haikus. Pinta en Madrid en una terraza con vistas a los tejados del barrio de Lavapiés. Y lo hace, dice, porque- de momento- los acrílicos se dispensan sin receta médica.\n\nRebeca prepara una exposición y en este tiempo ha trabajado en acciones de marcas como Reebok, Coca-Cola, Beefeater, Absolut,… donde despliega todo su mundo de color y creatividad para dar forma y personalidad a zapatillas, botellas, murales o lo que se le ponga por delante.",
      "en": "Rebeca Khamlichi (Madrid, 1987) is a visual artist, illustrator, and writer inspired by 17th-century religious iconography, cartoons and Michael Haneke, bubblegum pink and Goya's Black Paintings, Superflat and copla: sort of as if Doña Concha Piquer broke into haikus. She paints in Madrid on a terrace overlooking the rooftops of the Lavapiés neighborhood. And she does it, she says, because — for now — acrylics are dispensed without a prescription.\n\nRebeca is preparing an exhibition and during this time has worked on brand actions for Reebok, Coca-Cola, Beefeater, Absolut... where she deploys her whole world of color and creativity to give shape and personality to sneakers, bottles, murals, or whatever is put in front of her."
    },
    gallery: [
      '/Talents/JVV _ REBECA KHAMLICHI/8717_image_586216.jpg',
      '/Talents/JVV _ REBECA KHAMLICHI/Rebecahipsterian.jpg',
      '/Talents/JVV _ REBECA KHAMLICHI/jvv-m.jpg',
      '/Talents/JVV _ REBECA KHAMLICHI/rebeca-khamlichi.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Pintora / Ilustradora / Escritora",
        "Clientes": "Reebok, Beefeater, Coca-Cola, Absolut",
        "Estilo": "Pop-Art / Contemporáneo / Superflat"
      },
      "en": {
        "Profession": "Painter / Illustrator / Writer",
        "Clients": "Reebok, Beefeater, Coca-Cola, Absolut",
        "Style": "Pop-Art / Contemporary / Superflat"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Campaña de Murales Absolut",
          "en": "Absolut Murals Campaign"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Diseño de Colaboración Reebok",
          "en": "Reebok Collaboration Design"
        },
        "year": "2022"
      }
    ]
  },

  {
    "id": 28,
    "name": "Pablo García",
    type: ['fotografos'],
    "location": "Denia / Madrid",
    image: '/Talents/JVV _ PABLO GARCÍA/imgi_4_Pablo-principale-main.jpg',
    "description": {
      "es": "Pablo García nace en Denia en 1994. Con menos de 30 años ya ha vivido en grandes capitales como Londres, Madrid o Barcelona. Desde bien pequeño tiene un interés especial por el arte y empieza a dibujar cosas sencillas en los primeros años de su vida. Es a los 16 años cuando una cámara digital se cruza en su camino y comienza a realizar fotos de paisaje, pasión que continuará cuando un año después consigue su primera réflex y se sumerge de lleno en el mundo de la fotografía. Se describe con un estilo muy natural, busca mostrar quien es su modelo a través de una mirada o un gesto. Su trabajo le ha llevado ya a trabajar para revistas como GQ, Telva, Vanidad o Vein en Milán, Londres, París o Barcelona. Uno de sus últimos trabajos ha sido con Dior Beauty donde realizó una sesión para presentar los nuevos productos de la firma de moda de la mano de la actriz y modelo, Godeliv. Además, colabora constantemente con marcas como The Body Shop.",
      "en": "Pablo García was born in Denia in 1994. Under the age of 30, he has already lived in major capitals such as London, Madrid, or Barcelona. From an early age, he had a special interest in art and began drawing simple things in the first years of his life. It was at age 16 when a digital camera crossed his path and he began taking landscape photos, a passion that continued when a year later he got his first SLR and immersed himself fully in the world of photography. He describes himself with a very natural style, seeking to show who his model is through a look or a gesture. His work has already led him to work for magazines such as GQ, Telva, Vanidad, or Vein in Milan, London, Paris, or Barcelona. One of his latest works was with Dior Beauty, where he shot a session to present the brand's new products with actress and model Godeliv. In addition, he constantly collaborates with brands such as The Body Shop."
    },
    gallery: [
      '/Talents/JVV _ PABLO GARCÍA/imgi_10_Pedro1.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_11_Pedro.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_4_Pablo-principale-main.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_5_dior2747.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_6_dior2612.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_7_Pedro4.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_8_Pedro3.jpg',
      '/Talents/JVV _ PABLO GARCÍA/imgi_9_Pedro2.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Director de Fotografía / Fotógrafo",
        "Revistas": "GQ, Telva, Vanidad, Vein",
        "Clientes": "Dior Beauty, The Body Shop"
      },
      "en": {
        "Profession": "Director of Photography / Photographer",
        "Magazines": "GQ, Telva, Vanidad, Vein",
        "Clients": "Dior Beauty, The Body Shop"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Dior Beauty con Godeliv (Campaña de Lanzamiento)",
          "en": "Dior Beauty with Godeliv (Launch Campaign)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Editoriales internacionales (Milán, París, Londres)",
          "en": "International Editorials (Milan, Paris, London)"
        },
        "year": "2020-2026"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/4Rp22QeTuzo",
      "https://www.youtube.com/embed/w9X-_D0w2xA"
    ]
  },

  {
    "id": 27,
    "name": "Niña Vintage",
    type: ['cantantes'],
    "location": "Madrid",
    image: '/Talents/JVV _ NIÑA VINTAGE/main.jpg',
    "description": {
      "es": "Niña Vintage surgió del encuentro de Lorenzo Puy y Belén Coca, chico y chica, músico y creativa. Él le tocó la guitarra y ella se puso a cantar. Desde ese día, sus universos sonoros fueron chocando, coincidiendo y dando lugar a este original proyecto musical.\n\nA Belén siempre le gustó tararear canciones de otra época, y de ahí nació el nombre del grupo. En su banda sonora vital se mezclan con naturalidad la copla, los standards de jazz, el cine musical y el pop-rock de los 80 y los 90. Su cautivadora voz sorprende por su frescura, sus delicados matices y su capacidad de emocionar.\n\nLorenzo es un experimentado músico que arrancó su actividad artística en los 90 como cantante, compositor, guitarrista y percusionista en el grupo La Nevera, con el que grabó tres LPs y obtuvo en dos ocasiones el primer premio en el trofeo de rock Villa de Madrid. Además, también compone, graba y produce música para publicidad y otros proyectos discográficos.\n\nLa banda se completa con Joky Díaz, bajista y alma mater de La Nevera, Juan Casero, teclista, y Pablo Díaz, que también toca la batería en la banda de rock experimental «Los Párpados». Todos aportan su experiencia y sus particulares influencias en el sonido de Niña Vintage, dando lugar a una curiosa fusión que va y viene con descaro del pop al jazz, del folk americano a las raíces hispanas y del inglés al español.\n\nDesde su formación en 2011, han actuado regularmente – tanto a dúo como con la banda al completo – en la escena musical madrileña (Café Berlín, Costello, Siroco, Clamores, Fotomatón, El Intruso…) y en eventos corporativos y privados. En 2016 han editado su primer disco, “Take this Train”, que propone una aventura musical que viaja al pasado y a distintas tradiciones sonoras con una mochila llena de música en la que todo se mezcla sin prejuicios ni etiquetas.\n\nDe Ella Fitzgerald a David Bowie, de Chet Baker a Michael Jackson, de Lola Flores a Jobim, el repertorio de Niña Vintage contiene versiones y temas propios con mucho sabor retro y sorprende por sus combinaciones explosivas y capacidad de conectar con el público.\n\nHan estrenado su primer disco de temas originales llamado XXX de cuyo trabajo se extrae el single “Tu Tesoro”, una invitación a guardar los sueños y a darles calor.\n\nMarcas como Oysho han elegido a este grupo para sus eventos.",
      "en": "Niña Vintage arose from the meeting of Lorenzo Puy and Belén Coca, boy and girl, musician and creative. He played the guitar for her and she started to sing. Since that day, their sound universes have clashed, coincided, and given rise to this original musical project.\n\nBelén always liked humming songs from another era, and that's where the group's name came from. In her vital soundtrack, copla, jazz standards, musical cinema, and 80s and 90s pop-rock blend naturally. Her captivating voice surprises with its freshness, delicate nuances, and capacity to move.\n\nLorenzo is an experienced musician who started his artistic activity in the 90s as a singer, composer, guitarist, and percussionist in the group La Nevera, with which he recorded three LPs and twice won first prize in the Villa de Madrid rock trophy. In addition, he also composes, records, and produces music for advertising and other recording projects.\n\nThe band is completed with Joky Díaz, bassist and alma mater of La Nevera, Juan Casero, keyboardist, and Pablo Díaz, who also plays drums in the experimental rock band \"Los Párpados\". All bring their experience and particular influences to the sound of Niña Vintage, giving rise to a curious fusion that goes back and forth from pop to jazz, American folk to Hispanic roots, and English to Spanish.\n\nSince their formation in 2011, they have performed regularly — both as a duo and with the full band — in the Madrid music scene (Café Berlín, Costello, Siroco, Clamores, Fotomatón, El Intruso...) and in corporate and private events. In 2016 they released their first album, \"Take this Train\", which proposes a musical adventure traveling to the past and different sound traditions with a backpack full of music in which everything is mixed without prejudice or labels.\n\nFrom Ella Fitzgerald to David Bowie, Chet Baker to Michael Jackson, Lola Flores to Jobim, Niña Vintage's repertoire contains covers and own songs with a retro flavor and surprises with explosive combinations and the capacity to connect with the audience.\n\nThey have released their first album of original songs called XXX, from which the single \"Tu Tesoro\" is taken, an invitation to keep dreams and keep them warm. Brands like Oysho have chosen this group for their events."
    },
    gallery: [
      '/Talents/JVV _ NIÑA VINTAGE/1565640.jpeg',
      '/Talents/JVV _ NIÑA VINTAGE/imgi_4_07_FOTOS_OTRAS_duet2.jpg',
      '/Talents/JVV _ NIÑA VINTAGE/imgi_6_NVITAGE_01.jpg',
      '/Talents/JVV _ NIÑA VINTAGE/main.jpg',
      '/Talents/JVV _ NIÑA VINTAGE/web2.webp'
    ],
    "stats": {
      "es": {
        "Profesión": "Grupo Musical / Banda",
        "Miembros": "Lorenzo Puy, Belén Coca, Joky Díaz, Juan Casero, Pablo Díaz",
        "Álbumes": "Take this Train (2016), XXX"
      },
      "en": {
        "Profession": "Musical Group / Band",
        "Members": "Lorenzo Puy, Belén Coca, Joky Díaz, Juan Casero, Pablo Díaz",
        "Albums": "Take this Train (2016), XXX"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Lanzamiento de sencillo Tu Tesoro",
          "en": "Tu Tesoro Single Release"
        },
        "year": "2022"
      },
      {
        "title": {
          "es": "Lanzamiento del álbum Take this Train",
          "en": "Take this Train Album Release"
        },
        "year": "2016"
      },
      {
        "title": {
          "es": "Shows en vivo (Café Berlín, Clamores)",
          "en": "Live Shows (Café Berlín, Clamores)"
        },
        "year": "2011-2026"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/aVO2XjmhHG4",
      "https://www.youtube.com/embed/cUl1vezHJJU",
      "https://www.youtube.com/embed/OlxIB1tgBt4",
      "https://www.youtube.com/embed/H_NTxmdzr-s"
    ]
  },

  {
    "id": 23,
    "name": "Prostíbulo Poético",
    type: ['cantantes'],
    "location": "Barcelona / Madrid",
    image: '/Talents/JVV _ PROSTÍBULO POÉTICO/articulos-635885-main.jpg',
    "description": {
      "es": "Hijo primogénito del «Poetry Brothel» de Nueva York, instalado en Barcelona desde hace ya diez años y comenzando su andadura en Madrid, cosechando seguidores acérrimos y buenas críticas, este colectivo de poetas, bailarines y performers, convierte cada evento en un campo de pruebas donde la poesía en privado le echa un pulso a los típicos recitales al uso.\n\nDirigido por la actriz y poeta Sònia Barba, a la que el proyecto se le ajusta como anillo al dedo por su trayectoria creativa y su afición a la poesía desde niña, Prostíbulo Poético viene realizando actuaciones periódicas en Festivales, hoteles, fiestas privadas y locales tan especiales como la Sala Equis y el Club Matador en Madrid y Soho House, La Bacanal o el Festival Palo Alto en Barcelona.\n\nPoesía, irreverencia y rebelión es el lema de estas poetas que llegaron para quedarse. Así lo certifican sus diez años de trayectoria y los »Libros Rojos», publicación anual que recoge el trabajo de las integrantes, y gancho que utilizan para seducir a los que acuden a ellas atraídos por la curiosidad y salen convencidos de que ha llegado la hora de derribar los prejuicios que rodean a la temida poesía. Aseguran que van a quitarte el miedo a los fantasmas. Y que en una época en la que uno no puede fiarse de lo que ve, solo queda fiarse de lo que siente.\n\nSe encuentran en plena expansión ibérica, llegando a Valladolid y Lisboa con talleres y actuaciones.",
      "en": "The eldest son of the New York \"Poetry Brothel\", established in Barcelona for ten years and beginning its journey in Madrid, harvesting staunch followers and good reviews, this collective of poets, dancers, and performers turns every event into a testing ground where poetry in private wrestles with typical recitals.\n\nDirected by actress and poet Sònia Barba, to whom the project fits like a glove due to her creative career and love of poetry since childhood, Prostíbulo Poético has been performing regularly in festivals, hotels, private parties, and venues as special as Sala Equis and Club Matador in Madrid, and Soho House, La Bacanal, or Palo Alto Festival in Barcelona.\n\nPoetry, irreverence, and rebellion is the motto of these poets who are here to stay. This is certified by their ten-year career and the \"Libros Rojos\", an annual publication that collects the work of the members, and the hook they use to seduce those who come to them drawn by curiosity, leaving convinced that the time has come to break down the prejudices surrounding feared poetry. They assure they will take away your fear of ghosts. And that in a time when one cannot trust what they see, they can only trust what they feel.\n\nThey are in full Iberian expansion, reaching Valladolid and Lisbon with workshops and performances."
    },
    gallery: [
      '/Talents/JVV _ PROSTÍBULO POÉTICO/articulos-635885-main.jpg',
      '/Talents/JVV _ PROSTÍBULO POÉTICO/imgi_6_3.png',
      '/Talents/JVV _ PROSTÍBULO POÉTICO/imgi_7_4.jpg',
      '/Talents/JVV _ PROSTÍBULO POÉTICO/imgi_8_unnamed-2.png',
      '/Talents/JVV _ PROSTÍBULO POÉTICO/imgi_9_unnamed.png',
      '/Talents/JVV _ PROSTÍBULO POÉTICO/prostibulo-a-color-1280x768.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "Colectivo Poético / Performers",
        "Dirección": "Sònia Barba",
        "Publicaciones": "Libros Rojos"
      },
      "en": {
        "Profession": "Poetic Collective / Performers",
        "Direction": "Sònia Barba",
        "Publications": "Libros Rojos"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Actuaciones en Soho House, Sala Equis y Club Matador",
          "en": "Performances at Soho House, Sala Equis & Club Matador"
        },
        "year": "2016-2026"
      },
      {
        "title": {
          "es": "Publicación de los Libros Rojos (Anual)",
          "en": "Libros Rojos Publication (Annual)"
        },
        "year": "2014-2026"
      }
    ],
    "videos": [
      "https://player.vimeo.com/video/69289779?h=5bd6d811b4"
    ]
  },

  {
    "id": 25,
    "name": "Alicia Galuzis",
    type: ['djs'],
    "location": "Madrid",
    image: '/Talents/JVV _ ALICIA GALUZIS/imgi_6_GALUZIS-2-main.png',
    "description": {
      "es": "La música es la arteria principal de Alicia. Comenzó su trayectoria como Dj en 2006 en la escena alternativa de Madrid.\n\nHa compaginado diferentes residencias en clubs de la capital como Nells Madrid, Low club, Independance, Elástico, Fabuloso Club, etc.\n\nTambién ha recorrido territorio nacional con sesiones en otras ciudades como Valencia, Zaragoza, Barcelona o Ibiza en la Fiesta Aniversario del Club Fabuloso en el Hotel Pikes o en varias ediciones del FIB (Festival Internacional de Benicàssim).\n\nComo últimas colaboraciones, fue elegida en la primera edición del Festival Paraíso como Dj de continuidad en 2018.\n\nAparte del clubbing, ha actuado también en museos como el Musac de León, en la presentación del libro “Benicàssim El Festival” tras el concierto de Jay-Jay Johanson, el Museo Nacional Centro de Arte Reina Sofía (Nubel) y en las Fiestas de San Isidro 2017 en el emblemático Parque del Retiro.\n\nHa pinchado para una extensa lista de marcas y eventos como: Stand Vogue Mercedes Fashion Week 2012, Fib Club Madrid Fashion Week 2009, Stella McCartney, Mango, Shon Mott, entre otras.",
      "en": "Music is Alicia's main artery. She began her career as a DJ in 2006 in Madrid's alternative scene.\n\nShe has balanced different residencies in clubs in the capital such as Nells Madrid, Low Club, Independance, Elástico, Fabuloso Club, etc. She has also toured Spain with sessions in other cities such as Valencia, Zaragoza, Barcelona, or Ibiza at the Anniversary Party of Club Fabuloso at the Pikes Hotel or in several editions of the FIB (Benicàssim International Festival).\n\nAs for recent collaborations, she was chosen in the first edition of the Paraíso Festival as continuity DJ in 2018.\n\nBesides clubbing, she has performed in museums such as Musac in León, at the presentation of the book \"Benicàssim El Festival\" after Jay-Jay Johanson's concert, the Reina Sofía National Art Center (Nubel), and at the San Isidro 2017 festivities in the emblematic Retiro Park.\n\nShe has DJ'd for an extensive list of brands and events such as: Stand Vogue Mercedes Fashion Week 2012, Fib Club Madrid Fashion Week 2009, Stella McCartney, Mango, Shon Mott, among others."
    },
    gallery: [
      '/Talents/JVV _ ALICIA GALUZIS/imgi_4_VioletaxMango_17.jpg',
      '/Talents/JVV _ ALICIA GALUZIS/imgi_6_GALUZIS-2-main.png',
      '/Talents/JVV _ ALICIA GALUZIS/imgi_7_GALUZIS.png',
      '/Talents/JVV _ ALICIA GALUZIS/imgi_8_n615963398_1354512_3514.png'
    ],
    "stats": {
      "es": {
        "Profesión": "DJ",
        "Trayectoria": "DJ desde 2006",
        "Eventos Clave": "FIB, Festival Paraíso, Stand Vogue MBFW"
      },
      "en": {
        "Profession": "DJ",
        "Career": "DJ since 2006",
        "Key Events": "FIB, Paraíso Festival, Vogue Stand MBFW"
      }
    },
    "projects": [
      {
        "title": {
          "es": "DJ en continuidad (Festival Paraíso)",
          "en": "Continuity DJ (Paraíso Festival)"
        },
        "year": "2018"
      },
      {
        "title": {
          "es": "Sesión en Pikes Hotel (Ibiza - Club Fabuloso)",
          "en": "Session at Pikes Hotel (Ibiza - Club Fabuloso)"
        },
        "year": "2016"
      },
      {
        "title": {
          "es": "DJ oficial en Stand Vogue Mercedes Fashion Week",
          "en": "Official DJ at Vogue Mercedes Fashion Week Stand"
        },
        "year": "2012"
      }
    ]
  },

  {
    "id": 30,
    "name": "MJE",
    type: ['djs'],
    "location": "Lugano / Madrid",
    image: '/Talents/JVV _ MJE/imgi_4_aj3R7LvR-900x1200-main.jpg',
    "description": {
      "es": "MJE (acrónimo de Max, Jake, Enfor) nace en el 2021 desde la unión de tres artistas jóvenes pero con muchísima experiencia internacional, tanto a nivel de discografía como de giras y shows en vivo. La base del proyecto MJE es simple: crear música electrónica de altísima calidad mezclando las influencias muy diferentes de los tres artistas y llevar al escenario un show con voz e instrumentos tocados en vivo, como piano, teclados y guitarras.\n\nEl trío se estrena como mejor no podría ser: el primer sencillo «Far Away» publicado en el 2022 por el importante sello internacional Storm Music Group alcanza más de 100k reproducciones y, a día de hoy, sigue estable en más de 5000 playlists de todo el mundo.\n\nEn el 2023 MJE despega por completo: destacan los shows en Ministry of Sound (Londres) acompañando en ese día a Steve Aoki en el cartel y tres conciertos en el ADE 2023 en Amsterdam. El 2023 publicaron 6 canciones y en 2024, hasta ahora, tres, todas a través de sellos internacionales de primer nivel. La calidad de la música junto con el feedback del público durante los shows, han hecho que MJE hayan sido invitados a la Music Week en Miami, en Marzo 2024. Ya son dos los conciertos confirmados en esta Semana, uno de los cuales junto con Roger Sánchez.\n\nEl talento del trío trasciende el escenario: MJE siempre quiso razonar como marca y como empresa, tratando de abrir más líneas de negocio y desarrollo. Los tres artistas cuentan otras importantes colaboraciones en el sector del diseño de sonido para las marcas (Hot Wheels, NetApp, Italamp) eventos, música para documentales (Digital for Humanity) y shows televisivos (MTV, SKY TV). También dan ponencias sobre las aplicaciones del sonido en el marketing. En 2023 impartieron una masterclass en la SUPSI, universidad profesional en Lugano (Suiza), sobre las influencias del sonido en el mundo de la comunicación de marcas y el comportamiento del consumidor.",
      "en": "MJE (acronym for Max, Jake, Enfor) was born in 2021 from the union of three young artists but with extensive international experience, both in terms of discography and tours and live shows. The base of the MJE project is simple: create high-quality electronic music mixing the very different influences of the three artists and bring to the stage a show with live vocals and instruments, such as piano, keyboards, and guitars.\n\nThe trio debuted in the best possible way: the first single \"Far Away\" published in 2022 by the major international label Storm Music Group reached over 100k streams and, to this day, remains stable in more than 5000 playlists worldwide.\n\nIn 2023 MJE took off completely: highlights include shows at Ministry of Sound (London) accompanying Steve Aoki on the bill, and three concerts at ADE 2023 in Amsterdam. In 2023 they published 6 songs and in 2024, so far, three, all through top-tier international labels. The quality of the music along with audience feedback during shows made MJE invited to Miami Music Week in March 2024, confirming two shows, one alongside Roger Sanchez.\n\nThe trio's talent goes beyond the stage: MJE always wanted to reason as a brand and as a business, opening more business lines and development. The three artists count other major collaborations in sound design for brands (Hot Wheels, NetApp, Italamp), events, music for documentaries (Digital for Humanity), and TV shows (MTV, SKY TV). They also lecture on applications of sound in marketing, giving a masterclass at SUPSI university in Lugano (Switzerland) on the influence of sound in the brand communication world and consumer behavior."
    },
    gallery: [
      '/Talents/JVV _ MJE/imgi_4_aj3R7LvR-900x1200-main.jpg',
      '/Talents/JVV _ MJE/imgi_5_fhXdME_t-6.jpg',
      '/Talents/JVV _ MJE/imgi_6_RCcMHBcf.jpg',
      '/Talents/JVV _ MJE/imgi_7_p-pPF8X4-900x1200.jpg'
    ],
    "stats": {
      "es": {
        "Profesión": "DJs / Músicos / Productores / Diseñadores de Sonido",
        "Miembros": "Max, Jake, Enfor",
        "Sello": "Storm Music Group"
      },
      "en": {
        "Profession": "DJs / Musicians / Producers / Sound Designers",
        "Members": "Max, Jake, Enfor",
        "Label": "Storm Music Group"
      }
    },
    "projects": [
      {
        "title": {
          "es": "Miami Music Week junto Roger Sánchez",
          "en": "Miami Music Week alongside Roger Sanchez"
        },
        "year": "2024"
      },
      {
        "title": {
          "es": "ADE 2023 en Amsterdam (Conciertos)",
          "en": "ADE 2023 in Amsterdam (Concerts)"
        },
        "year": "2023"
      },
      {
        "title": {
          "es": "Lanzamiento del Sencillo Far Away",
          "en": "Far Away Single Launch"
        },
        "year": "2022"
      }
    ],
    "videos": [
      "https://www.youtube.com/embed/nN8f-JqvFKw",
      "https://www.youtube.com/embed/q_RMw75OwTY",
      "https://www.youtube.com/embed/kSSzB98d2qg",
      "https://www.youtube.com/embed/qhmHOk7UGb0",
      "https://www.youtube.com/embed/e0QN3_YdVsU",
      "https://www.youtube.com/embed/Tba0XM3LTBI"
    ]
  }
];
