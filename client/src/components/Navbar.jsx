import { useState, useEffect } from "react";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (<header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <HomeIcon className="text-primary h-6 w-6"/>
          <span className="font-heading font-bold text-xl text-primary">Vrindas Home Stay</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-all">About</a>
          <a href="#amenities" className="text-gray-700 hover:text-primary font-medium transition-all">Amenities</a>
          <a href="#gallery" className="text-gray-700 hover:text-primary font-medium transition-all">Gallery</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-all">Testimonials</a>
          <a href="#attractions" className="text-gray-700 hover:text-primary font-medium transition-all">Attractions</a>
          <a href="#booking" className="text-gray-700 hover:text-primary font-medium transition-all">Contact</a>
          <Button className="bg-primary text-white hover:bg-primary/90" asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </Button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (<div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#about" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>About</a>
            <a href="#amenities" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>Amenities</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>Testimonials</a>
            <a href="#attractions" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>Attractions</a>
            <a href="#booking" className="text-gray-700 hover:text-primary font-medium py-2 transition-all" onClick={closeMenu}>Contact</a>
            <Button className="bg-primary text-white w-full hover:bg-primary/90" asChild>
              <a href="#booking" onClick={closeMenu}>Book Now</a>
            </Button>
          </div>
        </div>)}
    </header>);
}
