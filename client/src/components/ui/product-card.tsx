import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./card";
import { Product } from "@shared/schema";
import { AnimatedButton } from "./animated-button";
import { useStore } from "@/lib/store";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-[#1B1B1B] border-[#DAA520] overflow-hidden">
        <CardContent className="p-0">
          <Link href={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="p-6">
            <h3 className="text-[#F5DEB3] text-xl font-playfair mb-2">{product.name}</h3>
            <p className="text-[#FFB6C1] mb-4">${product.price}</p>
            <p className="text-[#F5DEB3] opacity-80 text-sm">{product.description}</p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <AnimatedButton
            onClick={() => addToCart(product)}
            className="w-full"
          >
            Add to Cart
          </AnimatedButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
