import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number up from 0 to `target` over `duration` ms, once `start`
 * flips true (typically driven by an IntersectionObserver / whileInView).
 * Uses an ease-out curve so it settles quickly rather than crawling in.
 */
export default function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!start || ranRef.current) return;
    ranRef.current = true;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}
