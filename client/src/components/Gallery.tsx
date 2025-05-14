import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { stockPhotos } from "@/lib/constants";
import { X } from "lucide-react";

type GalleryCategory = {
  title: string;
  images: string[];
};

const Gallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>({
    title: "All Photos",
    images: [
      ...stockPhotos.homestayExterior,
      ...stockPhotos.roomInteriors,
      ...stockPhotos.landscapes,
      ...stockPhotos.amenities,
    ],
  });

  const categories: GalleryCategory[] = [
    {
      title: "All Photos",
      images: [
        ...stockPhotos.homestayExterior,
        ...stockPhotos.roomInteriors,
        ...stockPhotos.landscapes,
        ...stockPhotos.amenities,
      ],
    },
    {
      title: "Exterior",
      images: stockPhotos.homestayExterior,
    },
    {
      title: "Rooms",
      images: stockPhotos.roomInteriors,
    },
    {
      title: "Landscapes",
      images: stockPhotos.landscapes,
    },
    {
      title: "Amenities",
      images: stockPhotos.amenities,
    },
  ];

  const openImageDialog = (image: string) => {
    const imageIndex = activeCategory.images.findIndex((img) => img === image);
    setSelectedImageIndex(imageIndex);
    setIsDialogOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Photo Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Take a virtual tour of our homestay and surrounding beauty
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory.title === category.title
                  ? "bg-forest-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-700"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeCategory.images.map((image, index) => (
            <motion.div
              key={`${activeCategory.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openImageDialog(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl bg-black/95 border-none">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
          >
            <X size={20} />
          </button>
          <Carousel className="w-full">
            <CarouselContent>
              {activeCategory.images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="relative h-[70vh] w-full">
                    <img
                      src={image}
                      alt={`Gallery large image ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
