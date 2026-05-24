import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jayscarcleaning.com"),
  title: {
    default: "Clean Lab Detailing | Mobile Car Detailing",
    template: "%s | Clean Lab Detailing",
  },
  description:
    "Professional mobile car detailing delivered to your door. Hand wash exterior, interior detailing, and full detail packages starting at $50. Serving the greater Cleveland area.",
  keywords: [
    "mobile car detailing",
    "car detailing",
    "auto detailing",
    "mobile car wash",
    "exterior car wash",
    "interior car detailing",
    "full detail",
    "Cleveland car detailing",
  ],
  authors: [{ name: "Clean Lab Detailing" }],
  creator: "Clean Lab Detailing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jayscarcleaning.com",
    siteName: "Clean Lab Detailing",
    title: "Clean Lab Detailing | Mobile Car Detailing",
    description:
      "Professional mobile car detailing delivered to your door. Hand wash exterior, interior detailing, and full detail packages starting at $50.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Lab Detailing | Mobile Car Detailing",
    description:
      "Professional mobile car detailing delivered to your door. Packages starting at $50.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Clean Lab Detailing",
    description:
      "Professional mobile car detailing delivered to your door. Hand wash exterior, interior detailing, and full detail packages starting at $50.",
    url: "https://www.jayscarcleaning.com",
    telephone: "+12168897822",
    email: "info@cleanlabdetailing.com",
    areaServed: {
      "@type": "State",
      name: "Ohio",
    },
    serviceType: "Mobile Car Detailing",
    priceRange: "$50–$120",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Detailing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Wash",
            url: "https://www.jayscarcleaning.com/packages/exterior-wash",
          },
          price: "50",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Detail",
            url: "https://www.jayscarcleaning.com/packages/interior-detailing",
          },
          price: "75",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Detail",
            url: "https://www.jayscarcleaning.com/packages/full-detail",
          },
          price: "120",
          priceCurrency: "USD",
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
