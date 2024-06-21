import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import ProfilePicture from './components/ProfilePicture';
import cvData from './data/cvData';
import profileImage from './path/to/photo.jpg'; // Assurez-vous de mettre la photo dans le bon chemin

function App() {
  return (
    <div className="App">
      <Header />
      <ProfilePicture src={profileImage} />
      <main>
        <Section title="Formation">
          {cvData.formation.map((item, index) => (
            <div key={index}>
              <strong>{item.date}</strong>: {item.title} - {item.details}
            </div>
          ))}
        </Section>
        <Section title="Compétences Techniques">
          <h3>Développement Web</h3>
          <ul>
            {cvData.competences.developpementWeb.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Logistique</h3>
          <ul>
            {cvData.competences.logistique.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title="Expériences Professionnelles">
          {cvData.experiences.map((item, index) => (
            <div key={index}>
              <strong>{item.date}</strong>: {item.title} - {item.details}
            </div>
          ))}
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
