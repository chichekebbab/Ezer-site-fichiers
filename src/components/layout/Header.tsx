import React from 'react';
import Navbar from './Navbar'; // Le chemin est déjà correct ici

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Navbar />
    </header>
  );
}
