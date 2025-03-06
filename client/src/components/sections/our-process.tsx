import { motion } from "framer-motion";
import { Sparkles, Leaf, Award, Package } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "Ingredient Selection",
    description: "We source the finest ingredients from renowned producers worldwide",
    icon: Leaf,
    color: "#DAA520"
  },
  {
    id: 2,
    title: "Artisanal Crafting",
    description: "Each creation is handcrafted by our master pastry chefs",
    icon: Sparkles,
    color: "#FFB6C1"
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Rigorous testing ensures each piece meets our premium standards",
    icon: Award,
    color: "#DAA520"
  },
  {
    id: 4,
    title: "Luxury Packaging",
    description: "Elegant presentation in our signature gift boxes",
    icon: Package,
    color: "#FFB6C1"
  }
];

export const OurProcess = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
        >
          Our Artisanal Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-black/20 rounded-full flex items-center justify-center">
                  <process.icon className="w-8 h-8" style={{ color: process.color }} />
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-[#DAA520]/20 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />
              </div>
              <h3 className="text-[#DAA520] text-xl font-playfair mb-4">{process.title}</h3>
              <p className="text-[#F5DEB3] opacity-80">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
