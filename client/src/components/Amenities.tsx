import { Wifi, Coffee, Wind, PawPrint, Utensils, Car, Bath, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Free Wi-Fi",
      description: "Stay connected with high-speed internet throughout your stay"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Breakfast Included",
      description: "Start your day with delicious homemade breakfast using local ingredients"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Garden Seating",
      description: "Relax in our beautiful garden with comfortable seating areas"
    },
    {
      icon: <PawPrint className="h-8 w-8" />,
      title: "Pet Friendly",
      description: "Your furry friends are welcome at our homestay"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Home-cooked Meals",
      description: "Enjoy authentic local cuisine prepared with love"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Free Parking",
      description: "Convenient on-site parking for all our guests"
    },
    {
      icon: <Bath className="h-8 w-8" />,
      title: "Hot Water 24/7",
      description: "Hot water available at all times for your comfort"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Local Experiences",
      description: "We help arrange local tours and authentic experiences"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">Amenities & Services</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">Everything you need for a comfortable and memorable stay</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">{amenity.title}</h4>
              <p className="text-gray-700">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
