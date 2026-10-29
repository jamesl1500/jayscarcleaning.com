import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { button, CheckItem, Container, CtaBanner, FaqList, Icon, PageHero, SectionHeading, TierTable } from '@/components/ui';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, graph, ids } from '@/lib/schema';
import { getPackage, planPerks, plans, priceRange, site, usd, type Faq } from '@/lib/site';

const fromPrice = Math.min(...plans.map((p) => p.prices.sedan));

export const metadata = pageMetadata({
  title: `Car Wash Maintenance Plan — from ${usd(fromPrice)}/visit | Sheffield Lake`,
  description: `A hand car wash in your driveway every other week or once a month, from ${usd(fromPrice)} a visit. First pick of time slots. Serving Sheffield Lake & Lorain County.`,
  path: '/maintenance-plan',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Maintenance Plan', path: '/maintenance-plan' },
];

const wash = getPackage('exterior-wash')!;

const faqs: Faq[] = [
  {
    q: 'What does each plan visit include?',
    a: `A full Exterior Wash: snow foam pre-rinse, two-bucket hand wash, wheels and tires, glass, door jambs and bug & tar removal. Add-ons can be added to any visit.`,
  },
  {
    q: 'How do I pay?',
    a: 'You pay per visit at the plan price. There is no sign-up fee.',
  },
  {
    q: 'Can I pause or cancel?',
    a: 'Yes. Let us know before your next visit and we will pause or cancel the plan.',
  },
  {
    q: 'What happens in winter?',
    a: 'We schedule around the weather. On days above freezing we can do a rinseless wash, and if you have a garage we can wash the car inside it.',
  },
];

export default function MaintenancePlanPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), faqSchema(faqs), {
          '@type': 'Service',
          name: 'Mobile car wash maintenance plan',
          serviceType: 'Recurring mobile car wash',
          provider: { '@id': ids.business },
          url: `${site.url}/maintenance-plan`,
          offers: plans.map((p) => ({
            '@type': 'Offer',
            name: p.name,
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              minPrice: priceRange(p.prices).min.toFixed(2),
              maxPrice: priceRange(p.prices).max.toFixed(2),
              priceCurrency: 'USD',
              unitText: 'visit',
            },
          })),
        })}
      />
      <PageHero
        breadcrumbs={crumbs}
        eyebrow="Maintenance Plan"
        title={
          <>
            A clean car, <span className="text-teal-300">on repeat</span>
          </>
        }
        intro={`A hand wash in your driveway every other week or once a month, from ${usd(fromPrice)} a visit. Same day, same time — and first pick of the calendar.`}
      >
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <Link href={`/contact?package=${plans[0].slug}`} className={button.primary}>
            Start a plan <Icon name="arrow" />
          </Link>
          <a href={site.phone.href} className={button.secondary}>
            <Icon name="phone" /> {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-mist-50 py-16 sm:py-24">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="Plan Pricing"
            title="Per-visit prices by vehicle size"
            intro={`Compared with ${usd(wash.price)} for a one-off sedan Exterior Wash.`}
          />
          <TierTable
            caption="Maintenance plan prices per visit by vehicle size"
            rows={plans.map((p) => ({ name: p.name, prices: p.prices, note: `Per visit, ${p.cadence}` }))}
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading center={false} eyebrow="What You Get" title="Why plan members love it" />
            <ul className="space-y-4">
              {planPerks.map((perk) => (
                <CheckItem key={perk}>{perk}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy-900 p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-white">Start your plan</h2>
            <p className="mt-3 leading-relaxed text-mist-200/80">
              Pick a plan on the booking form and choose the day and time that suits you. We&apos;ll confirm and keep that
              slot for you.
            </p>
            <div className="mt-6 grid gap-3">
              {plans.map((p) => (
                <Link key={p.slug} href={`/contact?package=${p.slug}`} className={button.primary}>
                  {p.name} — from {usd(p.prices.sedan)}
                </Link>
              ))}
              <a href={site.phone.href} className={button.secondary}>
                <Icon name="phone" /> {site.phone.display}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-16 sm:py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Plan questions" />
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
