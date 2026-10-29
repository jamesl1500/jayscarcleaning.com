'use client';

import { useEffect } from 'react';
import { trackAdsConversion, trackEvent } from '@/lib/gtag';

// Google doesn't record tel: link taps on its own. One delegated listener
// covers every phone link on the site (header, bottom bar, CTAs, footer).
// Links to outside checkouts (Square booking, gift cards) carry a data-track
// attribute naming the GA4 event to send instead.
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const tracked = target?.closest?.('a[data-track]');
      if (tracked) {
        trackEvent(tracked.getAttribute('data-track') ?? 'outbound_click', {
          link_url: tracked.getAttribute('href'),
          page_path: window.location.pathname,
        });
        return;
      }
      const link = target?.closest?.('a[href^="tel:"]');
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
