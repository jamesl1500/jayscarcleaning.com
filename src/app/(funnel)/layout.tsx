import Image from 'next/image';
import Link from 'next/link';
import MobileActionBar from '@/components/MobileActionBar';
import { Icon } from '@/components/ui';
import { site } from '@/lib/site';

// Distraction-free layout for landing pages: logo, phone, and nothing else to
// click away to.
export default function FunnelLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
            <Image src="/logo-mark.svg" alt="" width={36} height={36} preload />
            <span className="text-base font-bold tracking-tight text-white">
              Clean Lab <span className="text-teal-300">Detailing</span>
            </span>
          </Link>
          <a
            href={site.phone.href}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-teal-300 hover:text-teal-300 transition-colors"
          >
            <Icon name="phone" className="h-4 w-4" />
            <span className="hidden sm:inline">{site.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="bg-navy-950 py-8 text-center text-xs text-mist-200/60">
        <p>
          © {new Date().getFullYear()} {site.name} · Mobile car detailing in {site.region.city}, {site.region.state} ·{' '}
          <a href={site.phone.href} className="hover:text-teal-300">
            {site.phone.display}
          </a>{' '}
          ·{' '}
          <a href={site.email.href} className="hover:text-teal-300">
            {site.email.display}
          </a>
        </p>
      </footer>
      <MobileActionBar />
    </>
  );
}
