import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559329007-40df8a9345d8')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[#F5DEB3] text-4xl font-playfair mb-6">
            Join Our Exclusive Circle
          </h2>
          <p className="text-[#F5DEB3] opacity-80 mb-8">
            Subscribe to receive updates on new collections, special events, and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/50 border-[#DAA520] text-[#F5DEB3] placeholder:text-[#F5DEB3]/50"
              required
            />
            <AnimatedButton type="submit">
              Subscribe
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
