import { useEffect } from "react";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Users, Star, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

export const HeroSection = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930933_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark teal overlay matching logo background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,35%,12%)] via-[hsl(195,30%,18%)] to-[hsl(200,25%,15%)] opacity-90" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,35%,8%)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Sundarban Bengal Trip" 
              className="h-24 md:h-32 lg:h-40 mx-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 text-primary font-medium text-sm backdrop-blur-md border border-primary/30">
              <Sparkles className="w-4 h-4" />
              UNESCO World Heritage Site
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-8 mb-6 leading-tight"
          >
            Discover the Wild Beauty of{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-[hsl(80,70%,55%)] to-secondary bg-clip-text text-transparent">
                Sundarbans
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Embark on an unforgettable journey through the world's largest mangrove forest. 
            Witness the majestic Royal Bengal Tiger and explore the enchanting waterways 
            of this natural wonder.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/packages" className="flex items-center gap-2">
                Explore Tours
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Video
              </Link>
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: MapPin, value: "10K+", label: "Sq. Km Forest" },
              { icon: Users, value: "50K+", label: "Happy Travelers" },
              { icon: Star, value: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <stat.icon className="w-5 h-5" />
                  <span className="font-display text-2xl md:text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
