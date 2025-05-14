import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { addDays, format, isBefore, isAfter, isSameDay } from "date-fns";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  guests: z.string().transform(val => parseInt(val)).refine(val => val > 0 && val <= 8, "Number of guests must be between 1 and 8"),
  message: z.string().optional(),
});

const Booking = () => {
  const { toast } = useToast();
  const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | undefined>(undefined);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | undefined>(undefined);
  const [dateSelectionStep, setDateSelectionStep] = useState<'checkin' | 'checkout'>('checkin');

  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "2",
      message: "",
    },
  });

  // Get availability data for the next 30 days
  const startDate = new Date();
  const endDate = addDays(startDate, 30);
  
  const { data: availabilityData, isLoading: isLoadingAvailability } = useQuery({
    queryKey: ['/api/availability', startDate.toISOString(), endDate.toISOString()],
    queryFn: async () => {
      const url = `/api/availability?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
      const res = await fetch(url, { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to fetch availability');
      return res.json();
    }
  });

  // Submit booking inquiry
  const { mutate: submitBookingInquiry, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      if (!selectedCheckInDate || !selectedCheckOutDate) {
        throw new Error("Please select check-in and check-out dates");
      }

      const inquiryData = {
        ...data,
        guests: parseInt(data.guests),
        checkInDate: format(selectedCheckInDate, 'yyyy-MM-dd'),
        checkOutDate: format(selectedCheckOutDate, 'yyyy-MM-dd'),
      };

      return apiRequest('POST', '/api/booking-inquiry', inquiryData);
    },
    onSuccess: () => {
      toast({
        title: "Booking Inquiry Submitted",
        description: "We'll get back to you soon with availability confirmation.",
      });
      form.reset();
      setSelectedCheckInDate(undefined);
      setSelectedCheckOutDate(undefined);
      setDateSelectionStep('checkin');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit booking inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!selectedCheckInDate || !selectedCheckOutDate) {
      toast({
        title: "Date Selection Required",
        description: "Please select both check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }
    
    submitBookingInquiry(data);
  };

  // Function to determine if a date is unavailable
  const isDateUnavailable = (date: Date) => {
    if (!availabilityData) return false;
    
    const dateString = format(date, 'yyyy-MM-dd');
    const matchingData = availabilityData.find(
      (item: any) => format(new Date(item.date), 'yyyy-MM-dd') === dateString
    );
    
    return matchingData ? !matchingData.isAvailable : false;
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    if (dateSelectionStep === 'checkin') {
      setSelectedCheckInDate(date);
      setDateSelectionStep('checkout');
    } else {
      // Ensure checkout date is after checkin date
      if (selectedCheckInDate && isBefore(date, selectedCheckInDate) && !isSameDay(date, selectedCheckInDate)) {
        toast({
          title: "Invalid Date Selection",
          description: "Check-out date must be after check-in date",
          variant: "destructive",
        });
        return;
      }
      setSelectedCheckOutDate(date);
      setDateSelectionStep('checkin');
    }
  };

  // Custom day rendering for the calendar
  const renderDay = (day: Date) => {
    const isSelected = 
      (selectedCheckInDate && isSameDay(day, selectedCheckInDate)) || 
      (selectedCheckOutDate && isSameDay(day, selectedCheckOutDate));
    
    const isInRange = selectedCheckInDate && selectedCheckOutDate && 
      isAfter(day, selectedCheckInDate) && 
      isBefore(day, selectedCheckOutDate);
    
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center ${
          isSelected 
            ? 'bg-forest-700 text-white rounded-md' 
            : isInRange 
              ? 'bg-forest-100' 
              : ''
        }`}
      >
        {day.getDate()}
        {isDateUnavailable(day) && (
          <div className="absolute inset-0 bg-red-200/60 rounded-md flex items-center justify-center">
            <div className="w-8 h-0.5 bg-red-500 rotate-45"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="booking" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Book Your Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Check availability and make an inquiry for your perfect getaway
          </motion.p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Select Your Dates</h3>
              
              <div className="mb-4 p-4 bg-sky-50 rounded-lg">
                <p className="font-medium text-gray-700 mb-2">
                  {dateSelectionStep === 'checkin' ? 'Select Check-in Date:' : 'Select Check-out Date:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCheckInDate && (
                    <div className="bg-forest-100 px-3 py-1 rounded-full text-sm">
                      Check-in: {format(selectedCheckInDate, 'MMM dd, yyyy')}
                    </div>
                  )}
                  {selectedCheckOutDate && (
                    <div className="bg-forest-100 px-3 py-1 rounded-full text-sm">
                      Check-out: {format(selectedCheckOutDate, 'MMM dd, yyyy')}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6 border rounded-lg p-2 bg-white">
                <Calendar
                  mode="single"
                  selected={dateSelectionStep === 'checkin' ? selectedCheckInDate : selectedCheckOutDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => 
                    isDateUnavailable(date) || 
                    isBefore(date, new Date(new Date().setHours(0, 0, 0, 0)))
                  }
                  components={{
                    day: renderDay
                  }}
                />
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded-sm mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 rounded-sm mr-2"></div>
                  <span>Unavailable</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-forest-100 rounded-sm mr-2"></div>
                  <span>Selected Range</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Your Details</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="8" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requests</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special requirements or requests..." 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-forest-700 hover:bg-forest-800 text-white"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Submit Booking Inquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
