import { motion, useScroll, useTransform } from "framer-motion";
import { OurProcess } from "@/components/sections/our-process";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Crown, Star, Award, Sparkles, ChefHat, Gem, Leaf } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/372335193.sd.mp4?s=76bf96e6e0e9e5e19cc4539dfa155a3ab039e7d7&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
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

      {/* Floating Images Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPositionY: ["0%", "100%"],
              transition: { duration: 20, repeat: Infinity, repeatType: "reverse" }
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23DAA520\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                  alt="Luxury Cake"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <ChefHat className="w-8 h-8 text-[#DAA520] mb-4" />
                  <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-2">Master Craftsmanship</h3>
                  <p className="text-[#F5DEB3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Every creation is meticulously crafted by our expert artisans
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1547047803-fa4eb4613d82"
                  alt="Premium Ingredients"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-[#DAA520] mb-4" />
                  <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-2">Finest Ingredients</h3>
                  <p className="text-[#F5DEB3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sourced from renowned producers worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713"
                  alt="Luxury Experience"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <Gem className="w-8 h-8 text-[#DAA520] mb-4" />
                  <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-2">Exquisite Design</h3>
                  <p className="text-[#F5DEB3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Where elegance meets culinary artistry
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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

      {/* Our Process */}
      <OurProcess />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}