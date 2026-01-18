import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'PANOVALIFE - Премиальный фитнес-клуб в Хабаровске | 5000 м² пространства',
  description = 'PANOVALIFE - премиальный фитнес-клуб в Хабаровске. Бассейн 24м, Life Fitness и Hammer, SPA зона, 50+ направлений тренировок. Запишитесь на тест-драйв прямо сейчас!',
  keywords = 'фитнес клуб, тренажерный зал, бассейн, спортзал, Хабаровск, групповые программы, йога, пилатес, SPA, премиум фитнес',
  ogImage = 'https://panovalife.ru/logo.svg',
  canonical
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    
    const currentUrl = canonical || window.location.href.split('#')[0];
    updateMetaTag('og:url', currentUrl, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, 'property');
    updateMetaTag('twitter:description', description, 'property');
    updateMetaTag('twitter:image', ogImage, 'property');
    updateMetaTag('twitter:url', currentUrl, 'property');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEOHead;
