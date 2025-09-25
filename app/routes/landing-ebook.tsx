import { useState, useEffect } from "react";
import StickyHelloBar from "../components/StickyHelloBar";
import HeroSection from "../components/HeroSection";
import BookCoverCarousel from "../components/BookCoverCarousel";
import ValueProposition from "../components/ValueProposition";
import WhatsInsideBundle from "../components/WhatsInsideBundle";
import ProblemAgitation from "../components/ProblemAgitation";
import SolutionBenefits from "../components/SolutionBenefits";
import SocialProofTrust from "../components/SocialProofTrust";
import Differentiation from "../components/Differentiation";
import Guarantee from "../components/Guarantee";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import BookCoverModal from "../components/BookCoverModal";
import GHLFormModal from "../components/GHLFormModal";
import ExitIntentPopup from "../components/ExitIntentPopup";
import DesktopExitIntentPopup from "../components/DesktopExitIntentPopup";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

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
  const [hasDismissedExitPopup, setHasDismissedExitPopup] = useState(false);
  const [hasDismissedDesktopExitPopup, setHasDismissedDesktopExitPopup] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Book cover data - duplicated for infinite scrolling effect
  const bookCovers = [
    {
      image: "/images/covers/copper-king.jpg",
      title: "The Copper King",
      date: "1923",
      teaser: "The Bradys probe Montana's Montague Mine after the Copper King vanishes, uncovering greed, betrayal, and a deadly conspiracy in the wild frontier.",
      blurb: "When young engineer John Sterling discovers a massive copper deposit, he becomes embroiled in a web of corporate intrigue, political corruption, and family secrets that threaten to destroy everything he holds dear."
    },
    {
      image: "/images/covers/missing-girl.jpg",
      title: "The Missing Girl",
      date: "1924",
      teaser: "The Bradys chase a forged letter and kidnappers from New York to Florida's swamps, uncovering voodoo charms, betrayal, and a deadly Southern plot.",
      blurb: "Private investigator Sarah Chen must navigate the dangerous world of organized crime and political corruption to find a missing heiress, uncovering a conspiracy that reaches the highest levels of society."
    },
    {
      image: "/images/covers/gov-gum.png",
      title: "Government Gum",
      date: "1925",
      teaser: "The Bradys track a vanished heiress from New York to San Francisco's Chinatown, facing Highbinders, betrayal, and a deadly fight for millions.",
      blurb: "When a simple gum wrapper becomes classified as government property, it sets off a chain reaction of bureaucratic absurdity that threatens to bring the entire city to a standstill."
    },
    {
      image: "/images/covers/among-the-chinamen.jpg",
      title: "Among the Chinamen",
      date: "1926",
      teaser: "A severed head, opium dens, and a secret society drag the Bradys into Chinatown's deadliest conspiracy of murder, betrayal, and hidden loyalties.",
      blurb: "Rancher Tom Wilson finds himself stranded in a Chinese mining camp, where he must overcome his own prejudices and learn to survive in a world completely foreign to his experience."
    },
    {
      image: "/images/covers/ding.jpg",
      title: "Ding",
      date: "1927",
      teaser: "The Bradys face hypnotism, murder, and a vanished fiancée in Dr. Ding's deadly magic show, chasing truth from New York to San Francisco's Chinatown.",
      blurb: "When the ancient bell of St. Mary's begins ringing on its own, it heralds a series of supernatural events that force the townspeople to confront their deepest fears and darkest secrets."
    },
    {
      image: "/images/covers/hi-lo-jak.jpg",
      title: "Hi-Lo Jak",
      date: "1928",
      teaser: "A reign of terror grips New York as the Bradys face Hi-Lo-Jak, a vengeful mastermind whose Chinatown assassins will stop at nothing to kill them.",
      blurb: "Professional gambler Hi-Lo Jak finds himself in a deadly game of poker where the chips are worth more than money, and losing means losing everything he's ever loved."
    },
    {
      image: "/images/covers/desert-trail.jpg",
      title: "Desert Trail",
      date: "1929",
      teaser: "The Bradys brave Nevada's Deadman's Run, battling thirst, betrayal, and outlaws in search of a vanished colonel, his daughter, and stolen gold.",
      blurb: "Three travelers become lost in the vast desert, where they must rely on each other to survive while being hunted by something that doesn't belong in this world."
    },
    {
      image: "/images/covers/yellow-crooks.jpg",
      title: "Yellow Crooks",
      date: "1930",
      teaser: "Old King Brady hunts stolen diamonds in Chinatown's deadly underworld, only to uncover betrayal and the Yellow Crooks' ruthless empire.",
      blurb: "Detective Mike O'Connor investigates a series of robberies committed by criminals who leave behind yellow calling cards, leading him into a world of organized crime and supernatural mystery."
    },
    {
      image: "/images/covers/chinese-idol.jpg",
      title: "The Chinese Idol",
      date: "1931",
      teaser: "A millionaire's murder, a missing will, and a stolen idol draw the Bradys into New York's Chinatown, where counterfeit pearls hide deadly secrets.",
      blurb: "When archaeologist Dr. Emily Chen discovers a mysterious Chinese idol, she unleashes forces that have been dormant for centuries, forcing her to choose between knowledge and survival."
    },
    {
      image: "/images/covers/juggler.png",
      title: "The Juggler",
      date: "1932",
      teaser: "A murdered juggler, opium dens, and a sinister secret society drag the Bradys into a deadly Chinatown mystery of deception, vengeance, and illusion.",
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

      // Show sticky CTA after header is completely off screen (approximately 100vh)
      if (currentScrollY > window.innerHeight) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }

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
          if (hasSeenPrice && hasScrolledBack && !showExitPopup && !hasDismissedExitPopup) {
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
  }, [hasSeenPrice, hasScrolledBack, showExitPopup, hasDismissedExitPopup]);

  // Removed: Show popup if user reaches bottom without clicking CTA
  // Users should be able to reach the bottom and see the final CTA

  // Desktop exit intent detection (mouse movement to top of viewport)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      
      // Desktop exit intent: mouse moves to top 50px of viewport
      if (e.clientY <= 50 && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup && !hasDismissedDesktopExitPopup) {
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
  }, [hasSeenPrice, hasTriggeredDesktopExit, showDesktopExitPopup, hasDismissedDesktopExitPopup]);

  // Desktop visibility change detection (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup && !hasDismissedDesktopExitPopup) {
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
  }, [hasSeenPrice, hasTriggeredDesktopExit, showDesktopExitPopup, hasDismissedDesktopExitPopup]);

  const handleCtaClick = () => {
    setShowModal(true);
  };

  const handleExitPopupClose = () => {
    setShowExitPopup(false);
    setHasDismissedExitPopup(true);
  };

  const handleDesktopExitPopupClose = () => {
    setShowDesktopExitPopup(false);
    setHasDismissedDesktopExitPopup(true);
  };

  const handleBundleClick = () => {
    setShowExitPopup(false);
    setHasDismissedExitPopup(true);
    setShowModal(true);
  };

  const handleDesktopBundleClick = () => {
    setShowDesktopExitPopup(false);
    setHasDismissedDesktopExitPopup(true);
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
      <StickyHelloBar hasScrolled={hasScrolled} />

      <HeroSection onCtaClick={handleCtaClick} />

      <BookCoverCarousel 
        bookCovers={bookCovers}
        infiniteCovers={infiniteCovers}
        currentCoverIndex={currentCoverIndex}
        onCoverClick={setSelectedCover}
        onDotClick={setCurrentCoverIndex}
      />

      <ValueProposition onCtaClick={handleCtaClick} />

      <WhatsInsideBundle />

      <ProblemAgitation />

      <SolutionBenefits />

      <SocialProofTrust />

      <Differentiation />

      <Guarantee />

      <FAQ />

      <FinalCTA onCtaClick={handleCtaClick} />

      <BookCoverModal 
        selectedCover={selectedCover}
        onClose={() => setSelectedCover(null)}
      />

      <GHLFormModal 
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />

      <ExitIntentPopup 
        showExitPopup={showExitPopup}
        onClose={handleExitPopupClose}
        onBundleClick={handleBundleClick}
      />

      <DesktopExitIntentPopup 
        showDesktopExitPopup={showDesktopExitPopup}
        onClose={handleDesktopExitPopupClose}
        onBundleClick={handleDesktopBundleClick}
      />

      <Footer />

      <MobileStickyCTA 
        showStickyCta={showStickyCta}
        onCtaClick={handleCtaClick}
      />
    </div>
  );
}
