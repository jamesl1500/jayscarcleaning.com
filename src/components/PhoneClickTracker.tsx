'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

// GA4 doesn't record tel: link taps on its own. One delegated listener covers
// every phone link on the site (header, bottom bar, CTAs, footer).
export default function PhoneClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      sendGAEvent('event', 'click_to_call', {
        link_url: link.getAttribute('href'),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
