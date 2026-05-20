import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const CLIENTS = [
  'VOGUE', 'MANGO', 'ZARA', 'LOEWE', 'ADIDAS', 'NIKE', 'BERSHKA', 'PULL&BEAR',
  'STRADIVARIUS', 'MASSIMO DUTTI', 'EL CORTE INGLÉS', 'SPRINGFIELD', 'WOMEN\'S SECRET',
  'CORTÉFIEL', 'PEDRO DEL HIERRO', 'DESIGUAL', 'CAMPER', 'TOUS', 'LOUS VUITTON', 'DIOR'
];

export default function Clients() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32">
      <SEO 
        title={t('clients.title')}
        description={`${t('clients.title')}: ${t('clients.subtitle')} Prestigious global brands represented or partnered with JVV Agency.`}
      />
      <header className="px-6 max-w-5xl mx-auto text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[10vw] font-serif mb-8 tracking-tighter"
        >
          {t('clients.title')}
        </motion.h1>
        <p className="text-xl font-light opacity-50 uppercase tracking-[0.2em]">
          {t('clients.subtitle')}
        </p>
      </header>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-24">
          {CLIENTS.map((client, idx) => (
            <motion.div 
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="flex items-center justify-center border-b border-white/5 pb-12"
            >
              <span className="text-2xl md:text-3xl font-serif tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default uppercase">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="mt-40 border-t border-white/5 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="text-xs uppercase tracking-widest opacity-30 mb-8">Work with us</h3>
           <p className="text-3xl md:text-5xl font-serif tracking-tighter mb-12 opacity-80 leading-tight">
             Interested in high-end representation or event production?
           </p>
           <a 
             href="/contact" 
             className="inline-block border border-white/20 px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
           >
             Get in touch
           </a>
        </div>
      </section>
    </div>
  );
}
