import { site } from './site';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Same as Google's snippet: push the raw `arguments` object onto dataLayer.
// gtag.js processes the queue whenever it loads, so early calls aren't lost.
// The rest parameter only types the call sites; the body uses `arguments`.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

// GA4 event.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gtag('event', name, params);
}

// Google Ads conversion. No-op until the conversion's label is set in site.ts.
export function trackAdsConversion(
  kind: keyof typeof site.adsConversionLabels,
  params: { value?: number } = {},
) {
  const label = site.adsConversionLabels[kind];
  if (!label) return;
  gtag('event', 'conversion', { send_to: `${site.adsId}/${label}`, currency: 'USD', ...params });
}
