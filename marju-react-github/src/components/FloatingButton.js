import React from 'react';

const FloatingButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#form-pedido');
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href="#form-pedido" 
      className="floating-button"
      onClick={handleClick}
      aria-label="Fazer pedido via WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Faça seu Pedido</span>
    </a>
  );
};

export default FloatingButton;