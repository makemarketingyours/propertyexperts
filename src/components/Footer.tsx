import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-24 lg:pb-8">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Premier Home Realty</h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Charlotte's trusted real estate experts. Helping families find their perfect home 
              for over 15 years with personalized service and local expertise.
            </p>
            <div className="space-y-2">
              <a href="tel:5551234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a href="mailto:hello@premierhomerealty.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                hello@premierhomerealty.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Main Street, Charlotte, NC 28202</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Listings", href: "#listings" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2">
              {["Myers Park", "Dilworth", "South End", "Ballantyne", "Lake Norman", "Uptown"].map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Premier Home Realty. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <p className="text-primary-foreground/40 text-xs text-center mt-4">
            Licensed NC Real Estate Broker | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
