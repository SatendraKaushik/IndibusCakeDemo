import { motion } from "framer-motion";
import { Star, Shield, Award } from "lucide-react";
import { ProductCard } from "@/components/ui/product-card";
import { sampleProducts } from "@shared/schema";

const signatureProducts = sampleProducts.filter(p => p.category === "Signature Cakes");

const features = [
  {
    icon: Star,
    title: "Master Craftsmanship",
    description: "Each creation is handcrafted by our award-winning pastry artisans"
  },
  {
    icon: Shield,
    title: "Premium Ingredients",
    description: "Sourced from the world's finest producers and growers"
  },
  {
    icon: Award,
    title: "Excellence Guaranteed",
    description: "Backed by our commitment to unparalleled quality"
  }
];

export default function SignatureCollection() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547047803-fa4eb4613d82')] bg-cover bg-fixed bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair mb-6">
              The Signature Collection
            </h1>
            <p className="text-[#F5DEB3] text-xl opacity-90 mb-8">
              A masterpiece of confectionery artistry, where each creation tells a story of luxury and excellence
            </p>
            <motion.div
              className="w-32 h-1 bg-[#DAA520] mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-[#DAA520] mx-auto mb-6" />
                <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-4">{feature.title}</h3>
                <p className="text-[#F5DEB3] opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {signatureProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8"
                alt="Craftsmanship"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[#F5DEB3] text-4xl font-playfair">Artisanal Excellence</h2>
              <p className="text-[#F5DEB3] opacity-90">
                Our master pastry chefs bring decades of experience and unwavering dedication to every creation. Each piece is meticulously crafted using time-honored techniques and innovative approaches to achieve perfection.
              </p>
              <div className="h-1 w-24 bg-[#DAA520]" />
              <p className="text-[#F5DEB3] opacity-90">
                From the selection of ingredients to the final garnish, every step is executed with precision and artistic flair, ensuring each dessert is not just a treat, but a masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
