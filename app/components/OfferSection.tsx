import React, { useState } from "react";
import { Button } from "./ui/button";
import posthog from 'posthog-js';

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
  const [loadingMainCTA, setLoadingMainCTA] = useState(false);
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
      <button
        type="button"
        className="bg-[#e0a106] hover:bg-[#c97f00] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-[#a56600] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={loadingMainCTA}
        onClick={() => {
          setLoadingMainCTA(true);
          posthog.capture('cta_click', { type: 'main' });
          setTimeout(() => {
            window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
            setLoadingMainCTA(false);
          }, 300);
        }}
      >
        {loadingMainCTA ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-2 text-[#fff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
            Loading secure checkout ...
          </>
        ) : (
          ctaText
        )}
      </button>
      {/* Trust Row */}
      <div className="flex flex-row items-center justify-center gap-16 mb-4 mt-2 text-xs">
        <div className="flex flex-col items-center">
          {/* Book/Heart Icon - Satisfaction Guaranteed for all */}
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round"/><path d="M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20v13" stroke="#8B0000" strokeWidth="2" strokeLinecap="round"/><path d="M8.5 9.5c0-1.104.896-2 2-2s2 .896 2 2c0 1.657-2 3-2 3s-2-1.343-2-3Z" fill="#e0a106" stroke="#8B0000" strokeWidth="1.2"/></svg>
          <span className="mt-1 font-semibold">Satisfaction Guaranteed</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Padlock Icon */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="8" rx="2" stroke="#8B0000" strokeWidth="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="#8B0000" strokeWidth="2"/></svg>
          <span className="mt-1 font-semibold">Secure Checkout</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Third icon: conditional for ebook/print */}
          {isEbook ? (
            <>
              {/* Airmail/Download Icon */}
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="7" width="18" height="10" rx="2" stroke="#8B0000" strokeWidth="2"/>
                <path d="M3 7l9 6 9-6" stroke="#e0a106" strokeWidth="2"/>
                <path d="M12 13v4" stroke="#8B0000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 17h6" stroke="#8B0000" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="mt-1 font-semibold">Instant Delivery</span>
            </>
          ) : (
            <>
              {/* Truck Icon */}
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="7" width="15" height="10" rx="2" stroke="#8B0000" strokeWidth="2"/><path d="M16 11h3.382a2 2 0 0 1 1.789 1.106l1.382 2.764A2 2 0 0 1 20.764 17H19" stroke="#8B0000" strokeWidth="2"/><circle cx="6" cy="19" r="1.5" fill="#e0a106" stroke="#8B0000" strokeWidth="1.2"/><circle cx="18" cy="19" r="1.5" fill="#e0a106" stroke="#8B0000" strokeWidth="1.2"/></svg>
              <span className="mt-1 font-semibold">Free Shipping</span>
            </>
          )}
        </div>
      </div>
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