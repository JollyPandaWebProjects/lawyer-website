import { useEffect } from 'react';
import seo from '../../data/seo.json';
import theme from '../../data/theme.json';

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Applies seo.json content to document head at runtime. index.html already
 * ships with sane defaults for first paint / crawlers that don't execute JS;
 * this component keeps the two in sync as seo.json changes.
 */
export default function SEO() {
  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = theme.typography.documentLanguage;
    document.documentElement.dir = theme.typography.direction;

    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', seo.keywords?.join(', '));
    setLinkTag('canonical', seo.canonicalUrl);

    setMetaTag('property', 'og:type', seo.openGraph?.type);
    setMetaTag('property', 'og:title', seo.openGraph?.title);
    setMetaTag('property', 'og:description', seo.openGraph?.description);
    setMetaTag('property', 'og:image', seo.openGraph?.image);
    setMetaTag('property', 'og:site_name', seo.siteName);
    setMetaTag('property', 'og:locale', seo.locale);
    setMetaTag('property', 'og:url', seo.canonicalUrl);

    setMetaTag('name', 'twitter:card', seo.twitter?.card);
    setMetaTag('name', 'twitter:title', seo.twitter?.title);
    setMetaTag('name', 'twitter:description', seo.twitter?.description);
    setMetaTag('name', 'twitter:image', seo.twitter?.image);

    let ldScript = document.getElementById('jsonld-schema');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'jsonld-schema';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(seo.jsonLd);
  }, []);

  return null;
}
