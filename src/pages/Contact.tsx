import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div id="top">
      <PageHeader 
        title="Contact" 
        description="Prenez rendez-vous avec notre cabinet"
        icon={<MessageSquare className="w-16 h-16 text-white/80" />}
        backgroundImage="src/assets/images/bureau.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Contactez-nous</h2>
            <ContactForm />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-8">Prenez rendez-vous</h2>
            <iframe 
              src="https://zcal.co/i/eaFLKrTt?embed=1&embedType=iframe" 
              loading="lazy"
              style={{ border: 'none', minWidth: '320px', minHeight: '544px', height: '701px', width: '100%' }}
              id="zcal-invite"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Coordonnées</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  75008 Paris
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Adresse</h3>
              <div className="text-gray-600">
                <p>Myriam Douillet</p>
                <p>66 rue de Moncea, 75008 Paris</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
