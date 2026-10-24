import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { siteGraph } from '@/lib/schema';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Mobile Car Detailing Sheffield Lake, OH | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.name,
  publisher: site.name,
  category: 'Automotive',
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: site.name,
    title: `Mobile Car Detailing in Sheffield Lake, OH | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mobile Car Detailing in Sheffield Lake, OH | ${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a2230',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal-400 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-navy-900"
        >
          Skip to content
        </a>
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
