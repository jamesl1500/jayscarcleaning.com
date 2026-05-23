import Link from 'next/link';

const packages = [
  {
    name: 'Exterior Wash',
    price: '$50',
    slug: 'exterior-wash',
    icon: '🚗',
    features: [
      'Hand wash exterior',
      'Wheel & rim cleaning',
      'Tire dressing & shine',
      'Exterior window cleaning',
      'Door jamb wipe down',
      'Bug & tar removal',
    ],
    highlight: false,
  },
  {
    name: 'Interior Detail',
    price: '$75',
    slug: 'interior-detailing',
    icon: '✨',
    features: [
      'Full interior vacuum',
      'Dashboard & console cleaning',
      'Door panel wipe down',
      'Interior window cleaning',
      'Seat cleaning',
      'Floor mat shampoo',
    ],
    highlight: false,
  },
  {
    name: 'Full Detail',
    price: '$120',
    slug: 'full-detail',
    icon: '🏆',
    features: [
      'Everything in Exterior Wash',
      'Everything in Interior Detail',
      'Full glass treatment',
      'Exterior trim wipe down',
      'Engine bay wipe down',
      'Air freshener & final inspection',
    ],
    highlight: true,
  },
];

const addons = [
  { name: 'Engine Bay Cleaning', price: '+$30' },
  { name: 'Pet Hair Removal', price: '+$25' },
  { name: 'Odor Elimination', price: '+$20' },
  { name: 'Ceramic Coating Spray', price: '+$40' },
  { name: 'Headlight Restoration', price: '+$35' },
  { name: 'Clay Bar Treatment', price: '+$30' },
  { name: 'Leather Conditioning', price: '+$25' },
  { name: 'Paint Protection Film Spot', price: '+$50' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-black min-h-[88vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-black" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Mobile Service — We Come to You
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Your Car Deserves
              <br />
              <span className="text-blue-500">The Best Clean.</span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
              Professional mobile car detailing delivered right to your
              driveway. From a quick hand wash to a full interior &amp; exterior
              detail — we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
              >
                Book Your Detail
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '500+', label: 'Cars Detailed' },
              { value: '5★', label: 'Average Rating' },
              { value: '100%', label: 'Mobile Service' },
              { value: '3', label: 'Detail Packages' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              Comprehensive car care performed at your location — no waiting
              rooms, no lines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Exterior Hand Wash',
                desc: 'A thorough hand wash using premium pH-neutral soap, complete with wheel cleaning, tire dressing, and streak-free window detailing.',
              },
              {
                icon: '✨',
                title: 'Interior Detailing',
                desc: 'Deep clean your cabin with vacuuming, surface wipe-downs, window cleaning, and full floor mat treatment for a fresh, like-new feel.',
              },
              {
                icon: '🏆',
                title: 'Full Detail Package',
                desc: 'The complete package — exterior and interior combined with premium finishing touches for a showroom-ready result inside and out.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Our Packages
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto">
              Transparent pricing, no hidden fees. Pick the package that&apos;s
              right for your vehicle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className={`relative rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                  pkg.highlight
                    ? 'bg-neutral-900 ring-4 ring-blue-500/40'
                    : 'bg-neutral-900 border border-neutral-800'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Best Value
                  </div>
                )}
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-4xl font-black text-blue-400 mb-6">
                  {pkg.price}
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
                <Link
                  href={`/packages/${pkg.slug}`}
                  className={`w-full text-center py-3 rounded-full font-semibold transition-colors ${
                    pkg.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/packages"
              className="text-blue-400 hover:text-blue-300 font-medium text-sm"
            >
              View all packages &amp; add-ons →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us + Add-Ons ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Why us */}
            <div>
              <h2 className="text-4xl font-black text-neutral-900 mb-4">
                Why Choose
                <br />
                <span className="text-blue-600">Jay&apos;s Car Cleaning?</span>
              </h2>
              <p className="text-neutral-500 text-lg mb-8 leading-relaxed">
                We&apos;re not just a car wash — we&apos;re a mobile detailing
                service that brings professional results directly to you. No
                waiting rooms, no lines, just a spotless car.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'We Come to You',
                    desc: 'At your home, office, or anywhere convenient. Our equipment is fully self-contained.',
                  },
                  {
                    title: 'Premium Products',
                    desc: 'We use professional-grade, car-safe products that protect your paint and surfaces.',
                  },
                  {
                    title: 'Attention to Detail',
                    desc: "Every inch of your vehicle is treated with care. We don't cut corners.",
                  },
                  {
                    title: 'Flexible Scheduling',
                    desc: 'Book online or by phone, Monday through Saturday. Same-day slots often available.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
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
                      <h4 className="font-semibold text-neutral-900">
                        {item.title}
                      </h4>
                      <p className="text-neutral-500 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons card */}
            <div className="bg-neutral-950 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Premium Add-Ons</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Customize any package with à la carte upgrades:
              </p>
              <div className="space-y-1">
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-center justify-between py-3 border-b border-neutral-800 last:border-0"
                  >
                    <span className="text-sm text-neutral-300">
                      {addon.name}
                    </span>
                    <span className="text-blue-400 font-bold text-sm ml-4 shrink-0">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/packages#addons"
                className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors"
              >
                View All Add-Ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Ready for a Spotless Car?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book your detail today and we&apos;ll bring the shine to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:2168897822"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (216) 889-7822
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
