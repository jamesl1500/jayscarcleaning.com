import Link from 'next/link';
import { button, HeroBackdrop, Icon } from '@/components/ui';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <main id="main" className="relative flex flex-1 items-center overflow-hidden bg-navy-900 py-24">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">This page took a wrong turn.</h1>
        <p className="mt-5 text-lg text-mist-200/85">The page you&apos;re looking for doesn&apos;t exist, but a spotless car is still one click away.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className={button.primary}>
            Back to Home
          </Link>
          <a href={site.phone.href} className={button.secondary}>
            <Icon name="phone" /> {site.phone.display}
          </a>
        </div>
      </div>
    </main>
  );
}
