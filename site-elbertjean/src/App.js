import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'habilidades', 'formacao', 'experiencia', 'evinil', 'hobbies', 'contato'];
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
      {/* Floating Navbar */}
      <div className={`navbar-container pixel-box ${menuOpen ? 'menu-open' : ''}`}>
        <nav className="navbar">
          <a href="#inicio" className="navbar-logo" onClick={() => setMenuOpen(false)}>ELBERT JEAN</a>
          <button className="btn-pixel menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'START' : 'SELECT'}
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''} onClick={() => setMenuOpen(false)}>INÍCIO</a>
            </li>
            <li className="nav-item">
              <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''} onClick={() => setMenuOpen(false)}>SOBRE</a>
            </li>
            <li className="nav-item">
              <a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''} onClick={() => setMenuOpen(false)}>HABILIDADES</a>
            </li>
            <li className="nav-item">
              <a href="#formacao" className={activeSection === 'formacao' ? 'active' : ''} onClick={() => setMenuOpen(false)}>CONQUISTAS</a>
            </li>
            <li className="nav-item">
              <a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={() => setMenuOpen(false)}>MISSÕES</a>
            </li>
            <li className="nav-item">
              <a href="#evinil" className={activeSection === 'evinil' ? 'active' : ''} onClick={() => setMenuOpen(false)}>EVINIL</a>
            </li>
            <li className="nav-item">
              <a href="#hobbies" className={activeSection === 'hobbies' ? 'active' : ''} onClick={() => setMenuOpen(false)}>HOBBIES</a>
            </li>
            <li className="nav-item">
              <a href="#contato" className={activeSection === 'contato' ? 'active' : ''} onClick={() => setMenuOpen(false)}>SALVAR</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
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
              DESENVOLVEDOR FRONT-END PLENO // ESPECIALISTA REACT & TS
            </h2>
            <p className="hero-desc">
              Com 29 anos, residente de São José dos Campos/SP e <strong>3 anos de sólida experiência em Front-End</strong>, desenvolvo interfaces de alta performance, dashboards complexos e visualizações de dados interativas orientadas a mapas georreferenciados.
            </p>
            <div className="hero-actions">
              <a href="#evinil" className="btn-pixel btn-red">BOSS STAGE: EVINIL</a>
              <a href="#experiencia" className="btn-pixel btn-blue">VER MISSÕES (PORTFÓLIO)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre">
        <div className="container">
          <h2 className="section-title">SOBRE MIM</h2>
          <div className="about-grid">
            <div className="pixel-box rpg-dialog">
              <div className="pixel-box-header">💬 SISTEMA DE DIÁLOGO RPG</div>
              <p>
                Eu sou o Elbert, desenvolvedor front-end com <strong>3 anos de experiência</strong>, focado em criar aplicações escaláveis e refinadas com <strong>React</strong> e <strong>TypeScript</strong>.
              </p>
              <p>
                Tenho sólida experiência no ecossistema front-end, atuando desde a construção de interfaces e prototipação no Figma até a entrega final de dashboards analíticos, relatórios e mapas interativos (utilizando Leaflet e GeoJSON) com alta performance.
              </p>
              <p>
                Além disso, possuo a mentalidade de dono de produto: fundei o <strong>EVinil</strong>, uma plataforma SaaS fullstack onde gerenciei todo o ciclo de vida do software, unindo decisões técnicas a insights de negócio reais.
              </p>
            </div>

            <div className="pixel-box light">
              <div className="pixel-box-header">🧠 SOFT SKILLS (ATRIBUTOS)</div>
              <div className="skills-list">
                <div className="skill-bar-container">
                  <div className="skill-name">
                    <span>Resolução de Problemas</span>
                    <span>95%</span>
                  </div>
                  <div className="pixel-progress-bg">
                    <div className="pixel-progress-fill" style={{ width: '95%', backgroundColor: 'var(--snes-red)' }}></div>
                  </div>
                </div>

                <div className="skill-bar-container">
                  <div className="skill-name">
                    <span>Código Limpo & Organização</span>
                    <span>90%</span>
                  </div>
                  <div className="pixel-progress-bg">
                    <div className="pixel-progress-fill" style={{ width: '90%', backgroundColor: 'var(--snes-blue)' }}></div>
                  </div>
                </div>

                <div className="skill-bar-container">
                  <div className="skill-name">
                    <span>UX / UI & Performance</span>
                    <span>88%</span>
                  </div>
                  <div className="pixel-progress-bg">
                    <div className="pixel-progress-fill" style={{ width: '88%', backgroundColor: 'var(--snes-green)' }}></div>
                  </div>
                </div>

                <div className="skill-bar-container">
                  <div className="skill-name">
                    <span>Comunicação & Equipe</span>
                    <span>85%</span>
                  </div>
                  <div className="pixel-progress-bg">
                    <div className="pixel-progress-fill" style={{ width: '85%', backgroundColor: 'var(--snes-yellow)' }}></div>
                  </div>
                </div>

                <div className="skill-bar-container">
                  <div className="skill-name">
                    <span>Adaptabilidade</span>
                    <span>92%</span>
                  </div>
                  <div className="pixel-progress-bg">
                    <div className="pixel-progress-fill" style={{ width: '92%', backgroundColor: 'var(--snes-gray)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades (Hard Skills) Section */}
      <section id="habilidades">
        <div className="container">
          <h2 className="section-title">ÁRVORE DE HABILIDADES</h2>
          <div className="skills-grid">
            {/* Front-End */}
            <div className="pixel-box">
              <div className="pixel-box-header" style={{ color: 'var(--snes-red)' }}>🔮 FRONT-END & VISUALIZAÇÃO</div>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-badge">React</span>
                <span className="skill-badge">TypeScript</span>
                <span className="skill-badge">React Native</span>
                <span className="skill-badge">Tailwind CSS</span>
                <span className="skill-badge">Material UI</span>
                <span className="skill-badge">Angular</span>
                <span className="skill-badge">Leaflet</span>
                <span className="skill-badge">Recharts</span>
              </div>
            </div>

            {/* Back-End */}
            <div className="pixel-box">
              <div className="pixel-box-header" style={{ color: 'var(--snes-blue)' }}>🛡️ BACK-END & BANCO DE DADOS</div>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-badge">SQL</span>
                <span className="skill-badge">PostgreSQL</span>
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">Python</span>
              </div>
            </div>

            {/* Tools */}
            <div className="pixel-box">
              <div className="pixel-box-header" style={{ color: 'var(--snes-green)' }}>🧪 UTILITÁRIOS & INFRA</div>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">Postman</span>
                <span className="skill-badge">DBeaver</span>
                <span className="skill-badge">Figma</span>
                <span className="skill-badge">Stripe</span>
                <span className="skill-badge">AWS</span>
                <span className="skill-badge">Vercel</span>
                <span className="skill-badge">Supabase</span>
                <span className="skill-badge">APIs REST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section id="formacao">
        <div className="container">
          <h2 className="section-title">CONQUISTAS DESBLOQUEADAS</h2>
          <div className="achievements-grid">
            <div className="pixel-box achievement-card">
              <div className="achievement-icon">🎓</div>
              <div className="achievement-details">
                <h3>GRADUAÇÃO</h3>
                <div className="institution">Fatec Jessen Vidal</div>
                <p>Tecnologia em Banco de Dados</p>
                <div className="year">Conclusão: 2026 (Penúltimo Semestre)</div>
              </div>
            </div>

            <div className="pixel-box achievement-card">
              <div className="achievement-icon">⚡</div>
              <div className="achievement-details">
                <h3>CURSO TÉCNICO</h3>
                <div className="institution">IFSP - Campi SJC</div>
                <p>Técnico em Automação Industrial</p>
                <div className="year">Concluído em 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencia">
        <div className="container">
          <h2 className="section-title">QUEST LOG (MISSOES COMPLETAS)</h2>
          <div className="quest-timeline">

            {/* SpotSat */}
            <div className="pixel-box quest-item">
              <div className="quest-header">
                <div className="quest-title-container">
                  <span className="quest-status ongoing">EM ANDAMENTO</span>
                  <h3 className="quest-title">Desenvolvedor Front-end Pleno</h3>
                </div>
                <span className="quest-date">Maio 2023 - Atualmente</span>
              </div>
              <div className="quest-company">SpotSat</div>
              <ul className="quest-tasks" style={{ marginTop: '1rem' }}>
                <li>Atuação como principal responsável pelo ecossistema front-end (React/TypeScript), garantindo a sustentação de 4 plataformas web em produção e liderando a arquitetura e desenvolvimento de um novo sistema do zero.</li>
                <li>Implementação de soluções avançadas de geoprocessamento em tempo real utilizando Leaflet e GeoJSON, otimizando a renderização dinâmica de milhares de coordenadas simultâneas com alta performance.</li>
                <li>Desenvolvimento de painéis analíticos complexos e 2 sistemas automatizados para emissão de relatórios técnicos, processando grandes volumes de dados para validar a conformidade de propriedades e agilizar a tomada de decisão dos clientes.</li>
                <li>Idealização e criação de protótipos de interface (UX/UI) no Figma antes do código, além da definição proativa da arquitetura de componentes e integrações com APIs REST, assegurando escalabilidade e a melhor experiência para o usuário.</li>
              </ul>
            </div>

            {/* EJ Informática */}
            <div className="pixel-box quest-item light">
              <div className="quest-header">
                <div className="quest-title-container">
                  <span className="quest-status">COMPLETA</span>
                  <h3 className="quest-title">Técnico de TI (Autônomo)</h3>
                </div>
                <span className="quest-date">Nov 2021 - Atualmente</span>
              </div>
              <div className="quest-company">EJ Informática</div>
              <ul className="quest-tasks" style={{ marginTop: '1rem' }}>
                <li>Atuação autônoma em manutenção preventiva e corretiva de hardware e sistemas operacionais, desenvolvendo forte capacidade de diagnóstico e resolução de problemas.</li>
                <li>Gestão direta de clientes, traduzindo problemas técnicos complexos em soluções práticas e prestando consultoria em TI.</li>
              </ul>
            </div>

            {/* Normalizei */}
            <div className="pixel-box quest-item">
              <div className="quest-header">
                <div className="quest-title-container">
                  <span className="quest-status">COMPLETA</span>
                  <h3 className="quest-title">Desenvolvedor React Native / Front-end</h3>
                </div>
                <span className="quest-date">Out 2021 - Jan 2022</span>
              </div>
              <div className="quest-company">Normalizei</div>
              <ul className="quest-tasks" style={{ marginTop: '1rem' }}>
                <li>Atuação no desenvolvimento de interfaces mobile com React Native, criando telas responsivas e focadas em boa experiência do usuário.</li>
                <li>Participação na manutenção de aplicações web, integração com APIs REST e evolução de funcionalidades existentes, contribuindo para estabilidade e melhorias contínuas da plataforma.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* EVinil Featured Section */}
      <section id="evinil" className="evinil-showcase">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--snes-red)' }}>BOSS LEVEL: EVINIL</h2>
          <div className="evinil-layout">
            <div className="evinil-graphic">
              <div className="evinil-cartridge">
                <div className="evinil-label">EVINIL</div>
                <div style={{ color: '#fff', fontSize: '0.4rem', fontFamily: "'Press Start 2P'", textAlign: 'center' }}>
                  SUPER 16-BIT PLATFORM
                </div>
              </div>
              <div className="evinil-vinyl">
                <div className="vinyl-grooves">
                  <div className="vinyl-label">
                    <div className="vinyl-center"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="evinil-desc">
              <h3 style={{ color: 'var(--snes-red)', fontSize: '1.2rem', textShadow: '2px 2px 0px #000' }}>
                EVINIL (evinil.com.br)
              </h3>
              <p style={{ margin: '1rem 0' }}>
                Idealizei, projetei e desenvolvi por completo uma <strong>plataforma SaaS voltada para lojistas de discos de vinil</strong>, criada para centralizar a gestão de estoque, vendas e indicadores do negócio, além de oferecer uma vitrine digital para exposição do catálogo aos clientes.
              </p>
              <p style={{ margin: '1rem 0' }}>
                Fui responsável por todo o ciclo do produto, desde a concepção da ideia e definição da estrutura técnica até a implementação e publicação da plataforma. Implementei a arquitetura de banco de dados e a integração backend, construindo uma base sólida e escalável para suportar as operações do sistema.
              </p>
              <p>
                Desenvolvi dashboards financeiros, área administrativa, autenticação de usuários, sistema de planos e checkout com recorrência, unindo visão técnica de banco de dados e visão de negócio em uma solução real.
              </p>
              <div className="evinil-tags">
                <span className="evinil-tag">SAAS</span>
                <span className="evinil-tag">REACT</span>
                <span className="evinil-tag">FULLSTACK</span>
                <span className="evinil-tag">POSTGRESQL</span>
                <span className="evinil-tag">CHECKOUT</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <a href="https://evinil.com.br" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-red">
                  VISITAR PLATAFORMA 🔗
                </a>
                <a href="https://www.instagram.com/evinil__/" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-yellow">
                  INSTAGRAM 📸
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies">
        <div className="container">
          <h2 className="section-title">SIDE QUESTS & INVENTARIO</h2>
          <div className="hobbies-grid">
            <div className="pixel-box inventory-card">
              <span className="inventory-icon">📻</span>
              <h3>DISCOS DE VINIL</h3>
              <p>Gosto de colecionar música em formato físico e escutar LPs clássicos.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🎸</span>
              <h3>INSTRUMENTOS</h3>
              <p>Toco violão, guitarra, baixo, bateria, ukulele, viola, flauta doce e violino.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🎣</span>
              <h3>PESCARIA</h3>
              <p>Gosto de pescar nas horas vagas para relaxar e aproveitar a natureza.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🚲</span>
              <h3>PEDAL E TRILHAS</h3>
              <p>Pratico ciclismo e gosto de fazer trilhas ao ar livre.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🤘</span>
              <h3>IRON MAIDEN</h3>
              <p>Fui a dois shows do Iron Maiden, uma das minhas bandas favoritas.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🎵</span>
              <h3>GOSTO MUSICAL</h3>
              <p>Duvidoso! Minha playlist vai de Iron Maiden, Milionário e José Rico, Kaquinho Big Dog, Falcão até Giorgio Rossini.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🎮</span>
              <h3>RETRO GAMING</h3>
              <p>Gosto de jogar clássicos dos anos 90, jogos de aventura e RPGs.</p>
            </div>

            <div className="pixel-box inventory-card">
              <span className="inventory-icon">🛠️</span>
              <h3>DIY / HARDWARE</h3>
              <p>Tenho como hobby consertar computadores e fazer soldas eletrônicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato">
        <div className="container contact-container">
          <h2 className="section-title" style={{ color: 'var(--snes-blue)' }}>SALVAR PROGRESSO</h2>
          <div className="pixel-box">
            <div className="pixel-box-header">💾 SALVAR SEU JOGO</div>
            <p className="contact-desc">
              Entre em contato para iniciarmos uma nova quest ou cooperação técnica!
            </p>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const name = e.target.elements.nome.value;
              const message = e.target.elements.mensagem.value;
              const whatsappText = `Olá Elbert! Sou o ${name}.\n\nMensagem:\n${message}`;
              const whatsappUrl = `https://wa.me/5512997091288?text=${encodeURIComponent(whatsappText)}`;
              window.open(whatsappUrl, '_blank');
            }}>
              <div className="form-group">
                <label>NOME DO PERSONAGEM (SEU NOME)</label>
                <input type="text" name="nome" className="input-pixel" placeholder="EX: HERO_ELBERT" required />
              </div>
              <div className="form-group">
                <label>MENSAGEM (QUEST DETAILS)</label>
                <textarea name="mensagem" rows="4" className="input-pixel" placeholder="EX: DIGITE SUA MENSAGEM AQUI..." required></textarea>
              </div>
              <div className="btn-submit-container">
                <button type="submit" className="btn-pixel btn-blue">
                  GRAVAR SAVE / ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">GAME OVER</div>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/elbertjean/" target="_blank" rel="noopener noreferrer" className="social-link">LINKEDIN</a>
          <a href="https://github.com/elbertjean" target="_blank" rel="noopener noreferrer" className="social-link">GITHUB</a>
          <a href="mailto:elbertjean.work@gmail.com" className="social-link">CONTATO</a>
        </div>
        <div className="footer-copyright">
          © 2026 ELBERT JEAN. PRESS START TO COOP.
        </div>
      </footer>
    </div>
  );
}

export default App;
