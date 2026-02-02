import heroImage from "@/assets/hero-home.jpg";

interface HeroProps {
  primaryCtaUrl?: string;
}

const Hero = ({ primaryCtaUrl = "https://booking.example.com" }: HeroProps) => {
  const hasCtaUrl = Boolean(primaryCtaUrl);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury home in Charlotte, NC"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsla(220, 45%, 15%, 0.6) 0%, hsla(220, 45%, 10%, 0.8) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Charlotte's Trusted Real Estate Experts
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Find Your Dream Home in Charlotte
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Expert guidance for buyers, sellers, and investors across the Charlotte metro area. 
            15+ years of experience helping families find their perfect home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {hasCtaUrl ? (
              <a
                href={primaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-hero"
              >
                Book a Consultation
              </a>
            ) : (
              <div className="flex flex-col items-center">
                <button disabled className="btn-primary-hero">
                  Book a Consultation
                </button>
                <p className="text-primary-foreground/60 text-sm mt-2">
                  Add your booking link to enable this
                </p>
              </div>
            )}
            <a href="#listings" className="btn-secondary-hero">
              View Listings
            </a>
          </div>

          {/* Secondary call link */}
          <p className="text-primary-foreground/70 text-sm">
            Prefer to call?{" "}
            <a 
              href="tel:5551234567" 
              className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
            >
              (555) 123-4567
            </a>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-10 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">500+</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Homes Sold</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">15+</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">98%</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
