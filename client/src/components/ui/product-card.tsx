import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./card";
import { Product } from "@shared/schema";
import { AnimatedButton } from "./animated-button";
import { useStore } from "@/lib/store";
import { Link } from "wouter";
import { ShoppingBag, Wand2 } from "lucide-react";

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
            <p className="text-[#F5DEB3] opacity-80 text-sm mb-4">{product.description}</p>
            <div className="flex gap-2">
              <AnimatedButton
                onClick={() => addToCart(product)}
                className="flex-1 flex items-center justify-center gap-2"
                variant="outline"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </AnimatedButton>
              <Link href={`/order/${product.id}`}>
                <AnimatedButton className="flex-1 flex items-center justify-center gap-2">
                  <Wand2 className="w-4 h-4" />
                  Customize
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};