import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${site.name} collects and uses your information when you visit our site or book a detail. Questions? Email ${site.email.display}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="October 29, 2026"
      intro={`${site.name} only collects what we need to schedule and perform your detail. We never sell your information.`}
    >
      <h2>What we collect</h2>
      <p>When you fill out our booking form, we collect:</p>
      <ul>
        <li>Your name, phone number and email address</li>
        <li>The service address and town</li>
        <li>Your vehicle type, chosen package and add-ons</li>
        <li>Your preferred date and time, and any notes you add</li>
      </ul>
      <p>
        If you call, text or email us, we keep the contact details and messages you send so we can reply and keep track
        of your appointment.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To confirm, schedule and carry out your appointment</li>
        <li>To contact you about your booking, including changes and reminders</li>
        <li>To answer your questions and handle any concerns</li>
        <li>To understand how people find and use our website so we can improve it</li>
      </ul>
      <p>We don&apos;t send marketing messages unless you ask us to.</p>

      <h2>Who we share it with</h2>
      <p>
        We do not sell or rent your personal information. We share it only with service providers that help us run the
        business, such as our email provider (which delivers booking requests and confirmations) and our website host,
        and only as needed for them to provide that service. We may also disclose information if required by law.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site uses Google Analytics and Google Ads, which use cookies and similar technologies to measure visits and
        see which ads lead to bookings or calls. This data is about how the site is used, not who you are. You can block
        or delete cookies in your browser settings, or opt out of Google Analytics with Google&apos;s{' '}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener"
          className="font-semibold text-teal-700 underline-offset-4 hover:underline"
        >
          browser add-on
        </a>
        .
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep booking details for as long as we need them to serve you and for our business records. You can ask us to
        delete your information at any time, unless we&apos;re required to keep it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask to see, correct or delete the personal information we hold about you by emailing{' '}
        <a href={site.email.href} className="break-all font-semibold text-teal-700 underline-offset-4 hover:underline">
          {site.email.display}
        </a>
        .
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect your information. No website or email system is perfectly secure, so please
        don&apos;t send sensitive information like payment card numbers through the booking form.
      </p>

      <h2>Children</h2>
      <p>Our services are for adults. We don&apos;t knowingly collect information from children under 13.</p>

      <h2>Changes</h2>
      <p>
        If we update this policy, we&apos;ll post the new version here with a new date. See also our{' '}
        <Link href="/terms" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </LegalPage>
  );
}
