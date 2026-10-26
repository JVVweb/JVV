import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export const EVENTS_DATA = [
  {
    "id": 1,
    "title": "CHAUMET CHRISTMAS",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "18",
      "year": "2025"
    },
    "location": "Spain",
    "description": {
      "es": "JVV participó con Chaumet, la marca de alta joyería del grupo LVMH, en la edición 2025 del Solidarity Christmas Tree, un evento solidario en el que las marcas de lujo más importantes del mundo crean árboles de Navidad únicos y exclusivos que después se subastan. Nuestra labor abarcó la selección y coordinación del personal de bienvenida, gestión y producción musical y visual del evento a través de nuestro JVV People, Ayub. Una velada donde la creatividad, la filantropía y el lujo se unen para generar un impacto social real durante la temporada navideña.",
      "en": "JVV participated with Chaumet, the LVMH group's high jewelry brand, in the 2025 edition of the Solidarity Christmas Tree, a solidarity event in which the world's most important luxury brands create unique and exclusive Christmas trees that are then auctioned. Our work included the selection and coordination of the welcome staff, management and musical and visual production of the event through our JVV People, Ayub. An evening where creativity, philanthropy and luxury come together to generate real social impact during the Christmas season."
    },
    "image": "/Events/JVV _ CHAUMET CHRISTMAS/imgi_19_MG_6529-2048x1365.jpg",
    "gallery": [
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_19_MG_6529-2048x1365.jpg",
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_24_MG_6541-scaled.jpg",
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_29_MG_6596-scaled_portada.jpg",
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_34_MG_6714-scaled.jpg",
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_39_MG_6788-scaled.jpg",
      "/Events/JVV _ CHAUMET CHRISTMAS/imgi_44_MG_6982-scaled.jpg"
    ]
  },
  {
    "id": 3,
    "title": "ELLA FESTIVAL 2025",
    "category": "EVENT",
    "date": {
      "month": "AGO",
      "day": "29",
      "year": "2025"
    },
    "location": "Spain",
    "description": {
      "es": "El pasado mes de agosto, tuvimos la oportunidad de colaborar en la edición del ELLA Festival Mallorca 2025, un evento que celebra la diversidad, la cultura y la innovación.\nNos ocupamos de generar espacios interesantes dentro del beach club que fue el punto de encuentro durante ese fin de semana. Junto a Hammam Al Ándalus, creamos un santuario de bienestar, ofreciendo momentos de relajación y conexión a través de una experiencia sensorial inmersiva y con Júpiter Bornay y Greta Jewelry transformamos el arte en emoción, presentando la joyería como una forma de expresión artística con piezas atemporales. Activaciones diferentes, un mismo propósito: crear conexiones auténticas y memorables.",
      "en": "Last August, we had the opportunity to collaborate in the edition of the ELLA Festival Mallorca 2025, an event that celebrates diversity, culture and innovation.\nWe took care of generating interesting spaces within the beach club that was the meeting point during that weekend. Together with Hammam Al Ándalus, we create a sanctuary of well-being, offering moments of relaxation and connection through an immersive sensory experience and with Júpiter Bornay and Greta Jewelry we transform art into emotion, presenting jewelry as a form of artistic expression with timeless pieces. Different activations, the same purpose: create authentic and memorable connections."
    },
    "image": "/ella festival.jpg",
    "gallery": [
      "/ella festival.jpg"
    ]
  },
  {
    "id": 36,
    "title": "INDOON",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "15",
      "year": "2025"
    },
    "location": "Spain",
    "description": {
      "es": "Inauguración oficial de INDOON en Mallorca; Sostenibilidad, producción consciente y diseño atemporal mediterráneo.",
      "en": "Official opening of INDOON in Mallorca; Sustainability, conscious production and timeless Mediterranean design."
    },
    "image": "/indoon-1.jpg",
    "gallery": [
      "/indoon-1.jpg",
      "/indoon-2.jpg",
      "/indoon-3.jpg"
    ]
  },
  {
    "id": 4,
    "title": "PALMA INTERNATIONAL BOAT SHOW 2025",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "03",
      "year": "2025"
    },
    "location": "Spain",
    "description": {
      "es": "En la edición de 2025 del Palma International Boat Show (30 de abril – 3 de mayo), una de las ferias náuticas más prestigiosas del Mediterráneo y referencia internacional en el sector, JVV se encargó de la selección y coordinación de perfiles estratégicos e influencers, conectando el mundo náutico con nuevas audiencias y generando visibilidad de alto valor para el evento. El Palma International Boat Show reúne a más de 30.000 visitantes y a más de 300 empresas internacionales, consolidando a Palma de Mallorca como un epicentro global de la náutica y un punto de encuentro imprescindible para la innovación, el lifestyle y el mar.",
      "en": "In the 2025 edition of the Palma International Boat Show (April 30 – May 3), one of the most prestigious nautical fairs in the Mediterranean and an international reference in the sector, JVV was in charge of the selection and coordination of strategic profiles and influencers, connecting the nautical world with new audiences and generating high-value visibility for the event. The Palma International Boat Show brings together more than 30,000 visitors and more than 300 international companies, consolidating Palma de Mallorca as a global epicenter of nautical and an essential meeting point for innovation, lifestyle and the sea."
    },
    "image": "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5_portada.jpg",
    "gallery": [
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_16_PIB-1.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_19_PIB-2.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_22_PIB-3.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_25_PIB-4.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5_portada.jpg"
    ]
  },
  {
    "id": 2,
    "title": "CASA PATYKA presentación – Línea Glow",
    "category": "EVENT",
    "date": {
      "month": "OCT",
      "day": "18",
      "year": "2024"
    },
    "location": "Spain",
    "description": {
      "es": "JVV estuvo a cargo de la producción del evento y del concepto CASA PATYKA en Barcelona, un formato que por primera vez llegó a la ciudad. Diseñado para crear una experiencia de lujo eco, este espacio reunió a profesionales de farmacia, influencers y otras personas afines a la marca para descubrir Glow, la nueva línea de PATYKA, formulada para iluminar la piel con ingredientes naturales y orgánicos.\nQuienes asistieron pudieron experimentar de primera mano la innovación de la marca, probar los productos y sumergirse en el universo sensorial de PATYKA.",
      "en": "JVV was in charge of the production of the event and the CASA PATYKA concept in Barcelona, a format that came to the city for the first time. Designed to create an eco-luxury experience, this space brought together pharmacy professionals, influencers and other people related to the brand to discover Glow, PATYKA's new line, formulated to illuminate the skin with natural and organic ingredients.\nThose who attended were able to experience the brand's innovation first-hand, try the products and immerse themselves in the sensory universe of PATYKA."
    },
    "image": "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_41_Patyka-6-scaled.jpg",
    "gallery": [
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_101_Patyka-88-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_36_T8A2447-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_41_Patyka-6-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_46_Patyka-26-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_51_Patyka-33-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_56_Patyka-54-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_61_Patyka-103-scaled_portada.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_71_Patyka-27-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_76_Patyka-51-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_81_Patyka-66-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_86_Patyka-70-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_91_Patyka-76-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_96_Patyka-82-scaled.jpg"
    ]
  },
  {
    "id": 5,
    "title": "THE BODY SHOP – Inauguración T4 Aeropuerto Madrid",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "12",
      "year": "2023"
    },
    "location": "Spain",
    "description": {
      "es": "The Body Shop dejó en manos de JVV la producción del evento de inauguración de su nueva tienda en el Aeropuerto de Barajas, Madrid. El encuentro contó con la presencia destacada de dos de nuestras #JVVPeople, Valeria Vegas y Rocío Saiz, además de un histórico de la Movida Madrileña, Paco Clavel, quienes ofrecieron una cautivadora charla sobre ese momento tan increíble de la capital y nos dieron a conocer más la marca. Además, Rocío Saiz amenizó la noche con una sesión muy viajera mientras les invitades bailaban, probaban los productos y se refrescaban.",
      "en": "The Body Shop left the production of the opening event of its new store at the Barajas Airport, Madrid, in the hands of JVV. The meeting had the notable presence of two of our #JVVPeople, Valeria Vegas and Rocío Saiz, as well as an icon of the Movida Madrileña, Paco Clavel, who offered a captivating talk about that incredible moment in the capital and introduced us further to the brand. In addition, Rocío Saiz livened up the night with a very traveling session while the guests danced, tried the products and cooled off."
    },
    "image": "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_8_1.jpg",
    "gallery": [
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_10_3.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_11_2.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_16_32bfcdd1-8c05-48f0-8577-0d8be4d58759_portada.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_8_1.jpg"
    ]
  },
  {
    "id": 6,
    "title": "TIMEOUT",
    "category": "EVENT",
    "date": {
      "month": "MAR",
      "day": "13",
      "year": "2023"
    },
    "location": "Spain",
    "description": {
      "es": "Los ‘Premios Food & Drink de Time Out 2023’ se vistieron de verde gracias a JVV. La revista contó con nuestra colaboración para decorar este evento anual que tuvo lugar en el Teatro Eslava para celebrar la escena gastronómica de la ciudad, premiando a los mejores en la industria de la comida y las bebidas.",
      "en": "The 'Time Out Food & Drink Awards 2023' were dressed in green thanks to JVV. The magazine counted on our collaboration to decorate this annual event that took place at the Eslava Theater to celebrate the city's gastronomic scene, rewarding the best in the food and beverage industry."
    },
    "image": "/Events/JVV _ TIMEOUT/imgi_14_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0011_Logo-2048x1365_portada.jpg",
    "gallery": [
      "/Events/JVV _ TIMEOUT/imgi_14_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0011_Logo-2048x1365_portada.jpg",
      "/Events/JVV _ TIMEOUT/imgi_18_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0057_Logo-2048x1365.jpg",
      "/Events/JVV _ TIMEOUT/imgi_22_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0149_Logo-2048x1365.jpg",
      "/Events/JVV _ TIMEOUT/imgi_26_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0206_Logo-2048x1365.jpg"
    ]
  },
  {
    "id": 7,
    "title": "RIU Plaza de España – Nochevieja",
    "category": "EVENT",
    "date": {
      "month": "DIC",
      "day": "31",
      "year": "2022"
    },
    "location": "Spain",
    "description": {
      "es": "Para dar la bienvenida al 2023, el hotel RIU Plaza de España contó con JVV para la producción de un evento muy especial. Junto a Isaac Dos Puntos, JVV creó la experiencia sensorial RIUTUAL. Con máscaras, brillo, mucho misterio y el ritmo de nuestra JVV Friend, la DJ Alicia Galuzis, despedimos el año por todo lo alto.",
      "en": "To welcome 2023, the RIU Plaza de España hotel counted on JVV to produce a very special event. Together with Isaac Dos Puntos, JVV created the RIUTUAL sensory experience. With masks, glitter, a lot of mystery and the rhythm of our JVV Friend, DJ Alicia Galuzis, we said goodbye to the year in style."
    },
    "image": "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_16_MG_3556-2048x1463_PORTADA.jpg",
    "gallery": [
      "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_10_WhatsApp-Image-2023-05-17-at-16.16.42-1.jpg",
      "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_12_WhatsApp-Image-2023-05-17-at-16.16.42.jpg",
      "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_16_MG_3556-2048x1463_PORTADA.jpg",
      "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_22_MG_3973-2048x1462.jpg",
      "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_28_MG_4065-2048x1462.jpg"
    ]
  },
  {
    "id": 8,
    "title": "FESTIVAL PARAÍSO III Edición",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "24",
      "year": "2022"
    },
    "location": "Spain",
    "description": {
      "es": "Durante las tres primeras ediciones del Festival Paraíso, JVV se ha ocupado de la confirmación y la gestión de algunos de los patrocinios confirmados, como Zumos Linda, la marca deportiva Reebok y en esta última edición con Schweppes. Además en sus tres ediciones hemos aportado color a la convocatoria con la asistencia de influencers y artistas, muches de elles parte de nuestra #JVVPeople.",
      "en": "During the first three editions of the Paraíso Festival, JVV handled the confirmation and management of some of the confirmed sponsorships, such as Zumos Linda, the sports brand Reebok, and in this latest edition Schweppes. Furthermore, across its three editions we brought color to the guest list with the attendance of influencers and artists, many of them part of our #JVVPeople."
    },
    "image": "/Events/JVV _ FESTIVAL PARAÍSO III Edición/SHYGIRL-PARAISO-FESTIVAL-5-1_portada.jpg",
    "gallery": [
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/SHYGIRL-PARAISO-FESTIVAL-5-1_portada.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_11_5-2-1.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_19_Paraiso-2022_PJGarcinuno_1E9A1662-1-scaled.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_22_Paraiso-2022_PJGarcinuno_1E9A1694-1-2048x1365.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_8_1-2.jpg"
    ]
  },
  {
    "id": 9,
    "title": "PRIVILEGIADA Presentación corto",
    "category": "EVENT",
    "date": {
      "month": "MAR",
      "day": "08",
      "year": "2021"
    },
    "location": "Spain",
    "description": {
      "es": "Durante la semana del 8 de marzo en la ciudad de Barcelona nos ocupamos de presentar el corto dirigido, escrito y protagonizado por Alex de la Croix, #JVVFriend, ‘Privilegiada’, donde trata temas de disparidad de géneros y ciertas imposiciones sociales asociadas a las mujeres. Para este evento elegimos dos espacios únicos, Soho House y Poble Nou Social Club. Distintas veladas donde se pudo disfrutar, con las medidas sanitarias pertinentes, de la proyección del mismo, charla-coloquio con Alex y Jesús Vázquez Viedma (fundador y director de la agencia) para finalizar con una sesión musical muy especial a cargo de otra #JVVFriend, Loli Zazou. JVV se ocupó de la organización, producción y convocatoria de los diferentes pases.",
      "en": "During the week of March 8 in the city of Barcelona we were in charge of presenting the short film directed, written and starring Alex de la Croix, #JVVFriend, 'Privilegiada', which deals with issues of gender disparity and certain social impositions associated with women. For this event we chose two unique spaces, Soho House and Poble Nou Social Club. Different evenings where guests enjoyed, with the pertinent health measures, the screening, a talk-discussion with Alex and Jesús Vázquez Viedma (founder and director of the agency), ending with a very special musical session by another #JVVFriend, Loli Zazou. JVV was in charge of the organization, production and guest list of the different screenings."
    },
    "image": "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg",
    "gallery": [
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_5_poble-nou-aleix-31-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_6_poble-nou-aleix-40-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_7_poble-nou-aleix-24-scaled_portada.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_8_poble-nou-aleix-27-scaled.jpg"
    ]
  },
  {
    "id": 12,
    "title": "APEROL FEST Barcelona",
    "category": "EVENT",
    "date": {
      "month": "SEP",
      "day": "27",
      "year": "2019"
    },
    "location": "Spain",
    "description": {
      "es": "Repetimos con el verano ya finalizado en el Together We Fest en su edición catalana. En el Club de Polo y con una programación muy similar a la de Madrid, por dos días sus asistentes pudieron bailar al ritmo del grupo Delaporte, #JVVPeople. Además otros dos artistas que también vinieron de la mano de JVV, la actriz Clara Maldonado y el actor Jorge López.",
      "en": "We repeated with the summer already over at Together We Fest in its Catalan edition. At the Polo Club and with a program very similar to that of Madrid, for two days attendees danced to the rhythm of the group Delaporte, #JVVPeople, alongside two other artists brought by JVV, actress Clara Maldonado and actor Jorge López."
    },
    "image": "/Events/JVV _ APEROL FEST Barcelona/imgi_4_APEROS-TWF_BCN_57114_portada.jpg",
    "gallery": [
      "/Events/JVV _ APEROL FEST Barcelona/imgi_4_APEROS-TWF_BCN_57114_portada.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_5_APEROL-TWF_BCN-1655.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_6_69997171_372487340303228_1533284820018411927_n.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_7_APEROL-TWF_BCN-3574.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_8_APEROS-TWF_BCN_162181.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_9_72370804_908146462892051_8825779248746638782_n.jpg"
    ]
  },
  {
    "id": 13,
    "title": "ROGER VIVIER con Julia de Castro",
    "category": "EVENT",
    "date": {
      "month": "AGO",
      "day": "18",
      "year": "2019"
    },
    "location": "Spain",
    "description": {
      "es": "La firma francesa de calzado Roger Vivier escogió a Julia De Castro, #JVVPeople, como Maestra de Ceremonias para presentar su colección en la Fundación Fernando de Castro en Madrid, ante un selecto y distinguido grupo de invitados elegidos por su director creativo, Gherardo Felloni, presente en el evento, que compartió cena y velada con Inès de la Fressange, Bibiana Fernández, Ana García Siñeriz, Laura Ponte, Boris Izaguirre y un sinfín de personalidades que gozaron de los temas y sonidos de De La Puríssima.",
      "en": "The French footwear brand Roger Vivier chose Julia De Castro, #JVVPeople, as Master of Ceremonies to present its collection at the Fernando de Castro Foundation in Madrid, before a select and distinguished group of guests chosen by its creative director, Gherardo Felloni, present at the event, who shared dinner and evening with Inès de la Fressange, Bibiana Fernández, Ana García Siñeriz, Laura Ponte, Boris Izaguirre and countless personalities who enjoyed the songs and sounds of De La Puríssima."
    },
    "image": "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_4_20190618sdr126_20190618113639464-scaled_portada.jpg",
    "gallery": [
      "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_4_20190618sdr126_20190618113639464-scaled_portada.jpg",
      "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_5_20190618sdr132_20190618113639465-scaled.jpg",
      "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_6_20190618sdr136_20190618113639465-scaled.jpg"
    ]
  },
  {
    "id": 14,
    "title": "APEROL FEST Madrid",
    "category": "EVENT",
    "date": {
      "month": "JUL",
      "day": "04",
      "year": "2019"
    },
    "location": "Spain",
    "description": {
      "es": "JVV colaboró una vez más con la bebida italiana APEROL para poner música y llevar a invitados muy especiales a su Together We Fest. La primera edición de su propio festival que por tres días ofreció una programación similar a sus asistentes dentro del marco incomparable de la Embajada de Italia. Fueron muchas las sorpresas que se dieron y el nexo común de todas las jornadas fue nuestro grupo #JVVPeople, DELAPORTE y junto a ellos trajimos en uno de sus días a la cantante mexicana Ximena Sariñana que se presentó a España a través de Aperol y JVV. Además, conseguimos traer al actor José Lamuño y a Jorge López, el actor revelación de la segunda temporada de Élite (Netflix).",
      "en": "JVV collaborated once again with the Italian drink APEROL to provide music and bring very special guests to their Together We Fest. The first edition of its own festival that for three days offered a similar program to its attendees within the incomparable setting of the Italian Embassy. There were many surprises that occurred and the common link of all the days was our group #JVVPeople, DELAPORTE, and together with them we brought on one of their days the Mexican singer Ximena Sariñana who was introduced to Spain through Aperol and JVV. In addition, we managed to bring the actor José Lamuño and Jorge López, the breakout actor from the second season of Elite (Netflix)."
    },
    "image": "/Events/JVV _ APEROL FEST Madrid/imgi_6_H71A9166_portada.jpg",
    "gallery": [
      "/Events/JVV _ APEROL FEST Madrid/imgi_4_H71A1340.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_5_H71A1727.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_6_H71A9166_portada.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_7_H71A9859.jpg"
    ]
  },
  {
    "id": 35,
    "title": "FESTIVAL PARAÍSO II Edición",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "14",
      "year": "2019"
    },
    "location": "Spain",
    "description": {
      "es": "Durante las dos primeras ediciones del Festival Paraíso, JVV se ha ocupado de la confirmación y la gestión de algunos de los patrocinios confirmados, como Zumos Linda y por primera vez con la marca deportiva Reebok. Además en ambas ediciones hemos aportado color a la convocatoria con la asistencia de influencers y artistas, muchos de ellos parte de nuestra #JVVPeople, de la talla de Misterpiro, Godeliv, David Castillo y otros como Silvia Marty, Bart Santana…",
      "en": "During the first two editions of the Paraíso Festival, JVV handled the confirmation and management of some of the confirmed sponsorships, such as Zumos Linda and for the first time with the sports brand Reebok. Furthermore, in both editions we brought color to the guest list with the attendance of influencers and artists, many of them part of our #JVVPeople, including Misterpiro, Godeliv, David Castillo and others such as Silvia Marty and Bart Santana."
    },
    "image": "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_6_Público_SharonLopez_IMG_7047_portada.jpg",
    "gallery": [
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_6_Público_SharonLopez_IMG_7047_portada.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_7_Público_SharonLopez_IMG_6520.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_8_Público_SharonLopez_IMG_5556.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_10_Público_SharonLopez_IMG_5860.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_11_Público_SharonLopez_IMG_7092.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_14_D36FB57E-AEDB-4997-BF9F-22416B407C58-768x512.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_17_ambiente__nabscabDSB_6844-768x388.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO II Edición/imgi_34_ambiente_nabscabDSB_6803-1024x706.jpg"
    ]
  },
  {
    "id": 10,
    "title": "FRANGELICO",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "11",
      "year": "2019"
    },
    "location": "Spain",
    "description": {
      "es": "Frangelico, la marca italiana del grupo Campari nos delegó la convocatoria de influencers e invitados afines a la marca para su evento de presentación en Madrid donde descubrieron las nuevas formas de consumir este histórico digestivo. Actrices como Michelle Calvo, Paloma López, el actor Jorge López o la cantante Javiera Mena no quisieron perderse esta cita llena de sorpresas, juegos y risas.",
      "en": "Frangelico, the Italian brand of the Campari group delegated to us the call of influencers and guests related to the brand for its presentation event in Madrid where they discovered the new ways of consuming this historic digestive. Actresses like Michelle Calvo, Paloma López, actor Jorge López and singer Javiera Mena did not want to miss this event full of surprises, games and laughter."
    },
    "image": "/Events/JVV _ FRANGELICO/imgi_4_60782950_400453880682005_3191332550403324939_n_portada.jpg",
    "gallery": [
      "/Events/JVV _ FRANGELICO/imgi_4_60782950_400453880682005_3191332550403324939_n_portada.jpg",
      "/Events/JVV _ FRANGELICO/imgi_5_60914570_2274642219285064_7550676502692508645_n.jpg",
      "/Events/JVV _ FRANGELICO/imgi_6_59894378_147463536392500_1403255679737929204_n.jpg",
      "/Events/JVV _ FRANGELICO/imgi_7_frangelico-sobremesa-madrid-2019_selecció-final_07-.jpg"
    ]
  },
  {
    "id": 11,
    "title": "LATITUDE en El Paracaidista",
    "category": "EVENT",
    "date": {
      "month": "DIC",
      "day": "03",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "LATITUDE, el colectivo que ha revolucionado la moda en España consiguiendo hacer una colección completamente ecosostenible enteramente producida en nuestro país, decidió montar una tienda efímera en Madrid por casi dos meses dentro del concept store El Paracaidista, para que no hubiera excusa para conocer de primera mano sus prendas, sus siguientes pasos y a algunas de sus integrantes. En JVV nos ocupamos de la convocatoria, producción y realizamos distintos eventos con algunas de nuestras #JVVPeople como Carla y Sandra o Julia De Castro.",
      "en": "LATITUDE, the group that has revolutionized fashion in Spain by managing to make a completely eco-sustainable collection entirely produced in our country, decided to set up an ephemeral store in Madrid for almost two months within the concept store El Paracaidista, so that there would be no excuse not to see first-hand their clothes, their next steps and some of their members. At JVV we took care of the guest list, production and carried out different events with some of our #JVVPeople such as Carla and Sandra or Julia De Castro."
    },
    "image": "/Events/JVV _ LATITUDE en El Paracaidista/imgi_52_Invitacion1_portada.png",
    "gallery": [
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_14_DSCF2260.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_16_Unknown-1-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_17_Unknown-2-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_18_Unknown-3-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_19_DSCF2237-1.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_20_Unknown-4.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_24_PHOTO-2018-12-14-12-48-45-700x933.jpg",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_52_Invitacion1_portada.png"
    ]
  },
  {
    "id": 15,
    "title": "FESTIVAL PARAÍSO I Edición",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "08",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "En junio tuvo lugar la primera edición de PARAÍSO FESTIVAL en Madrid. Un festival boutique que da un paso más en el territorio nacional para una apuesta de calidad musical pero también de gastronomía, arte, naturaleza y respeto ambiental. En JVV nos ocupamos del patrocinio, selección de influencers e invitados y en su jornada del sábado pudimos contar con la increíble actuación de nuestro grupo #JVVPeople, DELAPORTE y con la sesión que nos dejó sin parar de bailar de nuestros #JVVFriends, YANIK PARK y Pascal Moscheni.",
      "en": "In June the first edition of PARAÍSO FESTIVAL took place in Madrid. A boutique festival that goes one step further in the national territory for a commitment to musical quality as well as gastronomy, art, nature and environmental respect. At JVV we took care of sponsorship, selection of influencers and guests, and on Saturday we enjoyed the incredible performance of our #JVVPeople group, DELAPORTE, and the non-stop dancing sessions by our #JVVFriends, YANIK PARK and Pascal Moscheni."
    },
    "image": "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_5_Paraiso-cartel-1_portada.png",
    "gallery": [
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_10_AYanik-Park-2.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_11_Ayanik-park.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_12_AParaiso-Festival_Madrid_Junio-2018_01_MR_0139-Editar.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_13_AParaiso-Festival_Madrid_Junio-2018_01_MR_0169-Editar.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_14_Paraiso-escenario-1.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_15_Aparaiso-2018-nabscabDSC_3940.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_4_A_DSC8447_nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_5_Paraiso-cartel-1_portada.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_6_A_DSC8661_Rodiguez-Jr-Liset-Alea-nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_7_A_DSC8908_nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_8_Sandra-y-Carla-b.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_9_ADELAPORTE.png"
    ]
  },
  {
    "id": 16,
    "title": "VESTIAIRE COLLECTIVE en Soho House Barcelona",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "05",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "Una vez más nuestro director y fundador, Jesús Vázquez Viedma, ejerció de maestro de ceremonias para la cita mensual de Fashion For Lunch en Soho House Barcelona. En el restaurante italiano Cecconi’s tuvimos el placer de contar con una de las fundadoras de la app/web del e-commerce de segunda mano de marcas de lujo, Sophie Hersan y con su actual embajadora en España, Blanca Miró. Al finalizar la charla, JVV inauguró el primer pop up en la capital catalana y que por tres días permitió que Vestiaire Collective tuviera una efímera tienda física en Soho House, uno de los emplazamientos más visitados de Barcelona.",
      "en": "Once again our director and founder, Jesús Vázquez Viedma, served as master of ceremonies for the monthly Fashion For Lunch event at Soho House Barcelona. At the Italian restaurant Cecconi's we had the pleasure of having one of the founders of the second-hand e-commerce app/web for luxury brands, Sophie Hersan, and its current ambassador in Spain, Blanca Miró. At the end of the talk, JVV inaugurated the first pop up in the Catalan capital, which for three days allowed Vestiaire Collective to have an ephemeral physical store in Soho House, one of the most visited locations in Barcelona."
    },
    "image": "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_9_FashionLunch_VC_SH_11_portada.png",
    "gallery": [
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_10_FashionLunch_VC_SH_62.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_4_FashionLunch_VC_SH_18.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_5_FashionLunch_VC_SH_40.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_6_FashionLunch_VC_SH_28.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_7_FashionLunch_VC_SH_60.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_8_FashionLunch_VC_SH_13.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_9_FashionLunch_VC_SH_11_portada.png"
    ]
  },
  {
    "id": 17,
    "title": "BOTTEGA VENETA en Soho House Barcelona",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "29",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "La marca florentina del lujo y la artesanía que forma parte del conglomerado Kering quiso confiar en JVV para invitar a su clientela más selecta en la sala del club privado Soho House y que tuvieran la oportunidad de conocer de primera mano sus nuevos diseños en la boutique de Paseo de Gracia, invitándoles después a una cena italiana de la mano de Cecconi’s en la sala privada del club, decorada para la ocasión con algunos de sus últimos modelos del bolso Cabat, toda una auténtica obra de arte.",
      "en": "The Florentine brand of luxury and craftsmanship that is part of the Kering conglomerate entrusted JVV to invite its most select clientele to the private club Soho House and give them the opportunity to see first-hand their new designs at the Paseo de Gracia boutique, later inviting them to an Italian dinner by Cecconi's in the club's private room, decorated for the occasion with some of its latest models of the Cabat bag, a true work of art."
    },
    "image": "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_5_Bottega-Veneta-2_portada.png",
    "gallery": [
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_10_Bottega-Veneta-3.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_11_Bottega-Veneta-8-1.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_4_Bottega-Veneta-7.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_5_Bottega-Veneta-2_portada.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_6_Bottega-Veneta-6.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_7_Bottega-Veneta-4.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_8_Bottega-Veneta-1.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_9_Bottega-Veneta-5.png"
    ]
  },
  {
    "id": 18,
    "title": "ELEMENTS by Andrea Dopico Cafarelli",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "14",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "El 14 de mayo Andrea Dopico Cafarelli presentó en la Galería Senda de Barcelona su primer libro para la elaboración de un postre al plato, trasladando su vocación por la pastelería e iniciando con ello una nueva andadura. JVV estuvo a cargo de la convocatoria de medios e invitados así como de cerrar el patrocinio de Cavas Gramona quienes deleitaron a los invitados con su Cava Gramona Imperial Brut Reserva 2013.\nEl arte, el diseño y la cocina se fusionaron durante esta tarde con la finalidad de plasmar un objeto único que potencie la transmisión de conocimientos técnicos de pastelería y a su vez despierte la creatividad del lector.",
      "en": "On May 14, Andrea Dopico Cafarelli presented her first book on plated dessert preparation at the Senda Gallery in Barcelona, sharing her vocation for pastry and starting a new journey. JVV was in charge of convening media and guests as well as closing the sponsorship of Cavas Gramona, who delighted guests with their Cava Gramona Imperial Brut Reserva 2013.\nArt, design and cuisine merged during this afternoon with the aim of creating a unique object that enhances the transmission of technical pastry knowledge and awakens the reader's creativity."
    },
    "image": "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_6_IMG_21002-2_portada.png",
    "gallery": [
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_10_IMG_2487.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_11_JVV-Email-EVENTS-ELEMENTS.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_12_IMG_2480.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_4_2018-04-17-PHOTO-00001060.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_5_IMG_20092-2.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_6_IMG_21002-2_portada.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_7_IMG_21392.jpg",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_8_IMG_20342.jpg",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_9_IMG_2498.png"
    ]
  },
  {
    "id": 19,
    "title": "VANDÔMIAN",
    "category": "EVENT",
    "date": {
      "month": "ABR",
      "day": "26",
      "year": "2018"
    },
    "location": "Spain",
    "description": {
      "es": "Vandômian tuvo por primera vez en Madrid su tienda efímera por un día en la calle Lagasca. Durante toda esta jornada sus asistentes pudieron conocer de la mano de su fundadora, Xantal Farnós, todas las colecciones que se encuentran en su web y así poder probar las piezas en un espacio acorde con el estilo de la marca.\nContamos con la presencia de, entre otros, Eugenia Martínez de Irujo, María Zurita, y muchos más que no quisieron perderse esta oportunidad única.",
      "en": "Vandômian had its ephemeral store for a day on Lagasca Street for the first time in Madrid. Throughout this day, attendees were able to discover from its founder, Xantal Farnós, all the collections featured on its website and try the pieces in a space in line with the brand's style.\nWe had the presence of, among others, Eugenia Martínez de Irujo, María Zurita, and many more who did not want to miss this unique opportunity."
    },
    "image": "/Events/JVV _ VANDÔMIAN/imgi_6_IMG_1872_portada.png",
    "gallery": [
      "/Events/JVV _ VANDÔMIAN/imgi_4_IMG_1871.png",
      "/Events/JVV _ VANDÔMIAN/imgi_5_IMG_1873.png",
      "/Events/JVV _ VANDÔMIAN/imgi_6_IMG_1872_portada.png"
    ]
  },
  {
    "id": 20,
    "title": "SHON MOTT BARCELONA – PAU CLARÍS",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "16",
      "year": "2017"
    },
    "location": "Spain",
    "description": {
      "es": "La tercera boutique de los hermanos Buxó se inauguró en España en noviembre de 2017 siguiendo las pautas de las dos anteriores. En JVV colaboramos dotándole de una convocatoria muy especial y organizando una post-party que congregó a más de 200 personas en uno de los locales más carismáticos de todo Barcelona.",
      "en": "The third boutique of the Buxó brothers opened in Spain in November 2017 following the guidelines of the previous two. At JVV we collaborated by providing a very special guest list and organizing a post-party that brought together more than 200 people in one of the most charismatic venues in all of Barcelona."
    },
    "image": "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_9_shonmott_02_portada.jpg",
    "gallery": [
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_4_shonmott.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_5_shonmott_01.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_6_shonmott_05.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_7_shonmott_04.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_8_shonmott_03.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_9_shonmott_02_portada.jpg"
    ]
  },
  {
    "id": 21,
    "title": "LA PERLA",
    "category": "EVENT",
    "date": {
      "month": "SEP",
      "day": "28",
      "year": "2017"
    },
    "location": "Spain",
    "description": {
      "es": "Quisimos invitar a lo más selecto de Madrid para darle a conocer el total look de La Perla para la temporada O/I 2017-2018. Una tarde llena de conversaciones interesantes, belleza e innumerables propuestas de la mano de esta colección italiana. Su emplazamiento en Madrid, en la calle Ortega y Gasset, fue el marco perfecto para esta reunión.",
      "en": "We wanted to invite the most select of Madrid to introduce the total look of La Perla for the A/W 2017-2018 season. An afternoon full of interesting conversations, beauty and countless proposals from this Italian collection. Its location in Madrid, on Ortega y Gasset Street, was the perfect setting for this gathering."
    },
    "image": "/Events/JVV _ LA PERLA/imgi_10_La_perla_07_portada.jpg",
    "gallery": [
      "/Events/JVV _ LA PERLA/imgi_10_La_perla_07_portada.jpg",
      "/Events/JVV _ LA PERLA/imgi_11_La_perla_06.jpg",
      "/Events/JVV _ LA PERLA/imgi_12_La_perla_05.jpg",
      "/Events/JVV _ LA PERLA/imgi_13_La_perla_04.jpg",
      "/Events/JVV _ LA PERLA/imgi_14_La_perla_03.jpg",
      "/Events/JVV _ LA PERLA/imgi_15_La_perla_02.jpg",
      "/Events/JVV _ LA PERLA/imgi_4_La_perla_12.jpg",
      "/Events/JVV _ LA PERLA/imgi_5_La_perla_09.jpg",
      "/Events/JVV _ LA PERLA/imgi_6_La_perla_01.jpg",
      "/Events/JVV _ LA PERLA/imgi_7_La_perla_13.jpg",
      "/Events/JVV _ LA PERLA/imgi_8_La_perla_10.jpg",
      "/Events/JVV _ LA PERLA/imgi_9_La_perla_08.jpg"
    ]
  },
  {
    "id": 22,
    "title": "FOMO",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "21",
      "year": "2017"
    },
    "location": "Spain",
    "description": {
      "es": "En JVV queríamos congregar a muchos de nuestros JVVPeople y JVVFriends en un mismo momento y por eso pensamos en una larga jornada dominical para hacer realidad este propósito.\nEl lugar elegido, Nubel, un espacio creado por Jean Nouvel, dentro del Museo Nacional Centro de Arte Reina Sofía, fue el envoltorio perfecto para esta acción y durante más de 8 horas contamos con la música de Laura Put, Patricia Valley, Yanik Park, Daniel Baughman y Alicia Galuzis y las intervenciones en los más pequeños de nuestros artistas Nadia Benyahya y Misterpiro. Fueron muchos los invitados que nos acompañaron en nuestra primera fiesta FOMO y que quisieron retratarse por nuestra fotógrafa Ana Belén y Álvaro Manof (El Chico De Los Recados).",
      "en": "At JVV we wanted to bring together many of our JVVPeople and JVVFriends at the same time, so we planned a long Sunday session to make this purpose a reality.\nThe chosen venue, Nubel, a space created by Jean Nouvel within the Reina Sofía National Museum Art Center, was the perfect setting for this event, and for more than 8 hours we featured music by Laura Put, Patricia Valley, Yanik Park, Daniel Baughman and Alicia Galuzis, alongside artistic interventions by Nadia Benyahya and Misterpiro. Many guests joined us at our first FOMO party and had their portraits taken by our photographer Ana Belén and Álvaro Manof (El Chico De Los Recados)."
    },
    "image": "/Events/JVV _ FOMO/imgi_38_fomo_08_portada.jpg",
    "gallery": [
      "/Events/JVV _ FOMO/imgi_20_fomo_02.jpg",
      "/Events/JVV _ FOMO/imgi_23_fomo_04.jpg",
      "/Events/JVV _ FOMO/imgi_26_fomo_03.jpg",
      "/Events/JVV _ FOMO/imgi_29_fomo_05.jpg",
      "/Events/JVV _ FOMO/imgi_32_fomo_06.jpg",
      "/Events/JVV _ FOMO/imgi_35_fomo_07.jpg",
      "/Events/JVV _ FOMO/imgi_38_fomo_08_portada.jpg",
      "/Events/JVV _ FOMO/imgi_4_fomo_01.jpg"
    ]
  },
  {
    "id": 23,
    "title": "KENZO BCN",
    "category": "EVENT",
    "date": {
      "month": "FEB",
      "day": "23",
      "year": "2017"
    },
    "location": "Spain",
    "description": {
      "es": "Kenzo quiso inaugurar su nueva flagship store en Paseo de Gracia (Barcelona) por todo lo alto con la visita de sus directores creativos, Carol Lim y Humberto León. Fuimos los encargados del desarrollo de todo el evento para el que contamos con la colaboración de Carlota Guerrero y sus bailarines. La velada fue muy especial, con regalo de caricaturas a todos los asistentes y una sesión de música que hizo bailar hasta a los maniquíes. Una larga lista de invitados que congregó a muchas caras conocidas y sociedad catalana y española en general, que no quisieron perderse ningún detalle en una noche que se alargó felizmente.\nTambién fuimos los responsables de la prensa y comunicación tanto del evento como de las entrevistas con muchos de los medios españoles más importantes, así como de seleccionar y coordinar a las celebrities e influencers que asistieron.",
      "en": "Kenzo wanted to inaugurate its new flagship store on Paseo de Gracia (Barcelona) in style with the visit of its creative directors, Carol Lim and Humberto León. We were in charge of the development of the entire event, featuring a collaboration with Carlota Guerrero and her dancers. The evening was very special, with caricatures gifted to all attendees and a music session that made even the mannequins dance. A long list of guests brought together many well-known faces from Catalan and Spanish society.\nWe were also responsible for press and communication for both the event and interviews with major Spanish media outlets, as well as selecting and coordinating the celebrities and influencers who attended."
    },
    "image": "/Events/JVV _ KENZO BCN/imgi_20_Kenzo_01_portada.jpg",
    "gallery": [
      "/Events/JVV _ KENZO BCN/imgi_20_Kenzo_01_portada.jpg",
      "/Events/JVV _ KENZO BCN/imgi_21_Kenzo_02.jpg",
      "/Events/JVV _ KENZO BCN/imgi_22_Kenzo_04.jpg",
      "/Events/JVV _ KENZO BCN/imgi_23_Kenzo_18.jpg",
      "/Events/JVV _ KENZO BCN/imgi_24_Kenzo_05.jpg",
      "/Events/JVV _ KENZO BCN/imgi_25_Kenzo_07.jpg",
      "/Events/JVV _ KENZO BCN/imgi_26_Kenzo_08.jpg",
      "/Events/JVV _ KENZO BCN/imgi_27_Kenzo_09.jpg",
      "/Events/JVV _ KENZO BCN/imgi_28_Kenzo_10.jpg",
      "/Events/JVV _ KENZO BCN/imgi_29_Kenzo_11.jpg",
      "/Events/JVV _ KENZO BCN/imgi_30_Kenzo_12.jpg",
      "/Events/JVV _ KENZO BCN/imgi_31_Kenzo_13.jpg",
      "/Events/JVV _ KENZO BCN/imgi_32_Kenzo_14.jpg",
      "/Events/JVV _ KENZO BCN/imgi_33_Kenzo_15.jpg",
      "/Events/JVV _ KENZO BCN/imgi_34_Kenzo_16.jpg",
      "/Events/JVV _ KENZO BCN/imgi_35_Kenzo_06.jpg",
      "/Events/JVV _ KENZO BCN/imgi_66_Kenzo_16-768x513.jpg"
    ]
  },
  {
    "id": 24,
    "title": "115 ANIVERSARIO CAPAS SESEÑA",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "29",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "Tuvimos el placer de ocuparnos de la entera producción del evento de celebración del 115 aniversario de la primera casa de capas del mundo y para ello reunimos a sus clientes y personalidades bajo el cielo de Madrid, en la terraza del Hotel Me. Fue una noche muy especial que culminó con la actuación sorpresa del bailarín Sergio Bernal.",
      "en": "We had the pleasure of taking care of the entire production of the event celebrating the 115th anniversary of the first cape house in the world, gathering its clients and personalities under the sky of Madrid on the terrace of the Hotel ME. It was a very special night that culminated with a surprise performance by dancer Sergio Bernal."
    },
    "image": "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_14.jpg",
    "gallery": [
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_14.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_07.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_08.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_09.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_10.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_11.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_12.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_15.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_16.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_17.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_18.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_19.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_20.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_21.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/sesena_invita.jpg"
    ]
  },
  {
    "id": 36,
    "title": "DSQUARED2 MADRID OPENING",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "01",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "En noviembre de 2016, la firma italiana de los gemelos canadienses Dean y Dan Caten aterrizó en Madrid inaugurando su flagship store en plena Milla de Oro. Desde JVV nos encargamos de la convocatoria de celebrities e invitados tanto para el evento en tienda como para la cena de gala posterior junto a los diseñadores, así como de la producción y lista de invitados de la fiesta posterior.",
      "en": "On November of 2016, Canadian twins Dean and Dan Caten’s Italian brand landed in Madrid, opening a flagship store in the famed Golden Mile shopping district. JVV arranged the celebrity guest list for both the store event and gala dinner that took place afterwards with the designers. We were also responsible for preparing the after-party that incorporated an even larger guest list of people excited to meet the Caten twins and enjoy the fun event we had prepared."
    },
    "image": "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_02_portada.jpg",
    "gallery": [
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_02_portada.jpg",
      "https://jvv.com.es/wp-content/uploads/2016/10/Dsquare_01.jpg",
      "https://jvv.com.es/wp-content/uploads/2016/10/Dsquare_03.jpg",
      "https://jvv.com.es/wp-content/uploads/2016/10/Dsquare_04.jpg"
    ]
  },
  {
    "id": 25,
    "title": "MANGO x SHOPPING GAUEAN DONOSTI",
    "category": "EVENT",
    "date": {
      "month": "SEP",
      "day": "16",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "Mango nos encargó la producción del evento especial de la noche Shopping Gauean en su tienda de la calle Fuenterrabia 15 en San Sebastián. Fueron muchas las personas que se acercaron y escucharon la música non-stop del DJ Alverto Sánchez y disfrutaron de descuentos y sorpresas.",
      "en": "Mango commissioned us to produce the special Shopping Gauean evening event at its store on Fuenterrabia 15 Street in San Sebastián. Many guests came by to enjoy non-stop music by DJ Alverto Sánchez along with exclusive discounts and surprises."
    },
    "image": "/mango-lencero.jpg",
    "gallery": [
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_10_Mango_donosti_06.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_11_Mango_donosti_05.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_12_Mango_donosti_04.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_13_Mango_donosti_03.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_14_Mango_donosti_02.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_15_Mango_donosti_12.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_16_Mango_donosti_01.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_17_Mango_donosti_17.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_19_Mango_donosti_1.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_6_Mango_donosti_09.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_7_Mango_donosti_08.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_8_Mango_donosti_07.jpg",
      "/mango-lencero.jpg"
    ]
  },
  {
    "id": 26,
    "title": "VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)",
    "category": "EVENT",
    "date": {
      "month": "SEP",
      "day": "15",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "Violeta by Mango de la calle Velázquez estuvo repleta de visitas durante la noche MANGO X VOGUE FASHION’S NIGHT OUT (VFNO). Tania Llasera ejerció de madrina del evento y la DJ Alicia Galuzis hicieron de esta noche un momento muy especial, sin olvidarnos de la bebida que corrió durante toda la fiesta con Gramona, Linda y Cervezas Malasaña.",
      "en": "Violeta by Mango on Velázquez Street was packed with visitors during MANGO X VOGUE FASHION’S NIGHT OUT (VFNO). Tania Llasera served as host of the event alongside DJ Alicia Galuzis, making the night truly special, accompanied throughout the party by drinks from Gramona, Linda and Cervezas Malasaña."
    },
    "image": "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VioletaxMango_13_portada.jpg",
    "gallery": [
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_10_VioletaxMango_12.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_11_VioletaxMango_08.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_12_VioletaxMango_07.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_13_VioletaxMango_06.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_14_VioletaxMango_05.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_15_VioletaxMango_04.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_16_VioletaxMango_03.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_17_VioletaxMango_02.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_18_VioletaxMango_01.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_4_VioletaxMango_18.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_5_VioletaxMango_17.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_6_VioletaxMango_16.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_7_VioletaxMango_15.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_8_VioletaxMango_14.jpg",
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VioletaxMango_13_portada.jpg"
    ]
  },
  {
    "id": 27,
    "title": "MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)",
    "category": "EVENT",
    "date": {
      "month": "SEP",
      "day": "15",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "En JVV nos ocupamos de la producción del evento en la tienda de la calle Goya durante la noche MANGO X VOGUE FASHION’S NIGHT OUT (VFNO). Un gran set fotográfico donde los clientes pudieron llevarse su foto instantánea de recuerdo y el escuchar al DJ Pascal Moscheni fueron los platos fuertes de una velada única.",
      "en": "At JVV we took care of the production of the event at the Calle Goya store during MANGO X VOGUE FASHION’S NIGHT OUT (VFNO). A large photo set where customers could take home an instant souvenir photo and music by DJ Pascal Moscheni were the highlights of a unique evening."
    },
    "image": "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_8_VFNO_22_portada.jpg",
    "gallery": [
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_10_VFNO_26.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_11_VFNO_06.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_12_VFNO_20.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_13_VFNO_19.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_14_VFNO_18.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_15_VFNO_17.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_16_VFNO_16.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_17_VFNO_15.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_18_VFNO_09.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_19_VFNO_13.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_20_VFNO_12.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_21_VFNO_11.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_22_VFNO_14.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_23_VFNO_08.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_24_VFNO_07.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_25_VFNO_27.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_26_VFNO_02.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_27_VFNO_03.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_28_VFNO_28.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_29_VFNO_23.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_4_VFNO_10.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_5_VFNO_01.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_6_VFNO_25.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_7_VFNO_24.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_8_VFNO_22_portada.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VFNO_21.jpg"
    ]
  },
  {
    "id": 28,
    "title": "SUNSET PEOPLE BARCELONA",
    "category": "EVENT",
    "date": {
      "month": "JUL",
      "day": "29",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "JVV une sus fuerzas con el fotógrafo Nacho Alegre y sus socios con la reciente apertura del restaurante-coctelería Servicio Continuo en Barcelona y junto con Kiko Buxó, co-fundador de Shon Mott, amenizan las tardes con un afterwork donde se junta la gente más interesante de esta ciudad. Buenos cocktails, buena música y una cocina abierta non-stop son también puntos a favor de esta reunión quincenal.",
      "en": "JVV joins forces with photographer Nacho Alegre and his partners following the recent opening of the restaurant and cocktail bar Servicio Continuo in Barcelona, and together with Kiko Buxó, co-founder of Shon Mott, livens up the afternoons with an afterwork gathering the city's most interesting crowd. Great cocktails, music and a non-stop open kitchen complete this biweekly event."
    },
    "image": "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_34_SC_SunsetPeople_8-768x1152_portada.jpg",
    "gallery": [
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_113_SC_SunsetPeople_54-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_116_SC_SunsetPeople_57-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_34_SC_SunsetPeople_8-768x1152_portada.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_35_SC_SunsetPeople_11-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_40_SC_SunsetPeople_22-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_57_SC_SunsetPeople_23-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_77_SC_SunsetPeople_32-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_80_SC_SunsetPeople_39-768x1152.jpg"
    ]
  },
  {
    "id": 29,
    "title": "CHA CHÁ «THE BRUNCH»",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "22",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "Después de varios meses dando otra vez sentido a la noche madrileña con CHA CHÁ, en el que colabora cada semana JVV, decidimos hacer una versión diurna y vespertina de 12 horas de música sin parar en uno de los mejores cielos de Madrid, el del Hotel ME en Plaza Santa Ana. Para ello se redecoró completamente la terraza con un sinfín de rosas y se creó una estancia secreta al más puro estilo «boudoir francés».",
      "en": "After several months giving new meaning to Madrid nightlife with CHA CHÁ, in which JVV collaborates every week, we decided to create a 12-hour daytime and evening edition of non-stop music under one of the best skies in Madrid, at the Hotel ME in Plaza Santa Ana. The terrace was completely redecorated with countless roses and a secret room was created in true «French boudoir» style."
    },
    "image": "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_164_13247789_252684125087379_6652051671936717720_o_portada.jpg",
    "gallery": [
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_108_13268219_252684188420706_3781755597142707113_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_115_13254763_252684258420699_3910968046848071465_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_122_13254662_252684075087384_8516962099916215337_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_129_13248535_252684141754044_6325815067378307075_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_136_13248494_252683625087429_6873473844956602798_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_143_13248390_252684048420720_8634359961708064747_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_150_13248326_252683628420762_4735658838677888349_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_157_13247825_252684145087377_3347771721788816441_o-1.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_164_13247789_252684125087379_6652051671936717720_o_portada.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_171_13246444_252683811754077_4076198123276823846_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_178_13246321_252683945087397_4290169221369030388_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_185_13244113_252682855087506_1103409002563227790_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_192_13243928_252683775087414_5934412622784257956_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_199_13243905_252683798420745_5477288751824479034_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_206_13243841_252683925087399_4477793128888792996_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_213_13243805_252684398420685_2972939418591271954_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_220_13243795_252682861754172_1990025820089347421_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_227_13235414_252684205087371_8724027440973501319_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_234_13235220_252684288420696_228050401043377994_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_241_13227498_252684395087352_4131505966263436299_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_248_13227473_252684305087361_4756860083491389770_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_255_12440768_252683921754066_8279170847016708584_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_37_13268235_252684065087385_6717170469584582914_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_66_13301559_252684378420687_5397914606135759243_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_73_13301390_252684335087358_2518781312194071073_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_80_13301360_252683845087407_2940282591693328957_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_87_13268545_252684238420701_8752543635543282605_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_94_13268310_252683868420738_1067484960613889020_o.jpg"
    ]
  },
  {
    "id": 30,
    "title": "EMPORIO ARMANI SOUNDS",
    "category": "EVENT",
    "date": {
      "month": "ABR",
      "day": "29",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "La marca italiana confió la completa producción del único evento de este año en España a JVV, desarrollando todo su mundo en el interior del Teatro El Principito en el centro de Madrid. No faltaron actores, cantantes, escritores, políticos y un sinfín de socialités que no quisieron perderse la actuación de AlunaGeorge en su única visita española y todas las sorpresas que la marca les tenía preparadas en esta velada. Pascal Moscheni, JVV Friend, fue el encargado de hacer bailar a los invitados.",
      "en": "The Italian brand entrusted the complete production of its only event of the year in Spain to JVV, bringing its entire universe to life inside Teatro El Principito in downtown Madrid. Actors, singers, writers, politicians and socialites gathered to enjoy AlunaGeorge's performance on their sole Spanish stop alongside all the surprises prepared for the evening. Pascal Moscheni, JVV Friend, kept the guests dancing."
    },
    "image": "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_39_IMG_9775-1024x683.jpg",
    "gallery": [
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_23_IMG_9522-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_24_IMG_9557-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_25_IMG_9558-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_26_IMG_9566-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_27_IMG_9587-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_28_IMG_9599-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_29_IMG_9616-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_30_IMG_9621-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_31_IMG_9622-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_32_IMG_9629-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_33_IMG_9666-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_34_IMG_9706-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_35_IMG_9743-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_36_IMG_9752-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_37_IMG_9756-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_38_IMG_9774-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_39_IMG_9775-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_40_IMG_9830-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_41_IMG_9838-1024x683_portada.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_72_IMG_9774-768x512.jpg"
    ]
  },
  {
    "id": 31,
    "title": "EXPOSICIÓN ALBERTO LÁZARO",
    "category": "EVENT",
    "date": {
      "month": "FEB",
      "day": "24",
      "year": "2016"
    },
    "location": "Spain",
    "description": {
      "es": "The Apartments Madrid en su búsqueda de no solo dar alojamiento a los turistas nacionales e internacionales que llegan cada semana a sus apartamentos, quiso contar con JVV para desarrollar un ambiente acogedor e íntimo y así presentar las fotografías de Alberto Lázaro, cuyo hobby en redes sociales le ha hecho ganar un espacio en el mundo de la expresión fotográfica a través de retazos de fachadas y pavimentos que recoge en sus viajes a cualquier parte del mundo.",
      "en": "The Apartments Madrid, in its quest to offer more than just accommodation to national and international travelers arriving each week, partnered with JVV to create a warm and intimate setting to present the photography of Alberto Lázaro, whose passion on social media has earned him a place in photographic expression through fragments of facades and pavements captured on his travels around the world."
    },
    "image": "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_35_apart_portada.jpg",
    "gallery": [
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_15_e01f0be7-1282-4d73-84d0-fecfde9e2aa0.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_19_a2769117-70b7-4e9b-8d7a-1290575225fa.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_23_15f42987-fcee-4c7b-a505-fa08ffef6071.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_27_39b0cce4-c4b5-4052-a103-25532807b42e.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_35_apart_portada.jpg"
    ]
  },
  {
    "id": 32,
    "title": "POP UP STORE LYDIA DELGADO",
    "category": "EVENT",
    "date": {
      "month": "DIC",
      "day": "10",
      "year": "2015"
    },
    "location": "Spain",
    "description": {
      "es": "En este Pop Up unimos fuerzas de dos grandes de la moda en España, Lydia Delgado, diseñadora catalana consagrada desde primeros de los ’90 y Elena Benarroch, modista desde primeros de los ’80 con varios premios nacionales. La fusión y el temperamento de ambas colecciones dieron un colorido y fuerza al espacio que además se vio reforzado por las distintas clientas de cada una, que en muchos casos descubrieron por primera vez la otra marca.",
      "en": "In this Pop Up we joined forces with two fashion greats in Spain: Lydia Delgado, a Catalan designer established since the early '90s, and Elena Benarroch, a couturier since the early '80s with several national awards. The fusion and temperament of both collections brought vibrant color and strength to the space, reinforced by each designer's clientele discovering the other brand."
    },
    "image": "/Events/JVV _ POP UP STORE LYDIA DELGADO/imgi_9_Pop-Up-Lydia-Delgado-Madrid.jpg",
    "gallery": [
      "/Events/JVV _ POP UP STORE LYDIA DELGADO/imgi_9_Pop-Up-Lydia-Delgado-Madrid.jpg"
    ]
  },
  {
    "id": 33,
    "title": "APERTURA SHON MOTT MADRID",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "14",
      "year": "2015"
    },
    "location": "Spain",
    "description": {
      "es": "Después del éxito de la primera tienda en Barcelona a primeros del 2015, los hermanos Buxó no tardaron en dar el paso a la capital para dar a conocer esta joven pero cuidada marca a los madrileños. El evento de inauguración estuvo marcado por una representación de la vida social española en todos los ámbitos cuya nota musical la puso Lucía Scansetti, también representada publicitariamente por JVV, presentando su EP, Dimensions of Dialogue.",
      "en": "Following the success of their first store in Barcelona in early 2015, the Buxó brothers soon expanded to the capital to introduce this young, carefully crafted brand to Madrid. The opening event brought together figures from across Spanish social and cultural life, with live music by Lucía Scansetti, also represented by JVV, presenting her EP Dimensions of Dialogue."
    },
    "image": "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_28_MG_4570-1_portada.jpg",
    "gallery": [
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_28_MG_4570-1_portada.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_31_MG_4600-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_34_MG_4532-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_37_MG_4557-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_41_MG_4648-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_44_MG_4508-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_48_MG_4589-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_52_MG_4579-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_56_MG_4483-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_60_MG_4564-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_64_MG_4559-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_68_MG_4590-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_72_MG_4641-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_76_MG_4540-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_80_MG_4538-1.jpg",
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_84_MG_4531-1.jpg"
    ]
  },
  {
    "id": 34,
    "title": "PANDORA",
    "category": "EVENT",
    "date": {
      "month": "ENE",
      "day": "29",
      "year": "2011"
    },
    "location": "Spain",
    "description": {
      "es": "Fue el nacimiento de alguna forma de JVV, sesiones de música de Pascal Moscheni, un JVV Friend, en un entorno mágico en Milán, Ristorante Quattrocento, donde su amplia terraza y sus recónditos salones dieron pie a un sinfín de noches donde se juntaron, podemos decir, todas las personas que en el mundo de la moda y el diseño ahora son sus protagonistas a nivel internacional.",
      "en": "It was in a way the birth of JVV: music sessions by Pascal Moscheni, a JVV Friend, in a magical setting in Milan, Ristorante Quattrocento, where its spacious terrace and hidden lounges hosted countless nights bringing together many of today's international protagonists in fashion and design."
    },
    "image": "/Events/JVV _ PANDORA/imgi_4_pandora_flyer.jpg",
    "gallery": [
      "/Events/JVV _ PANDORA/imgi_4_pandora_flyer.jpg"
    ]
  }
];

export default function Events() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-32 px-6">
      <SEO 
        title={t('events.title')}
        description={`${t('events.title')}: ${t('events.subtitle')} We produce exclusive high-end corporate events, beauty previews, and luxury branding launches worldwide.`}
      />
      <header className="max-w-7xl mx-auto mb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/5 pb-12"
        >
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.8] tracking-tighter uppercase mb-8 md:mb-0">
            {t('events.title')}
          </h1>
          <p className="text-lg font-light opacity-50 max-w-sm italic leading-snug">
             {t('events.subtitle')}
          </p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
        {EVENTS_DATA.map((event, idx) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.1 }}
            className="group flex flex-col"
          >
            <Link to={`/events/${event.id}`} className="block relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8 border border-white/5 shadow-md rounded-sm">
               <img 
                 src={event.image} 
                 alt={event.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s]"
               />
            </Link>

            <div className="space-y-3 px-1">
               <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-40 font-sans font-medium">
                  <span>{event.category}</span>
                  <span>{event.date.month} {event.date.day}, {event.date.year}</span>
               </div>
               <Link to={`/events/${event.id}`}>
                 <h3 className="text-2xl font-serif tracking-tight uppercase group-hover:opacity-60 transition-opacity leading-tight">
                   {event.title}
                 </h3>
               </Link>
               <Link to={`/events/${event.id}`} className="inline-block text-[9px] uppercase tracking-widest border-b border-white/10 pb-1 hover:border-white transition-all pt-2">
                  {language === 'es' ? 'Ver Detalle' : 'View Detail'}
               </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-60 max-w-7xl mx-auto border-t border-white/5 pt-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <h2 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[0.9] opacity-80 uppercase">
              {language === 'es' ? 'Experiencias' : 'Exclusive'} <br /> {language === 'es' ? 'Exclusivas.' : 'Experiences.'}
            </h2>
            <div className="space-y-8">
               <p className="text-lg font-light opacity-50 leading-relaxed max-w-md">
                 {language === 'es' 
                   ? 'Creamos y gestionamos listas de invitados para las marcas más prestigiosas del mundo, garantizando visibilidad de alto impacto y un engagement auténtico.'
                   : 'We create and manage guest lists for the world\'s most prestigious brands, ensuring high-impact visibility and authentic engagement.'}
               </p>
               <a href="/contact" className="inline-block text-xs uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all">
                 {language === 'es' ? 'Contactar' : 'Inquire Now'}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
