import { useEffect, useRef, useState } from 'react';

/**
 * Types out a list of { key, value } lines one at a time, revealing each
 * value character-by-character. Returns the lines that should currently
 * render and whether typing has finished (so a caller can show/hide the
 * blinking cursor accordingly).
 */
export default function useTypewriter(lines, start, charInterval = 18) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!start || ranRef.current) return;
    ranRef.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let timer;

    const typeNext = () => {
      const line = lines[lineIndex];
      if (!line) return;

      if (charIndex <= line.value.length) {
        setVisibleCount(lineIndex + 1);
        setCurrentChars(charIndex);
        charIndex += 1;
        timer = setTimeout(typeNext, charInterval);
      } else {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < lines.length) {
          timer = setTimeout(typeNext, charInterval * 4); // brief pause between lines
        }
      }
    };

    timer = setTimeout(typeNext, 200);
    return () => clearTimeout(timer);
  }, [start, lines, charInterval]);

  const done = visibleCount >= lines.length && currentChars >= (lines[lines.length - 1]?.value.length ?? 0);

  return { visibleCount, currentChars, done };
}
