'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { Icon } from './ui';

const links = [
  { href: '/packages', label: 'Packages & Pricing' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => !href.includes('#') && pathname.startsWith(href);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Image src="/logo-mark.svg" alt="" width={36} height={36} preload />
          <span className="text-base font-bold tracking-tight text-white">
            Clean Lab <span className="text-teal-300">Detailing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? 'text-teal-300' : 'text-mist-200/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phone.href} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-300 transition-colors">
            <Icon name="phone" className="h-4 w-4 text-teal-300" />
            {site.phone.display}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-teal-300"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-mist-200 hover:text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-navy-900 px-4 pb-5 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`flex min-h-13 items-center border-b border-white/10 text-base font-medium ${
                isActive(link.href) ? 'text-teal-300' : 'text-mist-100'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={site.phone.href}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-semibold text-white"
            >
              <Icon name="phone" className="h-4 w-4" /> {site.phone.display}
            </a>
            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-full bg-teal-400 text-sm font-semibold text-navy-900"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
