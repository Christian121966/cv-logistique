import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import cvData from './data/cvData';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <main>
          <div className="card">
            <Section title="Formation">
              {cvData.formation.map((item, index) => (
                <div key={index}>
                  <strong>{item.date}</strong>: {item.title} - {item.details}
                </div>
              ))}
            </Section>
          </div>
          <div className="card">
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
          </div>
          <div className="card">
            <Section title="Expériences Professionnelles">
              {cvData.experiences.map((item, index) => (
                <div key={index}>
                  <strong>{item.date}</strong>: {item.title} - {item.details}
                </div>
              ))}
            </Section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;