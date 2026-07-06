import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
       CLIENT IP & LOCATION
    ========================= */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const location = await getLocationFromIP(ip);

    const {
      fullName,
      email,
      CompanyName,
      CompanyType,
      Designation,
      ddlcountry,
      txtwebsite,
      txtphone,
      Timezone,
      AppointmentDate,
      AppointmentTime,
      Message,
      Plan,
    } = await req.json();

    // ✅ Minimal required validation
    if (
      !fullName ||
      !email ||
      !CompanyName ||
      !txtphone ||
      !AppointmentDate ||
      !AppointmentTime ||
      !Timezone
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "ubig ldfm qgqk rwkq",
      },
    });

    // 📩 Email to company
    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "New Appointment Scheduled",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #004aad;">🚀 New Appointment Scheduled</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company Name:</strong> ${CompanyName}</p>
          <p><strong>Company Type:</strong> ${CompanyType || "-"}</p>
          <p><strong>Designation:</strong> ${Designation || "-"}</p>
          <p><strong>Country:</strong> ${ddlcountry || "-"}</p>
          <p><strong>Website:</strong> ${txtwebsite || "-"}</p>
          <p><strong>Phone:</strong> ${txtphone}</p>
          <p><strong>Timezone:</strong> ${Timezone}</p>
          <p><strong>Appointment Date:</strong> ${AppointmentDate}</p>
          <p><strong>Appointment Time:</strong> ${AppointmentTime}</p>
          <p><strong>Message:</strong> ${Message || "-"}</p>
          <p><strong>Plan:</strong> ${Plan || "-"}</p>

          <hr style="margin: 30px 0;" />

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

          <hr style="margin: 30px 0;" />

          <p style="font-size: 12px; color: #888;">
            This enquiry was submitted from the Exim Trade Data website.
          </p>
        </div>
      `,
    };

    // 📩 Email to user
    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject: "Your Exim Trade Data Appointment Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #004aad;">Hi ${fullName},</h2>

          <p>
            Thank you for scheduling an appointment with
            <strong>Exim Trade Data</strong>.
          </p>

          <p><strong>📍 Location:</strong> Online (meeting link will be shared before the session)</p>
          <p><strong>🗓 Date:</strong> ${AppointmentDate}</p>
          <p><strong>⏰ Time:</strong> ${AppointmentTime} (${Timezone})</p>

          <p>
            We're looking forward to our meeting. If you need to reschedule or
            have any questions, feel free to reply to this email.
          </p>

          <p style="margin-top: 30px;">
            Warm regards,<br />
            <strong>The Exim Trade Data Team</strong>
          </p>

          <img
            src="https://gtdservice.com/images/logo.svg"
            alt="Exim Trade Data Logo"
            style="margin-top: 10px; width: 120px; height: auto;"
          />

          <hr style="margin: 30px 0;" />
          <p style="font-size: 12px; color: #888;">
            This is an automated response.
          </p>
        </div>
      `,
    };

    // ✉️ Send mails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Send Email Error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}