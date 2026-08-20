import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio">
      <div className="container hero-wrapper">
        <div className="hero-avatar-container">
          <div className="hero-avatar-frame">
            <img src="/pixel_avatar.png" alt="Elbert Jean Pixel Art Avatar" className="hero-avatar" />
          </div>
        </div>
        <div className="hero-info">
          <span className="hero-tag">[ PLAYER 1 - READY ]</span>
          <h1 className="hero-name">ELBERT JEAN DOS SANTOS</h1>
          <h2 className="hero-tag" style={{ color: 'var(--snes-yellow)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            DESENVOLVEDOR FRONT-END PLENO & FULLSTACK
          </h2>
          <p className="hero-desc">
            Com 30 anos e residente em São José dos Campos/SP, sou <strong>Desenvolvedor Front-end Pleno</strong> com sólida experiência de <strong>mais de 3 anos</strong> na construção de aplicações web de alta performance com <strong>React, TypeScript e Node.js</strong>. Atuo na sustentação de plataformas em produção, criação de dashboards analíticos, sistemas com geoprocessamento e desenvolvimento ponta a ponta dos SaaS <strong>EVinil</strong> e <strong>RotinaBusiness</strong>.
          </p>
          <div className="hero-actions">
            <a href="/curriculo.pdf" download="Curriculo_Elbert_Jean.pdf" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-yellow">
              BAIXAR CURRÍCULO 📜
            </a>
            <a href="https://github.com/ElbertJean" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-purple">
              MEU GITHUB 🐙
            </a>
            <a href="https://www.linkedin.com/in/elbertjean/" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-blue">
              ACESSAR LINKEDIN 💼
            </a>
            <a href="https://canva.link/bg0wrzz5s5gc4gb" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-cyan">
              APRESENTAÇÃO CANVA 🎨
            </a>
            <a href="#evinil" className="btn-pixel btn-red">
              BOSS STAGE 1: EVINIL
            </a>
            <a href="#rotinabusiness" className="btn-pixel btn-green">
              BOSS STAGE 2: ROTINABUSINESS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
