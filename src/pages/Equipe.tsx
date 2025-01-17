import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

export default function Equipe() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div id="top">
      <PageHeader 
        title="Qui sommes nous ?"
        description="Une équipe d'experts à votre service"
        backgroundImage="/src/assets/images/qui sommes nous.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Maître Myriam Douillet Benaroch</h2>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <img
              src="/src/assets/images/myriam.jpeg"
              alt="Maître Myriam Douillet Benaroch"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Formation</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
                  •
                </span>
                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit amet</p>
                  <p className="text-gray-600">2010 - 2015</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
                  •
                </span>
                <div>
                  <p className="font-semibold">Consectetur adipiscing elit</p>
                  <p className="text-gray-600">2005 - 2010</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Distinctions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
                  •
                </span>
                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit amet</p>
                  <p className="text-gray-600">2020</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-1">
                  •
                </span>
                <div>
                  <p className="font-semibold">Consectetur adipiscing elit</p>
                  <p className="text-gray-600">2018</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
