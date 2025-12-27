import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, mobile, message, country } = await req.json();

    if (!name || !email || !company || !mobile || !message || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass: "fmdn jlsa ifhi onuz",   // app password from Gmail
      },
    });

    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "Enquiry Exim Service",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🚀 New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    };

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
          <p>Warm regards,<br/><strong>Exim Trade Data Team</strong></p>
        </div>
      `,
    };

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