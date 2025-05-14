import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingInquirySchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for booking inquiries
  app.post("/api/bookings/inquire", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertBookingInquirySchema.parse(req.body);
      
      // Store the booking inquiry
      const bookingInquiry = await storage.createBookingInquiry(validatedData);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: "Booking inquiry received successfully",
        data: bookingInquiry
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        success: false,
        message: "Failed to process booking inquiry"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
