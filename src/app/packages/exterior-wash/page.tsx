import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Exterior Car Wash — $50",
  description:
    "Professional hand wash exterior detailing package for $50. Includes pre-rinse, two-bucket wash, wheel & rim cleaning, tire dressing, window cleaning, and more.",
  openGraph: {
    title: "Exterior Car Wash — $50 | Clean Lab Detailing",
    description:
      "Hand wash exterior package starting at $50. Pre-rinse, wheel cleaning, tire dressing, bug & tar removal, and a streak-free finish.",
    url: "https://www.jayscarcleaning.com/packages/exterior-wash",
  },
};

const included = [
  {
    title: 'Pre-Rinse & Snow Foam',
    desc: 'A thorough pre-rinse to loosen surface dirt before any contact washing begins.',
  },
  {
    title: 'Two-Bucket Hand Wash',
    desc: 'pH-neutral premium shampoo applied using the safe two-bucket method to prevent swirl marks.',
  },
  {
    title: 'Wheel & Rim Deep Cleaning',
    desc: 'Brake dust removal and full rim scrub with dedicated wheel cleaner and brushes.',
  },
  {
    title: 'Tire Dressing & Shine',
    desc: 'Sling-free tire dressing applied for a rich, dark, showroom-quality finish.',
  },
  {
    title: 'Exterior Window Cleaning',
    desc: 'Streak-free glass cleaner on all exterior windows, mirrors, and trim glass.',
  },
  {
    title: 'Door Jamb Wipe Down',
    desc: 'Often overlooked by other services — we clean all four door jambs thoroughly.',
  },
  {
    title: 'Bug & Tar Spot Treatment',
    desc: 'Targeted solvent treatment for stubborn bug splatter and road tar deposits.',
  },
  {
    title: 'Final Rinse & Microfiber Dry',
    desc: 'Full rinse followed by clean, plush microfiber drying to prevent water spots.',
  },
];

const addons = [
  {
    name: 'Clay Bar Treatment',
    price: '+$30',
    desc: 'Deep decontamination of paint for a smooth, glass-like surface.',
    recommended: true,
  },
  {
    name: 'Ceramic Coating Spray',
    price: '+$40',
    desc: 'Adds a hydrophobic ceramic layer for lasting protection and shine.',
    recommended: true,
  },
  {
    name: 'Headlight Restoration',
    price: '+$35',
    desc: 'Restore cloudy headlights to crystal clarity with wet sanding and polish.',
    recommended: false,
  },
  {
    name: 'Engine Bay Cleaning',
    price: '+$30',
    desc: 'Professional degreasing and detailing of the engine compartment.',
    recommended: false,
  },
  {
    name: 'Paint Protection Film Spot',
    price: '+$50',
    desc: 'PPF applied to high-impact areas like the front bumper edge or hood.',
    recommended: false,
  },
];

export default function ExteriorWashPage() {
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
                Package 01
              </p>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
                🚗 Exterior Wash
              </h1>
              <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                A meticulous hand wash and detail service that removes road
                grime, dirt, and contaminants — leaving your exterior gleaming.
              </p>
            </div>
            <div className="md:text-right shrink-0">
              <p className="text-6xl font-black text-blue-500">$50</p>
              <p className="text-neutral-500 text-sm mt-1">Starting price</p>
              <p className="text-neutral-500 text-xs mt-1">⏱ 45–60 minutes</p>
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
                    { label: 'Duration', value: '45–60 mins' },
                    { label: 'Service Type', value: 'Exterior Only' },
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
                      $50
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  Book Exterior Wash
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
                  Add our Clay Bar Treatment (+$30) for a deep decontamination
                  that removes embedded contaminants the wash alone can&apos;t
                  reach — leaving paint glass-smooth.
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
            Enhance your exterior wash with these premium services:
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
            Ready to Book Your Exterior Wash?
          </h2>
          <p className="text-blue-100 mb-8">
            Starting at just $50 — we&apos;ll come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book Now — $50
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
