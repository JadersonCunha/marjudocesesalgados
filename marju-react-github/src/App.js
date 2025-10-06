import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutModal from './components/AboutModal';
import ProductsSection from './components/ProductsSection';
import PaymentSection from './components/PaymentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import FloatingInfoBox from './components/FloatingInfoBox';
import GalleryModal from './components/GalleryModal';
import ImageModal from './components/ImageModal';
import CartModal from './components/CartModal';
import useCart from './hooks/useCart';
import useModal from './hooks/useModal';

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { isOpen, modalType, modalData, openModal, closeModal } = useModal();
  const [showFloatingBox, setShowFloatingBox] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setShowFloatingBox(footerRect.top > windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <a href="#home" className="skip-link">Pular para o conteúdo principal</a>
      
      <FloatingButton />
      <Header cart={cart} openModal={openModal} />
      
      <div className="fixed-corner-shape">
        <img src="assets/logo2.jpg" alt="Logo Marju Confeitaria" />
      </div>

      <main>
        <Hero />
        <ProductsSection openModal={openModal} />
        <PaymentSection />
        <ContactSection />
      </main>

      {showFloatingBox && <FloatingInfoBox />}
      
      <Footer openModal={openModal} />

      <AboutModal 
        isOpen={isOpen && modalType === 'about'} 
        onClose={closeModal} 
      />
      
      <GalleryModal 
        isOpen={isOpen && modalType === 'gallery'} 
        onClose={closeModal}
        data={modalData}
        addToCart={addToCart}
        openImageModal={(src, alt) => openModal('image', { src, alt })}
      />
      
      <ImageModal 
        isOpen={isOpen && modalType === 'image'} 
        onClose={closeModal}
        data={modalData}
      />
      
      <CartModal 
        isOpen={isOpen && modalType === 'cart'} 
        onClose={closeModal}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;