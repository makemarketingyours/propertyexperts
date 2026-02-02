import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import FeaturedListings from "@/components/FeaturedListings";
import MarketInsights from "@/components/MarketInsights";
import TeamBio from "@/components/TeamBio";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Configuration
const CONFIG = {
  primaryCtaUrl: "https://booking.example.com",
  phone: "(555) 123-4567",
};

const Index = () => {
  // Add JSON-LD Schema for RealEstateAgent
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Premier Home Realty",
      "description": "Charlotte's trusted real estate experts. Helping families find their perfect home with personalized service and local expertise.",
      "url": window.location.href,
      "telephone": "+1-555-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28202",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.2271",
        "longitude": "-80.8431"
      },
      "areaServed": [
        "Charlotte, NC",
        "Myers Park",
        "Dilworth",
        "South End",
        "Ballantyne",
        "Lake Norman",
        "Matthews",
        "Huntersville"
      ],
      "priceRange": "$$$",
      "openingHours": "Mo-Fr 09:00-18:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero primaryCtaUrl={CONFIG.primaryCtaUrl} />
        <ValueProps />
        <Services />
        <FeaturedListings />
        <MarketInsights />
        <TeamBio />
        <Testimonials />
        <AreasServed />
        <FAQ />
        <ContactSection primaryCtaUrl={CONFIG.primaryCtaUrl} />
      </main>
      <Footer />
      <StickyMobileCTA primaryCtaUrl={CONFIG.primaryCtaUrl} />
    </div>
  );
};

export default Index;
