import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Legal() {
  const { language } = useLanguage();
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
      <SEO
        title={
          isPrivacy
            ? language === 'es'
              ? 'Política de Privacidad'
              : 'Privacy Policy'
            : language === 'es'
              ? 'Aviso Legal y Términos de Uso'
              : 'Legal Notice & Terms of Use'
        }
        description={
          language === 'es'
            ? 'Información legal, política de privacidad y aviso sobre propiedad intelectual y marcas de terceros de JVV Agency.'
            : 'Legal notice, privacy policy, and third-party intellectual property & trademark disclaimer for JVV Agency.'
        }
      />

      {/* Switcher tabs between Legal Notice / Terms and Privacy Policy */}
      <div className="flex space-x-8 border-b border-white/10 pb-6 mb-16">
        <Link
          to="/terms"
          className={`text-xs uppercase tracking-widest transition-opacity ${
            !isPrivacy ? 'opacity-100 font-medium border-b border-white pb-2' : 'opacity-40 hover:opacity-80'
          }`}
        >
          {language === 'es' ? 'Aviso Legal y Términos' : 'Legal Notice & Terms'}
        </Link>
        <Link
          to="/privacy"
          className={`text-xs uppercase tracking-widest transition-opacity ${
            isPrivacy ? 'opacity-100 font-medium border-b border-white pb-2' : 'opacity-40 hover:opacity-80'
          }`}
        >
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </Link>
      </div>

      {isPrivacy ? (
        <motion.div
          key="privacy"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10 text-white/75 font-light leading-relaxed"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-8">
            {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>

          {language === 'es' ? (
            <>
              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">1. Responsable del Tratamiento</h2>
                <p>
                  En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que los datos personales facilitados a través de este sitio web son tratados por <strong>JVV Representación y Eventos</strong> (en adelante, <strong>JVV</strong>), con correo electrónico de contacto <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> y teléfono <span className="text-white">+34 606 06 50 57</span> (Madrid, Barcelona y Mallorca, España).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">2. Finalidad y Legitimación del Tratamiento</h2>
                <p>
                  Los datos personales que el usuario facilite voluntariamente mediante correo electrónico o a través del formulario de contacto (nombre, dirección de correo electrónico, asunto y mensaje) serán tratados exclusivamente con la finalidad de atender y gestionar sus consultas profesionales, solicitudes de booking, representación de talento, producción de eventos o comunicación.
                </p>
                <p>
                  La base jurídica que legitima el tratamiento es el consentimiento expreso del interesado al remitir su consulta (art. 6.1.a RGPD), así como la aplicación de medidas precontractuales a petición del propio interesado (art. 6.1.b RGPD).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">3. Conservación y Cesión de Datos</h2>
                <p>
                  Los datos se conservarán únicamente durante el tiempo necesario para atender la solicitud planteada y cumplir con las obligaciones legales aplicables. JVV no cederá ni venderá datos personales a terceros, salvo obligación legal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">4. Contenido Incrustado y Enlaces a Terceros</h2>
                <p>
                  Algunas secciones de este portfolio incluyen vídeos incrustados desde plataformas externas (como YouTube o Vimeo) y enlaces a redes sociales o sitios web de terceros (Instagram, LinkedIn, hoteles y marcas colaboradoras). Dichos sitios externos se rigen por sus propias políticas de privacidad y cookies ajenas al control de JVV.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">5. Derechos del Usuario</h2>
                <p>
                  El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando una comunicación escrita a <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a>. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">1. Data Controller</h2>
                <p>
                  In accordance with Regulation (EU) 2016/679 (General Data Protection Regulation – GDPR) and Spanish Organic Law 3/2018 (LOPDGDD), personal data provided through this website is processed by <strong>JVV Representación y Eventos</strong> (hereinafter, <strong>JVV</strong>), reachable at <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> and <span className="text-white">+34 606 06 50 57</span> (operating in Madrid, Barcelona &amp; Mallorca, Spain).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">2. Purpose &amp; Legal Basis</h2>
                <p>
                  Any personal information voluntarily submitted via email or through our contact form (name, email address, subject, and message) is used strictly to respond to professional inquiries regarding talent representation, booking requests, event production, hospitality, or press/PR.
                </p>
                <p>
                  The legal basis for processing is your explicit consent when submitting an inquiry (Art. 6.1.a GDPR) and pre-contractual measures requested by the user (Art. 6.1.b GDPR).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">3. Data Retention &amp; Disclosure</h2>
                <p>
                  Personal data is retained only for as long as necessary to fulfill the purpose of your inquiry and comply with applicable legal obligations. JVV does not sell, rent, or transfer personal data to third parties except where required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">4. Embedded Media &amp; External Links</h2>
                <p>
                  Certain portfolio pages feature embedded video players (such as YouTube or Vimeo) and external links to social networks or partner websites (Instagram, LinkedIn, hospitality venues, and client brands). External websites are governed by their own respective privacy and cookie policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">5. Your Rights</h2>
                <p>
                  You may exercise your rights of access, rectification, erasure, restriction, objection, and data portability at any time by contacting <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a>. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).
                </p>
              </section>
            </>
          )}
        </motion.div>
      ) : (
        <motion.div
          key="terms"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10 text-white/75 font-light leading-relaxed"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-8">
            {language === 'es' ? 'Aviso Legal y Términos de Uso' : 'Legal Notice & Terms of Use'}
          </h1>

          {language === 'es' ? (
            <>
              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">1. Información General (LSSI-CE)</h2>
                <p>
                  El presente sitio web tiene carácter informativo y de portfolio profesional de <strong>JVV Representación y Eventos</strong> (fundada por Jesús Vázquez Viedma), agencia de representación de talento, comunicación, producción de eventos y hospitalidad con presencia en Madrid, Barcelona y Mallorca. Contacto oficial: <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> | Teléfono: <span className="text-white">+34 606 06 50 57</span>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">2. Marcas de Terceros y Uso de Portfolio (Aviso de Propiedad Industrial)</h2>
                <p>
                  Todas las denominaciones comerciales, nombres de marca, logotipos, cabeceras editoriales, fotogramas y signos distintivos de terceros que aparecen en las secciones de <em>Marcas</em>, <em>Alianzas</em>, <em>Proyectos</em>, <em>Eventos</em>, <em>Comunicación</em>, <em>Hospitalidad</em> y perfiles de <em>Talento</em> son propiedad exclusiva de sus respectivos titulares legítimos.
                </p>
                <p>
                  Su inclusión en este sitio web se realiza al amparo del uso descriptivo e informativo de portfolio profesional (<em>nominative fair use</em>), con el único propósito de documentar e ilustrar colaboraciones reales, producciones de eventos, apariciones en medios de comunicación, campañas publicitarias y trabajos realizados por JVV o por los talentos representados por la agencia. En ningún caso su visualización implica reclamación de titularidad sobre dichas marcas ni comercialización de productos de terceros.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">3. Derechos de Imagen y Propiedad Intelectual</h2>
                <p>
                  El diseño, estructura, código fuente y textos originales de este sitio web son titularidad de JVV. Las fotografías editoriales, vídeos de campañas y retratos de los talentos se muestran con fines estrictamente demostrativos de catálogo y representación artística. Queda prohibida la reproducción, distribución o extracción no autorizada de las imágenes de los representados para usos comerciales o de entrenamiento de sistemas automatizados sin el consentimiento expreso de JVV o de los titulares de los derechos.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">4. Contacto para Titulares de Derechos</h2>
                <p>
                  Si usted es titular de derechos de propiedad intelectual o industrial sobre algún material referenciado en este portfolio y desea solicitar una actualización de créditos o su retirada, puede escribir directamente a <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> y atenderemos su solicitud de forma inmediata.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">1. General Information</h2>
                <p>
                  This website serves as the official informational and professional portfolio platform of <strong>JVV Representación y Eventos</strong> (founded by Jesús Vázquez Viedma), a talent representation, PR/communications, event production, and hospitality agency operating in Madrid, Barcelona, and Mallorca. Official contact: <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> | Phone: <span className="text-white">+34 606 06 50 57</span>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">2. Third-Party Trademarks &amp; Portfolio Disclaimer (Nominative Fair Use)</h2>
                <p>
                  All third-party trade names, brand names, logos, publication mastheads, stills, and distinctive marks displayed across the <em>Brands</em>, <em>Alliances</em>, <em>Projects</em>, <em>Events</em>, <em>PR / Communications</em>, <em>Hospitality</em>, and <em>Talent</em> sections are the exclusive property of their respective owners.
                </p>
                <p>
                  Their inclusion on this website constitutes descriptive portfolio and editorial reference (<em>nominative fair use</em>) solely to document and illustrate genuine past collaborations, event productions, media appearances, advertising campaigns, and professional works carried out by JVV or by talent represented by the agency. JVV claims no ownership over third-party trademarks and does not sell third-party merchandise.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">3. Image Rights &amp; Intellectual Property</h2>
                <p>
                  The website design, layout, source code, and original copy are owned by JVV. Editorial photography, campaign videos, and talent portraits are displayed strictly for agency roster and portfolio showcase purposes. Unauthorized reproduction, redistribution, scraping, or commercial exploitation of talent imagery without prior written consent from JVV or the respective rights holders is strictly prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-medium text-white uppercase tracking-wider">4. Rights Holder Inquiries</h2>
                <p>
                  If you are a copyright or trademark owner of any work referenced in this portfolio and wish to request a credit adjustment or removal, please contact <a href="mailto:info@jvv.com.es" className="underline hover:text-white">info@jvv.com.es</a> and we will address your request promptly.
                </p>
              </section>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
