import Script from 'next/script';
import { site } from '@/lib/site';

// Google tag (gtag.js): loads the library once and configures every Google
// product on it — GA4 analytics and Google Ads conversions/remarketing.
export default function GoogleTag() {
  const ids = [site.gaId, site.adsId];
  return (
    <>
      <Script id="google-tag-init">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join('\n')}`}
      </Script>
      <Script id="google-tag" src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} />
    </>
  );
}
