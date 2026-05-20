import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <SEO 
        title="Home"
        description={t('hero.title') + " " + t('hero.subtitle')}
      />
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a_0%,#050505_70%)] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-[12vw] md:text-[6vw] font-serif leading-[0.95] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent max-w-[280px] md:max-w-5xl mx-auto">
            {t('hero.title')}
          </h1>
          <p className="text-base md:text-xl font-light opacity-70 max-w-xs md:max-w-xl mx-auto uppercase tracking-tighter leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-tight mb-4 opacity-40">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-40" />
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
              Curating style, <br />
              representing <span className="italic">soul</span>.
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

      {/* Featured Talent Grid (Teaser) */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl font-serif">The Talent</h2>
              <Link to="/talent" className="text-sm uppercase tracking-tight opacity-50 hover:opacity-100 transition-opacity flex items-center space-x-2">
                <span>View All Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-zinc-900 overflow-hidden relative mb-6">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1506794778202-cad84cf45f1d' : i === 2 ? '1531746020798-e6953c6e8e04' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&q=80&w=800`}
                      alt="Talent"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <h3 className="text-2xl font-serif mb-1">Alex Rivera</h3>
                  <p className="text-xs uppercase tracking-tight opacity-40">Model / Barcelona</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Projects Call to Action */}
      <section className="py-40 px-6 text-center overflow-hidden relative">
        <motion.div
           style={{ x: '-20%' }}
           animate={{ x: '10%' }}
           transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
           className="absolute top-1/2 -translate-y-1/2 left-0 text-[20vw] font-display font-bold opacity-[0.02] whitespace-nowrap pointer-events-none"
        >
          EDITORIAL CAMPAIGNS PRODUCTION FASHION
        </motion.div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-12 italic">Let's create impact.</h2>
          <Link to="/contact" className="inline-block px-12 py-6 border border-white/20 rounded-full text-lg uppercase tracking-tight hover:bg-white hover:text-brand-bg transition-all duration-700">
            Start a Collaboration
          </Link>
        </div>
      </section>
    </div>
  );
}
