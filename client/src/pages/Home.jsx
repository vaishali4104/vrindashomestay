import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Attractions from '@/components/Attractions';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
const Home = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleAnchorClick = (e) => {
            var _a, _b;
            const target = e.target;
            if (target.tagName === 'A' && ((_a = target.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.startsWith('#'))) {
                e.preventDefault();
                const id = (_b = target.getAttribute('href')) === null || _b === void 0 ? void 0 : _b.substring(1);
                const element = document.getElementById(id || '');
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);
    return (<div className="min-h-screen bg-secondary text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Attractions />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>);
};
export default Home;
