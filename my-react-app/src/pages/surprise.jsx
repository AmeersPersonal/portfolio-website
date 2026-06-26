import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./surprise.css";

// Hidden gag page. Reachable only by typing the URL (#/surprise).
// Nothing real happens here: no money moves, no card data is touched.
// It mimics an Apple Pay style charge as a joke. The persistent
// "No real transaction" line keeps it clearly a gag.

const AMOUNT = "10,000.00";
const MERCHANT = "Ameer Tayeh";

// Apple logo as inline SVG so it renders on every device (the Unicode
// Apple glyph only shows on Apple hardware).
const AppleLogo = () => (
  <svg className="pay-applelogo" viewBox="0 0 384 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
    />
  </svg>
);

// Synthesize a short, pleasant Apple Pay style success chime using the
// Web Audio API so we don't need to ship an audio file.
function playSuccessChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Browsers may start the context suspended until a user gesture.
    if (ctx.state === "suspended" && ctx.resume) ctx.resume();

    // Two quick ascending tones, like a confirmation "ding-dong".
    const notes = [
      { freq: 1318.5, start: 0.0, dur: 0.18 }, // E6
      { freq: 1760.0, start: 0.12, dur: 0.35 }, // A6
    ];

    notes.forEach(({ freq, start, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;

      const t0 = ctx.currentTime + start;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.4, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    });

    // Trigger a little haptic buzz on devices that support it.
    if (navigator.vibrate) navigator.vibrate([15, 40, 15]);
  } catch {
    // Audio is best-effort; ignore failures (e.g. unsupported browsers).
  }
}

const SurprisePage = () => {
  // stage: "detecting" -> "paid"
  const [stage, setStage] = useState("detecting");
  const armedChime = useRef(false);

  useEffect(() => {
    // Some browsers block audio until the first user gesture. Arm a
    // fallback so the chime still fires on first interaction if needed.
    const onFirstInteract = () => {
      if (armedChime.current) {
        playSuccessChime();
        armedChime.current = false;
      }
    };
    window.addEventListener("pointerdown", onFirstInteract);
    window.addEventListener("keydown", onFirstInteract);

    // Linger on the "Apple Pay detected" / processing screen, then charge.
    const payTimer = setTimeout(() => {
      setStage("paid");
      playSuccessChime();
      armedChime.current = true; // in case autoplay was blocked above
    }, 3800);

    return () => {
      clearTimeout(payTimer);
      window.removeEventListener("pointerdown", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
  }, []);

  return (
    <div className="pay-overlay">
      <AnimatePresence mode="wait">
        {stage === "detecting" && (
          <motion.div
            key="detecting"
            className="pay-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
          >
            <div className="pay-applebar">
              <AppleLogo /> Pay
            </div>
            <div className="pay-detect">Apple Pay detected</div>
            <div className="pay-spinner" />
            <div className="pay-merchant">{MERCHANT}</div>
            <div className="pay-amount">${AMOUNT}</div>
            <div className="pay-hint">Processing payment…</div>
          </motion.div>
        )}

        {stage === "paid" && (
          <motion.div
            key="paid"
            className="pay-card pay-card--success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pay-applebar">
              <AppleLogo /> Pay
            </div>
            <motion.div
              className="pay-check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
            >
              <svg viewBox="0 0 52 52">
                <motion.path
                  d="M14 27 L23 36 L39 18"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                />
              </svg>
            </motion.div>
            <div className="pay-done-title">Done</div>
            <div className="pay-amount pay-amount--success">${AMOUNT}</div>
            <div className="pay-merchant">paid to {MERCHANT}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pay-disclaimer">No real transaction</div>
    </div>
  );
};

export default SurprisePage;
