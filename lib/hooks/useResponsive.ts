import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useResponsive() {
  const [state, setState] = useState<ResponsiveState>({ isMobile: false, isTablet: false, isDesktop: true });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
