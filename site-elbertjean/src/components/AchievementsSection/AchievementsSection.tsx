import React from 'react';
import { achievementsData } from '../../data/achievements';
import './AchievementsSection.css';

const AchievementsSection: React.FC = () => {
  return (
    <section id="formacao">
      <div className="container">
        <h2 className="section-title">CONQUISTAS DESBLOQUEADAS</h2>
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="pixel-box achievement-card">
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-details">
                <h3>{item.typeTitle}</h3>
                <div className="institution">{item.institution}</div>
                <p>{item.course}</p>
                <div className="year">{item.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
