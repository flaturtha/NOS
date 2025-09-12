import { useState, useEffect } from "react";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const [selectedCover, setSelectedCover] = useState<any>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showDesktopExitPopup, setShowDesktopExitPopup] = useState(false);
  const [hasSeenPrice, setHasSeenPrice] = useState(false);
  const [hasScrolledBack, setHasScrolledBack] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [hasTriggeredDesktopExit, setHasTriggeredDesktopExit] = useState(false);

  // Book cover data - duplicated for infinite scrolling effect
  const bookCovers = [
    {
      image: "/images/covers/copper-king.jpg",
      title: "The Copper King",
      date: "1923",
      teaser: "A tale of power, corruption, and redemption in the copper mines of Montana.",
      blurb: "When young engineer John Sterling discovers a massive copper deposit, he becomes embroiled in a web of corporate intrigue, political corruption, and family secrets that threaten to destroy everything he holds dear."
    },
    {
      image: "/images/covers/missing-girl.jpg",
      title: "The Missing Girl",
      date: "1924",
      teaser: "A detective's desperate search through the dark underbelly of the city.",
      blurb: "Private investigator Sarah Chen must navigate the dangerous world of organized crime and political corruption to find a missing heiress, uncovering a conspiracy that reaches the highest levels of society."
    },
    {
      image: "/images/covers/gov-gum.png",
      title: "Government Gum",
      date: "1925",
      teaser: "A satirical look at bureaucracy gone mad in the roaring twenties.",
      blurb: "When a simple gum wrapper becomes classified as government property, it sets off a chain reaction of bureaucratic absurdity that threatens to bring the entire city to a standstill."
    },
    {
      image: "/images/covers/among-the-chinamen.jpg",
      title: "Among the Chinamen",
      date: "1926",
      teaser: "A western adventure that challenges cultural boundaries and prejudices.",
      blurb: "Rancher Tom Wilson finds himself stranded in a Chinese mining camp, where he must overcome his own prejudices and learn to survive in a world completely foreign to his experience."
    },
    {
      image: "/images/covers/ding.jpg",
      title: "Ding",
      date: "1927",
      teaser: "A mysterious bell that tolls for the dead and the living alike.",
      blurb: "When the ancient bell of St. Mary's begins ringing on its own, it heralds a series of supernatural events that force the townspeople to confront their deepest fears and darkest secrets."
    },
    {
      image: "/images/covers/hi-lo-jak.jpg",
      title: "Hi-Lo Jak",
      date: "1928",
      teaser: "A high-stakes poker game where the stakes are life and death.",
      blurb: "Professional gambler Hi-Lo Jak finds himself in a deadly game of poker where the chips are worth more than money, and losing means losing everything he's ever loved."
    },
    {
      image: "/images/covers/desert-trail.jpg",
      title: "Desert Trail",
      date: "1929",
      teaser: "A journey through the unforgiving desert that tests the limits of human endurance.",
      blurb: "Three travelers become lost in the vast desert, where they must rely on each other to survive while being hunted by something that doesn't belong in this world."
    },
    {
      image: "/images/covers/yellow-crooks.jpg",
      title: "Yellow Crooks",
      date: "1930",
      teaser: "A gang of criminals with a mysterious connection to the color yellow.",
      blurb: "Detective Mike O'Connor investigates a series of robberies committed by criminals who leave behind yellow calling cards, leading him into a world of organized crime and supernatural mystery."
    },
    {
      image: "/images/covers/chinese-idol.jpg",
      title: "The Chinese Idol",
      date: "1931",
      teaser: "An ancient artifact that brings both fortune and doom to its possessor.",
      blurb: "When archaeologist Dr. Emily Chen discovers a mysterious Chinese idol, she unleashes forces that have been dormant for centuries, forcing her to choose between knowledge and survival."
    },
    {
      image: "/images/covers/juggler.png",
      title: "The Juggler",
      date: "1932",
      teaser: "A circus performer whose act conceals a deadly secret.",
      blurb: "The mysterious juggler who never speaks performs impossible feats that defy the laws of physics, but when a series of deaths occur during his performances, the truth becomes more terrifying than anyone could imagine."
    }
  ];

  // Create infinite scrolling array by duplicating the covers
  const infiniteCovers = [...bookCovers, ...bookCovers];



  // Auto-scroll mobile carousel with infinite scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoverIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // When we reach the end of the first set, seamlessly continue to the second set
        if (nextIndex >= bookCovers.length) {
          // Reset to 0 but maintain the visual position
          return 0;
        }
        return nextIndex;
      });
    }, 4000); // Change cover every 4 seconds

    return () => clearInterval(interval);
  }, [bookCovers.length]);

  // Track scroll to update sticky bar content and detect exit intent
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / documentHeight) * 100;

      // Update basic scroll state
      setHasScrolled(currentScrollY > 50);

      // Check if user has seen the price (second CTA section)
      if (currentScrollY > 600) { // Approximate position of second price display
        setHasSeenPrice(true);
      }

      // Check if user has reached 80-90% of page
      if (scrollPercentage >= 80) {
        setHasReachedBottom(true);
      }

      // Detect rapid upward scrolling (exit intent)
      if (hasSeenPrice && currentScrollY < lastScrollY && scrollSpeed > 30) {
        setHasScrolledBack(true);
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Show popup after brief delay to avoid false triggers
        scrollTimeout = setTimeout(() => {
          if (hasSeenPrice && hasScrolledBack && !showExitPopup) {
            setShowExitPopup(true);
          }
        }, 500);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasSeenPrice, hasScrolledBack, showExitPopup]);

  // Show popup if user reaches bottom without clicking CTA
  useEffect(() => {
    if (hasReachedBottom && !showExitPopup) {
      const timer = setTimeout(() => {
        setShowExitPopup(true);
      }, 2000); // Wait 2 seconds after reaching bottom
      
      return () => clearTimeout(timer);
    }
  }, [hasReachedBottom, showExitPopup]);

  // Desktop exit intent detection (mouse movement to top of viewport)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      
      // Desktop exit intent: mouse moves to top 50px of viewport
      if (e.clientY <= 50 && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup) {
        setHasTriggeredDesktopExit(true);
        setShowDesktopExitPopup(true);
      }
    };

    // Only add desktop exit intent on larger screens
    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasSeenPrice, hasTriggeredDesktopExit, showDesktopExitPopup]);

  // Desktop visibility change detection (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup) {
        setHasTriggeredDesktopExit(true);
        setShowDesktopExitPopup(true);
      }
    };

    // Only add on larger screens
    if (window.innerWidth >= 1024) {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasSeenPrice, hasTriggeredDesktopExit, showDesktopExitPopup]);

  const handleCtaClick = () => {
    setShowModal(true);
  };

  const handleExitPopupClose = () => {
    setShowExitPopup(false);
  };

  const handleDesktopExitPopupClose = () => {
    setShowDesktopExitPopup(false);
  };

  const handleBundleClick = () => {
    setShowExitPopup(false);
    setShowModal(true);
  };

  const handleDesktopBundleClick = () => {
    setShowDesktopExitPopup(false);
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with GHL
    // For now, we'll simulate the redirect
    console.log("Form submitted with email:", email);
    
    // Redirect to GHL funnel (you'll need to replace this URL)
    const ghlUrl = `https://your-ghl-funnel.com?email=${encodeURIComponent(email)}`;
    window.location.href = ghlUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Hello Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#8b0000] text-white py-2 px-4 text-center text-sm z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
          <a href="#special-offer" className="hover:underline font-bolder">Click to get your $1 ebook!</a>
          {!hasScrolled && (
            <>
              <span className="hidden sm:inline">•</span>
              <span className="italic">Read about the special offer below</span>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-3 h-3 text-[#8b0000] transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hero Section - Background Image with Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <img
            src="/images/landing/hero_mobile.png"
            alt="Mystery Collection Background"
            className="w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Background */}
          <img
            src="/images/landing/hero_desktop.png"
            alt="Mystery Collection Background"
            className="hidden lg:block w-full h-full object-cover"
          />
          {/* Slight Darkening Overlay for Better Text Readability */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.50)'}}></div>
        </div>

        {/* Logo - Positioned directly on hero section */}
                       {/* Mobile Logo - Centered at top */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 lg:hidden">
                 <img
                   src="/images/logos/atticus_e.png"
                   alt="Atticus E Logo"
                   className="h-10 sm:h-12"
                 />
               </div>
               {/* Desktop Logo - Top-left */}
               <div className="absolute top-4 left-8 z-20 hidden lg:block">
                 <img
                   src="/images/logos/logo_full_w.png"
                   alt="Tales of Murder Logo"
                   className="h-12 sm:h-16"
                 />
               </div>

                       {/* Content Overlay */}
               <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 max-w-3xl mx-auto lg:max-w-5xl">
                           {/* Main Headline and other content - Centered with minimal top padding */}
                 <div className="text-center w-full pt-8 sm:pt-12 lg:pt-16">
            {/* Yellow Ad Headline Block */}
            <div className="bg-yellow-400/65 text-black px-6 py-4 rounded-lg mb-8 mx-auto max-w-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                I came for the mystery. I stayed for the rooftop chases and secret panels.
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
                     onClick={handleCtaClick}
                     className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 animate-pulse hover:animate-none"
                   >
                     Yes—Send Me All 10 Gaslight Pulp Novels!
                   </button>

                   {/* $1 Ebook Alternative Link */}
                   <div className="text-sm text-gray-300 hover:text-white italic transition-colors duration-200 font-fold mt-8 text-center">
                    <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
                     <a 
                       href="#" 
                       className="text-sm text-gray-300 hover:text-white italic transition-colors duration-200 underline font-bolder"
                     >
                      Click to get your $1 ebook.
                     </a>
                     <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
                   </div>
          </div>
        </div>
                   </section>

             {/* Book Cover Carousel Section */}
             <section className="py-12 sm:py-16 bg-gray-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   BINGE TEN THRILLING GASLIGHT PULP NOVELS
                 </h2>
                 
                 {/* Mobile Carousel - Full Width Covers */}
                 <div className="lg:hidden">
                   <div className="relative overflow-hidden w-full">
                     <div className="flex transition-transform duration-500 ease-in-out w-full" style={{
                       transform: `translateX(-${currentCoverIndex * 100}%)`
                     }}>
                       {bookCovers.map((cover, index) => (
                         <div key={index} className="w-full flex-shrink-0 px-4">
                           <div 
                             className="relative cursor-pointer group w-full"
                             onClick={() => setSelectedCover(cover)}
                           >
                             <img
                               src={cover.image}
                               alt={cover.title}
                               className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
                               onError={(e) => {
                                 console.error('Image failed to load:', cover.image);
                                 e.currentTarget.style.backgroundColor = 'red';
                               }}
                             />
                             
                             {/* Eye icon overlay on each cover */}
                             <div className="absolute inset-0 flex items-center justify-center">
                               <div className="bg-white/70 w-12 h-12 rounded-full flex items-center justify-center">
                                 <span className="text-black/50 text-3xl font-bold">👁</span>
                               </div>
                             </div>
                             
                           </div>
                         </div>
                       ))}
                     </div>
                     
                     {/* Navigation Dots */}
                     <div className="flex justify-center mt-6 space-x-2">
                       {bookCovers.map((_, index) => (
                         <button
                           key={index}
                           onClick={() => setCurrentCoverIndex(index)}
                           className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                             index === currentCoverIndex ? 'bg-red-600' : 'bg-gray-300'
                           }`}
                         />
                       ))}
                     </div>
                   </div>
                 </div>
                 
                 {/* Desktop Carousel - Single Row with Smooth Horizontal Scrolling */}
                 <div className="hidden lg:block">
                   <div className="overflow-hidden group">
                     <div className="flex gap-6 animate-scroll group-hover:pause" style={{ 
                       minWidth: 'max-content',
                       animation: 'scroll 30s linear infinite'
                     }}>
                       {infiniteCovers.map((cover, index) => (
                         <div key={index} className="relative cursor-pointer group flex-shrink-0" style={{ width: '200px' }}>
                           <div 
                             className="relative"
                             onClick={() => setSelectedCover(cover)}
                           >
                             <img
                               src={cover.image}
                               alt={cover.title}
                               className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                               onError={(e) => {
                                 console.error('Image failed to load:', cover.image);
                                 e.currentTarget.style.backgroundColor = 'red';
                               }}
                             />

                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
                          </section>

             {/* Value Proposition Section */}
             <section className="py-12 sm:py-16 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="hidden text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-800 hero-subheadline">
                   Value Proposition
                 </h2>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                   <div className="text-center">
                     <div className="text-4xl mb-4">📚</div>
                     <h3 className="text-lg font-semibold mb-2 text-gray-800">
                       <strong>I've collected & restored 10 eBooks</strong> (with more coming soon) — complete evening reads
                     </h3>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-4xl mb-4">⚡</div>
                     <h3 className="text-lg font-semibold mb-2 text-gray-800">
                       <strong>I've made them instantly downloadable</strong> — buy now &amp; start reading tonight
                     </h3>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-4xl mb-4">💻</div>
                     <h3 className="text-lg font-semibold mb-2 text-gray-800">
                       <strong>I'm including Kindle & ePub</strong> — any device, anywhere, yours to share
                     </h3>
                   </div>
                   
                   <div className="text-center hidden">
                     <div className="text-4xl mb-4">💵??</div>
                     <h3 className="text-lg font-semibold mb-2 text-gray-800">
                       <strong>I've priced them fair</strong> — only $4.50 each
                     </h3>
                   </div>
                 </div>
                 
                 <div className="mt-12">
                   <button
                     onClick={handleCtaClick}
                     className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400"
                   >
                     Give me 10 Gaslight Pulp Novels
                   </button>
                 </div>
                 {/* $1 Ebook Alternative Link */}
                 <div className="text-sm text-gray-400 hover:text-white italic transition-colors duration-200 font-fold mt-8 text-center">
                    <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
                     <a 
                       href="#" 
                       className="text-sm text-gray-400 hover:text-white italic transition-colors duration-200 underline font-bolder"
                     >
                      Click to get your $1 ebook.
                     </a>
                     <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
                   </div>
               </div>
             </section>

             {/* What's Inside the Bundle Section */}
             <section className="py-12 sm:py-16 bg-gray-50">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   What's Inside the Bundle?
                 </h2>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   You're not just getting "some old scans." You're getting 10 full-length novels, restored and formatted so you can enjoy them tonight — and forever.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   Each ebook is delivered in both Kindle and ePub formats, so you can read on <em className="italic text-[#8b0000]">any device you already own</em> — Kindle, Kobo, iPad, Nook, phone, or computer. No restrictions. No padlocks.
                 </p>
                 
                 <p className="text-lg text-gray-600 font-bold mt-12 mb-8 text-center leading-relaxed">
                   Here's a taste of what's waiting inside:
                 </p>
                 
                 <div className="space-y-4 mb-8">
                   <p className="text-lg text-gray-700 leading-relaxed">
                     • <strong>THE BRADYS AND THE CHINESE IDOL</strong> — A miser's murder, a missing idol, rooftop chases, and a secret criminal society in the heart of New York.
                   </p>
                   <p className="text-lg text-gray-700 leading-relaxed">
                     • <strong>THE BRADYS AND THE MISSING GIRL</strong> — A vanished heiress, a forged letter, Southern impostors, and the Bradys racing through Florida's infested swamps to uncover the truth.
                   </p>
                   <p className="text-lg text-gray-700 leading-relaxed">
                     • <strong>THE BRADYS AMONG THE CHINAMEN</strong> — A severed head in a basket, a vanished body, opium-den fiends, and the Bradys chasing killers through the shadows of Chinatown.
                   </p>
                 </div>
                 
                 <p className="text-lg text-gray-700 text-left leading-relaxed">
                   And that's just three of the ten <em>(out of more than 1,300 originally published!)</em>. You'll have an entire library of mysteries to binge, one after another, for less than the price of a single new book.
                 </p>
               </div>
             </section>

             {/* Problem/Agitation Section */}
             <section className="py-12 sm:py-16 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   Tired of the endless hunt for a good mystery?
                 </h2>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   Finding a classic detective story shouldn't feel like solving a case itself.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   You know the feeling. You just want a gripping mystery to sink into — but the search leaves you more exhausted than entertained.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   I've spent years digging into what readers go through, and it's always the same story:
                 </p>
                 
                 <div className="space-y-6 mb-8">
                   <div className="flex items-start space-x-4">
                     <div className="text-2xl">🔎</div>
                     <div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <strong>I've Seen How Hard the Hunt Is</strong> — Originals are buried in fragile archives, and the scans online are riddled with errors, missing words, and nonsense symbols. They're unreadable.
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4">
                     <div className="text-2xl">🖥️</div>
                     <div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <strong>I've Tried the "Free" Options Too</strong> — blurry pages, broken formatting, missing endings. Hours wasted, story ruined.
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4">
                     <div className="text-2xl">📚</div>
                     <div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <strong>I've Watched the Market Fill with Junk</strong> — cheap "reprints," filler anthologies, even AI-generated knock-offs. Not the authentic stories you deserve.
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4">
                     <div className="text-2xl">⏳</div>
                     <div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <strong>I've Seen Readers Give Up in Frustration</strong> — endless scrolling, endless disappointment, and nothing worth reading that night.
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex items-start space-x-4 hidden">
                     <div className="text-2xl">💸</div>
                     <div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <strong>I've Compared the Costs</strong> — buying individually, each book is $9.99 plus $6.43 shipping. That's $164.20 for ten. The bundle? $44.95 + $9.40 shipping = $54.39. You save $109.81 — including $54.90 just on shipping.
                       </p>
                     </div>
                   </div>
                 </div>
                 
                 <p className="text-lg text-gray-700 text-center leading-relaxed">
                   That's why I've done the hard work for you — and turned frustration into a collection you can finally enjoy.
                 </p>
               </div>
             </section>

             {/* Solution/Benefits Section */}
             <section className="py-12 sm:py-16 bg-gray-50">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   Finally — A Mystery Collection You Can Actually Read.
                 </h2>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   10 gripping Brady's adventures, fully restored and bundled for less than half price.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   I've spent hours restoring these dime novels by hand — fixing errors, cleaning text, and formatting them so they read smoothly on every device.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   I've done this because I'm a reader too. I wanted editions that were effortless, authentic, and worth keeping forever. And now, you can enjoy them the same way. Ten adventures. Ten evenings of page-turning suspense. All in one unbeatable bundle.
                 </p>
                 
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                   <div className="text-center">
                     <div className="text-3xl mb-3">📚</div>
                     <p className="text-lg text-gray-700 leading-relaxed">
                       <strong>I've Gathered 10 Complete Mysteries</strong> — ten full evenings with Old & Young King Brady
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-3xl mb-3">👓</div>
                     <p className="text-lg text-gray-700 leading-relaxed">
                       <strong>I've Restored Every Page</strong> — no typos, no smudges, no frustration
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-3xl mb-3">🔓</div>
                     <p className="text-lg text-gray-700 leading-relaxed">
                       <strong>I've Made Them Yours Forever</strong> — DRM-free, yours to keep and share
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-3xl mb-3">🚫</div>
                     <p className="text-lg text-gray-700 leading-relaxed">
                       <strong>I've Protected Them From Junk</strong> — not sloppy retypes, not AI fakes, only authentic text
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-3xl mb-3">💵</div>
                     <p className="text-lg text-gray-700 leading-relaxed">
                       <strong>I've Cut the Price in Half</strong> — normally $99.99; today, $44.95 (less than $4.50 per book, <em>only on this page!</em>)
                     </p>
                   </div>
                 </div>
                 
                 <p className="text-lg text-gray-700 text-center leading-relaxed">
                   But don't just take my word for it — here's what other readers are saying …
                 </p>
               </div>
             </section>

             {/* Social Proof & Trust Section */}
             <section className="py-12 sm:py-16 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   Readers Can't Get Enough of the Bradys.
                 </h2>
                 
                 <div className="grid md:grid-cols-3 gap-8 mb-8">
                   <div className="text-center p-6 bg-gray-50 rounded-lg">
                     <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                       "I've wasted so much time on awful scans. This bundle is a lifesaver — the stories are gripping and finally readable."
                     </p>
                     <p className="text-gray-600">— Eleanor V., 72</p>
                   </div>
                   
                   <div className="text-center p-6 bg-gray-50 rounded-lg">
                     <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                       "I was hooked from page one. Perfect for quiet afternoons with tea. I couldn't stop at just one."
                     </p>
                     <p className="text-gray-600">— Doris W., 68</p>
                   </div>
                   
                   <div className="text-center p-6 bg-gray-50 rounded-lg">
                     <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                       "It feels like opening a whole library at once. Ten stories for the price of only four."
                     </p>
                     <p className="text-gray-600">— Bill R., 75</p>
                   </div>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                   Join Other Readers Who Refuse to Let These Stories Die
                 </h3>
                 
                 <div className="text-center mb-8">
                   <p className="text-lg text-gray-700 font-bold mb-2">
                     If bought separately: <span className="line-through">$164.20</span>
                   </p>
                   <p className="text-3xl font-bold text-red-600 mb-2">
                     Today: $44.95
                   </p>
                   <p className="text-lg text-gray-700 italic">
                     Includes both Kindle & ePub editions — yours&nbsp;forever.
                   </p>
                 </div>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   I'm not a big company pushing out generic reprints. I'm one reader, doing the work by hand, because I believe these stories are too good to be lost.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
                   When you order this bundle, you're not just buying ebooks. You're becoming part of a group of readers who care about preserving our literary past — and keeping the thrill of classic mysteries alive.
                 </p>
                 
                 <p className="text-lg text-gray-700 text-left leading-relaxed">
                   Every order supports the restoration of even more forgotten novels. This is bigger than one collection. It's about rescuing hundreds, even thousands, of stories and bringing them back where they belong — in the hands of readers like you.
                 </p>
               </div>
             </section>

             {/* Differentiation Section */}
             <section className="py-12 sm:py-16 bg-gray-50">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   Why Settle for Frustration? Choose the Smart Way.
                 </h2>
                 
                 <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                   I've built the clean, affordable collection others don't offer.
                 </p>
                 
                 <div className="overflow-x-auto mb-8">
                   <table className="w-full border-collapse border border-gray-300">
                     <thead>
                       <tr className="bg-gray-100">
                         <th className="border border-gray-300 p-4 text-left font-semibold">Feature</th>
                         <th className="border border-gray-300 p-4 text-left font-semibold">Messy Scans</th>
                         <th className="border border-gray-300 p-4 text-left font-semibold">Single Editions</th>
                         <th className="border border-gray-300 p-4 text-left font-semibold">My 10-Ebook Bundle</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="border border-gray-300 p-4 font-semibold">Price</td>
                         <td className="border border-gray-300 p-4">"Free" (worthless)</td>
                         <td className="border border-gray-300 p-4">$9.99+ each</td>
                         <td className="border border-gray-300 p-4">$4.50/book</td>
                       </tr>
                       <tr className="bg-gray-50">
                         <td className="border border-gray-300 p-4 font-semibold">Quality</td>
                         <td className="border border-gray-300 p-4">Blurry, incomplete</td>
                         <td className="border border-gray-300 p-4">Restored but costly</td>
                         <td className="border border-gray-300 p-4">Professionally Restored</td>
                       </tr>
                       <tr>
                         <td className="border border-gray-300 p-4 font-semibold">Format</td>
                         <td className="border border-gray-300 p-4">Only PDFs</td>
                         <td className="border border-gray-300 p-4">Limited formats</td>
                         <td className="border border-gray-300 p-4">Kindle & ePub, DRM-Free</td>
                       </tr>
                       <tr className="bg-gray-50">
                         <td className="border border-gray-300 p-4 font-semibold">Content</td>
                         <td className="border border-gray-300 p-4">Random scraps</td>
                         <td className="border border-gray-300 p-4">One story at a time</td>
                         <td className="border border-gray-300 p-4">10 Complete Novels</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                   How It Works:
                 </h3>
                 
                 <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                   No confusion, no tech barriers. Here's exactly how it works:
                 </p>
                 
                 <div className="grid md:grid-cols-3 gap-8 mb-8">
                   <div className="text-center">
                     <div className="text-4xl mb-4">1</div>
                     <h4 className="text-xl font-semibold mb-3 text-gray-800">Order securely</h4>
                     <p className="text-gray-700 leading-relaxed">
                       Click the button and check out with confidence.
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-4xl mb-4">2</div>
                     <h4 className="text-xl font-semibold mb-3 text-gray-800">Download instantly</h4>
                     <p className="text-gray-700 leading-relaxed">
                       Your confirmation email will include links to a service called Bookfunnel where you can download (and re-download) both Kindle and ePub files.
                     </p>
                   </div>
                   
                   <div className="text-center">
                     <div className="text-4xl mb-4">3</div>
                     <h4 className="text-xl font-semibold mb-3 text-gray-800">Start reading tonight</h4>
                     <p className="text-gray-700 leading-relaxed">
                       Copy the files <em>(full instructions on Bookfunnel)</em> to your device, open, and enjoy. Ten nights of mystery are waiting for you.
                     </p>
                   </div>
                 </div>
               </div>
             </section>

             {/* Guarantee Section */}
             <section className="py-12 sm:py-16 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 hero-subheadline">
                   The Reader's Honor Guarantee
                 </h2>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
                   I do things differently here at <span className="text-[#8b0000] uppercase font-[Breamcatcher] font-bold tracking-wider">Tales of Murder Press</span> — because I'm not just selling books, I'm building a community of readers who value trust as much as stories.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
                   If you're not absolutely delighted with the mysteries in this collection, I'll give you a full 100% refund. No forms. No hoops. Just hit "reply" on your order confirmation email and let me know. Of course, I'd like to hear why — formatting issues, download problems — so I can improve them for other readers.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
                   I trust you to be honest. I'd rather lose a sale than leave a reader unhappy. Your satisfaction will always matter more to me than the money.
                 </p>
                 
                 <div className="text-center">
                   <div className="text-4xl mb-4">🛡️</div>
                   <p className="text-xl font-semibold text-gray-800">
                     <strong>100% Money-Back Guarantee</strong>
                   </p>
                   <p className="text-gray-700 leading-relaxed">
                     No questions asked
                   </p>
                 </div>
               </div>
             </section>

             {/* FAQ Section */}
             <section className="py-12 sm:py-16 bg-gray-50">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   Frequently Asked Questions
                 </h2>
                 
                 <div className="space-y-6">
                   <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">
                       Do I need a Kindle to read these?
                     </h3>
                     <p className="text-gray-700 leading-relaxed">
                       No. Every book comes in both Kindle (MOBI/AZW3) and ePub formats. That means you can read them on Kindle, Kobo, Nook, iPad, or any other device. And move them when you change!
                     </p>
                   </div>
                   
                   <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">
                       Are these the full books?
                     </h3>
                     <p className="text-gray-700 leading-relaxed">
                       Yes. These are complete, standalone novels — not samples, not excerpts. Each story was originally published as a full BRADY'S SECRET SERVICE DETECTIVE dime novel.
                     </p>
                   </div>
                   
                   <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">
                       What if I lose the files?
                     </h3>
                     <p className="text-gray-700 leading-relaxed">
                       No problem. Your download links remain active, and you can always request a resend. I want you to feel secure knowing your books are yours to keep forever. Bookfunnel will always have your download links available.
                     </p>
                   </div>
                   
                   <div className="bg-white p-6 rounded-lg shadow-sm">
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">
                       Can I share them with my spouse or friend?
                     </h3>
                     <p className="text-gray-700 leading-relaxed">
                       Yes. These are DRM-free. You can back them up, copy them to multiple devices, and share within your household. In fact, I encourage that … the more people that read these great books, the more we honor their authors!
                     </p>
                   </div>
                 </div>
               </div>
             </section>

             {/* Final CTA Section */}
             <section className="py-12 sm:py-16 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed font-bold">
                   This bundle is available today for less than half price — just $44.95 for all ten novels.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed hidden">
                   Why the discount? Because this is the introductory price for the first Brady's collection I've restored. As I add more books to the series, the regular price will return.
                 </p>
                 
                 <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                   Right now is the best time to start your Bradys library — at a price that makes sense.
                 </p>
                 
                 <div className="mb-8">
                   <p className="text-2xl text-gray-700 mb-2">
                     <span className="line-through">Just $99.99</span> <span className="text-3xl font-bold text-red-600">$44.95</span>
                   </p>
                 </div>
                 
                 <button
                   onClick={handleCtaClick}
                   className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400"
                 >
                   Get All 10 BRADYS — $44.95
                 </button>

                 {/* $1 Ebook Alternative Link */}
                 <div className="text-sm text-gray-400 hover:text-white italic transition-colors duration-200 font-fold mt-8 text-center">
                    <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
                     <a 
                       href="#" 
                       className="text-sm text-gray-400 hover:text-white italic transition-colors duration-200 underline font-bolder"
                     >
                      Click to get your $1 ebook.
                     </a>
                     <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
                   </div>

               </div>
             </section>

             {/* Book Cover Detail Modal */}
             {selectedCover && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                 <div className="bg-white rounded-lg max-w-sm sm:max-w-md w-full p-4 sm:p-6">
                   <div className="flex justify-between items-center mb-4">
                     <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{selectedCover.title}</h3>
                     <button
                       onClick={() => setSelectedCover(null)}
                       className="text-gray-400 hover:text-gray-600 text-xl"
                     >
                       ✕
                     </button>
                   </div>
                   
                   <div className="space-y-4">
                     <img
                       src={selectedCover.image}
                       alt={selectedCover.title}
                       className="w-full h-auto max-h-48 object-contain rounded-lg shadow-md"
                     />
                     
                     <div className="text-center">
                       <p className="text-sm text-gray-500 mb-2">{selectedCover.date}</p>
                       <p className="text-base font-semibold text-gray-700 mb-3">{selectedCover.teaser}</p>
                       <p className="text-sm text-gray-600 leading-relaxed">{selectedCover.blurb}</p>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {/* GHL Form Modal - Mobile Optimized */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-base font-semibold text-gray-800 uppercase"><span className="">Reserve Your 10-Book Bundle Today</span></h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="meter">
                <span style={{ width: '50%' }}></span>
              </div>
              <div className="absolute inset-0 flex items-center">
                <p className="text-sm text-white ml-4">Order Processing &hellip;</p>
              </div>
            </div>
            
            {/* Headline */}
            <div className="text-center mt-8 mb-8">
              <h4 className="text-lg sm:text-2xl font-medium text-gray-800 font-bold leading-relaxed">
                To reserve your copy, please enter your email address below:
              </h4>
            </div>
            
            {/* GHL Form */}
            <div className="w-full" id="ghl-form">
              <div className="form-iframe-wrapper">
                <iframe
                  src="https://link.goexpandnow.com/widget/form/9oIwOEVxyUx4GgEzgNPK"
                  style={{
                    width: "100%",
                    height: "195px",
                    border: "none",
                    borderRadius: "3px"
                  }}
                  id="inline-9oIwOEVxyUx4GgEzgNPK"
                  data-layout="{'id':'9oIwOEVxyUx4GgEzgNPK','name':'NOS Landing Page Form','type':'form','width':400,'height':432,'layout':'embed','data-height':'432','data-layout-iframe-id':'inline-9oIwOEVxyUx4GgEzgNPK','data-form-id':'9oIwOEVxyUx4GgEzgNPK'}"
                  title="NOS Landing Page Form"
                />
              </div>
              <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
            </div>
            
            {/* Disclaimer */}
            <div className="text-center mt-2">
              <p className="text-xs text-gray-500 leading-relaxed italic">
              By submitting, you'll reserve your 10-book bundle. And get updates &amp; exclusive offers. We respect your privacy—unsubscribe anytime.
              </p>
            </div>
            

          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Wait! Don't Miss Out!</h3>
              <button
                onClick={handleExitPopupClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Not ready to buy a full bundle? Not sure if you'll like the BRADYS SECRET SERVICE DETECTIVES book? No worries!
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Remember why you clicked my ad in the 1st place … to get your $1 ebook? Click below to select your story from my small (but growing!) collection!
              </p>
              
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  GET MY $1 BRADYS GASLIGHT PULP NOVEL
                </a>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleBundleClick}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-200"
                >
                  No, I want the 10-book bundle deal!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Exit Intent Popup */}
      {showDesktopExitPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Wait! Don't Miss Out!</h3>
              <button
                onClick={handleDesktopExitPopupClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Not ready to buy a full bundle? Not sure if you'll like the BRADYS SECRET SERVICE DETECTIVES book? No worries!
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Remember why you clicked my ad in the 1st place … to get your $1 ebook? Click below to select your story from my small (but growing!) collection!
              </p>
              
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  GET MY $1 BRADYS GASLIGHT PULP NOVEL
                </a>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleDesktopBundleClick}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-200"
                >
                  No, I want the 10-book bundle deal!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

             {/* Footer Section */}
             <footer className="bg-gray-100 text-gray-600 py-6 text-center">
               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
                   <p>&copy; 2024 Tales of Murder Press. All rights reserved.</p>
                   <a href="#" className="hover:text-gray-800 transition-colors duration-200">Privacy Policy</a>
                   <a href="#" className="hover:text-gray-800 transition-colors duration-200">Terms of Service</a>
                 </div>
               </div>
             </footer>
    </div>
  );
}
