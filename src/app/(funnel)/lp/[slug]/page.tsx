import { notFound } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import {
  button,
  Container,
  Eyebrow,
  FaqList,
  HeroBackdrop,
  HowItWorks,
  Icon,
  SectionHeading,
  WhatYouNeed,
} from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { funnels, getFunnel } from '@/lib/funnels';
import { areaNames, generalFaqs, getPackage, packages, serviceAreas, site, usd } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return funnels.map((f) => ({ slug: f.slug }));
}

// Landing pages are for paid/social traffic and duplicate the indexed service
// pages, so they're kept out of search results (links are still followed).
export async function generateMetadata({ params }: PageProps<'/lp/[slug]'>) {
  const funnel = getFunnel((await params).slug);
  if (!funnel) return {};
  return pageMetadata({
    title: funnel.metaTitle,
    description: funnel.metaDescription,
    path: `/lp/${funnel.slug}`,
    absoluteTitle: true,
    noindex: true,
  });
}

export default async function FunnelPage({ params }: PageProps<'/lp/[slug]'>) {
  const funnel = getFunnel((await params).slug);
  if (!funnel) notFound();
  const pkg = funnel.packageSlug ? getPackage(funnel.packageSlug) : undefined;
  const faqs = generalFaqs.slice(0, 4);

  return (
    <>
      {/* Hero + form */}
      <section className="relative overflow-hidden bg-navy-900">
        <HeroBackdrop />
        <Container className="relative grid items-start gap-8 pb-10 pt-8 sm:gap-12 sm:py-20 lg:grid-cols-[1fr_minmax(0,30rem)]">
          <div className="lg:pt-8">
            <Eyebrow dark>{funnel.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[2.25rem] font-black leading-[1.06] tracking-tight text-white sm:mt-6 sm:text-6xl">
              {funnel.headline} <span className="text-teal-300">{funnel.highlight}</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-mist-200/85 sm:mt-6 sm:text-lg">{funnel.subhead}</p>
            <ul className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
              {funnel.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base text-mist-100">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-navy-900">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 hidden max-w-xl lg:block">
              <WhatYouNeed dark compact />
            </div>
          </div>

          <div id="book" className="-mx-1 rounded-[1.75rem] bg-white p-5 shadow-2xl shadow-black/30 sm:mx-0 sm:rounded-[2rem] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              {pkg ? `${pkg.name} · from ${usd(pkg.price)}` : 'Request your appointment'}
            </p>
            <h2 className="mt-2 text-2xl font-black text-navy-900">Book in about 2 minutes</h2>
            <p className="mt-1 mb-6 text-sm text-navy-600">No payment now — we confirm within 24 hours.</p>
            <BookingForm initialPackage={pkg?.slug} source={`lp-${funnel.slug}`} compact submitLabel={funnel.ctaLabel} />
          </div>
        </Container>
      </section>

      {/* Mobile-only requirement block (desktop shows it in the hero) */}
      <section className="bg-navy-900 px-4 pb-14 lg:hidden">
        <WhatYouNeed dark compact />
      </section>

      {/* Pain points */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <SectionHeading title="Why people book us" />
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {funnel.pains.map((p) => (
              <div key={p.title} className="rounded-3xl bg-mist-50 p-6 ring-1 ring-mist-200 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-mist-50 py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Three steps to a spotless car" />
          <HowItWorks />
        </Container>
      </section>

      {/* Pricing recap */}
      <section className="bg-navy-900 py-14 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading dark eyebrow="Pricing" title="Simple, upfront prices" />
          <ul className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {packages.map((p) => (
              <li
                key={p.slug}
                className={`rounded-2xl px-2 py-4 text-center sm:rounded-3xl sm:p-6 ${
                  p.slug === pkg?.slug ? 'bg-navy-700 ring-2 ring-teal-400' : 'bg-navy-800/60 ring-1 ring-white/10'
                }`}
              >
                <p className="text-sm font-semibold leading-tight text-white sm:text-base">{p.name}</p>
                <p className="mt-2 text-2xl font-black text-white sm:text-4xl">{usd(p.price)}</p>
                <p className="text-xs text-mist-200/75">sedan</p>
                <p className="mt-1 text-xs text-mist-200/75 sm:text-sm">{p.duration}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-mist-200/75">
            SUVs &amp; trucks a little more · add-ons from $20 · serving {areaNames(serviceAreas.slice(0, 6))} &amp; more
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Before you book" />
          <FaqList faqs={faqs} />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-400 py-12 sm:py-16">
        <Container className="text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
            Your car, detailed in your driveway.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#book" className={`${button.dark} w-full sm:w-auto`}>
              {funnel.ctaLabel} <Icon name="arrow" />
            </a>
            <a href={site.phone.href} className={`${button.outline} border-navy-900/25 bg-white/40 hover:bg-white/60`}>
              <Icon name="phone" /> {site.phone.display}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
