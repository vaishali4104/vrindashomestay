import { bookingInquiries, type BookingInquiry, type InsertBookingInquiry } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  createBookingInquiry(inquiry: InsertBookingInquiry): Promise<BookingInquiry>;
  getBookingInquiries(): Promise<BookingInquiry[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private bookings: Map<number, BookingInquiry>;
  private currentBookingId: number;

  constructor() {
    this.bookings = new Map();
    this.currentBookingId = 1;
  }

  async createBookingInquiry(inquiry: InsertBookingInquiry): Promise<BookingInquiry> {
    const id = this.currentBookingId++;
    const now = new Date();
    
    // Convert Date objects to string dates for storage
    const booking: BookingInquiry = {
      ...inquiry,
      id,
      message: inquiry.message || '',
      createdAt: now
    };
    
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookingInquiries(): Promise<BookingInquiry[]> {
    return Array.from(this.bookings.values());
  }
}

// Export storage instance
export const storage = new MemStorage();
