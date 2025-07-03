import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

router.post("/api/bookings/inquire", async (req, res) => {
  console.log("📩 Received booking data:", req.body);

  const { name, email, phone, checkIn, checkOut, guests, message } = req.body;

  const mailOptions = {
    from: `"Booking Form" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: "New Booking Inquiry",
    html: `
      <h2>Booking Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-In:</strong> ${checkIn}</p>
      <p><strong>Check-Out:</strong> ${checkOut}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

export default router;
