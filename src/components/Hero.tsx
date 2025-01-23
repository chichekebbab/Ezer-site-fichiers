import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import homepageImage from '../assets/images/homepage.jpg';
import ezerLogo from '../assets/images/Ezer Logo/Ezer Inverted Color Transparent bg (1).svg';

export default function Hero() {
  return (
      <section className="relative h-screen bg-primary bg-cover bg-center" style={{ backgroundImage: `url(${homepageImage})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <img
            src={ezerLogo}
            alt="Logo Ezer Avocats - Cabinet spécialisé en droit des affaires"
            loading="lazy"
            className="mb-8 w-[280px] opacity-100"
          />
          <p className="text-gray-300 text-lg mb-4 tracking-wider">CABINET D'AVOCATS À PARIS DEDIÉ AU CONTENTIEUX DES AFFAIRES</p>
          <h1 className="text-4xl md:text-6xl font-extralight text-white mb-8 leading-tight">
            Vos enjeux,<br />
            <span className="font-light">notre expertise</span>
          </h1>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-sm tracking-wider font-light text-white border border-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            PRENDRE RENDEZ-VOUS
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
