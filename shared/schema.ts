import { pgTable, text, serial, integer, boolean, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Booking availability check
export const bookingAvailability = pgTable("booking_availability", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  isAvailable: boolean("is_available").notNull().default(true),
});

export const insertBookingAvailabilitySchema = createInsertSchema(bookingAvailability).pick({
  date: true,
  isAvailable: true,
});

export type InsertBookingAvailability = z.infer<typeof insertBookingAvailabilitySchema>;
export type BookingAvailability = typeof bookingAvailability.$inferSelect;

// Booking inquiries
export const bookingInquiries = pgTable("booking_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  checkInDate: date("check_in_date").notNull(),
  checkOutDate: date("check_out_date").notNull(),
  guests: integer("guests").notNull(),
  message: text("message"),
});

export const insertBookingInquirySchema = createInsertSchema(bookingInquiries).pick({
  name: true,
  email: true,
  phone: true,
  checkInDate: true,
  checkOutDate: true,
  guests: true,
  message: true,
});

export type InsertBookingInquiry = z.infer<typeof insertBookingInquirySchema>;
export type BookingInquiry = typeof bookingInquiries.$inferSelect;
