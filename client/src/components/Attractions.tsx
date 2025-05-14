import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function Attractions() {
  const attractions = [
    {
      name: "Crystal Clear Lake",
      distance: "2 km",
      timeNeeded: "2-3 hours",
      description: "A pristine lake perfect for swimming and picnics",
      image: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      name: "Hidden Waterfall",
      distance: "5 km",
      timeNeeded: "Half day",
      description: "A magical waterfall tucked away in the forest",
      image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      name: "Ancient Temple",
      distance: "8 km",
      timeNeeded: "2 hours",
      description: "A historical temple with stunning architecture",
      image: "https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      name: "Local Market",
      distance: "3 km",
      timeNeeded: "1-2 hours",
      description: "Experience local culture and shop for handicrafts",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">Nearby Attractions</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">Explore these beautiful locations during your stay with us</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-40 md:h-auto">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">{attraction.name}</h3>
                  <p className="text-gray-700 mb-4">{attraction.description}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Distance: {attraction.distance} from homestay</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Time needed: {attraction.timeNeeded}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
