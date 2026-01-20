import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      company,
      country,
      message,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass: "fmdn jlsa ifhi onuz",   // app password from Gmail
      },
    });

    /* ================================
       📩 COMPANY EMAIL
    ================================= */
    /* ================================
   📩 COMPANY EMAIL
================================= */
const companyMailOptions = {
  from: "contact@eximtradedata.com",
  to: "enquiry@eximtradedata.com",
  subject: "📅 New Demo Request – Schedule a Live Demo",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>📅 New Demo Request Received</h2>
      <p>A user has requested to schedule a live demo.</p>
      <hr/>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Mobile:</strong> ${phone || "-"}</p>
      <p><strong>Country:</strong> ${country || "-"}</p>
      <p><strong>Demo Expectations:</strong><br/>${message || "-"}</p>
    </div>
  `,
};

    /* ================================
       📧 USER EMAIL
    ================================= */
    /* ================================
   📧 USER EMAIL
================================= */
const userMailOptions = {
  from: "contact@eximtradedata.com",
  to: email,
  subject: "Your Live Demo Request – Exim Trade Data",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Hi ${name}, 👋</h2>
      <p>
        Thank you for scheduling a <strong>live demo</strong> with 
        <strong>Exim Trade Data</strong>.
      </p>
      <p>
        Our data expert will review your requirements and reach out to you
        shortly to schedule the demo at a convenient time.
      </p>
      <p>
        We look forward to showing you how our verified import-export data
        can help grow your business.
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
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}