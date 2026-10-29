import Link from 'next/link';
import { button, Container, HeroBackdrop, Icon, WhatYouNeed } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { getBookable, referral, site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Booking Request Received',
  description: 'Thanks for booking with Clean Lab Detailing. We will confirm your appointment within 24 hours.',
  path: '/thank-you',
  noindex: true,
});

export default async function ThankYouPage({ searchParams }: PageProps<'/thank-you'>) {
  const { package: slug } = await searchParams;
  const pkg = typeof slug === 'string' ? getBookable(slug) : undefined;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <HeroBackdrop />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-400 text-navy-900">
            <Icon name="check" className="h-8 w-8" strokeWidth={3} />
          </span>
          <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:mt-8 sm:text-5xl">You&apos;re on the schedule!</h1>
          <p className="mt-4 text-base leading-relaxed text-mist-200/85 sm:mt-5 sm:text-lg">
            We received your {pkg ? <strong className="text-white">{pkg.name}</strong> : 'booking'}&nbsp;request and sent a
            confirmation to your email. We&apos;ll reach out within 24 hours to lock in your time.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
          <WhatYouNeed dark />
        </div>

        <div className="mx-auto mt-6 max-w-2xl rounded-3xl bg-teal-400 p-6 text-navy-900 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em]">Refer a friend</p>
          <h2 className="mt-2 text-2xl font-black">{referral.headline}</h2>
          <p className="mt-2 leading-relaxed text-navy-800">
            {referral.desc} Just have them mention your name when they book.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">

          <a href={site.phone.href} className={button.primary}>
            <Icon name="phone" /> Questions? {site.phone.display}
          </a>
          <Link href="/" className={button.secondary}>
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
