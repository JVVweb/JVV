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
    "image": "/Chaumet.jpg"
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
    "image": "/Events/JVV _ CASA PATYKA presentación – Línea Glow/imgi_61_Patyka-103-scaled_portada.jpg"
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
    "image": "/ella festival.jpg"
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
    "image": "/Events/JVV _ PALMA INTERNATIONAL BOAT SHOW 2025/imgi_28_PIB-5_portada.jpg"
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
    "image": "/Events/JVV _ THE BODY SHOP – Inauguración T4 Aeropuerto Madrid/imgi_16_32bfcdd1-8c05-48f0-8577-0d8be4d58759_portada.jpg"
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
    "image": "/Events/JVV _ TIMEOUT/imgi_14_20230313_Premios-TimeOut-Food-and-Drink.-Teatro-Eslava.-Madrid_RMR_0011_Logo-2048x1365_portada.jpg"
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
    "image": "/Events/RIU PLAZA DE ESPAÑA/imageye___-_imgi_16_MG_3556-2048x1463_PORTADA.jpg"
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
    "image": "/Events/JVV _ FESTIVAL PARAÍSO III Edición/SHYGIRL-PARAISO-FESTIVAL-5-1_portada.jpg"
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
    "image": "/Events/JVV _ PRIVILEGIADA Presentación corto/imgi_4_PORTADA-scaled.jpg"
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
    "image": "/Events/JVV _ FRANGELICO/imgi_4_60782950_400453880682005_3191332550403324939_n_portada.jpg"
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
    "image": "/Events/JVV _ LATITUDE en El Paracaidista/imgi_52_Invitacion1_portada.png"
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
    "image": "/Events/JVV _ APEROL FEST Barcelona/imgi_4_APEROS-TWF_BCN_57114_portada.jpg"
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
    "image": "/Events/JVV _ ROGER VIVIER con Julia de Castro/imgi_4_20190618sdr126_20190618113639464-scaled_portada.jpg"
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
    "image": "/Events/JVV _ APEROL FEST Madrid/imgi_6_H71A9166_portada.jpg"
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
    "image": "/Events/JVV _ FESTIVAL PARAÍSO I Edición/imgi_5_Paraiso-cartel-1_portada.png"
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
    "image": "/Events/JVV _ VESTIAIRE COLLECTIVE en Soho House Barcelona/imgi_9_FashionLunch_VC_SH_11_portada.png"
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
    "image": "/Events/JVV _ BOTTEGA VENETA en Soho House Barcelona/imgi_5_Bottega-Veneta-2_portada.png"
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
    "image": "/Events/JVV _ ELEMENTS by Andrea Dopico Cafarelli/imgi_6_IMG_21002-2_portada.png"
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
    "image": "/Events/JVV _ VANDÔMIAN/imgi_6_IMG_1872_portada.png"
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
    "image": "/Events/JVV _ SHON MOTT BARCELONA – PAU CLARÍS/imgi_9_shonmott_02_portada.jpg"
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
    "image": "/Events/JVV _ LA PERLA/imgi_10_La_perla_07_portada.jpg"
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
    "image": "/Events/JVV _ FOMO/imgi_38_fomo_08_portada.jpg"
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
    "image": "/Events/JVV _ KENZO BCN/imgi_20_Kenzo_01_portada.jpg"
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
    "image": "/Events/JVV _ 115 ANIVERSARIO CAPAS SESEÑA/DS_02_portada.jpg"
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
    "image": "/Events/JVV _ MANGO x SHOPPING GAUEAN DONOSTI/imgi_9_Mango_donosti_10_portada.jpg"
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
    "image": "/Events/JVV _ VIOLETA X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_9_VioletaxMango_13_portada.jpg"
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
    "image": "/Events/JVV _ MANGO X VOGUE FASHION’S NIGHT OUT (VFNO)/imgi_8_VFNO_22_portada.jpg"
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
    "image": "/Events/JVV _ SUNSET PEOPLE BARCELONA/imgi_34_SC_SunsetPeople_8-768x1152_portada.jpg"
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
    "image": "/Events/JVV _ CHA CHÁ «THE BRUNCH»/imgi_164_13247789_252684125087379_6652051671936717720_o_portada.jpg"
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
    "image": "/Events/JVV _ EMPORIO ARMANI SOUNDS/imgi_41_IMG_9838-1024x683_portada.jpg"
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
    "image": "/Events/JVV _ EXPOSICIÓN ALBERTO LÁZARO/imgi_35_apart_portada.jpg"
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
    "image": "/Events/JVV _ POP UP STORE LYDIA DELGADO/imgi_9_Pop-Up-Lydia-Delgado-Madrid.jpg"
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
    "image": "/Events/JVV _ APERTURA SHON MOTT MADRID/imgi_28_MG_4570-1_portada.jpg"
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
    "image": "/Events/JVV _ PANDORA/imgi_4_pandora_flyer.jpg"
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
                 loading="lazy"
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
