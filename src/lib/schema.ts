import { addons, getAddon, hours, packages, priceRange, serviceAreas, site, type Faq, type Package, type ServiceArea } from './site';

const abs = (path = '/') => new URL(path, site.url).toString();

export const ids = {
  business: abs('/#business'),
  website: abs('/#website'),
  owner: abs('/#owner'),
};

// Price varies by vehicle size, so offers carry the sedan-to-truck range.
export function offerFor(pkg: Package) {
  const { min, max } = priceRange(pkg.prices);
  return {
    '@type': 'Offer',
    price: min.toFixed(2),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: abs(`/packages/${pkg.slug}`),
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: min.toFixed(2),
      maxPrice: max.toFixed(2),
      priceCurrency: 'USD',
    },
  };
}

const sameAs = Object.values(site.social).filter(Boolean);

export function businessSchema() {
  return {
    '@type': ['AutoWash', 'LocalBusiness'],
    '@id': ids.business,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email.display,
    image: abs('/opengraph-image'),
    logo: abs('/icon-512.png'),
    priceRange: site.priceRange,
    ...(sameAs.length && { sameAs }),
    currenciesAccepted: 'USD',
    founder: { '@id': ids.owner },
    // Service-area business: city/region only, no street address.
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.region.city,
      addressRegion: site.region.state,
      postalCode: site.region.postalCode,
      addressCountry: site.region.country,
    },
    geo: { '@type': 'GeoCoordinates', ...site.geo },
    areaServed: serviceAreas.map((a) => ({
      '@type': 'City',
      name: `${a.name}, ${site.region.state}`,
      url: abs(`/service-areas/${a.slug}`),
    })),
    openingHoursSpecification: hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.phone.e164,
      email: site.email.display,
      areaServed: 'US-OH',
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Detailing Packages',
      itemListElement: [
        ...packages.map((pkg) => ({
          ...offerFor(pkg),
          itemOffered: { '@id': abs(`/packages/${pkg.slug}#service`) },
        })),
        ...addons.map((a) => ({
          '@type': 'Offer',
          price: a.price.toFixed(2),
          priceCurrency: 'USD',
          itemOffered: { '@type': 'Service', name: a.name, description: a.desc },
        })),
      ],
    },
  };
}

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessSchema(),
      {
        '@type': 'WebSite',
        '@id': ids.website,
        url: site.url,
        name: site.name,
        publisher: { '@id': ids.business },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': ids.owner,
        name: site.owner,
        jobTitle: 'Owner & Lead Detailer',
        email: site.email.display,
        telephone: site.phone.e164,
        image: abs('/james-latten-clean-lab-detailing-owner.jpg'),
        worksFor: { '@id': ids.business },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(pkg: Package, area?: ServiceArea) {
  return {
    '@type': 'Service',
    '@id': abs(`/packages/${pkg.slug}#service`),
    name: `${pkg.name} — Mobile Car Detailing`,
    serviceType: 'Mobile car detailing',
    description: pkg.summary,
    url: abs(`/packages/${pkg.slug}`),
    provider: { '@id': ids.business },
    areaServed: area
      ? { '@type': 'City', name: `${area.name}, ${site.region.state}` }
      : { '@type': 'AdministrativeArea', name: `${site.region.county}, ${site.region.state}` },
    offers: offerFor(pkg),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${pkg.name} add-ons`,
      itemListElement: pkg.recommendedAddons
        .map(getAddon)
        .filter((a) => a !== undefined)
        .map((a) => ({
          '@type': 'Offer',
          price: a.price.toFixed(2),
          priceCurrency: 'USD',
          itemOffered: { '@type': 'Service', name: a.name },
        })),
    },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
