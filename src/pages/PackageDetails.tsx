import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, MapPin, Calendar, Star, ArrowLeft } from "lucide-react";
import tourAdventure from "@/assets/tour-adventure.jpg";
import tourPremium from "@/assets/tour-premium.jpg";
import tourBudget from "@/assets/tour-budget.jpg";

const packageData = {
  "day-trip": {
    title: "Day Trip Package",
    subtitle: "Quick 1-Day Safari Experience",
    duration: "1 Day",
    groupSize: "Up to 15 people",
    location: "Sajnekhali & Sudhanyakhali",
    price: "₹2,500",
    rating: 4.6,
    image: tourBudget,
    description: "Perfect for those short on time, our day trip offers a glimpse of the Sundarbans' wonders. Experience a boat safari through the mangrove channels and visit key watch towers.",
    highlights: [
      "Early morning departure from Kolkata",
      "Boat safari through main channels",
      "Visit Sajnekhali Watch Tower",
      "Spot deer, crocodiles, and birds",
      "Traditional Bengali lunch included",
      "Return by evening",
    ],
    itinerary: [
      { time: "5:00 AM", activity: "Pickup from Kolkata" },
      { time: "8:00 AM", activity: "Arrive at Godkhali jetty" },
      { time: "9:00 AM", activity: "Board boat & begin safari" },
      { time: "11:00 AM", activity: "Visit Sajnekhali Watch Tower" },
      { time: "1:00 PM", activity: "Lunch on boat" },
      { time: "2:30 PM", activity: "Continue safari" },
      { time: "4:30 PM", activity: "Begin return journey" },
      { time: "8:00 PM", activity: "Drop at Kolkata" },
    ],
    includes: ["AC transport", "Boat safari", "Forest permits", "Lunch", "Guide"],
    excludes: ["Camera fees", "Personal expenses", "Tips"],
  },
  "weekend": {
    title: "Weekend Getaway",
    subtitle: "2 Days / 1 Night Adventure",
    duration: "2 Days / 1 Night",
    groupSize: "Up to 12 people",
    location: "Core Sundarban Zone",
    price: "₹5,500",
    rating: 4.8,
    image: tourAdventure,
    description: "Our most popular package! Spend a night on a comfortable houseboat, enjoy multiple safaris, and maximize your chances of wildlife encounters.",
    highlights: [
      "Overnight stay on houseboat",
      "Multiple boat safaris",
      "Visit 3-4 watch towers",
      "Sunset cruise included",
      "All meals provided",
      "Expert naturalist guide",
    ],
    itinerary: [
      { time: "Day 1 - 5:00 AM", activity: "Pickup from Kolkata" },
      { time: "Day 1 - 9:00 AM", activity: "Board houseboat" },
      { time: "Day 1 - 10:00 AM", activity: "First safari session" },
      { time: "Day 1 - 1:00 PM", activity: "Lunch & rest" },
      { time: "Day 1 - 4:00 PM", activity: "Evening safari & sunset" },
      { time: "Day 1 - 8:00 PM", activity: "Dinner & overnight" },
      { time: "Day 2 - 6:00 AM", activity: "Morning safari" },
      { time: "Day 2 - 10:00 AM", activity: "Breakfast & checkout" },
      { time: "Day 2 - 4:00 PM", activity: "Return to Kolkata" },
    ],
    includes: ["AC transport", "Houseboat stay", "All meals", "2 safaris", "Permits", "Guide"],
    excludes: ["Camera fees", "Alcoholic beverages", "Tips"],
  },
  "premium": {
    title: "Premium Safari",
    subtitle: "3 Days / 2 Nights Luxury Tour",
    duration: "3 Days / 2 Nights",
    groupSize: "Up to 8 people",
    location: "Deep Sundarban Reserve",
    price: "₹12,000",
    rating: 4.9,
    image: tourPremium,
    description: "The ultimate Sundarbans experience with luxury accommodation, private boat, gourmet meals, and access to remote areas for the best tiger spotting opportunities.",
    highlights: [
      "Luxury houseboat with AC cabins",
      "Private boat for your group",
      "Deep forest exploration",
      "4+ boat safaris",
      "Village cultural visit",
      "Gourmet Bengali cuisine",
    ],
    itinerary: [
      { time: "Day 1 - 6:00 AM", activity: "Pickup from Kolkata" },
      { time: "Day 1 - 10:00 AM", activity: "Board luxury houseboat" },
      { time: "Day 1 - 11:00 AM", activity: "First safari to Sajnekhali" },
      { time: "Day 1 - 5:00 PM", activity: "Sunset cruise with snacks" },
      { time: "Day 2 - 5:30 AM", activity: "Early morning safari" },
      { time: "Day 2 - 12:00 PM", activity: "Visit to local village" },
      { time: "Day 2 - 4:00 PM", activity: "Deep forest safari" },
      { time: "Day 3 - 6:00 AM", activity: "Final safari" },
      { time: "Day 3 - 11:00 AM", activity: "Brunch & checkout" },
      { time: "Day 3 - 5:00 PM", activity: "Return to Kolkata" },
    ],
    includes: ["Luxury AC transport", "Premium houseboat", "All gourmet meals", "4 safaris", "Permits", "Expert naturalist", "Village tour"],
    excludes: ["Camera fees", "Personal shopping", "Tips"],
  },
  "adventure": {
    title: "Adventure Expedition",
    subtitle: "4 Days / 3 Nights Expedition",
    duration: "4 Days / 3 Nights",
    groupSize: "Up to 6 people",
    location: "Remote Sundarban Areas",
    price: "₹18,000",
    rating: 5.0,
    image: tourAdventure,
    description: "For serious wildlife enthusiasts. This expedition takes you to the most remote areas of Sundarbans with maximum safari time and best chances of tiger sightings.",
    highlights: [
      "Access to restricted zones",
      "6+ boat safaris",
      "Night safari experience",
      "Photography-focused itinerary",
      "Camping on secluded island",
      "Expert wildlife photographer guide",
    ],
    itinerary: [
      { time: "Day 1", activity: "Kolkata to Sundarbans, orientation safari" },
      { time: "Day 2", activity: "Full day safaris to Netidhopani & Dobanki" },
      { time: "Day 3", activity: "Remote area exploration, night safari" },
      { time: "Day 4", activity: "Morning safari, return to Kolkata" },
    ],
    includes: ["Premium transport", "Mixed accommodation", "All meals", "6 safaris", "All permits", "Photo guide", "Camping gear"],
    excludes: ["Camera fees", "Insurance", "Tips"],
  },
};

const PackageDetails = () => {
  const { packageId } = useParams();
  const pkg = packageData[packageId as keyof typeof packageData];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, [packageId]);

  if (!pkg) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-display text-4xl font-bold mb-4 text-foreground">Package Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/packages">View All Packages</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={pkg.title}
        subtitle={pkg.subtitle}
        backgroundImage={pkg.image}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/packages"
            data-aos="fade-right"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Packages
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div data-aos="fade-up">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg">{pkg.description}</p>
              </div>

              {/* Quick Info */}
              <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card p-4 rounded-xl text-center shadow-soft">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <p className="font-semibold text-foreground">{pkg.duration}</p>
                </div>
                <div className="bg-card p-4 rounded-xl text-center shadow-soft">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Group Size</span>
                  <p className="font-semibold text-foreground">{pkg.groupSize}</p>
                </div>
                <div className="bg-card p-4 rounded-xl text-center shadow-soft">
                  <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-semibold text-foreground text-sm">{pkg.location}</p>
                </div>
                <div className="bg-card p-4 rounded-xl text-center shadow-soft">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <p className="font-semibold text-foreground">{pkg.rating}/5</p>
                </div>
              </div>

              {/* Highlights */}
              <div data-aos="fade-up">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div data-aos="fade-up">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-28 flex-shrink-0">
                        <span className="text-sm font-medium text-secondary">{item.time}</span>
                      </div>
                      <div className="flex-1 pb-4 border-b border-border last:border-0">
                        <p className="text-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes/Excludes */}
              <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">What's Not Included</h3>
                  <ul className="space-y-2">
                    {pkg.excludes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-4 h-4 flex items-center justify-center text-destructive">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-elevated sticky top-24" data-aos="fade-left">
                <div className="text-center mb-6">
                  <span className="text-muted-foreground">Starting from</span>
                  <div className="font-display text-4xl font-bold text-primary">{pkg.price}</div>
                  <span className="text-muted-foreground">per person</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span>Daily departures available</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-secondary" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full mb-4">
                  Book This Package
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact for Custom Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PackageDetails;
