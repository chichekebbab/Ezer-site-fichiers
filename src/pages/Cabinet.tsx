import React, { useEffect } from 'react';
import { Scale, Building2, Users, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

export default function Cabinet() {
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
        title="Le Cabinet"
        description="Une expertise juridique au service de vos projets"
        backgroundImage="/src/assets/images/livres.jpg"
        icon={<Scale className="w-16 h-16 text-white/80" />}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Un cabinet dédié au Contentieux des affaires</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">1. Un accompagnement sur-mesure pour la résolution de vos litiges</h3>
                <p className="text-gray-600 font-light leading-relaxed text-justify">
                  Fort de notre expérience, notre approche consiste à anticiper les risques, élaborer une stratégie adaptée à vos besoins et vous accompagner à chaque étape de vos litiges avec rigueur et proactivité.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">2. Au service des entrepreneurs et des dirigeants</h3>
                <p className="text-gray-600 font-light leading-relaxed text-justify">
                  Notre cabinet se distingue par sa capacité à offrir un accompagnement juridique personnalisé aux entreprises, aux actionnaires et aux dirigeants. Nous savons en particulier nous adapter aux besoins spécifiques des start-ups et jeunes entrepreneurs, en faisant preuve de flexibilité et de compréhension de vos besoins.
                </p>
                <p className="text-gray-600 mt-4 text-justify">
                  Au-delà de la simple prestation de services juridiques ; nous nous efforçons de tisser des partenariats durables en offrant des conseils stratégiques qui s'alignent sur les objectifs à long terme de nos clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">3. Transparence, prévisibilité et cohérence</h3>
                <p className="text-gray-600 font-light leading-relaxed text-justify">
                  La plupart de nos prestations font l'objet d'une tarification d'honoraires forfaitaire unique et communiquée en amont de chaque dossier à l'issue d'un premier rendez-vous.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-gray-600 font-light leading-relaxed text-justify">
                  EZER AVOCATS, cabinet dédié au droit des affaires, accompagne les entreprises en élaborant les stratégies judiciaires les plus adaptées à leurs situations. Le cabinet intervient devant l'ensemble des juridictions civiles et commerciales de France.
                </p>
                <p className="text-gray-600 mt-4 text-justify">
                  Nous privilégions une approche axée sur la résolution amiable des litiges, en nous efforçant de parvenir à une transaction lorsque cela est possible. Notre démarche proactive consiste à explorer les opportunités de règlement amiable à tous les stades d'une affaire du pré-contentieux jusqu'à l'exécution d'un jugement. Nous sommes convaincus que la transaction permet de résoudre les différends de manière efficace, économique et confidentielle. Ainsi nous nous efforçons de trouver des solutions équilibrées qui préservent les intérêts de nos clients tout en évitant les coûts et les complexités associés aux procédures judiciaires.
                </p>
                <p className="text-gray-600 mt-4 text-justify">
                  Nous savons néanmoins, lorsque cela est nécessaire, mettre en œuvre une stratégie contentieuse efficace. Notre approche repose sur une expertise approfondie des outils procéduraux, combinée à des compétences solides en négociation visant d'une part à sécuriser les créances de nos clients et d'autre part à en poursuivre le paiement.
                </p>
                <p className="text-gray-600 mt-4 text-justify">
                  A cette fin, pour chaque dossier nous déterminons sur mesure les outils les plus efficaces parmi une large palette comprenant notamment les saisies conservatoires de comptes, de biens ou de droits sociaux visant à geler les actifs du débiteur dans l'attente qu'une décision définitive soit rendue par le tribunal, les injonctions de payer lorsque les créances ne sont pas contestées par le débiteur, les actions en référé, les assignations en liquidation judiciaire lorsque le débiteur est en situation de cessation des paiements ou encore la négociation avec les organes de la procédure collective.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src="/src/assets/images/Le Cabinet.jpg"
              alt="Le Cabinet"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
