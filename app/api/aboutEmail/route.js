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
  String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[m]
  );

/* =========================
   GET LOCATION FROM IP
========================= */
async function getLocationFromIP(ip) {
  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json`, {
      cache: "no-store",
    });

    const data = await response.json();

    return {
      city: data.city || "N/A",
      region: data.region || "N/A",
      country: data.country || "N/A",
      postal: data.postal || "N/A",
      latitude: data.loc?.split(",")[0] || "N/A",
      longitude: data.loc?.split(",")[1] || "N/A",
      timezone: data.timezone || "N/A",
      organization: data.org || "N/A",
    };
  } catch (error) {
    console.error("IP lookup failed:", error);
    return null;
  }
}

export async function POST(req) {
  try {
    /* =========================
       CLIENT IP
    ========================= */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    /* =========================
       RATE LIMIT
    ========================= */
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
        }
      );
    }

    /* =========================
       REQUEST DATA
    ========================= */
    const { name, email, mobile, message, country } =
      await req.json();

    /* =========================
       VALIDATION
    ========================= */
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

    /* =========================
       SANITIZE
    ========================= */
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMobile = escapeHtml(mobile);
    const safeMessage = escapeHtml(message);
    const safeCountry = escapeHtml(country);

    /* =========================
       LOCATION LOOKUP
    ========================= */
    const location = await getLocationFromIP(ip);

    /* =========================
       MAIL TRANSPORT
    ========================= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* =========================
       COMPANY EMAIL
    ========================= */
    const companyMail = {
      from: `"Exim Trade Data" <${process.env.EMAIL_USER}>`,
      to: "enquiry@eximtradedata.com",
      subject: "New Contact Enquiry",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7">
          <h2>📩 New Enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safeMobile}</p>
          <p><strong>Country:</strong> ${safeCountry}</p>

          <p>
            <strong>Message:</strong><br/>
            ${safeMessage}
          </p>

          <hr/>

          <h3>Visitor Information</h3>

          <p><strong>IP Address:</strong> ${ip}</p>

          <p>
            <strong>Location:</strong>
            ${
              location
                ? `${location.city}, ${location.region}, ${location.country}`
                : "Unavailable"
            }
          </p>

          ${
            location
              ? `
                <p><strong>Postal Code:</strong> ${location.postal}</p>
                <p><strong>Latitude:</strong> ${location.latitude}</p>
                <p><strong>Longitude:</strong> ${location.longitude}</p>
                <p><strong>Timezone:</strong> ${location.timezone}</p>
                <p><strong>ISP:</strong> ${location.organization}</p>
              `
              : ""
          }

          <p>
            <strong>User Agent:</strong><br/>
            ${escapeHtml(
              req.headers.get("user-agent") || "Unknown"
            )}
          </p>

          <hr/>

          <small>
            Submitted from Exim Trade Data website
          </small>
        </div>
      `,
    };

    /* =========================
       USER EMAIL
    ========================= */
    const userMail = {
      from: `"Exim Trade Data" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: "We received your enquiry – Exim Trade Data",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>Hello ${safeName} 👋</h2>

          <p>
            Thank you for contacting
            <strong>Exim Trade Data</strong>.
          </p>

          <p>
            Our team will review your enquiry
            and get back to you shortly.
          </p>

          <br/>

          <p>
            Regards,<br/>
            <strong>Exim Trade Data Team</strong>
          </p>

          <a href="https://eximtradedata.com">
            eximtradedata.com
          </a>
        </div>
      `,
    };

    /* =========================
       SEND EMAILS
    ========================= */
    await transporter.sendMail(companyMail);
    await transporter.sendMail(userMail);

    return NextResponse.json(
      {
        message: "Enquiry sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}