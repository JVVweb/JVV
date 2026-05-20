import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
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
    { name: t('nav.clients'), path: '/clients' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-black py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          JVV<span className="opacity-40">.</span>
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
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-black z-40 md:hidden flex flex-col p-12 pt-32"
            >
              <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="text-4xl font-serif tracking-tighter hover:opacity-60 transition-opacity"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto">
                <div className="flex space-x-8 mb-12">
                  <button 
                    onClick={() => setLanguage('es')}
                    className={`text-sm uppercase tracking-widest ${language === 'es' ? 'opacity-100 font-bold border-b border-white' : 'opacity-30'}`}
                  >
                    Español
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`text-sm uppercase tracking-widest ${language === 'en' ? 'opacity-100 font-bold border-b border-white' : 'opacity-30'}`}
                  >
                    English
                  </button>
                </div>
                <div className="pt-6 border-t border-white/5">
                   <p className="text-xs uppercase tracking-tight opacity-20">JVV Agency &copy; 2026</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
