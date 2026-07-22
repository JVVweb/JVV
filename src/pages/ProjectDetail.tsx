import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { PROJECTS_DATA } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find(p => p.id === Number(id));

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="pt-40 pb-32 px-6">
      <SEO 
        title={`${project.title[language]} | ${project.client}`}
        description={`${project.title[language]} - A campaign for ${project.client} (${project.year}) produced by JVV Agency. ${project.description[language]}`}
        ogImage={project.images[0]}
      />
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/projects" 
          className="group flex items-center space-x-2 text-xs uppercase tracking-tight opacity-40 hover:opacity-100 transition-all mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{t('nav.projects')}</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8 uppercase leading-tight">{project.title[language]}</h1>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-2xl">
              {project.description[language]}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="space-y-4 text-right w-full">
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">{language === 'es' ? 'Cliente' : 'Client'}</span>
                <span className="text-sm font-medium">{project.client}</span>
              </div>
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">{language === 'es' ? 'Año' : 'Year'}</span>
                <span className="text-sm font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aspect-Ratio Preserving Masonry Grid Layout */}
        {project.images && project.images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {project.images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="break-inside-avoid mb-6 bg-zinc-900 shadow-lg border border-white/5 overflow-hidden rounded-sm"
              >
                <img 
                  src={img} 
                  alt={`${project.title[language]} ${i}`}
                  className="w-full h-auto object-contain transition-transform duration-[2s] hover:scale-105 block"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full aspect-[21/9] bg-zinc-950 border border-white/5 flex flex-col items-center justify-center rounded-sm">
            <img src="/jvv logo white new.png" alt="JVV Logo" className="h-24 w-auto opacity-10 object-contain" />
            <span className="text-xs tracking-widest uppercase opacity-20 mt-4 font-display">JVV Projects</span>
          </div>
        )}

        {/* Seamless Project Navigation */}
        <section className="border-t border-white/5 pt-16 mt-24">
           {(() => {
              const currentIndex = PROJECTS_DATA.findIndex(p => p.id === Number(id));
              const prevProject = PROJECTS_DATA[currentIndex - 1] || PROJECTS_DATA[PROJECTS_DATA.length - 1];
              const nextProject = PROJECTS_DATA[currentIndex + 1] || PROJECTS_DATA[0];
              return (
                <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
                  <Link 
                    to={`/projects/${prevProject.id}`} 
                    className="flex-1 group flex flex-col items-start justify-center p-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.01]"
                  >
                     <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">&larr; {language === 'es' ? 'Anterior' : 'Previous'}</span>
                     <span className="text-base font-serif text-white/70 group-hover:text-white transition-colors">{prevProject.title[language] || prevProject.talent}</span>
                  </Link>
                  <div className="flex items-center justify-center min-w-[150px]">
                     <Link to="/projects" className="text-xs uppercase tracking-widest border border-white/10 px-8 py-4 hover:border-white transition-all text-center w-full">
                       {language === 'es' ? 'Ver Proyectos' : 'All Projects'}
                     </Link>
                  </div>
                  <Link 
                    to={`/projects/${nextProject.id}`} 
                    className="flex-1 group flex flex-col items-end justify-center p-6 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.01] text-right"
                  >
                     <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">{language === 'es' ? 'Siguiente' : 'Next'} &rarr;</span>
                     <span className="text-base font-serif text-white/70 group-hover:text-white transition-colors">{nextProject.title[language] || nextProject.talent}</span>
                  </Link>
                </div>
              );
           })()}
        </section>
      </div>
    </div>
  );
}
