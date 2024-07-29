import React from 'react';
import cvData from '../data/cvData';

function CompetencesTechniques() {
  // Liste des éléments à mettre en gras
  const boldItems = [
    "HTML5, CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive design",
    "Optimisation SEO"
  ];

  // Fonction pour vérifier si l'élément doit être en gras
  const isBold = (item) => {
    return boldItems.includes(item);
  };

  return (
    <>
      <h3>Developpement Web</h3>
      <ul>
        {cvData.competences.developpementWeb.map((item, index) => (
          <li key={index} className={item.title ? "li_title" : ""}>
            {isBold(item.text) ? <strong>{item.text}</strong> : item.text}
          </li>
        ))}
      </ul>
      <h3>Logistique</h3>
      <ul>
        {cvData.competences.logistique.map((item, index) => (
          <li key={index}>
            {isBold(item) ? <strong>{item}</strong> : item}
          </li>
        ))}
      </ul>
      {/* <h3>Communication</h3>
      <ul>
        {cvData.competences.communication.map((item, index) => (
          <li key={index}>
            {isBold(item) ? <strong>{item}</strong> : item}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default CompetencesTechniques;
