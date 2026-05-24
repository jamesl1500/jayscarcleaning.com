import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Book a Detail",
  description:
    "Book your mobile car detailing appointment online. Choose your package, pick a date, and we'll come to you. Serving the greater Cleveland area.",
  openGraph: {
    title: "Book a Mobile Car Detail | Clean Lab Detailing",
    description:
      "Schedule your mobile car detailing appointment. Exterior wash, interior detail, or full detail — we come to your door.",
    url: "https://www.cleanlabdetailing.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="bg-black py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Book Your{' '}
            <span className="text-blue-500">Detail</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Fill out the form below and we&apos;ll confirm your appointment
            within 24 hours. Or call us directly at{' '}
            <a
              href="tel:2168897822"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              (216) 889-7822
            </a>
            .
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
