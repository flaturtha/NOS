import React, { ReactNode, useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FlourishDivider } from "./FlourishDivider";

interface LandingTemplateProps {
  headline: string;
  subhead: string;
  heroImageDesktop: string;
  heroImageMobile: string;
  offerSection: ReactNode;
  problemSection: ReactNode;
  solutionSection: ReactNode;
  bookGridSection: ReactNode;
  testimonialsSection: ReactNode;
  whyDifferentSection: ReactNode;
  guaranteeSection: ReactNode;
  faqSection: ReactNode;
  trustSignalsSection?: ReactNode;
}

export function LandingTemplate({
  headline,
  subhead,
  heroImageDesktop,
  heroImageMobile,
  offerSection,
  problemSection,
  solutionSection,
  bookGridSection,
  testimonialsSection,
  whyDifferentSection,
  guaranteeSection,
  faqSection,
  trustSignalsSection,
}: LandingTemplateProps) {
  const [showFloatingCTA, setShowFloatingCTA] = useState(true);
  const [animateBottomCTA, setAnimateBottomCTA] = useState(false);
  const bottomCTARef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bottomCTARef.current) {
        const rect = bottomCTARef.current.getBoundingClientRect();
        const readyHeadline = document.querySelector('[data-cta-fade]');
        let fadeOut = false;
        if (readyHeadline) {
          const headlineRect = readyHeadline.getBoundingClientRect();
          fadeOut = headlineRect.top < window.innerHeight * 0.7;
        }
        setShowFloatingCTA(!fadeOut);
        setAnimateBottomCTA(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontSize: "18px", lineHeight: "1.7" }}>
      {/* Top Banner with Title Only (subtle style) */}
      <div className="w-full bg-[#8B0000]/90 text-white flex items-center justify-center py-0.5 px-2 sticky top-0 z-50 border-b border-[#a94442] backdrop-blur-sm">
        <div className="flex items-center justify-center max-w-4xl w-full mx-auto">
          <span className="font-semibold text-[11px] md:text-xs tracking-widest text-center flex-1 uppercase opacity-80" style={{ fontVariant: 'small-caps' }}>
            VINTAGE MYSTERY SAMPLER BUNDLE
          </span>
        </div>
      </div>
      {/* Sticky CTA Bar */}
      {showFloatingCTA && (
        <div
          className={`fixed bottom-0 left-0 right-0 bg-[#8B0000] text-white p-4 z-40 shadow-lg transition-all duration-500 ${!showFloatingCTA ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transition: 'opacity 0.5s' }}
        >
          <div className="max-w-4xl mx-auto">
            <Button className="w-full bg-white text-[#8B0000] hover:bg-gray-100 font-bold text-lg py-4 min-h-[48px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-gray-200">
              Get my Bundle – $52.49
            </Button>
          </div>
        </div>
      )}
      {/* Hero Section with responsive image */}
      <section className="relative">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroImageMobile} />
          <img
            src={heroImageDesktop}
            alt="Vintage Mystery Sampler Hero"
            className="w-full h-96 md:h-[500px] object-cover object-center"
            style={{ display: 'block' }}
          />
        </picture>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-[20ch] mx-auto text-white drop-shadow-lg">
              {headline}
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-left mt-4 md:mt-12 gap-y-4 md:gap-y-8">
          <p className="text-lg md:text-2xl font-bold text-[#242424] text-left w-full mb-8">
            {subhead}
          </p>
          <FlourishDivider />
        </div>
      </section>
      {/* Offer Section */}
      {offerSection}
      {/* Problem Section */}
      {problemSection}
      {/* Solution Section */}
      {solutionSection}
      {/* Book Grid Section */}
      {bookGridSection}
      {/* Testimonials Section */}
      {testimonialsSection}
      {/* Why Different Section */}
      {whyDifferentSection}
      {/* Guarantee Section */}
      {guaranteeSection}
      {/* FAQ Section */}
      {faqSection}
      {/* Trust Signals Section (optional) */}
      {trustSignalsSection}
      {/* Footer */}
      <footer className="px-6 py-12 bg-[#242424] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg">Tales of Murder Press | Our Mission | Refund Policy</p>
          <div className="text-xl font-semibold">
            <span className="block mb-2">
              <span role="img" aria-label="phone" className="mr-2">📞</span>
              Questions? Call us at <a href="tel:+19729687337" className="underline hover:text-gray-300">(972) 96-MURDR</a> <span className="text-sm">(968-7337)</span>
            </span>
            <span className="block text-base font-normal text-gray-200">I'm a small, independent press, so may not answer live — but you can leave a message and I will check into the issue and call you back within 24 hours.</span>
          </div>
          <div className="text-xl font-semibold">
            Need help? Email me at{" "}
            <a href="mailto:atticus@crowmail.co" className="text-white underline hover:text-gray-300">
              atticus@crowmail.co
            </a>
          </div>
          <p className="font-bold text-lg">We stand by our books and our readers.</p>
        </div>
      </footer>
    </div>
  );
} 