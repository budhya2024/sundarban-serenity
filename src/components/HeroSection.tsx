import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-sundarban.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sundarban Mangrove Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6 backdrop-blur-sm border border-secondary/30">
              UNESCO World Heritage Site
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Discover the Wild Beauty of{" "}
            <span className="text-secondary">Sundarbans</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Embark on an unforgettable journey through the world's largest mangrove forest. 
            Witness the majestic Royal Bengal Tiger and explore the enchanting waterways 
            of this natural wonder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/packages">Explore Tours</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Plan Your Trip</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-secondary mb-1">
                <MapPin className="w-5 h-5" />
                <span className="font-display text-2xl md:text-3xl font-bold">10K+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Sq. Km Forest</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-secondary mb-1">
                <Users className="w-5 h-5" />
                <span className="font-display text-2xl md:text-3xl font-bold">50K+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-secondary mb-1">
                <Star className="w-5 h-5" />
                <span className="font-display text-2xl md:text-3xl font-bold">4.9</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-foreground/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
