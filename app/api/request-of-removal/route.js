import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* =========================
   RATE LIMIT
========================= */
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
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
   SANITIZE
========================= */
const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const data = await req.json();

    const required = [
      "name",
      "email",
      "country",
      "message",
      "company",
      "submitAs",
      "requestType",
      "urlCompany"
    ];

    for (const f of required) {

      if (!data[f]) {
      
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
    }

    const safe = {};
    Object.keys(data).forEach((k) => (safe[k] = escapeHtml(String(data[k]))));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "fmdn jlsa ifhi onuz",
      },
    });

    console.log("Received removal request:", safe);

    /* ADMIN MAIL */

    await transporter.sendMail({
      from: `"Exim Trade Data" <contact@eximtradedata.com>`,
      // to: "enquiry@eximtradedata.com ",
      to:"madhavkumar200625@gmail.com",
      subject: "Company Profile Removal Request",
      html: `
        <h2>Company Removal Request</h2>

<p><b>Name:</b> ${safe.name}</p>
<p><b>Email:</b> ${safe.email}</p>
<p><b>Phone:</b> ${safe.phone || "-"}</p>
<p><b>Company:</b> ${safe.company || "-"}</p>
<p><b>Country (User Selected):</b> ${safe.country || "-"}</p>
<p><b>Website:</b> ${safe.website || "-"}</p>

<hr/>

<p><b>Submitting As:</b> ${safe.submitAs || "-"}</p>
<p><b>Request Type:</b> ${safe.requestType || "-"}</p>
<p><b>Other Request:</b> ${safe.otherRequest || "-"}</p>

<p><b>Message:</b><br/>${safe.message || "-"}</p>

<hr/>

<p><b>URL Country (Page Country):</b> ${safe.urlCountry || "-"}</p>
<p><b>URL Company (Slug):</b> ${safe.urlCompany || "-"}</p>

<hr/>

<p><b>Confirmation 1:</b> ${safe.confirm1}</p>
<p><b>Confirmation 2:</b> ${safe.confirm2}</p>
<p><b>Confirmation 3:</b> ${safe.confirm3}</p>
        <p><b>URL Context:</b> company-profile-removal-request/${safe.urlCountry}/${safe.urlCompany}</p>
      `,
    });

    /* USER MAIL */
    await transporter.sendMail({
      from: `"Exim Trade Data" <contact@eximtradedata.com>`,
      to: safe.email,
      subject: "Your removal request has been received",
      html: `
        <p>Hello ${safe.name},</p>
        <p>We have received your company profile removal request.</p>
        <p>Our compliance team will review it and respond within 24 hours.</p>
        <br/>
        <p>Regards,<br/>Exim Trade Data</p>
      `,
    });

    return NextResponse.json({ message: "Request submitted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}