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

    const data = await req.json();

    const {
      name,
      email,
      phone,
      company,
      country,
      message,
      requirement,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "ubig ldfm qgqk rwkq",
      },
    });

    /* ================================
       📩 COMPANY EMAIL
    ================================= */
    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "🚀 New Enquiry – Unlock Full Data",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🚀 New Enquiry Received</h2>

          <p><strong>Name:</strong> ${name || "-"}</p>
          <p><strong>Email:</strong> ${email || "-"}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Mobile:</strong> ${phone || "-"}</p>
          <p><strong>Country:</strong> ${country || "-"}</p>
          <p><strong>Data Requirement:</strong> ${requirement || "-"}</p>
          <p><strong>Message:</strong><br/>${message || "-"}</p>

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
            ${req.headers.get("user-agent") || "Unknown"}
          </p>
        </div>
      `,
    };

    /* ================================
       📧 USER EMAIL
    ================================= */
    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject: "Thanks for your interest in Exim Trade Data!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hi ${name}, 👋</h2>
          <p>
            Thank you for reaching out to <strong>Exim Trade Data</strong>.
            We’ve received your enquiry and will contact you shortly.
          </p>
          <p>
            If you have any urgent queries, feel free to reply to this email.
          </p>
          <p>
            Warm regards,<br/>
            <strong>Exim Trade Data Team</strong>
          </p>
        </div>
      `,
    };

    /* ================================
       🚀 SEND EMAILS
    ================================= */
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}