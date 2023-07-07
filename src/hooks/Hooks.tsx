import { useCallback, useEffect, useState } from "react";
import { Time } from "../clients/HangmanApi";

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateSize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  return size;
}

export function useIsExpired(time?: Time): boolean | undefined {
  const [isExpired, setIsExpired] = useState<boolean>();

  useEffect(() => {
    if (time === undefined) {
      setIsExpired(undefined);
      return;
    }
    const end = Date.parse(time);
    const msLeft = end - new Date().getTime();
    if (msLeft > 0) {
      setIsExpired(false);
      const t = setTimeout(() => {
        setIsExpired(true);
      }, msLeft);

      return () => {
        clearTimeout(t);
      };
    } else {
      setIsExpired(true);
    }
  }, [time]);

  return isExpired;
}

export function useMsRemaining(time: Time): number {
  const [msRemaining, setMsRemaining] = useState(0);

  useEffect(() => {
    const end = Date.parse(time);
    const msLeft = Math.max(0, end - new Date().getTime());
    setMsRemaining(msLeft);
    if (msLeft > 0) {
      const interval = setInterval(() => {
        const msLeft = Math.max(0, end - new Date().getTime());
        setMsRemaining(msLeft);
        if (msLeft <= 0) {
          clearInterval(interval);
        }
      }, 90);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);

  return msRemaining;
}
