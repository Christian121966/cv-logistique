import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import Formation from './components/Formation';
import CompetencesTechniques from './components/CompetencesTechniques';
import ExperiencesProfessionnelles from './components/ExperiencesProfessionnelles';

function App() {
  return (
    <div className="App">
      <header className="cv-title">
        <h1>Développeur - intégrateur Web</h1>
      </header>
      <div className="container">
        <Sidebar />
        <main>
          <div className="card">
            <Section title="Formation">
              <Formation />
            </Section>
          </div>
          <div className="card">
            <Section title="Compétences Techniques">
              <CompetencesTechniques />
            </Section>
          </div>
          <div className="card">
            <Section title="Expériences Professionnelles">
              <ExperiencesProfessionnelles />
            </Section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
