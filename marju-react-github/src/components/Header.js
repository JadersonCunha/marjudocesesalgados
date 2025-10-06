import React, { useState, useEffect } from 'react';

const Header = ({ cart, openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderStyle({
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
        });
      } else {
        setHeaderStyle({
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: 'none'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header-content">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Marju
        </a>
        
        <nav className="navbar">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#sobre" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#sobre')}
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="#produtos" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#produtos')}
              >
                Produtos
              </a>
            </li>
            <li>
              <a 
                href="#pagamento" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#pagamento')}
              >
                Pagamento
              </a>
            </li>
            <li>
              <a 
                href="#contato" 
                className="nav-link"
                onClick={(e) => handleNavClick(e, '#contato')}
              >
                Contato
              </a>
            </li>
          </ul>
          
          <button 
            className="cart-icon"
            onClick={() => openModal('cart')}
            aria-label="Abrir carrinho de compras"
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{getTotalItems()}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;