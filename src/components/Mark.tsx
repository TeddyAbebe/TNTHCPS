export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 24 L9 7 L14 24 L19 7 L24 24 L29 7"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M5 16.5 H27" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export function StitchBand() {
  return (
    <svg
      viewBox="0 0 280 40"
      className="h-10 w-56 text-ink"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 30 L14 8 L24 30 L34 8 L44 30 L54 8 L64 30"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M8 19 H60" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M96 30 V10 M108 30 V10 M120 30 V10 M132 30 V10 M144 30 V10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M92 20 H148" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M180 30 L192 8 L204 30 L216 8 L228 30 L240 8 L252 30"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M184 19 H248" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
