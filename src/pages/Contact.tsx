import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title={t('nav.contact')}
        description="Get in touch with JVV Agency in Madrid or Barcelona. Contact us for booking models, actors, artists, or for luxury fashion event planning inquiries."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter">{t('nav.contact')}</h1>
          <div className="space-y-12">
            <div>
              <h4 className="text-xs uppercase tracking-tight opacity-30 mb-4">{t('contact.inquiries')}</h4>
              <p className="text-2xl font-light">hello@jvv.agency</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-tight opacity-30 mb-4">{t('contact.offices')}</h4>
              <p className="text-xl font-light mb-2">Calle de Serrano, Madrid</p>
              <p className="text-xl font-light">Passeig de Gràcia, Barcelona</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-tight opacity-30 mb-4">{t('contact.follow')}</h4>
              <p className="text-xl font-light">@jvv.agency</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0a0a0a] p-6 md:p-12 border border-white/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.name')}</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.email')}</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.subject')}</label>
              <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg appearance-none cursor-pointer">
                <option className="bg-brand-bg">Talent Scouting</option>
                <option className="bg-brand-bg">Booking Inquiry</option>
                <option className="bg-brand-bg">Press / Media</option>
                <option className="bg-brand-bg">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.message')}</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                placeholder="..."
              />
            </div>
            <button className="w-full flex items-center justify-center space-x-4 bg-white text-brand-bg py-5 rounded-none uppercase tracking-tight font-medium hover:bg-white/90 transition-all">
              <span>{t('contact.form.send')}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
