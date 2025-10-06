import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, data }) => {
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

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-price" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img 
          src={data.src} 
          alt={data.alt} 
          className="price-image-large" 
        />
      </div>
    </div>
  );
};

export default ImageModal;