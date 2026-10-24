import Link from 'next/link';
import Image from 'next/image';
import { hours, packages, serviceAreas, site, usd } from '@/lib/site';
import { Icon } from './ui';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist-200/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo-mark.svg" alt="" width={36} height={36} />
              <span className="text-base font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Professional mobile car detailing based in Sheffield Lake, Ohio, serving Lorain County and nearby
              communities. Hand washes, interior details and full details — right in your driveway.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <a href={site.phone.href} className="flex items-center gap-2.5 text-white hover:text-teal-300 transition-colors">
                <Icon name="phone" className="h-4 w-4 text-teal-400" />
                {site.phone.display}
              </a>
              <a href={site.email.href} className="flex items-center gap-2.5 text-white hover:text-teal-300 transition-colors">
                <Icon name="mail" className="h-4 w-4 text-teal-400" />
                {site.email.display}
              </a>
              <p className="flex items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-teal-400" />
                Mobile service · {site.region.city}, {site.region.state}
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Packages</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {packages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/packages/${p.slug}`} className="hover:text-teal-300 transition-colors">
                    {p.name} — {usd(p.price)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/packages#addons" className="hover:text-teal-300 transition-colors">
                  Add-On Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors">
                  Book a Detail
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="hover:text-teal-300 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
              className="mt-6 inline-flex rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-teal-300"
            >
              Book Online
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Built by{' '}
            <a
              href="https://www.foundryframe.com"
              target="_blank"
              rel="noopener"
              className="text-mist-200 hover:text-teal-300 transition-colors"
            >
              Foundry Frame
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
