import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...arg: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  return useCallback((...arg: any[]) => {
    if (!throttleRef.current) {
      callback(...arg);
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