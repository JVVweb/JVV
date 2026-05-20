import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32">
      <SEO 
        title={t('nav.about')}
        description={`${t('about.hero')} ${t('about.vision.p1')}`}
      />
      <section className="px-6 max-w-5xl mx-auto mb-40 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-tight opacity-40 mb-12 block"
        >
          {t('about.since')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-8xl font-serif mb-16 font-light tracking-tighter balance"
        >
          {t('about.hero')}
        </motion.h1>
      </section>

      <section className="px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto items-start mb-40">
        <div className="md:sticky md:top-32 aspect-[4/5] bg-zinc-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73774573b2a?auto=format&fit=crop&q=80&w=1200"
            alt="Jesús Vázquez Viedma"
            className="w-full h-full object-cover grayscale opacity-70"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest opacity-30 mb-4 block">{t('about.founder.role')}</span>
          <h2 className="text-5xl font-serif mb-12 opacity-90">{t('about.founder.title')}</h2>
          <div className="space-y-8 text-xl font-light opacity-60 leading-relaxed max-w-xl">
            <p>
              {t('about.vision.p1')}
            </p>
            <p>
              {t('about.vision.p2')}
            </p>
            <p>
              {t('about.vision.p3')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] py-32 px-6">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xs uppercase tracking-tight opacity-30 mb-20">{t('about.services.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: t('about.services.s1.title'), desc: t('about.services.s1.desc') },
                { title: t('about.services.s2.title'), desc: t('about.services.s2.desc') },
                { title: t('about.services.s3.title'), desc: t('about.services.s3.desc') }
              ].map((s, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-serif mb-4">{s.title}</h3>
                  <p className="text-sm opacity-50 max-w-xs mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
}
