import { useState } from "react";
import { Link } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartDrawer } from "../ui/cart-drawer";
import { useStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cart = useStore((state: { cart: any[] }) => state.cart);

  const navLinks = [
    { href: "/category/signature", label: "Signature" },
    { href: "/category/seasonal", label: "Seasonal" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" }
  ];

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F5DEB3]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1B1B1B] border-b border-[#DAA520]"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="block py-2 text-[#F5DEB3] hover:text-[#DAA520] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <button
                onClick={() => {
                  setCartOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-left text-[#F5DEB3] hover:text-[#DAA520] transition-colors"
              >
                Cart ({cart.length})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};