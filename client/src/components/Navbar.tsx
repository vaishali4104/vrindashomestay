import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <span className={`font-bold text-2xl ${isScrolled ? "text-forest-700" : "text-white"}`}>
                Vrindas Home Stay
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#about"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              About
            </a>
            <a
              href="#amenities"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              Amenities
            </a>
            <a
              href="#gallery"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              Testimonials
            </a>
            <a
              href="#booking"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              Book
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-forest-600" : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-forest-700 hover:bg-forest-800 text-white font-medium"
            >
              <a href="#booking">Book Your Stay</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#amenities"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#gallery"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#booking"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-800 hover:text-forest-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild className="bg-forest-700 hover:bg-forest-800 text-white w-full mt-2">
                <a href="#booking" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Your Stay
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
