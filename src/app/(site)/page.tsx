import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import {
  AreaGrid,
  button,
  CheckItem,
  Container,
  CtaBanner,
  Eyebrow,
  FaqList,
  HeroBackdrop,
  HowItWorks,
  Icon,
  PackageCard,
  SectionHeading,
  WhatYouNeed,
  type IconName,
} from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { faqSchema, graph } from '@/lib/schema';
import { addons, areaNames, generalFaqs, packages, serviceAreas, site, usd } from '@/lib/site';

export const metadata = pageMetadata({
  title: `Mobile Car Detailing Sheffield Lake, OH | ${site.name}`,
  description: site.description,
  path: '/',
  absoluteTitle: true,
});

const stats = [
  { value: '100+', label: 'Cars detailed' },
  { value: '5★', label: 'Customer rating' },
  { value: '7 days', label: 'Evenings & weekends' },
  { value: `${serviceAreas.length}`, label: 'Communities served' },
];

const reasons: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'truck', title: 'We come to you', desc: 'Home, office or anywhere with a spigot and an outlet. No drive, no waiting room.' },
  { icon: 'shield', title: 'Paint-safe hand washing', desc: 'Two-bucket method, pH-neutral shampoo and clean microfiber — never automatic brushes.' },
  { icon: 'sparkle', title: 'Obsessive attention to detail', desc: 'Door jambs, vents, cup holders — the spots quick washes skip are where we start.' },
  { icon: 'clock', title: 'Hours that fit real life', desc: 'Weeknights 5–10 PM and all day Saturday and Sunday.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={graph(faqSchema(generalFaqs))} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <HeroBackdrop />
        <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          <div>
            <Eyebrow dark>
              <Icon name="pin" className="h-3.5 w-3.5" /> Mobile Detailing · {site.region.city}, OH
            </Eyebrow>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mobile car detailing in <span className="text-teal-300">Sheffield Lake</span>, done in your driveway.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist-200/85 sm:text-xl">
              Hand washes, deep interior cleans and full details for Sheffield Lake, Avon Lake, Lorain and the rest of
              Lorain County. You provide water and an outlet — we bring everything else.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className={`${button.primary} text-lg`}>
                Book Your Detail <Icon name="arrow" />
              </Link>
              <a href={site.phone.href} className={`${button.secondary} text-lg`}>
                <Icon name="phone" /> {site.phone.display}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist-200/85">
              {['Packages from $50', 'Hand wash only', 'Confirmed within 24 hours'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-300" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-navy-800/80 p-7 ring-1 ring-white/10 backdrop-blur sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">Simple pricing</p>
            <ul className="mt-5 divide-y divide-white/10">
              {packages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/packages/${p.slug}`} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block font-semibold text-white group-hover:text-teal-300">
                        {p.name}
                        {p.featured && (
                          <span className="ml-2 rounded-full bg-teal-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                            Popular
                          </span>
                        )}
                      </span>
                      <span className="block text-sm text-mist-200/70">{p.duration}</span>
                    </span>
                    <span className="text-3xl font-black text-white">{usd(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-teal-400/10 p-4 text-sm text-mist-100 ring-1 ring-teal-400/25">
              <Icon name="drop" className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <p>
                <strong className="text-white">All you need:</strong> a water spigot and an electrical outlet.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-teal-500/20 bg-navy-950">
        <Container className="grid grid-cols-2 gap-8 py-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-teal-300">{s.value}</p>
              <p className="mt-1 text-sm text-mist-200/75">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-mist-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Detailed at home in three easy steps"
            intro="No drop-off, no waiting room, no driving across town. Here's what to expect."
          />
          <HowItWorks />
          <div className="mx-auto mt-10 max-w-4xl">
            <WhatYouNeed />
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-navy-900 py-24">
        <Container>
          <SectionHeading
            dark
            eyebrow="Packages & Pricing"
            title="Pick the clean your car needs"
            intro="Transparent starting prices with no hidden fees. Every package is performed by hand at your location."
          />
          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/packages" className="font-medium text-teal-300 hover:text-teal-200">
              Compare packages &amp; all add-ons →
            </Link>
          </p>
        </Container>
      </section>

      {/* Why us + add-ons */}
      <section className="bg-white py-24">
        <Container className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Why Clean Lab"
              title={
                <>
                  Detailing done like a <span className="text-teal-700">lab experiment</span> — precise and repeatable.
                </>
              }
              intro="We're not a drive-through car wash. We're a mobile detailing service that brings professional products and techniques straight to your driveway."
            />
            <ul className="grid gap-6 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700">
                    <Icon name={r.icon} />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{r.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-navy-900 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white">Premium add-ons</h2>
            <p className="mt-2 text-sm text-mist-200/75">Customize any package with à la carte upgrades.</p>
            <ul className="mt-6 divide-y divide-white/10">
              {addons.map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm text-mist-100">{a.name}</span>
                  <span className="shrink-0 text-sm font-bold text-teal-300">+{usd(a.price)}</span>
                </li>
              ))}
            </ul>
            <Link href="/packages#addons" className={`${button.primary} mt-8 w-full`}>
              See add-on details
            </Link>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section id="service-areas" className="bg-mist-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Service Areas"
            title="Proudly serving Sheffield Lake & nearby"
            intro={`Based in Sheffield Lake, we detail cars across Lorain County and the western Cuyahoga suburbs — including ${areaNames(
              serviceAreas.slice(1, 6),
            )} and more.`}
          />
          <AreaGrid />
          <p className="mt-8 text-center text-sm text-navy-600">
            Don&apos;t see your town?{' '}
            <a href={site.phone.href} className="font-semibold text-teal-700 underline-offset-4 hover:underline">
              Call {site.phone.display}
            </a>{' '}
            — we may still be able to come to you.
          </p>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="bg-navy-900 py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-72 overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-teal-400/30 sm:h-96 sm:w-80 lg:h-[28rem] lg:w-96">
              <Image
                src="/james-latten-clean-lab-detailing-owner.jpg"
                alt={`${site.owner}, owner and lead detailer at ${site.name} in Sheffield Lake, Ohio`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
          <div>
            <Eyebrow dark>Meet the Owner</Eyebrow>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Hi, I&apos;m <span className="text-teal-300">James</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist-200/85">
              I&apos;m the founder and lead detailer at {site.name}. My passion for cars and commitment to quality led me
              to start a detailing service that puts the customer first.
            </p>
            <p className="mt-4 leading-relaxed text-mist-200/85">
              I bring professional-grade products, meticulous attention to detail and a genuine love for the craft to
              every job. Whether it&apos;s a quick exterior wash or a full inside-and-out detail, I treat every vehicle
              like my own.
            </p>
            <ul className="mt-8 space-y-3">
              <CheckItem dark>Locally owned and operated in Sheffield Lake</CheckItem>
              <CheckItem dark>Every car detailed by hand</CheckItem>
              <CheckItem dark>Direct line to the owner: {site.phone.display}</CheckItem>
            </ul>
            <Link href="/contact" className={`${button.primary} mt-10`}>
              Book with James <Icon name="arrow" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <FaqList faqs={generalFaqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
