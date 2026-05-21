import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TALENT_DATA } from '../data/talent';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function TalentDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const talent = TALENT_DATA.find(t => t.id === Number(id));

  useEffect(() => {
    if (!talent) navigate('/talent');
  }, [talent, navigate]);

  if (!talent) return null;

  const professionTitle = talent.type === 'models' 
    ? (language === 'es' ? 'Modelo' : 'Model') 
    : talent.type === 'actors' 
    ? (language === 'es' ? 'Actor' : 'Actor') 
    : (language === 'es' ? 'Artista' : 'Artist');

  return (
    <div className="pt-40 pb-24">
      <SEO 
        title={`${talent.name} - ${professionTitle}`}
        description={`${talent.name}, ${professionTitle} ${language === 'es' ? 'representado por JVV Agency, establecido en' : 'represented by JVV Agency, based in'} ${talent.location}. ${talent.description[language]}`}
        ogImage={talent.image}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetrical Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-32">
          
          {/* Left Column: Bio & Works */}
          <div className="md:col-span-7 space-y-12">
            <div>
              <Link to="/talent" className="group inline-flex items-center space-x-2 text-xs uppercase tracking-tight opacity-40 hover:opacity-100 transition-all mb-8">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{t('talent.all')}</span>
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-8xl font-serif leading-none tracking-tighter uppercase mt-4"
              >
                {talent.name}
              </motion.h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl font-light opacity-70 leading-relaxed">
                {talent.description[language]}
              </p>
            </div>

            {/* Specs & Stats */}
            <div className="border-t border-b border-white/5 py-8 space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-sans tracking-widest">{t('talent.specs')}</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(talent.stats[language]).map(([label, value]) => (
                  <div key={label} className="flex flex-col border-b border-white/5 pb-2">
                    <span className="text-[10px] uppercase tracking-tight opacity-30 capitalize">{label}</span>
                    <span className="text-sm font-medium mt-1 text-white/90">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Works List */}
            <div className="pt-4">
              <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-8 font-sans border-none tracking-widest">{t('talent.works')}</h3>
              <div className="divide-y divide-white/5">
                {talent.projects.map((proj, i) => (
                  <div key={i} className="py-4 flex justify-between items-center group cursor-default">
                    <div>
                      <h4 className="text-lg font-serif text-white/50 group-hover:text-white transition-colors">{proj.title[language]}</h4>
                      <p className="text-[10px] uppercase tracking-tight opacity-30 mt-1">{talent.name} &bull; Editorial</p>
                    </div>
                    <span className="text-xs font-mono opacity-20">{proj.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Beautifully Constrained Sticky Portrait Card */}
          <div className="md:col-span-5 md:sticky md:top-32 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] w-full max-w-[450px] bg-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5"
              style={{ maxHeight: '580px' }}
            >
              <img 
                src={talent.image} 
                alt={talent.name}
                className="w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-105"
              />
            </motion.div>
          </div>

        </div>

        {/* Portfolio Gallery Grid */}
        <section className="mb-32 border-t border-white/5 pt-20">
          <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-12 font-sans tracking-widest">{t('talent.portfolio')}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {talent.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[3/4] bg-zinc-900 overflow-hidden shadow-lg border border-white/5"
              >
                <img 
                  src={img} 
                  alt={`${talent.name} Portfolio ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s]"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="flex justify-between items-center py-20 border-t border-white/5">
           <button onClick={() => navigate('/talent')} className="text-xs uppercase tracking-tight opacity-40 hover:opacity-100 transition-opacity">{t('talent.back')}</button>
           <Link to="/contact" className="group flex items-center space-x-4 text-xs uppercase tracking-tight">
             <span>{t('talent.booking')}</span>
             <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
           </Link>
        </section>

      </div>
    </div>
  );
}
