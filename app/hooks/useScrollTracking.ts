import { useState, useEffect } from 'react';

interface UseScrollTrackingReturn {
  hasScrolled: boolean;
  hasSeenPrice: boolean;
  hasReachedBottom: boolean;
  hasScrolledBack: boolean;
  showStickyCta: boolean;
}

export function useScrollTracking(): UseScrollTrackingReturn {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasSeenPrice, setHasSeenPrice] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [hasScrolledBack, setHasScrolledBack] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

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

      // Show sticky CTA when MissionContext headline reaches the top of the screen
      // This ensures the hero CTA buttons are out of view before showing sticky CTA
      if (currentScrollY > window.innerHeight * 2.5) {
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
          if (hasSeenPrice && hasScrolledBack) {
            // This will be handled by the exit intent hook
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
  }, [hasSeenPrice, hasScrolledBack]);

  return {
    hasScrolled,
    hasSeenPrice,
    hasReachedBottom,
    hasScrolledBack,
    showStickyCta
  };
}
