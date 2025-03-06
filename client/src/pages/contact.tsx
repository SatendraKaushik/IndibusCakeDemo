import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const contactInfo = {
  address: "123 Luxury Lane, Beverly Hills, CA 90210",
  phone: "+1 (310) 555-0123",
  email: "concierge@luxuryconfections.com",
  hours: [
    "Monday - Friday: 10:00 AM - 8:00 PM",
    "Saturday: 10:00 AM - 6:00 PM",
    "Sunday: 12:00 PM - 5:00 PM"
  ]
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5DEB3] text-5xl md:text-7xl font-playfair text-center mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5DEB3] text-xl text-center max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out for custom orders, inquiries, or to schedule a private tasting.
          </motion.p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B1B1B] p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h2 className="text-[#F5DEB3] text-3xl font-playfair mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/20 border-[#DAA520] text-[#F5DEB3] placeholder:text-[#F5DEB3]/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/20 border-[#DAA520] text-[#F5DEB3] placeholder:text-[#F5DEB3]/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-black/20 border-[#DAA520] text-[#F5DEB3] placeholder:text-[#F5DEB3]/50"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-32 bg-black/20 border border-[#DAA520] rounded-md p-3 text-[#F5DEB3] placeholder:text-[#F5DEB3]/50"
                    required
                  />
                </div>
                <AnimatedButton type="submit" className="w-full">
                  Send Message
                </AnimatedButton>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40261238478715!3d34.0735359806042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1645764279593!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="bg-[#1B1B1B] p-8 rounded-lg border border-[#DAA520]/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#DAA520] flex-shrink-0" />
                    <div>
                      <h3 className="text-[#F5DEB3] font-playfair mb-2">Visit Us</h3>
                      <p className="text-[#F5DEB3] opacity-80">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#DAA520] flex-shrink-0" />
                    <div>
                      <h3 className="text-[#F5DEB3] font-playfair mb-2">Call Us</h3>
                      <p className="text-[#F5DEB3] opacity-80">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#DAA520] flex-shrink-0" />
                    <div>
                      <h3 className="text-[#F5DEB3] font-playfair mb-2">Email Us</h3>
                      <p className="text-[#F5DEB3] opacity-80">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#DAA520] flex-shrink-0" />
                    <div>
                      <h3 className="text-[#F5DEB3] font-playfair mb-2">Hours</h3>
                      {contactInfo.hours.map((hour, index) => (
                        <p key={index} className="text-[#F5DEB3] opacity-80">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
