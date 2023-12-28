'use client';

import { useEffect, useState, RefObject } from 'react';

export type UseInView = <T extends Element>(ref: RefObject<T>) => boolean;

const useInView: UseInView = ref => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref, hasAnimated]);

  return hasAnimated;
};

export default useInView;
