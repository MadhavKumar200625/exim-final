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
      requirement,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass: "ubig ldfm qgqk rwkq",   // app password from Gmail
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
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}