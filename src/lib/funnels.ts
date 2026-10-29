// Conversion landing pages at /lp/[slug] — built for ads, social posts, flyers
// and QR codes. Each one focuses on a single offer and ends in the booking form.

export type Funnel = {
  slug: string;
  packageSlug?: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  subhead: string;
  bullets: string[];
  pains: { title: string; desc: string }[];
  ctaLabel: string;
};

export const funnels: Funnel[] = [
  {
    slug: 'mobile-car-detailing',
    metaTitle: 'Mobile Car Detailing at Your Driveway — Sheffield Lake & Lorain County',
    metaDescription:
      'Get your car professionally detailed at home in Sheffield Lake, Avon Lake, Lorain and nearby. Packages from $50. Book in two minutes.',
    eyebrow: 'Sheffield Lake · Avon Lake · Lorain County',
    headline: 'A professionally detailed car,',
    highlight: 'without leaving home.',
    subhead:
      'We bring a full detailing setup to your driveway. Full Details from $120, hand washes from $50 — you provide water and an outlet, we handle everything else.',
    bullets: ['Hand wash — never automatic brushes', 'Evening & weekend appointments', 'Confirmed within 24 hours'],
    pains: [
      { title: 'No more car wash lines', desc: 'Skip the drive, the wait and the swirl marks from tunnel brushes.' },
      { title: 'Work around your schedule', desc: 'Open 7 days — weekdays until 10 PM and from 8 AM on weekends.' },
      { title: 'Clear, upfront pricing', desc: 'Full Detail from $120, Interior from $75, Exterior from $50 by vehicle size — confirmed before we start.' },
    ],
    ctaLabel: 'Book My Detail',
  },
  {
    slug: 'full-detail',
    packageSlug: 'full-detail',
    metaTitle: 'Full Inside & Out Car Detail from $120 — Sheffield Lake Mobile Detailing',
    metaDescription:
      'Complete inside-and-out mobile detail from $120 in Sheffield Lake and Lorain County. Hand wash, deep interior, glass, trim and engine bay — in your driveway.',
    eyebrow: 'Most Popular Package',
    headline: 'Inside and out,',
    highlight: 'showroom ready from $120.',
    subhead:
      'Our Full Detail combines the hand wash and deep interior clean with glass, trim and engine bay finishing. Less than booking both separately.',
    bullets: ['Everything inside & out in one visit', 'Save $5–$10 vs. booking separately', 'Final walkthrough with you'],
    pains: [
      { title: 'Winter took its toll?', desc: 'Salt, slush and tracked-in mud — gone, inside and out.' },
      { title: 'Selling or trading in?', desc: 'A clean car photographs better and makes a stronger first impression.' },
      { title: 'Just want it to feel new', desc: 'Fresh cabin, glossy paint, clean glass and dressed trim.' },
    ],
    ctaLabel: 'Book My Full Detail',
  },
  {
    slug: 'interior-detail',
    packageSlug: 'interior-detailing',
    metaTitle: 'Interior Car Detailing from $75 — Pet Hair, Spills & Odors | Sheffield Lake',
    metaDescription:
      'Kids, pets, coffee spills? Get a deep interior car detail in your driveway from $75 in Sheffield Lake and Lorain County. Pet hair & odor add-ons available.',
    eyebrow: 'Interior Detail',
    headline: 'Kids, pets, coffee spills?',
    highlight: 'Fresh interior from $75.',
    subhead:
      'Full vacuum, seats, dash, console, vents, glass and floor mat shampoo — done in your driveway. Add Pet Hair Removal or Odor Elimination if you need it.',
    bullets: ['Every surface cleaned & conditioned', 'No water needed — just an outlet', 'Pet hair +$25 · Odor elimination +$20'],
    pains: [
      { title: 'Crumbs in every crevice', desc: 'We vacuum and detail the spots you can’t reach.' },
      { title: 'Dog hair woven into the carpet', desc: 'Specialized tools pull out what a vacuum leaves behind.' },
      { title: 'That smell won’t go away', desc: 'Enzyme treatment neutralizes odors instead of masking them.' },
    ],
    ctaLabel: 'Book My Interior Detail',
  },
  {
    slug: 'exterior-wash',
    packageSlug: 'exterior-wash',
    metaTitle: 'Mobile Hand Car Wash from $50 — Sheffield Lake & Lorain County',
    metaDescription:
      'Professional hand car wash in your driveway from $50. Snow foam, two-bucket wash, wheels, tires and glass. Serving Sheffield Lake, Avon Lake, Lorain and nearby.',
    eyebrow: 'Exterior Hand Wash',
    headline: 'A real hand wash,',
    highlight: 'in your driveway from $50.',
    subhead:
      'Snow foam pre-rinse, two-bucket hand wash, wheels, tires, glass and door jambs. Safe for your paint — and a lot better than the tunnel wash.',
    bullets: ['Scratch-safe two-bucket method', 'Wheels, tires & door jambs', 'Bug, tar & salt removal'],
    pains: [
      { title: 'Lake Erie salt & sand', desc: 'Snow foam lifts grit off before we touch the paint.' },
      { title: 'Swirl marks from tunnel washes', desc: 'Hand washed with clean microfiber — no brushes, ever.' },
      { title: 'No time to wash it yourself', desc: 'We come to you 7 days a week, evenings included.' },
    ],
    ctaLabel: 'Book My Hand Wash',
  },
  {
    slug: 'winter-interior-reset',
    packageSlug: 'interior-detailing',
    metaTitle: 'Winter Interior Reset from $75 — Salt Stains & Slushy Mats | Sheffield Lake',
    metaDescription:
      'Salt stains, soaked floor mats and tracked-in slush, cleaned out in your driveway or garage. No water needed — just an outlet. Interior details from $75 in Sheffield Lake & Lorain County.',
    eyebrow: 'Winter Interior Reset',
    headline: 'Salt stains and slushy mats?',
    highlight: 'Winter reset from $75.',
    subhead:
      'An Interior Detail only needs an electrical outlet — no water — so we can do it all winter, even after your spigot is shut off. Got a garage? Even better.',
    bullets: ['No water needed — just an outlet', 'Salt stains & floor mats extracted', 'Driveway or garage, 7 days a week'],
    pains: [
      { title: 'White salt lines on the carpet', desc: 'We shampoo and extract salt stains instead of just vacuuming over them.' },
      { title: 'Mats that never dry out', desc: 'Floor mats pulled, scrubbed and extracted so the cabin stops smelling damp.' },
      { title: 'Spigot already shut off', desc: 'No problem — interior work runs on an outlet alone.' },
    ],
    ctaLabel: 'Book My Winter Reset',
  },
];

export const getFunnel = (slug: string) => funnels.find((f) => f.slug === slug);
