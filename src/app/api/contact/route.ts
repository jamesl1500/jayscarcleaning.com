import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getAddon, getBookable, leadSources, referral, requirements, site, sizeTiers, tierFor, usd } from '@/lib/site';

// Sender must be on a domain verified in Resend; the inbox is where bookings land.
const FROM = process.env.BOOKING_FROM_EMAIL ?? `${site.name} <bookings@cleanlabdetailing.com>`;
const INBOX = process.env.BOOKING_INBOX_EMAIL ?? site.email.display;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max = 200) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot filled in — pretend success so bots move on.
  if (str(body.company)) {
    return NextResponse.json({ success: true });
  }

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const address = str(body.address, 200);
  const city = str(body.city, 60);
  const vehicle = str(body.vehicle, 60);
  const date = str(body.date, 20);
  const time = str(body.time, 60) || 'No preference';
  const notes = str(body.notes, 2000);
  const source = str(body.source, 60) || 'website';
  const heardAbout = leadSources.find((s) => s === str(body.heardAbout, 60)) ?? 'Not given';
  const referredBy = str(body.referredBy, 100);
  const pkg = getBookable(str(body.pkg, 60));
  const tier = tierFor(vehicle);
  const tierName = sizeTiers.find((t) => t.id === tier)?.name ?? 'Sedan';
  const addonList = (Array.isArray(body.addons) ? body.addons : [])
    .map((id) => getAddon(str(id, 40)))
    .filter((a) => a !== undefined);

  if (!name || !phone || !address || !city || !vehicle || !date || !pkg) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (body.hookups !== true) {
    return NextResponse.json(
      {
        error: pkg.needsWater
          ? 'Please confirm a water source and electrical outlet will be available.'
          : 'Please confirm an electrical outlet will be available.',
      },
      { status: 400 },
    );
  }

  const price = pkg.prices[tier];
  const estimate = price + addonList.reduce((sum, a) => sum + a.price, 0);
  const isPlan = pkg.slug.startsWith('plan-');
  const needs = pkg.needsWater ? requirements.items : requirements.items.filter((r) => r.id !== 'water');
  const addonLines = addonList.length ? addonList.map((a) => `  • ${a.name} (+${usd(a.price)})`).join('\n') : '  None selected';
  const rule = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';

  try {
    // Created per request so builds don't require RESEND_API_KEY.
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: FROM,
      to: [INBOX],
      replyTo: email,
      subject: `New Booking — ${pkg.name} — ${name} (${city})`,
      text: `
New booking request from the website (${source}).

${rule}
CUSTOMER
${rule}
Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Address:  ${address}
City:     ${city}

${rule}
APPOINTMENT
${rule}
Package:        ${pkg.name} (${usd(price)}${isPlan ? ' per visit' : ''})
Vehicle:        ${vehicle} — ${tierName} pricing
Preferred date: ${date}
Preferred time: ${time}
Estimate:       ${usd(estimate)}

Add-ons:
${addonLines}

${pkg.needsWater ? 'Water + electricity' : 'Electricity (interior only)'} confirmed: YES

${rule}
LEAD SOURCE
${rule}
Heard about us: ${heardAbout}${referredBy ? `\nReferred by:    ${referredBy} (${referral.headline.toLowerCase()})` : ''}

${rule}
NOTES
${rule}
${notes || 'No additional notes.'}
      `.trim(),
    });

    await resend.emails.send({
      from: FROM,
      to: [email],
      replyTo: site.email.display,
      subject: `We received your ${site.name} booking request`,
      text: `
Hi ${name},

Thanks for booking with ${site.name}! We've received your request and will confirm your appointment within 24 hours.

Your request
  Package:        ${pkg.name}
  Vehicle:        ${vehicle}
  Preferred date: ${date} (${time})
  Location:       ${address}, ${city}
${addonList.length ? `  Add-ons:\n${addonList.map((a) => `    • ${a.name}`).join('\n')}\n` : ''}  Estimated price: ${usd(estimate)}${isPlan ? ' per visit' : ''} (${tierName})

Before we arrive
${needs.map((r) => `  • ${r.title}: ${r.desc}`).join('\n')}
That's all we need — ${requirements.weBring.charAt(0).toLowerCase()}${requirements.weBring.slice(1)}

${referral.headline}: ${referral.desc} Just have them mention your name when they book.


Questions? Reply to this email, call ${site.phone.display} or write to ${site.email.display}.

— ${site.owner}, ${site.name}
${site.url}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Resend error]', err);
    return NextResponse.json(
      { error: `We couldn't send your request. Please call ${site.phone.display} or email ${site.email.display}.` },
      { status: 500 },
    );
  }
}
