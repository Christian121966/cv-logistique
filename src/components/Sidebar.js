import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>Christian Boissy</h1>
      <address>
        8, rue du Moulin, 78130 Les Mureaux<br />
        Tel : 0669311966<br />
        <a href="mailto:boissychristian@gmail.com">boissychristian@gmail.com</a><br />
        <a href="https://linkedin.com/in/christian-boissy-272b68181" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/christian-boissy-272b68181
          <p>Permis B - Véhicule</p>  
        </a>
      </address>
      <h2>Compétences professionnelles et linguistiques</h2>
      <ul>
        <li>Compétence 1</li>
        <li>Compétence 2</li>
        <li>Compétence 3</li>
        <li>Compétence 4</li>
        <li>Compétence 5</li>
      </ul>
      <h2>Logiciel et environnements</h2>
      <ul>
        <li>Compétence 1</li>
        <li>Compétence 2</li>
        <li>Compétence 3</li>
        <li>Compétence 4</li>
        <li>Compétence 5</li>
      </ul>
      <h2>Qualités humaines</h2>
      <ul>
        <li>Compétence 1</li>
        <li>Compétence 2</li>
        <li>Compétence 3</li>
        <li>Compétence 4</li>
        <li>Compétence 5</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
