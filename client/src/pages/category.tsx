import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { sampleProducts } from "@shared/schema";

export default function Category() {
  const [, params] = useRoute("/category/:name");
  const products = sampleProducts.filter(
    (p) => p.category.toLowerCase() === params?.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#F5DEB3] text-4xl font-playfair text-center mb-12"
        >
          {params?.name.charAt(0).toUpperCase() + params?.name.slice(1)} Collection
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
