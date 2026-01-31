import { useEffect } from "react";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Users, Star, Play, Leaf } from "lucide-react";
import galleryTiger from "@/assets/gallery-tiger.jpg";
import gallerySunset from "@/assets/gallery-sunset.jpg";
import galleryBird from "@/assets/gallery-bird.jpg";

export const HeroSection = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      {/* Decorative Leaves */}
      <div className="absolute top-32 left-8 text-secondary/20">
        <Leaf className="w-16 h-16 rotate-45" />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary/15">
        <Leaf className="w-12 h-12 -rotate-12" />
      </div>
      <div className="absolute top-48 right-16 text-accent/20">
        <Leaf className="w-20 h-20 rotate-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6 backdrop-blur-sm border border-secondary/30">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                UNESCO World Heritage Site
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Discover the{" "}
              <span className="relative">
                <span className="text-secondary">Wild Beauty</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              of Sundarbans
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed"
            >
              Embark on an unforgettable journey through the world's largest mangrove forest. 
              Witness the majestic Royal Bengal Tiger in its natural habitat.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/packages">
                  Explore Tours
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="group" asChild>
                <Link to="/gallery" className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </span>
                  Watch Gallery
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
              className="flex flex-wrap gap-8"
            >
              <div className="text-left">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="font-display text-3xl md:text-4xl font-bold">10K+</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Sq. Km Forest Area</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-left">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <Users className="w-5 h-5" />
                  <span className="font-display text-3xl md:text-4xl font-bold">50K+</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Happy Travelers</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-left">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <Star className="w-5 h-5 fill-secondary" />
                  <span className="font-display text-3xl md:text-4xl font-bold">4.9</span>
                </div>
                <p className="text-primary-foreground/60 text-sm">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative hidden lg:block">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img
                  src={galleryTiger}
                  alt="Royal Bengal Tiger"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-2">
                    Featured
                  </span>
                  <h3 className="text-primary-foreground font-display text-xl font-bold">Royal Bengal Tiger</h3>
                  <p className="text-primary-foreground/80 text-sm">The king of Sundarbans</p>
                </div>
              </div>

              {/* Floating Image 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="absolute -left-12 top-20 z-20"
              >
                <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-card rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={gallerySunset}
                    alt="Sunset in Sundarbans"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Image 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="absolute -right-8 bottom-32 z-20"
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-card -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={galleryBird}
                    alt="Bird watching"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-secondary/30 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-primary-foreground/60">
          <span className="text-xs mb-2 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.2C384 37 480 49 576 52.3C672 55.7 768 50.3 864 47.5C960 44.7 1056 44.3 1152 48.5C1248 52.7 1344 61.3 1392 65.7L1440 70V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
