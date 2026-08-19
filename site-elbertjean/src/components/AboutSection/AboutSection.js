import React from 'react';
import { passivesData } from '../../data/passives';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="sobre">
      <div className="container">
        <h2 className="section-title">SOBRE MIM</h2>
        <div className="about-grid">
          <div className="pixel-box rpg-dialog">
            <div className="pixel-box-header">💬 SISTEMA DE DIÁLOGO RPG</div>
            <p>
              Olá! Eu sou o Elbert Jean, <strong>Desenvolvedor Front-end Pleno</strong> com forte atuação <strong>Full Stack</strong> e mais de 3 anos de experiência no desenvolvimento e sustentação de sistemas web escaláveis em produção.
            </p>
            <p>
              Especialista no ecossistema <strong>React</strong> e <strong>TypeScript</strong>, também construo soluções de backend com <strong>Node.js, NestJS, TypeORM, PostgreSQL e MySQL</strong>. Minha atuação abrange desde a arquitetura de componentes e integrações com APIs REST até dashboards analíticos e geoprocessamento.
            </p>
            <p>
              Como idealizador das plataformas SaaS <strong>EVinil</strong> e <strong>RotinaBusiness</strong>, gerenciei o ciclo de vida dos produtos do zero à publicação: modelagem de banco de dados, autenticação, integração de pagamentos recorrentes e infraestrutura cloud, unindo decisões técnicas a insights de negócio reais.
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
}

export default AboutSection;
