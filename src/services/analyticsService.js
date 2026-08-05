/**
 * Lightweight analytics hook point. Kept dependency-free for MVP.
 * If Google Analytics / GTM is added later, initialize it here based
 * on VITE_GA_MEASUREMENT_ID so no component code needs to change.
 */
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
