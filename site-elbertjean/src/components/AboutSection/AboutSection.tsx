import React from 'react';
import { passivesData } from '../../data/passives';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre">
      <div className="container">
        <h2 className="section-title">SOBRE MIM</h2>
        <div className="about-grid">
          <div className="pixel-box rpg-dialog">
            <div className="pixel-box-header">👾 PLAYER PROFILE // SOBRE MIM</div>
            <p>
              Olá! Eu sou o Elbert Jean, <strong>Desenvolvedor Full Stack</strong>, residente em São José dos Campos/SP, com <strong>mais de 3 anos</strong> de experiência profissional no desenvolvimento e evolução de aplicações web em produção.
            </p>
            <p>
              Minha principal especialidade está no ecossistema <strong>React</strong> e <strong>TypeScript</strong>, trabalhando com arquitetura de componentes, gerenciamento de estado, integrações com APIs REST, dashboards analíticos, performance e soluções de geoprocessamento com <strong>Leaflet</strong> e <strong>GeoJSON</strong>.
            </p>
            <p>
              No backend, desenvolvo soluções utilizando <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>TypeORM</strong>, <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Python</strong> e <strong>Django</strong>, trabalhando com APIs REST, autenticação, regras de negócio e bancos relacionais como <strong>PostgreSQL</strong> e <strong>MySQL</strong>.
            </p>
            <p>
              Também sou responsável pelo desenvolvimento ponta a ponta dos produtos <strong>EVinil</strong> e <strong>RotinaBusiness</strong>, passando por UX/UI, arquitetura, modelagem de dados, frontend, backend, autenticação, infraestrutura, pagamentos recorrentes e publicação das aplicações.
            </p>
            <p>
              Gosto de transformar problemas reais em produtos funcionais, pensando não apenas no código, mas também em arquitetura, performance, escalabilidade, experiência do usuário e evolução do produto.
            </p>
          </div>

          <div className="pixel-box light">
            <div className="pixel-box-header">🧠 HABILIDADES PASSIVAS (BUFFS)</div>
            <div className="passives-list">
              {passivesData.map((item) => (
                <div key={item.id} className="passive-item">
                  <div className="passive-header">
                    <span className={`passive-status ${item.statusClass}`}>[⚡ ATIVA]</span>
                    <span className="passive-title">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
