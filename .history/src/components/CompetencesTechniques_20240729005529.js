import React from 'react';
import cvData from '../data/cvData';

function CompetencesTechniques() {
  // Liste des éléments à mettre en gras
  const boldItems = [
    "Developpement Web",
    "Logistique",
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
      <h3>Developpement Web</h3>
      <ul>
        {cvData.competences.developpementWeb.map((item, index) => (
          <li key={index} className={item.title ? 'li_title' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
      <h3>Logistique</h3>
      <ul>
        {cvData.competences.logistique.map((item, index) => (
          <li key={index} className={item.title ? 'li_title' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CompetencesTechniques;