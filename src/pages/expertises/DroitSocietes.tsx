import React from 'react';
import ExpertiseDetail from '../../components/ExpertiseDetail';
import droitSocietesImage from '../../assets/images/expertises/Droit des sociétés.jpg';

export default function DroitSocietes() {
  const content = (
    <>
      <p>
        Nous accompagnons les entreprises et leurs dirigeants pour résoudre des litiges complexes en droit des sociétés.
      </p>
      <p>
        Notre expertise en résolution de conflits entre actionnaires notamment en cas de situations de blocage, de violation de pactes d'actionnaires ou encore d'abus de minorité ou de majorité, nous permet de rétablir la stabilité de votre société en maintenant la défense de vos intérêts.
      </p>
      <p>
        Nous intervenons également en matière de responsabilité des dirigeants compte-tenu des enjeux déterminants que peuvent engendrer des fautes de gestion, une violation de statuts ou de pactes extra-statutaires ainsi que des abus de pouvoirs.
      </p>
      <p>
        Nous assistons par ailleurs les entreprises dans les litiges post-cession ou acquisition de sociétés ou de fonds de commerce (mise en œuvre de garanties d'actif et de passif, ajustement ou complément de prix…) devant toutes juridictions au fond ou en référé.
      </p>
      <p className="font-medium">
        Notre engagement : vous fournir un appui stratégique et un accompagnement sur mesure afin de protéger et faire valoir vos droits.
      </p>
    </>
  );

  return (
    <ExpertiseDetail
      title="Droit des sociétés"
      description="Résolution des litiges complexes et protection des intérêts sociaux"
      imagePath={droitSocietesImage}
      content={content}
    />
  );
}
