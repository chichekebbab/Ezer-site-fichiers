import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PageHeader from '../components/PageHeader';
import expertiseImage from '../assets/images/expertise.jpg';
import droitCommercialImage from '../assets/images/expertises/Droit commercial.jpg';
import droitSocietesImage from '../assets/images/expertises/Droit des sociétés.jpg';
import droitNumeriqueImage from '../assets/images/expertises/Droit du numérique.jpg';
import droitConsommationImage from '../assets/images/expertises/droit de la consommation.jpg';
import droitConstructionImage from '../assets/images/expertises/Droit de la construction.jpg';
import modesAlternatifsImage from '../assets/images/expertises/Modes alternatifs.jpg';

export default function Expertises() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const expertises = [
    {
      id: 'droit-commercial',
      title: 'Droit commercial',
      image: droitCommercialImage,
      description: "Nous accompagnons nos clients dans la défense de leurs intérêts commerciaux et les aidons à sécuriser leurs relations d'affaires.",
      link: '/expertises/droit-commercial'
    },
    {
      id: 'droit-societes',
      title: 'Droit des sociétés',
      image: droitSocietesImage,
      description: 'Nous accompagnons les entreprises et leurs dirigeants pour résoudre des litiges complexes en droit des sociétés.',
      link: '/expertises/droit-societes'
    },
    {
      id: 'droit-numerique',
      title: 'Droits et actifs numériques',
      image: droitNumeriqueImage,
      description: 'Grâce à notre expérience en droit des activités numériques, nous accompagnons les entreprises dans la résolution de leurs litiges digitaux.',
      link: '/expertises/droit-numerique'
    },
    {
      id: 'droit-consommation',
      title: 'Droit de la consommation et de la distribution',
      image: droitConsommationImage,
      description: 'Nous vous accompagnons dans la gestion de vos litiges avec les consommateurs et intervenons notamment sur des contentieux relatifs aux pratiques commerciales.',
      link: '/expertises/droit-consommation'
    },
    {
      id: 'droit-construction',
      title: 'Droit de la construction - Risques industriels',
      image: droitConstructionImage,
      description: 'Nous accompagnons les professionnels du secteur de la construction pour sécuriser et défendre leurs projets.',
      link: '/expertises/droit-construction'
    },
    {
      id: 'modes-alternatifs',
      title: 'Modes alternatifs de règlements des litiges',
      image: modesAlternatifsImage,
      description: 'Nous accompagnons entreprises et particuliers dans la recherche de solutions efficaces et constructives pour leurs différends.',
      link: '/expertises/modes-alternatifs'
    }
  ];
  
  return (
    <div id="top">
      <PageHeader
        title="Nos Expertises"
        description="Domaines d'intervention"
        backgroundImage={expertiseImage}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <SectionTitle
          subtitle="Nos Expertises"
          title="Domaines d'intervention"
          alignment="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise) => (
            <Link
              key={expertise.id}
              to={expertise.link}
              className="group block"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={expertise.image}
                    alt={expertise.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {expertise.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {expertise.description}
                  </p>
                  <div className="mt-4 text-primary font-medium group-hover:text-primary">
                    En savoir plus →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
