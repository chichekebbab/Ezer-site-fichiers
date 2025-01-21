import React from 'react';
import { Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="bg-[rgb(113,145,170)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="/src/assets/images/Ezer Logo/Ezer White logo Transparent bg.svg"
              alt="Ezer Avocats"
              className="mb-6 h-12"
            />
            <p className="text-white font-light">
              Cabinet d'avocats dédié au contentieux des affaires.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-sm tracking-wider mb-6">COORDONNÉES</h3>
            <div className="space-y-4">
              <p className="flex items-center text-white font-light">
                <MapPin className="h-5 w-5 mr-3 text-white/50" />
                66 rue de Monceau, 75008 Paris
              </p>
              <p className="flex items-center text-white font-light">
                <Mail className="h-5 w-5 mr-3 text-white/50" />
                <a href="mailto:contact@ezeravocats.com" className="hover:underline">
                  contact@ezeravocats.com
                </a>
              </p>
              <p className="flex items-center text-white font-light">
                <Linkedin className="h-5 w-5 mr-3 text-white/50" />
                <a
                  href="https://www.linkedin.com/in/myriam-douillet-2387b2100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm tracking-wider mb-6">HORAIRES</h3>
            <div className="flex items-start space-x-3 text-white font-light">
              <Clock className="h-5 w-5 text-white/50" />
              <div>
                <p>Lundi - Vendredi : 9h - 19h</p>
                <p className="mt-1">Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white font-light text-sm">
            © {new Date().getFullYear()} Ezer Avocats. Tous droits réservés. |{' '}
            <a href="/mentions-legales" className="hover:underline">
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
