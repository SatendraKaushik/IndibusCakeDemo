import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./sheet";
import { useStore } from "@/lib/store";
import { AnimatedButton } from "./animated-button";
import { motion } from "framer-motion";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const total = cart.reduce((sum: number, item) => sum + Number(item.product.price) * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="bg-[#1B1B1B] border-l border-[#DAA520]">
        <SheetHeader>
          <SheetTitle className="text-[#F5DEB3] font-playfair">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          {cart.map((item) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-[#F5DEB3]">{item.product.name}</h4>
                <p className="text-[#FFB6C1]">${item.product.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="text-[#DAA520]"
                    onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-[#F5DEB3]">{item.quantity}</span>
                  <button
                    className="text-[#DAA520]"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-[#FFB6C1] hover:text-[#DAA520]"
              >
                Remove
              </button>
            </motion.div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="mt-8">
            <p className="text-[#F5DEB3] text-xl mb-4">Total: ${total.toFixed(2)}</p>
            <AnimatedButton className="w-full">Checkout</AnimatedButton>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};