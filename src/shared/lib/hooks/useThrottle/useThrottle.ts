import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [callback, delay]);
};