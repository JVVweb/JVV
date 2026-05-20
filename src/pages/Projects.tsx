import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const PROJECTS = [
  {
    id: 1,
    title: 'Vogue Editorial',
    client: 'Vogue España',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e'
  },
  {
    id: 2,
    title: 'Urban Nomads',
    client: 'Zara Home',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8'
  },
  {
    id: 3,
    title: 'Autumn Glow',
    client: 'Mango',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'
  },
  {
    id: 4,
    title: 'Digital Soul',
    client: 'Bershka',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
  }
];

export default function Projects() {
  const { t } = useLanguage();

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
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Link to={`/projects/${project.id}`} className="block aspect-video overflow-hidden bg-zinc-900 group cursor-pointer relative">
                <img 
                  src={`${project.image}?auto=format&fit=crop&q=80&w=1200`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                   <span className="text-xs uppercase tracking-tight border border-white/40 px-6 py-3 rounded-full">Explore View</span>
                </div>
              </Link>
            </div>
            
            <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="flex items-center space-x-4 mb-6 opacity-30 text-xs uppercase tracking-tight">
                <span>{project.year}</span>
                <div className="w-8 h-px bg-white" />
                <span>{project.client}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">{project.title}</h2>
              <Link to={`/projects/${project.id}`} className="text-xs uppercase tracking-tight border-b border-white/20 pb-2 hover:border-white transition-all">
                Full Case Study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
