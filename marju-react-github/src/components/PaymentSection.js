import React from 'react';

const PaymentSection = () => {
  return (
    <section className="payment-section" id="pagamento">
      <div className="container">
        <h2 className="section-title">Formas de Pagamento</h2>
        <div className="payment-methods">
          <div className="payment-card">
            <i className="fas fa-qrcode"></i>
            <h3>PIX</h3>
            <p>Pagamento instantâneo</p>
          </div>
          <div className="payment-card">
            <i className="fas fa-credit-card"></i>
            <h3>Cartões</h3>
            <p>Crédito e débito</p>
          </div>
          <div className="payment-card">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Dinheiro</h3>
            <p>À vista na entrega</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;