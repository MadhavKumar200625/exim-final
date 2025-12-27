import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* =========================
   SIMPLE RATE LIMIT (per IP)
========================= */
const RATE_LIMIT = 5; // max requests
const WINDOW_MS = 60_000; // 1 minute
const ipStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipStore.get(ip) || { count: 0, time: now };

  if (now - entry.time > WINDOW_MS) {
    ipStore.set(ip, { count: 1, time: now });
    return false;
  }

  entry.count += 1;
  ipStore.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

/* =========================
   BASIC HTML SANITIZATION
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

    /* Rate limit */
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, mobile, message, country } = await req.json();

    /* Validation */
    if (!name || !email || !mobile || !message || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!/^\+?\d{10,15}$/.test(mobile)) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    /* Sanitize */
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMobile = escapeHtml(mobile);
    const safeMessage = escapeHtml(message);
    const safeCountry = escapeHtml(country);

    /* Mail Transport */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "fmdn jlsa ifhi onuz",
      },
    });

    /* Company Mail */
    const companyMail = {
      from: `"Exim Trade Data" <${"contact@eximtradedata.com"}>`,
      to: "enquiry@eximtradedata.com",
      subject: "New Contact Enquiry",
      html: `
        <div style="font-family:Arial;line-height:1.6">
          <h2>📩 New Enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safeMobile}</p>
          <p><strong>Country:</strong> ${safeCountry}</p>
          <p><strong>Message:</strong><br/>${safeMessage}</p>
          <hr/>
          <small>Submitted from Exim Trade Data website</small>
        </div>
      `,
    };

    /* User Mail */
    const userMail = {
      from: `"Exim Trade Data" <${"contact@eximtradedata.com"}>`,
      to: safeEmail,
      subject: "We received your enquiry – Exim Trade Data",
      html: `
        <div style="font-family:Arial;line-height:1.6">
          <h2>Hello ${safeName} 👋</h2>
          <p>Thank you for contacting <strong>Exim Trade Data</strong>.</p>
          <p>Our team will review your enquiry and get back to you shortly.</p>
          <br/>
          <p>Regards,<br/><strong>Exim Trade Data Team</strong></p>
          <a href="https://eximtradedata.com">eximtradedata.com</a>
        </div>
      `,
    };

    /* Send emails safely */
    await transporter.sendMail(companyMail).catch(console.error);
    await transporter.sendMail(userMail).catch(console.error);

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("About Email Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}