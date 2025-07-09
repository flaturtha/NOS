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
  isEbook?: boolean;
}

export function OfferSection({ offerTitle, offerPrice, offerOldPrice, offerBadge, ctaText, onCtaClick, children, checkoutUrl, isEbook }: OfferSectionProps) {
  return (
    <div className="bg-white shadow-xl border-2 border-[#8B0000] rounded-lg p-8 mb-8 max-w-md mx-auto text-center">
      <p className="text-base font-semibold text-[#8B0000] mb-3">Limited-Time Launch Offer:</p>
      <h2 className="text-2xl font-serif font-bold mb-4">{offerTitle}</h2>
      <div className="flex items-center justify-center gap-3 mb-2">
        {offerOldPrice && <span className="text-xl line-through text-gray-500">{offerOldPrice}</span>}
        <span className="text-3xl font-bold text-[#8B0000]">{offerPrice}</span>
      </div>
      {offerBadge && (
        <div className="font-bold text-base text-[#8B0000] mb-6">{offerBadge}</div>
      )}
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        <Button className="bg-[#e0a106] hover:bg-[#c97f00] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-[#a56600]">
          {ctaText}
        </Button>
      </a>
      {/* Ebook delivery notice */}
      {isEbook && (
        <div className="text-sm text-gray-700 mt-2 italic">
          Links to download your ebooks will be delivered by email within 15 minutes of your purchase. You'll receive links to download each from Bookfunnel.
        </div>
      )}
      {isEbook === false && (
        <div className="text-sm text-gray-700 mt-2 italic">
          Ships FREE in 10 &ndash; 14 days (custom printed).
        </div>
      )}
      {children}
    </div>
  );
} 