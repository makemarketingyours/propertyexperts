import { TrendingUp, Home, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: DollarSign,
    value: "$425,000",
    label: "Median Home Price",
    change: "+8.2% YoY",
  },
  {
    icon: Clock,
    value: "18 Days",
    label: "Avg. Days on Market",
    change: "-12% YoY",
  },
  {
    icon: Home,
    value: "2,340",
    label: "Homes Sold (Q4)",
    change: "+5.4% YoY",
  },
  {
    icon: TrendingUp,
    value: "97.2%",
    label: "Sale-to-List Ratio",
    change: "+1.3% YoY",
  },
];

const MarketInsights = () => {
  return (
    <section id="market-insights" className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Market Insights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              What's Your Home Worth?
            </h2>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              The Charlotte market is dynamic and competitive. Get an accurate, 
              up-to-date valuation of your property with our free home assessment.
            </p>
            <p className="text-primary-foreground/70 mb-8">
              Our comprehensive analysis includes recent comparable sales, market trends, 
              neighborhood data, and unique property features to give you the most 
              accurate estimate possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent text-primary hover:bg-accent/90 group">
                <a href="#contact">
                  Get Free Home Valuation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#contact">
                  View Market Report
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm mb-2">{stat.label}</p>
                <span className="text-green-400 text-xs font-medium">{stat.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
