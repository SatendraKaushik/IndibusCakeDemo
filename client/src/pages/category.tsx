import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { sampleProducts } from "@shared/schema";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Category() {
  const [, params] = useRoute("/category/:name");
  const categoryName = params?.name || "";
  const products = sampleProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  const categoryBackgrounds: Record<string, string> = {
    signature: "https://images.unsplash.com/photo-1547047803-fa4eb4613d82",
    seasonal: "https://images.unsplash.com/photo-1562440499-64c9a111f713"
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[40vh] relative flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${categoryBackgrounds[categoryName.toLowerCase()]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[#F5DEB3] text-5xl font-playfair mb-4"
          >
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Collection
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-[#DAA520] mx-auto"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {products.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#F5DEB3] text-center text-xl mt-8"
          >
            No products found in this category.
          </motion.p>
        )}
      </div>
    </div>
  );
}