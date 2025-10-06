import React from 'react';
import { produtos, categoryNames } from '../data/products';

const ProductsSection = ({ openModal }) => {
  const categories = [
    { key: 'doces', image: 'assets/beijinho.jpeg', title: 'Doces', description: 'Brigadeiros, beijinhos e muito mais' },
    { key: 'salgados', image: 'assets/mini-sanduiches.jpeg', title: 'Salgados', description: 'Coxinhas, risoles e empadinhas' },
    { key: 'bolos', image: 'assets/bolo-tradicional.jpeg', title: 'Bolos', description: 'Personalizados para sua ocasião' },
    { key: 'tortas', image: 'assets/torta de morango.jpeg', title: 'Tortas', description: 'Geladas e tradicionais' },
    { key: 'especiais', image: 'assets/quanto bolo servir.png', title: 'Especiais', description: 'Produtos únicos e sazonais' },
    { key: 'bolo-colher', image: 'assets/bolo de colher 2.jpeg', title: 'Bolo de Colher', description: 'Cremosos e irresistíveis' },
    { key: 'naked-cake', image: 'assets/nake de cake 2.jpeg', title: 'Naked Cake', description: 'Estilo rústico e natural' },
    { key: 'salgados-premium', image: 'assets/panelinhas_barquetes_upscaled.png', title: 'Salgados Premium', description: 'Panelinhas, barquetes e mini calzones' },
    { key: 'brigadeiros', image: 'assets/brigadeiros_premium_upscaled.png', title: 'Brigadeiros', description: 'Tradicionais, premium e especiais' }
  ];

  const handleCategoryClick = (categoryKey) => {
    if (categoryKey === 'especiais') {
      openModal('image', { 
        src: 'assets/quanto bolo servir.png', 
        alt: 'Guia de quanto bolo servir' 
      });
    } else {
      openModal('gallery', {
        category: categoryKey,
        title: categoryNames[categoryKey],
        products: produtos[categoryKey]
      });
    }
  };

  const handlePriceTableClick = () => {
    openModal('image', { 
      src: 'assets/criativo_precos.png', 
      alt: 'Tabela de preços ampliada' 
    });
  };

  return (
    <section className="products-section" id="produtos">
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="product-categories">
          {categories.map((category) => (
            <article 
              key={category.key}
              className="category-card" 
              onClick={() => handleCategoryClick(category.key)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategoryClick(category.key);
                }
              }}
            >
              <div className="category-image">
                <img 
                  src={category.image} 
                  alt={`${category.title} artesanais`} 
                  loading="lazy" 
                />
                <div className="category-overlay">
                  <i className="fas fa-eye"></i>
                  <span>Ver Produtos</span>
                </div>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
          
          <article className="price-card" onClick={handlePriceTableClick}>
            <div className="price-content">
              <img 
                src="assets/criativo_precos.png" 
                alt="Tabela de preços" 
                className="price-image" 
              />
              <h3>Tabela de Preços</h3>
              <p>Clique para visualizar</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;