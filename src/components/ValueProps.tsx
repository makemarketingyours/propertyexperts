import { Home, TrendingUp, Users, Award, MapPin, Headphones } from "lucide-react";

const valueProps = [
  {
    icon: MapPin,
    title: "Local Market Expertise",
    description: "Deep knowledge of Charlotte neighborhoods, schools, and market trends to help you make informed decisions.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Over 500 successful transactions and $200M+ in sales volume. Results that speak for themselves.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every client gets dedicated attention. We take the time to understand your unique needs and goals.",
  },
  {
    icon: Award,
    title: "Top-Rated Agents",
    description: "Consistently recognized as top producers with 5-star reviews from hundreds of satisfied clients.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Questions don't wait for business hours. Reach us anytime for guidance and support.",
  },
  {
    icon: Home,
    title: "Full-Service Support",
    description: "From staging to closing, we coordinate every detail so you can focus on what matters most.",
  },
];

const ValueProps = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Success Is Our Priority
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine local expertise with dedicated service to deliver exceptional results 
            for every client, whether buying your first home or selling a luxury estate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="bg-card p-6 lg:p-8 rounded-lg transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <prop.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
