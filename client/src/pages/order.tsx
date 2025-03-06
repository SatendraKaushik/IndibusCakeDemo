import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";
import { Product } from "@shared/schema";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Calendar as CalendarIcon, Clock, Gift, MessageSquare } from "lucide-react";

interface OrderProps {
  product: Product;
}

export default function Order() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [orderDetails, setOrderDetails] = useState({
    size: "regular",
    servings: "8-10",
    message: "",
    specialRequests: "",
  });
  const addToCart = useStore((state) => state.addToCart);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    // Add to cart with customizations
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12"
        >
          {/* Order Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#F5DEB3] text-3xl font-playfair mb-6">Customize Your Order</h2>
              <p className="text-[#F5DEB3] opacity-80">
                Personalize your cake with our luxury customization options
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#F5DEB3] block">Size</label>
                  <select
                    value={orderDetails.size}
                    onChange={(e) => setOrderDetails({ ...orderDetails, size: e.target.value })}
                    className="w-full bg-black/20 border border-[#DAA520] rounded-md p-2 text-[#F5DEB3]"
                  >
                    <option value="small">Small (6")</option>
                    <option value="regular">Regular (8")</option>
                    <option value="large">Large (10")</option>
                    <option value="grand">Grand (12")</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[#F5DEB3] block">Servings</label>
                  <select
                    value={orderDetails.servings}
                    onChange={(e) => setOrderDetails({ ...orderDetails, servings: e.target.value })}
                    className="w-full bg-black/20 border border-[#DAA520] rounded-md p-2 text-[#F5DEB3]"
                  >
                    <option value="6-8">6-8 Persons</option>
                    <option value="8-10">8-10 Persons</option>
                    <option value="10-12">10-12 Persons</option>
                    <option value="12-15">12-15 Persons</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#F5DEB3] block">Cake Message</label>
                <Input
                  value={orderDetails.message}
                  onChange={(e) => setOrderDetails({ ...orderDetails, message: e.target.value })}
                  placeholder="Happy Birthday Sarah!"
                  className="bg-black/20 border-[#DAA520] text-[#F5DEB3]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#F5DEB3] block">Special Requests</label>
                <textarea
                  value={orderDetails.specialRequests}
                  onChange={(e) => setOrderDetails({ ...orderDetails, specialRequests: e.target.value })}
                  placeholder="Any dietary requirements or special instructions..."
                  className="w-full h-32 bg-black/20 border border-[#DAA520] rounded-md p-3 text-[#F5DEB3]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#F5DEB3] block">Preferred Delivery Date</label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="bg-black/20 border border-[#DAA520] rounded-md p-3"
                />
              </div>

              <AnimatedButton type="submit" className="w-full mt-8">
                Add to Cart
              </AnimatedButton>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-black/20 p-8 rounded-lg border border-[#DAA520]/20">
            <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-6">Order Summary</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Gift className="w-6 h-6 text-[#DAA520]" />
                <div>
                  <h4 className="text-[#F5DEB3] font-playfair">Premium Packaging</h4>
                  <p className="text-[#F5DEB3] opacity-80">
                    Elegant gift box with gold accents and ribbon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#DAA520]" />
                <div>
                  <h4 className="text-[#F5DEB3] font-playfair">Production Time</h4>
                  <p className="text-[#F5DEB3] opacity-80">
                    48-72 hours for customized orders
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-[#DAA520]" />
                <div>
                  <h4 className="text-[#F5DEB3] font-playfair">Concierge Service</h4>
                  <p className="text-[#F5DEB3] opacity-80">
                    Dedicated support for your special order
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#DAA520]/20">
                <div className="flex justify-between mb-4">
                  <span className="text-[#F5DEB3]">Base Price</span>
                  <span className="text-[#F5DEB3]">$89.99</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-[#F5DEB3]">Customization</span>
                  <span className="text-[#F5DEB3]">$20.00</span>
                </div>
                <div className="flex justify-between text-xl font-playfair">
                  <span className="text-[#F5DEB3]">Total</span>
                  <span className="text-[#DAA520]">$109.99</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
