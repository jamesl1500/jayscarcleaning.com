'use client';

import { useEffect } from 'react';
import { trackAdsConversion, trackEvent } from '@/lib/gtag';

// Google doesn't record tel: link taps on its own. One delegated listener
// covers every phone link on the site (header, bottom bar, CTAs, footer).
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      trackEvent('click_to_call', {
        link_url: link.getAttribute('href'),
        page_path: window.location.pathname,
      });
      trackAdsConversion('call');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
