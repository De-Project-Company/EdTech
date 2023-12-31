'use client';

import { usePathname } from 'next/navigation';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import SwipeIndicator from '../components/sidebars/SwipIndicator';
import { StateContextProps } from '../@types';

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Mock-Data for user profile
  const user = useMemo(() => {
    return {
      name: 'Jane Doe',
      email: 'JohnDoe@gmail.com',
      image: '/facemoji.png'
    };
  }, []);

  // Add Your State(s) Here
  const [handleSwipe, setHandleSwipe] = useState<number | null>(null);

  // menu state State
  const [teacherShowMobileMenu, setteacherShowMobileMenu] = useState(false);
  const [modShowMobileMenu, setModShowMobileMenu] = useState(false);

  // Miscellaneous
  const [swipeIndicator, setSwipeIndicator] = useState(false);

  // TeachersNav
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  const anyMobileSidebarOpen = teacherShowMobileMenu || modShowMobileMenu;

  // Sidebar Mobile
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    );
  };

  useEffect(() => {
    if (!isMobileDevice()) return;
    const isSwiped = localStorage.getItem('swiped');
    if (isSwiped) {
      setSwipeIndicator(false);
      return;
    }
    if (anyMobileSidebarOpen) {
      setSwipeIndicator(true);
    } else {
      setSwipeIndicator(false);
    }
  }, [anyMobileSidebarOpen]);

  useEffect(() => {
    if (!isMobileDevice() || pathname === '/' || !anyMobileSidebarOpen) return;
    const handleSwipeStart = (e: TouchEvent) => {
      setHandleSwipe(e.changedTouches[0].screenX);
    };
    const handleSwipeEnd = (e: TouchEvent) => {
      if (handleSwipe !== null) {
        const swipeDis = e.changedTouches[0].screenX - handleSwipe;
        const swipeThreshold = 70;

        if (swipeDis < -swipeThreshold) {
          localStorage.setItem('swiped', 'true');
          console.log('first');
          setteacherShowMobileMenu(false);
          setModShowMobileMenu(false);
        }

        setHandleSwipe(null);
      }
    };

    window.addEventListener('touchstart', handleSwipeStart);
    window.addEventListener('touchend', handleSwipeEnd);
    return () => {
      window.removeEventListener('touchstart', handleSwipeStart);
      window.removeEventListener('touchend', handleSwipeEnd);
    };
  }, [handleSwipe, pathname, anyMobileSidebarOpen]);

  useEffect(() => {
    if (pathname.startsWith('/teachers-')) {
      setCurrentPath(pathname.replace(/^\/([^\/]+).*$/, '$1'));
      return;
    }
    if (pathname.startsWith('/')) {
      setCurrentPath(pathname.replace('/', ''));
      return;
    }
  }, [pathname]);

  useEffect(() => {
    if (anyMobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setteacherShowMobileMenu(false);
        setModShowMobileMenu(false);
      }
    };

    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, [anyMobileSidebarOpen]);

  const value = useMemo(
    () => ({
      teacherShowMobileMenu,
      setteacherShowMobileMenu,
      modShowMobileMenu,
      setModShowMobileMenu,
      currentPath,
      user,
      swipeIndicator,
      setSwipeIndicator
    }),
    [
      teacherShowMobileMenu,
      modShowMobileMenu,
      currentPath,
      user,
      swipeIndicator
    ]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// Call this function whenever you want to use the context
export const useStateCtx = () => {
  const ctx = useContext(StateContext);

  if (!ctx) {
    throw new Error('useStateCtx must be used within a StateContextProvider');
  }
  return ctx;
};

export default StateContextProvider;
