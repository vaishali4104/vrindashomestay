import { 
  users, type User, type InsertUser,
  bookingAvailability, type BookingAvailability, type InsertBookingAvailability,
  bookingInquiries, type BookingInquiry, type InsertBookingInquiry
} from "@shared/schema";

// Define storage interface
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking availability operations
  getAvailabilityForDateRange(startDate: Date, endDate: Date): Promise<BookingAvailability[]>;
  setAvailabilityForDate(date: Date, isAvailable: boolean): Promise<BookingAvailability>;
  
  // Booking inquiry operations
  createBookingInquiry(inquiry: InsertBookingInquiry): Promise<BookingInquiry>;
  getAllBookingInquiries(): Promise<BookingInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookingAvailability: Map<string, BookingAvailability>;
  private bookingInquiries: Map<number, BookingInquiry>;
  currentUserId: number;
  currentBookingAvailabilityId: number;
  currentBookingInquiryId: number;

  constructor() {
    this.users = new Map();
    this.bookingAvailability = new Map();
    this.bookingInquiries = new Map();
    this.currentUserId = 1;
    this.currentBookingAvailabilityId = 1;
    this.currentBookingInquiryId = 1;
    
    // Initialize with some availability data for the next 60 days
    const today = new Date();
    for (let i = 0; i < 60; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      this.setAvailabilityForDate(date, true);
    }
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Booking availability operations
  async getAvailabilityForDateRange(startDate: Date, endDate: Date): Promise<BookingAvailability[]> {
    const result: BookingAvailability[] = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Normalize dates to exclude time
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    // Loop through dates in range
    const currentDate = new Date(start);
    while (currentDate <= end) {
      const dateString = currentDate.toISOString().split('T')[0];
      
      // Check if we have availability info for this date
      let availability = this.bookingAvailability.get(dateString);
      
      // If no data exists yet, create default (available)
      if (!availability) {
        availability = await this.setAvailabilityForDate(new Date(currentDate), true);
      }
      
      result.push(availability);
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return result;
  }

  async setAvailabilityForDate(date: Date, isAvailable: boolean): Promise<BookingAvailability> {
    // Normalize date to exclude time
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    
    const dateString = normalizedDate.toISOString().split('T')[0];
    
    // Check if we already have an entry for this date
    let availability = this.bookingAvailability.get(dateString);
    
    if (availability) {
      // Update existing entry
      availability.isAvailable = isAvailable;
    } else {
      // Create new entry
      const id = this.currentBookingAvailabilityId++;
      availability = {
        id,
        date: normalizedDate,
        isAvailable
      };
    }
    
    this.bookingAvailability.set(dateString, availability);
    return availability;
  }

  // Booking inquiry operations
  async createBookingInquiry(insertInquiry: InsertBookingInquiry): Promise<BookingInquiry> {
    const id = this.currentBookingInquiryId++;
    const inquiry: BookingInquiry = { ...insertInquiry, id };
    this.bookingInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllBookingInquiries(): Promise<BookingInquiry[]> {
    return Array.from(this.bookingInquiries.values());
  }
}

export const storage = new MemStorage();
