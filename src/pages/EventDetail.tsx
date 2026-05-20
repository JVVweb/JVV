import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const EVENTS_DETAILS_DATA = [
  {
    id: 1,
    title: 'CHAUMET CHRISTMAS',
    category: 'EVENT',
    date: { month: 'NOV', day: '18', year: '2025' },
    location: 'Madrid, Spain',
    description: "JVV took part with Chaumet, the high-jewelry brand of the LVMH group, in the 2025 edition of the Solidarity Christmas Tree, a charitable event in which the world's leading luxury brands create unique, exclusive Christmas trees that are later auctioned. Our work included selecting and coordinating the welcome staff, as well as managing and producing the event's music and visual content through our JVV People member, Ayub. An evening where creativity, philanthropy, and luxury come together to generate real social impact during the holiday season.",
    image: '/Chaumet.jpg',
    gallery: [
      '/Chaumet.jpg',
      '/Chaumet.jpg',
      '/Chaumet.jpg'
    ]
  },
  {
    id: 2,
    title: 'ELLA FESTIVAL 2025',
    category: 'LIFESTYLE',
    date: { month: 'AUG', day: '29', year: '2025' },
    location: 'Mallorca, Spain',
    description: "Last August, we had the opportunity to collaborate in the edition of ELLA Festival Mallorca 2025, an event that celebrates diversity, culture, and innovation. We were in charge of creating engaging spaces within the beach club, which served as the main meeting point throughout the weekend. Together with Hammam Al Ándalus, we created a wellness sanctuary, offering moments of relaxation and connection through an immersive sensory experience. With Júpiter Bornay and Greta Jewelry, we transformed art into emotion by presenting jewelry as a form of artistic expression through timeless pieces. Different activations, one shared purpose: to create authentic and memorable connections.",
    image: '/ella festival.jpg',
    gallery: [
      '/ella festival.jpg',
      '/ella festival.jpg',
      '/ella festival.jpg'
    ]
  },
  {
    id: 3,
    title: 'PALMA INTERNATIONAL BOAT SHOW 2025',
    category: 'EVENT',
    date: { month: 'MAY', day: '03', year: '2025' },
    location: 'Palma de Mallorca',
    description: "At the 2025 edition of the Palma International Boat Show (April 30 – May 3), one of the most prestigious nautical fairs in the Mediterranean and an international benchmark in the sector, JVV was in charge of selecting and coordinating strategic profiles and influencers, connecting the nautical world with new audiences and generating high-value visibility for the event. The Palma International Boat Show brings together over 30,000 visitors and more than 300 international companies, positioning Palma de Mallorca as a global hub for yachting and an essential meeting point for innovation, lifestyle, and the sea.",
    image: '/Palma International.jpg',
    gallery: [
      '/Palma International.jpg',
      '/Palma International.jpg',
      '/Palma International.jpg'
    ]
  },
  {
    id: 4,
    title: 'CASA PATYKA',
    category: 'BEAUTY',
    date: { month: 'OCT', day: '18', year: '2024' },
    location: 'Barcelona, Spain',
    description: "JVV was in charge of the event production and the CASA PATYKA concept in Barcelona, a format that arrived in the city for the first time. Designed to create an eco-luxury experience, this space brought together pharmacy professionals, influencers, and other brand enthusiasts to discover Glow, PATYKA's new line formulated to illuminate the skin with natural and organic ingredients. Attendees had the opportunity to experience the brand's innovation firsthand, test the products, and immerse themselves in PATYKA's sensory universe.",
    image: '/CASA PATYKA.jpg',
    gallery: [
      '/CASA PATYKA.jpg',
      '/CASA PATYKA.jpg',
      '/CASA PATYKA.jpg'
    ]
  }
];

export default function EventDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const event = EVENTS_DETAILS_DATA.find(e => e.id === Number(id));

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
              className="text-6xl md:text-[6vw] font-serif tracking-tighter leading-[0.8] uppercase"
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
          className="aspect-video md:aspect-[21/9] overflow-hidden bg-zinc-900 shadow-xl border border-white/5"
        >
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover brightness-90"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="px-6 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
             <h2 className="text-[10px] uppercase tracking-[0.3em] opacity-30 mt-2 font-sans font-bold">The Brief</h2>
          </div>
          <div className="md:col-span-9">
             <p className="text-2xl md:text-4xl font-serif leading-relaxed tracking-tight opacity-80 italic">
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
               className={`overflow-hidden bg-zinc-900 shadow-md border border-white/5 ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/5]'}`}
             >
               <img 
                 src={img} 
                 alt="Gallery"
                 className="w-full h-full object-cover hover:scale-105 transition-all duration-[1s]"
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
            <p className="text-sm font-light leading-relaxed opacity-70 font-sans">Completed &bull; {event.date.year}</p>
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
