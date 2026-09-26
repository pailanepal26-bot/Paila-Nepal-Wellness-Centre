import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size = 'md' }) => {
  // Baby footprint SVG symbol: two gentle baby footsteps (left & right)
  // Strictly adhering to: "Do not add mountains, hands, sun, leaves or other symbols to the logo"
  const isWhite = variant === 'white';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Baby Footprints Icon */}
      <div className={`relative shrink-0 flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-label="Paila Nepal Baby Footprints Logo"
        >
          {/* Subtle circular ambient glow */}
          <circle cx="50" cy="50" r="48" fill={isWhite ? "rgba(255,255,255,0.12)" : "rgba(0,140,74,0.06)"} />
          
          {/* Left Baby Footprint (Royal Blue / White) */}
          <g transform="translate(18, 22) rotate(-8 18 32)">
            {/* Sole & Heel */}
            <path
              d="M16 22 C11 22, 6 27, 7 35 C8 44, 11 50, 16 52 C21 50, 23 42, 23 34 C23 26, 20 22, 16 22 Z"
              fill={isWhite ? "#FFFFFF" : "#1457A6"}
            />
            {/* Toes */}
            <ellipse cx="20" cy="15" rx="3.4" ry="4.2" fill={isWhite ? "#FFFFFF" : "#1457A6"} />
            <ellipse cx="15" cy="14" rx="2.5" ry="3.1" fill={isWhite ? "#FFFFFF" : "#1457A6"} />
            <ellipse cx="10.5" cy="15.5" rx="2.2" ry="2.7" fill={isWhite ? "#FFFFFF" : "#1457A6"} />
            <ellipse cx="6.8" cy="18" rx="1.8" ry="2.2" fill={isWhite ? "#FFFFFF" : "#1457A6"} />
            <ellipse cx="4.2" cy="21.5" rx="1.5" ry="1.9" fill={isWhite ? "#FFFFFF" : "#1457A6"} />
          </g>

          {/* Right Baby Footprint (Deep Green / Light Blue) - slightly advanced */}
          <g transform="translate(48, 12) rotate(8 18 32)">
            {/* Sole & Heel */}
            <path
              d="M16 22 C12 22, 9 26, 9 34 C9 42, 11 50, 16 52 C21 50, 24 44, 25 35 C26 27, 21 22, 16 22 Z"
              fill={isWhite ? "#55B8E8" : "#008C4A"}
            />
            {/* Toes */}
            <ellipse cx="12" cy="15" rx="3.4" ry="4.2" fill={isWhite ? "#55B8E8" : "#008C4A"} />
            <ellipse cx="17" cy="14" rx="2.5" ry="3.1" fill={isWhite ? "#55B8E8" : "#008C4A"} />
            <ellipse cx="21.5" cy="15.5" rx="2.2" ry="2.7" fill={isWhite ? "#55B8E8" : "#008C4A"} />
            <ellipse cx="25.2" cy="18" rx="1.8" ry="2.2" fill={isWhite ? "#55B8E8" : "#008C4A"} />
            <ellipse cx="27.8" cy="21.5" rx="1.5" ry="1.9" fill={isWhite ? "#55B8E8" : "#008C4A"} />
          </g>
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'compact' && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-base sm:text-lg ${
                isWhite ? 'text-white' : 'text-[#1457A6]'
              }`}
            >
              PAILA NEPAL
            </span>
            <span
              className={`font-semibold tracking-wider text-xs sm:text-sm uppercase ${
                isWhite ? 'text-[#55B8E8]' : 'text-[#008C4A]'
              }`}
            >
              WELLNESS
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`text-xs font-medium font-['Noto_Sans_Devanagari',sans-serif] ${
                isWhite ? 'text-white/80' : 'text-[#263238]'
              }`}
            >
              पाइला नेपाल वेलनेस सेन्टर
            </span>
            <span
              className={`text-[10px] tracking-tight hidden sm:inline ${
                isWhite ? 'text-white/60' : 'text-slate-400'
              }`}
            >
              · Est. 2026
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
