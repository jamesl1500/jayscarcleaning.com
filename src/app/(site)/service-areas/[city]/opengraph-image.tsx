import { ogImage, ogSize } from '@/lib/og';
import { getServiceArea, serviceAreas } from '@/lib/site';

export const alt = 'Clean Lab Detailing service area';
export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const area = getServiceArea((await params).city);
  return ogImage({
    eyebrow: 'Mobile Car Detailing',
    title: `${area?.name ?? 'Your Town'}, Ohio`,
    subtitle: 'Hand wash, interior & full details — in your driveway',
  });
}
