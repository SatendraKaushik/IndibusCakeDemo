import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { sampleProducts } from "@shared/schema";
import { Testimonials } from "@/components/sections/testimonials";
import { OurProcess } from "@/components/sections/our-process";
import { Newsletter } from "@/components/sections/newsletter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair mb-6"
          >
            Luxury Confections
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[#F5DEB3] text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8"
          >
            Indulge in artisanal desserts crafted with the finest ingredients
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="/signature-collection"
              className="px-8 py-3 bg-[#DAA520] text-[#1B1B1B] font-semibold rounded hover:bg-[#8B4513] hover:text-[#F5DEB3] transition-colors duration-300"
            >
              Explore Signature Collection
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#F5DEB3] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#F5DEB3] rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Products Section */}
      <section id="featured" className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
          >
            Featured Creations
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {sampleProducts.slice(0, 3).map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcess />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}