// hooks/useResponsive.js
import { useEffect, useState } from 'react';

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 350);
      setIsDesktop(windowWidth >= 990);
      setIsTablet(windowWidth >= 350 && windowWidth < 990);
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array to ensure the effect runs only once

  return { isMobile, isDesktop, isTablet };
};

export default useDevice;
