import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Interior Car Detailing — $75",
  description:
    "Deep interior car detailing package for $75. Full vacuum, dashboard cleaning, seat conditioning, floor mat shampoo, window cleaning, and more. Mobile service.",
  openGraph: {
    title: "Interior Car Detailing — $75 | Clean Lab Detailing",
    description:
      "Interior detail package for $75. We vacuum, shampoo, wipe, and condition every surface — delivered to your door.",
    url: "https://www.cleanlabdetailing.com/packages/interior-detailing",
  },
};

const included = [
  {
    title: 'Full Interior Vacuum',
    desc: 'Thorough vacuuming of all seats, carpets, trunk, and hard-to-reach crevices.',
  },
  {
    title: 'Dashboard & Instrument Cluster',
    desc: 'Dust and wipe down the entire dashboard, gauges, and all control surfaces.',
  },
  {
    title: 'Center Console & Cup Holders',
    desc: 'Deep clean of the center console, cup holders, and any storage compartments.',
  },
  {
    title: 'Door Panel & Armrest Cleaning',
    desc: 'Full wipe down of all four door panels, pockets, and armrests.',
  },
  {
    title: 'Interior Window Cleaning',
    desc: 'Streak-free interior glass treatment for all windows and the windshield.',
  },
  {
    title: 'Seat Cleaning & Conditioning',
    desc: 'Fabric or leather seat cleaning with appropriate conditioner to restore feel.',
  },
  {
    title: 'Floor Mat Shampoo & Extraction',
    desc: 'All floor mats are removed, shampooed, scrubbed, and hot-water extracted.',
  },
  {
    title: 'Air Vent Dusting',
    desc: 'Compressed air and detailing brushes used to clear dust from all vents.',
  },
];

const addons = [
  {
    name: 'Pet Hair Removal',
    price: '+$25',
    desc: 'Specialized tools to remove stubborn pet hair embedded in upholstery and carpet.',
    recommended: true,
  },
  {
    name: 'Odor Elimination Treatment',
    price: '+$20',
    desc: 'Enzyme-based treatment that neutralizes smoke, food, and pet odors at the source.',
    recommended: true,
  },
  {
    name: 'Leather Conditioning',
    price: '+$25',
    desc: 'Deep leather cleaner and conditioner to restore suppleness and prevent cracking.',
    recommended: false,
  },
  {
    name: 'Engine Bay Cleaning',
    price: '+$30',
    desc: 'Professional engine compartment degreasing for a clean, protected engine bay.',
    recommended: false,
  },
];

export default function InteriorDetailingPage() {
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
              <p className="text-blue-400 font-medium text-sm mb-2 uppercase tracking-wider">
                Package 02
              </p>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
                ✨ Interior Detail
              </h1>
              <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                A comprehensive cabin refresh that deep-cleans every surface,
                restoring your interior to a fresh, like-new condition.
              </p>
            </div>
            <div className="md:text-right shrink-0">
              <p className="text-6xl font-black text-blue-500">$75</p>
              <p className="text-neutral-500 text-sm mt-1">Starting price</p>
              <p className="text-neutral-500 text-xs mt-1">⏱ 60–90 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Details ──────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Included list */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-black text-white mb-8">
                What&apos;s Included
              </h2>
              <ul className="space-y-6">
                {included.map((item) => (
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
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-neutral-400 text-sm mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary card */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">
                  Package Summary
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    { label: 'Duration', value: '60–90 mins' },
                    { label: 'Service Type', value: 'Interior Only' },
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
                      $75
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Book Interior Detail
                </Link>
                <Link
                  href="/packages/full-detail"
                  className="mt-3 block w-full text-center border border-neutral-700 hover:border-blue-500 text-neutral-300 hover:text-blue-400 font-medium py-3 rounded-full transition-colors text-sm"
                >
                  Upgrade to Full Detail — $120
                </Link>
              </div>

              {/* Tip */}
              <div className="bg-blue-600/10 border border-blue-600/30 rounded-2xl p-6">
                <p className="text-blue-300 text-sm font-semibold mb-2">
                  💡 Pro Tip
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  For pet owners, our Pet Hair Removal add-on (+$25) and Odor
                  Elimination Treatment (+$20) are a powerful combo that
                  completely refreshes your cabin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Add-Ons ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-3">
            Recommended Add-Ons
          </h2>
          <p className="text-neutral-500 mb-10">
            Take your interior detail even further with these popular upgrades:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Ready to Book Your Interior Detail?
          </h2>
          <p className="text-blue-100 mb-8">
            Starting at just $75 — we&apos;ll come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book Now — $75
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Compare All Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
