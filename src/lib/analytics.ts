/** Analytics Matomo helpers for Klaus Terra landing (site 21). */

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

export function trackEvent(category: string, action: string, name?: string): void {
  if (typeof window === 'undefined' || !Array.isArray(window._paq)) return;
  if (name !== undefined) {
    window._paq.push(['trackEvent', category, action, name]);
  } else {
    window._paq.push(['trackEvent', category, action]);
  }
}

export const analytics = {
  whatsappClick: () => trackEvent('cta', 'whatsapp_click', 'floating'),
  productCta: (product: string) => trackEvent('cta', 'product_click', product),
  contactClick: (channel: string) => trackEvent('cta', 'contact_click', channel),
};
