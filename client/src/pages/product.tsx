import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { sampleProducts } from "@shared/schema";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useStore } from "@/lib/store";
import { ShoppingBag, Star } from "lucide-react";

export default function Product() {
  const [, params] = useRoute("/product/:id");
  const product = sampleProducts.find((p) => p.id === Number(params?.id));
  const addToCart = useStore((state) => state.addToCart);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          <div className="relative">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 right-4 bg-[#DAA520] px-4 py-2 rounded-full"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Premium</span>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-[#F5DEB3] text-4xl md:text-5xl font-playfair mb-4"
                >
                  {product.name}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-[#FFB6C1] text-3xl mb-8"
                >
                  ${product.price}
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert max-w-none"
              >
                <div className="mb-8">
                  <h3 className="text-[#DAA520] text-xl mb-3">Description</h3>
                  <p className="text-[#F5DEB3] opacity-90 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-black/20 p-6 rounded-lg">
                    <h3 className="text-[#DAA520] text-xl mb-3">Ingredients</h3>
                    <p className="text-[#F5DEB3] opacity-90">{product.ingredients}</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg">
                    <h3 className="text-[#DAA520] text-xl mb-3">Serving Details</h3>
                    <p className="text-[#F5DEB3] opacity-90">{product.servingSize}</p>
                  </div>
                </div>

                <div className="bg-black/20 p-6 rounded-lg mb-8">
                  <h3 className="text-[#DAA520] text-xl mb-3">Luxury Packaging</h3>
                  <p className="text-[#F5DEB3] opacity-90">{product.packaging}</p>
                </div>

                <AnimatedButton
                  onClick={() => addToCart(product)}
                  className="w-full py-4 text-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}