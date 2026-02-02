import { MapPin } from "lucide-react";

const neighborhoods = [
  { name: "Myers Park", homes: "120+ listings" },
  { name: "Dilworth", homes: "85+ listings" },
  { name: "South End", homes: "95+ listings" },
  { name: "Ballantyne", homes: "150+ listings" },
  { name: "Uptown Charlotte", homes: "110+ listings" },
  { name: "Eastover", homes: "45+ listings" },
  { name: "Plaza Midwood", homes: "70+ listings" },
  { name: "NoDa", homes: "55+ listings" },
  { name: "Southpark", homes: "80+ listings" },
  { name: "Lake Norman", homes: "200+ listings" },
  { name: "Matthews", homes: "90+ listings" },
  { name: "Huntersville", homes: "130+ listings" },
];

const AreasServed = () => {
  return (
    <section id="areas" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Service Areas
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Charlotte Neighborhoods We Serve
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the historic charm of Dilworth to the waterfront luxury of Lake Norman, 
            we have deep expertise across the entire Charlotte metro area.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.name}
              className="group bg-card border border-border rounded-lg p-4 hover:border-accent hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {neighborhood.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{neighborhood.homes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder / CTA */}
        <div className="mt-12 bg-primary rounded-xl p-8 lg:p-12 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Don't See Your Neighborhood?
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            We serve the entire Charlotte metro area including Mecklenburg, Union, 
            Cabarrus, and Iredell counties. Contact us to discuss your specific area.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Contact Us About Your Area
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
