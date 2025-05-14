import { pgTable, text, serial, integer, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Booking inquiry table
export const bookingInquiries = pgTable("booking_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  checkIn: date("check_in").notNull(),
  checkOut: date("check_out").notNull(),
  guests: integer("guests").notNull(),
  message: text("message").notNull().default(''),
  createdAt: timestamp("created_at").defaultNow(),
});

// Schema for booking inquiry
export const insertBookingInquirySchema = createInsertSchema(bookingInquiries, {
  guests: z.number().min(1).max(10),
  message: z.string().optional().default(''),
}).omit({ id: true, createdAt: true });

export type InsertBookingInquiry = z.infer<typeof insertBookingInquirySchema>;
export type BookingInquiry = typeof bookingInquiries.$inferSelect;
