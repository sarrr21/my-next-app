import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer needs Node.js runtime, not Edge

function renderEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safeMessage = message.replace(/\n/g, "<br>");

 
  

return `<!doctype html>
<html lang="en" style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>New message from ${name}</title>
  <style>
    /* --- Dark mode support for clients that honor it --- */
    @media (prefers-color-scheme: dark) {
      .bg { background: #0b1118 !important; }
      .card { background: #0f1720 !important; color: #e6edf3 !important; }
      .muted { color: #9fb0bf !important; }
      .divider { background: #1f2b36 !important; }
      .badge { background: #111b24 !important; color: #d9e6f2 !important; border-color: #253445 !important; }
      .button { background: #2563eb !important; color: #ffffff !important; border-color: #1e4ec5 !important; }
      .link { color: #93c5fd !important; }
    }
    /* --- Mobile tweaks --- */
    @media (max-width: 640px) {
      .container { width: 100% !important; padding: 0 16px !important; }
      .card { padding: 20px !important; }
      .stack > * { display: block !important; margin-bottom: 8px !important; }
    }
    a { text-decoration: none; }
  </style>
</head>
<body class="bg" style="margin:0;padding:0;background:#f5f7fb;">
  <!-- Preheader (hidden) -->
  <div style="display:none;opacity:0;visibility:hidden;overflow:hidden;height:0;width:0;mso-hide:all;">
    New message from ${name} (${email})
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f7fb;">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" class="container" cellpadding="0" cellspacing="0" border="0" width="640" style="width:640px;max-width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="font-weight:700;font-size:18px;color:#0f172a;">
                    <span style="display:inline-block;padding:10px 12px;border:1px solid #e5e7eb;border-radius:10px;background:#ffffff;vertical-align:middle;">
                      📬 New Contact Message
                    </span>
                  </td>
                  <td align="right" class="stack" style="font-size:13px;color:#64748b;">
                    <span class="muted">Received via contact form</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td>
              <table role="presentation" class="card" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:16px;padding:28px;box-shadow:0 10px 30px rgba(2,6,23,0.06);">
                
                <!-- Title + meta -->
                <tr>
                  <td style="padding-bottom:6px;font-weight:800;font-size:22px;line-height:1.3;color:#0f172a;">
                    Message from ${name}
                  </td>
                </tr>
                <tr>
                  <td style="font-size:14px;color:#475569;">
                    <span class="muted" style="color:#64748b;">Reply to:</span>
                    <a class="link" href="mailto:${email}" style="color:#2563eb;">${email}</a>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:18px 0;">
                    <div class="divider" style="height:1px;background:#e5e7eb;"></div>
                  </td>
                </tr>
               <!-- Message body -->
                <tr>
                  <td style="font-size:16px;line-height:1.7;color:#0f172a;">
                    <!-- Wrap long text nicely and make it readable in clients -->
                    <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:16px;word-break:break-word;white-space:pre-wrap;">
                      ${message}
                    </div>
                  </td>
                </tr>

                <!-- Quick actions -->
                <tr>
                  <td style="padding-top:22px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <!-- CTA button (bulletproof) -->
                        <td>
                          <a href="mailto:${email}" 
                             class="button" 
                             style="display:inline-block;background:#1f2937;border:1px solid #111827;color:#ffffff;font-weight:700;font-size:14px;border-radius:10px;padding:12px 18px;line-height:1;">
                            Reply to ${name}
                          </a>
                        </td>
                        <td width="10"></td>
                        <!-- Badges -->
                        <td>
                          <span class="badge" style="display:inline-block;font-weight:600;font-size:12px;color:#1f2937;background:#f1f5f9;border:1px solid #e5e7eb;border-radius:999px;padding:8px 12px;line-height:1;">From: ${name}</span>
                        </td>
                        <td width="8"></td>
                        <td>
                          <span class="badge" style="display:inline-block;font-weight:600;font-size:12px;color:#1f2937;background:#f1f5f9;border:1px solid #e5e7eb;border-radius:999px;padding:8px 12px;line-height:1;">Email: ${email}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:14px;text-align:center;font-size:12px;color:#94a3b8;">
              You are receiving this because someone submitted your website contact form.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

 
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: Number(process.env.SMTP_PORT ?? 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.CONTACT_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`, // plain-text fallback
      html: renderEmail({ name, email, message }), // modern HTML template
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Failed to send." },
      { status: 500 }
    );
  }
}
