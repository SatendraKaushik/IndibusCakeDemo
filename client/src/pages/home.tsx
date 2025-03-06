import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { CakeModel } from "@/components/3d/cake-model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { OurProcess } from "@/components/sections/our-process";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Suspense } from "react";

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CakeModel />
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      {/* Hero Section with 3D Model */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Canvas>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair mb-6"
            >
              Luxury Confections
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#F5DEB3] text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8"
            >
              Experience artisanal perfection in every creation
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="/signature-collection"
                className="px-8 py-3 bg-[#DAA520] text-[#1B1B1B] font-semibold rounded hover:bg-[#8B4513] hover:text-[#F5DEB3] transition-colors duration-300"
              >
                Explore Our Collection
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#F5DEB3] text-sm"
        >
          Scroll to Discover
        </motion.div>
      </section>

      {/* Immersive Experience Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/20 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Artisanal Excellence</h3>
                <p className="text-[#F5DEB3] opacity-80">Crafted by master pastry artisans with decades of expertise</p>
              </motion.div>
            </div>
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/20 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Premium Ingredients</h3>
                <p className="text-[#F5DEB3] opacity-80">Sourced from the world's finest producers and growers</p>
              </motion.div>
            </div>
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/20 p-8 rounded-lg border border-[#DAA520]/20"
              >
                <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Luxury Experience</h3>
                <p className="text-[#F5DEB3] opacity-80">Each creation is a masterpiece of confectionery art</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcess />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}