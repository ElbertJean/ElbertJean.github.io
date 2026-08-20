import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ExperiencesSection from './components/ExperiencesSection';
import ProjectsSection from './components/ProjectsSection';
import HobbiesSection from './components/HobbiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'sobre',
        'habilidades',
        'formacao',
        'experiencia',
        'evinil',
        'rotinabusiness',
        'hobbies',
        'contato'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
