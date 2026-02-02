import { Phone, Calendar } from "lucide-react";

interface StickyMobileCTAProps {
  primaryCtaUrl?: string;
}

const StickyMobileCTA = ({ primaryCtaUrl = "https://booking.example.com" }: StickyMobileCTAProps) => {
  const hasCtaUrl = Boolean(primaryCtaUrl);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 safe-area-inset-bottom">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href="tel:5551234567"
          className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground font-semibold rounded-lg transition-colors hover:bg-primary/90"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        {hasCtaUrl ? (
          <a
            href={primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-12 bg-accent text-primary font-semibold rounded-lg transition-colors hover:bg-accent/90"
          >
            <Calendar className="w-4 h-4" />
            Book
          </a>
        ) : (
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 h-12 bg-accent/50 text-primary/50 font-semibold rounded-lg cursor-not-allowed"
          >
            <Calendar className="w-4 h-4" />
            Book
          </button>
        )}
      </div>
    </div>
  );
};

export default StickyMobileCTA;
