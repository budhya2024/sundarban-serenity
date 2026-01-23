import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Star, Check } from "lucide-react";
import tourPremium from "@/assets/tour-premium.jpg";
import tourAdventure from "@/assets/tour-adventure.jpg";
import tourBudget from "@/assets/tour-budget.jpg";

const packages = [
  {
    name: "Explorer Day Trip",
    image: tourBudget,
    duration: "1 Day",
    groupSize: "10-15",
    price: "₹2,499",
    rating: 4.7,
    features: [
      "Guided boat safari",
      "Wildlife spotting",
      "Traditional lunch",
      "Photography stops",
    ],
    popular: false,
  },
  {
    name: "Premium Safari",
    image: tourPremium,
    duration: "3 Days / 2 Nights",
    groupSize: "6-8",
    price: "₹12,999",
    rating: 4.9,
    features: [
      "Luxury houseboat stay",
      "Tiger territory exploration",
      "All meals included",
      "Professional naturalist",
      "Night safari experience",
    ],
    popular: true,
  },
  {
    name: "Adventure Expedition",
    image: tourAdventure,
    duration: "2 Days / 1 Night",
    groupSize: "8-12",
    price: "₹6,999",
    rating: 4.8,
    features: [
      "Camping experience",
      "Multiple safari rides",
      "Bird watching tour",
      "Local village visit",
    ],
    popular: false,
  },
];

export const TourPackagesSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Tour Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From quick day trips to immersive multi-day expeditions, we have 
            the perfect package to match your schedule and budget.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group ${
                pkg.popular ? "ring-2 ring-secondary" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-primary-foreground font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {pkg.groupSize} people
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <p className="font-display text-2xl font-bold text-foreground">{pkg.price}</p>
                  </div>
                  <Button variant={pkg.popular ? "hero" : "nature"} asChild>
                    <Link to="/packages">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/packages">View All Packages</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
