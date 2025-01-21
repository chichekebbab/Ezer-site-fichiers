import React from 'react';
import PageHeader from '../components/PageHeader';

export default function MentionsLegales() {
  return (
    <main>
      <PageHeader 
        title="Mentions légales"
        description="Informations légales concernant le site web Ezer Avocats"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <h2>Éditeur du site</h2>
          <p>
            Ezer Avocats<br />
            66 rue de Monceau<br />
            75008 Paris<br />
            Tél : 01 23 45 67 89<br />
            Email : contact@ezer-avocats.com
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]<br />
            [Coordonnées de l'hébergeur]
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments du site (textes, images, vidéos, etc.) sont la propriété exclusive de Ezer Avocats.
          </p>

          <h2>Protection des données</h2>
          <p>
            Les données personnelles collectées sur ce site sont traitées conformément à la réglementation en vigueur.
          </p>
        </div>
      </div>
    </main>
  );
}