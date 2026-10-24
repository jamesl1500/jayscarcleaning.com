import BookingForm from '@/components/BookingForm';
import JsonLd from '@/components/JsonLd';
import { Container, Icon, PageHero, WhatYouNeed } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, graph } from '@/lib/schema';
import { hours, packages, site, usd } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book a Mobile Car Detail in Sheffield Lake, OH',
  description: `Book mobile car detailing in Sheffield Lake, Avon Lake, Lorain and nearby. Pick a package and date — we confirm within 24 hours. Or call ${site.phone.display}.`,
  path: '/contact',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Book a Detail', path: '/contact' },
];

export default async function ContactPage({ searchParams }: PageProps<'/contact'>) {
  const { package: pkg } = await searchParams;
  const initialPackage = typeof pkg === 'string' ? pkg : '';

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), { '@type': 'ContactPage', name: 'Book a Detail', url: `${site.url}/contact` })} />
      <PageHero
        eyebrow="Book Online · No Payment Upfront"
        title={
          <>
            Book your <span className="text-teal-300">mobile detail</span>
          </>
        }
        intro={
          <>
            Tell us about your car and where it&apos;s parked. We&apos;ll confirm within 24 hours — or call us now at{' '}
            <a href={site.phone.href} className="font-semibold text-teal-300 underline-offset-4 hover:underline">
              {site.phone.display}
            </a>
            .
          </>
        }
        breadcrumbs={crumbs}
      />

      <section className="bg-mist-50 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-mist-200 sm:p-10">
                <h2 className="mb-8 text-2xl font-black text-navy-900">Request an appointment</h2>
                <BookingForm initialPackage={initialPackage} source="contact" />
              </div>
            </div>

            <aside className="space-y-6">
              <WhatYouNeed compact />

              <div className="rounded-3xl bg-navy-900 p-7 text-white">
                <h2 className="text-xl font-bold text-white">Get in touch</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li>
                    <a href={site.phone.href} className="flex items-center gap-3 group">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                        <Icon name="phone" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-mist-200/70">Call</span>
                        <span className="font-semibold text-white group-hover:text-teal-300">{site.phone.display}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={site.email.href} className="flex items-center gap-3 group">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                        <Icon name="mail" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-mist-200/70">Email</span>
                        <span className="break-all font-semibold text-white group-hover:text-teal-300">{site.email.display}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-mist-200/70">Service area</span>
                      <span className="font-semibold text-white">
                        {site.region.city} &amp; nearby {site.region.county}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-7 ring-1 ring-mist-200">
                <h2 className="text-lg font-bold text-navy-900">Hours</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {hours.map((h) => (
                    <div key={h.label} className="flex justify-between border-b border-mist-100 pb-3 last:border-0 last:pb-0">
                      <dt className="text-navy-600">{h.label}</dt>
                      <dd className="font-semibold text-navy-900">{h.display}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl bg-white p-7 ring-1 ring-mist-200">
                <h2 className="text-lg font-bold text-navy-900">Pricing</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {packages.map((p) => (
                    <li key={p.slug} className="flex justify-between">
                      <span className="text-navy-600">{p.name}</span>
                      <span className="font-bold text-navy-900">{usd(p.price)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-navy-500">Starting prices. Add-ons available.</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
