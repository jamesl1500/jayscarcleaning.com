import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { button, Container, CtaBanner, Icon, PackageCard, PageHero, SectionHeading, WhatYouNeed } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, graph, serviceSchema } from '@/lib/schema';
import { addons, packages, site, usd } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Car Detailing Packages & Prices — Sheffield Lake, OH',
  description:
    'Mobile car detailing prices in Sheffield Lake & Lorain County: Exterior Wash $50, Interior Detail $75, Full Detail $120, plus add-ons like ceramic spray and pet hair removal.',
  path: '/packages',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
];

// Comparison rows: which package includes what.
const compare: { label: string; in: string[] }[] = [
  { label: 'Snow foam pre-rinse & hand wash', in: ['exterior-wash', 'full-detail'] },
  { label: 'Wheels, rims & tire shine', in: ['exterior-wash', 'full-detail'] },
  { label: 'Bug & tar removal', in: ['exterior-wash', 'full-detail'] },
  { label: 'Door jamb wipe down', in: ['exterior-wash', 'full-detail'] },
  { label: 'Full interior vacuum', in: ['interior-detailing', 'full-detail'] },
  { label: 'Dash, console & vents', in: ['interior-detailing', 'full-detail'] },
  { label: 'Seat cleaning & conditioning', in: ['interior-detailing', 'full-detail'] },
  { label: 'Floor mat shampoo', in: ['interior-detailing', 'full-detail'] },
  { label: 'Glass inside & out', in: ['full-detail'] },
  { label: 'Exterior trim dressing', in: ['full-detail'] },
  { label: 'Engine bay wipe down', in: ['full-detail'] },
  { label: 'Final walkthrough', in: ['full-detail'] },
];

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          '@type': 'ItemList',
          name: 'Mobile car detailing packages',
          itemListElement: packages.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: serviceSchema(p) })),
        })}
      />
      <PageHero
        breadcrumbs={crumbs}
        eyebrow="Packages & Pricing"
        title={
          <>
            Mobile detailing <span className="text-teal-300">packages</span>
          </>
        }
        intro={`Transparent starting prices for Sheffield Lake and Lorain County. Every package is done by hand at your location — call ${site.phone.display} with questions.`}
      />

      <section className="bg-navy-900 pb-24 pt-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} headingLevel="h2" />
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="bg-white py-24">
        <Container className="max-w-5xl">
          <SectionHeading eyebrow="Compare" title="What's included in each package" />
          <div className="overflow-x-auto rounded-3xl ring-1 ring-mist-200">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Package comparison</caption>
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Service
                  </th>
                  {packages.map((p) => (
                    <th key={p.slug} scope="col" className="px-5 py-4 text-center font-semibold">
                      {p.name}
                      <span className="block text-lg font-black text-teal-300">{usd(p.price)}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-mist-200">
                {compare.map((row) => (
                  <tr key={row.label} className="even:bg-mist-50">
                    <th scope="row" className="px-5 py-3.5 font-medium text-navy-800">
                      {row.label}
                    </th>
                    {packages.map((p) => (
                      <td key={p.slug} className="px-5 py-3.5 text-center">
                        {row.in.includes(p.slug) ? (
                          <>
                            <Icon name="check" className="mx-auto h-5 w-5 text-teal-600" strokeWidth={3} />
                            <span className="sr-only">Included</span>
                          </>
                        ) : (
                          <span className="text-navy-500" aria-label="Not included">
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Add-ons */}
      <section id="addons" className="bg-mist-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Add-Ons"
            title="Premium add-on services"
            intro="Combine any of these with any package when you book."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addons.map((a) => (
              <article key={a.id} className="rounded-3xl bg-white p-6 ring-1 ring-mist-200 transition hover:ring-teal-500">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold leading-tight text-navy-900">{a.name}</h3>
                  <span className="shrink-0 font-black text-teal-700">+{usd(a.price)}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{a.desc}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-4xl">
            <WhatYouNeed />
          </div>
          <p className="mt-10 text-center">
            <Link href="/contact" className={button.dark}>
              Book with add-ons <Icon name="arrow" />
            </Link>
          </p>
        </Container>
      </section>

      <CtaBanner title="Not sure which package to choose?" text={`Call ${site.phone.display} and we'll help you pick the right service for your car and budget.`} />
    </>
  );
}
