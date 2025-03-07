import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { OurProcess } from "@/components/sections/our-process";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Crown, Star, Award, Sparkles, HeartHandshake, Clock, Gift, Cake } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "50K+", label: "Happy Customers" },
    { value: "200+", label: "Signature Creations" },
    { value: "25", label: "Master Artisans" }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1587248720327-8eb72564be1e",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    "https://images.unsplash.com/photo-1547047803-fa4eb4613d82"
  ];

  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587248720327-8eb72564be1e')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block mb-6"
            >
              <Crown className="w-16 h-16 text-[#DAA520] mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -inset-2 border border-[#DAA520] rounded-full"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair mb-6"
            >
              Luxury Confections
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[#F5DEB3] text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-12"
            >
              Where artistry meets indulgence in every creation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/signature-collection"
                className="px-8 py-3 bg-[#DAA520] text-[#1B1B1B] rounded-full font-semibold hover:bg-[#8B4513] hover:text-[#F5DEB3] transition-colors duration-300"
              >
                Explore Collection
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#F5DEB3] flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <span className="text-sm tracking-wider">Scroll to Discover</span>
        </motion.div>
      </section>

      {/* Luxury Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-black/20 p-12 rounded-lg border border-[#DAA520]/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Star className="w-12 h-12 text-[#DAA520] mb-6" />
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Artisanal Excellence</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Every creation is meticulously crafted by our master artisans
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-black/20 p-12 rounded-lg border border-[#DAA520]/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Crown className="w-12 h-12 text-[#DAA520] mb-6" />
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Premium Ingredients</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Sourced from the world's finest producers and growers
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-black/20 p-12 rounded-lg border border-[#DAA520]/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Award className="w-12 h-12 text-[#DAA520] mb-6" />
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Luxury Experience</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Each creation is a masterpiece of confectionery art
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8')] bg-cover bg-fixed">
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <HeartHandshake className="w-16 h-16 text-[#DAA520] mx-auto mb-6" />
            <h2 className="text-[#F5DEB3] text-4xl font-playfair mb-8">Our Philosophy</h2>
            <p className="text-[#F5DEB3] text-xl opacity-90 leading-relaxed mb-12">
              At Luxury Confections, we believe that every dessert should be a work of art, 
              a moment of pure indulgence that transcends the ordinary. Our passion for 
              perfection drives us to create experiences that delight all senses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Clock className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-[#DAA520] text-xl font-playfair mb-2">Time-Honored</h3>
                <p className="text-[#F5DEB3] opacity-80">Traditional techniques refined over generations</p>
              </div>
              <div>
                <Gift className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-[#DAA520] text-xl font-playfair mb-2">Bespoke Service</h3>
                <p className="text-[#F5DEB3] opacity-80">Personalized attention to every detail</p>
              </div>
              <div>
                <Cake className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-[#DAA520] text-xl font-playfair mb-2">Artistic Vision</h3>
                <p className="text-[#F5DEB3] opacity-80">Where imagination meets craftsmanship</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
          >
            Moments of Perfection
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt="Luxury Confection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: index * 0.2 }}
                  className="block text-[#DAA520] text-4xl font-playfair mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-[#F5DEB3] opacity-80">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464195244916-405fa0a82545')] bg-cover bg-fixed">
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-[#F5DEB3] text-4xl font-playfair mb-8">Special Events</h2>
            <p className="text-[#F5DEB3] opacity-90 text-xl mb-12">
              Make your celebrations extraordinary with our bespoke creations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/30 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Weddings</h3>
                <p className="text-[#F5DEB3] opacity-80">
                  Stunning centerpieces for your perfect day
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/30 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Corporate</h3>
                <p className="text-[#F5DEB3] opacity-80">
                  Impressive creations for prestigious events
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/30 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Private Parties</h3>
                <p className="text-[#F5DEB3] opacity-80">
                  Personalized luxury for intimate gatherings
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <OurProcess />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}