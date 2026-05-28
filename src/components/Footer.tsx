import { useLanguage } from '../context/LanguageContext';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-brand-bg pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="mb-6 flex items-center">
              <img 
                src="/jvv logo white new.png" 
                alt="JVV Agency" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 max-w-sm font-light text-sm">
              {language === 'es' 
                ? 'Representando la vanguardia del talento y producción en España desde 2015.' 
                : 'Representing the vanguard of talent & production in Spain since 2015.'}
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 font-sans font-bold opacity-30 text-white">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="mailto:info@jvv.com.es" className="hover:opacity-60 transition-opacity">info@jvv.com.es</a></li>
              <li className="opacity-40">Madrid, Barcelona & Mallorca</li>
              <li className="opacity-40">(+34 ) 618 785 351</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 font-sans font-bold opacity-30 text-white">
              {language === 'es' ? 'Redes' : 'Social'}
            </h4>
            <div className="flex space-x-6">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest opacity-30">
          <p className="text-center md:text-left w-full md:w-auto">{t('footer.rights')}</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
