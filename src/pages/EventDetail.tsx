import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, MapPin, Users } from 'lucide-react';
import SEO from '../components/SEO';

const EVENTS_DATA = [
  {
    id: 1,
    title: 'CHAUMET CHRISTMAS',
    category: 'EVENT',
    date: { month: 'NOV', day: '18', year: '2025' },
    location: 'Serrano, Madrid',
    description: 'An exclusive Christmas gathering for Chaumet, celebrating the season with elegance and luxury. We managed the guest list including top-tier influencers and socialites.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38',
      'https://images.unsplash.com/photo-1516934024742-b4395366d3e9',
      'https://images.unsplash.com/photo-1467810563316-b5476525c0f9'
    ]
  },
  {
    id: 2,
    title: 'ELLA FESTIVAL 2025',
    category: 'LIFESTYLE',
    date: { month: 'AUG', day: '29', year: '2025' },
    location: 'Mallorca, Spain',
    description: 'A celebration of diversity and empowerment in the heart of the Mediterranean. JVV production handled guest logistics and press relations.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'
    ]
  },
  {
    id: 3,
    title: 'PALMA INTERNATIONAL BOAT SHOW 2025',
    category: 'EVENT',
    date: { month: 'MAY', day: '03', year: '2025' },
    location: 'Palma de Mallorca',
    description: 'The premier nautical event in the Balearic Islands. JVV managed the VIP lounge and international press day.',
    image: 'https://images.unsplash.com/photo-1544462242-94585e5ca8d2?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1544462242-94585e5ca8d2',
      'https://images.unsplash.com/photo-1567896848122-cc230573e870',
      'https://images.unsplash.com/photo-1545564344-884814c1fd50'
    ]
  },
  {
    id: 4,
    title: 'CASA PATYKA presentation',
    category: 'BEAUTY',
    date: { month: 'OCT', day: '18', year: '2024' },
    location: 'Barcelona, Spain',
    description: 'Introducing the new Glow Line to the Spanish market. An intimate breakfast with top beauty editors and creators.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796'
    ]
  },
  {
    id: 5,
    title: 'THE BODY SHOP',
    category: 'RETAIL',
    date: { month: 'JUN', day: '12', year: '2023' },
    location: 'Madrid, Spain',
    description: 'Sustainable beauty activism. A pop-up event focusing on community and eco-conscious storytelling.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
      'https://images.unsplash.com/photo-1556228578-f67bc1273a50',
      'https://images.unsplash.com/photo-1556228578-0d044f5efd4d'
    ]
  },
  {
    id: 6,
    title: 'TIME OUT MADRID',
    category: 'CULTURE',
    date: { month: 'MAR', day: '13', year: '2023' },
    location: 'Madrid, Spain',
    description: 'Celebrating the pulse of the city. A high-energy event for the cultural vanguard of Madrid.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1514525253361-bee8d48700df',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'
    ]
  }
];

export default function EventDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const event = EVENTS_DATA.find(e => e.id === Number(id));

  if (!event) {
    navigate('/events');
    return null;
  }

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={`${event.title} (${event.category})`}
        description={`Relive ${event.title}, a premier luxury brand experience produced by JVV Agency in ${event.location}. ${event.description}`}
        ogImage={event.image}
      />
      {/* Intro Header */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <Link 
          to="/events" 
          className="group flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Catalog</span>
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="text-[10px] uppercase tracking-[0.4em] mb-6 block font-sans font-bold"
            >
              {event.category} &mdash; Project 0{event.id}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10vw] font-serif tracking-tighter leading-[0.8] uppercase"
            >
              {event.title}
            </motion.h1>
          </div>
          <div className="flex flex-col space-y-4 mt-12 md:mt-0 md:pb-6 border-l border-white/5 pl-8">
             <div className="flex items-center space-x-3">
                <Clock className="w-3 h-3 opacity-20" />
                <span className="text-[10px] uppercase tracking-widest opacity-60">{event.date.month} {event.date.day}, {event.date.year}</span>
             </div>
             <div className="flex items-center space-x-3">
                <MapPin className="w-3 h-3 opacity-20" />
                <span className="text-[10px] uppercase tracking-widest opacity-60">{event.location}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="aspect-video md:aspect-[21/9] overflow-hidden bg-zinc-900"
        >
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover grayscale brightness-75"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="px-6 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3">
             <h2 className="text-[10px] uppercase tracking-[0.3em] opacity-30 mt-2 font-sans font-bold">The Brief</h2>
          </div>
          <div className="md:col-span-9">
             <p className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tighter opacity-80 italic">
               "{event.description}"
             </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {event.gallery.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`overflow-hidden bg-zinc-900 ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/5]'}`}
             >
               <img 
                 src={`${img}?auto=format&fit=crop&q=80&w=1200`} 
                 alt="Gallery"
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1s]"
               />
             </motion.div>
           ))}
        </div>
      </section>

      {/* Results / Details */}
      <section className="px-6 max-w-7xl mx-auto border-t border-white/10 py-32 grid grid-cols-1 md:grid-cols-3 gap-16">
         <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-sans font-semibold">Production</h4>
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-sm font-light leading-relaxed opacity-70">Guest List Management<br/>VIP Logistics<br/>Social Media Strategy</p>
         </div>
         <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-sans font-semibold">Engagement</h4>
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-sm font-light leading-relaxed opacity-70">50+ Tier 1 Influencers<br/>1.2M+ Reach<br/>20+ Media Outlets</p>
         </div>
         <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-sans font-semibold">Status</h4>
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-sm font-light leading-relaxed opacity-70">Completed &bull; {event.date.year}</p>
         </div>
      </section>

      {/* Back Button */}
      <div className="text-center pb-20">
         <Link to="/events" className="text-xs uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all">
           Back to Events
         </Link>
      </div>
    </div>
  );
}
