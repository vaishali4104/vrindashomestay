import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function Hero() {
    return (<section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-shadow-lg">Experience Tranquility <br />at Vrindas Home Stay</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow">Nestled in nature's embrace, our homestay offers a peaceful retreat from the hustle and bustle of everyday life</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" asChild>
              <a href="#booking">Book Your Stay</a>
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-6 text-lg" variant="outline" asChild>
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary to-transparent"></div>
    </section>);
}
