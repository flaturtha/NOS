import React from "react";
import { Button } from "./ui/button";

interface OfferSectionProps {
  offerTitle: string;
  offerPrice: string;
  offerOldPrice?: string;
  offerBadge?: string;
  ctaText: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
  checkoutUrl: string;
}

export function OfferSection({ offerTitle, offerPrice, offerOldPrice, offerBadge, ctaText, onCtaClick, children, checkoutUrl }: OfferSectionProps) {
  return (
    <div className="bg-white shadow-xl border-2 border-[#8B0000] rounded-lg p-8 mb-8 max-w-md mx-auto text-center">
      <p className="text-base font-semibold text-[#8B0000] mb-3">Limited-Time Launch Offer:</p>
      <h2 className="text-2xl font-serif font-bold mb-4">{offerTitle}</h2>
      <div className="flex items-center justify-center gap-3 mb-6">
        {offerOldPrice && <span className="text-xl line-through text-gray-500">{offerOldPrice}</span>}
        <span className="text-3xl font-bold text-[#8B0000]">{offerPrice}</span>
        {offerBadge && <span className="bg-[#8B0000] text-white text-base px-3 py-1 rounded">{offerBadge}</span>}
      </div>
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        <Button className="bg-[#8B0000] hover:bg-[#5a0000] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-[#4a0000}">
          {ctaText}
        </Button>
      </a>
      {children}
    </div>
  );
} 