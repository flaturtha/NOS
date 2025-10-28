import { useState, useEffect } from 'react';

interface UseExitIntentProps {
  hasSeenPrice: boolean;
  hasScrolledBack: boolean;
}

interface UseExitIntentReturn {
  showExitPopup: boolean;
  showDesktopExitPopup: boolean;
  hasTriggeredDesktopExit: boolean;
  hasDismissedExitPopup: boolean;
  hasDismissedDesktopExitPopup: boolean;
  mouseY: number;
  setShowExitPopup: (show: boolean) => void;
  setShowDesktopExitPopup: (show: boolean) => void;
  setHasDismissedExitPopup: (dismissed: boolean) => void;
  setHasDismissedDesktopExitPopup: (dismissed: boolean) => void;
}

export function useExitIntent({ hasSeenPrice, hasScrolledBack }: UseExitIntentProps): UseExitIntentReturn {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showDesktopExitPopup, setShowDesktopExitPopup] = useState(false);
  const [hasTriggeredDesktopExit, setHasTriggeredDesktopExit] = useState(false);
  const [hasDismissedExitPopup, setHasDismissedExitPopup] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('exitIntentDismissed') === 'true';
    }
    return false;
  });
  const [hasDismissedDesktopExitPopup, setHasDismissedDesktopExitPopup] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('desktopExitIntentDismissed') === 'true';
    }
    return false;
  });
  const [mouseY, setMouseY] = useState(0);

  // Handle mobile exit intent (scroll-based)
  useEffect(() => {
    if (hasSeenPrice && hasScrolledBack && !showExitPopup && !hasDismissedExitPopup) {
      const timeout = setTimeout(() => {
        setShowExitPopup(true);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [hasSeenPrice, hasScrolledBack, showExitPopup, hasDismissedExitPopup]);

  // Desktop exit intent detection (mouse movement to top of viewport AND tab switching)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      
      // Desktop exit intent: mouse moves to top 50px of viewport
      if (e.clientY <= 50 && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup && !hasDismissedDesktopExitPopup) {
        setHasTriggeredDesktopExit(true);
        setShowDesktopExitPopup(true);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && hasSeenPrice && !hasTriggeredDesktopExit && !showDesktopExitPopup && !hasDismissedDesktopExitPopup) {
        setHasTriggeredDesktopExit(true);
        setShowDesktopExitPopup(true);
      }
    };

    // Only add desktop exit intent on larger screens
    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasSeenPrice, hasTriggeredDesktopExit, showDesktopExitPopup, hasDismissedDesktopExitPopup]);

  const setHasDismissedExitPopupWithStorage = (dismissed: boolean) => {
    setHasDismissedExitPopup(dismissed);
    if (typeof window !== 'undefined') {
      if (dismissed) {
        localStorage.setItem('exitIntentDismissed', 'true');
      } else {
        localStorage.removeItem('exitIntentDismissed');
      }
    }
  };

  const setHasDismissedDesktopExitPopupWithStorage = (dismissed: boolean) => {
    setHasDismissedDesktopExitPopup(dismissed);
    if (typeof window !== 'undefined') {
      if (dismissed) {
        localStorage.setItem('desktopExitIntentDismissed', 'true');
      } else {
        localStorage.removeItem('desktopExitIntentDismissed');
      }
    }
  };

  return {
    showExitPopup,
    showDesktopExitPopup,
    hasTriggeredDesktopExit,
    hasDismissedExitPopup,
    hasDismissedDesktopExitPopup,
    mouseY,
    setShowExitPopup,
    setShowDesktopExitPopup,
    setHasDismissedExitPopup: setHasDismissedExitPopupWithStorage,
    setHasDismissedDesktopExitPopup: setHasDismissedDesktopExitPopupWithStorage
  };
}
