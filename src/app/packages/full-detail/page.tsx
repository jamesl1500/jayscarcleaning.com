import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Full Car Detail — $120",
  description:
    "Complete mobile car detailing package for $120. Includes full exterior wash and interior detail — engine bay, glass treatment, trim dressing, and more. Book online.",
  openGraph: {
    title: "Full Car Detail — $120 | Clean Lab Detailing",
    description:
      "The ultimate mobile detail for $120. Everything inside and out — showroom ready, delivered to your driveway.",
    url: "https://www.cleanlabdetailing.com/packages/full-detail",
  },
};

const included = [
  {
    section: 'Exterior',
    items: [
      {
        title: 'Pre-Rinse & Snow Foam',
        desc: 'Thorough pre-soak to loosen surface dirt and grime before any contact.',
      },
      {
        title: 'Two-Bucket Hand Wash',
        desc: 'pH-neutral shampoo with the two-bucket method for scratch-free results.',
      },
      {
        title: 'Wheel & Rim Deep Clean',
        desc: 'Dedicated wheel cleaner and brushes to remove brake dust and buildup.',
      },
      {
        title: 'Tire Dressing & Shine',
        desc: 'Sling-free dressing applied for a rich, dark, long-lasting finish.',
      },
      {
        title: 'Bug & Tar Spot Treatment',
        desc: 'Targeted removal of stubborn bug splatter and road tar deposits.',
      },
      {
        title: 'Exterior Trim Dressing',
        desc: 'All exterior plastic and rubber trim dressed and protected.',
      },
      {
        title: 'Door Jamb Wipe Down',
        desc: 'All four door jambs thoroughly cleaned — often missed elsewhere.',
      },
    ],
  },
  {
    section: 'Interior',
    items: [
      {
        title: 'Full Interior Vacuum',
        desc: 'Seats, carpet, trunk, and all crevices vacuumed thoroughly.',
      },
      {
        title: 'Dashboard & Console Cleaning',
        desc: 'All surfaces wiped down with appropriate interior cleaner.',
      },
      {
        title: 'Seat Cleaning & Conditioning',
        desc: 'Fabric or leather seats cleaned and conditioned.',
      },
      {
        title: 'Floor Mat Shampoo & Extraction',
        desc: 'Mats removed, shampooed, scrubbed, and hot-water extracted.',
      },
      {
        title: 'Air Vent Dusting',
        desc: 'Compressed air and detailing brushes clear all vents.',
      },
    ],
  },
  {
    section: 'Premium Finishing',
    items: [
      {
        title: 'Full Glass Treatment',
        desc: 'Streak-free cleaner on all interior and exterior glass surfaces.',
      },
      {
        title: 'Engine Bay Wipe Down',
        desc: 'Exterior engine bay surfaces wiped and degreased.',
      },
      {
        title: 'Air Freshener Application',
        desc: 'Premium long-lasting air freshener applied to the cabin.',
      },
      {
        title: 'Final Inspection Walkthrough',
        desc: 'We walk through the completed work with you before we leave.',
      },
    ],
  },
];

const addons = [
  {
    name: 'Ceramic Coating Spray',
    price: '+$40',
    desc: 'Hydrophobic ceramic protection that makes your clean last longer.',
    recommended: true,
  },
  {
    name: 'Clay Bar Treatment',
    price: '+$30',
    desc: 'Paint decontamination for a glass-smooth surface after washing.',
    recommended: true,
  },
  {
    name: 'Pet Hair Removal',
    price: '+$25',
    desc: 'Specialized tools to extract stubborn pet hair from all upholstery.',
    recommended: false,
  },
  {
    name: 'Odor Elimination',
    price: '+$20',
    desc: 'Enzyme-based odor neutralizer for smoke, food, and pet smells.',
    recommended: false,
  },
  {
    name: 'Leather Conditioning',
    price: '+$25',
    desc: 'Deep conditioner to restore and protect leather seats and trim.',
    recommended: false,
  },
  {
    name: 'Headlight Restoration',
    price: '+$35',
    desc: 'Restore clarity to cloudy or yellowed headlights.',
    recommended: false,
  },
];

export default function FullDetailPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-black py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/packages"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Packages
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Most Popular · Best Value
              </div>
              <p className="text-blue-400 font-medium text-sm mb-2 uppercase tracking-wider">
                Package 03
              </p>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
                🏆 Full Detail
              </h1>
              <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                The ultimate treatment — a complete exterior and interior detail
                with premium finishing touches for a true showroom-ready result.
              </p>
            </div>
            <div className="md:text-right shrink-0">
              <p className="text-6xl font-black text-blue-500">$120</p>
              <p className="text-neutral-500 text-sm mt-1">Starting price</p>
              <p className="text-neutral-500 text-xs mt-1">⏱ 2–3 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value callout ─────────────────────────────────────────── */}
      <section className="bg-blue-600/10 border-b border-blue-600/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 text-sm">
            <span className="font-bold text-white">Save $5</span> vs booking
            Exterior Wash ($50) + Interior Detail ($75) separately. Get
            everything in one appointment.
          </p>
        </div>
      </section>

      {/* ── Details ──────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Included list */}
            <div className="lg:col-span-3 space-y-10">
              <h2 className="text-3xl font-black text-white">
                What&apos;s Included
              </h2>
              {included.map((group) => (
                <div key={group.section}>
                  <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-3">
                    <span className="flex-1 h-px bg-blue-600/30" />
                    {group.section}
                    <span className="flex-1 h-px bg-blue-600/30" />
                  </h3>
                  <ul className="space-y-5">
                    {group.items.map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-neutral-400 text-sm mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary card */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 ring-2 ring-blue-500/30">
                <h3 className="text-white font-bold text-xl mb-6">
                  Package Summary
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    { label: 'Duration', value: '2–3 hours' },
                    { label: 'Service Type', value: 'Full Exterior + Interior' },
                    { label: 'Location', value: 'We Come to You' },
                    { label: 'Products', value: 'Professional Grade' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between text-neutral-400 pb-4 border-b border-neutral-800 last:border-0 last:pb-0"
                    >
                      <span>{row.label}</span>
                      <span className="text-white font-semibold">
                        {row.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-neutral-400">Starting Price</span>
                    <span className="text-blue-400 font-black text-2xl">
                      $120
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Book Full Detail — $120
                </Link>
              </div>

              {/* Compare */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">
                  Compare Packages
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Exterior Wash', price: '$50', slug: 'exterior-wash' },
                    { name: 'Interior Detail', price: '$75', slug: 'interior-detailing' },
                    { name: 'Full Detail', price: '$120', slug: 'full-detail', current: true },
                  ].map((pkg) => (
                    <Link
                      key={pkg.slug}
                      href={`/packages/${pkg.slug}`}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        pkg.current
                          ? 'bg-blue-600/20 border border-blue-500/40 cursor-default'
                          : 'hover:bg-neutral-800 border border-transparent'
                      }`}
                    >
                      <span
                        className={`text-sm ${pkg.current ? 'text-blue-300 font-semibold' : 'text-neutral-400'}`}
                      >
                        {pkg.name}
                        {pkg.current && (
                          <span className="ml-2 text-xs text-blue-400">
                            ← current
                          </span>
                        )}
                      </span>
                      <span
                        className={`font-black ${pkg.current ? 'text-blue-400' : 'text-neutral-500'}`}
                      >
                        {pkg.price}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Add-Ons ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-3">
            Elevate Your Full Detail
          </h2>
          <p className="text-neutral-500 mb-10">
            Take your Full Detail to the next level with these premium add-ons:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className={`relative bg-neutral-50 rounded-2xl p-6 hover:shadow-md transition-all ${
                  addon.recommended
                    ? 'border-2 border-blue-200'
                    : 'border border-neutral-100'
                }`}
              >
                {addon.recommended && (
                  <div className="absolute -top-3 left-5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-neutral-900">{addon.name}</h3>
                  <span className="text-blue-600 font-black ml-3 shrink-0">
                    {addon.price}
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-black mb-3">
            Book the Ultimate Clean Today
          </h2>
          <p className="text-blue-100 mb-8">
            Full exterior &amp; interior detail starting at $120 — we come to
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book Now — $120
            </Link>
            <a
              href="tel:5551234567"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
