import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export const EVENTS_DATA = [
  {
    id: 1,
    title: 'CHAUMET CHRISTMAS',
    category: 'EVENT',
    date: { month: 'NOV', day: '18', year: '2025' },
    image: '/Chaumet.jpg'
  },
  {
    id: 2,
    title: 'ELLA FESTIVAL 2025',
    category: 'LIFESTYLE',
    date: { month: 'AUG', day: '29', year: '2025' },
    image: '/ella festival.jpg'
  },
  {
    id: 3,
    title: 'PALMA INTERNATIONAL BOAT SHOW 2025',
    category: 'EVENT',
    date: { month: 'MAY', day: '03', year: '2025' },
    image: '/Palma International.jpg'
  },
  {
    id: 4,
    title: 'CASA PATYKA',
    category: 'BEAUTY',
    date: { month: 'OCT', day: '18', year: '2024' },
    image: '/CASA PATYKA.jpg'
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
            <Link to={`/events/${event.id}`} className="block relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8 border border-white/5 shadow-md">
               <img 
                 src={event.image} 
                 alt={event.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s]"
               />
               <div className="absolute top-6 left-6 flex items-center space-x-3">
                  <div className="w-8 h-[1px] bg-white/40" />
                  <span className="text-[9px] uppercase tracking-widest font-mono">{event.date.month} {event.date.year}</span>
               </div>
            </Link>

            <div className="space-y-3">
               <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest opacity-30">
                  <span>{event.category}</span>
                  <div className="w-1 h-1 bg-white rounded-full opacity-20" />
                  <span>{language === 'es' ? 'Producción' : 'Production'}</span>
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
