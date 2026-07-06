import nodemailer from "nodemailer";

/* =========================
   GET LOCATION FROM IP
========================= */
async function getLocationFromIP(ip) {
  try {
    if (
      !ip ||
      ip === "unknown" ||
      ip === "::1" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.") ||
      ip.startsWith("172.")
    ) {
      return null;
    }

    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const data = await response.json();

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
    console.error("IP lookup failed:", error);
    return null;
  }
}

export async function POST(req) {
  try {
    // Get client IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Get location from IP
    const location = await getLocationFromIP(ip);

    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "ubig ldfm qgqk rwkq",
      },
    });

    /* COMPANY */
    await transporter.sendMail({
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "⚡ Instant Assistance Enquiry",
      html: `
        <h2>New Instant Assistance Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Message:</b><br/>${message}</p>

        <hr/>

        <h3>Visitor Information</h3>

        <p><b>IP Address:</b> ${ip}</p>

        <p>
          <b>Location:</b>
          ${
            location
              ? `${location.city}, ${location.region}, ${location.country}`
              : "Unavailable"
          }
        </p>

        ${
          location
            ? `
              <p><b>Postal Code:</b> ${location.postal}</p>
              <p><b>Latitude:</b> ${location.latitude}</p>
              <p><b>Longitude:</b> ${location.longitude}</p>
              <p><b>Timezone:</b> ${location.timezone}</p>
              <p><b>ISP:</b> ${location.organization}</p>
            `
            : ""
        }

        <p>
          <b>User Agent:</b><br/>
          ${req.headers.get("user-agent") || "Unknown"}
        </p>
      `,
    });

    /* USER */
    await transporter.sendMail({
      from: "contact@eximtradedata.com",
      to: email,
      subject: "We received your enquiry – Exim Trade Data",
      html: `
        <h3>Hi ${name}, 👋</h3>
        <p>
          Thanks for reaching out to <strong>Exim Trade Data</strong>.
          Our team will get back to you shortly.
        </p>
        <p>
          Regards,<br/>
          <strong>Exim Trade Data Team</strong>
        </p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}