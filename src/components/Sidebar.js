import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/images/Chris.png" alt="Chris" className="profile-photo" />
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
        <li>
          <h3>Communication multilingue</h3> 
          <span>Maîtrise du français, Anglais scolaire.</span>
          </li>
      </ul>
      <h2>Logiciel et environnements</h2>
      <ul>
        <li>
          <h3>Microsoft Office Suite</h3>
          <span>Utilisation d'Excel, PowerPoint, et Word pour la gestion de données, la présentation d'informations et la documentation.</span>
        </li>
        <li>
          <h3>Environnements de développement</h3> 
          <span>Maîtrise de Visual Studio Code pour le développement de logiciels.</span>
          </li>
        <li>
          <h3>Systèmes d'exploitation</h3>
          <span>Expérience avec Windows, macOS, et Linux pour le déploiement d'applications et la gestion de serveurs.</span>
          </li>
        <li>
          <h3>Outils de versioning</h3>
          <span>Compétence dans l'utilisation de Git pour le contrôle de version et la collaboration en équipe.</span>
        </li>
      </ul>
      <h2>Qualités humaines</h2>
      <ul>
        <li>
          <h3>Capacité d'adaptation</h3> 
          <span>Aptitude à s'adapter rapidement aux nouvelles technologies et environnements de travail.</span>
        </li>
        <li>
          <h3>Esprit d'équipe</h3> 
          <span>Collaboration efficace dans des équipes multidisciplinaires et multiculturelles.</span>
        </li>
        <li>
          <h3>Leadership</h3> 
          <span>Expérience en tant que chef de projet, guidant les équipes vers la réalisation des objectifs.</span>
        </li>
        <li>
          <h3>Résolution de problèmes</h3> 
          <span>Compétence avérée dans l'identification et la résolution de problèmes complexes de manière créative et efficace.</span>
        </li>
        <li>
          <h3>Empathie</h3> 
          <span>Forte capacité à comprendre et à répondre aux besoins des clients et des collègues.</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
