import React from 'react';

const Footer = ({ openModal }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#sobre') {
      openModal('about');
    } else {
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Marju Confeitaria</h3>
            <p>Doces artesanais feitos com carinho desde 2025</p>
          </div>
          <div className="footer-nav">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleNavClick(e, '#sobre')}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#produtos"
                  onClick={(e) => handleNavClick(e, '#produtos')}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#pagamento"
                  onClick={(e) => handleNavClick(e, '#pagamento')}
                >
                  Pagamento
                </a>
              </li>
              <li>
                <a 
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <p><i className="fab fa-whatsapp"></i> (51) 98533-0121</p>
            <p><i className="fas fa-envelope"></i> contato@marjuconfeitaria.com</p>
          </div>
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/seuperfil" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram da Marju Confeitaria"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.facebook.com/seuperfil" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook da Marju Confeitaria"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Marju Confeitaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;