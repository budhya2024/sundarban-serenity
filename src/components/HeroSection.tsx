import { useEffect } from "react";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Users, Star } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6 backdrop-blur-sm border border-secondary/30">
              UNESCO World Heritage Site
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Discover the Wild Beauty of{" "}
            <span className="text-secondary">Sundarbans</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Embark on an unforgettable journey through the world's largest mangrove forest. 
            Witness the majestic Royal Bengal Tiger and explore the enchanting waterways 
            of this natural wonder.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/packages">Explore Tours</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-primary-foreground/60">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
