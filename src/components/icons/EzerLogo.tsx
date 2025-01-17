import React from 'react';

interface EzerLogoProps {
  className?: string;
  color?: string;
}

export default function EzerLogo({ className = '', color = '#405b72' }: EzerLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 340 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M170 125 h-60 v-20 h120 v40 h-120 v-20 h60" strokeWidth="3" stroke={color} />
        <g transform="translate(90, 75)">
          <text
            className="font-serif"
            style={{
              fontSize: '72px',
              letterSpacing: '0.1em',
            }}
            fill={color}
          >
            Ezer
          </text>
          <text
            y="95"
            style={{
              fontSize: '24px',
              letterSpacing: '0.3em',
            }}
            fill={color}
          >
            AVOCATS
          </text>
        </g>
      </g>
    </svg>
  );
}