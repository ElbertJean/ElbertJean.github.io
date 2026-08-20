import React from 'react';
import { featuredProjectsData } from '../../data/projects';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  return (
    <>
      {featuredProjectsData.map((project) => (
        <section key={project.id} id={project.sectionId} className={project.showcaseClass}>
          <div className="container">
            <h2 className="section-title" style={{ color: project.titleColor }}>
              {project.levelTitle}
            </h2>
            <div className={project.layoutClass}>
              <div className={project.graphicClass}>
                <div className={project.cartridgeClass}>
                  <div className={project.labelClass}>
                    <span>{project.labelTitle}</span>
                    <span style={{ fontSize: '0.45rem', marginTop: '0.4rem', color: project.titleColor }}>
                      {project.labelSubtitle}
                    </span>
                  </div>
                  <div style={{ color: '#fff', fontSize: '0.4rem', fontFamily: "'Press Start 2P'", textAlign: 'center' }}>
                    SUPER 16-BIT PLATFORM
                  </div>
                </div>
                {project.id === 'evinil' ? (
                  <div className="evinil-vinyl">
                    <div className="vinyl-grooves">
                      <div className="vinyl-label">
                        <div className="vinyl-center"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rotina-badge-icon">
                    <span>📋</span>
                    <span style={{ fontSize: '0.45rem', marginTop: '0.5rem' }}>CHECKLIST</span>
                  </div>
                )}
              </div>
              <div className={project.id === 'evinil' ? 'evinil-desc' : 'rotina-desc'}>
                <h3 style={{ color: project.titleColor, fontSize: '1.2rem', textShadow: '2px 2px 0px #000' }}>
                  {project.domain}
                </h3>
                {project.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ margin: '1rem 0' }}>
                    {p}
                  </p>
                ))}
                <div className={project.id === 'evinil' ? 'evinil-tags' : 'rotina-tags'}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={project.tagClass}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  {project.buttons.map((btn, idx) => (
                    <a key={idx} href={btn.url} target="_blank" rel="noopener noreferrer" className={`btn-pixel ${btn.btnClass}`}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectsSection;
