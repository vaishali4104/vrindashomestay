import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); 

console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);

import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { sendBookingEmail } from "./emailService.js";

dotenv.config();  // ✅ load env only once

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../dist/public")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/public", "index.html"))
);

app.post("/api/bookings/inquire", async (req, res) => {
  console.log("Payload from client:", req.body);
  try {
    await sendBookingEmail(req.body);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", JSON.stringify(error, null, 2));
    res.status(500).json({ message: "Failed to send email.", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
