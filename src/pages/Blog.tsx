import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import galleryTiger from "@/assets/gallery-tiger.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";
import galleryBird from "@/assets/gallery-bird.jpg";
import galleryDeer from "@/assets/gallery-deer.jpg";
import gallerySunset from "@/assets/gallery-sunset.jpg";
import heroImage from "@/assets/hero-sundarban.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Best Time to Visit Sundarbans: A Complete Guide",
    excerpt: "Discover the ideal seasons for tiger spotting, bird watching, and exploring the mangrove forests. Learn about weather patterns and what to expect each month.",
    image: galleryTiger,
    date: "Jan 15, 2024",
    author: "Rajiv Banerjee",
    readTime: "8 min read",
    category: "Travel Guide",
  },
  {
    id: 2,
    title: "Traditional Boat Safari: What to Expect",
    excerpt: "Everything you need to know about the iconic wooden boat safaris through the winding waterways of the Sundarbans delta.",
    image: galleryBoat,
    date: "Jan 10, 2024",
    author: "Priya Mukherjee",
    readTime: "6 min read",
    category: "Experience",
  },
  {
    id: 3,
    title: "Bird Watching in Sundarbans: Species to Spot",
    excerpt: "From Kingfishers to White-bellied Sea Eagles, discover the diverse avian life of the Sundarbans and tips for spotting them.",
    image: galleryBird,
    date: "Jan 5, 2024",
    author: "Arun Das",
    readTime: "10 min read",
    category: "Wildlife",
  },
  {
    id: 4,
    title: "The Royal Bengal Tiger: Behavior and Habitat",
    excerpt: "Learn about the magnificent tigers of Sundarbans, their unique adaptations to the mangrove environment, and conservation efforts.",
    image: heroImage,
    date: "Dec 28, 2023",
    author: "Rajiv Banerjee",
    readTime: "12 min read",
    category: "Wildlife",
  },
  {
    id: 5,
    title: "Wildlife Photography Tips for Sundarbans",
    excerpt: "Expert tips for capturing stunning wildlife photos in challenging mangrove conditions, from equipment to techniques.",
    image: galleryDeer,
    date: "Dec 20, 2023",
    author: "Arun Das",
    readTime: "15 min read",
    category: "Photography",
  },
  {
    id: 6,
    title: "Sunset Cruises: A Magical Experience",
    excerpt: "Why sunset cruises are the most romantic way to experience the Sundarbans and what makes them so special.",
    image: gallerySunset,
    date: "Dec 15, 2023",
    author: "Priya Mukherjee",
    readTime: "5 min read",
    category: "Experience",
  },
];

const categories = ["All", "Travel Guide", "Wildlife", "Experience", "Photography"];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Travel Blog
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Stories, tips, and insights from our expert guides and fellow travelers 
              to help you make the most of your Sundarban adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-soft">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
