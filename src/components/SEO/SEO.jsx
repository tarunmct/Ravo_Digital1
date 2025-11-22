import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'Ravo Digitals - Empowering Brands Digitally',
  description = 'Transform your business with innovative digital solutions. We specialize in Digital Marketing, IT Services, and Event Management to drive growth and success.',
  keywords = 'digital marketing, IT services, event management, web development, SEO, social media marketing, Ravo Digitals',
  ogImage = '/og-image.jpg',
  ogType = 'website'
}) => {
  const location = useLocation();
  const currentUrl = `https://ravodigitals.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
  }, [title, description, keywords, ogImage, ogType, currentUrl]);

  return null;
};

export default SEO;
