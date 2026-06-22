import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const EVENTS_DETAILS_DATA = [
  {
    "id": 1,
    "title": "CHAUMET CHRISTMAS",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "18",
      "year": "2025"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "JVV participó con Chaumet, la marca de alta joyeria del grupo LVMH, en la edición 2025 del Solidarity Christmas Tree, un evento solidario en el que las marcas de lujo más importantes del mundo crean árboles de Navidad únicos y exclusivos que después se subastan. Nuestra labor abarcó la selección y coordinación del personal de bienvenida, gestión y producción musical y visual del evento a través de nuestro JVV People, Ayub. Una velada donde la creatividad, la filantropía y el lujo se unen para generar un impacto social real durante la temporada navideña.",
      "en": "JVV collaborated with Chaumet, the high jewelry brand of the LVMH group, in the 2025 edition of the Solidarity Christmas Tree, a charity event where the world's leading luxury brands create unique and exclusive Christmas trees that are later auctioned. Our work covered the selection and coordination of the greeting staff, and the musical and visual production of the event through our JVV People member, Ayub. An evening where creativity, philanthropy, and luxury unite to generate a real social impact during the holiday season."
    },
    "image": "/Chaumet.jpg",
    "gallery": [
      "/Chaumet.jpg"
    ]
  },
  {
    "id": 2,
    "title": "CASA PATYKA presentation – Glow line",
    "category": "BEAUTY",
    "date": {
      "month": "OCT",
      "day": "18",
      "year": "2024"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "JVV estuvo a cargo de la producción del evento y del concepto CASA PATYKA en Barcelona, un formato que por primera vez llegó a la ciudad. Diseñado para crear una experiencia de lujo eco, este espacio reunió a profesionales de farmacia, influencers y otras personas afines a la marca para descubrir Glow, la nueva línea de PATYKA, formulada para iluminar la piel con ingredientes naturales y orgánicos. Quienes asistieron pudieron experimentar de primera mano la innovación de la marca, probar los productos y sumergirse en el universo sensorial de PATYKA.",
      "en": "JVV was in charge of the event production and the CASA PATYKA concept in Barcelona, a format that arrived in the city for the first time. Designed to create an eco-luxury experience, this space brought together pharmacy professionals, influencers, and brand enthusiasts to discover Glow, PATYKA's new line formulated to illuminate the skin with natural and organic ingredients. Attendees had the opportunity to experience the brand's innovation firsthand, test the products, and immerse themselves in PATYKA's sensory universe."
    },
    "image": "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_101_Patyka-88-scaled.jpg",
    "gallery": [
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_101_Patyka-88-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_36_T8A2447-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_41_Patyka-6-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_46_Patyka-26-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_51_Patyka-33-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_56_Patyka-54-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_61_Patyka-103-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_71_Patyka-27-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_76_Patyka-51-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_81_Patyka-66-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_86_Patyka-70-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_91_Patyka-76-scaled.jpg",
      "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_96_Patyka-82-scaled.jpg"
    ]
  },
  {
    "id": 3,
    "title": "ELLA FESTIVAL 2025",
    "category": "LIFESTYLE",
    "date": {
      "month": "AUG",
      "day": "29",
      "year": "2024"
    },
    "location": "Mallorca, Spain",
    "description": {
      "es": "El pasado mes de agosto, tuvimos la oportunidad de colaborar en la edición del ELLA Festival Mallorca 2025, un evento que celebra la diversidad, la cultura y la innovación. Nos ocupamos de generar espacios interesantes dentro del beach club que fue el punto de encuentro durante ese fin de semana. Junto a Hammam Al Ándalus, creamos un santuario de bienestar, ofreciendo momentos de relajación y conexión a través de una experiencia sensorial inmersiva y con Júpiter Bornay y Greta Jewelry transformamos el arte en emoción, presentando la joyería como una forma de expresión artística con piezas atemporales. Activaciones diferentes, un mismo propósito: crear conexiones auténticas y memorables.",
      "en": "Last August, we had the opportunity to collaborate in the ELLA Festival Mallorca 2025, an event celebrating diversity, culture, and innovation. We were responsible for creating engaging spaces within the beach club, which served as the main meeting point during the weekend. Together with Hammam Al Ándalus, we created a wellness sanctuary, offering moments of relaxation and connection through an immersive sensory experience. With Júpiter Bornay and Greta Jewelry, we transformed art into emotion, presenting jewelry as a form of artistic expression with timeless pieces. Different activations, same purpose: creating authentic and memorable connections."
    },
    "image": "/ella festival.jpg",
    "gallery": [
      "/ella festival.jpg"
    ]
  },
  {
    "id": 4,
    "title": "PALMA INTERNATIONAL BOAT SHOW 2025",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "03",
      "year": "2024"
    },
    "location": "Palma de Mallorca",
    "description": {
      "es": "En la edición de 2025 del Palma International Boat Show (30 de abril – 3 de mayo), una de las ferias náuticas más prestigiosas del Mediterráneo y referencia internacional en el sector, JVV se encargó de la selección y coordinación de perfiles estratégicos e influencers, conectando el mundo náutico con nuevas audiencias y generando visibilidad de alto valor para el evento. El Palma International Boat Show reúne a más de 30.000 visitantes y a más de 300 empresas internacionales, consolidando a Palma de Mallorca como un epicentro global de la náutica y un punto de encuentro imprescindible para la innovación, el lifestyle y el mar",
      "en": "At the 2025 edition of the Palma International Boat Show (April 30 – May 3), one of the most prestigious boat shows in the Mediterranean and an international reference in the sector, JVV was in charge of selecting and coordinating strategic profiles and influencers, connecting the nautical world with new audiences and generating high-value visibility for the event. The Palma International Boat Show brings together over 30.000 visitors and more than 300 international companies, consolidating Palma de Mallorca as a global epicentre for yachting and an essential meeting point for innovation, lifestyle, and the sea."
    },
    "image": "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_16_PIB-1.jpg",
    "gallery": [
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_16_PIB-1.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_19_PIB-2.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_22_PIB-3.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_25_PIB-4.jpg",
      "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5.jpg"
    ]
  },
  {
    "id": 5,
    "title": "THE BODY SHOP – T4 Madrid Airport Opening",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "12",
      "year": "2023"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "The Body Shop dejó en manos de JVV la producción del en evento de inauguración de su nueva tienda en el Aeropuerto de Barajas, Madrid. El encuentro contó con la presencia destacada de dos de nuestras #JVVPeople, Valeria Vegas y Rocío Saiz, además de un histórico de la Movida Madrileña,  Paco Clavel, quienes ofrecieron una cautivadora charla sobre ese momento tan increíble de la capital y nos dieron a conocer más la marca. Además, Rocío Saiz amenizó la noche con una sesión muy viajera mientras les invitades bailaban, probaban los productos y se refrescaban.",
      "en": "The Body Shop entrusted JVV with the production of the opening event for its new store at Barajas Airport, Madrid. The gathering featured the prominent presence of two of our #JVVPeople, Valeria Vegas and Rocío Saiz, alongside Paco Clavel, a historical figure of the Movida Madrileña, who gave a captivating talk about that incredible era of the capital and introduced us to the brand. Additionally, Rocío Saiz enlivened the night with a travel-themed DJ set while guests danced, tested products, and refreshed themselves."
    },
    "image": "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_10_3.jpg",
    "gallery": [
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_10_3.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_11_2.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_16_32bfcdd1-8c05-48f0-8577-0d8be4d58759.jpg",
      "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_8_1.jpg"
    ]
  },
  {
    "id": 6,
    "title": "TIMEOUT FOOD & DRINK AWARDS",
    "category": "LIFESTYLE",
    "date": {
      "month": "MAR",
      "day": "13",
      "year": "2023"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Los ‘Premios Food & Drink de Time Out 2023’ se vistieron de verde gracias a JVV. La revista contó con nuestra colaboración para decorar este evento anual que tuvo lugar de en el Teatro Eslava para celebrar la escena gastronómica de la ciudad, premiando a los mejores en la industria de la comida y las bebidas.",
      "en": "The 'Time Out Food & Drink Awards 2023' were dressed in green thanks to JVV. The magazine collaborated with us to decorate this annual event, which took place at the Eslava Theatre to celebrate the city's gastronomic scene, honoring the best in the food and beverage industry."
    },
    "image": "/Events/JVV _ TIMEOUT/imageye___-_imgi_10_WhatsApp-Image-2023-05-17-at-16.16.42-1.jpg",
    "gallery": [
      "/Events/JVV _ TIMEOUT/imageye___-_imgi_10_WhatsApp-Image-2023-05-17-at-16.16.42-1.jpg",
      "/Events/JVV _ TIMEOUT/imageye___-_imgi_12_WhatsApp-Image-2023-05-17-at-16.16.42.jpg",
      "/Events/JVV _ TIMEOUT/imageye___-_imgi_16_MG_3556-2048x1463.jpg",
      "/Events/JVV _ TIMEOUT/imageye___-_imgi_22_MG_3973-2048x1462.jpg",
      "/Events/JVV _ TIMEOUT/imageye___-_imgi_28_MG_4065-2048x1462.jpg",
      "/Events/JVV _ TIMEOUT/imgi_14_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0011_Logo-2048x1365.jpg",
      "/Events/JVV _ TIMEOUT/imgi_18_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0057_Logo-2048x1365.jpg",
      "/Events/JVV _ TIMEOUT/imgi_22_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0149_Logo-2048x1365.jpg",
      "/Events/JVV _ TIMEOUT/imgi_26_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0206_Logo-2048x1365.jpg"
    ]
  },
  {
    "id": 7,
    "title": "RIU Plaza de España – New Year's Eve",
    "category": "LIFESTYLE",
    "date": {
      "month": "DEC",
      "day": "31",
      "year": "2022"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Para dar la bienvenida al 2023, el hotel RIU Plaza de España contó con JVV para la producción de un evento muy especial. Junto a Isaac Dos Puntos, JVV creó la experiencia sensorial RIUTUAL.Con máscaras, brillo, mucho misterio y el ritmo de nuestra JVV FRiend, la Dj Alicia Galuzis, despedimos el año por todo lo alto",
      "en": "To welcome 2023, the RIU Plaza de España hotel counted on JVV to produce a very special event. Together with Isaac Dos Puntos, JVV created the sensory experience RIUTUAL. With masks, glitter, mystery, and the beats of our JVV Friend, DJ Alicia Galuzis, we bid farewell to the year in style."
    },
    "image": "/hotel-me-new.jpg",
    "gallery": [
      "/hotel-me-new.jpg"
    ]
  },
  {
    "id": 8,
    "title": "PARAÍSO FESTIVAL 3rd Edition",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "24",
      "year": "2022"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Durante las tres primeras ediciones del  Festival Paraiso,  JVV se ha ocupado de la confirmación y la gestión de algunos de los patrocinios confirmados, como Zumos Linda, la marca deportiva Reebok y en esta ultima edición con Schweppes . Además en sus tres ediciones hemos aportado color a la convocatoria con la asistencia de influencers y artistas, muches de elles parte de nuestra #JVVPeople.",
      "en": "During the first three editions of Paraíso Festival, JVV was in charge of securing and managing confirmed sponsorships, including Zumos Linda, sports brand Reebok, and in this latest edition, Schweppes. Additionally, throughout all three editions, we brought color to the guest list with the attendance of influencers and artists, many of whom are part of our #JVVPeople."
    },
    "image": "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_11_5-2-1.jpg",
    "gallery": [
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_11_5-2-1.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_19_Paraiso-2022_PJGarcinuno_1E9A1662-1-scaled.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_22_Paraiso-2022_PJGarcinuno_1E9A1694-1-2048x1365.jpg",
      "/Events/JVV _ FESTIVAL PARAÍSO III Edición/imgi_8_1-2.jpg"
    ]
  },
  {
    "id": 9,
    "title": "PRIVILEGIADA Short Film Presentation",
    "category": "EVENT",
    "date": {
      "month": "MAR",
      "day": "08",
      "year": "2021"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "Durante la semana del 8 de marzo en la ciudad de Barcelona nos ocupamos de presentar el corto dirigido, escrito y protagonizado por Alex de la Croix, #JVVFriend, ‘Privilegiada’, donde trata temas de disparidad de géneros y ciertas imposiciones sociales asociadas a las mujeres.     Para este evento elegimos dos espacios únicos, Soho House y Poble Nou Social Club.     Distintas veladas donde se pudo disfrutar, con las medidas sanitarias pertinentes, de la proyección del mismo, charla-coloquio con Alex y Jesús Vázquez Viedma (fundador y director de la agencia) para finalizar con una sesión musical muy especial a cargo de otra #JVVFriend, Loli Zazou.     JVV se ocupó de la organización, producción y convocatoria de los diferentes pases.",
      "en": "During the week of March 8 in Barcelona, we presented the short film directed, written, and starring Alex de la Croix (#JVVFriend), 'Privilegiada', which addresses gender disparity and social expectations associated with women. For this event, we chose two unique venues, Soho House and Poble Nou Social Club. Across different evenings, guests enjoyed the screening, followed by a Q&A with Alex and Jesús Vázquez Viedma (founder and director of the agency), closing with a special music set by another #JVVFriend, DJ Loli Zazou. JVV managed the organization, production, and guest list for the screenings."
    },
    "image": "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg",
    "gallery": [
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_5_poble-nou-aleix-31-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_6_poble-nou-aleix-40-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_7_poble-nou-aleix-24-scaled.jpg",
      "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_8_poble-nou-aleix-27-scaled.jpg"
    ]
  },
  {
    "id": 10,
    "title": "FRANGELICO PRESENTATION",
    "category": "LIFESTYLE",
    "date": {
      "month": "MAY",
      "day": "11",
      "year": "2019"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Frangelico , la marca italiana del grupo Campari nos delegó la convocatoria de influencers e invitados afines a la marca para su evento de presentación en Madrid donde descubrieron las nuevas formas de consumir este histórico digestivo. Actrices como Michelle Calvo ,  Paloma López, el actor Jorge López o la cantante  Javiera Mena no quisieron perderse esta cita llena de sorpresas, juegos y risas.",
      "en": "Frangelico, the Italian brand from Campari Group, delegated to us the guest list management of influencers and brand advocates for its presentation event in Madrid, where they discovered new ways to enjoy this classic liqueur. Actresses like Michelle Calvo, Paloma López, actor Jorge López, and singer Javiera Mena did not want to miss this event full of surprises, games, and laughter."
    },
    "image": "/Events/JVV _ FRANGELICO/imgi_4_60782950_400453880682005_3191332550403324939_n.jpg",
    "gallery": [
      "/Events/JVV _ FRANGELICO/imgi_4_60782950_400453880682005_3191332550403324939_n.jpg",
      "/Events/JVV _ FRANGELICO/imgi_5_60914570_2274642219285064_7550676502692508645_n.jpg",
      "/Events/JVV _ FRANGELICO/imgi_6_59894378_147463536392500_1403255679737929204_n.jpg",
      "/Events/JVV _ FRANGELICO/imgi_7_frangelico-sobremesa-madrid-2019_selecció-final_07-.jpg"
    ]
  },
  {
    "id": 11,
    "title": "LATITUDE at El Paracaidista",
    "category": "LIFESTYLE",
    "date": {
      "month": "DEC",
      "day": "03",
      "year": "2018"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "LATITUDE , el colectivo que ha revolucionado la moda en España consiguiendo hacer una colección completamente ecosostenible enteramente producida en nuestro país, decidió montar una tienda efímera en Madrid por casi dos meses dentro del concept store El Paracaidista , para que no hubiera excusa para conocer de primera mano sus prendas, sus siguientes pasos y a algunas de sus integrantes. En JVV nos ocupamos de la convocatoria, producción y realizamos distintos eventos con algunas de nuestras #JVVPeople como  Carla y Sandra o  Julia De Castro.",
      "en": "LATITUDE, the collective that has revolutionized fashion in Spain by creating a completely eco-sustainable collection entirely produced in our country, decided to set up a pop-up store in Madrid for almost two months inside the concept store El Paracaidista. In JVV, we managed the guest list, production, and held various events with some of our #JVVPeople, such as Carla and Sandra or Julia De Castro."
    },
    "image": "/Events/JVV _ LATITUDE en El Paracaidista/imgi_14_DSCF2260.png",
    "gallery": [
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_14_DSCF2260.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_16_Unknown-1-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_17_Unknown-2-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_18_Unknown-3-2.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_19_DSCF2237-1.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_20_Unknown-4.png",
      "/Events/JVV _ LATITUDE en El Paracaidista/imgi_24_PHOTO-2018-12-14-12-48-45-700x933.jpg"
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
    "location": "Barcelona, Spain",
    "description": {
      "es": "Repetimos con el verano ya finalizado en el Together We Fest en su edición catalana. En el Club de Polo y con una programación muy similar a la de Madrid, por dos días sus asistentes pudieron bailar al ritmo del grupo Delaporte, #JVVPeople. Además otros dos artistas que también vinieron de la mano de JVV, la actriz Clara Maldonado y el actor Jorge López.",
      "en": "We returned at the end of the summer for the Together We Fest Catalan edition. Held at the Club de Polo with a similar schedule to Madrid, attendees danced for two days to the beats of our #JVVPeople group, Delaporte. We also brought actress Clara Maldonado and actor Jorge López to the event."
    },
    "image": "/Events/JVV _ APEROL FEST Barcelona/imgi_4_APEROS-TWF_BCN_57114.jpg",
    "gallery": [
      "/Events/JVV _ APEROL FEST Barcelona/imgi_4_APEROS-TWF_BCN_57114.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_5_APEROL-TWF_BCN-1655.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_6_69997171_372487340303228_1533284820018411927_n.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_7_APEROL-TWF_BCN-3574.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_8_APEROS-TWF_BCN_162181.jpg",
      "/Events/JVV _ APEROL FEST Barcelona/imgi_9_72370804_908146462892051_8825779248746638782_n.jpg"
    ]
  },
  {
    "id": 13,
    "title": "ROGER VIVIER with Julia de Castro",
    "category": "LIFESTYLE",
    "date": {
      "month": "AUG",
      "day": "18",
      "year": "2019"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "La firma francesa de calzado Roger Vivier escogió a Julia De Castro, #JVVPeople, como Maestra de Ceremonias para presentar su colección en la Fundación Fernando de Castro en Madrid, ante un selecto y distinguido grupo de invitados elegidos por su director creativo, Gherardo Felloni, presente en el evento, que compartió cena y velada con Inès de la Fressange, Bibiana Fernández, Ana García Siñeriz, Laura Ponte, Boris Izaguirre y un sinfín de personalidades que gozaron de los temas y sonidos de De La Puríssima.",
      "en": "French footwear house Roger Vivier chose Julia De Castro (#JVVPeople) as Master of Ceremonies to present its collection at the Fernando de Castro Foundation in Madrid. The select group of guests invited by creative director Gherardo Felloni shared an evening with Inès de la Fressange, Bibiana Fernández, Ana García Siñeriz, Laura Ponte, Boris Izaguirre, and many other personalities who enjoyed the sounds of De La Puríssima."
    },
    "image": "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_4_20190618sdr126_20190618113639464-scaled.jpg",
    "gallery": [
      "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_4_20190618sdr126_20190618113639464-scaled.jpg",
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
    "location": "Madrid, Spain",
    "description": {
      "es": "JVV colaboró una vez más con la bebida italiana APEROL para poner música y llevar a invitados muy especiales a su Together We Fest. La primera edición de su propio festival que por tres días ofreció una programación similar a sus asistentes dentro del marco incomparable de la Embajada de Italia. Fueron muchas las sorpresas que se dieron y el nexo común de todas las jornadas fue nuestro grupo #JVVPeople, DELAPORTE y junto a ellos trajimos en uno de sus días a la cantante mexicana Ximena Sariñana que se presentó a España a través de Aperol y JVV. Además, conseguimos traer al actor José Lamuño y a Jorge López, el actor revelación de la segunda temporada de Élite (Netflix).",
      "en": "JVV collaborated once again with Italian brand APEROL to provide music and bring very special guests to their Together We Fest. The first edition of their own festival offered three days of programming inside the Italian Embassy. The highlight of all sessions was our #JVVPeople band, DELAPORTE. Alongside them, we hosted Mexican singer Ximena Sariñana for her Spanish debut, and brought actor José Lamuño and Jorge López (from Netflix's Élite)."
    },
    "image": "/Events/JVV _ APEROL FEST Madrid/imgi_4_H71A1340.jpg",
    "gallery": [
      "/Events/JVV _ APEROL FEST Madrid/imgi_4_H71A1340.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_5_H71A1727.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_6_H71A9166.jpg",
      "/Events/JVV _ APEROL FEST Madrid/imgi_7_H71A9859.jpg"
    ]
  },
  {
    "id": 15,
    "title": "PARAÍSO FESTIVAL 1st Edition",
    "category": "EVENT",
    "date": {
      "month": "JUN",
      "day": "08",
      "year": "2018"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "En junio tuvo lugar la primera edición de  PARAÍSO FESTIVAL en Madrid. Un festival boutique que da un paso más en el territorio nacional para una apuesta de calidad musical pero también de gastronomía, arte, naturaleza y respeto ambiental. En JVV nos ocupamos del patrocinio, selección de influencers e invitados y en su jornada del sábado pudimos contar con la increíble actuación de nuestro grupo #JVVPeople,  DELAPORTE y con la sesión que nos dejó sin parar de bailar de nuestro #JVVFriend,  YANIK PARK.",
      "en": "June marked the debut of PARAÍSO FESTIVAL in Madrid, a boutique festival merging music, gastronomy, art, and environmental sustainability. JVV was in charge of sponsorships, influencer selection, and guests. Saturday's highlight was the incredible performance by our #JVVPeople band, DELAPORTE, and a dance-filled set by our #JVVFriend, YANIK PARK."
    },
    "image": "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_10_AYanik-Park-2.png",
    "gallery": [
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_10_AYanik-Park-2.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_11_Ayanik-park.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_12_AParaiso-Festival_Madrid_Junio-2018_01_MR_0139-Editar.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_13_AParaiso-Festival_Madrid_Junio-2018_01_MR_0169-Editar.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_14_Paraiso-escenario-1.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_15_Aparaiso-2018-nabscabDSC_3940.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_4_A_DSC8447_nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_5_Paraiso-cartel-1.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_6_A_DSC8661_Rodiguez-Jr-Liset-Alea-nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_7_A_DSC8908_nabscab.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_8_Sandra-y-Carla-b.png",
      "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_9_ADELAPORTE.png"
    ]
  },
  {
    "id": 16,
    "title": "VESTIAIRE COLLECTIVE at Soho House Barcelona",
    "category": "LIFESTYLE",
    "date": {
      "month": "JUN",
      "day": "05",
      "year": "2018"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "Una vez más nuestro director y fundador,  Jesús Vázquez Viedma, ejerció de maestro de ceremonias para la cita mensual de Fashion For Lunch en Soho House Barcelona. En el restaurante italiano Cecconi’s tuvimos el placer de contar con una de las fundadoras de la app/web del e-commerce de segunda mano de marcas de lujo, Sophie Hersan y con su actual embajadora en España, Blanca Miró. Al finalizar la charla, JVV inauguró el primer pop up en la capital catalana y que por tres días permitió que Vestiaire Collective tuviera una efímera tienda física en Soho House, uno de los emplazamientos más visitados de Barcelona.",
      "en": "Once again, our founder Jesús Vázquez Viedma acted as master of ceremonies for the monthly Fashion For Lunch event at Soho House Barcelona. Held at Cecconi's, the talk featured Sophie Hersan (co-founder of luxury resale platform Vestiaire Collective) and ambassador Blanca Miró. Afterwards, JVV launched the brand's first pop-up shop in Barcelona, creating a three-day physical boutique inside Soho House."
    },
    "image": "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_10_FashionLunch_VC_SH_62.png",
    "gallery": [
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_10_FashionLunch_VC_SH_62.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_4_FashionLunch_VC_SH_18.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_5_FashionLunch_VC_SH_40.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_6_FashionLunch_VC_SH_28.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_7_FashionLunch_VC_SH_60.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_8_FashionLunch_VC_SH_13.png",
      "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_9_FashionLunch_VC_SH_11.png"
    ]
  },
  {
    "id": 17,
    "title": "BOTTEGA VENETA at Soho House Barcelona",
    "category": "LIFESTYLE",
    "date": {
      "month": "MAY",
      "day": "29",
      "year": "2018"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "",
      "en": "Florentine luxury house Bottega Veneta (Kering Group) trusted JVV to invite selected private club members to explore their latest creations at the Paseo de Gracia boutique. This was followed by an Italian dinner prepared by Cecconi's in the private room of the club, adorned with the iconic Cabat bag designs."
    },
    "image": "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_10_Bottega-Veneta-3.png",
    "gallery": [
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_10_Bottega-Veneta-3.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_11_Bottega-Veneta-8-1.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_4_Bottega-Veneta-7.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_5_Bottega-Veneta-2.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_6_Bottega-Veneta-6.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_7_Bottega-Veneta-4.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_8_Bottega-Veneta-1.png",
      "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_9_Bottega-Veneta-5.png"
    ]
  },
  {
    "id": 18,
    "title": "ELEMENTS by Andrea Dopico Cafarelli",
    "category": "LIFESTYLE",
    "date": {
      "month": "MAY",
      "day": "14",
      "year": "2018"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "El 14 de mayo Andrea Dopico Cafarelli presentó en la Galería Senda de Barcelona su primer libro para la elaboración de un postre al plato, trasladando su vocación por la pastelería e iniciando con ello una nueva andadura. JVV estuvo a cargo de la convocatoria de medios e invitados así como de cerrar el patrocinio de Cavas Gramona quienes deleitaron a los invitados con su Cava Gramona Imperial Brut Reserva 2013. El arte, el diseño y la cocina se fusionaron durante esta tarde con la finalidad de plasmar un objeto único que potencie la transmisión de conocimientos técnicos de pastelería y a su vez despierte la creatividad del lector",
      "en": "On May 14, Andrea Dopico Cafarelli presented her debut book on plated desserts at Galería Senda in Barcelona, capturing her passion for pastry arts. JVV was in charge of media, guest invitations, and securing the sponsorship of Cavas Gramona. Art, design, and culinary arts blended together to present a unique reference book designed to inspire readers' pastry creativity."
    },
    "image": "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_10_IMG_2487.png",
    "gallery": [
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_10_IMG_2487.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_11_JVV-Email-EVENTS-ELEMENTS.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_12_IMG_2480.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_4_2018-04-17-PHOTO-00001060.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_5_IMG_20092-2.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_6_IMG_21002-2.png",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_7_IMG_21392.jpg",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_8_IMG_20342.jpg",
      "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_9_IMG_2498.png"
    ]
  },
  {
    "id": 19,
    "title": "VANDÔMIAN POP-UP",
    "category": "LIFESTYLE",
    "date": {
      "month": "APR",
      "day": "26",
      "year": "2018"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Vandômian tuvo por primera vez en Madrid su tienda efímera por un día en la calle Lagasca. Durante toda esta jornada sus asistentes pudieron conocer de la mano de su fundadora, Xantal Farnós, todas las colecciones que se encuentran en su web y así poder probar las piezas en un espacio acorde con el estilo de la marca. Contamos con la presencia de, entre otros, Eugenia Martínez de Irujo, Maria Zurita, y muchos más que no quisieron perderse esta oportunidad única.",
      "en": "Vandômian held its first one-day pop-up boutique in Madrid on Lagasca Street. Throughout the day, visitors met founder Xantal Farnós, explored the collections, and tried on pieces in a space tailored to the brand's aesthetic. High-profile guests like Eugenia Martínez de Irujo and Maria Zurita attended this exclusive showcase."
    },
    "image": "/Events/JVV _ VANDÔMIAN/imgi_4_IMG_1871.png",
    "gallery": [
      "/Events/JVV _ VANDÔMIAN/imgi_4_IMG_1871.png",
      "/Events/JVV _ VANDÔMIAN/imgi_5_IMG_1873.png",
      "/Events/JVV _ VANDÔMIAN/imgi_6_IMG_1872.png"
    ]
  },
  {
    "id": 20,
    "title": "SHON MOTT BARCELONA – PAU CLARÍS",
    "category": "LIFESTYLE",
    "date": {
      "month": "NOV",
      "day": "16",
      "year": "2017"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "La tercera boutique de los hermanos Buxó se inauguró en España en Noviembre de 2017 siguiendo las pautas de las dos anteriores. En JVV colaboramos dotándole de una convocatoria muy especial y organizando una post-party que congregó a más de 200 personas en uno de los locales más carismáticos de todo Barcelona.",
      "en": "The third boutique of the Buxó brothers opened in Spain in November 2017. JVV collaborated by curating a very special guest list and organizing an after-party that brought together over 200 guests in one of Barcelona's most charismatic venues."
    },
    "image": "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_4_shonmott.jpg",
    "gallery": [
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_4_shonmott.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_5_shonmott_01.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_6_shonmott_05.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_7_shonmott_04.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_8_shonmott_03.jpg",
      "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_9_shonmott_02.jpg"
    ]
  },
  {
    "id": 21,
    "title": "LA PERLA PRESENTATION",
    "category": "LIFESTYLE",
    "date": {
      "month": "SEP",
      "day": "28",
      "year": "2017"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Quisimos invitar a lo más selecto de Madrid para darle a conocer el total look de La Perla para la temporada O/I 2017-2018. Una tarde llena de conversaciones interesantes, belleza e innumerables propuestas de la mano de esta colección italiana. Su emplazamiento en Madrid, en la calle Ortega y Gasset, fue el marco perfecto para esta reunión.",
      "en": "We invited Madrid's elite to discover the total look of La Perla's F/W 2017-2018 collection. An afternoon filled with engaging conversations, beauty, and Italian design at their Ortega y Gasset boutique in Madrid, providing the perfect setting."
    },
    "image": "/Events/JVV _ LA PERLA/imgi_10_La_perla_07.jpg",
    "gallery": [
      "/Events/JVV _ LA PERLA/imgi_10_La_perla_07.jpg",
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
    "title": "FOMO PARTY",
    "category": "EVENT",
    "date": {
      "month": "MAY",
      "day": "21",
      "year": "2017"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "En JVV queríamos congregar a muchos de nuestros JVVPeople y  JVVFriends en un mismo momento y por eso pensamos en una larga jornada dominical para hacer realidad este propósito. El lugar elegido, Nubel , un espacio creado por Jean Nouvel , dentro del Museo Nacional Centro de Arte Reina Sofía , fue el envoltorio perfecto para esta acción y durante más de 8 horas contamos con la música de Laura Put, Patricia Valley, Yanik Park, Daniel Baughman y Alicia Galuzis y las intervenciones en los más pequeños de nuestros artistas Nadia Benyahya y Misterpiro. Fueron muchos los invitados que nos acompañaron en nuestra primera fiesta FOMO y que quisieron retratarse por nuestra fotógrafa Ana Belén y Álvaro Manof (El Chico De Los Recados).",
      "en": "At JVV, we wanted to gather our JVVPeople and JVVFriends in one place, organizing a Sunday event to bring this vision to life. The venue, Nubel (designed by Jean Nouvel inside the Reina Sofía Museum), was the perfect setting. For over 8 hours, we featured music by Laura Put, Patricia Valley, Yanik Park, Daniel Baughman, and Alicia Galuzis, plus artistic interventions by Nadia Benyahya and Misterpiro. Many guests joined us for our first FOMO party, captured by photographer Ana Belén and Álvaro Manof."
    },
    "image": "/Events/JVV _ FOMO/imgi_20_fomo_02.jpg",
    "gallery": [
      "/Events/JVV _ FOMO/imgi_20_fomo_02.jpg",
      "/Events/JVV _ FOMO/imgi_23_fomo_04.jpg",
      "/Events/JVV _ FOMO/imgi_26_fomo_03.jpg",
      "/Events/JVV _ FOMO/imgi_29_fomo_05.jpg",
      "/Events/JVV _ FOMO/imgi_32_fomo_06.jpg",
      "/Events/JVV _ FOMO/imgi_35_fomo_07.jpg",
      "/Events/JVV _ FOMO/imgi_38_fomo_08.jpg",
      "/Events/JVV _ FOMO/imgi_4_fomo_01.jpg"
    ]
  },
  {
    "id": 23,
    "title": "KENZO BCN OPENING",
    "category": "EVENT",
    "date": {
      "month": "FEB",
      "day": "23",
      "year": "2017"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "Kenzo quiso inaugurar su nueva flagship store en Paseo de Gracia (Barcelona) por todo lo alto con la visita de sus directores creativos, Carol Lim y Humberto León. Fuimos los encargados del desarrollo de todo el evento para el que contamos con la colaboración de Carlota Guerrero y sus bailarines. La velada fue muy especial, con regalo de caricaturas a todos los asistentes y una sesión de música que hizo bailar hasta a los maniquíes. Una larga lista de invitados que congregó a muchas caras conocidas y sociedad catalana y española en general, que no quisieron perderse ningún detalle en una noche que se alargó felizmente. También fuimos los responsables de la prensa y comunicación tanto del evento como de las entrevistas con muchos de los medios españoles más importantes, así como de seleccionar y coordinar a las celebrities e influencers que asistieron.",
      "en": "Kenzo celebrated the grand opening of its new flagship store on Paseo de Gracia (Barcelona) with creative directors Carol Lim and Humberto León. We managed the entire event, collaborating with Carlota Guerrero and her dancers. The evening featured custom caricatures for guests and a lively DJ set. We curated the guest list of public figures and handled press, media relations, and celebrity coordination."
    },
    "image": "/Events/JVV _ KENZO BCN/imgi_20_Kenzo_01.jpg",
    "gallery": [
      "/Events/JVV _ KENZO BCN/imgi_20_Kenzo_01.jpg",
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
    "title": "115th ANNIVERSARY CAPAS SESEÑA",
    "category": "EVENT",
    "date": {
      "month": "NOV",
      "day": "29",
      "year": "2016"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Tuvimos el placer de ocuparnos de la entera producción del evento de celebración del 115 aniversario de la primera casa de capas del mundo y para ello reunimos a sus clientes y personalidades bajo el cielo de Madrid, en la terraza del Hotel Me . Fue una noche muy especial que culminó con la actuación sorpresa del bailarín Sergio Bernal.",
      "en": "We produced the anniversary event celebrating the 115th year of the world's first luxury cape house, Capas Seseña. Gathering clients and prominent figures at the rooftop of the Me Hotel under the Madrid sky, the special evening culminated with a surprise performance by dancer Sergio Bernal."
    },
    "image": "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_02.jpg",
    "gallery": [
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_02.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_07.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_08.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_09.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_10.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_11.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_12.jpg",
      "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_14.jpg",
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
    "id": 25,
    "title": "MANGO x SHOPPING GAUEAN DONOSTI",
    "category": "LIFESTYLE",
    "date": {
      "month": "SEP",
      "day": "16",
      "year": "2016"
    },
    "location": "San Sebastián, Spain",
    "description": {
      "es": "Mango nos encargó la producción del evento especial de la noche Shopping Gauean en su tienda de la calle Fuenterrabia 15 en San Sebastian. Fueron muchas las personas que se acercaron y escucharon la música non stop del dj Alverto Sánchez y disfrutaron de descuentos y sorpresas.",
      "en": "Mango commissioned us to produce a special event for the Shopping Gauean night at their boutique on Fuenterrabia 15 in San Sebastián. Many visitors enjoyed non-stop music by DJ Alverto Sánchez, along with exclusive promotions and surprises."
    },
    "image": "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_10_Mango_donosti_06.jpg",
    "gallery": [
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_10_Mango_donosti_06.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_11_Mango_donosti_05.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_12_Mango_donosti_04.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_13_Mango_donosti_03.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_14_Mango_donosti_02.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_15_Mango_donosti_12.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_16_Mango_donosti_01.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_17_Mango_donosti_17.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_18_Mango_donosti_11.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_19_Mango_donosti_1.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_6_Mango_donosti_09.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_7_Mango_donosti_08.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_8_Mango_donosti_07.jpg",
      "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_9_Mango_donosti_10.jpg"
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
    "location": "Madrid, Spain",
    "description": {
      "es": "Violeta by Mango de la calle Velazquez estuvo repleta de visitas durante la noche MANGO X VOGUE FASHION’S NIGHT OUT (VFNO) . Tania Llasera ejerció de madrina del evento y la dj Alicia Galuzis hicieron de esta noche un momento muy especial, sin olvidarnos de la bebida que corrió durante toda la fiesta con Gramona ,  Linda y Cervezas Malasaña .",
      "en": "Violeta by Mango on Velázquez Street was packed during MANGO X VOGUE FASHION'S NIGHT OUT (VFNO). Hosted by Tania Llasera with a live set by DJ Alicia Galuzis, it was a very special evening, complemented by beverages from Gramona, Linda, and Cervezas Malasaña."
    },
    "image": "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_10_VioletaxMango_12.jpg",
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
      "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VioletaxMango_13.jpg"
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
    "location": "Madrid, Spain",
    "description": {
      "es": "En JVV nos ocupamos de la producción del evento en la tienda de la Calle Goya durante la noche MANGO X VOGUE FASHION’S NIGHT OUT (VFNO) . Un gran set fotográfico donde los clientes pudieron llevarse su foto instantánea de recuerdo y el escuchar al dj Pascal Moscheni fueron los platos fuertes de una velada única.",
      "en": "At JVV, we produced the event at the Goya Street store for MANGO X VOGUE FASHION'S NIGHT OUT (VFNO). Highlights included an interactive photo studio for instant keepsakes and a DJ set by Pascal Moscheni."
    },
    "image": "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_10_VFNO_26.jpg",
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
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_8_VFNO_22.jpg",
      "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VFNO_21.jpg"
    ]
  },
  {
    "id": 28,
    "title": "SUNSET PEOPLE BARCELONA",
    "category": "LIFESTYLE",
    "date": {
      "month": "JUL",
      "day": "29",
      "year": "2016"
    },
    "location": "Barcelona, Spain",
    "description": {
      "es": "JVV une sus fuerzas con el fotógrafo Nacho Alegre y sus socios con la reciente apertura del restaurante-cocktelería Servicio Continuo en Barcelona y junto con Kiko Buxó, co-fundador de Shon Mott , amenizan las tardes con un afterwork donde se junta la gente más interesante de esta ciudad. Buenos cocktails, buena música y una cocina abierta non-stop son también puntos a favor de esta reunión quincenal.",
      "en": "JVV teamed up with photographer Nacho Alegre and partners for the opening of the Servicio Continuo cocktail bar in Barcelona. Together with Shon Mott co-founder Kiko Buxó, we host a bi-weekly afterwork gathering bringing together the city's creatives with great cocktails, music, and non-stop kitchen service."
    },
    "image": "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_113_SC_SunsetPeople_54-768x1152.jpg",
    "gallery": [
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_113_SC_SunsetPeople_54-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_116_SC_SunsetPeople_57-768x1152.jpg",
      "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_34_SC_SunsetPeople_8-768x1152.jpg",
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
    "category": "LIFESTYLE",
    "date": {
      "month": "MAY",
      "day": "22",
      "year": "2016"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Después de varios meses dando otra vez sentido a la noche madrileña con  CHA CHÁ, en el que colabora cada semana JVV , decidimos hacer una versión diurna y vespertina de 12 horas de música sin parar en uno de los mejores cielos de Madrid, el del Hotel Me en Plaza Santa Ana. Para ello se redecoró completamente la terraza con un sinfín de rosas y se creó una estancia secreta al más puro estilo «boudoir francés» .",
      "en": "Following months of redefining Madrid's nightlife with CHA CHÁ club, JVV co-produced a 12-hour daytime and evening rooftop festival at the Me Hotel in Plaza Santa Ana. The terrace was transformed with countless roses, featuring a secret 'French boudoir' experience."
    },
    "image": "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_108_13268219_252684188420706_3781755597142707113_o.jpg",
    "gallery": [
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_108_13268219_252684188420706_3781755597142707113_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_115_13254763_252684258420699_3910968046848071465_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_122_13254662_252684075087384_8516962099916215337_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_129_13248535_252684141754044_6325815067378307075_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_136_13248494_252683625087429_6873473844956602798_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_143_13248390_252684048420720_8634359961708064747_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_150_13248326_252683628420762_4735658838677888349_o.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_157_13247825_252684145087377_3347771721788816441_o-1.jpg",
      "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_164_13247789_252684125087379_6652051671936717720_o.jpg",
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
      "month": "APR",
      "day": "29",
      "year": "2016"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "La marca italiana confió la completa producción del único evento de este año en España, a JVV desarrollando todo su mundo en el interior del Teatro El Principito en el centro de Madrid. No faltaron actores, cantantes, escritores, políticos y un sinfín de socialité que no quisieron perderse la actuación de Aluna George en su única visita española y todas las sorpresas que la marca les tenía preparados en esta velada.  Pascal Moscheni, JVV Friend , fue el encargado de hacer bailar a los invitados.",
      "en": "The Italian house entrusted the complete production of its sole Spanish event of the year to JVV, executing the concept at El Principito Theatre in Madrid. Prominent figures enjoyed an exclusive performance by AlunaGeorge, with DJ Pascal Moscheni closing the evening."
    },
    "image": "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_23_IMG_9522-1024x683.jpg",
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
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_41_IMG_9838-1024x683.jpg",
      "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_72_IMG_9774-768x512.jpg"
    ]
  },
  {
    "id": 31,
    "title": "EXHIBITION ALBERTO LÁZARO",
    "category": "LIFESTYLE",
    "date": {
      "month": "FEB",
      "day": "24",
      "year": "2016"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "The Apartments Madrid en su búsqueda de no solo dar alojamiento a los turistas nacionales e internacionales que llegan cada semana a sus apartamentos, quiso contar con JVV para desarrollar un ambiente acogedor e intimo y así presentar las fotografías de Alberto Lázaro, cuyo hobby en redes sociales le ha hecho ganar un espacio en el mundo de la expresión fotográfica a través de retazos de fachadas y pavimentos que recoge en sus viajes a cualquier parte del mundo.",
      "en": "The Apartments Madrid collaborated with JVV to create an intimate atmosphere showcasing the travel photography of Alberto Lázaro, whose visual collection of street textures and facades captured worldwide has earned him a significant social media following."
    },
    "image": "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_15_e01f0be7-1282-4d73-84d0-fecfde9e2aa0.jpg",
    "gallery": [
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_15_e01f0be7-1282-4d73-84d0-fecfde9e2aa0.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_19_a2769117-70b7-4e9b-8d7a-1290575225fa.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_23_15f42987-fcee-4c7b-a505-fa08ffef6071.jpg",
      "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_27_39b0cce4-c4b5-4052-a103-25532807b42e.jpg"
    ]
  },
  {
    "id": 32,
    "title": "POP UP STORE LYDIA DELGADO",
    "category": "LIFESTYLE",
    "date": {
      "month": "DEC",
      "day": "10",
      "year": "2015"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "En este Pop Up unimos fuerzas de dos grandes de la moda en España, Lydia Delgado , diseñadora catalana consagrada desde primeros de los ’90 y Elena Benarroch , modista desde primeros de los ’80 con varios premios nacionales. La fusión y el temperamento de ambas colecciones dieron un colorido y fuerza al espacio que además se vio reforzado por las distintas clientas de cada una, que en muchos casos descubrieron por primera vez la otra marca.",
      "en": "This pop-up boutique brought together two icons of Spanish fashion: Lydia Delgado, a renowned Catalan designer since the '90s, and national award-winner Elena Benarroch. The fusion of both collections brought energy and color to the space, introducing their respective clienteles to each other's brands."
    },
    "image": "/Events/JVV _ POP UP STORE LYDIA DELGADO/imgi_9_Pop-Up-Lydia-Delgado-Madrid.jpg",
    "gallery": [
      "/Events/JVV _ POP UP STORE LYDIA DELGADO/imgi_9_Pop-Up-Lydia-Delgado-Madrid.jpg"
    ]
  },
  {
    "id": 33,
    "title": "SHON MOTT MADRID OPENING",
    "category": "LIFESTYLE",
    "date": {
      "month": "NOV",
      "day": "14",
      "year": "2015"
    },
    "location": "Madrid, Spain",
    "description": {
      "es": "Después del éxito de la primera tienda en Barcelona a primeros del 2015, los hermanos Buxó no tardaron en dar el paso a la capital para dar a conocer esta joven pero cuidada marca, a los madrileños. El evento de inauguración estuvo marcado por una representación de la vida social española en todos los ámbitos cuya nota musical la puso Lucía Scansetti , también representada publicitariamente por JVV , presentando su EP, Dimensions of Dialogue .",
      "en": "Following the success of their first store in Barcelona, the Buxó brothers opened in Madrid to introduce their minimalist label. The launch event featured guests from Spanish society, with a live music set by singer Lucía Scansetti performing her EP 'Dimensions of Dialogue'."
    },
    "image": "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_28_MG_4570-1.jpg",
    "gallery": [
      "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_28_MG_4570-1.jpg",
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
    "title": "PANDORA MILANO",
    "category": "LIFESTYLE",
    "date": {
      "month": "JAN",
      "day": "29",
      "year": "2011"
    },
    "location": "Milán, Italy",
    "description": {
      "es": "Fue el nacimiento de alguna forma de JVV , sesiones de música de Pascal Moscheni , un JVV Friend, en un entorno mágico en Milán, Ristorante Quattrocento , donde su amplia terraza y sus recónditos salones dieron pie a un sinfín de noches donde se juntaron, podemos decir, todas las personas que en el mundo de la moda y el diseño ahora son sus protagonistas a nivel internacional.",
      "en": "This marked the early beginnings of JVV, featuring music sets by Pascal Moscheni (#JVVFriend) in Milan at Ristorante Quattrocento. Its spacious terrace and rooms hosted nights bringing together figures who now shape the international fashion and design scene."
    },
    "image": "/Events/JVV _ PANDORA/imgi_4_pandora_flyer.jpg",
    "gallery": [
      "/Events/JVV _ PANDORA/imgi_4_pandora_flyer.jpg"
    ]
  }
];

export default function EventDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const event = EVENTS_DETAILS_DATA.find(e => e.id === Number(id));

  if (!event) {
    navigate('/events');
    return null;
  }

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={`${event.title} (${event.category})`}
        description={`Relive ${event.title}, a premier luxury brand experience produced by JVV Agency in ${event.location}. ${event.description[language]}`}
        ogImage={event.image}
      />
      {/* Intro Header */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <Link 
          to="/events" 
          className="group flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'es' ? 'Otros Eventos' : 'Other Events'}</span>
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="text-[10px] uppercase tracking-[0.4em] mb-6 block font-sans font-bold"
            >
              {event.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[6vw] font-serif tracking-tighter leading-[0.8] uppercase"
            >
              {event.title}
            </motion.h1>
          </div>
          <div className="flex flex-col space-y-4 mt-12 md:mt-0 md:pb-6 border-l border-white/5 pl-8">
             <div className="flex items-center space-x-3">
                <Clock className="w-3 h-3 opacity-20" />
                <span className="text-[10px] uppercase tracking-widest opacity-60">{event.date.month} {event.date.day}, {event.date.year}</span>
             </div>
             <div className="flex items-center space-x-3">
                <MapPin className="w-3 h-3 opacity-20" />
                <span className="text-[10px] uppercase tracking-widest opacity-60">{event.location}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Intro Image */}
      <section className="px-6 max-w-5xl mx-auto mb-24 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full overflow-hidden bg-zinc-950/20 border border-white/5 shadow-xl flex justify-center rounded-sm"
        >
          <img 
            src={event.image} 
            alt={event.title}
            loading="lazy"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </motion.div>
      </section>

      {/* Overview (Stacked and centered format) */}
      <section className="px-6 max-w-3xl mx-auto mb-32">
        <h2 className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-6 font-sans font-bold block">
          {language === 'es' ? 'El Proyecto' : 'The Project'}
        </h2>
        <p className="text-lg md:text-xl font-light opacity-70 leading-relaxed">
          {event.description[language]}
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-40">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
           {event.gallery.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="break-inside-avoid mb-6 bg-zinc-900 shadow-md border border-white/5 overflow-hidden rounded-sm"
             >
               <img 
                 src={img} 
                 alt="Gallery"
                 loading="lazy"
                 className="w-full h-auto object-contain hover:scale-105 transition-transform duration-[1s] block"
               />
             </motion.div>
           ))}
        </div>
      </section>

      {/* Seamless Project Navigation */}
      <section className="px-6 max-w-7xl mx-auto border-t border-white/5 pt-16 pb-20">
         {(() => {
            const currentIndex = EVENTS_DETAILS_DATA.findIndex(e => e.id === Number(id));
            const prevEvent = EVENTS_DETAILS_DATA[currentIndex - 1] || EVENTS_DETAILS_DATA[EVENTS_DETAILS_DATA.length - 1];
            const nextEvent = EVENTS_DETAILS_DATA[currentIndex + 1] || EVENTS_DETAILS_DATA[0];
            return (
              <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
                <Link 
                  to={`/events/${prevEvent.id}`} 
                  className="flex-1 group flex flex-col items-start justify-center p-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.01]"
                >
                   <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">&larr; {language === 'es' ? 'Anterior' : 'Previous'}</span>
                   <span className="text-xl font-serif text-white/70 group-hover:text-white transition-colors">{prevEvent.title}</span>
                </Link>
                <div className="flex items-center justify-center min-w-[150px]">
                   <Link to="/events" className="text-xs uppercase tracking-widest border border-white/10 px-8 py-4 hover:border-white transition-all text-center w-full">
                     {language === 'es' ? 'Otros Eventos' : 'Other Events'}
                   </Link>
                </div>
                <Link 
                  to={`/events/${nextEvent.id}`} 
                  className="flex-1 group flex flex-col items-end justify-center p-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.01] text-right"
                >
                   <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">{language === 'es' ? 'Siguiente' : 'Next'} &rarr;</span>
                   <span className="text-xl font-serif text-white/70 group-hover:text-white transition-colors">{nextEvent.title}</span>
                </Link>
              </div>
            );
         })()}
      </section>
    </div>
  );
}
