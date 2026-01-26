import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Sundarban Bengal Trip" 
                className="h-16 object-contain"
              />
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed mb-6">
              Experience the magic of the world's largest mangrove forest. 
              Witness the Royal Bengal Tiger in its natural habitat and explore 
              the breathtaking biodiversity of the Sundarbans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Tour Packages", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("tour-", "")}`}
                    className="text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {[
                "Day Trip Package",
                "Weekend Getaway",
                "Premium Safari",
                "Photography Tour",
                "Adventure Expedition",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/packages"
                    className="text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  123 Forest Road, Canning<br />
                  South 24 Parganas, West Bengal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@sundarbanbengaltrip.com" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  info@sundarbanbengaltrip.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Sundarban Bengal Trip. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cancellation-policy" className="text-accent-foreground/60 hover:text-primary transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
