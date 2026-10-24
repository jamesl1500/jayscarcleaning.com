import type { Metadata } from 'next';
import { site } from './site';

// Builds per-page metadata with a self-referencing canonical and matching
// Open Graph / Twitter tags. `openGraph` is shallow-merged by Next.js, so each
// page must set the full object or it inherits the parent's og:url.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
