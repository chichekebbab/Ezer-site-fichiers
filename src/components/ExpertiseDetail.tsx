import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import SectionTitle from './SectionTitle';

interface ExpertiseDetailProps {
  title: string;
  description: string;
  imagePath: string;
  content: React.ReactNode;
}

export default function ExpertiseDetail({ title, description, imagePath, content }: ExpertiseDetailProps) {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <PageHeader
        title={title}
        description={description}
        backgroundImage={imagePath}
      />
      
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          subtitle="Expertise"
          title={title}
          alignment="center"
        />

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
            <img
              src={imagePath}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-justify">
              {content}
            </div>
          </div>
        </div>

        <div className="mt-16 mb-32 text-center">
          <Link
            to="/expertises"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[rgb(127,156,178)] hover:bg-[rgb(107,136,158)] transition-colors duration-200"
          >
            Retour aux expertises
          </Link>
        </div>
      </div>
    </div>
  );
}