import { ogImage, ogSize } from '@/lib/og';

export const alt = 'Clean Lab Detailing — mobile car detailing in Sheffield Lake, Ohio';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage({
    eyebrow: 'Mobile Car Detailing',
    title: 'Sheffield Lake & Lorain County',
    subtitle: 'Exterior $50 · Interior $75 · Full Detail $120 — in your driveway',
  });
}
