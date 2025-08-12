// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, address, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, Email and Message are required" });
  }

  try {
    // Configure Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your Gmail App password
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // send to yourself
      subject: `📩 New Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Message: ${message}
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
