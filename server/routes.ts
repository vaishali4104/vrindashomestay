import { sendBookingEmail } from './emailService'; 
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";

const router = express.Router();

router.post('/api/booking', async (req, res) => {
  try {
    const bookingData = req.body;
    await sendBookingEmail(bookingData);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

export default router;
