import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type Phase = "off" | "in" | "out";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Opening() {
  const { pathname } = useLocation();
  const play = useRef(!reduceMotion() && pathname === "/");
  const [phase, setPhase] = useState<Phase>(play.current ? "in" : "off");

  useEffect(() => {
    if (phase === "off") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    if (!play.current) return;

    let cancel = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancel) fn();
      }, ms);
      timers.push(id);
    };

    later(() => {
      setPhase("out");
      later(() => setPhase("off"), 560);
    }, 2300);

    return () => {
      cancel = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  if (phase === "off") return null;

  return (
    <div
      className={`opening fixed inset-0 z-[80] flex flex-col items-center justify-center bg-forest text-ivory ${phase === "out" ? "opening-leave" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="TNTHCPS, Toda buffalo of the Nilgiris"
    >
      <svg viewBox="0 0 160 72" className="h-16 w-36 text-gold" fill="none" aria-hidden="true">
        <path
          className="horn"
          d="M28 58 C34 28 52 16 70 22"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          className="horn horn-late"
          d="M132 58 C126 28 108 16 90 22"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle className="lid-in" cx="80" cy="40" r="7" fill="currentColor" />
      </svg>
      <p className="gold-in mt-6 font-sans text-sm font-medium tracking-[0.42em]">TNTHCPS</p>
      <p className="gold-in mt-3 font-display text-xl italic text-ivory/80">Toda buffalo, the Nilgiris</p>
    </div>
  );
}
