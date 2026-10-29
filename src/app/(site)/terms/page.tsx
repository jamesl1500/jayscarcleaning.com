import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: `The terms that apply when you book mobile car detailing with ${site.name}. Questions? Email ${site.email.display}.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="October 29, 2026"
      intro={`These terms apply when you use this website or book a service with ${site.name}. By booking, you agree to them.`}
    >
      <h2>Our services</h2>
      <p>
        {site.name} is a mobile car detailing business based in {site.region.city}, {site.region.stateName}. We come to
        your home or workplace and detail your vehicle by hand.
      </p>

      <h2>Booking</h2>
      <p>
        Submitting the booking form is a request, not a confirmed appointment. We confirm your date and time by phone, text
        or email, usually within 24 hours. If we can&apos;t make your requested time, we&apos;ll offer another.
      </p>

      <h2>What you provide</h2>
      <p>
        You need to give us access to a water source (an outdoor spigot) and an electrical outlet near where the vehicle is
        parked. You must own the vehicle or have the owner&apos;s permission to have it detailed, and have permission to
        have the work done at the service location.
      </p>

      <h2>Pricing and payment</h2>
      <p>
        Prices on this site are starting prices. The final price can change based on vehicle size and condition (for
        example heavy pet hair, sand, mud or stains) or add-ons you choose. We&apos;ll tell you about any change before we
        start the work. Payment is due when the service is complete.
      </p>

      <h2>Rescheduling and cancellations</h2>
      <p>
        Need to change or cancel? Let us know as early as possible by calling {site.phone.display} or emailing{' '}
        {site.email.display}. We may reschedule for bad weather or other conditions that make it unsafe or impractical
        to work, and we&apos;ll contact you to find a new time.
      </p>

      <h2>Before we start</h2>
      <ul>
        <li>Please remove valuables and personal items from the vehicle. We aren&apos;t responsible for items left inside.</li>
        <li>
          We look over the vehicle before starting and will point out existing damage, such as scratches, chips, worn
          upholstery or loose trim. We aren&apos;t responsible for pre-existing damage or wear.
        </li>
        <li>
          Some stains, odors, scratches and swirl marks can&apos;t be fully removed. We&apos;ll always do our best and be
          upfront about what to expect.
        </li>
      </ul>

      <h2>Satisfaction and concerns</h2>
      <p>
        If something isn&apos;t right, tell us within 24 hours of the service and we&apos;ll work with you to make it
        right. If you believe we damaged your vehicle, contact us as soon as possible so we can look into it.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, our total liability for any claim related to a service is limited to the
        amount you paid for that service. We are not liable for indirect or consequential losses.
      </p>

      <h2>Website use</h2>
      <p>
        The content on this site, including text, photos and logos, belongs to {site.name}. Information on the site is
        provided as is and may change without notice. How we handle your information is described in our{' '}
        <Link href="/privacy" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2>Changes and governing law</h2>
      <p>
        We may update these terms from time to time. The version posted here when you book applies to that booking. These
        terms are governed by the laws of the State of {site.region.stateName}.
      </p>
    </LegalPage>
  );
}
