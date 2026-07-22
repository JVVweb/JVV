import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { TALENT_DATA } from '../data/talent';
import { useState, useEffect } from 'react';

const DESKTOP_BANNERS = [
  '/banner jvv.jpg',
  '/JJJV BANNER.jpg',
  '/JJV BANNER.jpg',
  '/bottega-hero.jpg',
  '/kenzo-hero.jpg'
];

const MOBILE_BANNERS = [
  '/Andrea 3.jpg',
  '/JJJV BANNER.jpg',
  '/bottega-hero.jpg',
  '/kenzo-hero.jpg'
];

const CLIENT_LOGOS = [
  '/Netflix9.png',
  '/logo-volkswagen.svg',
  '/logo-mastercard.svg',
  '/logo-emporio-armani.svg',
  '/JVV-YSLbeaute9.png',
  '/logo-dior.svg',
  '/logo-thyssen.svg',
  '/logo-aperol.svg',
  '/logo-loreal.svg',
  '/logo-roger-vivier.svg',
];

export default function Home() {
  const { t, language } = useLanguage();
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeBanners = isMobile ? MOBILE_BANNERS : DESKTOP_BANNERS;

  useEffect(() => {
    setBgIndex((prev) => prev % activeBanners.length);
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % activeBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile, activeBanners.length]);

  const getProfession = (person: any) => {
    const isEs = language === 'es';
    if (person.type === 'models') return isEs ? 'Modelo' : 'Model';
    if (person.type === 'actors') return isEs ? 'Actor' : 'Actor';
    return isEs ? 'Artista' : 'Artist';
  };

  return (
    <div className="relative">
      <SEO 
        title="Home"
        description={t('hero.title') + " " + t('hero.subtitle')}
      />
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background Carousel */}
        <div className="absolute inset-0 -z-20 overflow-hidden bg-black">
          {activeBanners.map((banner, index) => (
            <div
              key={banner}
              className={`absolute inset-0 bg-cover transition-all duration-[2000ms] ${
                index === bgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ 
                backgroundImage: `url('${banner}')`,
                backgroundPosition: banner.includes('bottega') ? 'center bottom' : 'center'
              }}
            />
          ))}
        </div>
        {/* Contrast Protection Overlay with high contrast gradient & subtle blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85 -z-10 backdrop-blur-[0.5px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-[12vw] md:text-[6vw] font-serif leading-[0.95] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent max-w-[340px] md:max-w-5xl mx-auto drop-shadow-sm">
            {t('hero.title')}
          </h1>
          <p className="text-base md:text-xl font-light opacity-80 max-w-xs md:max-w-xl mx-auto uppercase tracking-tighter leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Micro-animated Carousel Progress Indicators */}
        <div className="absolute bottom-28 flex space-x-3 z-10">
          {activeBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setBgIndex(idx)}
              className="relative h-[2px] w-12 bg-white/20 overflow-hidden cursor-pointer focus:outline-none transition-all duration-300 hover:bg-white/40"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === bgIndex && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  key={`progress-${isMobile ? 'm' : 'd'}-${idx}`}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="absolute inset-0 bg-white origin-left"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-tight mb-4 opacity-55">{language === 'es' ? 'Explorar' : 'Explore'}</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-55" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-tight opacity-30 mb-8 block font-display">{t('home.about.title')}</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              {language === 'es' ? (
                <>
                  Curando el estilo, <br />
                  representando el <span className="italic">talento</span>.
                </>
              ) : (
                <>
                  Curating style, <br />
                  representing <span className="italic">talent</span>.
                </>
              )}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-2"
          >
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-md">
              {t('home.about.text')}
            </p>
            <Link to="/about" className="mt-8 flex items-center space-x-4 group text-sm uppercase tracking-tight font-medium">
              <span>{t('home.about.cta')}</span>
              <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all duration-500" />
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Logo Marquee Section */}
      <section className="py-24 bg-black border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block font-display">
            {language === 'es' ? 'Clientes' : 'Clients'}
          </span>
        </div>
        <div className="relative w-full flex items-center overflow-hidden">
          {/* Side fade masks for elegant depth */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex w-max">
            {/* Set 1 */}
            <div className="flex items-center gap-16 md:gap-28 pr-16 md:pr-28">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div key={`logo-1-${idx}`} className="w-32 md:w-48 h-12 md:h-16 flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="Client Brand"
                    className="max-w-full max-h-full object-contain opacity-35 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
            {/* Set 2 (loop copy) */}
            <div className="flex items-center gap-16 md:gap-28 pr-16 md:pr-28">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div key={`logo-2-${idx}`} className="w-32 md:w-48 h-12 md:h-16 flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="Client Brand"
                    className="max-w-full max-h-full object-contain opacity-35 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talent Grid (Teaser) */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-serif">{language === 'es' ? 'El Talento' : 'The Talent'}</h2>
              <Link to="/talent" className="text-sm uppercase tracking-tight opacity-50 hover:opacity-100 transition-opacity flex items-center space-x-2">
                <span>{language === 'es' ? 'Ver Todo el Roster' : 'View All Roster'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
           </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {TALENT_DATA.slice(0, 6).map((person) => (
                <motion.div 
                  key={person.id}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link to={`/talent/${person.id}`}>
                    <div className="aspect-[3/4] bg-zinc-900 overflow-hidden relative mb-6">
                      <img 
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                    <h3 className="text-2xl font-serif mb-1 group-hover:opacity-60 transition-opacity">{person.name}</h3>
                    <p className="text-xs uppercase tracking-tight opacity-40">{getProfession(person)} / {person.location}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Projects Call to Action */}
      <section className="py-36 px-6 text-center relative border-t border-white/5 bg-[#030303]">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-6 block font-display">
            {language === 'es' ? 'Trabajo & Producción' : 'Work & Production'}
          </span>
          <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tight leading-none">
            {language === 'es' ? (
              <>
                Creemos <span className="italic font-light">impacto</span>.
              </>
            ) : (
              <>
                Let's create <span className="italic font-light">impact</span>.
              </>
            )}
          </h2>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-500 font-display font-medium bg-transparent"
          >
            {language === 'es' ? 'Iniciar una Colaboración' : 'Start a Collaboration'}
          </Link>
        </div>
      </section>
    </div>
  );
}
