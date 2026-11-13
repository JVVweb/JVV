import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { TALENT_DATA } from '../data/talent';
import { useState, useEffect } from 'react';

const DESKTOP_BANNERS = [
  '/banner jvv.jpg',
  '/valeria-movistar-hero.jpg',
  '/JJV BANNER.jpg',
  '/bottega-hero.jpg',
  '/kenzo-hero.jpg'
];

const MOBILE_BANNERS = [
  '/Andrea 3.jpg',
  '/valeria-movistar-hero.jpg',
  '/bottega-hero.jpg',
  '/kenzo-hero.jpg'
];

const CLIENT_LOGOS = [
  { src: '/logos/marcas/mastercard.png', aspect: 1.29 },
  { src: '/logos/marcas/jvv-stubhub.png', aspect: 4.91 },
  { src: '/logos/marcas/jvv-jeanpaulgaultier.png', aspect: 2.77 },
  { src: '/logos/marcas/commes-des-garcons.png', aspect: 9.19 },
  { src: '/logos/marcas/volkswagen.png', aspect: 1 },
  { src: '/logos/marcas/jvv-victoria.png', aspect: 5.27 },
  { src: '/logos/marcas/jvv-tiffanny-1.png', aspect: 7.84 },
  { src: '/logos/marcas/jvv-yodona.png', aspect: 1.23 },
  { src: '/logos/marcas/jvv-estee.png', aspect: 8.04 },
  { src: '/logos/marcas/jvv-eastpack.png', aspect: 2.8 },
  { src: '/logos/marcas/jvv-chloe-1.png', aspect: 3.23 },
  { src: '/logos/marcas/jvv-hola.png', aspect: 3.03 },
  { src: '/logos/marcas/armani.png', aspect: 1.97 },
  { src: '/logos/marcas/ck.png', aspect: 6.19 },
  { src: '/logos/marcas/timeout.png', aspect: 2.65 },
  { src: '/logos/marcas/the-body-shop-logo-copia.png', aspect: 1.02 },
  { src: '/logos/marcas/uc3m.png', aspect: 3.28 },
  { src: '/logos/marcas/prime.png', aspect: 3.25 },
  { src: '/logos/marcas/jvv-birckenstock-1.png', aspect: 5.93 },
  { src: '/logos/marcas/jvv-bershka.png', aspect: 4.59 },
  { src: '/logos/marcas/jvv-reebok.png', aspect: 4.99 },
  { src: '/logos/marcas/netflix.png', aspect: 3.63 },
  { src: '/logos/marcas/jvv-yslbeaute.png', aspect: 0.5 },
  { src: '/logos/marcas/jvv-memadrid.png', aspect: 1.15 },
  { src: '/logos/marcas/aristocrazy.png', aspect: 5.86 },
  { src: '/logos/marcas/jvv-premios.png', aspect: 1.64 },
  { src: '/logos/marcas/jvv-laroca.png', aspect: 1.76 },
  { src: '/logos/marcas/jvv-martini.png', aspect: 2.25 },
  { src: '/logos/marcas/jvv-mac.png', aspect: 5.16 },
  { src: '/logos/marcas/jvv-kenzo.png', aspect: 5.08 },
  { src: '/logos/marcas/jvv-linda-logo.png', aspect: 1.24 },
  { src: '/logos/marcas/jvv-armani-logo.png', aspect: 10.43 },
  { src: '/logos/marcas/jvv-dior-logo.png', aspect: 2.5 },
  { src: '/logos/marcas/jvv-shon-mott-logo.png', aspect: 10.43 },
  { src: '/logos/marcas/thyssen.png', aspect: 2.49 },
  { src: '/logos/marcas/jvv-madcool.png', aspect: 1.88 },
  { src: '/logos/marcas/jvv-bulgari.png', aspect: 10.16 },
  { src: '/logos/marcas/sin-titulo-1.png', aspect: 1.15 },
  { src: '/logos/marcas/jvv-chacha.png', aspect: 1.39 },
  { src: '/logos/marcas/jvv-filmin.png', aspect: 3.54 },
  { src: '/logos/marcas/jvv-es-logo.png', aspect: 1.69 },
  { src: '/logos/marcas/jvv-mango-logo.png', aspect: 6.11 },
  { src: '/logos/marcas/jvv-lydiadelgado-logo.png', aspect: 4.4 },
  { src: '/logos/marcas/jvv-guiness-logo.png', aspect: 1.92 },
  { src: '/logos/marcas/jvv-sesena-logo.png', aspect: 4.52 },
  { src: '/logos/marcas/kisspng-aperol-spritz-aperol-spritz-apritif-cocktail-apperol-5b24d277766cb9-2279400415291398314851-1.png', aspect: 1 },
  { src: '/logos/marcas/jvv-baazar-logo.png', aspect: 4.13 },
  { src: '/logos/marcas/jvv-elenabenarroch-logo.png', aspect: 2.04 },
  { src: '/logos/marcas/jvv-jameson-logo.png', aspect: 2.99 },
  { src: '/logos/marcas/jvv-brogmans-logo.png', aspect: 2.75 },
  { src: '/logos/marcas/jvv-violetamango-logo.png', aspect: 3.15 },
  { src: '/logos/marcas/jvv-tmagazine-logo.png', aspect: 0.84 },
  { src: '/logos/marcas/jvv-sohohouse-logo.png', aspect: 1.58 },
  { src: '/logos/marcas/jvv-laperla.png', aspect: 6.07 },
  { src: '/logos/marcas/jvv-mazza-logo.png', aspect: 0.99 },
  { src: '/logos/marcas/jvv-flooxer-logo.png', aspect: 4.11 },
  { src: '/logos/marcas/jvv-dsquared-logo.png', aspect: 7.87 },
  { src: '/logos/marcas/jvv-utopia-logo.png', aspect: 2.03 },
  { src: '/logos/marcas/vestiaire-collective.png', aspect: 4.28 },
  { src: '/logos/marcas/paraiso-logotipo-1.png', aspect: 6.56 },
  { src: '/logos/marcas/jvv-thestoat-logo.png', aspect: 4.45 },
  { src: '/logos/marcas/volvo-text-logo.png', aspect: 7.26 },
  { src: '/logos/marcas/jvv-danone-logo.png', aspect: 3.18 },
  { src: '/logos/marcas/jvv-starlite-logo.png', aspect: 1.79 },
  { src: '/logos/marcas/amazon.png', aspect: 3.32 },
  { src: '/logos/marcas/jvv-madrid-logo.png', aspect: 0.85 },
  { src: '/logos/marcas/jvv-forbes-logo.png', aspect: 3.84 },
  { src: '/logos/marcas/jvv-homeselect-logo.png', aspect: 10.94 },
  { src: '/logos/marcas/jvv-avelinovargas-logo.png', aspect: 1.5 },
  { src: '/logos/marcas/jvv-tanqueray-logo.png', aspect: 4.3 },
  { src: '/logos/marcas/jvv-charco-logo.png', aspect: 3.68 },
  { src: '/logos/marcas/jvv-luisatoledo-logo.png', aspect: 2.01 },
  { src: '/logos/marcas/jvv-bultaco-logo.png', aspect: 4.72 },
  { src: '/logos/marcas/jvv-eamseemadrid-logo.png', aspect: 3.84 },
  { src: '/logos/marcas/jvv-vandomian-logo.png', aspect: 6.78 },
  { src: '/logos/marcas/jvv-cozarllado-logo.png', aspect: 16.36 },
  { src: '/logos/marcas/jvv-serviciocontinuo-logo.png', aspect: 1.54 },
  { src: '/logos/marcas/devayalogo.png', aspect: 1.09 },
  { src: '/logos/marcas/jvv-apartamnets-logo.png', aspect: 4.57 },
  { src: '/logos/marcas/jvv-ponytale-logo.png', aspect: 2.31 },
  { src: '/logos/marcas/jvv-h2h-logo.png', aspect: 1.76 },
  { src: '/logos/marcas/jvv-metropolis-logo.png', aspect: 3.47 },
  { src: '/logos/marcas/paco-rabanne.png', aspect: 8.63 },
  { src: '/logos/marcas/jvv-gaviria-logo.png', aspect: 2.69 },
  { src: '/logos/marcas/inaem-1500x920-copia.png', aspect: 4.78 },
  { src: '/logos/marcas/jvv-paracaidistak-logo.png', aspect: 1 },
  { src: '/logos/marcas/jvv-logo-loreal.png', aspect: 5.48 },
  { src: '/logos/marcas/jvv-etnia.png', aspect: 2.71 },
  { src: '/logos/marcas/jvv-jb.png', aspect: 0.84 },
  { src: '/logos/marcas/imagenprincipalbig-e7c2ebc2-0675-48fa-be55-0c473352a6f5.png', aspect: 9.41 },
  { src: '/logos/marcas/fever-tree.png', aspect: 2.68 },
  { src: '/logos/marcas/jvv-monocle.png', aspect: 1.34 },
  { src: '/logos/marcas/logo-santa-lucia-n-copia.png', aspect: 0.9 },
  { src: '/logos/marcas/satisfyer.png', aspect: 4.69 },
  { src: '/logos/marcas/logitech.png', aspect: 3.29 },
  { src: '/logos/marcas/antonio.png', aspect: 0.97 },
  { src: '/logos/marcas/jvv-modacalida.png', aspect: 2.5 },
  { src: '/logos/marcas/burro.png', aspect: 2.11 },
  { src: '/logos/marcas/vampire.png', aspect: 6.32 },
  { src: '/logos/marcas/matador-logo.png', aspect: 12.14 },
  { src: '/logos/marcas/jvv-loom.png', aspect: 2.62 },
  { src: '/logos/marcas/freeda.png', aspect: 1.97 },
  { src: '/logos/marcas/playground.png', aspect: 5.95 },
  { src: '/logos/marcas/respuesta.png', aspect: 0.98 },
  { src: '/logos/marcas/latitude-logo-2-1.png', aspect: 13.25 },
  { src: '/logos/marcas/info-murcia.png', aspect: 1.21 },
  { src: '/logos/marcas/jvv-lassere.png', aspect: 4.44 },
  { src: '/logos/marcas/caixa.png', aspect: 4.82 },
  { src: '/logos/marcas/cruzcampo.png', aspect: 4.72 },
  { src: '/logos/marcas/sexta.png', aspect: 0.7 },
  { src: '/logos/marcas/disaronno.png', aspect: 4.67 },
  { src: '/logos/marcas/riu.png', aspect: 1.7 },
  { src: '/logos/marcas/movistar.png', aspect: 1.42 },
  { src: '/logos/marcas/fluchos.png', aspect: 1.92 },
  { src: '/logos/marcas/inverfest.png', aspect: 5.26 },
  { src: '/logos/marcas/jvv-frangelico.png', aspect: 2.41 },
  { src: '/logos/marcas/jvv-divuit.png', aspect: 1.44 },
  { src: '/logos/marcas/jvv-rogervivier.png', aspect: 3.23 },
  { src: '/logos/marcas/sage.png', aspect: 1.78 },
  { src: '/logos/marcas/oblicuo.png', aspect: 1.36 },
  { src: '/logos/marcas/cistore.png', aspect: 1.16 },
  { src: '/logos/marcas/junohouse.png', aspect: 5.77 },
  { src: '/logos/marcas/patyka.png', aspect: 3.63 },
  { src: '/logos/marcas/andbank.png', aspect: 5.82 },
  { src: '/logos/marcas/torrejon.png', aspect: 1.91 },
  { src: '/logos/marcas/cegid.png', aspect: 2.46 },
  { src: '/logos/marcas/chaumet.png', aspect: 4.72 },
  { src: '/logos/marcas/montenegro.png', aspect: 8.6 },
  { src: '/logos/marcas/sepiia.png', aspect: 3.37 },
  { src: '/logos/marcas/aliu.png', aspect: 4.31 },
  { src: '/logos/marcas/flaxkale.png', aspect: 4.73 },
  { src: '/logos/marcas/obradorlanena.png', aspect: 2.47 },
  { src: '/logos/marcas/womanrocks.png', aspect: 1 },
];

const ALLIANCE_LOGOS = [
  { src: '/logos/alianzas/jvv-gq.png', aspect: 2.05 },
  { src: '/logos/alianzas/hm-1.png', aspect: 1.51 },
  { src: '/logos/alianzas/uniqlo-1.png', aspect: 1.01 },
  { src: '/logos/alianzas/jvv-hilfiger-logo.png', aspect: 17.7 },
  { src: '/logos/alianzas/jvv-icon.png', aspect: 5.11 },
  { src: '/logos/alianzas/jvv-estrelladamm-logo.png', aspect: 1.19 },
  { src: '/logos/alianzas/cala-mijas.png', aspect: 1 },
  { src: '/logos/alianzas/vespa.png', aspect: 1.92 },
  { src: '/logos/alianzas/jvv-vogue-logo.png', aspect: 3.89 },
  { src: '/logos/alianzas/jvv-morritz-logo.png', aspect: 1 },
  { src: '/logos/alianzas/logo-neo2-copia.png', aspect: 4.63 },
  { src: '/logos/alianzas/jvv-rne-logo.png', aspect: 1.96 },
  { src: '/logos/alianzas/jvv-premiummixes-logo.png', aspect: 2.14 },
  { src: '/logos/alianzas/jvv-mine.png', aspect: 1.78 },
  { src: '/logos/alianzas/jvv-sonar-logo.png', aspect: 3.42 },
  { src: '/logos/alianzas/jvv-moisesnieto-logo.png', aspect: 15.8 },
  { src: '/logos/alianzas/moonwater.png', aspect: 1.17 },
  { src: '/logos/alianzas/jvv-instyle.png', aspect: 4.15 },
  { src: '/logos/alianzas/jvv-drmartins3-logo.png', aspect: 1.74 },
  { src: '/logos/alianzas/jvv-ad.png', aspect: 1.42 },
  { src: '/logos/alianzas/jvv-converse-logo.png', aspect: 1.55 },
  { src: '/logos/alianzas/jvv-stellamccartney-logo.png', aspect: 5.67 },
  { src: '/logos/alianzas/jvv-levis-logo.png', aspect: 2.46 },
  { src: '/logos/alianzas/trabalhe-conosco-heineken.png', aspect: 1.98 },
  { src: '/logos/alianzas/jvv-condenast.png', aspect: 4.99 },
  { src: '/logos/alianzas/jvv-malasana-logo.png', aspect: 1.05 },
  { src: '/logos/alianzas/jvv-totem-logo.png', aspect: 3.2 },
  { src: '/logos/alianzas/jvv-loreak-logo.png', aspect: 5.8 },
  { src: '/logos/alianzas/jvv-palomo-logo.png', aspect: 4.05 },
  { src: '/logos/alianzas/jvv-analocking-logo.png', aspect: 10.5 },
  { src: '/logos/alianzas/jvv-dominico.png', aspect: 4.8 },
  { src: '/logos/alianzas/jvv-secondskin.png', aspect: 16.83 },
  { src: '/logos/alianzas/jvv-gramona-logo.png', aspect: 3.11 },
  { src: '/logos/alianzas/logo-sabor-1.png', aspect: 2.83 },
  { src: '/logos/alianzas/jvv-juan-vidale-logo.png', aspect: 14.74 },
  { src: '/logos/alianzas/jvv-kluid-magazine-logo.png', aspect: 1.01 },
  { src: '/logos/alianzas/jvv-duarte-logo.png', aspect: 1 },
  { src: '/logos/alianzas/jvv-mrboho-logo.png', aspect: 6.35 },
  { src: '/logos/alianzas/jvv-replica2-logo.png', aspect: 1.03 },
  { src: '/logos/alianzas/jvv-cxharoruiz-logo.png', aspect: 2.35 },
  { src: '/logos/alianzas/jvv-vmb-logo.png', aspect: 2.21 },
  { src: '/logos/alianzas/jvv-mahala-logo.png', aspect: 4.92 },
  { src: '/logos/alianzas/jvv-mdc-logo.png', aspect: 1 },
  { src: '/logos/alianzas/unknown.png', aspect: 11.12 },
  { src: '/logos/alianzas/shangay.png', aspect: 3.35 },
  { src: '/logos/alianzas/the-objective-1.png', aspect: 8.89 },
  { src: '/logos/alianzas/voguebusiness.png', aspect: 9.34 },
  { src: '/logos/alianzas/fundaciojoan-1.png', aspect: 1.96 },
  { src: '/logos/alianzas/images-3-copia.png', aspect: 5.02 },
  { src: '/logos/alianzas/blacklimba.png', aspect: 13.47 },
  { src: '/logos/alianzas/victoria.png', aspect: 5 },
  { src: '/logos/alianzas/antony.png', aspect: 7.07 },
  { src: '/logos/alianzas/kevin.png', aspect: 0.63 },
  { src: '/logos/alianzas/trebor.png', aspect: 3.42 },
  { src: '/logos/alianzas/4home.png', aspect: 0.78 },
  { src: '/logos/alianzas/folie.png', aspect: 2.97 },
  { src: '/logos/alianzas/sexta.png', aspect: 4.9 },
  { src: '/logos/alianzas/razon.png', aspect: 5.63 },
  { src: '/logos/alianzas/jvv-lexdeux.png', aspect: 5.32 },
  { src: '/logos/alianzas/vanidad.png', aspect: 4.96 },
  { src: '/logos/alianzas/revista.png', aspect: 2.34 },
  { src: '/logos/alianzas/reclam.png', aspect: 5.09 },
  { src: '/logos/alianzas/museo-helga.png', aspect: 1 },
  { src: '/logos/alianzas/20-minutos.png', aspect: 6.1 },
  { src: '/logos/alianzas/progreso.png', aspect: 7.55 },
  { src: '/logos/alianzas/jvv-sclhesser.png', aspect: 13.66 },
  { src: '/logos/alianzas/jvv-ailanto-logo.png', aspect: 5.47 },
  { src: '/logos/alianzas/magasin.png', aspect: 4.1 },
  { src: '/logos/alianzas/acelerar.png', aspect: 4.21 },
  { src: '/logos/alianzas/top100-1.png', aspect: 0.77 },
  { src: '/logos/alianzas/heura.png', aspect: 5.04 },
  { src: '/logos/alianzas/etnia.png', aspect: 4.33 },
  { src: '/logos/alianzas/ecoalf.png', aspect: 5.67 },
  { src: '/logos/alianzas/aro.png', aspect: 1 },
  { src: '/logos/alianzas/junohouse.png', aspect: 5.77 },
];

const getLogoClass = (logo: { src: string; aspect: number }) => {
  if (logo.src.includes('ysl')) {
    return 'h-12 md:h-16 w-auto max-w-[120px]';
  }
  if (logo.aspect < 0.85) {
    return 'h-10 md:h-12 w-auto max-w-[120px]';
  }
  if (logo.aspect <= 1.75) {
    return 'h-9 md:h-11 w-auto max-w-[130px]';
  }
  if (logo.aspect >= 4.2) {
    return 'h-5 md:h-6 w-auto max-w-[180px] md:max-w-[210px]';
  }
  return 'h-7 md:h-8 w-auto max-w-[150px] md:max-w-[180px]';
};

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
    const firstType = Array.isArray(person.type) ? person.type[0] : person.type;
    if (firstType) {
      return t(`talent.${firstType}`);
    }
    return language === 'es' ? 'Artista' : 'Artist';
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

      {/* Brand Logo Marquee Section (MARCAS) */}
      <section className="py-8 md:py-10 bg-black border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block font-display">
            {t('clients.title')}
          </span>
        </div>
        <div className="relative w-full flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex w-max items-center" style={{ animationDuration: '520s' }}>
            {/* Set 1 */}
            <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div key={`logo-1-${idx}`} className="flex items-center justify-center shrink-0 h-14 md:h-16 px-2">
                  <img
                    src={logo.src}
                    alt="Client Brand"
                    className={`${getLogoClass(logo)} object-contain opacity-50 hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              ))}
            </div>
            {/* Set 2 (loop copy) */}
            <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div key={`logo-2-${idx}`} className="flex items-center justify-center shrink-0 h-14 md:h-16 px-2">
                  <img
                    src={logo.src}
                    alt="Client Brand"
                    className={`${getLogoClass(logo)} object-contain opacity-50 hover:opacity-100 transition-opacity duration-300`}
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
              {[1, 2, 3, 4, 10, 5]
                .map((id) => TALENT_DATA.find((p) => p.id === id))
                .filter((person): person is NonNullable<typeof person> => Boolean(person))
                .map((person) => (
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

      {/* Alliances Logo Marquee Section (ALIANZAS) */}
      <section className="py-8 md:py-10 bg-black border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block font-display">
            {t('alliances.title')}
          </span>
        </div>
        <div className="relative w-full flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex w-max items-center" style={{ animationDuration: '295s' }}>
            {/* Set 1 */}
            <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
              {ALLIANCE_LOGOS.map((logo, idx) => (
                <div key={`alliance-1-${idx}`} className="flex items-center justify-center shrink-0 h-14 md:h-16 px-2">
                  <img
                    src={logo.src}
                    alt="Alliance Partner"
                    className={`${getLogoClass(logo)} object-contain opacity-50 hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              ))}
            </div>
            {/* Set 2 (loop copy) */}
            <div className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
              {ALLIANCE_LOGOS.map((logo, idx) => (
                <div key={`alliance-2-${idx}`} className="flex items-center justify-center shrink-0 h-14 md:h-16 px-2">
                  <img
                    src={logo.src}
                    alt="Alliance Partner"
                    className={`${getLogoClass(logo)} object-contain opacity-50 hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Call to Action */}
      <section className="py-36 px-6 text-center relative bg-[#030303]">
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
