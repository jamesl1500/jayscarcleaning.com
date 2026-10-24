import { ogImage, ogSize } from '@/lib/og';
import { getPackage, packages, usd } from '@/lib/site';

export const alt = 'Clean Lab Detailing package';
export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const pkg = getPackage((await params).slug);
  return ogImage({
    eyebrow: `Mobile Detailing · ${pkg ? usd(pkg.price) : ''}`,
    title: pkg?.name ?? 'Detailing Package',
    subtitle: pkg?.tagline ?? '',
  });
}
