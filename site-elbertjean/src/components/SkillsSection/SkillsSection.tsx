import React from 'react';
import { skillsData } from '../../data/skills';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  return (
    <section id="habilidades">
      <div className="container">
        <h2 className="section-title">ÁRVORE DE HABILIDADES</h2>
        <div className="skills-grid">
          {skillsData.map((cat) => (
            <div key={cat.id} className="pixel-box">
              <div className="pixel-box-header" style={{ color: cat.color }}>
                {cat.title}
              </div>
              <div style={{ marginTop: '1rem' }}>
                {cat.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
