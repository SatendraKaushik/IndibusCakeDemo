import { motion } from "framer-motion";
import { Star, Award, Users, Gift } from "lucide-react";

const achievements = [
  {
    icon: Star,
    value: "15+",
    label: "Years of Excellence"
  },
  {
    icon: Award,
    value: "50+",
    label: "International Awards"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Happy Clients"
  },
  {
    icon: Gift,
    value: "1000+",
    label: "Unique Creations"
  }
];

const history = [
  {
    year: "2008",
    title: "Our Beginning",
    description: "Founded by Master Pastry Chef Isabella Laurent in Paris"
  },
  {
    year: "2012",
    title: "International Recognition",
    description: "Awarded 'Best Luxury Confectionery' at the International Pastry Awards"
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Opened flagship stores in London, New York, and Tokyo"
  },
  {
    year: "2020",
    title: "Innovation in Tradition",
    description: "Launched our signature 24K gold-infused collection"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair text-center mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5DEB3] text-xl text-center max-w-3xl mx-auto"
          >
            A legacy of luxury confectionery craftsmanship, blending traditional artistry with modern innovation
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <achievement.icon className="w-8 h-8 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-[#F5DEB3] text-3xl font-playfair mb-2">{achievement.value}</h3>
                <p className="text-[#F5DEB3] opacity-80">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-8 mb-12"
              >
                <div className="text-[#DAA520] text-2xl font-playfair w-24 flex-shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-[#F5DEB3] text-xl font-playfair mb-2">{item.title}</h3>
                  <p className="text-[#F5DEB3] opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F5DEB3] text-4xl font-playfair text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Excellence</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Uncompromising dedication to quality in every creation
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Innovation</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Pushing boundaries while respecting traditional craftsmanship
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-[#DAA520] text-2xl font-playfair mb-4">Sustainability</h3>
              <p className="text-[#F5DEB3] opacity-80">
                Responsible sourcing and eco-conscious practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
