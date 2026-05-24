import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Detailing Packages & Pricing",
  description:
    "Browse Clean Lab Detailing's mobile car detailing packages — Exterior Wash ($50), Interior Detail ($75), and Full Detail ($120). Delivered to your door.",
  openGraph: {
    title: "Detailing Packages & Pricing | Clean Lab Detailing",
    description:
      "Mobile car detailing packages starting at $50. Exterior wash, interior detail, and full detail — we come to you.",
    url: "https://www.cleanlabdetailing.com/packages",
  },
};

const packages = [
  {
    name: 'Exterior Wash',
    price: '$50',
    slug: 'exterior-wash',
    icon: '🚗',
    tagline: 'A spotless exterior from bumper to bumper.',
    description:
      'Our hand wash service removes surface dirt, grime, and road film using premium pH-neutral shampoo and the two-bucket method for scratch-free results.',
    duration: '45–60 mins',
    features: [
      'Pre-rinse & snow foam treatment',
      'Hand wash exterior with premium shampoo',
      'Wheel & rim deep cleaning',
      'Tire dressing & shine',
      'Exterior window cleaning (streak-free)',
      'Door jamb wipe down',
      'Bug & tar removal',
      'Final rinse & microfiber dry',
    ],
    highlight: false,
  },
  {
    name: 'Interior Detail',
    price: '$75',
    slug: 'interior-detailing',
    icon: '✨',
    tagline: 'A deep-cleaned cabin that feels brand new.',
    description:
      'We restore your interior from top to bottom — vacuuming, wiping, conditioning, and deodorizing every surface for a fresh, like-new environment.',
    duration: '60–90 mins',
    features: [
      'Full vacuum (seats, carpet, trunk)',
      'Dashboard & instrument cluster cleaning',
      'Center console & cup holder detailing',
      'Door panel & armrest wipe down',
      'Interior window cleaning',
      'Seat cleaning & conditioning',
      'Floor mat shampoo & extraction',
      'Air vent dusting',
    ],
    highlight: false,
  },
  {
    name: 'Full Detail',
    price: '$120',
    slug: 'full-detail',
    icon: '🏆',
    tagline: 'The complete package — showroom ready.',
    description:
      'Every inch of your vehicle, inside and out. Combine the full exterior wash and interior detail for the ultimate clean with premium finishing touches.',
    duration: '2–3 hours',
    features: [
      'Everything in Exterior Wash',
      'Everything in Interior Detail',
      'Full glass treatment (inside & out)',
      'Exterior trim wipe down & dressing',
      'Engine bay wipe down',
      'Air freshener application',
      'Final walk-through inspection',
    ],
    highlight: true,
  },
];

const addons = [
  {
    name: 'Engine Bay Cleaning',
    price: '+$30',
    desc: 'Professional engine compartment degreasing and detailing for a clean, protected engine bay.',
  },
  {
    name: 'Pet Hair Removal',
    price: '+$25',
    desc: 'Specialized tools and techniques to remove stubborn pet hair from upholstery and carpet.',
  },
  {
    name: 'Odor Elimination Treatment',
    price: '+$20',
    desc: 'Enzyme-based treatment to neutralize tough odors including smoke, food, and pet smells.',
  },
  {
    name: 'Ceramic Coating Spray',
    price: '+$40',
    desc: 'A durable ceramic spray coating that adds shine and hydrophobic protection to your paint.',
  },
  {
    name: 'Headlight Restoration',
    price: '+$35',
    desc: 'Wet sanding and polishing to restore cloudy or yellowed headlights to crystal clarity.',
  },
  {
    name: 'Clay Bar Treatment',
    price: '+$30',
    desc: 'Deep decontamination of your paint surface for a smooth, glass-like finish.',
  },
  {
    name: 'Leather Conditioning',
    price: '+$25',
    desc: 'Premium leather cleaner and conditioner to restore suppleness and protect leather surfaces.',
  },
  {
    name: 'Paint Protection Film Spot',
    price: '+$50',
    desc: 'Spot PPF application on high-impact areas like the front bumper edge or hood.',
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="bg-black py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Detailing{' '}
            <span className="text-blue-500">Packages</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Transparent pricing with no hidden fees. Every package uses
            professional-grade products and is performed at your location.
          </p>
        </div>
      </section>

      {/* ── Package Cards ─────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  pkg.highlight
                    ? 'ring-4 ring-blue-500/50'
                    : 'border border-neutral-800'
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-blue-600 text-white text-center text-xs font-bold py-2.5 uppercase tracking-wider">
                    Most Popular · Best Value
                  </div>
                )}
                <div className="bg-neutral-900 p-8 flex flex-col flex-1">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h2 className="text-2xl font-black text-white mb-1">
                    {pkg.name}
                  </h2>
                  <p className="text-4xl font-black text-blue-400 mb-3">
                    {pkg.price}
                  </p>
                  <p className="text-neutral-500 text-xs mb-1">
                    ⏱ {pkg.duration}
                  </p>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-neutral-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="w-full text-center py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      Book This Package
                    </Link>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="w-full text-center py-3 rounded-full font-semibold border border-neutral-700 text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-colors text-sm"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ──────────────────────────────────────────────── */}
      <section id="addons" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">
              Premium Add-Ons
            </h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              Customize any package with our à la carte services. Add-ons can
              be combined with any package at time of booking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-neutral-900 text-sm leading-tight">
                    {addon.name}
                  </h3>
                  <span className="text-blue-600 font-black text-sm ml-3 shrink-0">
                    {addon.price}
                  </span>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-neutral-500 mb-6">
              Have a special request or need something custom? We&apos;ll do our
              best to accommodate you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book with Add-Ons
            </Link>
          </div>
        </div>
      </section>

      {/* ── Help Banner ───────────────────────────────────────────── */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black text-white mb-3">
            Not sure which package to choose?
          </h3>
          <p className="text-neutral-400 mb-8">
            Give us a call or drop us a message. We&apos;ll help you pick the
            right service for your vehicle&apos;s needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:5551234567"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
