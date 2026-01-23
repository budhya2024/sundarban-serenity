import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import galleryTiger from "@/assets/gallery-tiger.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";
import galleryBird from "@/assets/gallery-bird.jpg";
import galleryDeer from "@/assets/gallery-deer.jpg";
import galleryCrocodile from "@/assets/gallery-crocodile.jpg";
import gallerySunset from "@/assets/gallery-sunset.jpg";

const galleryImages = [
  { src: galleryTiger, alt: "Royal Bengal Tiger", span: "col-span-2 row-span-2" },
  { src: galleryBoat, alt: "Traditional Boat Safari", span: "col-span-1 row-span-1" },
  { src: galleryBird, alt: "Kingfisher Bird", span: "col-span-1 row-span-1" },
  { src: galleryDeer, alt: "Spotted Deer", span: "col-span-1 row-span-1" },
  { src: galleryCrocodile, alt: "Saltwater Crocodile", span: "col-span-1 row-span-1" },
  { src: gallerySunset, alt: "Sundarban Sunset", span: "col-span-2 row-span-1" },
];

export const GallerySection = () => {
  return (
    <section className="py-24 bg-background">
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
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Moments from the Wild
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning wildlife and breathtaking landscapes captured 
            by our travelers during their Sundarban adventures.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground font-medium text-lg">{image.alt}</span>
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
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
