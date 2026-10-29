import JsonLd from '@/components/JsonLd';
import { button, CheckItem, Container, CtaBanner, FaqList, Icon, PageHero, SectionHeading } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, graph } from '@/lib/schema';
import { packages, site, usd, type Faq } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Car Detailing Gift Cards — Sheffield Lake, OH',
  description: `Give a professionally detailed car. ${site.name} digital gift cards in any amount, delivered by email and easy to print. Mobile detailing in Sheffield Lake & Lorain County.`,
  path: '/gift-cards',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Gift Cards', path: '/gift-cards' },
];

// Until the Square eGift Card page exists, orders come in by email.
const orderHref =
  site.squareGiftCardUrl ||
  `${site.email.href}?subject=${encodeURIComponent('Gift card order')}&body=${encodeURIComponent(
    'Hi James,\n\nI would like to buy a gift card.\n\nAmount:\nRecipient name:\nDeliver to (email, or print it myself):\nMessage for the card:\nMy phone number:\n',
  )}`;

// Square's checkout opens in a new tab; the email fallback opens the mail app.
const external = site.squareGiftCardUrl ? { target: '_blank', rel: 'noopener' } : {};

const faqs: Faq[] = [
  {
    q: 'What can a gift card be used for?',
    a: 'Any package, add-on or maintenance plan visit. If the service costs more than the card — for example a larger vehicle — the difference is paid at the appointment.',
  },
  {
    q: 'How is the gift card delivered?',
    a: 'By email. You can send it straight to the recipient or to yourself to print and put in a card.',
  },
  {
    q: 'How does the recipient book?',
    a: `They book online or call ${site.phone.display} and mention the gift card. We confirm the balance when we confirm their appointment.`,
  },
  {
    q: 'Do you offer gift cards for realtors or businesses?',
    a: `Yes. Full Detail gift cards come in packs of 5 for closing gifts, client thank-yous and employee perks. Email ${site.email.display} or call ${site.phone.display}.`,
  },
];

export default function GiftCardsPage() {
  const buy = site.squareGiftCardUrl ? 'Buy a digital gift card' : 'Order a gift card by email';

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), faqSchema(faqs))} />
      <PageHero
        breadcrumbs={crumbs}
        eyebrow="Gift Cards"
        title={
          <>
            The gift every <span className="text-teal-300">car owner</span> wants
          </>
        }
        intro="A professional detail in their own driveway — no drop-off, no waiting room. Digital gift cards in any amount, delivered by email and easy to print."
      >
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <a
            href={orderHref}
            data-track="gift_card_click"
            {...external}
            className={button.primary}
          >
            <Icon name="gift" /> {buy}
          </a>
          <a href={site.phone.href} className={button.secondary}>
            <Icon name="phone" /> {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-mist-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Popular Amounts"
            title="Pick a package, or any amount"
            intro="Sedan prices shown. Any amount works — the card covers whatever service they choose."
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <li
                key={p.slug}
                className={`flex flex-col rounded-3xl bg-white p-6 sm:p-8 ${p.featured ? 'ring-2 ring-teal-500' : 'ring-1 ring-mist-200'}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {p.featured ? 'Most gifted' : 'Gift'}
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy-900">{p.name}</h3>
                <p className="mt-1 text-4xl font-black text-navy-900">{usd(p.price)}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{p.tagline}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <a
              href={orderHref}
              data-track="gift_card_click"
              {...external}
              className={`${button.dark} w-full sm:w-auto`}
            >
              <Icon name="gift" /> {buy}
            </a>
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading center={false} eyebrow="How It Works" title="Easy to give, easy to use" />
            <ol className="space-y-5">
              {[
                ['Choose an amount', 'A package price or any amount you like.'],
                ['We send the card', 'By email — forward it, or print it and tuck it in a card.'],
                ['They book when it suits them', `Online or by phone at ${site.phone.display}. We bring everything to their driveway.`],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-400 font-black text-navy-900">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">{title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-navy-600">{desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl bg-navy-900 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">For realtors, lenders &amp; businesses</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Closing gifts and client thank-yous</h2>
            <p className="mt-3 leading-relaxed text-mist-200/80">
              &ldquo;A Full Detail for your new driveway.&rdquo; Gift cards in packs of 5 — a thank-you clients actually
              use.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem dark>Packs of 5 Full Detail gift cards</CheckItem>
              <CheckItem dark>Printed or digital, with your note</CheckItem>
              <CheckItem dark>Also available as an employee perk</CheckItem>
            </ul>
            <a
              href={`${site.email.href}?subject=${encodeURIComponent('Gift card packs')}`}
              className={`${button.primary} mt-8 w-full sm:w-auto`}
            >
              <Icon name="mail" /> Ask about packs
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Gift card questions" />
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <CtaBanner title="Treat yourself instead?" text="Book a detail for your own car — we bring the shine to your driveway." />
    </>
  );
}
