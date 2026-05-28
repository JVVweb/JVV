import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.talent'), path: '/talent' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.hospitality'), path: '/hospitality' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-black py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/jvv logo white new.png" 
            alt="JVV Agency" 
            className="h-9 md:h-11 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'opacity-100 font-medium' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center border border-white/10 rounded-full px-4 py-2 space-x-4">
            <button 
              onClick={() => setLanguage('es')}
              className={`text-[10px] uppercase tracking-tighter transition-all ${language === 'es' ? 'opacity-100 font-bold' : 'opacity-30 hover:opacity-100'}`}
            >
              ES
            </button>
            <div className="w-[1px] h-3 bg-white/10" />
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] uppercase tracking-tighter transition-all ${language === 'en' ? 'opacity-100 font-bold' : 'opacity-30 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - Lateral Slide In */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-zinc-950/95 backdrop-blur-md z-40 md:hidden flex flex-col p-10 pt-28 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 no-scrollbar">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-serif tracking-tighter hover:opacity-60 transition-opacity uppercase ${location.pathname === item.path ? 'text-white font-medium' : 'text-white/60'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto pt-6">
                <div className="flex justify-start mb-6">
                  <div className="flex items-center border border-white/10 rounded-full px-4 py-2 space-x-4 bg-zinc-900/50">
                    <button 
                      onClick={() => setLanguage('es')}
                      className={`text-[10px] uppercase tracking-tighter transition-all ${language === 'es' ? 'opacity-100 font-bold' : 'opacity-30 hover:opacity-100'}`}
                    >
                      ES
                    </button>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`text-[10px] uppercase tracking-tighter transition-all ${language === 'en' ? 'opacity-100 font-bold' : 'opacity-30 hover:opacity-100'}`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                   <p className="text-[10px] uppercase tracking-wider opacity-30 font-display">JVV Agency &copy; 2026</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
