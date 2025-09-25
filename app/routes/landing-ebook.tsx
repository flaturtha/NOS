import { useState } from "react";
import { bookCovers, infiniteCovers } from "../data/bookCovers";
import { useScrollTracking } from "../hooks/useScrollTracking";
import { useExitIntent } from "../hooks/useExitIntent";
import { useCarousel } from "../hooks/useCarousel";
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
  const [selectedCover, setSelectedCover] = useState<any>(null);

  // Custom hooks
  const { currentCoverIndex, setCurrentCoverIndex } = useCarousel();
  const { hasScrolled, hasSeenPrice, hasReachedBottom, hasScrolledBack, showStickyCta } = useScrollTracking();
  const {
    showExitPopup,
    showDesktopExitPopup,
    hasTriggeredDesktopExit,
    hasDismissedExitPopup,
    hasDismissedDesktopExitPopup,
    mouseY,
    setShowExitPopup,
    setShowDesktopExitPopup,
    setHasDismissedExitPopup,
    setHasDismissedDesktopExitPopup
  } = useExitIntent({ hasSeenPrice, hasScrolledBack });


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
