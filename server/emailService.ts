// // import nodemailer from "nodemailer";
// // import dotenv from "dotenv";
// import * as nodemailer from "nodemailer";
// import * as dotenv from "dotenv";
// import * as express from "express";
// import * as cors from "cors";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// export const sendBookingEmail = async (bookingData: any) => {
//   const { name, email, phone, checkIn, checkOut, guests, message } = bookingData;

//   const mailOptions = {
//     from: `"Booking Form" <${process.env.MAIL_USER}>`,
//     to: process.env.MAIL_USER,
//     subject: "New Booking Inquiry",
//     html: `
//       <h2>Booking Details</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Check-In:</strong> ${checkIn}</p>
//       <p><strong>Check-Out:</strong> ${checkOut}</p>
//       <p><strong>Guests:</strong> ${guests}</p>
//       <p><strong>Message:</strong> ${message || "N/A"}</p>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// };


// import * as nodemailer from "nodemailer";
// import * as dotenv from "dotenv";
// import * as express from "express";
// import * as cors from "cors";
// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });
// export const sendBookingEmail = async (bookingData: any) => {
//   const { name, email, phone, checkIn, checkOut, guests, message } = bookingData;

//   const mailOptions = {
//     from: `"Booking Form" <${process.env.MAIL_USER}>`,
//     to: process.env.MAIL_USER,
//     subject: "New Booking Inquiry",
//     html: `
//       <h2>Booking Details</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Check-In:</strong> ${checkIn}</p>
//       <p><strong>Check-Out:</strong> ${checkOut}</p>
//       <p><strong>Guests:</strong> ${guests}</p>
//       <p><strong>Message:</strong> ${message || "N/A"}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error("Error sending mail:", error);
//     throw error;
//   }

// };
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);
console.log("🔍 ENV check:", {
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS
});

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendBookingEmail(bookingData: any) {
  const { name, email, phone, checkIn, checkOut, guests, message } = bookingData;

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

  await transporter.sendMail(mailOptions);
}
