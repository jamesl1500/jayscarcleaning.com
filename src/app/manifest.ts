import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: 'Clean Lab',
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a2230',
    theme_color: '#0a2230',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
