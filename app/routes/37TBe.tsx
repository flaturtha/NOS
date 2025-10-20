import { useState } from "react";
import { useScrollTracking } from "../hooks/useScrollTracking";
import { useExitIntent } from "../hooks/useExitIntent";
import { getAdVariant } from "../data/adVariants";
import StickyHelloBar from "../components/StickyHelloBar";
import HeroDecoy_v2 from "../components/HeroDecoy_v2";
import MissionContext from "../components/MissionContext";
import HeroTestimonial from "../components/HeroTestimonial";
import OptionComparison_v2 from "../components/OptionComparison_v2";
import BeforeAfter_v2 from "../components/BeforeAfter_v2";
import SocialProof_v2 from "../components/SocialProof_v2";
import WhyComparison_v2 from "../components/WhyComparison_v2";
import Guarantee from "../components/Guarantee";
import FAQ from "../components/FAQ";
import BottomTestimonials from "../components/BottomTestimonials";
import FinalCTA_v2 from "../components/FinalCTA_v2";
import GHLFormModal from "../components/GHLFormModal";
import ExitIntentPopup from "../components/ExitIntentPopup";
import DesktopExitIntentPopup from "../components/DesktopExitIntentPopup";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

export default function Landing37TBe() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState<'collection' | 'single' | null>(null);

  // Get the ad variant data
  const adVariant = getAdVariant('37TB');

  // Custom hooks
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

  const handleCollectionClick = () => {
    setSelectedOption('collection');
    setShowModal(true);
  };

  const handleSingleClick = () => {
    setSelectedOption('single');
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
    setSelectedOption('collection');
    setShowExitPopup(false);
    setHasDismissedExitPopup(true);
    setShowModal(true);
  };

  const handleDesktopBundleClick = () => {
    setSelectedOption('collection');
    setShowDesktopExitPopup(false);
    setHasDismissedDesktopExitPopup(true);
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with GHL
    // For now, we'll simulate the redirect
    console.log("Form submitted with email:", email, "Option:", selectedOption);
    
    // Redirect to appropriate GHL funnel based on selection
    const ghlUrl = selectedOption === 'collection' 
      ? `https://checkout.talesofmurder.com/complete-collection?email=${encodeURIComponent(email)}`
      : `https://checkout.talesofmurder.com/single-pdf?email=${encodeURIComponent(email)}`;
    window.location.href = ghlUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <StickyHelloBar hasScrolled={hasScrolled} /> */}

      <HeroDecoy_v2 
        onCollectionClick={handleCollectionClick}
        onSingleClick={handleSingleClick}
        adVariant={adVariant}
      />

      <MissionContext />

      <HeroTestimonial />

      <OptionComparison_v2 
        onCollectionClick={handleCollectionClick}
        onSingleClick={handleSingleClick}
        onCoverClick={() => {}} // Placeholder for now
      />

      <SocialProof_v2 variant="restoration" />

      <BeforeAfter_v2 />

      <SocialProof_v2 variant="story" />

      <WhyComparison_v2 />

      <Guarantee />

      <FAQ />

      <BottomTestimonials />

      <FinalCTA_v2 
        onCollectionClick={handleCollectionClick}
        onSingleClick={handleSingleClick}
      />

      <GHLFormModal 
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />

      <ExitIntentPopup 
        showExitPopup={showExitPopup}
        onClose={handleExitPopupClose}
        onBundleClick={handleBundleClick}
        onSingleClick={handleSingleClick}
        onAltOfferClick={() => {}}
      />

      <DesktopExitIntentPopup 
        showDesktopExitPopup={showDesktopExitPopup}
        onClose={handleDesktopExitPopupClose}
        onBundleClick={handleDesktopBundleClick}
        onSingleClick={handleSingleClick}
        onAltOfferClick={() => {}}
      />

      <Footer />

      <MobileStickyCTA 
        showStickyCta={showStickyCta}
        onCtaClick={handleCollectionClick}
        onSingleClick={handleSingleClick}
      />
    </div>
  );
}
