import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ExpertiseCard({ title, description, Icon }: ExpertiseCardProps) {
  return (
    <div className="group p-12 bg-white hover:bg-gray-50 transition-all duration-500">
      <Icon className="h-8 w-8 text-primary mb-8 opacity-75 group-hover:scale-110 transition-all duration-500" />
      <h3 className="text-lg font-light tracking-wide mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
}