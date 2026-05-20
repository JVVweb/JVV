import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { PROJECTS_DATA } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find(p => p.id === Number(id));

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="pt-40 pb-32 px-6">
      <SEO 
        title={`${project.title} | ${project.client}`}
        description={`${project.title} - A campaign for ${project.client} (${project.year}) produced by JVV Agency. ${project.description}`}
        ogImage={project.images[0]?.startsWith('http') ? `${project.images[0]}?auto=format&fit=crop&q=80&w=1200` : project.images[0]}
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
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8 uppercase leading-tight">{project.title}</h1>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="space-y-4 text-right w-full">
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Client</span>
                <span className="text-sm font-medium">{project.client}</span>
              </div>
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Year</span>
                <span className="text-sm font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Images Side-by-Side Parallel Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-zinc-900 shadow-lg border border-white/5"
            >
              <img 
                src={img.startsWith('http') ? `${img}?auto=format&fit=crop&q=85&w=1000` : img} 
                alt={`${project.title} ${i}`}
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
