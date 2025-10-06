import React, { useEffect } from 'react';

const GalleryModal = ({ isOpen, onClose, data, addToCart, openImageModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const handleImageClick = (product) => {
    openImageModal(product.image, product.name);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-galeria" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h3 className="gallery-title">{data.title}</h3>
        
        <div className="gallery-grid">
          {data.products?.map((product) => (
            <div key={product.id} className="gallery-item">
              <img 
                src={product.image} 
                alt={product.name} 
                loading="lazy"
                className="gallery-image"
                onClick={() => handleImageClick(product)}
              />
              <h4>{product.name}</h4>
              <p>R$ {product.price.toFixed(2)}</p>
              <button 
                className="btn add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
                aria-label={`Adicionar ${product.name} ao carrinho`}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;