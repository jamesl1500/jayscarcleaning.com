// Single source of truth for business details. Every page, schema block,
// email and the sitemap reads from here — update contact info in one place.

export const site = {
  name: 'Clean Lab Detailing',
  url: 'https://www.cleanlabdetailing.com',
  tagline: 'Mobile Car Detailing in Sheffield Lake & Lorain County',
  description:
    'Mobile car detailing in Sheffield Lake, OH and nearby Lorain County. Hand washes, interior details and full details in your driveway — packages from $50. Call (216) 889-7822.',
  owner: 'James Latten',
  phone: {
    display: '(216) 889-7822',
    e164: '+12168897822',
    href: 'tel:+12168897822',
  },
  email: {
    display: 'hello@jameslatten.com',
    href: 'mailto:hello@jameslatten.com',
  },
  region: {
    city: 'Sheffield Lake',
    state: 'OH',
    stateName: 'Ohio',
    postalCode: '44054',
    country: 'US',
    county: 'Lorain County',
  },
  // Centre of the service area (Sheffield Lake), used for structured data only.
  geo: { latitude: 41.4876, longitude: -82.1013 },
  priceRange: '$50–$120',
  lastUpdated: '2026-10-24',
  // Google Analytics 4 measurement ID (Google tag / gtag.js).
  gaId: 'G-BCQHR9YP2N',
} as const;

// What the customer needs to provide. Shown on every service, area and funnel
// page, in the FAQ, on the booking form and in the confirmation email.
export const requirements = {
  headline: 'All we need from you: water and electricity.',
  items: [
    {
      title: 'A water source',
      desc: 'An outdoor spigot (hose bib) within reach of where your car is parked.',
    },
    {
      title: 'An electrical outlet',
      desc: 'A standard outdoor or garage outlet we can plug into for our vacuums and tools.',
    },
  ],
  weBring: 'We bring everything else — all of the equipment, products and towels needed to detail your car.',
};

export type Hours = { label: string; days: string[]; opens: string; closes: string; display: string };

export const hours: Hours[] = [
  {
    label: 'Monday – Friday',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '17:00',
    closes: '22:00',
    display: '5:00 PM – 10:00 PM',
  },
  {
    label: 'Saturday – Sunday',
    days: ['Saturday', 'Sunday'],
    opens: '08:00',
    closes: '22:00',
    display: '8:00 AM – 10:00 PM',
  },
];

export type Addon = {
  id: string;
  name: string;
  price: number;
  desc: string;
};

export const addons: Addon[] = [
  {
    id: 'engine-bay',
    name: 'Engine Bay Cleaning',
    price: 30,
    desc: 'Degreasing and detailing of the engine compartment for a clean, protected engine bay.',
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair Removal',
    price: 25,
    desc: 'Specialized tools and techniques to pull stubborn pet hair out of upholstery and carpet.',
  },
  {
    id: 'odor',
    name: 'Odor Elimination',
    price: 20,
    desc: 'Enzyme-based treatment that neutralizes smoke, food and pet odors at the source.',
  },
  {
    id: 'ceramic-spray',
    name: 'Ceramic Coating Spray',
    price: 40,
    desc: 'A ceramic spray sealant that adds gloss and hydrophobic protection to your paint.',
  },
  {
    id: 'headlights',
    name: 'Headlight Restoration',
    price: 35,
    desc: 'Wet sanding and polishing to bring cloudy or yellowed headlights back to clear.',
  },
  {
    id: 'clay-bar',
    name: 'Clay Bar Treatment',
    price: 30,
    desc: 'Deep paint decontamination that removes bonded grit for a smooth, glass-like finish.',
  },
  {
    id: 'leather',
    name: 'Leather Conditioning',
    price: 25,
    desc: 'Premium cleaner and conditioner that keeps leather supple and helps prevent cracking.',
  },
  {
    id: 'ppf-spot',
    name: 'Paint Protection Film Spot',
    price: 50,
    desc: 'Spot PPF on high-impact areas like the leading edge of the hood or front bumper.',
  },
];

export type Faq = { q: string; a: string };

const waterPowerFaq: Faq = {
  q: 'What do I need to provide?',
  a: `Just two things: a water source (an outdoor spigot near where the car is parked) and an electrical outlet we can plug into. That's all — we bring everything else.`,
};

export type Package = {
  slug: string;
  number: string;
  name: string;
  price: number;
  duration: string;
  tagline: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  included: { section?: string; items: { title: string; desc: string }[] }[];
  recommendedAddons: string[];
  idealFor: string[];
  faqs: Faq[];
  featured?: boolean;
};

const exteriorItems = [
  { title: 'Pre-Rinse & Snow Foam', desc: 'A thorough pre-soak loosens dirt, salt and road film before anything touches the paint.' },
  { title: 'Two-Bucket Hand Wash', desc: 'pH-neutral shampoo and the two-bucket method to keep grit off your paint and prevent swirl marks.' },
  { title: 'Wheel & Rim Deep Clean', desc: 'Dedicated wheel cleaner and brushes to break down brake dust and buildup.' },
  { title: 'Tire Dressing & Shine', desc: 'Sling-free dressing for a rich, dark, long-lasting finish.' },
  { title: 'Exterior Glass', desc: 'Streak-free cleaner on all exterior windows and mirrors.' },
  { title: 'Door Jamb Wipe Down', desc: 'All door jambs cleaned — the spot most quick washes skip.' },
  { title: 'Bug & Tar Removal', desc: 'Targeted treatment for bug splatter and road tar deposits.' },
  { title: 'Final Rinse & Microfiber Dry', desc: 'Plush microfiber drying to prevent water spots.' },
];

const interiorItems = [
  { title: 'Full Interior Vacuum', desc: 'Seats, carpets, trunk and the hard-to-reach crevices between them.' },
  { title: 'Dashboard & Instrument Cluster', desc: 'Dust and wipe down the dash, gauges and every control surface.' },
  { title: 'Center Console & Cup Holders', desc: 'Deep clean of the console, cup holders and storage compartments.' },
  { title: 'Door Panels & Armrests', desc: 'Every door panel, pocket and armrest wiped down.' },
  { title: 'Interior Glass', desc: 'Streak-free treatment for all windows and the inside of the windshield.' },
  { title: 'Seat Cleaning & Conditioning', desc: 'Fabric or leather seats cleaned with the right product for the material.' },
  { title: 'Floor Mat Shampoo & Extraction', desc: 'Mats removed, shampooed, scrubbed and extracted.' },
  { title: 'Air Vent Dusting', desc: 'Compressed air and detailing brushes clear dust from every vent.' },
];

export const packages: Package[] = [
  {
    slug: 'exterior-wash',
    number: '01',
    name: 'Exterior Wash',
    price: 50,
    duration: '45–60 min',
    tagline: 'A spotless exterior, bumper to bumper.',
    summary:
      'A meticulous hand wash that strips away road grime, salt and contaminants using pH-neutral shampoo and the two-bucket method for a scratch-free finish.',
    seoTitle: 'Mobile Exterior Car Wash in Sheffield Lake, OH — $50',
    seoDescription:
      'Mobile hand car wash in Sheffield Lake, Avon Lake & Lorain County from $50. Snow foam, two-bucket wash, wheels, tires, glass and bug & tar removal in your driveway.',
    highlights: [
      'Snow foam pre-rinse',
      'Two-bucket hand wash',
      'Wheels, rims & tire shine',
      'Streak-free exterior glass',
      'Door jambs wiped down',
      'Bug & tar removal',
    ],
    included: [{ items: exteriorItems }],
    recommendedAddons: ['clay-bar', 'ceramic-spray', 'headlights'],
    idealFor: [
      'Regular maintenance washes between full details',
      'Clearing winter road salt and lakeshore grime',
      'Getting a car ready for photos or a sale',
    ],
    faqs: [
      {
        q: 'Do you hand wash or use brushes?',
        a: 'Every exterior wash is done by hand using pH-neutral shampoo, the two-bucket method and clean microfiber — no automatic brushes that can scratch your paint.',
      },
      waterPowerFaq,
      {
        q: 'Can you remove road salt?',
        a: 'Yes. The snow foam pre-rinse and wheel cleaning are designed to loosen and lift salt and road film — important for cars that sit near the lake or drive I-90 and Route 2 all winter.',
      },
    ],
  },
  {
    slug: 'interior-detailing',
    number: '02',
    name: 'Interior Detail',
    price: 75,
    duration: '60–90 min',
    tagline: 'A deep-cleaned cabin that feels brand new.',
    summary:
      'A top-to-bottom cabin refresh — vacuuming, wiping, shampooing and conditioning every surface so your interior looks and smells like new.',
    seoTitle: 'Mobile Interior Car Detailing in Sheffield Lake, OH — $75',
    seoDescription:
      'Interior car detailing in Sheffield Lake & Lorain County from $75. Full vacuum, dash & console, seats, floor mat shampoo, vents and glass — done in your driveway.',
    highlights: [
      'Full vacuum incl. trunk',
      'Dash, console & cup holders',
      'Door panels & armrests',
      'Seat cleaning & conditioning',
      'Floor mat shampoo',
      'Air vent dusting',
    ],
    included: [{ items: interiorItems }],
    recommendedAddons: ['pet-hair', 'odor', 'leather'],
    idealFor: [
      'Families with kids and daily commuters',
      'Pet owners (pair with Pet Hair Removal)',
      'Refreshing a used car you just bought',
    ],
    faqs: [
      {
        q: 'Can you get pet hair out?',
        a: 'Standard vacuuming removes loose hair. For hair that is woven into carpet and upholstery, add Pet Hair Removal (+$25) and we use specialized tools to pull it out.',
      },
      {
        q: 'Can you remove smoke or food odors?',
        a: 'Yes — add Odor Elimination (+$20), an enzyme-based treatment that neutralizes odors at the source instead of masking them.',
      },
      waterPowerFaq,
    ],
  },
  {
    slug: 'full-detail',
    number: '03',
    name: 'Full Detail',
    price: 120,
    duration: '2–3 hours',
    tagline: 'The complete package — showroom ready.',
    summary:
      'Every inch of your vehicle, inside and out. The full exterior wash and interior detail combined, plus premium finishing touches — and it costs less than booking both separately.',
    seoTitle: 'Full Mobile Car Detail in Sheffield Lake, OH — $120',
    seoDescription:
      'Complete inside-and-out mobile car detailing in Sheffield Lake, Avon Lake & Lorain County for $120. Hand wash, deep interior, glass, trim and engine bay.',
    highlights: [
      'Everything in Exterior Wash',
      'Everything in Interior Detail',
      'Full glass inside & out',
      'Exterior trim dressing',
      'Engine bay wipe down',
      'Final walkthrough with you',
    ],
    included: [
      { section: 'Exterior', items: exteriorItems.slice(0, 7) },
      { section: 'Interior', items: [interiorItems[0], interiorItems[1], interiorItems[5], interiorItems[6], interiorItems[7]] },
      {
        section: 'Premium Finishing',
        items: [
          { title: 'Full Glass Treatment', desc: 'Streak-free cleaner on every interior and exterior glass surface.' },
          { title: 'Exterior Trim Dressing', desc: 'Plastic and rubber trim dressed and protected.' },
          { title: 'Engine Bay Wipe Down', desc: 'Accessible engine bay surfaces wiped and degreased.' },
          { title: 'Air Freshener', desc: 'Long-lasting premium air freshener for the cabin.' },
          { title: 'Final Walkthrough', desc: 'We walk through the finished car with you before we leave.' },
        ],
      },
    ],
    recommendedAddons: ['ceramic-spray', 'clay-bar', 'pet-hair', 'odor', 'leather', 'headlights'],
    idealFor: [
      'Seasonal deep cleans (spring and fall)',
      'Preparing a car to sell or trade in',
      'A gift for someone who never has time',
    ],
    faqs: [
      {
        q: 'How is the Full Detail different from booking both packages?',
        a: 'You get everything in the Exterior Wash and Interior Detail, plus full glass, trim dressing, an engine bay wipe down and a final walkthrough — for $120 instead of $125 booked separately.',
      },
      {
        q: 'How long does a Full Detail take?',
        a: 'Most vehicles take 2–3 hours. Larger SUVs, trucks and heavily soiled interiors can take longer; we give you a time estimate when we confirm your booking.',
      },
      waterPowerFaq,
    ],
    featured: true,
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const getAddon = (id: string) => addons.find((a) => a.id === id);

// Service areas. Keep this list to places you actually serve — each one
// generates an indexable landing page at /service-areas/[slug].
export type ServiceArea = {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  blurb: string;
  localNote: string;
  nearby: string[];
  homeBase?: boolean;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'sheffield-lake',
    name: 'Sheffield Lake',
    county: 'Lorain County',
    zips: ['44054'],
    homeBase: true,
    blurb:
      'Sheffield Lake is our home base, so local appointments are the easiest to fit in — including weekday evenings after work and early weekend mornings.',
    localNote:
      'Living right on Lake Erie means your paint takes a beating from wind-blown sand, gull droppings and winter salt spray. Regular hand washes and a ceramic spray top-up keep that grime from etching into the clear coat.',
    nearby: ['sheffield-village', 'avon-lake', 'lorain'],
  },
  {
    slug: 'sheffield-village',
    name: 'Sheffield Village',
    county: 'Lorain County',
    zips: ['44054'],
    blurb:
      'Just south of Sheffield Lake, Sheffield Village is minutes from us — book an evening or weekend detail right in your driveway.',
    localNote:
      'Commuting on Route 2, Detroit Road or Abbe Road leaves brake dust and road film on wheels and lower panels. Our wheel deep-clean and two-bucket wash remove it safely.',
    nearby: ['sheffield-lake', 'avon', 'elyria'],
  },
  {
    slug: 'avon-lake',
    name: 'Avon Lake',
    county: 'Lorain County',
    zips: ['44012'],
    blurb:
      'Our neighbors to the east. We detail cars across Avon Lake, from the lakefront streets to the neighborhoods off Walker Road.',
    localNote:
      'Lake-effect snow means months of salt on Avon Lake roads. A spring Full Detail — wash, deep interior and trim dressing — resets your car after winter.',
    nearby: ['sheffield-lake', 'avon', 'bay-village'],
  },
  {
    slug: 'lorain',
    name: 'Lorain',
    county: 'Lorain County',
    zips: ['44052', '44053', '44055'],
    blurb:
      'Mobile car detailing throughout Lorain — we come to your home so you never have to wait at a car wash on Route 58 or Leavitt Road.',
    localNote:
      'Salt, sand and lakeshore wind are tough on Lorain vehicles. Our snow-foam pre-rinse lifts grit off the paint before we ever touch it, so the wash doesn’t grind it in.',
    nearby: ['sheffield-lake', 'amherst', 'elyria'],
  },
  {
    slug: 'avon',
    name: 'Avon',
    county: 'Lorain County',
    zips: ['44011'],
    blurb:
      'Busy Avon schedules are why we work evenings and weekends. Book a detail at home and your car is done before you need it next.',
    localNote:
      'Plenty of Avon families run SUVs and minivans that see daily kid and pet duty. An Interior Detail with Pet Hair Removal or Odor Elimination brings the cabin back to fresh.',
    nearby: ['avon-lake', 'sheffield-village', 'north-ridgeville'],
  },
  {
    slug: 'elyria',
    name: 'Elyria',
    county: 'Lorain County',
    zips: ['44035', '44036'],
    blurb:
      'Professional mobile detailing for Elyria homes — hand washes, interior details and full details without leaving your driveway.',
    localNote:
      'Between I-80, Route 57 and the daily commute, Elyria cars collect brake dust and road film fast. Regular exterior washes with wheel deep-cleaning keep rims from pitting.',
    nearby: ['sheffield-village', 'north-ridgeville', 'amherst'],
  },
  {
    slug: 'north-ridgeville',
    name: 'North Ridgeville',
    county: 'Lorain County',
    zips: ['44039'],
    blurb:
      'From Center Ridge Road to the newer subdivisions, we bring our detailing setup to North Ridgeville driveways seven days a week.',
    localNote:
      'Long commutes on I-480 and I-90 mean a lot of time in the car. A deep Interior Detail — vents, console, seats and mats — makes those drives a lot more pleasant.',
    nearby: ['avon', 'elyria', 'westlake'],
  },
  {
    slug: 'amherst',
    name: 'Amherst',
    county: 'Lorain County',
    zips: ['44001'],
    blurb:
      'Mobile car detailing for Amherst — we come to you for hand washes, deep interior cleaning and complete inside-and-out details.',
    localNote:
      'Country roads and farm-adjacent driving kick up dust and mud. Our Exterior Wash includes a wheel deep-clean and door jamb wipe down, so the grime doesn’t come right back.',
    nearby: ['lorain', 'elyria', 'vermilion'],
  },
  {
    slug: 'vermilion',
    name: 'Vermilion',
    county: 'Erie & Lorain Counties',
    zips: ['44089'],
    blurb:
      'From the harbor to the neighborhoods off Liberty Avenue, we detail cars across Vermilion at your home.',
    localNote:
      'Boat-season trips and lakefront parking leave sand and water spots on paint and glass. A hand wash with microfiber dry and a ceramic spray adds protection that sheds water.',
    nearby: ['amherst', 'lorain', 'sheffield-lake'],
  },
  {
    slug: 'bay-village',
    name: 'Bay Village',
    county: 'Cuyahoga County',
    zips: ['44140'],
    blurb:
      'Just across the county line from Avon Lake, Bay Village is an easy trip for us — evening and weekend appointments available.',
    localNote:
      'Tree-lined Bay Village streets mean sap and bird droppings on your paint. Prompt hand washing and a clay bar treatment remove them before they etch the clear coat.',
    nearby: ['avon-lake', 'westlake', 'sheffield-lake'],
  },
  {
    slug: 'westlake',
    name: 'Westlake',
    county: 'Cuyahoga County',
    zips: ['44145'],
    blurb:
      'Mobile detailing for Westlake homes — skip the drive to a detail shop and get showroom results in your own driveway.',
    localNote:
      'Frequent highway driving on I-90 sandblasts the front of your car. Our bug & tar removal plus a Paint Protection Film spot on the hood edge help keep the front end looking new.',
    nearby: ['bay-village', 'north-ridgeville', 'avon'],
  },
];

export const getServiceArea = (slug: string) => serviceAreas.find((a) => a.slug === slug);

export const areaNames = (list = serviceAreas) => list.map((a) => a.name).join(', ');

export const generalFaqs: Faq[] = [
  waterPowerFaq,
  {
    q: 'Where do you provide mobile car detailing?',
    a: `We're based in Sheffield Lake and serve the surrounding area, including ${areaNames(
      serviceAreas.filter((a) => !a.homeBase),
    )}. Not sure if you're in range? Call ${site.phone.display}.`,
  },
  {
    q: 'How much does mobile car detailing cost?',
    a: 'Packages start at $50 for an Exterior Wash, $75 for an Interior Detail and $120 for a Full Detail. These are starting prices — larger vehicles or heavily soiled interiors may cost more, and we always confirm the price before we start.',
  },
  {
    q: 'How long does a detail take?',
    a: 'An Exterior Wash takes about 45–60 minutes, an Interior Detail 60–90 minutes and a Full Detail 2–3 hours, depending on the size and condition of the vehicle.',
  },
  {
    q: 'What are your hours?',
    a: `We detail ${hours.map((h) => `${h.label}, ${h.display}`).join(' and ')}. Evening and weekend appointments are our specialty.`,
  },
  {
    q: 'How do I book?',
    a: `Submit the booking form online or call ${site.phone.display}. We confirm every appointment within 24 hours by phone or email.`,
  },
];

export const usd = (n: number) => `$${n}`;
