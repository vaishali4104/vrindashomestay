import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">About Vrindas Home Stay</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">A tranquil sanctuary where nature and comfort blend seamlessly</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Vrindas Home Stay exterior" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Vrindas Home Stay began as a family home that we decided to open to travelers seeking peace and connection with nature. Nestled in the heart of lush greenery, our homestay offers an authentic experience with the comfort of modern amenities.
            </p>
            <p className="text-gray-700 mb-6">
              Our name "Vrindas" comes from the ancient Sanskrit word for "cluster of tulsi plants," symbolizing purification and harmony - the very essence of the experience we aim to provide our guests.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600">Sustainable practices</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Family-Owned</h4>
                  <p className="text-sm text-gray-600">Personal care & attention</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Local Cuisine</h4>
                  <p className="text-sm text-gray-600">Farm-to-table dining</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Peaceful Location</h4>
                  <p className="text-sm text-gray-600">Surrounded by nature</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
