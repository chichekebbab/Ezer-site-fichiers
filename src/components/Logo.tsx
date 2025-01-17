import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  color?: 'white' | 'black';
}

export default function Logo({ className = '', color = 'black' }: LogoProps) {
  const logoUrl = 'src/assets/images/Ezer Logo/Ezer Black Logo Transparent bg.svg';
  
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src={logoUrl} 
        alt="Ezer Avocats Logo" 
        className={`h-12 object-contain ${color === 'white' ? 'invert' : ''}`}
      />
    </Link>
  );
}
