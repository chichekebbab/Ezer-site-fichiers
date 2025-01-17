import React, { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  icon?: ReactNode;
}

export default function PageHeader({ 
  title, 
  description,
  backgroundImage,
  backgroundPosition,
  icon
}: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] bg-primary">
      {backgroundImage ? (
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-700"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundPosition: backgroundPosition || 'center',
            backgroundSize: 'cover',
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          {icon}
        </div>
      )}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extralight mb-4 tracking-wide">{title}</h1>
          {description && (
            <p className="text-xl font-light tracking-wide text-gray-100 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
