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
  Icon,
  PageHero,
  SectionHeading,
  WhatYouNeed,
} from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from '@/lib/schema';
import { getAddon, getPackage, packages, site, usd } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/packages/[slug]'>) {
  const pkg = getPackage((await params).slug);
  if (!pkg) return {};
  return pageMetadata({ title: pkg.seoTitle, description: pkg.seoDescription, path: `/packages/${pkg.slug}` });
}

export default async function PackagePage({ params }: PageProps<'/packages/[slug]'>) {
  const pkg = getPackage((await params).slug);
  if (!pkg) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: pkg.name, path: `/packages/${pkg.slug}` },
  ];
  const recommended = pkg.recommendedAddons.map(getAddon).filter((a) => a !== undefined);
  const others = packages.filter((p) => p.slug !== pkg.slug);

  return (
    <>
      <JsonLd data={graph(serviceSchema(pkg), breadcrumbSchema(crumbs), faqSchema(pkg.faqs))} />
      <PageHero
        breadcrumbs={crumbs}
        eyebrow={`Package ${pkg.number}${pkg.featured ? ' · Most Popular' : ''}`}
        title={
          <>
            {pkg.name} <span className="block text-2xl font-bold text-teal-300 sm:text-3xl">Mobile detailing in Sheffield Lake, OH</span>
          </>
        }
        intro={pkg.summary}
      >
        <div className="shrink-0 rounded-3xl bg-navy-800/80 p-6 ring-1 ring-white/10 md:text-right">
          <p className="text-6xl font-black tracking-tight text-white">{usd(pkg.price)}</p>
          <p className="mt-1 text-sm text-mist-200/75">Starting price</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-mist-200/75 md:justify-end">
            <Icon name="clock" className="h-4 w-4" /> {pkg.duration}
          </p>
        </div>
      </PageHero>

      {pkg.featured && (
        <div className="border-b border-teal-500/20 bg-navy-950 py-4 text-center text-sm text-mist-100">
          <strong className="text-teal-300">Save $5</strong> vs. booking the Exterior Wash ($50) and Interior Detail
          ($75) separately.
        </div>
      )}

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-black tracking-tight text-navy-900">What&apos;s included</h2>
            <div className="mt-8 space-y-10">
              {pkg.included.map((group) => (
                <div key={group.section ?? 'all'}>
                  {group.section && (
                    <h3 className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-teal-700">
                      {group.section}
                      <span className="h-px flex-1 bg-teal-600/25" />
                    </h3>
                  )}
                  <ul className="grid gap-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-navy-900">
                          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span>
                          <span className="block font-semibold text-navy-900">{item.title}</span>
                          <span className="mt-0.5 block text-sm leading-relaxed text-navy-600">{item.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-mist-50 p-7 ring-1 ring-mist-200">
              <h2 className="text-xl font-bold text-navy-900">Ideal for</h2>
              <ul className="mt-4 space-y-3">
                {pkg.idealFor.map((i) => (
                  <CheckItem key={i}>{i}</CheckItem>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-navy-900 p-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-white">Package summary</h2>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ['Duration', pkg.duration],
                  ['Location', 'Your driveway'],
                  ['You provide', 'Water + electricity'],
                  ['Method', '100% hand detailed'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-white/10 pb-4">
                    <dt className="text-mist-200/75">{k}</dt>
                    <dd className="font-semibold text-white">{v}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-1">
                  <dt className="text-mist-200/75">Starting price</dt>
                  <dd className="text-3xl font-black text-teal-300">{usd(pkg.price)}</dd>
                </div>
              </dl>
              <Link href={`/contact?package=${pkg.slug}`} className={`${button.primary} mt-7 w-full`}>
                Book {pkg.name}
              </Link>
              <a href={site.phone.href} className={`${button.secondary} mt-3 w-full`}>
                <Icon name="phone" /> {site.phone.display}
              </a>
            </div>
            <WhatYouNeed compact />
          </aside>
        </Container>
      </section>

      <section className="bg-mist-50 py-20">
        <Container>
          <SectionHeading eyebrow="Recommended Add-Ons" title={`Upgrade your ${pkg.name}`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((a) => (
              <article key={a.id} className="rounded-3xl bg-white p-6 ring-1 ring-mist-200">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-navy-900">{a.name}</h3>
                  <span className="shrink-0 font-black text-teal-700">+{usd(a.price)}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{a.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title={`${pkg.name} questions`} />
          <FaqList faqs={pkg.faqs} />
        </Container>
      </section>

      <section className="bg-mist-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Where We Work"
            title={`${pkg.name} near you`}
            intro="We bring this package to driveways across Sheffield Lake and the surrounding communities."
          />
          <AreaGrid />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/packages/${p.slug}`}
                className="group flex items-center justify-between rounded-3xl bg-navy-900 p-6 transition hover:bg-navy-800"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-teal-300">Also available</span>
                  <span className="mt-1 block text-lg font-bold text-white">
                    {p.name} — {usd(p.price)}
                  </span>
                </span>
                <Icon name="arrow" className="h-5 w-5 text-teal-300 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title={`Book your ${pkg.name} today`} text={`${pkg.tagline} Starting at ${usd(pkg.price)} — we come to you.`} />
    </>
  );
}
