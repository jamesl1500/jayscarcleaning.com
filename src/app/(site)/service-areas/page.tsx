import JsonLd from '@/components/JsonLd';
import { AreaGrid, Container, CtaBanner, PageHero, SectionHeading, WhatYouNeed } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, graph } from '@/lib/schema';
import { areaNames, serviceAreas, site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Service Areas — Mobile Detailing Near Sheffield Lake, OH',
  description: `Mobile car detailing in ${areaNames()}. Based in Sheffield Lake, Ohio — we come to your driveway.`,
  path: '/service-areas',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/service-areas' },
];

const byCounty = Object.entries(
  serviceAreas.reduce<Record<string, string[]>>((acc, a) => {
    (acc[a.county] ??= []).push(a.name);
    return acc;
  }, {}),
);

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        breadcrumbs={crumbs}
        eyebrow="Service Areas"
        title={
          <>
            Mobile detailing around <span className="text-teal-300">Sheffield Lake</span>
          </>
        }
        intro="We're based in Sheffield Lake and bring our full detailing setup to homes and offices across Lorain County and the western Cuyahoga suburbs."
      />

      <section className="bg-mist-50 py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Choose Your Town" title="Communities we serve" />
          <AreaGrid />

          <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
            {byCounty.map(([county, towns]) => (
              <div key={county} className="rounded-3xl bg-white p-5 ring-1 ring-mist-200 sm:p-7">
                <h2 className="text-lg font-bold text-navy-900">{county}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{towns.join(', ')}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <WhatYouNeed />
          </div>
          <p className="mt-10 text-center text-sm text-navy-600">
            Outside these areas? Call{' '}
            <a href={site.phone.href} className="-my-3 inline-block py-3 font-semibold text-teal-700 underline-offset-4 hover:underline">
              {site.phone.display}
            </a>{' '}
            and we&apos;ll let you know if we can make the trip.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
