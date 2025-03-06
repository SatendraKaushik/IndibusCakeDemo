import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    id: 1,
    name: "Isabella Laurent",
    role: "Founder & Master Pastry Chef",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "With over 20 years of experience in luxury pastry, Isabella trained at prestigious institutions in Paris before founding Luxury Confections.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Executive Pastry Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Specializing in chocolate artistry, Marcus brings his innovative techniques and artistic vision to our signature collections.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Sophie Dubois",
    role: "Head of Product Innovation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Leading our product development team, Sophie combines traditional French pastry techniques with modern flavors and presentations.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "James Harrison",
    role: "Master Chocolatier",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "A renowned chocolatier with international recognition, James crafts our exclusive chocolate collections and limited editions.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Team() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair text-center mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5DEB3] text-xl text-center max-w-3xl mx-auto"
          >
            Master artisans dedicated to creating extraordinary confectionery experiences
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href={member.social.instagram} className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
                        <Instagram />
                      </a>
                      <a href={member.social.twitter} className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
                        <Twitter />
                      </a>
                      <a href={member.social.linkedin} className="text-[#F5DEB3] hover:text-[#DAA520] transition-colors">
                        <Linkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-[#F5DEB3] text-2xl font-playfair mb-2">{member.name}</h3>
                <p className="text-[#DAA520] mb-4">{member.role}</p>
                <p className="text-[#F5DEB3] opacity-80">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[#F5DEB3] text-4xl font-playfair mb-6">Join Our Team</h2>
            <p className="text-[#F5DEB3] opacity-80 mb-8">
              We're always looking for passionate individuals who share our commitment to excellence and innovation in luxury confectionery.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#DAA520] text-[#1B1B1B] rounded hover:bg-[#8B4513] hover:text-[#F5DEB3] transition-colors duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
