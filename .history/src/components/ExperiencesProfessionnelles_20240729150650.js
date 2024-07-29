import React from 'react';
import cvData from '../data/cvData';

function ExperiencesProfessionnelles() {
  // Vérifiez que cvData.experiences est défini et qu'il s'agit d'un tableau
  if (!cvData.experiences || !Array.isArray(cvData.experiences)) {
    return <div>Aucune expérience professionnelle disponible.</div>;
  }

  return (
    <div>
      {cvData.experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title}</h3>
          <p>{exp.date}</p>
          {exp.details && exp.details.map((detail, idx) => (
            typeof detail === 'string' ? 
              <p key={idx}>{detail}</p> : 
              <div key={idx}>
                <strong>{detail.highlight}
                {detail.list ? <ul>{detail.list.map((item, itemIdx) => <li key={itemIdx}>{item}</li>)}</ul> : <p>{detail.description}</p>}
              </div>
          ))}
          {/* Si exp.details n'est pas défini, affichez un message ou laissez vide */}
          {!exp.details && <p></p>}
        </div>
      ))}
    </div>
  );
}

export default ExperiencesProfessionnelles;
