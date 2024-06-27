import React from 'react';
import cvData from '../data/cvData';

function CompetencesTechniques() {
  // Liste des éléments à mettre en gras
  const boldItems = [
    "Capacité de transport de marchandises",
    "CACES 1, 2, 3 & 5",
    "Communication"
  ];

  // Fonction pour vérifier si l'élément doit être en gras
  const isBold = (item) => {
    return boldItems.some(boldItem => item.includes(boldItem));
  };

  return (
    <>
      <h3>Logistique</h3>
      <ul>
        {cvData.competences.logistique.map((item, index) => (
          <li key={index}>
            {isBold(item) ? <strong>{item}</strong> : item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CompetencesTechniques;