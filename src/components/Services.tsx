import { ArrowRight, Search, DollarSign, Building, Key, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const buyerServices = [
  { icon: Search, text: "Personalized home search based on your criteria" },
  { icon: Key, text: "Access to off-market and pre-listing properties" },
  { icon: DollarSign, text: "Expert negotiation to get the best price" },
  { icon: Users, text: "Guidance through inspection and closing" },
];

const sellerServices = [
  { icon: DollarSign, text: "Accurate pricing with comparative market analysis" },
  { icon: Building, text: "Professional staging and photography" },
  { icon: Briefcase, text: "Strategic marketing across 100+ platforms" },
  { icon: Users, text: "Skilled negotiation to maximize your sale price" },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Real Estate Services
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Buying */}
          <div className="bg-primary p-8 lg:p-10 rounded-xl">
            <div className="mb-6">
              <span className="text-gold font-medium text-sm tracking-widest uppercase">
                For Buyers
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mt-2">
                Find Your Perfect Home
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Whether you're a first-time buyer or seasoned investor, we'll guide you 
              through every step of finding and securing your ideal property.
            </p>
            <ul className="space-y-4 mb-8">
              {buyerServices.map((service) => (
                <li key={service.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <service.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-primary-foreground/90">{service.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-accent text-primary hover:bg-accent/90 group">
              <a href="#contact">
                Start Your Search
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Selling */}
          <div className="bg-card border border-border p-8 lg:p-10 rounded-xl">
            <div className="mb-6">
              <span className="text-accent font-medium text-sm tracking-widest uppercase">
                For Sellers
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mt-2">
                Sell for Top Dollar
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Maximize your home's value with our proven marketing strategies and 
              expert negotiation. We handle everything so you don't have to.
            </p>
            <ul className="space-y-4 mb-8">
              {sellerServices.map((service) => (
                <li key={service.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <service.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">{service.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              <a href="#market-insights">
                Get a Free Home Valuation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Our specialties include:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Luxury Homes", "First-Time Buyers", "Investment Properties", "Relocation Services", "Commercial"].map((specialty) => (
              <span
                key={specialty}
                className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
