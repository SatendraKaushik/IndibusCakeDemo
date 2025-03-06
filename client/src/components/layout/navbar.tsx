import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import { CartDrawer } from "../ui/cart-drawer";
import { useStore } from "@/lib/store";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useStore((state: { cart: any[] }) => state.cart);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1B] border-b border-[#DAA520]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-[#F5DEB3] text-2xl font-playfair cursor-pointer"
          >
            Luxury Confections
          </motion.h1>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/category/signature">
            <span className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
              Signature
            </span>
          </Link>
          <Link href="/category/seasonal">
            <span className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
              Seasonal
            </span>
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-[#F5DEB3] hover:text-[#DAA520] transition-colors"
          >
            <ShoppingBag />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FFB6C1] text-[#1B1B1B] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};