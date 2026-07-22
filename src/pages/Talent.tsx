import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TALENT_DATA, TalentType } from '../data/talent';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Talent() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<TalentType>('all');

  const filteredTalent = filter === 'all' 
    ? TALENT_DATA 
    : TALENT_DATA.filter(item => item.type.includes(filter));

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title={t('nav.talent')}
        description="Roster of world-class models, actors, and directors represented by JVV Agency in Madrid and Barcelona. Discover exceptional creative and visual talent."
      />
      <header className="mb-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-[8vw] font-serif mb-12 tracking-tighter font-light leading-[0.8]">{t('nav.talent')}</h1>
        </motion.div>
        
        <div className="flex flex-nowrap gap-x-8 border-b border-white/5 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
          {(['all', 'emprendedoras', 'djs', 'cantantes', 'actores', 'comunicadores', 'fotografos', 'directores', 'pintoras', 'deportistas'] as TalentType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-tight transition-all duration-300 relative pb-2 whitespace-nowrap ${filter === cat ? 'opacity-100 font-medium' : 'opacity-30 hover:opacity-100'}`}
            >
              {t(`talent.${cat}`)}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredTalent.map((person, index) => (
            <motion.div
              layout
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.03,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group cursor-pointer"
            >
              <Link to={`/talent/${person.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-zinc-900 mb-4 transition-all duration-700 relative">
                  <img 
                    src={`${person.image}?auto=format&fit=crop&q=80&w=800`}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-brand-bg/10 opacity-20 group-hover:opacity-0 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-brand-bg/40 backdrop-blur-sm pointer-events-none">
                     <p className="text-xs uppercase tracking-tight text-white/80">View Portfolio</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline px-1 gap-1">
                  <h3 className="text-lg md:text-xl font-serif tracking-tight">{person.name}</h3>
                  <p className="text-[11px] uppercase tracking-tight opacity-30">{person.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

