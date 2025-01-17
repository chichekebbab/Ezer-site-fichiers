import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

export default function Expertises() {
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
        title="Nos Expertises"
        description="Domaines d'intervention"
        backgroundImage="/src/assets/images/expertise.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <SectionTitle 
          subtitle="Nos Expertises"
          title="Domaines d'intervention"
          alignment="center"
        />

        <div className="space-y-12">
          {/* Droit Commercial */}
          <section id="droit-commercial" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Droit commercial</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Nous accompagnons nos clients dans la défense de leurs intérêts commerciaux et les aidons à sécuriser leurs relations d’affaires.
              </p>
              <p>
                Nos domaines d’intervention comprennent notamment les ruptures abusives de pourparlers, la protection contre les actes de concurrence déloyale, la rupture brutale des relations commerciales établies, la responsabilité contractuelle et délictuelle ou le recouvrement de créances.
              </p>
              <p>
                Nous accompagnons également nos clients dans les litiges nés d’inexécution ou de mauvaise exécution contractuelle. Cela recouvre notamment le non-respect des conditions de livraison ou de qualité des biens ou services, les retards dans l’exécution des prestations, le non-respect des clauses de garantie, la violation des clause de confidentialité ou de non-concurrence ou tout autre engagement déterminé.
              </p>
              <p>
                Le cabinet vous accompagne devant toutes les juridictions, en première instance comme en appel, en procédures de référé ou au fond. 
              </p>
              <p className="font-medium">
                Notre engagement : apporter une défense solide et réactive pour sécuriser vos activités commerciales et faire de votre réussite notre priorité.
              </p>
            </div>
          </section>

          {/* Droit des sociétés */}
          <section id="droit-des-societes" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Droit des sociétés</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Nous accompagnons les entreprises et leurs dirigeants pour résoudre des litiges complexes en droit des sociétés.
              </p>
              <p>
                Notre expertise en résolution de conflits entre actionnaires notamment en cas de situations de blocage, de violation de pactes d’actionnaires ou encore d’abus de minorité ou de majorité, nous permet de rétablir la stabilité de votre société en maintenant la défense de vos intérêts. 
              </p>
              <p>
                Nous intervenons également en matière de responsabilité des dirigeants compte-tenu des enjeux déterminants que peuvent engendrer des fautes de gestion, une violation de statuts ou de pactes extra-statutaires ainsi que des abus de pouvoirs. 
              </p>
              <p>
                Nous assistons par ailleurs les entreprises dans les litiges post-cession ou acquisition de sociétés ou de fonds de commerce (mise en œuvre de garanties d’actif et de passif, ajustement ou complément de prix…) devant toutes juridictions au fond ou en référé. 
              </p>
              <p className="font-medium">
                Notre engagement : vous fournir un appui stratégique et un accompagnement sur mesure afin de protéger et faire valoir vos droits.
              </p>
            </div>
          </section>

          {/* Droits et actifs numériques */}
          <section id="droits-actifs-numeriques" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Droits et actifs numériques</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Grâce à notre expérience en droit des activités numériques, nous accompagnons les entreprises dans la résolution de leurs litiges digitaux. 
              </p>
              <p>
                Nous intervenons notamment en cas d’inexécution de contrats informatiques (contrats de développement ou de licence de logiciel, contrats de maintenance, d'infogérance, contrats SaaS, contrats de prestation de service informatique, contrats d'intégration système) et défendons vos intérêts face aux prestataires défaillants en assurant le respect des engagements contractuels. 
              </p>
              <p>
                Sensibles aux enjeux d’e-réputation, nous assistons notre clientèle dans la protection de son image en ligne et dans la lutte contre les atteintes réputationnelles (avis diffamatoires, dénigrement, révélation de données confidentielles, campagnes de doxing,…). 
              </p>
              <p>
                Fort de notre expertise en matière de protection des bases de données, nous veillons également à la sécurité de vos actifs numériques.
              </p>
              <p className="font-medium">
                Notre engagement : sécuriser votre activité numérique pour vous permettre de vous concentrer sur votre cœur de métier.
              </p>
            </div>
          </section>

          {/* Droit de la conso et de la distribution */}
          <section id="droit-conso-distribution" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Droit de la conso et de la distribution</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Nous vous accompagnons dans la gestion de vos litiges avec les consommateurs et intervenons notamment sur des contentieux relatifs aux pratiques commerciales trompeuses, à la publicité mensongère ou encore à des manquements aux obligations d’information. 
              </p>
              <p>
                Dans ce cadre, nous vous assistons tant devant les autorités régulatrices telles que la DGCCRF ou l’ARPP, pour répondre aux contrôles et enquêtes susceptibles d’impacter votre activité, que devant les juridictions.
              </p>
              <p>
                Notre expertise couvre également les litiges relatifs à la conformité et à la sécurité ainsi qu’aux garanties légales et contractuelles de vos produits. 
              </p>
              <p className="font-medium">
                Notre engagement : vous offrir une défense sur-mesure pour sécuriser vos relations avec les consommateurs et protéger durablement la réputation de vos produits et services.
              </p>
            </div>
          </section>

          {/* Droit de la construction - Risques industriels */}
          <section id="droit-construction-risques-industriels" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Droit de la construction - Risques industriels</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Nous accompagnons les professionnels du secteur de la construction pour sécuriser et défendre leurs projets. 
              </p>
              <p>
                Dans ce cadre, nous intervenons dans la gestion des litiges techniques en veillant à la protection de vos intérêts et à la bonne exécution des ouvrages. 
              </p>
              <p>
                Rompu aux procédures d’expertise judiciaire, EZER accompagne tant les maîtres d’ouvrage que les architectes, bureaux de contrôle ou les sous-traitants pour déterminer les causes de désordres ou sinistres et établir la responsabilité des parties amiablement ou judiciairement.  
              </p>
              <p>
                Nous travaillons en étroite collaboration avec un réseau d’experts techniques dans le but de défendre au mieux les intérêts de nos clients lors des expertises judiciaires et faciliter la prise de décisions, notamment dans le cadre de négociations amiables. 
              </p>
              <p>
                Par ailleurs, le cabinet intervient en matière de vices cachés et de défauts de conformité dans des litiges nécessitant une expertise technique pointue. 
              </p>
              <p className="font-medium">
                Notre engagement : sécuriser vos projets de construction et les risques industriels grâce à une expertise juridique fiable.
              </p>
            </div>
          </section>

          {/* Modes alternatifs de règlements des litiges */}
          <section id="modes-alternatifs-reglement-litiges" className="scroll-mt-24 pt-28">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Modes alternatifs de règlements des litiges</h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Nous accompagnons entreprises et particuliers dans la recherche de solutions efficaces et constructives pour leurs différends. Convaincus que la voie contentieuse classique n'est pas toujours la plus appropriée, nous explorons systématiquement, y compris en cours de procédure, toutes les options de médiation, de conciliation ou de négociation susceptibles de conduire à un règlement amiable, rapide et maîtrisé. 
              </p>
              <p>
                Cette approche permet de réduire sensiblement les coûts et les délais d'un contentieux tout en préservant les relations d’affaires et la réputation des parties.
              </p>
              <p>
                Grâce à notre expertise en procédures participatives et en transactions, nous aidons nos clients à structurer des solutions équilibrées qui sécurisent leurs droits et intérêts. Lorsque cela est nécessaire, nous les assistons également dans le cadre d’arbitrages internes pour garantir un règlement confidentiel et définitif.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
