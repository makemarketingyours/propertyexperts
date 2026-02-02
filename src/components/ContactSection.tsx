import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  primaryCtaUrl?: string;
}

const ContactSection = ({ primaryCtaUrl = "https://booking.example.com" }: ContactSectionProps) => {
  const hasCtaUrl = Boolean(primaryCtaUrl);

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make Your Move?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Whether you're buying, selling, or just exploring your options, 
              we're here to help. Reach out today for a free, no-obligation consultation.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Phone</h4>
                  <a href="tel:5551234567" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Email</h4>
                  <a href="mailto:hello@premierhomerealty.com" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    hello@premierhomerealty.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Office</h4>
                  <p className="text-primary-foreground/80">
                    123 Main Street<br />
                    Charlotte, NC 28202
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Hours</h4>
                  <p className="text-primary-foreground/80">
                    Mon-Fri: 9am - 6pm<br />
                    Sat-Sun: By appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="bg-primary-foreground rounded-xl p-8 lg:p-10">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Schedule a Free Consultation
            </h3>
            <p className="text-muted-foreground mb-8">
              Book a 30-minute call to discuss your real estate goals. 
              We'll answer your questions and create a personalized plan for your success.
            </p>

            {hasCtaUrl ? (
              <Button asChild className="w-full bg-accent text-primary hover:bg-accent/90 group h-14 text-lg">
                <a href={primaryCtaUrl} target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            ) : (
              <div>
                <Button disabled className="w-full bg-accent text-primary h-14 text-lg opacity-50 cursor-not-allowed">
                  Book a Consultation
                </Button>
                <p className="text-muted-foreground text-sm text-center mt-3">
                  Add your booking link to enable this button
                </p>
              </div>
            )}

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-primary-foreground px-4 text-muted-foreground">or</span>
              </div>
            </div>

            <p className="text-center text-foreground mb-4">
              Prefer to call?
            </p>
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-2 w-full h-14 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>

            <p className="text-muted-foreground text-sm text-center mt-6">
              We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
