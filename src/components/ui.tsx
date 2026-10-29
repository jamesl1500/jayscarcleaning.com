import Link from 'next/link';
import {
  plans,
  requirements,
  reviews,
  serviceAreas,
  site,
  sizeTiers,
  usd,
  winterServices,
  type Faq,
  type Package,
  type SizeTier,
} from '@/lib/site';

const iconPaths = {
  check: 'M5 13l4 4L19 7',
  arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  back: 'M15 19l-7-7 7-7',
  chevron: 'M19 9l-7 7-7-7',
  phone:
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  pin: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  sparkle: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  truck: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
  drop: 'M12 3.5c-3 4-6 7.2-6 10.5a6 6 0 0012 0c0-3.3-3-6.5-6-10.5z',
  chat: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  gift: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
  refresh: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  snow: 'M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
} as const;

export type IconName = keyof typeof iconPaths;

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 2 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={iconPaths[name]} />
    </svg>
  );
}

const buttonBase =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full text-center font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400';

export const button = {
  primary: `${buttonBase} bg-teal-400 text-navy-900 hover:bg-teal-300 px-7 py-3.5`,
  secondary: `${buttonBase} border border-white/15 bg-white/5 text-white hover:bg-white/10 px-7 py-3.5`,
  dark: `${buttonBase} bg-navy-900 text-white hover:bg-navy-700 px-7 py-3.5`,
  outline: `${buttonBase} border border-navy-900/15 text-navy-900 hover:border-teal-600 hover:text-teal-700 px-7 py-3.5`,
};

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
        dark ? 'bg-teal-400/10 text-teal-300 ring-1 ring-teal-400/25' : 'bg-teal-500/10 text-teal-700 ring-1 ring-teal-600/20'
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = true,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  center?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-4 text-balance text-3xl font-black tracking-tight sm:mt-5 sm:text-5xl ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:mt-5 sm:text-lg ${dark ? 'text-mist-200/80' : 'text-navy-600'}`}>{intro}</p>
      )}
    </div>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-sm ${dark ? 'text-mist-100' : 'text-navy-700'}`}>
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          dark ? 'bg-teal-400/15 text-teal-300' : 'bg-teal-500/15 text-teal-700'
        }`}
      >
        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="-my-2 mb-4 sm:mb-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 text-sm text-mist-200/70">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="inline-flex min-h-11 items-center text-teal-300">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="inline-flex min-h-11 min-w-11 items-center hover:text-white transition-colors">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-14 pt-8 sm:pb-20 sm:pt-16">
      <HeroBackdrop />
      <Container className="relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-3xl">
            {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
            <h1 className="mt-4 text-balance text-[2.125rem] font-black leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-6xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-mist-200/80 sm:mt-5 sm:text-lg">{intro}</p>
            )}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #67e3ee 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </>
  );
}

export function FaqList({ faqs, dark = false }: { faqs: Faq[]; dark?: boolean }) {
  return (
    <div className={`divide-y rounded-3xl border ${dark ? 'divide-white/10 border-white/10' : 'divide-mist-200 border-mist-200 bg-white'}`}>
      {faqs.map((faq) => (
        <details key={faq.q} className="group">
          <summary
            className={`flex min-h-16 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold sm:gap-6 sm:px-8 sm:py-5 ${
              dark ? 'text-white' : 'text-navy-900'
            }`}
          >
            <h3 className="text-base sm:text-lg">{faq.q}</h3>
            <Icon name="chevron" className="h-5 w-5 shrink-0 text-teal-500 transition-transform group-open:rotate-180" />
          </summary>
          <p className={`px-5 pb-5 leading-relaxed sm:px-8 ${dark ? 'text-mist-200/80' : 'text-navy-600'}`}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PackageCard({ pkg, headingLevel = 'h3' }: { pkg: Package; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <article
      className={`relative flex flex-col rounded-3xl p-6 transition-transform sm:p-8 md:hover:-translate-y-1 ${
        pkg.featured
          ? 'bg-gradient-to-b from-navy-700 to-navy-800 ring-2 ring-teal-400 shadow-2xl shadow-teal-500/10'
          : 'bg-navy-800/60 ring-1 ring-white/10'
      }`}
    >
      {pkg.featured && (
        <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
          Most Popular · Best Value
        </p>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">Package {pkg.number}</p>
      <Heading className="mt-2 text-2xl font-bold text-white">{pkg.name}</Heading>
      <p className="mt-1 text-sm text-mist-200/70">{pkg.tagline}</p>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-5xl font-black tracking-tight text-white">{usd(pkg.price)}</span>
        <span className="text-sm text-mist-200/70">sedan</span>
        <LaunchBadge />
      </p>
      <p className="mt-2 text-sm text-mist-200/75">{otherTiers(pkg.prices)}</p>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-mist-200/60">
        <Icon name="clock" className="h-4 w-4" /> {pkg.duration}
      </p>
      <ul className="mb-8 mt-6 flex-1 space-y-3">
        {pkg.highlights.map((h) => (
          <CheckItem key={h} dark>
            {h}
          </CheckItem>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <Link href={`/contact?package=${pkg.slug}`} className={pkg.featured ? button.primary : `${button.secondary}`}>
          Book {pkg.name}
        </Link>
        <Link
          href={`/packages/${pkg.slug}`}
          className="inline-flex min-h-11 items-center justify-center gap-1 text-sm font-medium text-teal-300 hover:text-teal-200 transition-colors"
        >
          See everything included<span className="sr-only"> in the {pkg.name}</span> →
        </Link>
      </div>
    </article>
  );
}

export function CtaBanner({
  title = 'Ready for a spotless car?',
  text = 'Book online in two minutes or give us a call — we bring the shine to your driveway.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-400 py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/30 blur-3xl"
      />
      <Container className="relative text-center">
        <h2 className="text-balance text-3xl font-black tracking-tight text-navy-900 sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-navy-800 sm:text-lg">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link href="/contact" className={button.dark}>
            Book Your Detail <Icon name="arrow" />
          </Link>
          <a href={site.phone.href} className={`${button.outline} border-navy-900/25 bg-white/40 hover:bg-white/60`}>
            <Icon name="phone" /> Call {site.phone.display}
          </a>
        </div>
      </Container>
    </section>
  );
}

// Water + electricity requirement — shown wherever someone might book.
export function WhatYouNeed({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-5 sm:p-8 ${
        dark ? 'bg-navy-800/70 ring-1 ring-teal-400/30' : 'bg-teal-500/5 ring-1 ring-teal-600/20'
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-teal-300' : 'text-teal-700'}`}>
        Before we arrive
      </p>
      <h3 className={`mt-2 text-xl font-bold sm:text-2xl ${dark ? 'text-white' : 'text-navy-900'}`}>
        {requirements.headline}
      </h3>
      <ul className={`mt-5 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {requirements.items.map((item, i) => (
          <li key={item.title} className="flex gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                dark ? 'bg-teal-400/15 text-teal-300' : 'bg-teal-500/15 text-teal-700'
              }`}
            >
              {i === 0 ? <Icon name="drop" /> : <BoltIcon />}
            </span>
            <span>
              <span className={`block font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{item.title}</span>
              <span className={`block text-sm ${dark ? 'text-mist-200/75' : 'text-navy-600'}`}>{item.desc}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className={`mt-5 text-sm font-medium ${dark ? 'text-mist-100' : 'text-navy-700'}`}>
        That&apos;s it. {requirements.weBring}
      </p>
      <p className={`mt-2 text-sm ${dark ? 'text-mist-200/75' : 'text-navy-600'}`}>{requirements.interiorOnly}</p>
    </div>
  );
}

function BoltIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export const steps = [
  {
    icon: 'calendar' as IconName,
    title: 'Book online or call',
    desc: 'Pick a package and a preferred date. We confirm your appointment within 24 hours.',
  },
  {
    icon: 'truck' as IconName,
    title: 'We come to you',
    desc: 'We arrive at your home or office with all the equipment and products. You just provide water and an outlet.',
  },
  {
    icon: 'sparkle' as IconName,
    title: 'Enjoy a spotless car',
    desc: 'We finish with a walkthrough so you can see the results before we leave.',
  },
];

export function HowItWorks({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`relative flex gap-4 rounded-3xl p-5 sm:p-8 md:block ${dark ? 'bg-navy-800/60 ring-1 ring-white/10' : 'bg-white ring-1 ring-mist-200'}`}
        >
          <span
            className={`absolute right-5 top-4 text-4xl font-black sm:right-6 sm:top-5 sm:text-5xl ${dark ? 'text-white/9' : 'text-navy-900/5'}`}
            aria-hidden="true"
          >
            0{i + 1}
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-400 text-navy-900">
            <Icon name={step.icon} className="h-6 w-6" />
          </span>
          <div className="md:mt-6">
            <h3 className={`pr-10 text-lg font-bold md:pr-0 ${dark ? 'text-white' : 'text-navy-900'}`}>
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className={`mt-1.5 text-sm leading-relaxed md:mt-2 ${dark ? 'text-mist-200/75' : 'text-navy-600'}`}>{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function AreaGrid({ exclude, only }: { exclude?: string; only?: string[] }) {
  const list = serviceAreas.filter((a) => a.slug !== exclude && (!only || only.includes(a.slug)));
  return (
    <ul className="grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
      {list.map((a) => (
        <li key={a.slug}>
          <Link
            href={`/service-areas/${a.slug}`}
            className="group flex min-h-16 items-center justify-between gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-mist-200 transition hover:ring-teal-500 sm:px-5 sm:py-4"
          >
            <span>
              <span className="block font-semibold text-navy-900 group-hover:text-teal-700">{a.name}</span>
              <span className="block text-xs text-navy-500">{a.county}</span>
            </span>
            <Icon name="arrow" className="h-4 w-4 shrink-0 text-teal-600 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

// "SUV $145 · Truck / Van $165" — the tiers above the sedan "from" price.
export function otherTiers(prices: Record<SizeTier, number>) {
  return sizeTiers
    .filter((t) => t.id !== 'sedan')
    .map((t) => `${t.name} ${usd(prices[t.id])}`)
    .join(' · ');
}

export function LaunchBadge({ dark = true }: { dark?: boolean }) {
  if (!site.launchPricing) return null;
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${
        dark ? 'bg-teal-400/15 text-teal-300 ring-1 ring-teal-400/30' : 'bg-teal-500/10 text-teal-700 ring-1 ring-teal-600/20'
      }`}
    >
      Launch pricing
    </span>
  );
}

// Price grid by vehicle size for any set of packages or plans.
export function TierTable({
  rows,
  caption,
}: {
  rows: { name: string; prices: Record<SizeTier, number>; note?: string; href?: string }[];
  caption: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-mist-200 sm:rounded-3xl">
      <table className="w-full table-fixed text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-navy-900 text-white">
          <tr>
            <th scope="col" className="w-[38%] px-3 py-3 font-semibold sm:px-5 sm:py-4">
              <span className="sr-only">Service</span>
            </th>
            {sizeTiers.map((t) => (
              <th key={t.id} scope="col" className="px-1 py-3 text-center font-semibold leading-tight sm:px-5 sm:py-4">
                {t.name}
                <span className="mt-0.5 hidden text-xs font-normal text-mist-200/70 sm:block">{t.desc}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-mist-200 bg-white">
          {rows.map((row) => (
            <tr key={row.name} className="even:bg-mist-50">
              <th scope="row" className="px-3 py-3.5 font-semibold leading-snug text-navy-900 sm:px-5">
                {row.href ? (
                  <Link href={row.href} className="hover:text-teal-700">
                    {row.name}
                  </Link>
                ) : (
                  row.name
                )}
                {row.note && <span className="block text-xs font-normal text-navy-500">{row.note}</span>}
              </th>
              {sizeTiers.map((t) => (
                <td key={t.id} className="px-1 py-3.5 text-center text-base font-black text-navy-900 sm:px-5 sm:text-lg">
                  {usd(row.prices[t.id])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function WinterServices({ dark = false }: { dark?: boolean }) {
  if (!site.winterServices) return null;
  return (
    <div className={`rounded-3xl p-5 sm:p-8 ${dark ? 'bg-navy-800/70 ring-1 ring-white/10' : 'bg-white ring-1 ring-mist-200'}`}>
      <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-teal-300' : 'text-teal-700'}`}>
        <Icon name="snow" className="h-4 w-4" /> Winter service
      </p>
      <h3 className={`mt-2 text-xl font-bold sm:text-2xl ${dark ? 'text-white' : 'text-navy-900'}`}>{winterServices.headline}</h3>
      <p className={`mt-2 text-sm ${dark ? 'text-mist-200/75' : 'text-navy-600'}`}>{winterServices.intro}</p>
      <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {winterServices.items.map((item) => (
          <li key={item.title}>
            <span className={`block font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{item.title}</span>
            <span className={`mt-0.5 block text-sm leading-relaxed ${dark ? 'text-mist-200/75' : 'text-navy-600'}`}>{item.desc}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact?package=interior-detailing"
        className={`mt-6 inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline ${
          dark ? 'text-teal-300' : 'text-teal-700'
        }`}
      >
        Book a winter Interior Detail →
      </Link>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5 text-amber-500" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < rating ? '' : 'opacity-25'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={iconPaths.star} />
        </svg>
      ))}
    </span>
  );
}

// Real customer reviews from site.ts. Renders nothing until reviews exist, so
// the site never shows proof it doesn't have.
export function Testimonials({ packageSlug }: { packageSlug?: string }) {
  const list = packageSlug ? reviews.filter((r) => !r.packageSlug || r.packageSlug === packageSlug) : reviews;
  if (list.length === 0) return null;
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Reviews" title="What customers say" />
        <ul className="grid gap-5 md:grid-cols-3">
          {list.slice(0, 6).map((r) => (
            <li key={`${r.name}-${r.town}`} className="flex flex-col rounded-3xl bg-mist-50 p-6 ring-1 ring-mist-200 sm:p-7">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-navy-700">&ldquo;{r.text}&rdquo;</blockquote>
              <p className="mt-5 text-sm font-semibold text-navy-900">
                {r.name} <span className="font-normal text-navy-500">· {r.town}</span>
              </p>
            </li>
          ))}
        </ul>
        {site.googleReviewUrl && (
          <p className="mt-8 text-center">
            <a
              href={site.googleReviewUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center font-semibold text-teal-700 underline-offset-4 hover:underline"
            >
              Read all our reviews on Google →
            </a>
          </p>
        )}
      </Container>
    </section>
  );
}

// Maintenance plan + gift card teasers — the repeat-business and gifting hooks.
export function PlanAndGiftCards() {
  const fromPlan = Math.min(...plans.map((p) => p.prices.sedan));
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Link
        href="/maintenance-plan"
        className="group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-mist-200 transition hover:ring-teal-500 sm:p-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700">
          <Icon name="refresh" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">Maintenance Plan — from {usd(fromPlan)}/visit</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
          A hand wash every other week or once a month at a set price, with first pick of time slots. Keep it clean
          without ever rebooking.
        </p>
        <span className="mt-5 font-semibold text-teal-700 group-hover:underline">See plan details →</span>
      </Link>
      <Link
        href="/gift-cards"
        className="group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-mist-200 transition hover:ring-teal-500 sm:p-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700">
          <Icon name="gift" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">Gift Cards</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
          The gift every car owner wants. Digital cards in any amount, delivered by email and easy to print.
        </p>
        <span className="mt-5 font-semibold text-teal-700 group-hover:underline">Buy a gift card →</span>
      </Link>
    </div>
  );
}
