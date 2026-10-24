# Clean Lab Detailing — cleanlabdetailing.com

Marketing site and booking funnel for Clean Lab Detailing, a mobile car detailing business based in Sheffield Lake, OH. Next.js 16 (App Router), Tailwind CSS v4, Resend for booking emails.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (in production) | Sends booking emails |
| `BOOKING_FROM_EMAIL` | no | Sender, e.g. `Clean Lab Detailing <bookings@cleanlabdetailing.com>`. Must be on a domain verified in Resend. |
| `BOOKING_INBOX_EMAIL` | no | Where new bookings are delivered. Defaults to the site contact email. |

## Where to edit content

Almost everything lives in data files, so contact info, prices and copy stay consistent across pages, structured data, emails and the sitemap:

- `src/lib/site.ts`: phone, email, hours, the water/electricity requirement, packages, add-ons, service areas, FAQs
- `src/lib/funnels.ts`: landing pages at `/lp/[slug]`
- `src/lib/schema.ts`: schema.org structured data (LocalBusiness/AutoWash, Service, FAQ, Breadcrumbs)

Adding a service area or funnel to these lists automatically creates its page, Open Graph image and sitemap entry.

## Routes

| Route | Notes |
| --- | --- |
| `/` | Home |
| `/packages`, `/packages/[slug]` | Pricing overview and the three package pages |
| `/service-areas`, `/service-areas/[city]` | Local landing pages (Sheffield Lake + surrounding towns) |
| `/contact` | Booking form; accepts `?package=<slug>` to preselect |
| `/lp/[slug]` | Ad/social funnel pages: no main navigation, form above the fold, `noindex` |
| `/thank-you` | Post-booking confirmation (`noindex`). Use it as the conversion URL in Google Ads / Meta. |
| `/api/contact` | Validates bookings and sends emails via Resend |
