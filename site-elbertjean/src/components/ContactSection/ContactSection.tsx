import React, { FormEvent } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('nome') as HTMLInputElement;
    const messageInput = form.elements.namedItem('mensagem') as HTMLTextAreaElement;

    const name = nameInput ? nameInput.value : '';
    const message = messageInput ? messageInput.value : '';

    const whatsappText = `Olá Elbert! Sou o ${name}.\n\nMensagem:\n${message}`;
    const whatsappUrl = `https://wa.me/5512997091288?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato">
      <div className="container contact-container">
        <h2 className="section-title" style={{ color: 'var(--snes-blue)' }}>
          SALVAR PROGRESSO
        </h2>
        <div className="pixel-box">
          <div className="pixel-box-header">💾 SALVAR SEU JOGO</div>
          <p className="contact-desc">
            Escolha uma ação para baixar meus contatos, acessar minhas redes ou me enviar uma mensagem direta:
          </p>
          <div className="contact-buttons">
            <a href="/curriculo.pdf" download="Curriculo_Elbert_Jean.pdf" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-yellow">
              BAIXAR CURRÍCULO 📜
            </a>
            <a href="https://www.linkedin.com/in/elbertjean/" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-blue">
              MEU LINKEDIN 💼
            </a>
            <a href="https://github.com/ElbertJean" target="_blank" rel="noopener noreferrer" className="btn-pixel btn-purple">
              MEU GITHUB 🐙
            </a>
          </div>
          <div className="pixel-divider">
            <span>OU ENVIE UMA MENSAGEM DIRETA</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>NOME DO PERSONAGEM (SEU NOME)</label>
              <input type="text" name="nome" className="input-pixel" placeholder="EX: HERO_ELBERT" required />
            </div>
            <div className="form-group">
              <label>MENSAGEM (QUEST DETAILS)</label>
              <textarea name="mensagem" rows={4} className="input-pixel" placeholder="EX: DIGITE SUA MENSAGEM AQUI..." required></textarea>
            </div>
            <div className="btn-submit-container">
              <button type="submit" className="btn-pixel btn-blue">
                ENVIAR MENSAGEM
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
