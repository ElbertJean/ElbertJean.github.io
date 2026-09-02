import React, { useState } from 'react';
import { academicProjectsData } from '../../data/academicProjects';
import './AcademicProjectsSection.css';

const AcademicProjectsSection: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>('ALL');

  const selectedProject = academicProjectsData.find(p => p.id === selectedSemester);

  return (
    <section id="academicos" className="academic-showcase">
      <div className="container">
        <div className="academic-header">
          <h2 className="section-title" style={{ color: '#00d2d3' }}>
            SIDE QUESTS: PROJETOS ACADÊMICOS
          </h2>
          <p className="academic-subtitle">
            Aplicações Integradoras de Aprendizado (APIs FATEC SJC — 1º ao 6º Semestre)
          </p>
        </div>

        {/* Semester Selector Tabs */}
        <div className="semester-tabs">
          <button
            className={`semester-tab ${selectedSemester === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedSemester('ALL')}
          >
            TODOS (1º AO 6º)
          </button>
          {academicProjectsData.map((project) => (
            <button
              key={project.id}
              className={`semester-tab ${selectedSemester === project.id ? 'active' : ''}`}
              onClick={() => setSelectedSemester(project.id)}
            >
              {project.semester}
            </button>
          ))}
        </div>

        {/* MODE 1: ALL SEMESTERS (GRID VIEW) */}
        {selectedSemester === 'ALL' && (
          <div className="academic-grid">
            {academicProjectsData.map((project) => (
              <div key={project.id} className="academic-card">
                <div>
                  <div className="academic-card-header">
                    <span
                      className="academic-badge"
                      style={{ backgroundColor: project.badgeColor || '#00d2d3' }}
                    >
                      {project.semester}
                    </span>
                    <span className="academic-period">{project.period}</span>
                  </div>

                  <div className="academic-partner">
                    🏢 Parceiro: {project.partnerUrl ? (
                      <a href={project.partnerUrl} target="_blank" rel="noopener noreferrer">
                        {project.partner}
                      </a>
                    ) : (
                      <span>{project.partner}</span>
                    )}
                  </div>

                  <h3 className="academic-title">{project.title}</h3>

                  <div className="academic-section-block academic-problem-block">
                    <span className="academic-block-label">🎯 O PROBLEMA / DESAFIO:</span>
                    <p className="academic-text">{project.problem}</p>
                  </div>

                  <div className="academic-section-block academic-role-block">
                    <span className="academic-block-label" style={{ color: '#00d2d3' }}>
                      💻 MEU PAPEL & IMPACTO:
                    </span>
                    <p className="academic-text">{project.myRole}</p>
                  </div>

                  <div className="academic-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="academic-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="academic-footer">
                  <button
                    className="btn-academic-detail"
                    onClick={() => setSelectedSemester(project.id)}
                  >
                    VER DOSSIÊ COMPLETO 📜
                  </button>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-academic-repo"
                  >
                    VER REPOSITÓRIO 🔗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODE 2: DETAILED SEMESTER VIEW (DOSSIER) */}
        {selectedSemester !== 'ALL' && selectedProject && (
          <div className="dossier-container">
            <div className="dossier-card">
              <div className="dossier-top-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span
                    className="academic-badge"
                    style={{ backgroundColor: selectedProject.badgeColor || '#00d2d3' }}
                  >
                    {selectedProject.semester}
                  </span>
                  <span className="academic-period">{selectedProject.period}</span>
                </div>
                <button
                  className="btn-back-grid"
                  onClick={() => setSelectedSemester('ALL')}
                >
                  ⬅ VER TODOS OS SEMESTRES
                </button>
              </div>

              <div className="academic-partner" style={{ fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                🏢 <span>Parceiro Acadêmico:</span>
                {selectedProject.partnerUrl ? (
                  <a href={selectedProject.partnerUrl} target="_blank" rel="noopener noreferrer">
                    {selectedProject.partner}
                  </a>
                ) : (
                  <span>{selectedProject.partner}</span>
                )}
              </div>

              <h3 className="dossier-title-main" style={{ color: selectedProject.badgeColor || '#00d2d3' }}>
                {selectedProject.title}
              </h3>

              <div className="dossier-grid-sections">
                {/* Section 1: Desafio do Cliente */}
                <div className="dossier-section">
                  <h4 className="dossier-section-title" style={{ color: '#ff7979' }}>
                    🎯 DESAFIO DO CLIENTE / CONTEXTO DA API
                  </h4>
                  <p className="academic-text" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Section 2: Contribuições Pessoais */}
                {selectedProject.fullContributions && (
                  <div className="dossier-section">
                    <h4 className="dossier-section-title" style={{ color: '#00d2d3' }}>
                      💻 MINHAS CONTRIBUIÇÕES PESSOAIS & DESENVOLVIMENTO
                    </h4>
                    <ul className="contributions-list">
                      {selectedProject.fullContributions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section 3: Hard Skills */}
                {selectedProject.hardSkills && (
                  <div className="dossier-section">
                    <h4 className="dossier-section-title" style={{ color: '#2ed573' }}>
                      ⚔️ HARD SKILLS DEMONSTRADAS & AUTONOMIA
                    </h4>
                    <div className="skills-grid">
                      {selectedProject.hardSkills.map((sk, idx) => (
                        <div key={idx} className="skill-item">
                          <span className="skill-name">{sk.skill}</span>
                          <span
                            className={
                              sk.level.toLowerCase().includes('autonomia')
                                ? 'hard-skill-badge skill-level-autonomia'
                                : 'hard-skill-badge skill-level-orientacao'
                            }
                          >
                            {sk.level}
                          </span>
                        </div>


                      ))}
                    </div>
                  </div>
                )}

                {/* Section 4: Soft Skills & Tomada de Decisão */}
                {selectedProject.softSkillsText && (
                  <div className="dossier-section">
                    <h4 className="dossier-section-title" style={{ color: '#a29bfe' }}>
                      🧠 SOFT SKILLS, LIDERANÇA & TOMADA DE DECISÃO
                    </h4>
                    <div className="soft-skills-box">
                      <p>{selectedProject.softSkillsText}</p>
                    </div>
                  </div>
                )}

                {/* Section 5: Tecnologias Utilizadas */}
                <div className="dossier-section">
                  <h4 className="dossier-section-title" style={{ color: '#f39c12' }}>
                    🛠️ STACK TECNOLÓGICA COMPLETA
                  </h4>
                  <div className="academic-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="academic-tag" style={{ fontSize: '0.55rem', padding: '0.4rem 0.7rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dossier Footer Action */}
              <div className="academic-footer" style={{ marginTop: '2rem' }}>
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-academic-repo"
                  style={{ fontSize: '0.7rem', padding: '0.9rem' }}
                >
                  ACESSAR REPOSITÓRIO OFICIAL NO GITHUB 🔗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AcademicProjectsSection;
