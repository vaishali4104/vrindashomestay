import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We're here to answer any questions you might have
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4">
                  <MapPin className="text-forest-700 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">123 Serenity Road, Green Valley</p>
                  <p className="text-gray-600">Peaceful Hills, 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4">
                  <Phone className="text-forest-700 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4">
                  <Mail className="text-forest-700 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@vrindashomestay.com</p>
                  <p className="text-gray-600">bookings@vrindashomestay.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4">
                  <Clock className="text-forest-700 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600">Check-in: 2:00 PM - 8:00 PM</p>
                  <p className="text-gray-600">Check-out: By 11:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456789!2d78.12345678901234!3d27.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzI0LjUiTiA3OMKwMDcnMjQuNSJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vrindas Home Stay Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
        
        {/* Direct Booking CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-forest-700 text-white rounded-xl shadow-lg p-8 mt-12 max-w-5xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready for Your Peaceful Getaway?</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Book directly with us for the best rates and personalized service. We're looking forward to hosting you!
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-forest-700 hover:bg-gray-100">
            <a href="#booking">Book Your Stay Now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
