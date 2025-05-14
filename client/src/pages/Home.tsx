import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import NearbyAttractions from "@/components/NearbyAttractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vrindas Home Stay | Serene Nature Retreat</title>
        <meta name="description" content="Experience serene natural beauty and warm hospitality in our eco-friendly homestay. Book your peaceful retreat today." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Testimonials />
      <NearbyAttractions />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
