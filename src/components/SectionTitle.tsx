import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center';
}

export default function SectionTitle({ subtitle, title, alignment = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">{subtitle}</p>
      )}
      <h2 className="text-3xl font-extralight text-gray-900 tracking-wide">
        {title}
      </h2>
    </div>
  );
}
