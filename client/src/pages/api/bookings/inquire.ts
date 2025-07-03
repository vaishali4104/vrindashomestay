// import type { Request, Response } from 'express';

// import { sendBookingEmail } from '../../../../../server/emailService';

// export default async function handler(req: Request, res: Response) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const bookingData = req.body;
//     await sendBookingEmail(bookingData);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error: any) {
//     console.error('Email send error:', error);
//     res.status(500).json({ message: 'Failed to send email', error: error.message });
//   }
// }
export async function submitBooking(data: any) {
  const res = await fetch("http://localhost:5000/api/bookings/inquire", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
