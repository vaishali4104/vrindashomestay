import { motion } from "framer-motion";
import { amenities } from "@/lib/constants";
import { 
  Wifi, 
  Leaf, 
  Moon, 
  Utensils, 
  Map, 
  Recycle 
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "wifi":
      return <Wifi size={28} />;
    case "leaf":
      return <Leaf size={28} />;
    case "moon":
      return <Moon size={28} />;
    case "utensils":
      return <Utensils size={28} />;
    case "map":
      return <Map size={28} />;
    case "recycle":
      return <Recycle size={28} />;
    default:
      return <Leaf size={28} />;
  }
};

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Amenities & Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Experience the perfect blend of comfort and nature with our thoughtfully curated amenities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-beige-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 amenity-icon group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="bg-forest-700 text-white rounded-full p-3 mr-4 transition-colors group-hover:bg-forest-800">
                  {getIcon(amenity.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{amenity.name}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
