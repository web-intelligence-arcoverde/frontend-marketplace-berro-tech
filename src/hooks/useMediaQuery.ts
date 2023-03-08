import { useState, useEffect } from 'react';

type Breakpoints = 'xsspecific' | 'xss' | 'xxs' | 'xs' | 'smspecific' | 'smspecifictable' | 'smedium' | 'sm' | 'md' | 'big' | 'ipadPro' | 'largeScreen' | 'specific' | 'lg' | 'lgg' | 'xg' | 'xxg';

export const useMediaQuery = (breakpoint: Breakpoints) => {
  const [matches, setMatches] = useState<boolean>(
    typeof window !== 'undefined' &&
    window.matchMedia(`(min-width: ${getBreakpointValue(breakpoint)}px)`).matches
  );



  useEffect(() => {
    const mediaQuery = typeof window !== 'undefined' ? window.matchMedia(`(min-width: ${getBreakpointValue(breakpoint)}px)`) : null;

    function handleMatchChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    if (mediaQuery && mediaQuery?.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    mediaQuery?.addEventListener('change', handleMatchChange);
    return () => mediaQuery?.removeEventListener('change', handleMatchChange);
  }, [breakpoint]);

  return matches;
};

function getBreakpointValue(breakpoint: Breakpoints) {
  switch (breakpoint) {
    case 'xxs':
      return 350;
    case 'xss':
      return 376;
    case 'xsspecific':
      return 420;
    case 'xs':
      return 579;
    case 'smspecific':
      return 600;
    case 'smspecifictable':
      return 650;
    case 'smedium':
      return 750;
    case 'sm':
      return 500;
    case 'md':
      return 992;
    case 'big':
      return 1160;
    case 'ipadPro':
      return 1160;
    case 'largeScreen':
      return 1200;
    case 'specific':
      return 1325;
    case 'lg':
      return 1200;
    case 'lgg':
      return 1300;
    case 'xg':
      return 1370;
    case 'xxg':
      return 1440;
    default:
      return 0;
  }
}
