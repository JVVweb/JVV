import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ title, description, ogType = 'website', ogImage }: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Title
    const baseTitle = 'JVV | Talent Representation & Fashion Events Agency';
    const finalTitle = title ? `${title} | JVV` : baseTitle;
    document.title = finalTitle;

    // Helper function to update/create meta tags
    const updateMetaTag = (name: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // 2. Meta Description
    const defaultDesc = language === 'es'
      ? 'JVV es una agencia premium de representación de modelos, actores, artistas y producción de eventos exclusivos en Madrid y Barcelona, fundada en octubre de 2015 por Jesús Vázquez Viedma.'
      : 'JVV is a premium talent agency representing models, actors, visual artists, and producing high-end exclusive events in Madrid and Barcelona, founded in October 2015 by Jesús Vázquez Viedma.';
    
    const finalDesc = description || defaultDesc;
    updateMetaTag('description', finalDesc);
    updateMetaTag('og:description', finalDesc, true);
    updateMetaTag('twitter:description', finalDesc);

    // 3. Open Graph & Twitter Titles
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('twitter:title', finalTitle);

    // 4. OG Type
    updateMetaTag('og:type', ogType, true);

    // 5. OG Image
    const defaultImage = 'https://images.unsplash.com/photo-1507679799987-c73774573b2a?auto=format&fit=crop&q=80&w=1200';
    const finalImage = ogImage || defaultImage;
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('twitter:image', finalImage);

    // 6. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

  }, [title, description, ogType, ogImage, language]);

  return null;
}
