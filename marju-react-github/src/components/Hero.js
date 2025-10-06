import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-decoration"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="brand-name">Marju</span>
            <span className="hero-subtitle">Confeitaria Artesanal</span>
          </h1>
          <p className="hero-description">
            Doces e salgados feitos com carinho, ingredientes selecionados e muito amor. 
            Cada produto é uma experiência única de sabor que vai adoçar seus momentos especiais.
          </p>
          <div className="hero-actions">
            <a href="#produtos" className="btn btn-primary btn-large">
              Ver Produtos
            </a>
            <a href="#contato" className="btn btn-secondary btn-large">
              Fazer Pedido
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;