import React from 'react';
import cvData from '../data/cvData';

function Formation() {
  return (
    <>
      {cvData.formation.map((item, index) => (
        <div key={index}>
          <strong>{item.date}</strong> {item.title} - {item.details}
        </div>
      ))}
    </>
  );
}

export default Formation;