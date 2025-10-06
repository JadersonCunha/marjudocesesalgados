import React, { useEffect } from 'react';

const CartModal = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, clearCart }) => {
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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const whatsappNumber = '5551985330121';
    let message = `Olá, gostaria de fazer o seguinte pedido:%0a%0a`;
    let total = 0;

    cart.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}%0a`;
      total += item.price * item.quantity;
    });

    message += `%0a*Total: R$ ${total.toFixed(2)}*%0a%0aPor favor, aguardo o contato para combinar o pagamento e a entrega.`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content-carrinho" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h3>Seu Carrinho</h3>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>R$ {item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <button 
                    className="remove-item"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="add-item"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="cart-actions">
          <p>Total: R$ <span className="cart-total">{getTotalPrice().toFixed(2)}</span></p>
          <button className="btn" onClick={handleCheckout}>
            Finalizar Pedido
          </button>
          <button className="btn" onClick={onClose}>
            Comprar Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;