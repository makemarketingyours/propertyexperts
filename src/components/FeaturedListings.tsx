import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";
import listing5 from "@/assets/listing-5.jpg";
import listing6 from "@/assets/listing-6.jpg";

const listings = [
  {
    id: 1,
    image: listing1,
    price: "$875,000",
    address: "4521 Queens Road",
    neighborhood: "Myers Park",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    status: "Active",
  },
  {
    id: 2,
    image: listing2,
    price: "$525,000",
    address: "1892 Providence Road",
    neighborhood: "Dilworth",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    status: "Active",
  },
  {
    id: 3,
    image: listing3,
    price: "$689,000",
    address: "7845 Rea Road",
    neighborhood: "Ballantyne",
    beds: 5,
    baths: 3,
    sqft: "3,800",
    status: "Active",
  },
  {
    id: 4,
    image: listing4,
    price: "$1,250,000",
    address: "3210 Eastover Road",
    neighborhood: "Eastover",
    beds: 5,
    baths: 4.5,
    sqft: "4,500",
    status: "Pending",
  },
  {
    id: 5,
    image: listing5,
    price: "$385,000",
    address: "520 Church Street #412",
    neighborhood: "Uptown",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    status: "Active",
  },
  {
    id: 6,
    image: listing6,
    price: "$2,100,000",
    address: "8901 Carmel Country Club",
    neighborhood: "Carmel",
    beds: 6,
    baths: 6,
    sqft: "6,200",
    status: "Active",
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Featured Properties
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Charlotte's Finest Homes
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From charming bungalows to luxury estates, discover exceptional properties 
            across Charlotte's most desirable neighborhoods.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {listings.map((listing) => (
            <article key={listing.id} className="card-property group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      listing.status === "Active"
                        ? "bg-green-500 text-primary-foreground"
                        : "bg-amber-500 text-primary-foreground"
                    }`}
                  >
                    {listing.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-2xl font-bold text-accent">
                    {listing.price}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{listing.address}</h3>
                <p className="text-muted-foreground text-sm mb-4">{listing.neighborhood}, Charlotte</p>
                
                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {listing.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {listing.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {listing.sqft} sqft
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
            <a href="#contact">
              View All Listings
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
