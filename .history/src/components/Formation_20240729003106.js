import React from 'react';
import cvData from '../data/cvData';


function Formation() {
  return (
    <>
      {cvData.formation.map((item, index) => (
        <div key={index} className="formation-item">
          <div className="formation-date"><strong>{item.date}</strong></div>
          <div className="formation-title">{item.title}</div>
          {item.details && <div className="formation-details">{item.details}</div>}
        </div>
      ))}
    </>
  );
}

export default Formation;
