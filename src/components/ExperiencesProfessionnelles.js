import React from 'react';
import cvData from '../data/cvData';

function ExperiencesProfessionnelles() {
  return (
    <div>
      {cvData.experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title}</h3>
          <p>{exp.date}</p>
          {exp.details.map((detail, idx) => (
            typeof detail === 'string' ? 
              <p key={idx}>{detail}</p> : 
              <div key={idx}>
                <strong>{detail.highlight}</strong>
                {detail.list ? <ul>{detail.list.map((item, itemIdx) => <li key={itemIdx}>{item}</li>)}</ul> : <p>{detail.description}</p>}
              </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExperiencesProfessionnelles;