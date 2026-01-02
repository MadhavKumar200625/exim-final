import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* =========================
   SIMPLE IN-MEMORY RATE LIMIT
   (per server instance)
========================= */
const RATE_LIMIT = 5; // requests
const WINDOW_MS = 60_000; // 1 minute
const ipHits = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const record = ipHits.get(ip) || { count: 0, start: now };

  if (now - record.start > WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return false;
  }

  record.count += 1;
  ipHits.set(ip, record);

  return record.count > RATE_LIMIT;
}

/* =========================
   BASIC SANITIZATION
========================= */
const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    // Rate limit
    if (rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try later." },
        { status: 429 }
      );
    }

    const { nname, nemail, nmobile , selectedCountry } = await req.json();

    // Validation
    if (!nname || !nemail || !nmobile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nemail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = escapeHtml(nname);
    const safeEmail = escapeHtml(nemail);
    const safeMobile = escapeHtml(nmobile);
    const safeCountry = escapeHtml(selectedCountry);

    /* =========================
       MAIL TRANSPORTER
    ========================= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass: "fmdn jlsa ifhi onuz",   // app password from Gmail
      },
    });

    /* =========================
       COMPANY EMAIL
    ========================= */
    const companyMailOptions = {
      from: `"Exim Trade Data" <contact@eximtradedata.com>`,
      to: "enquiry@eximtradedata.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📩 New Newsletter Subscription</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Mobile:</strong> ${safeMobile}</p>
          <p><strong>Country:</strong> ${safeCountry}</p>
          <hr />
          <p style="font-size:12px;color:#888;">
            Submitted from Exim Trade Data website
          </p>
        </div>
      `,
    };

    /* =========================
       USER EMAIL
    ========================= */
    const userMailOptions = {
      from: `"Exim Trade Data" <contact@eximtradedata.com>`,
      to: safeEmail,
      subject: "Thanks for subscribing to Exim Trade Data",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Welcome to Exim Trade Data 🎉</h2>
          <p>Thank you for subscribing to our newsletters.</p>
          <p>You’ll receive trade insights, updates, and exclusive offers.</p>
          <p>No spam. Unsubscribe anytime.</p>
          <br />
          <p>
            Regards,<br />
            <strong>Exim Trade Data</strong><br />
            <a href="https://eximtradedata.com">eximtradedata.com</a>
          </p>
        </div>
      `,
    };

    /* =========================
       SEND EMAILS (ISOLATED)
    ========================= */
    await transporter.sendMail(companyMailOptions).catch(console.error);
    await transporter.sendMail(userMailOptions).catch(console.error);

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}