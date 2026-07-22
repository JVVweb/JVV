import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.talent': 'Talento',
    'nav.events': 'Eventos',
    'nav.projects': 'Proyectos',
    'nav.hospitality': 'Hospitality',
    'nav.clients': 'Clientes',
    'nav.about': 'Agencia',
    'nav.contact': 'Contacto',
    'hero.title': 'La agencia detrás del talento extraordinario.',
    'hero.subtitle': 'Representación de talentos & eventos con una visión editorial moderna.',
    'home.about.title': 'Sobre la Agencia',
    'home.about.text': 'Fundada en octubre de 2015 por Jesús Vázquez Viedma, JVV es el puente entre la visión creativa y la representación icónica en España y más allá.',
    'home.about.cta': 'Nuestra Agencia',
    'hospitality.title': 'Hospitality',
    'hospitality.subtitle': 'Consultoría y desarrollo estratégico para hoteles de lujo y proyectos boutique.',
    'events.title': 'Eventos',
    'events.subtitle': 'Producimos eventos en cualquier parte del mundo y desarrollamos listas de invitados adaptadas a cualquier tipo de acción.',
    'clients.title': 'Clientes',
    'clients.subtitle': 'Marcas que confían en nuestra visión y excelencia.',
    'talent.all': 'Todo el Talento',
    'talent.emprendedoras': 'Emprendedoras',
    'talent.djs': 'DJs',
    'talent.cantantes': 'Cantantes / Grupos musicales',
    'talent.actores': 'Actores / Actrices',
    'talent.comunicadores': 'Comunicadores/as',
    'talent.fotografos': 'Fotógrafos / Videógrafos',
    'talent.directores': 'Directores artísticos',
    'talent.pintoras': 'Pintoras',
    'talent.deportistas': 'Deportistas',
    'talent.view': 'Ver Portafolio',
    'talent.back': 'Volver al Roster',
    'talent.booking': 'Solicitar Reserva',
    'talent.portfolio': 'Selección de Portafolio',
    'talent.works': 'Obras Seleccionadas',
    'talent.specs': 'Especificaciones',
    'projects.title': 'Proyectos Recientes',
    'projects.subtitle': 'Explorando los límites de la narrativa visual a través de la representación y eventos de alto nivel.',
    'about.since': 'Desde 2015',
    'about.hero': 'Redefiniendo la representación y los eventos en la era moderna.',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.p1': 'JVV fue fundada en octubre de 2015 por Jesús Vázquez Viedma tras más de quince años de experiencia profesional en la industria de la moda.',
    'about.vision.p2': 'Licenciado en Derecho por la Universidad Carlos III, donde continuó su carrera como profesor del Máster Vogue-Carlos III en Comunicación de Moda y Belleza desde casi sus inicios, antes de continuar su carrera profesional en el extranjero.',
    'about.vision.p3': 'Se estableció durante diez años en Milán, donde trabajó como director comercial para marcas como Miu Miu, Trussardi o Marc Jacobs. También residió en Londres, donde trabajó para Burberry, hasta que terminó regresando a España para dirigir la marca Stella McCartney a nivel nacional.',
    'about.vision.p4': 'Tras esta etapa decidió dar el salto y crear JVV, una agencia que conjugara su experiencia y su pasión. Un proyecto personal que se ocupa de gestionar la carrera de artistas de diferentes ámbitos y marcada personalidad, producir eventos que aporten a todas las partes y ser departamento de prensa de marcas con gran proyección internacional, dándole siempre un espacio especial a aquellas “Made in Spain”.',
    'about.vision.p5': 'Ha dirigido por cinco años así como impartido varias asignaturas en el Máster bilingüe de Comunicación, Marketing y Eventos de Moda en LCI Barcelona (Felicidad Duce). Actualmente desarrolla su ámbito de al docencia en IED Madrid y Barcelona así como en otros centros y escuelas.',
    'about.founder.title': 'Jesús Vázquez Viedma',
    'about.founder.role': 'Fundador',
    'about.services.title': 'Nuestros Servicios',
    'about.services.s1.title': 'Representación',
    'about.services.s1.desc': 'Gestión publicitaria y de prensa para artistas visuales y escénicos.',
    'about.services.s2.title': 'Convocatoria y producción de eventos',
    'about.services.s2.desc': 'Creación de experiencias de marca únicas.',
    'about.services.s3.title': 'Comunicación',
    'about.services.s3.desc': 'Gabinete de prensa y gestión para marcas, hoteles y restaurantes.',
    'contact.inquiries': 'Consultas',
    'contact.offices': 'Oficinas',
    'contact.follow': 'Síguenos',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'footer.rights': '© 2026 jvv Agency. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  en: {
    'nav.home': 'Home',
    'nav.talent': 'Talent',
    'nav.events': 'Events',
    'nav.projects': 'Projects',
    'nav.hospitality': 'Hospitality',
    'nav.clients': 'Clients',
    'nav.about': 'Agency',
    'nav.contact': 'Contact',
    'hero.title': 'The agency behind extraordinary talent.',
    'hero.subtitle': 'Talent representation & events with a modern editorial vision.',
    'home.about.title': 'About the Agency',
    'home.about.text': 'Founded in October 2015 by Jesús Vázquez Viedma, JVV is the bridge between creative vision and iconic representation in Spain and beyond.',
    'home.about.cta': 'Our Agency',
    'hospitality.title': 'Hospitality',
    'hospitality.subtitle': 'Strategic consulting and development for luxury hotels and boutique projects.',
    'events.title': 'Events',
    'events.subtitle': 'We produce events in any part of the world and develop guest lists adapted to any kind of action.',
    'clients.title': 'Clients',
    'clients.subtitle': 'Brands that trust our vision and excellence.',
    'talent.all': 'All Talent',
    'talent.emprendedoras': 'Entrepreneurs',
    'talent.djs': 'DJs',
    'talent.cantantes': 'Singers / Music Groups',
    'talent.actores': 'Actors / Actresses',
    'talent.comunicadores': 'Communicators',
    'talent.fotografos': 'Photographers / Videographers',
    'talent.directores': 'Art Directors',
    'talent.pintoras': 'Painters',
    'talent.deportistas': 'Athletes',
    'talent.view': 'View Portfolio',
    'talent.back': 'Back to Roster',
    'talent.booking': 'Request Booking',
    'talent.portfolio': 'Portfolio Selection',
    'talent.works': 'Selected Works',
    'talent.specs': 'Specifications',
    'projects.title': 'Recent Projects',
    'projects.subtitle': 'Exploring the boundaries of visual storytelling through high-end representation and events.',
    'about.since': 'Since 2015',
    'about.hero': 'Redefining representation and events in the modern age.',
    'about.vision.title': 'Our Vision',
    'about.vision.p1': 'JVV was founded in October 2015 by Jesús Vázquez Viedma after more than fifteen years of professional experience in the fashion industry.',
    'about.vision.p2': 'A law graduate from Carlos III University, he also served as a professor in the Vogue-Carlos III Master\'s in Fashion and Beauty Communication almost from its beginning before moving abroad.',
    'about.vision.p3': 'He spent ten years in Milan working as a commercial director for brands like Miu Miu, Trussardi, and Marc Jacobs. He also lived in London working for Burberry, eventually returning to Spain to lead the Stella McCartney brand nationwide.',
    'about.vision.p4': 'After this stage, he decided to take the leap and create JVV, an agency that combined his experience and his passion. A personal project that manages the careers of artists from different fields with a strong personality, produces events that contribute to all parties, and acts as a press department for brands with great international projection, always giving a special space to those "Made in Spain".',
    'about.vision.p5': 'He has directed for five years as well as taught several subjects in the bilingual Master\'s in Fashion Communication, Marketing and Events at LCI Barcelona (Felicidad Duce). He currently develops his teaching field at IED Madrid and Barcelona as well as other centers and schools.',
    'about.founder.title': 'Jesús Vázquez Viedma',
    'about.founder.role': 'Founder',
    'about.services.title': 'Our Services',
    'about.services.s1.title': 'Representation',
    'about.services.s1.desc': 'Advertising and press management for visual and performing artists.',
    'about.services.s2.title': 'Event Invitation & Production',
    'about.services.s2.desc': 'Creation of unique brand experiences.',
    'about.services.s3.title': 'Communication',
    'about.services.s3.desc': 'Press office and management for brands, hotels, and restaurants.',
    'contact.inquiries': 'Inquiries',
    'contact.offices': 'Offices',
    'contact.follow': 'Follow',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'footer.rights': '© 2026 jvv Agency. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('jvv-lang') as Language;
    return saved || 'es';
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('jvv-lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
