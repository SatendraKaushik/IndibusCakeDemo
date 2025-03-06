import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isabella Montgomery",
    role: "Food Critic, Luxury Dining Magazine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The finest confectionery experience in the city. Their Royal Dark Chocolate Truffle Cake is simply divine.",
    rating: 5
  },
  {
    id: 2,
    name: "Alexander Chen",
    role: "Celebrity Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "As a chef, I appreciate their dedication to sourcing the finest ingredients. The attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Wedding Planner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "My clients are always impressed by the elegant presentation and exquisite taste of their creations.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1B1B1B] p-8 rounded-lg border border-[#DAA520]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#F5DEB3] font-playfair">{testimonial.name}</h4>
                  <p className="text-[#DAA520] text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#DAA520]" fill="#DAA520" />
                ))}
              </div>
              <p className="text-[#F5DEB3] opacity-80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
