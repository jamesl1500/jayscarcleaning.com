'use client';

import { useState } from 'react';

const packages = [
  'Exterior Wash — $50',
  'Interior Detail — $75',
  'Full Detail — $120',
];

const addons = [
  'Engine Bay Cleaning (+$30)',
  'Pet Hair Removal (+$25)',
  'Odor Elimination (+$20)',
  'Ceramic Coating Spray (+$40)',
  'Headlight Restoration (+$35)',
  'Clay Bar Treatment (+$30)',
  'Leather Conditioning (+$25)',
  'Paint Protection Film Spot (+$50)',
];

const vehicleTypes = [
  'Sedan',
  'SUV / Crossover',
  'Truck',
  'Van / Minivan',
  'Sports Car / Coupe',
  'Convertible',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    vehicle: '',
    date: '',
    notes: '',
  });

  function toggleAddon(addon: string) {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          vehicle: form.vehicle,
          pkg: form.package,
          date: form.date,
          addons: selectedAddons,
          notes: form.notes,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
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
          </div>
          <h2 className="text-3xl font-black text-neutral-900 mb-3">
            Booking Request Sent!
          </h2>
          <p className="text-neutral-500 mb-6 leading-relaxed">
            Thanks, <strong>{form.name}</strong>! We&apos;ve received your
            request and will confirm your appointment within 24 hours. Check
            your email at <strong>{form.email}</strong>.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ── Booking Form ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8">
              <h2 className="text-2xl font-black text-neutral-900 mb-8">
                Request an Appointment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Phone + Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 000-0000"
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Vehicle Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                    >
                      <option value="" disabled>
                        Select vehicle type
                      </option>
                      {vehicleTypes.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Package + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Package <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="package"
                      value={form.package}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                    >
                      <option value="" disabled>
                        Select a package
                      </option>
                      {packages.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Add-Ons{' '}
                    <span className="font-normal text-neutral-400">
                      (optional)
                    </span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {addons.map((addon) => (
                      <button
                        key={addon}
                        type="button"
                        onClick={() => toggleAddon(addon)}
                        className={`flex items-center gap-2 text-left text-sm px-4 py-3 rounded-xl border transition-colors ${
                          selectedAddons.includes(addon)
                            ? 'bg-blue-50 border-blue-400 text-blue-700 font-medium'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-blue-300'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                            selectedAddons.includes(addon)
                              ? 'bg-blue-600 border-blue-600'
                              : 'border-neutral-300'
                          }`}
                        >
                          {selectedAddons.includes(addon) && (
                            <svg
                              className="w-2.5 h-2.5 text-white"
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
                          )}
                        </span>
                        {addon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Additional Notes{' '}
                    <span className="font-normal text-neutral-400">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific concerns, vehicle details, or special instructions..."
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-full text-base transition-colors"
                >
                  {loading ? 'Sending…' : 'Submit Booking Request'}
                </button>
                <p className="text-xs text-neutral-400 text-center">
                  We&apos;ll confirm your appointment within 24 hours via
                  email or phone.
                </p>
              </form>
            </div>
          </div>

          {/* ── Sidebar Info ──────────────────────────────────── */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-neutral-900 rounded-2xl p-7 text-white">
              <h3 className="font-bold text-xl mb-5">Get in Touch</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-400"
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
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">Phone</p>
                    <a
                      href="tel:2168897822"
                      className="text-white font-semibold hover:text-blue-400 transition-colors"
                    >
                      (216) 889-7822
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                    <a
                      href="mailto:info@cleanlabdetailing.com"
                      className="text-white font-semibold hover:text-blue-400 transition-colors text-sm break-all"
                    >
                      info@cleanlabdetailing.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">
                      Service Area
                    </p>
                    <p className="text-white font-semibold text-sm">
                      Mobile — We Come to You
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-7 shadow-sm">
              <h3 className="font-bold text-neutral-900 text-lg mb-5">
                Business Hours
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { day: 'Monday – Friday', hours: '5:00 PM – 10:00 PM' },
                  { day: 'Saturday', hours: '8:00 AM – 10:00 PM' },
                  { day: 'Sunday', hours: '8:00 AM – 10:00 PM' },
                ].map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between text-neutral-600 pb-3 border-b border-neutral-100 last:border-0 last:pb-0"
                  >
                    <span>{row.day}</span>
                    <span className="text-neutral-900 font-semibold">
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages quick ref */}
            <div className="bg-blue-600 rounded-2xl p-7 text-white">
              <h3 className="font-bold text-xl mb-4">Quick Pricing</h3>
              <div className="space-y-3">
                {[
                  { name: 'Exterior Wash', price: '$50', href: '/packages/exterior-wash' },
                  { name: 'Interior Detail', price: '$75', href: '/packages/interior-detailing' },
                  { name: 'Full Detail', price: '$120', href: '/packages/full-detail' },
                ].map((pkg) => (
                  <a
                    key={pkg.name}
                    href={pkg.href}
                    className="flex justify-between items-center py-2 border-b border-blue-500/40 last:border-0 hover:text-blue-200 transition-colors"
                  >
                    <span className="text-sm text-blue-100">{pkg.name}</span>
                    <span className="font-black text-white">{pkg.price}</span>
                  </a>
                ))}
              </div>
              <p className="text-blue-200 text-xs mt-4">
                + add-ons available at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
