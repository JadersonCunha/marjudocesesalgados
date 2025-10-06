import React, { useEffect } from 'react';

const AboutModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div className="about-container">
          <img src="assets/img_conf.JPG" alt="Marju Confeiteira" className="about-image" />
          <div className="about-text">
            <h3>Sobre a Marju</h3>
            <p>Em 2010, comecei a fazer bolos para minha família, de forma totalmente amadora, apenas como um hobby. Na época, percebia a dificuldade em encontrar bolos verdadeiramente saborosos, úmidos e bem recheados à venda. O que era apenas uma diversão, aos poucos se transformou em uma paixão, e com ela veio a vontade de aprender mais e me aperfeiçoar.</p>
            <p>Em 2016, sem grandes pretensões, esse hobby começou a se tornar uma fonte de renda. Pessoas próximas, que já haviam experimentado meus bolos, passaram a fazer encomendas para suas comemorações. Foi então que senti a necessidade de me especializar, aprender novas técnicas e me profissionalizar — afinal, acredito que um bolo nunca é "só um bolo". Ele é, muitas vezes, a estrela da mesa nas celebrações.</p>
            <p>Desde então, venho me dedicando a cursos e aprimoramentos constantes. Em 2019, dei um passo importante e ingressei no curso de Gastronomia na Unifatecie, reforçando ainda mais meu compromisso com a qualidade e a excelência.</p>
            <p>Continuo acreditando que um bolo vai muito além de um simples doce: ele é uma experiência gastronômica, um símbolo de união, confraternização e, muitas vezes, de emoção.</p>
            <p><strong>Minha especialidade:</strong> Bolos decorados e brigadeiros tradicionais e gourmet</p>
            <p><strong>Faço também:</strong><br />
            Tortas doces, torta de sorvete, cupcakes, bolos caseiros, caixinhas de doces presenteáveis, ovos de páscoa tradicionais e de colher e chocotones.</p>
            <p><strong>Salgados:</strong><br />
            Pizzas caseiras, mini hambúrguer, doguinhos assados, empadas, panelinhas e barquetes, mini quiches e mini calzones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;