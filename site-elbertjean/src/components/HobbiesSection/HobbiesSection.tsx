import React from 'react';
import { hobbiesData } from '../../data/hobbies';
import './HobbiesSection.css';

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies">
      <div className="container">
        <h2 className="section-title">SIDE QUESTS & INVENTARIO</h2>
        <div className="hobbies-grid">
          {hobbiesData.map((hobby) => (
            <div key={hobby.id} className="pixel-box inventory-card">
              <span className="inventory-icon">{hobby.icon}</span>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
