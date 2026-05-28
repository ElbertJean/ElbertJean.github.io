import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="hero">
        <h1 className="hero-title">
          Olá, eu sou<br />Elbert Jean.
        </h1>
        <p className="hero-subtitle">
          Desenvolvedor de Software focado em criar experiências digitais vibrantes e modernas.
        </p>
        <button className="cta-button" onClick={() => alert('Em breve!')}>
          Ver Meus Projetos
        </button>
      </main>
    </div>
  );
}

export default App;
