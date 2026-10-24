'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { Icon } from './ui';

const barButton =
  'flex min-h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors';

// Picks the second button for the current page: funnels scroll to their own
// form (keeping visitors in the funnel), package pages preselect the package,
// and pages that already show the form offer email instead.
function secondaryAction(pathname: string) {
  if (pathname.startsWith('/lp/')) return { href: '#book', label: 'Book Now', icon: 'calendar' as const, anchor: true };
  if (pathname === '/contact' || pathname === '/thank-you')
    return { href: site.email.href, label: 'Email Us', icon: 'mail' as const, anchor: true };
  const pkg = /^\/packages\/([^/]+)$/.exec(pathname)?.[1];
  return { href: pkg ? `/contact?package=${pkg}` : '/contact', label: 'Book a Detail', icon: 'calendar' as const, anchor: false };
}

// Sticky call / book bar on small screens — the two actions mobile visitors want.
export default function MobileActionBar() {
  const action = secondaryAction(usePathname());
  const content = (
    <>
      <Icon name={action.icon} className="h-4 w-4" /> {action.label}
    </>
  );
  const secondaryCls = `${barButton} bg-teal-400 text-navy-900 hover:bg-teal-300`;

  return (
    <>
      <div className="h-[calc(4.75rem+env(safe-area-inset-bottom))] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick actions"
        className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2.5 border-t border-white/10 bg-navy-900/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
      >
        <a href={site.phone.href} className={`${barButton} border border-white/20 text-white hover:border-teal-300`}>
          <Icon name="phone" className="h-4 w-4" /> Call Now
        </a>
        {action.anchor ? (
          <a href={action.href} className={secondaryCls}>
            {content}
          </a>
        ) : (
          <Link href={action.href} className={secondaryCls}>
            {content}
          </Link>
        )}
      </nav>
    </>
  );
}
