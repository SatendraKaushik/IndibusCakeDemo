import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { sampleProducts } from "@shared/schema";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useStore } from "@/lib/store";

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
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[#F5DEB3] text-4xl font-playfair mb-4"
            >
              {product.name}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[#FFB6C1] text-2xl mb-6"
            >
              ${product.price}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-[#DAA520] mb-2">Description</h3>
                <p className="text-[#F5DEB3] opacity-80">{product.description}</p>
              </div>
              <div>
                <h3 className="text-[#DAA520] mb-2">Ingredients</h3>
                <p className="text-[#F5DEB3] opacity-80">{product.ingredients}</p>
              </div>
              <div>
                <h3 className="text-[#DAA520] mb-2">Serving Details</h3>
                <p className="text-[#F5DEB3] opacity-80">{product.servingSize}</p>
              </div>
              <div>
                <h3 className="text-[#DAA520] mb-2">Packaging</h3>
                <p className="text-[#F5DEB3] opacity-80">{product.packaging}</p>
              </div>
              <AnimatedButton
                onClick={() => addToCart(product)}
                className="w-full mt-8"
              >
                Add to Cart
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
