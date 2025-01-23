import React from 'react';
import ExpertiseDetail from '../../components/ExpertiseDetail';
import modesAlternatifsImage from '../../assets/images/expertises/Modes alternatifs.jpg';

export default function ModesAlternatifs() {
  const content = (
    <>
      <p>
        Nous accompagnons entreprises et particuliers dans la recherche de solutions efficaces et constructives pour leurs différends. Convaincus que la voie contentieuse classique n'est pas toujours la plus appropriée, nous explorons systématiquement, y compris en cours de procédure, toutes les options de médiation, de conciliation ou de négociation susceptibles de conduire à un règlement amiable, rapide et maîtrisé.
      </p>
      <p>
        Cette approche permet de réduire sensiblement les coûts et les délais d'un contentieux tout en préservant les relations d'affaires et la réputation des parties.
      </p>
      <p>
        Grâce à notre expertise en procédures participatives et en transactions, nous aidons nos clients à structurer des solutions équilibrées qui sécurisent leurs droits et intérêts. Lorsque cela est nécessaire, nous les assistons également dans le cadre d'arbitrages internes pour garantir un règlement confidentiel et définitif.
      </p>
      <p className="font-medium mt-4">
        Notre engagement : vous accompagner pour parvenir à une solution amiable, rapide et maîtriser les coûts du règlement de votre litige.
      </p>
    </>
  );

  return (
    <ExpertiseDetail
      title="Modes alternatifs de règlements des litiges"
      description="Solutions amiables et efficaces pour la résolution des différends"
      imagePath={modesAlternatifsImage}
      content={content}
    />
  );
}
