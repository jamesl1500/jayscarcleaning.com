import Link from 'next/link';
import { site } from '@/lib/site';
import { Icon } from './ui';

// Sticky call / book bar on small screens — the two actions mobile visitors want.
export default function MobileActionBar() {
  return (
    <>
      <div className="h-[4.5rem] md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-navy-900/95 p-3 backdrop-blur md:hidden">
        <a
          href={site.phone.href}
          className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-white"
        >
          <Icon name="phone" className="h-4 w-4" /> Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-full bg-teal-400 py-3 text-sm font-semibold text-navy-900"
        >
          <Icon name="calendar" className="h-4 w-4" /> Book a Detail
        </Link>
      </div>
    </>
  );
}
