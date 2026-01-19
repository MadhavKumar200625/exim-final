import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "fmdn jlsa ifhi onuz",
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