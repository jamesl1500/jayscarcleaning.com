import Link from 'next/link';
import Image from 'next/image';
import { hours, packages, serviceAreas, site, usd } from '@/lib/site';
import { Icon } from './ui';

// Only profiles with a URL set in site.ts are shown.
const socials = (
  [
    ['Instagram', site.social.instagram],
    ['TikTok', site.social.tiktok],
    ['Facebook', site.social.facebook],
  ] as [string, string][]
).filter(([, url]) => url);

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist-200/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex min-h-11 items-center gap-2.5">
              <Image src="/logo-mark.svg" alt="" width={36} height={36} />
              <span className="text-base font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Professional mobile car detailing based in Sheffield Lake, Ohio, serving Lorain County and nearby
              communities. Hand washes, interior details and full details — right in your driveway.
            </p>
            <address className="mt-5 text-sm not-italic">
              <a href={site.phone.href} className="flex min-h-11 items-center gap-2.5 text-white hover:text-teal-300 transition-colors">
                <Icon name="phone" className="h-4 w-4 text-teal-400" />
                {site.phone.display}
              </a>
              <a href={site.email.href} className="flex min-h-11 items-center gap-2.5 text-white hover:text-teal-300 transition-colors">
                <Icon name="mail" className="h-4 w-4 text-teal-400" />
                {site.email.display}
              </a>
              <p className="flex min-h-11 items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-teal-400" />
                Mobile service · {site.region.city}, {site.region.state}
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Packages</h2>
            <ul className="mt-2 text-sm">
              {packages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/packages/${p.slug}`} className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                    {p.name} — from {usd(p.price)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/packages#addons" className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                  Add-On Services
                </Link>
              </li>
              <li>
                <Link href="/maintenance-plan" className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                  Maintenance Plan
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                  Book a Detail
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h2>
            <ul className="mt-2 text-sm">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="inline-flex min-h-11 min-w-11 items-center hover:text-teal-300 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Hours</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {hours.map((h) => (
                <div key={h.label}>
                  <dt className="text-white">{h.label}</dt>
                  <dd>{h.display}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-teal-400 px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-teal-300"
            >
              Book Online
            </Link>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 text-sm">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex min-h-11 items-center text-white hover:text-teal-300 transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-1 border-t border-white/10 pt-6 text-center text-xs sm:flex-row sm:gap-3">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/terms" className="inline-flex min-h-11 items-center text-mist-200 hover:text-teal-300 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="inline-flex min-h-11 items-center text-mist-200 hover:text-teal-300 transition-colors">
              Privacy
            </Link>
          </p>
          <p>
            Built by{' '}
            <a
              href="https://www.foundryframe.com"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center text-mist-200 hover:text-teal-300 transition-colors"
            >
              Foundry Frame
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
