import { ogImage, ogSize } from '@/lib/og';

export const alt = 'Clean Lab Detailing — mobile car detailing in Sheffield Lake, Ohio';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage({
    eyebrow: 'Mobile Car Detailing',
    title: 'Sheffield Lake & Lorain County',
    subtitle: 'Full Detail from $120 · Interior from $75 · Hand Wash from $50 — in your driveway',
  });
}
