import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Our stay at Vrindas was magical. The peaceful surroundings, home-cooked meals, and warm hospitality made us feel at home. We will definitely return!",
      author: "Sarah Johnson",
      location: "New York, USA",
      rating: 5
    },
    {
      content: "The perfect getaway from the city noise. The rooms are clean and comfortable, the food is delicious, and the hosts make you feel like part of their family.",
      author: "Miguel Torres",
      location: "Barcelona, Spain",
      rating: 5
    },
    {
      content: "We spent a week at Vrindas and wished we could stay longer. The natural surroundings are breathtaking, and the homestay offers all the modern comforts you need.",
      author: "Priya Sharma",
      location: "Mumbai, India",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">Guest Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">What our guests have to say about their experience</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
