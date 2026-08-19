import React from 'react';
import { experiencesData } from '../../data/experiences';
import './ExperiencesSection.css';

const ExperiencesSection: React.FC = () => {
  return (
    <section id="experiencia">
      <div className="container">
        <h2 className="section-title">QUEST LOG (MISSÕES COMPLETAS)</h2>
        <div className="quest-timeline">
          {experiencesData.map((exp) => (
            <div key={exp.id} className={`pixel-box quest-item ${exp.isLight ? 'light' : ''}`}>
              <div className="quest-header">
                <div className="quest-title-container">
                  <span className={`quest-status ${exp.statusClass}`}>{exp.status}</span>
                  <h3 className="quest-title">{exp.title}</h3>
                </div>
                <span className="quest-date">{exp.date}</span>
              </div>
              <div className="quest-company">{exp.company}</div>
              <ul className="quest-tasks" style={{ marginTop: '1rem' }}>
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
