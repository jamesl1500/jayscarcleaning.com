// Seasonal marketing copy. The site picks the current season from the date in
// Ohio, so the pitch shifts on its own: protect the paint before winter in the
// fall, interiors in the winter, a post-salt reset in the spring.
//
// Pages re-render once a day (see the revalidate export in the (site) layout),
// so a new season goes live within a day of its first month starting.
//
// Preview another season locally: SEASON_OVERRIDE=spring npm run dev

export type Season = "winter" | "spring" | "summer" | "fall";

export type SeasonCopy = {
  id: Season;
  name: string;
  // Short line for the homepage hero promo.
  headline: string;
  text: string;
  // Where the promo sends people, usually the booking form with the package
  // that season's pitch is about already picked.
  link: { href: string; label: string };
  // Default heading and text for the CtaBanner at the bottom of most pages.
  cta: { title: string; text: string };
};

export const seasons: Record<Season, SeasonCopy> = {
  fall: {
    id: "fall",
    name: "Fall",
    headline: "Winter is around the corner.",
    text: "Now is the time to wash off summer’s grime and add a ceramic spray sealant, so road salt and slush have a harder time sticking to your paint. Book before your outdoor spigot gets shut off for the season.",
    link: { href: "/contact?package=exterior-wash", label: "Book a fall hand wash" },
    cta: {
      title: "Get your car ready for winter.",
      text: "Book a hand wash before the salt trucks roll out. We bring everything to your driveway.",
    },
  },
  winter: {
    id: "winter",
    name: "Winter",
    headline: "Salt and slush season.",
    text: "Interior Details need only an outlet, not water, so we keep detailing all winter. Salt-stained carpets and soaked floor mats included.",
    link: { href: "/contact?package=interior-detailing", label: "Book a winter Interior Detail" },
    cta: {
      title: "Don’t let winter wreck your interior.",
      text: "Book an Interior Detail. No water needed, just an outlet, in your driveway or garage.",
    },
  },
  spring: {
    id: "spring",
    name: "Spring",
    headline: "Spring is detail season.",
    text: "Clear out a winter’s worth of salt, sand and slush, inside and out, and head into summer with a car that feels new.",
    link: { href: "/contact?package=full-detail", label: "Book a spring Full Detail" },
    cta: {
      title: "Get it detailed before summer.",
      text: "A Full Detail takes the salt off your paint and the grime out of your carpets. We come to you.",
    },
  },
  summer: {
    id: "summer",
    name: "Summer",
    headline: "Keep it clean all summer.",
    text: "Bugs, tree sap and lake sand build up fast. A hand wash every few weeks clears them off before they etch into your paint.",
    link: { href: "/maintenance-plan", label: "See our wash plans" },
    cta: {
      title: "Ready for a spotless summer ride?",
      text: "Hand washes in your driveway on evenings and weekends, or set up a wash plan and never rebook.",
    },
  },
};

// The season each month belongs to, January first. Move a month to shift a
// season's start (e.g. make November "winter" once spigots are off).
const seasonByMonth: Season[] = [
  "winter", // Jan
  "winter", // Feb
  "spring", // Mar
  "spring", // Apr
  "spring", // May
  "summer", // Jun
  "summer", // Jul
  "summer", // Aug
  "fall", // Sep
  "fall", // Oct
  "fall", // Nov
  "winter", // Dec
];

// Month (1–12) in Ohio. The server clock may be UTC, which would flip the
// season a few hours early.
const ohioMonth = (date: Date) =>
  Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "numeric",
    }).format(date),
  );

const isSeason = (value: string | undefined): value is Season =>
  !!value && value in seasons;

export function currentSeason(date = new Date()): SeasonCopy {
  const override = process.env.SEASON_OVERRIDE;
  if (isSeason(override)) return seasons[override];
  return seasons[seasonByMonth[ohioMonth(date) - 1]];
}

// The winter service menu (outlet-only interiors, garage details) runs
// November through April, when spigots are off. It spans parts of three
// seasons, so it has its own months rather than following currentSeason().
const winterServiceMonths = [11, 12, 1, 2, 3, 4];

export const winterServicesOn = (date = new Date()) =>
  winterServiceMonths.includes(ohioMonth(date));
