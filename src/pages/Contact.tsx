import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Contact() {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selectedSubject =
      subject || (language === 'es' ? 'Representación de Talento' : 'Talent Scouting');
    const bodyLines = [
      `${language === 'es' ? 'Nombre' : 'Name'}: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ];
    const mailtoUrl = `mailto:info@jvv.com.es?subject=${encodeURIComponent(
      `[JVV Web] ${selectedSubject} — ${name}`
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO 
        title={t('nav.contact')}
        description="Get in touch with JVV Agency in Madrid, Barcelona or Mallorca. Contact us for booking models, actors, artists, or for luxury fashion event planning inquiries."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter">{t('nav.contact')}</h1>
          <div className="space-y-12">
            <div>
              <h4 className="text-xs uppercase tracking-wider opacity-30 mb-4 font-normal" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {t('contact.inquiries')}
              </h4>
              <a href="mailto:info@jvv.com.es" className="block text-2xl font-light hover:opacity-60 transition-opacity w-fit">
                info@jvv.com.es
              </a>
              <a href="tel:+34606065057" className="block text-xl font-light opacity-40 hover:opacity-80 transition-opacity w-fit mt-1">
                +34 606 06 50 57
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-xs uppercase tracking-wider opacity-30 mb-2 font-normal" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {t('contact.follow')}
              </h4>
              <a 
                href="https://www.instagram.com/jvv_pr?igsh=bW1hcTZ6ajhsYWVz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-light hover:opacity-60 transition-opacity w-fit"
              >
                @jvv_pr
              </a>
              <a 
                href="https://www.linkedin.com/company/jvv-representaci%C3%B3n-y-eventos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-light hover:opacity-60 transition-opacity w-fit"
              >
                JVV Representación y Eventos (LinkedIn)
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0a0a0a] p-6 md:p-12 border border-white/5"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.name')}</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.email')}</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.subject')}</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg appearance-none cursor-pointer"
              >
                <option className="bg-brand-bg" value={language === 'es' ? 'Representación de Talento' : 'Talent Scouting'}>{language === 'es' ? 'Representación de Talento' : 'Talent Scouting'}</option>
                <option className="bg-brand-bg" value={language === 'es' ? 'Solicitud de Reserva / Booking' : 'Booking Inquiry'}>{language === 'es' ? 'Solicitud de Reserva / Booking' : 'Booking Inquiry'}</option>
                <option className="bg-brand-bg" value={language === 'es' ? 'Producción de Eventos' : 'Events Production'}>{language === 'es' ? 'Producción de Eventos' : 'Events Production'}</option>
                <option className="bg-brand-bg" value={language === 'es' ? 'Convocatoria' : 'Guest Management'}>{language === 'es' ? 'Convocatoria' : 'Guest Management'}</option>
                <option className="bg-brand-bg" value={language === 'es' ? 'Prensa / Medios' : 'Press / Media'}>{language === 'es' ? 'Prensa / Medios' : 'Press / Media'}</option>
                <option className="bg-brand-bg" value={language === 'es' ? 'Otro' : 'Other'}>{language === 'es' ? 'Otro' : 'Other'}</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-tight opacity-40">{t('contact.form.message')}</label>
              <textarea 
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                placeholder="..."
              />
            </div>
            <p className="text-[11px] opacity-40 font-light leading-relaxed">
              {language === 'es' ? (
                <>
                  Al enviar este formulario acepta nuestra{' '}
                  <Link to="/privacy" className="underline hover:opacity-100">
                    Política de Privacidad
                  </Link>
                  .
                </>
              ) : (
                <>
                  By submitting this form you agree to our{' '}
                  <Link to="/privacy" className="underline hover:opacity-100">
                    Privacy Policy
                  </Link>
                  .
                </>
              )}
            </p>
            <button type="submit" className="w-full flex items-center justify-center space-x-4 bg-white text-brand-bg py-5 rounded-none uppercase tracking-tight font-medium hover:bg-white/90 transition-all cursor-pointer">
              <span>{submitted ? (language === 'es' ? 'Abriendo cliente de correo...' : 'Opening email client...') : t('contact.form.send')}</span>
              {submitted ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
