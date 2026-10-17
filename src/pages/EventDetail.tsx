import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { EVENTS_DATA } from './Events';

export default function EventDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const event = EVENTS_DATA.find(e => e.id === Number(id));

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
          <span>{language === 'es' ? 'Volver a Eventos' : 'Return to Events'}</span>
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

      {/* Hero Image */}
      <section className="px-6 max-w-5xl mx-auto mb-32 flex justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full flex justify-center"
        >
          <img 
            src={event.image} 
            alt={event.title}
            className="max-h-[75vh] w-auto h-auto object-contain brightness-95"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="px-6 max-w-4xl mx-auto mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-6 font-sans font-bold">
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
                 className="w-full h-auto object-contain hover:scale-105 transition-transform duration-[1s] block"
               />
             </motion.div>
           ))}
        </div>
      </section>

      {/* Seamless Project Navigation */}
      <section className="px-6 max-w-7xl mx-auto border-t border-white/5 pt-16 pb-20">
         {(() => {
            const currentIndex = EVENTS_DATA.findIndex(e => e.id === Number(id));
            const prevEvent = EVENTS_DATA[currentIndex - 1] || EVENTS_DATA[EVENTS_DATA.length - 1];
            const nextEvent = EVENTS_DATA[currentIndex + 1] || EVENTS_DATA[0];
            return (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-12">
                <Link 
                  to={`/events/${prevEvent.id}`} 
                  className="group flex flex-col items-start hover:opacity-100 opacity-60 transition-opacity"
                >
                   <span className="text-[10px] uppercase tracking-[0.2em] mb-3 font-sans font-bold">&larr; {language === 'es' ? 'Anterior' : 'Previous'}</span>
                   <span className="text-2xl font-serif group-hover:text-white transition-colors">{prevEvent.title}</span>
                </Link>
                <div className="flex items-center justify-center">
                   <Link to="/events" className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center">
                     {language === 'es' ? 'Todos los Eventos' : 'All Events'}
                   </Link>
                </div>
                <Link 
                  to={`/events/${nextEvent.id}`} 
                  className="group flex flex-col items-end hover:opacity-100 opacity-60 transition-opacity text-right"
                >
                   <span className="text-[10px] uppercase tracking-[0.2em] mb-3 font-sans font-bold">{language === 'es' ? 'Siguiente' : 'Next'} &rarr;</span>
                   <span className="text-2xl font-serif group-hover:text-white transition-colors">{nextEvent.title}</span>
                </Link>
              </div>
            );
         })()}
      </section>
    </div>
  );
}
