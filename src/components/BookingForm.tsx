'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addons, packages, serviceAreas, usd } from '@/lib/site';

const vehicleTypes = ['Sedan', 'SUV / Crossover', 'Truck', 'Van / Minivan', 'Sports Car / Coupe', 'Convertible', 'Other'];
const timeWindows = ['Morning (weekends)', 'Afternoon (weekends)', 'Evening (5–10 PM)', 'Flexible'];

// 16px text on phones: anything smaller makes iOS Safari zoom in on focus.
const field =
  'min-h-12 w-full rounded-xl border border-mist-200 bg-white px-4 py-3 text-base text-navy-900 placeholder-navy-500 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm';
const labelCls = 'mb-2 block text-sm font-semibold text-navy-800';

function localToday() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function Required() {
  return (
    <span className="text-red-600" aria-hidden="true">
      {' '}
      *
    </span>
  );
}

export default function BookingForm({
  initialPackage = '',
  source = 'contact',
  compact = false,
  submitLabel = 'Request My Appointment',
}: Readonly<{
  initialPackage?: string;
  source?: string;
  compact?: boolean;
  submitLabel?: string;
}>) {
  const router = useRouter();
  const [minDate] = useState(localToday);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    vehicle: '',
    pkg: packages.some((p) => p.slug === initialPackage) ? initialPackage : '',
    date: '',
    time: '',
    notes: '',
    hookups: false,
    company: '', // honeypot
  });

  function toggleAddon(id: string) {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const next = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: next }));
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, addons: selectedAddons, source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again or give us a call.');
      }

      router.push(`/thank-you?package=${form.pkg}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or give us a call.');
      setLoading(false);
    }
  }

  const selectedPkg = packages.find((p) => p.slug === form.pkg);
  const addonTotal = selectedAddons.reduce((sum, id) => sum + (addons.find((a) => a.id === id)?.price ?? 0), 0);

  const addonButtons = (
    <div className={`grid grid-cols-1 gap-2 ${compact ? '' : 'sm:grid-cols-2'}`}>
      {addons.map((addon) => {
        const on = selectedAddons.includes(addon.id);
        return (
          <button
            key={addon.id}
            type="button"
            aria-pressed={on}
            onClick={() => toggleAddon(addon.id)}
            className={`flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
              on ? 'border-teal-500 bg-teal-500/10 font-medium text-navy-900' : 'border-mist-200 bg-mist-50 text-navy-700 hover:border-teal-400'
            }`}
          >
            <span className="flex items-center gap-3">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
                  on ? 'border-teal-600 bg-teal-600' : 'border-navy-500/40 bg-white'
                }`}
              >
                {on && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {addon.name}
            </span>
            <span className="shrink-0 font-semibold text-teal-700">+{usd(addon.price)}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${source}-company`}>Company</label>
        <input id={`${source}-company`} name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor={`${source}-name`} className={labelCls}>
            Full name
            <Required />
          </label>
          <input
            id={`${source}-name`}
            name="name"
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="next"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className={labelCls}>
            Phone
            <Required />
          </label>
          <input
            id={`${source}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            enterKeyHint="next"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Best number to reach you"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${source}-email`} className={labelCls}>
            Email
            <Required />
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="next"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${source}-address`} className={labelCls}>
            Service address
            <Required />
          </label>
          <input
            id={`${source}-address`}
            name="address"
            autoComplete="street-address"
            autoCapitalize="words"
            enterKeyHint="next"
            required
            value={form.address}
            onChange={handleChange}
            placeholder="Where should we detail your car?"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${source}-city`} className={labelCls}>
            City
            <Required />
          </label>
          <select id={`${source}-city`} name="city" required value={form.city} onChange={handleChange} className={field}>
            <option value="" disabled>
              Select your city
            </option>
            {serviceAreas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
            <option value="Other">Other (we&apos;ll confirm)</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${source}-vehicle`} className={labelCls}>
            Vehicle type
            <Required />
          </label>
          <select id={`${source}-vehicle`} name="vehicle" required value={form.vehicle} onChange={handleChange} className={field}>
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
        <div className="sm:col-span-2">
          <label htmlFor={`${source}-pkg`} className={labelCls}>
            Package
            <Required />
          </label>
          <select id={`${source}-pkg`} name="pkg" required value={form.pkg} onChange={handleChange} className={field}>
            <option value="" disabled>
              Select a package
            </option>
            {packages.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} — {usd(p.price)} ({p.duration})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${source}-date`} className={labelCls}>
            Preferred date
            <Required />
          </label>
          <input id={`${source}-date`} name="date" type="date" required min={minDate} value={form.date} onChange={handleChange} className={field} />
        </div>
        <div>
          <label htmlFor={`${source}-time`} className={labelCls}>
            Preferred time
          </label>
          <select id={`${source}-time`} name="time" value={form.time} onChange={handleChange} className={field}>
            <option value="">No preference</option>
            {timeWindows.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {compact ? (
        // Funnel forms keep add-ons tucked away so the form stays short on phones.
        <details className="group rounded-2xl border border-mist-200">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-navy-800">
            <span>
              Add extras <span className="font-normal text-navy-500">(optional)</span>
              {selectedAddons.length > 0 && (
                <span className="ml-2 rounded-full bg-teal-500/15 px-2 py-0.5 text-xs text-teal-700">
                  {selectedAddons.length} selected
                </span>
              )}
            </span>
            <svg
              className="h-5 w-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-3 pb-3">{addonButtons}</div>
        </details>
      ) : (
        <fieldset>
          <legend className={labelCls}>
            Add-ons <span className="font-normal text-navy-500">(optional)</span>
          </legend>
          {addonButtons}
        </fieldset>
      )}

      {!compact && (
        <div>
          <label htmlFor={`${source}-notes`} className={labelCls}>
            Notes <span className="font-normal text-navy-500">(optional)</span>
          </label>
          <textarea
            id={`${source}-notes`}
            name="notes"
            rows={4}
            value={form.notes}
            onChange={handleChange}
            placeholder="Parking details, gate codes, pet hair, stains, anything we should know…"
            className={`${field} resize-none`}
          />
        </div>
      )}

      <label
        htmlFor={`${source}-hookups`}
        className="flex cursor-pointer items-start gap-3 rounded-2xl border border-teal-600/30 bg-teal-500/5 p-4 text-sm leading-relaxed text-navy-800"
      >
        <input
          id={`${source}-hookups`}
          name="hookups"
          type="checkbox"
          required
          checked={form.hookups}
          onChange={handleChange}
          className="mt-0.5 h-5 w-5 shrink-0 accent-teal-600"
        />
        <span>
          <strong className="font-semibold">I&apos;ll have a water source and an electrical outlet available.</strong>{' '}
          <span className="text-navy-600">That&apos;s all we need — we bring everything else.</span>
          <Required />
        </span>
      </label>

      {selectedPkg && (
        <p className="flex items-center justify-between rounded-2xl bg-navy-900 px-5 py-4 text-sm text-mist-100">
          <span>
            Estimated starting price
            <span className="block text-xs text-mist-200/60">Confirmed before we start</span>
          </span>
          <span className="text-2xl font-black text-teal-300">{usd(selectedPkg.price + addonTotal)}</span>
        </p>
      )}

      {error && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="min-h-14 w-full rounded-full bg-teal-400 px-6 py-4 text-base font-bold text-navy-900 transition-colors hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Sending…' : submitLabel}
      </button>
      <p className="text-center text-xs text-navy-500">
        No payment now. We&apos;ll confirm your appointment within 24 hours by phone or email.
      </p>
    </form>
  );
}
