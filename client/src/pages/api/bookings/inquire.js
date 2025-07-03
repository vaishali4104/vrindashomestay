// import type { Request, Response } from 'express';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function submitBooking(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:5000/api/bookings/inquire", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return res.json();
    });
}
