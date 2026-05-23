import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, vehicle, pkg, date, addons, notes } = body;

  if (!name || !email || !phone || !vehicle || !pkg || !date) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const addonsList =
    addons && addons.length > 0
      ? addons.map((a: string) => `  • ${a}`).join('\n')
      : '  None selected';

  try {
    await resend.emails.send({
      from: 'Clean Lab Detailing <bookings@cleanlabdetailing.com>',
      to: ['hello@jameslatten.com'],
      replyTo: email,
      subject: `New Booking Request — ${name}`,
      text: `
New booking request received from the website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:    ${name}
Email:   ${email}
Phone:   ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPOINTMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Package:       ${pkg}
Vehicle Type:  ${vehicle}
Preferred Date: ${date}

Add-Ons:
${addonsList}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${notes || 'No additional notes.'}
      `.trim(),
    });

    // Confirmation email to the customer
    await resend.emails.send({
      from: 'Clean Lab Detailing <bookings@cleanlabdetailing.com>',
      to: [email],
      subject: 'We received your booking request!',
      text: `
Hi ${name},

Thanks for reaching out! We've received your booking request and will confirm your appointment within 24 hours.

Here's a summary of your request:

  Package:        ${pkg}
  Vehicle:        ${vehicle}
  Preferred Date: ${date}

${addons && addons.length > 0 ? `Add-Ons:\n${addons.map((a: string) => `  • ${a}`).join('\n')}\n` : ''}
If you have any questions in the meantime, reply to this email or call us at (216) 889-7822.

— Clean Lab Detailing
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Resend error]', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
