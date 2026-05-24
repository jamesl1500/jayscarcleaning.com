import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon-512.png" alt="Clean Lab Detailing logo" width={32} height={32} className="rounded-full" />
              <span className="text-white font-bold text-base">
                Clean Lab Detailing
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional mobile car detailing delivered to your door. Quality
              you can see, service you can trust.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-blue-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/packages/exterior-wash" className="hover:text-blue-400 transition-colors">
                  Exterior Wash — $50
                </Link>
              </li>
              <li>
                <Link href="/packages/interior-detailing" className="hover:text-blue-400 transition-colors">
                  Interior Detail — $75
                </Link>
              </li>
              <li>
                <Link href="/packages/full-detail" className="hover:text-blue-400 transition-colors">
                  Full Detail — $120
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
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
                <a href="tel:2168897822" className="hover:text-white transition-colors">
                  (216) 889-7822
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
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
                <a
                  href="mailto:info@cleanlabdetailing.com"
                  className="hover:text-white transition-colors"
                >
                  info@cleanlabdetailing.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500 shrink-0"
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
                <span>Mobile Service — We Come to You</span>
              </li>
            </ul>
            <div className="mt-4 bg-neutral-900 rounded-lg px-4 py-3 text-xs text-neutral-500">
              <p className="font-medium text-neutral-400 mb-1">Hours</p>
              <p>Monday – Friday: 5:00 PM – 10:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} Clean Lab Detailing. All rights reserved.</span>
          <span>
            Built by{' '}
            <a
              href="https://www.foundryframe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-blue-400 transition-colors"
            >
              Foundry Frame
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
