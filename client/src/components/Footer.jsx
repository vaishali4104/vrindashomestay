import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer() {
    return (<footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span className="font-heading font-bold text-xl">Vrindas Home Stay</span>
            </div>
            <p className="text-white/80 mb-6">A peaceful retreat surrounded by nature, offering comfort and authentic experiences.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Facebook className="h-5 w-5"/>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Instagram className="h-5 w-5"/>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all">
                <Twitter className="h-5 w-5"/>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#about" className="hover:text-white transition-all">About Us</a></li>
              <li><a href="#amenities" className="hover:text-white transition-all">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-all">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-all">Testimonials</a></li>
              <li><a href="#attractions" className="hover:text-white transition-all">Nearby Attractions</a></li>
              <li><a href="#booking" className="hover:text-white transition-all">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1"/>
                <span>123 Serenity Road, Nature Valley, Greenland 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3"/>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3"/>
                <span>info@vrindashomestay.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Location</h4>
            <div className="h-48 bg-primary-foreground/10 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCdGIk4gNzTCsDAzJzQ2Ilc!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" title="Vrindas Home Stay Location Map"></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-sm text-white/60 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Vrindas Home Stay. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>);
}
