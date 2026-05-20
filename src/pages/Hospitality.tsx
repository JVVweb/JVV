import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const HOTEL_PROJECTS = [
  {
    id: 'soho-house',
    name: 'Soho House Barcelona',
    location: 'Barcelona',
    descEs: 'Club privado de miembros y hotel de referencia en el barrio Gótico de Barcelona. Colaboramos en la conceptualización de campañas de relaciones públicas y vinculación con el talento artístico local.',
    descEn: 'Private members\' club and hotel of reference in Barcelona\'s Gothic quarter. We collaborate in the conceptualization of public relations campaigns and connection with local artistic talent.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    typeEs: 'Consultoría y RRPP',
    typeEn: 'Consulting & PR'
  },
  {
    id: 'st-regis',
    name: 'St. Regis Mardavall',
    location: 'Mallorca',
    descEs: 'El epítome del lujo costero en el Mediterráneo. Colaboración en posicionamiento de marca, eventos exclusivos para clientes VIP y campañas de comunicación editorial.',
    descEn: 'The epitome of coastal luxury in the Mediterranean. Collaboration in brand positioning, exclusive events for VIP clients, and editorial communication campaigns.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    typeEs: 'Posicionamiento y Eventos',
    typeEn: 'Positioning & Events'
  },
  {
    id: 'w-ibiza',
    name: 'W Ibiza',
    location: 'Ibiza',
    descEs: 'Un santuario de diseño moderno frente al mar en Santa Eulalia. Programación creativa de eventos de moda, curación musical y convocatorias de prensa internacional.',
    descEn: 'A modern beachfront design sanctuary in Santa Eulalia. Creative programming for fashion events, music curation, and international press invitations.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    typeEs: 'Curación Creativa y Eventos',
    typeEn: 'Creative Curation & Events'
  },
  {
    id: 'cappuccino',
    name: 'Hotel Cappuccino',
    location: 'Palma de Mallorca',
    descEs: 'Hotel boutique icónico donde el arte y el diseño convergen. Estrategia de comunicación global, gestión de imagen y relaciones institucionales con marcas del sector del lujo.',
    descEn: 'Iconic boutique hotel where art and design converge. Global communication strategy, image management, and institutional relations with luxury sector brands.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
    typeEs: 'Estrategia de Marca',
    typeEn: 'Brand Strategy'
  },
  {
    id: 'me-madrid',
    name: 'ME Madrid Reina Victoria (M Meliá Madrid)',
    location: 'Madrid',
    descEs: 'Hub artístico en la emblemática Plaza de Santa Ana. Coordinación de eventos premium, presentaciones de moda y activaciones de marca de gran repercusión mediática.',
    descEn: 'Artistic hub in the emblematic Plaza de Santa Ana. Coordination of premium events, fashion presentations, and brand activations with high media impact.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=1200',
    typeEs: 'Activación de Marca',
    typeEn: 'Brand Activation'
  }
];

export default function Hospitality() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title={t('hospitality.title')}
        description={`${t('hospitality.title')}: ${t('hospitality.subtitle')}`}
      />
      <header className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tighter uppercase">{t('hospitality.title')}</h1>
          <p className="text-xl font-light opacity-50 max-w-xl">
            {t('hospitality.subtitle')}
          </p>
        </motion.div>
      </header>

      <div className="space-y-24 md:space-y-36">
        {HOTEL_PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center`}
          >
            <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="aspect-video overflow-hidden bg-zinc-900 group relative">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>
            
            <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="flex items-center space-x-4 mb-6 opacity-30 text-xs uppercase tracking-tight">
                <span>{project.location}</span>
                <div className="w-8 h-px bg-white" />
                <span>{language === 'es' ? project.typeEs : project.typeEn}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight leading-tight">{project.name}</h2>
              <p className="text-base font-light opacity-60 leading-relaxed mb-8 max-w-md">
                {language === 'es' ? project.descEs : project.descEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-60 border-t border-white/5 pt-32 text-center">
         <div className="max-w-xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase">
              {language === 'es' ? 'Trabajemos juntos.' : 'Let\'s collaborate.'}
            </h2>
            <p className="text-lg font-light opacity-50 leading-relaxed">
              {language === 'es' 
                ? 'Eleva la narrativa visual y el posicionamiento de tu hotel o proyecto turístico con nuestra consultoría estratégica.' 
                : 'Elevate the visual narrative and brand positioning of your hotel or tourism project with our strategic consulting.'}
            </p>
            <a href="/contact" className="inline-block text-xs uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all">
              {language === 'es' ? 'Contactar' : 'Inquire Now'}
            </a>
         </div>
      </section>
    </div>
  );
}
