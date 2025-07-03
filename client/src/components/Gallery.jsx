import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Homestay exterior with forest backdrop"
        },
        {
            src: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Mountain landscape with lake"
        },
        {
            src: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Cozy room interior with fireplace"
        },
        {
            src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Scenic nature landscape"
        },
        {
            src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Charming homestay exterior"
        },
        {
            src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Comfortable bedroom interior"
        },
        {
            src: "https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Sunset over mountains"
        },
        {
            src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            alt: "Modern bathroom amenities"
        }
    ];
    const openLightbox = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };
    const closeLightbox = () => {
        setIsOpen(false);
    };
    const goToPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const goToNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (<section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">Gallery</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">Experience the beauty and comfort of Vrindas Home Stay</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"/>
            </motion.div>))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <button onClick={closeLightbox} className="absolute top-4 right-4 bg-black/50 rounded-full p-1 text-white z-10 hover:bg-black/70 transition-colors">
              <X className="h-6 w-6"/>
            </button>
            
            <img src={images[currentImage].src} alt={images[currentImage].alt} className="w-full h-auto max-h-[80vh] object-contain"/>
            
            <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors">
              <ChevronLeft className="h-6 w-6"/>
            </button>
            
            <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors">
              <ChevronRight className="h-6 w-6"/>
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>);
}
