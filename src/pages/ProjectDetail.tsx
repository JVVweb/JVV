import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const PROJECT_DETAILS = {
  1: {
    title: 'Vogue Editorial',
    client: 'Vogue España',
    year: '2026',
    description: 'A study in minimalist elegance and high-fashion storytelling. This editorial explored the intersection of light, shadow and avant-garde silhouette.',
    images: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      'https://images.unsplash.com/photo-1539109132314-347752418b70'
    ]
  },
  2: {
    title: 'Urban Nomads',
    client: 'Zara Home',
    year: '2025',
    description: 'Capturing the essence of modern living in transit. A cinematic campaign featuring natural textures and atmospheric interior design.',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15'
    ]
  },
  3: {
    title: 'Autumn Glow',
    client: 'Mango',
    year: '2026',
    description: 'Warm tones and soft layering for the transitional season. A campaign focused on comfort, style, and the beauty of changing landscapes.',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae',
      'https://images.unsplash.com/photo-1445205170230-053b830c6050'
    ]
  },
  4: {
    title: 'Digital Soul',
    client: 'Bershka',
    year: '2025',
    description: 'Exploring the boundary between the physical and digital realms. Vibrant colors and high-energy photography defining Gen Z aesthetics.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      'https://images.unsplash.com/photo-1529139572765-397033ef7e8f',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const project = PROJECT_DETAILS[id as unknown as keyof typeof PROJECT_DETAILS];

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="pt-40 pb-32 px-6">
      <SEO 
        title={`${project.title} | ${project.client}`}
        description={`${project.title} - A campaign for ${project.client} (${project.year}) produced by JVV Agency. ${project.description}`}
        ogImage={project.images[0] || "https://images.unsplash.com/photo-1507679799987-c73774573b2a?auto=format&fit=crop&q=80&w=1200"}
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
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8">{project.title}</h1>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="space-y-4 text-right">
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Client</span>
                <span className="text-sm">{project.client}</span>
              </div>
              <div className="flex justify-between lg:justify-end lg:space-x-12 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Year</span>
                <span className="text-sm">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {project.images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video overflow-hidden bg-zinc-900"
            >
              <img 
                src={`${img}?auto=format&fit=crop&q=85&w=2000`} 
                alt={`${project.title} ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
