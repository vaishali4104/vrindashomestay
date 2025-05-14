import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Check availability for a date range
  app.get("/api/availability", async (req, res) => {
    try {
      const { startDate, endDate } = req.query;
      
      if (!startDate || !endDate) {
        return res.status(400).json({ message: "Both startDate and endDate are required" });
      }
      
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.status(400).json({ message: "Invalid date format" });
      }
      
      const availability = await storage.getAvailabilityForDateRange(start, end);
      
      return res.json(availability);
    } catch (error) {
      console.error("Error fetching availability:", error);
      return res.status(500).json({ message: "Error fetching availability" });
    }
  });

  // Submit a booking inquiry
  app.post("/api/booking-inquiry", async (req, res) => {
    try {
      const result = insertBookingInquirySchema.safeParse(req.body);
      
      if (!result.success) {
        const errorMessage = fromZodError(result.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      const inquiry = await storage.createBookingInquiry(result.data);
      
      return res.status(201).json(inquiry);
    } catch (error) {
      console.error("Error creating booking inquiry:", error);
      return res.status(500).json({ message: "Error submitting booking inquiry" });
    }
  });
  
  // Set availability for a specific date (could be protected in a real app)
  app.post("/api/availability", async (req, res) => {
    try {
      const { date, isAvailable } = req.body;
      
      if (!date || typeof isAvailable !== 'boolean') {
        return res.status(400).json({ message: "Date and isAvailable are required" });
      }
      
      const dateObj = new Date(date);
      
      if (isNaN(dateObj.getTime())) {
        return res.status(400).json({ message: "Invalid date format" });
      }
      
      const availability = await storage.setAvailabilityForDate(dateObj, isAvailable);
      
      return res.status(201).json(availability);
    } catch (error) {
      console.error("Error setting availability:", error);
      return res.status(500).json({ message: "Error setting availability" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
