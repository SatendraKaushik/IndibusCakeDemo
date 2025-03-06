import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { sampleProducts } from "@shared/schema";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <section className="mb-16">
          <h1 className="text-[#F5DEB3] text-4xl md:text-5xl font-playfair text-center mb-8">
            Exquisite Confections
          </h1>
          <p className="text-[#F5DEB3] opacity-80 text-center max-w-2xl mx-auto">
            Discover our handcrafted luxury desserts, made with the finest ingredients
            and presented with unparalleled elegance.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </motion.div>
    </div>
  );
}
