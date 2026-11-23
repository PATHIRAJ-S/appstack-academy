import nodemailer from 'nodemailer';

// --- In-Memory Rate Limiting for Serverless Container ---
// Helps mitigate rapid automated spam attacks on active function instances
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  // Clean up stale entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  clientData.count += 1;
  return false;
}

// --- Sanitization & Security Helpers ---

/**
 * Strips Carriage Return (CR) and Line Feed (LF) characters to prevent
 * Email Header Injection attacks in headers such as Subject, From, Reply-To.
 */
function stripCRLF(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[\r\n]/g, '').trim();
}

/**
 * Escapes HTML characters to prevent XSS / HTML injection in webmail clients.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * RFC 5322 compliant regex for robust email validation.
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Phone number validation regex (optional field, but if present must be valid).
 */
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.0-9]{7,15}$/;

/**
 * Generates high-converting, professional HTML email template
 * using AppStack Academy brand colors:
 * Primary: #2563EB | Secondary: #7C3AED | Accent: #06B6D4 | Background: #0F172A
 */
function generateNotificationEmailHtml({ name, email, phone, subject, message, submittedAt, clientIp }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : 'Not provided';
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - AppStack Academy</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F172A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F172A; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);">
          
          <!-- Top Brand Accent Gradient Bar -->
          <tr>
            <td height="6" style="background: linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 36px; background-color: #0F172A; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 12px; background-color: rgba(37, 99, 235, 0.2); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 9999px; color: #06B6D4; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                      Website Contact Lead
                    </span>
                    <h1 style="margin: 12px 0 0 0; color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                      AppStack <span style="color: #06B6D4;">Academy</span>
                    </h1>
                    <p style="margin: 4px 0 0 0; color: #94A3B8; font-size: 13px;">
                      Admissions & General Inquiry Notification
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 36px 36px 28px 36px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #1E293B;">
                A new visitor has submitted an inquiry through the <strong>AppStack Academy</strong> website contact form. Review their details below:
              </p>

              <!-- Visitor Details Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; width: 140px; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                    Full Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600; color: #0F172A;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email Address
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600; color: #2563EB;">
                    <a href="mailto:${safeEmail}" style="color: #2563EB; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                    Phone Number
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600; color: #0F172A;">
                    ${phone ? `<a href="tel:${safePhone}" style="color: #0F172A; text-decoration: none;">${safePhone}</a>` : '<span style="color: #94A3B8; font-weight: normal;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px;">
                    Subject
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 600; color: #7C3AED;">
                    ${safeSubject}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 28px;">
                <h3 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #475569;">
                  Visitor Message
                </h3>
                <div style="background-color: #F8FAFC; border-left: 4px solid #2563EB; border-radius: 0 10px 10px 0; padding: 18px 20px; font-size: 14px; line-height: 1.65; color: #334155;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Quick Reply CTA Button -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 10px 0 20px 0;">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(safeSubject)}" target="_blank" style="display: inline-block; background-color: #2563EB; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.4);">
                      Reply directly to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Metadata -->
              <p style="margin: 20px 0 0 0; font-size: 12px; color: #94A3B8; text-align: center; border-top: 1px solid #F1F5F9; padding-top: 16px;">
                Submitted on ${submittedAt} | Origin IP: ${clientIp || 'Masked/Proxied'}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #F8FAFC; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748B;">
                This notification was automatically dispatched by AppStack Academy Serverless Email Service.
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #94A3B8;">
                &copy; ${new Date().getFullYear()} AppStack Academy. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates clean plain-text version for accessibility and strict text email clients.
 */
function generateNotificationEmailText({ name, email, phone, subject, message, submittedAt }) {
  return `New Contact Form Submission - AppStack Academy
==================================================

Visitor Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Subject: ${subject}
- Submitted At: ${submittedAt}

Message:
--------------------------------------------------
${message}
--------------------------------------------------

To reply directly to this visitor, send an email to: ${email}

--
AppStack Academy Serverless Email Service
https://appstackacademy.com`;
}

// --- Main Vercel Serverless Function Handler ---

export default async function handler(req, res) {
  // 1. Set CORS Headers to allow secure cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Handle HTTP OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Enforce HTTP POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Only POST requests are supported.'
    });
  }

  try {
    // 4. Safe payload parsing
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          message: 'Invalid JSON request payload provided.'
        });
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'Request body must be a valid JSON object.'
      });
    }

    const {
      name,
      email,
      phone,
      subject,
      message,
      website // Honeypot field for bot spam prevention
    } = body;

    // 5. Honeypot Spam Protection Check
    // If a bot fills out the hidden honeypot field, silently reject
    if (website && website.trim().length > 0) {
      console.warn('[AppStack Contact API] Spam submission caught via honeypot.');
      // Return 200 decoy success response so bots think it succeeded without sending emails
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
    }

    // 6. Serverless Rate Limiting Protection (per IP)
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      'unknown';

    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        message: 'Too many submissions from your connection. Please wait a few minutes before trying again.'
      });
    }

    // 7. Input Validation & Header Injection Prevention
    const errors = {};

    // Validate Name
    const cleanName = stripCRLF(name);
    if (!cleanName || cleanName.length < 2) {
      errors.name = 'Full Name is required (minimum 2 characters).';
    } else if (cleanName.length > 100) {
      errors.name = 'Full Name must not exceed 100 characters.';
    }

    // Validate Email
    const cleanEmail = stripCRLF(email);
    if (!cleanEmail) {
      errors.email = 'Email Address is required.';
    } else if (cleanEmail.length > 254 || !EMAIL_REGEX.test(cleanEmail)) {
      errors.email = 'Please provide a valid email address.';
    }

    // Validate Phone (optional)
    let cleanPhone = '';
    if (phone && typeof phone === 'string' && phone.trim().length > 0) {
      cleanPhone = stripCRLF(phone);
      if (cleanPhone.length > 25 || !PHONE_REGEX.test(cleanPhone)) {
        errors.phone = 'Please provide a valid phone number format.';
      }
    }

    // Validate Subject
    const cleanSubject = stripCRLF(subject);
    if (!cleanSubject || cleanSubject.length < 2) {
      errors.subject = 'Subject is required (minimum 2 characters).';
    } else if (cleanSubject.length > 200) {
      errors.subject = 'Subject must not exceed 200 characters.';
    }

    // Validate Message
    const rawMessage = typeof message === 'string' ? message.trim() : '';
    if (!rawMessage || rawMessage.length < 5) {
      errors.message = 'Message is required (minimum 5 characters).';
    } else if (rawMessage.length > 5000) {
      errors.message = 'Message must not exceed 5000 characters.';
    }

    // Return 400 Bad Request if validation failed
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Unable to send your message. Please check the required fields.',
        errors
      });
    }

    // 8. Verify Environment Configuration
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '';
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const contactReceiver = process.env.CONTACT_RECEIVER?.trim() || 'appstackacademy@gmail.com';

    if (!smtpUser || !smtpPass) {
      console.error(
        '[AppStack Contact API] Missing SMTP credentials! Ensure SMTP_USER and SMTP_PASS are set in environment variables.'
      );
      return res.status(500).json({
        success: false,
        message: 'Unable to send your message. Please try again.'
      });
    }

    // 9. Configure Nodemailer Transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      connectionTimeout: 10000, // 10s connection timeout
      greetingTimeout: 10000,
      socketTimeout: 15000
    });

    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'long'
    }) + ' (UTC)';

    // 10. Prepare Email Options with visitor as Reply-To
    const safeSenderName = cleanName.replace(/"/g, '');
    const mailOptions = {
      from: `"AppStack Academy Contact" <${smtpUser}>`,
      to: contactReceiver,
      replyTo: `"${safeSenderName}" <${cleanEmail}>`,
      subject: `[Contact Form] ${cleanSubject} - AppStack Academy`,
      text: generateNotificationEmailText({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: rawMessage,
        submittedAt
      }),
      html: generateNotificationEmailHtml({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: rawMessage,
        submittedAt,
        clientIp
      })
    };

    // 11. Send Email Notification via Nodemailer
    await transporter.sendMail(mailOptions);

    console.log(
      `[AppStack Contact API] Successfully forwarded inquiry from ${cleanEmail} (${cleanName}) to ${contactReceiver}.`
    );

    // 12. Return Success JSON Response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.'
    });

  } catch (error) {
    // 13. Safe Error Handling: Log internally, never expose credentials to client
    console.error('[AppStack Contact API] Internal SMTP dispatch error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send your message. Please try again.'
    });
  }
}
