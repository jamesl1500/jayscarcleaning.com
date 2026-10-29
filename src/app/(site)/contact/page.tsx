import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import JsonLd from '@/components/JsonLd';
import { button, Container, Icon, LaunchBadge, PageHero, WhatYouNeed, WinterServices } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, graph } from '@/lib/schema';
import { hours, packages, site, sizeTiers, usd } from '@/lib/site';


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
  const online = Boolean(site.squareBookingUrl);

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), { '@type': 'ContactPage', name: 'Book a Detail', url: `${site.url}/contact` })} />
      <PageHero
        eyebrow={online ? 'Book Online · Pick Your Time' : 'Book Online · No Payment Upfront'}
        title={
          <>
            Book your <span className="text-teal-300">mobile detail</span>
          </>
        }
        intro={
          <>
            {online
              ? 'See open times and book instantly, or send us a request and we’ll confirm within 24 hours. Prefer to talk? Call '
              : 'Tell us about your car and where it’s parked. We’ll confirm within 24 hours — or call us now at '}
            <a href={site.phone.href} className="-my-3 inline-block py-3 font-semibold text-teal-300 underline-offset-4 hover:underline">
              {site.phone.display}
            </a>
            .
          </>
        }
        breadcrumbs={crumbs}
      />

      <section className="bg-mist-50 pb-12 pt-4 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="lg:col-span-2">
              <div id="form" className="relative -mx-1 -mt-10 rounded-3xl bg-white p-5 shadow-lg ring-1 ring-mist-200 sm:mx-0 sm:mt-0 sm:p-10 sm:shadow-sm">
                {online && (
                  <div className="mb-8 rounded-2xl bg-navy-900 p-5 sm:mb-10 sm:p-7">
                    <h2 className="text-xl font-bold text-white sm:text-2xl">Pick an open time</h2>
                    <p className="mt-2 text-sm leading-relaxed text-mist-200/80">
                      See real availability and book in a minute.{' '}
                      {site.depositAmount > 0
                        ? `A ${usd(site.depositAmount)} deposit holds your slot and comes off your total.`
                        : 'Nothing is charged until your appointment is done.'}
                    </p>
                    <a
                      href={site.squareBookingUrl}
                      target="_blank"
                      rel="noopener"
                      data-track="square_booking_click"
                      className={`${button.primary} mt-5 w-full sm:w-auto`}
                    >
                      <Icon name="calendar" /> See open times
                    </a>
                  </div>
                )}
                <h2 className="mb-6 text-2xl font-black text-navy-900 sm:mb-8">
                  {online ? 'Or send a booking request' : 'Request an appointment'}
                </h2>
                <BookingForm initialPackage={initialPackage} source="contact" />
              </div>
            </div>

            <aside className="space-y-6">
              <WhatYouNeed compact />
              <WinterServices />

              <div className="rounded-3xl bg-navy-900 p-7 text-white">
                <h2 className="text-xl font-bold text-white">Get in touch</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li>
                    <a href={site.phone.href} className="group flex min-h-12 items-center gap-3">
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
                    <a href={site.email.href} className="group flex min-h-12 items-center gap-3">
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
                <h2 className="flex flex-wrap items-center justify-between gap-2 text-lg font-bold text-navy-900">
                  Pricing <LaunchBadge dark={false} />
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {packages.map((p) => (
                    <li key={p.slug} className="flex justify-between gap-4">
                      <span className="text-navy-600">{p.name}</span>
                      <span className="text-right font-bold text-navy-900">
                        {sizeTiers.map((t) => usd(p.prices[t.id])).join(' / ')}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-navy-500">
                  {sizeTiers.map((t) => t.name).join(' / ')}. Add-ons available.{' '}
                  <Link href="/packages#pricing" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                    Full price list
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
