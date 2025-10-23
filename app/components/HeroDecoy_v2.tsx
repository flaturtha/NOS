import type { AdVariant } from "../data/adVariants";

interface HeroDecoy_v2Props {
  onCollectionClick: () => void;
  onSingleClick: () => void;
  adVariant?: AdVariant | null;
}

export default function HeroDecoy_v2({ onCollectionClick, onSingleClick, adVariant }: HeroDecoy_v2Props) {
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

      {/* Logo - Positioned at the very top */}
      {/* Mobile Logo - Centered at top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 lg:hidden">
        <img
          src="/images/logos/logo_full_w.png"
          alt="Tales of Murder Logo"
          className="max-w-64 sm:max-w-80 h-auto"
          loading="eager"
        />
      </div>
      {/* Desktop Logo - Top-left */}
      <div className="absolute top-8 left-8 z-20 hidden lg:block">
        <img
          src="/images/logos/logo_full_w.png"
          alt="Tales of Murder Logo"
          className="max-w-48 sm:max-w-56 h-auto"
          loading="eager"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-8 max-w-6xl mx-auto">
        {/* Main Headline and other content - Centered with minimal top padding */}
        <div className="text-center w-full pt-2 sm:pt-3 lg:pt-4">
          {/* Yellow Ad Headline Block */}
          <div className="bg-yellow-400/65 text-black px-6 py-4 rounded-lg mb-6 lg:mb-4 mx-auto max-w-2xl">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold italic leading-tight">
            &ldquo;{adVariant?.text || "Murder. Opium. And a butler who definitely didn't do it."}&rdquo;
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-4 lg:mb-3">
            Get Your First Bradys Mystery&nbsp;Novel
          </h1>

          {/* Subhead */}
          <p className="text-gray-100 mb-6 lg:mb-4 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">THE BRADYS AND THE&nbsp;CHINESE&nbsp;IDOL</strong><br /><br />
            <span className="text-xl sm:text-2xl lg:text-2xl text-gray-200 italic">A complete 1903 detective mystery — professionally restored and ready to read.</span>
          </p>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex lg:items-stretch lg:gap-12 lg:mb-4 lg:justify-center lg:max-w-7xl lg:mx-auto">
            {/* Single Book Section - Left */}
            <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col justify-center">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <picture>
                    <source srcSet="/images/covers/chinese-idol.avif" type="image/avif" />
                    <source srcSet="/images/covers/chinese-idol.webp" type="image/webp" />
                    <img
                      src="/images/covers/chinese-idol.jpg"
                      alt="THE BRADYS AND THE CHINESE IDOL - Book Cover"
                      className="w-40 xl:w-44 h-auto rounded-lg shadow-2xl border-4 border-white/20"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
              <h4 className="text-white text-xl font-bold">
                One book — $7.99
              </h4>
            </div>

            {/* Bundle Section - Right */}
            <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col justify-center">
              <h3 className="text-2xl xl:text-3xl text-yellow-400 font-bold mb-3">
                Or Get the Complete 10-Book Collection & Save Big!
              </h3>
              <div className="mb-3">
                <p className="text-gray-300 text-lg line-through mb-1">
                  Normally $99.99
                </p>
                <p className="text-yellow-400 text-2xl xl:text-3xl font-bold mb-2">
                  50% OFF - Only $49.99!
                </p>
                <p className="text-green-400 text-sm font-semibold">
                  Buy 5, Get 5 Free — This Exclusive Offer Won't&nbsp;Last!
                </p>
              </div>
              <p className="text-gray-200 text-lg mb-3">
                Get all 10 restored Bradys mysteries in one bundle — professionally restored, DRM-free, and ready to read on any&nbsp;device.
              </p>
              
              {/* Bundle Covers Preview - Compact */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {[
                  "/images/covers/chinese-idol.jpg",
                  "/images/covers/copper-king.jpg", 
                  "/images/covers/missing-girl.jpg",
                  "/images/covers/gov-gum.jpg",
                  "/images/covers/among-the-chinamen.jpg",
                  "/images/covers/ding.jpg",
                  "/images/covers/hi-lo-jak.jpg",
                  "/images/covers/desert-trail.jpg",
                  "/images/covers/yellow-crooks.jpg",
                  "/images/covers/juggler.jpg"
                ].map((cover, index) => (
                  <div key={index} className="relative">
                    <picture>
                      <source srcSet={cover.replace('.jpg', '.avif')} type="image/avif" />
                      <source srcSet={cover.replace('.jpg', '.webp')} type="image/webp" />
                      <img
                        src={cover}
                        alt={`Book ${index + 1}`}
                        className="w-10 h-auto rounded shadow-lg border border-white/30 hover:scale-110 transition-transform duration-200"
                        loading="lazy"
                      />
                    </picture>
                    {index === 9 && (
                      <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        +
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden">
            {/* Book Cover Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <picture>
                  <source srcSet="/images/covers/chinese-idol.avif" type="image/avif" />
                  <source srcSet="/images/covers/chinese-idol.webp" type="image/webp" />
                  <img
                    src="/images/covers/chinese-idol.jpg"
                    alt="THE BRADYS AND THE CHINESE IDOL - Book Cover"
                    className="w-48 sm:w-56 h-auto rounded-lg shadow-2xl border-4 border-white/20"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>

            {/* Bundle Introduction */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl sm:text-3xl text-yellow-400 font-bold mb-4">
                Or Get the Complete 10-Book Collection & Save Big!
              </h3>
              <div className="mb-4">
                <p className="text-gray-300 text-lg line-through mb-1">
                  Normally $99.99
                </p>
                <p className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-2">
                  50% OFF - Only $49.99!
                </p>
                <p className="text-green-400 text-sm font-semibold">
                  Buy 5, Get 5 Free — This Exclusive Offer Won't&nbsp;Last!
                </p>
              </div>
              <p className="text-gray-200 text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
                Get all 10 restored Bradys mysteries in one bundle — professionally restored, DRM-free, and ready to read on any&nbsp;device.
              </p>
              
              {/* Bundle Covers Preview */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 max-w-4xl mx-auto">
                {[
                  "/images/covers/chinese-idol.jpg",
                  "/images/covers/copper-king.jpg", 
                  "/images/covers/missing-girl.jpg",
                  "/images/covers/gov-gum.jpg",
                  "/images/covers/among-the-chinamen.jpg",
                  "/images/covers/ding.jpg",
                  "/images/covers/hi-lo-jak.jpg",
                  "/images/covers/desert-trail.jpg",
                  "/images/covers/yellow-crooks.jpg",
                  "/images/covers/juggler.jpg"
                ].map((cover, index) => (
                  <div key={index} className="relative">
                    <picture>
                      <source srcSet={cover.replace('.jpg', '.avif')} type="image/avif" />
                      <source srcSet={cover.replace('.jpg', '.webp')} type="image/webp" />
                      <img
                        src={cover}
                        alt={`Book ${index + 1}`}
                        className="w-12 sm:w-16 h-auto rounded shadow-lg border border-white/30 hover:scale-110 transition-transform duration-200"
                        loading="lazy"
                      />
                    </picture>
                    {index === 9 && (
                      <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        +
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 text-sm italic">
                All 10 books professionally restored • Instant download • Read on any device
              </p>
            </div>
          </div>

          {/* Shared Benefits */}
          <div className="text-center mt-8 mb-4">
            <p className="text-gray-300 text-sm italic">
              All books professionally restored • Instant download • Read on any device
            </p>
          </div>

          {/* Choose Your Option Section */}
          <div className="mb-4 lg:mb-2">
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-1 lg:mb-2">
              Choose Your Option:
            </h2>
            <p className="text-gray-300 text-lg mb-3 lg:mb-4 max-w-2xl mx-auto">
              Start with one book, or get the complete collection and save over $50!
            </p>
            
            {/* CTA Buttons - Equal Visual Weight */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-4xl mx-auto">
              {/* Single Ebook Button - Left/Top */}
              <div className="flex-1">
                <button
                  onClick={onSingleClick}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py- lg:py-3 px-6 rounded-lg text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-gray-600 hover:border-gray-500 h-[125px] lg:h-[125px] flex flex-col items-center justify-center opacity-90"
                >
                  <span className="flex items-center gap-2">
                    📘 Single Ebook Novel - $7.99
                  </span>
                  <span className="text-sm font-normal mt-1 opacity-90">
                    20% Off — Regularly $9.99
                  </span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                    NO REFUNDS; ALL SALES FINAL
                  </span>
                </button>
              </div>

              {/* OR Text */}
              <div className="flex items-center justify-center lg:hidden">
                <span className="text-white text-lg font-bold">OR</span>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <span className="text-white text-xl font-bold">OR</span>
              </div>

              {/* Collection Button - Right/Bottom */}
              <div className="flex-1">
                <button
                  onClick={onCollectionClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 lg:py-3 px-6 rounded-lg text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 h-[125px] lg:h-[125px] flex flex-col items-center justify-center relative"
                >
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    RECOMMENDED
                  </div>
                  <span className="flex items-center gap-2 mt-4">
                    🔥 10-Book Collection - $49.99
                  </span>
                  <span className="text-sm font-normal mt-1 opacity-90">
                    Buy 5, Get 5 Free — Only $4.99 each
                  </span>
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mt-2 mb-6">
                    BEST VALUE
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Trust Line */}
          <p className="text-gray-300 text-lg font-medium">
            Instant delivery · DRM-free ·&nbsp;Read&nbsp;on&nbsp;any&nbsp;device
          </p>
        </div>
      </div>
    </section>
  );
}
