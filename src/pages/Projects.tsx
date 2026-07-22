import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { PROJECTS_DATA } from '../data/projects';

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title={t('nav.projects')}
        description={`JVV Projects: ${t('projects.subtitle')} Discover our campaigns in high fashion editorial and premium production.`}
      />
      <header className="mb-24">
        <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tighter">{t('nav.projects')}</h1>
        <p className="text-xl font-light opacity-50 max-w-xl">
          {t('projects.subtitle')}
        </p>
      </header>

      <div className="space-y-20 md:space-y-32">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Link to={`/projects/${project.id}`} className="block relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-zinc-900 group cursor-pointer shadow-lg border border-white/5 flex items-center justify-center">
                {project.image ? (
                  <>
                    <img 
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30"
                    />
                    <img 
                      src={project.image}
                      alt={project.title[language]}
                      className="relative max-w-full max-h-full object-contain transition-transform duration-[2s] group-hover:scale-105 z-10"
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center pointer-events-none">
                    <img src="/jvv logo white new.png" alt="JVV Logo" className="h-16 w-auto opacity-10 object-contain" />
                    <span className="text-[10px] tracking-widest uppercase opacity-20 mt-4 font-display">JVV Projects</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center z-20">
                   <span className="text-xs uppercase tracking-tight border border-white/40 px-6 py-3 rounded-full">
                     {language === 'es' ? 'Explorar' : 'Explore View'}
                   </span>
                </div>
              </Link>
            </div>
            
            <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="flex items-center space-x-4 mb-6 text-xs uppercase tracking-tight">
                <span className="opacity-30">{project.year}</span>
                {project.talent && (
                  <>
                    <span className="opacity-30">—</span>
                    <span className="opacity-100 font-bold text-white text-sm md:text-base tracking-normal">{project.talent}</span>
                  </>
                )}
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight uppercase leading-tight">{project.title[language]}</h2>
              <Link to={`/projects/${project.id}`} className="text-xs uppercase tracking-tight border-b border-white/20 pb-2 hover:border-white transition-all">
                {language === 'es' ? 'Explorar Proyecto' : 'Explore Project'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
