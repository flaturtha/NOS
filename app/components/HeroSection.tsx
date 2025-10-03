import type { AdVariant } from "../data/adVariants";

interface HeroSectionProps {
  onCtaClick: () => void;
  adVariant?: AdVariant | null;
}

export default function HeroSection({ onCtaClick, adVariant }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <picture className="w-full h-full lg:hidden">
          <source srcSet={adVariant?.images.mobile || "/images/landing/hero_mobile.avif"} type="image/avif" />
          <source srcSet={adVariant?.images.mobile || "/images/landing/hero_mobile.webp"} type="image/webp" />
          <img
            src={adVariant?.images.mobile || "/images/landing/hero_mobile.jpg"}
            alt="Mystery Collection Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Desktop Background */}
        <picture className="hidden lg:block w-full h-full">
          <source srcSet={adVariant?.images.desktop || "/images/landing/hero_desktop.avif"} type="image/avif" />
          <source srcSet={adVariant?.images.desktop || "/images/landing/hero_desktop.webp"} type="image/webp" />
          <img
            src={adVariant?.images.desktop || "/images/landing/hero_desktop.jpg"}
            alt="Mystery Collection Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Slight Darkening Overlay for Better Text Readability */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.50)'}}></div>
      </div>

      {/* Logo - Positioned directly on hero section */}
      {/* Mobile Logo - Centered between red bar and yellow text */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 lg:hidden">
        <img
          src="/images/logos/atticus_e.png"
          alt="Atticus E Logo"
          className="h-10 sm:h-12"
          loading="eager"
        />
      </div>
      {/* Desktop Logo - Top-left */}
      <div className="absolute top-16 left-8 z-20 hidden lg:block">
        <img
          src="/images/logos/logo_full_w.png"
          alt="Tales of Murder Logo"
          className="h-12 sm:h-16"
          loading="eager"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 max-w-3xl mx-auto lg:max-w-5xl">
        {/* Main Headline and other content - Centered with minimal top padding */}
        <div className="text-center w-full pt-8 sm:pt-12 lg:pt-16">
          {/* Yellow Ad Headline Block */}
          <div className="bg-yellow-400/65 text-black px-6 py-4 rounded-lg mb-8 mx-auto max-w-2xl">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold italic leading-tight">
            &ldquo;{adVariant?.text || "I came for the mystery. I stayed for the rooftop chases and secret panels."}&rdquo;
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 lg:space-y-0 mb-6">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-white leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              10 LOST MYSTERIES.
            </h2>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-white leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              ONE BUNDLE.
            </h2>
            <h2 className="text-6xl sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-yellow-400 leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              YOURS TONIGHT.
            </h2>
          </div>

          {/* Price Display */}
          <div className="mb-6">
            <p className="text-white text-xl sm:text-2xl line-through mb-1">
              ONLY $99.99
            </p>
            <p className="text-yellow-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none">
              $44.99
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 animate-pulse hover:animate-none"
          >
            Yes—Send Me All 10 Gaslight Pulp Novels!
          </button>

          {/* $1 Ebook Alternative Link */}
          <div className="text-sm text-gray-300 hover:text-gray-100 italic transition-colors duration-200 font-fold mt-8 text-center">
            <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
            <a 
              href="https://offers.talesofmurder.com/choose-your-1-dollar-ebook" 
              className="text-sm text-gray-300 hover:text-gray-100 italic transition-colors duration-200 underline font-bolder"
            >
              Click to get your $1 ebook.
            </a>
            <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
