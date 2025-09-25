import { useState, useEffect } from 'react';
import { bookCovers } from '../data/bookCovers';

interface UseCarouselReturn {
  currentCoverIndex: number;
  setCurrentCoverIndex: (index: number) => void;
}

export function useCarousel(): UseCarouselReturn {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

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
  }, []);

  return {
    currentCoverIndex,
    setCurrentCoverIndex
  };
}
