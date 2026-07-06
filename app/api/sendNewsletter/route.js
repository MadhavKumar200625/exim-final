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
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[m])
  );

/* =========================
   GET LOCATION FROM IP
========================= */
async function getLocationFromIP(ip) {
  try {
    console.log("Looking up IP:", ip);

    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      cache: "no-store",
    });

    console.log("Status:", response.status);

    const data = await response.json();
    console.log("Response:", data);

    if (!response.ok) return null;

    return {
      city: data.city || "N/A",
      region: data.region || "N/A",
      country: data.country_name || "N/A",
      postal: data.postal || "N/A",
      latitude: data.latitude || "N/A",
      longitude: data.longitude || "N/A",
      timezone: data.timezone || "N/A",
      organization: data.org || "N/A",
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

      

    const location = await getLocationFromIP(ip);

    console.log(location);

    // Rate limit
    if (rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try later." },
        { status: 429 }
      );
    }

    const { nname, nemail, nmobile, selectedCountry } =
      await req.json();

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
        user: "contact@eximtradedata.com",
        pass: "ubig ldfm qgqk rwkq",
      },
    });

    /* =========================
       COMPANY EMAIL
    ========================= */
    const companyMailOptions = {
      from: `"Exim Trade Data" <contact@eximtradedata.com>`,
      to: "enquiry@eximtradedata.com,madhavkumar200625@gmail.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📩 New Newsletter Subscription</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Mobile:</strong> ${safeMobile}</p>
          <p><strong>Country:</strong> ${safeCountry}</p>

          <hr />

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
            ${req.headers.get("user-agent") || "Unknown"}
          </p>

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
    // await transporter.sendMail(companyMailOptions).catch(console.error);
    // await transporter.sendMail(userMailOptions).catch(console.error);

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