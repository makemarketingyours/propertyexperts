import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer & Mark Thompson",
    location: "Myers Park",
    rating: 5,
    text: "Sarah made our relocation from California seamless. She understood exactly what we were looking for and found us our dream home within two weeks. Her knowledge of Charlotte neighborhoods is unmatched.",
    type: "Buyer",
  },
  {
    name: "Robert Williams",
    location: "Ballantyne",
    rating: 5,
    text: "We sold our home in just 5 days, $30K over asking price. The staging advice and marketing strategy from Premier Home Realty was exceptional. Highly recommend for anyone selling in Charlotte.",
    type: "Seller",
  },
  {
    name: "Amanda Chen",
    location: "South End",
    rating: 5,
    text: "As a first-time buyer, I was nervous about the process. David walked me through every step with patience and expertise. I couldn't be happier with my new condo!",
    type: "Buyer",
  },
  {
    name: "The Martinez Family",
    location: "Dilworth",
    rating: 5,
    text: "We've worked with Premier Home Realty for three transactions now. Their attention to detail and genuine care for their clients keeps us coming back. They feel like family.",
    type: "Buyer & Seller",
  },
  {
    name: "Dr. Michael Foster",
    location: "Eastover",
    rating: 5,
    text: "Selling a luxury property requires expertise and discretion. Sarah and her team handled everything professionally, from private showings to negotiations. Outstanding service.",
    type: "Seller",
  },
  {
    name: "Lisa & Tom Gardner",
    location: "Lake Norman",
    rating: 5,
    text: "The team went above and beyond to help us find our lakefront property. They understood our vision and found us exactly what we wanted. Best real estate experience we've ever had.",
    type: "Buyer",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Client Success Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the families and individuals 
            we've helped find their perfect home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location} • {testimonial.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground">average rating</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="text-muted-foreground">
              <span className="text-foreground font-semibold">200+</span> verified reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
