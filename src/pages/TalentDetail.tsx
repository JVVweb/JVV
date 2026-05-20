import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TALENT_DATA } from '../data/talent';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function TalentDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const talent = TALENT_DATA.find(t => t.id === Number(id));

  useEffect(() => {
    if (!talent) navigate('/talent');
  }, [talent, navigate]);

  if (!talent) return null;

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={`${talent.name} - ${talent.type === 'models' ? 'Model' : talent.type === 'actors' ? 'Actor' : 'Artist'}`}
        description={`${talent.name}, ${talent.type === 'models' ? 'Model' : talent.type === 'actors' ? 'Actor' : 'Artist'} represented by JVV Agency, based in ${talent.location}. ${talent.description}`}
        ogImage={talent.image || "https://images.unsplash.com/photo-1507679799987-c73774573b2a?auto=format&fit=crop&q=80&w=1200"}
      />
      {/* Header / Intro */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:items-end mb-24">
        <div className="md:w-1/2">
          <Link to="/talent" className="group flex items-center space-x-2 text-xs uppercase tracking-tight opacity-40 hover:opacity-100 transition-all mb-12">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t('talent.all')}</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-9xl font-serif leading-none tracking-tighter mb-8"
          >
            {talent.name}
          </motion.h1>
          <p className="text-xl font-light opacity-60 max-w-md leading-relaxed">
            {talent.description}
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col md:items-end">
           <div className="space-y-4 md:text-right">
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-8 pb-4 font-sans border-none">{t('talent.specs')}</h4>
              {Object.entries(talent.stats).map(([label, value]) => (
                <div key={label} className="flex justify-between md:justify-end md:space-x-12">
                  <span className="text-xs uppercase tracking-tight opacity-30 capitalize">{label}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="aspect-[4/5] md:aspect-video w-full bg-zinc-900 overflow-hidden"
        >
          <img 
            src={`${talent.image}?auto=format&fit=crop&q=95&w=2000`} 
            alt={talent.name}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-12 font-sans">{t('talent.portfolio')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {talent.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-[3/4] bg-zinc-900 overflow-hidden"
            >
              <img 
                src={`${img}?auto=format&fit=crop&q=80&w=1000`} 
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="px-6 max-w-7xl mx-auto mb-40">
        <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-12 font-sans border-none">{t('talent.works')}</h3>
        <div className="divide-y divide-white/5">
          {talent.projects.map((proj, i) => (
            <div key={i} className="py-8 flex justify-between items-center group cursor-default">
              <div>
                <h4 className="text-2xl font-serif text-white/50 group-hover:text-white transition-colors">{proj.title}</h4>
                <p className="text-xs uppercase tracking-tight opacity-30 mt-2">{talent.name} &bull; Editorial</p>
              </div>
              <span className="text-sm font-mono opacity-20">{proj.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 max-w-7xl mx-auto flex justify-between items-center py-20 border-t border-white/5">
         <button onClick={() => navigate('/talent')} className="text-xs uppercase tracking-tight opacity-40 hover:opacity-100 transition-opacity">{t('talent.back')}</button>
         <Link to="/contact" className="group flex items-center space-x-4 text-xs uppercase tracking-tight">
           <span>{t('talent.booking')}</span>
           <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
         </Link>
      </section>
    </div>
  );
}
