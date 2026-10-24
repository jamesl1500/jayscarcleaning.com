import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import {
  AreaGrid,
  button,
  CheckItem,
  Container,
  CtaBanner,
  FaqList,
  HowItWorks,
  Icon,
  PackageCard,
  PageHero,
  SectionHeading,
  WhatYouNeed,
} from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, graph, ids } from '@/lib/schema';
import { getServiceArea, hours, packages, requirements, serviceAreas, site, usd, type ServiceArea } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: PageProps<'/service-areas/[city]'>) {
  const area = getServiceArea((await params).city);
  if (!area) return {};
  return pageMetadata({
    title: `Mobile Car Detailing in ${area.name}, OH`,
    description: `Mobile car detailing in ${area.name}, OH (${area.zips.join(', ')}). Hand wash from $50, interior detail $75, full detail $120 — in your driveway. Call ${site.phone.display}.`,
    path: `/service-areas/${area.slug}`,
  });
}

function areaFaqs(area: ServiceArea) {
  return [
    {
      q: `Do you offer mobile car detailing in ${area.name}?`,
      a: `Yes. We detail cars at homes and offices throughout ${area.name}${
        area.zips.length ? ` (${area.zips.join(', ')})` : ''
      }, ${area.homeBase ? 'which is our home base' : `just a short drive from our base in ${site.region.city}`}.`,
    },
    {
      q: `What do I need to provide for a detail in ${area.name}?`,
      a: `${requirements.items.map((i) => i.title).join(' and ')} — that's all. ${requirements.weBring}`,
    },
    {
      q: `How much does car detailing cost in ${area.name}?`,
      a: `The same as everywhere we serve: Exterior Wash from $50, Interior Detail from $75 and Full Detail from $120. Add-ons start at $20.`,
    },
    {
      q: `When can you come to ${area.name}?`,
      a: `We take appointments ${hours.map((h) => `${h.label} ${h.display}`).join(' and ')}. Book online and we'll confirm within 24 hours.`,
    },
  ];
}

export default async function AreaPage({ params }: PageProps<'/service-areas/[city]'>) {
  const area = getServiceArea((await params).city);
  if (!area) notFound();

  const path = `/service-areas/${area.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: area.name, path },
  ];
  const faqs = areaFaqs(area);

  return (
    <>
      <JsonLd
        data={graph(
          {
            '@type': 'Service',
            '@id': `${site.url}${path}#service`,
            name: `Mobile Car Detailing in ${area.name}, OH`,
            serviceType: 'Mobile car detailing',
            url: `${site.url}${path}`,
            provider: { '@id': ids.business },
            areaServed: {
              '@type': 'City',
              name: `${area.name}, ${site.region.state}`,
              containedInPlace: { '@type': 'AdministrativeArea', name: `${area.county}, ${site.region.stateName}` },
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `Detailing packages in ${area.name}`,
              itemListElement: packages.map((p) => ({
                '@type': 'Offer',
                price: p.price.toFixed(2),
                priceCurrency: 'USD',
                itemOffered: { '@id': `${site.url}/packages/${p.slug}#service` },
              })),
            },
          },
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        )}
      />

      <PageHero
        breadcrumbs={crumbs}
        eyebrow={`${area.county}, Ohio`}
        title={
          <>
            Mobile car detailing in <span className="text-teal-300">{area.name}, OH</span>
          </>
        }
        intro={area.blurb}
      >
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
          <Link href={`/contact`} className={button.primary}>
            Book in {area.name} <Icon name="arrow" />
          </Link>
          <a href={site.phone.href} className={button.secondary}>
            <Icon name="phone" /> {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-navy-900">
              Detailing built for {area.name} drivers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">{area.localNote}</p>
            <ul className="mt-8 space-y-3">
              <CheckItem>Hand washed with the two-bucket method — never automatic brushes</CheckItem>
              <CheckItem>Weeknight and weekend appointments in {area.name}</CheckItem>
              <CheckItem>Packages from {usd(packages[0].price)}, confirmed before we start</CheckItem>
              {area.zips.length > 0 && <CheckItem>Serving ZIP code{area.zips.length > 1 ? 's' : ''} {area.zips.join(', ')}</CheckItem>}
            </ul>
          </div>
          <WhatYouNeed />
        </Container>
      </section>

      <section className="bg-navy-900 py-20">
        <Container>
          <SectionHeading dark eyebrow={`${area.name} Pricing`} title={`Detailing packages in ${area.name}`} />
          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-20">
        <Container>
          <SectionHeading eyebrow="How It Works" title={`Getting your car detailed in ${area.name}`} />
          <HowItWorks />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title={`${area.name} detailing questions`} />
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <section className="bg-mist-50 py-20">
        <Container>
          <SectionHeading eyebrow="Nearby" title={`Also serving near ${area.name}`} />
          <AreaGrid only={area.nearby} />
          <p className="mt-8 text-center">
            <Link href="/service-areas" className="font-semibold text-teal-700 hover:underline underline-offset-4">
              View all service areas →
            </Link>
          </p>
        </Container>
      </section>

      <CtaBanner title={`Ready for a spotless car in ${area.name}?`} />
    </>
  );
}
