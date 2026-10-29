import BeforeAfter from '@/components/BeforeAfter';
import { Container, SectionHeading } from '@/components/ui';
import { gallery, getPackage } from '@/lib/site';

// Before/after section. Renders nothing until photos are added to site.ts.
// Pass a town to show only that town's jobs (falls back to all of them).
export default function Gallery({ town, dark = false }: { town?: string; dark?: boolean }) {
  const local = town ? gallery.filter((g) => g.town === town) : [];
  const list = (local.length ? local : gallery).slice(0, 4);
  if (list.length === 0) return null;

  return (
    <section className={`py-16 sm:py-24 ${dark ? 'bg-navy-900' : 'bg-white'}`}>
      <Container>
        <SectionHeading
          dark={dark}
          eyebrow="Before & After"
          title={local.length ? `Recent work in ${town}` : 'Recent work around the lake'}
          intro="Drag the slider to compare. Every photo is a real job, done by hand in the customer's driveway."
        />
        <ul className="grid gap-8 md:grid-cols-2">
          {list.map((g) => {
            const pkg = getPackage(g.packageSlug);
            const label = `${g.town} ${g.vehicle}${pkg ? ` — ${pkg.name}` : ''}`;
            return (
              <li key={g.after}>
                <BeforeAfter before={g.before} after={g.after} alt={label} />
                <p className={`mt-3 text-sm font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{label}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
