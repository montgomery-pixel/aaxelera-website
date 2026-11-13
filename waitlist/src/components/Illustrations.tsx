/**
 * Placeholder artwork drawn in SVG. Replace with real product shots later:
 * swap <HeroIllustration /> in Hero.tsx for an <Image /> of your photo.
 */

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 360 420"
      role="img"
      aria-label="Illustration of a phone showing a camera alert that was checked by AI and reviewed by an operator"
      className="h-auto w-full max-w-sm"
    >
      <defs>
        <linearGradient id="feed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2a48" />
          <stop offset="1" stopColor="#0f1829" />
        </linearGradient>
      </defs>

      {/* Phone body */}
      <rect x="60" y="10" width="240" height="400" rx="34" fill="#0e1525" stroke="#26324d" strokeWidth="2" />
      <rect x="150" y="24" width="60" height="8" rx="4" fill="#26324d" />

      {/* Camera feed placeholder */}
      <rect x="78" y="48" width="204" height="150" rx="14" fill="url(#feed)" stroke="#26324d" />
      <path d="M78 168 L140 120 L190 150 L230 110 L282 150 V184 a14 14 0 0 1-14 14 H92 a14 14 0 0 1-14-14 Z" fill="#16233d" />
      {/* Doorway */}
      <rect x="196" y="98" width="46" height="100" rx="3" fill="#0b1220" stroke="#26324d" />
      {/* Person outline with detection box */}
      <circle cx="140" cy="112" r="11" fill="#a6b3c9" />
      <path d="M122 172 v-22 a18 18 0 0 1 36 0 v22 Z" fill="#a6b3c9" />
      <rect x="110" y="92" width="60" height="88" rx="6" fill="none" stroke="#5ee6a8" strokeWidth="2" strokeDasharray="6 5" />
      <rect x="110" y="74" width="62" height="16" rx="4" fill="#5ee6a8" />
      <text x="141" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="#04241a" fontFamily="system-ui, sans-serif">
        PERSON
      </text>
      <circle cx="94" cy="64" r="4" fill="#ff7a7a" />
      <text x="104" y="68" fontSize="10" fill="#a6b3c9" fontFamily="system-ui, sans-serif">
        Front door
      </text>

      {/* Status cards */}
      <g fontFamily="system-ui, sans-serif">
        <rect x="78" y="212" width="204" height="52" rx="12" fill="#151e33" stroke="#26324d" />
        <circle cx="102" cy="238" r="12" fill="#5ee6a8" fillOpacity="0.15" />
        <path d="M96 238 l4 4 8-9" fill="none" stroke="#5ee6a8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="124" y="234" fontSize="12" fontWeight="600" fill="#e9eef8">AI check: person detected</text>
        <text x="124" y="250" fontSize="10.5" fill="#a6b3c9">Pets and shadows filtered out</text>

        <rect x="78" y="274" width="204" height="52" rx="12" fill="#151e33" stroke="#26324d" />
        <circle cx="102" cy="300" r="12" fill="#5ee6a8" fillOpacity="0.15" />
        <circle cx="102" cy="296" r="4" fill="#5ee6a8" />
        <path d="M94.5 307 a7.5 7.5 0 0 1 15 0" fill="none" stroke="#5ee6a8" strokeWidth="2.2" strokeLinecap="round" />
        <text x="124" y="296" fontSize="12" fontWeight="600" fill="#e9eef8">Operator reviewing</text>
        <text x="124" y="312" fontSize="10.5" fill="#a6b3c9">A real person checks the clip</text>

        <rect x="78" y="336" width="204" height="52" rx="12" fill="#151e33" stroke="#26324d" />
        <circle cx="102" cy="362" r="12" fill="#5ee6a8" fillOpacity="0.15" />
        <path d="M102 353 l8 3 v6 c0 5-3.5 8-8 9.5 -4.500-1.500-8-4.500-8-9.500 v-6 Z" fill="none" stroke="#5ee6a8" strokeWidth="2" strokeLinejoin="round" />
        <text x="124" y="358" fontSize="12" fontWeight="600" fill="#e9eef8">Verified alarms escalated</text>
        <text x="124" y="374" fontSize="10.5" fill="#a6b3c9">To a UL-listed monitoring center</text>
      </g>
    </svg>
  );
}

const iconPaths: Record<string, React.ReactNode> = {
  filter: <path d="M4 5h16l-6.200 7.500V18l-3.600 2v-7.500L4 5Z" />,
  person: (
    <>
      <circle cx="12" cy="8" r="3.500" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  unlock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 7.700-1.500" />
    </>
  ),
  wrench: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.500" />
      <path d="M10.500 8h3v3h-3zM10.500 14.500h3" />
    </>
  ),
  signal: <path d="M5 20v-3M10 20v-7M15 20V9M20 20V4" />,
  box: (
    <>
      <path d="M3.500 8 12 3.500 20.500 8v8L12 20.500 3.500 16V8Z" />
      <path d="M3.500 8 12 12.500 20.500 8M12 12.500v8" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M14 14h2.500v2.500H14zM17.500 17.500H20V20h-2.500zM20 14v1M14 20v-1" />
    </>
  ),
  eye: (
    <>
      <path d="M2.500 12S6 5.500 12 5.500 21.500 12 21.500 12 18 18.500 12 18.500 2.500 12 2.500 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.800"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name] ?? null}
    </svg>
  );
}

export function Logo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.500 20 5.500v6c0 5-3.400 8.300-8 10-4.600-1.700-8-5-8-10v-6l8-3Z" />
      <path d="m8.500 12 2.500 2.500 4.500-5" strokeLinecap="round" />
    </svg>
  );
}
