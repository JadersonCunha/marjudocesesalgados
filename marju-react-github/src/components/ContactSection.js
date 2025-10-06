import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    produto: '',
    quantidade: '',
    pessoas: '',
    observacoes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validators = {
    nome: (value) => {
      if (!value.trim()) return 'Nome é obrigatório';
      if (value.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres';
      return '';
    },
    email: (value) => {
      if (!value.trim()) return 'E-mail é obrigatório';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'E-mail inválido';
      return '';
    },
    whatsapp: (value) => {
      if (!value.trim()) return 'WhatsApp é obrigatório';
      const phoneRegex = /^\(?\d{2}\)?\s?9?\d{4}\s?\d{4}$/;
      if (!phoneRegex.test(value.replace(/\D/g, ''))) return 'WhatsApp inválido';
      return '';
    },
    produto: (value) => {
      if (!value.trim()) return 'Produto é obrigatório';
      return '';
    },
    quantidade: (value) => {
      if (!value || value < 1) return 'Quantidade deve ser maior que 0';
      return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length <= 11) {
        formattedValue = formattedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        formattedValue = formattedValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        formattedValue = formattedValue.replace(/(\d{2})(\d{1,5})/, '($1) $2');
      }
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      const error = validators[name] ? validators[name](value) : '';
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validators[name]) {
      const error = validators[name](value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let hasErrors = false;
    const newErrors = {};
    
    Object.keys(validators).forEach(fieldName => {
      const error = validators[fieldName](formData[fieldName]);
      newErrors[fieldName] = error;
      if (error) hasErrors = true;
    });
    
    setErrors(newErrors);
    
    if (hasErrors) return;
    
    setIsSubmitting(true);

    const emailParams = {
      to_email: 'jadersoncunha@gmail.com',
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.whatsapp,
      product: formData.produto,
      quantity: formData.quantidade,
      people: formData.pessoas || 'Não especificado',
      observations: formData.observacoes || 'Nenhuma',
      message: `Novo pedido de: ${formData.nome}\\n\\nContato:\\nE-mail: ${formData.email}\\nWhatsApp: ${formData.whatsapp}\\n\\nPedido:\\nProduto: ${formData.produto}\\nQuantidade: ${formData.quantidade}\\nPessoas: ${formData.pessoas || 'Não especificado'}\\n\\nObservações:\\n${formData.observacoes || 'Nenhuma'}`
    };

    try {
      await emailjs.send('service_kxu3xtn', 'template_qw0xn18', emailParams, '1zV_QTrVAKwhKpyL9');
      
      const whatsappNumber = '5551985330121';
      const formattedMessage = `Olá, Marju!%0a%0aEstou fazendo um pedido de encomenda com os seguintes dados:%0a%0a` +
        `*Nome:* ${formData.nome}%0a` +
        `*E-mail:* ${formData.email}%0a` +
        `*WhatsApp:* ${formData.whatsapp}%0a` +
        `*Produto:* ${formData.produto}%0a` +
        `*Quantidade:* ${formData.quantidade}%0a` +
        `*Quantidade de Pessoas:* ${formData.pessoas || 'Não especificado'}%0a` +
        `*Observações:* ${formData.observacoes || 'Nenhuma'}%0a%0a` +
        `Por favor, aguardo o seu retorno para combinarmos os detalhes. Obrigado!`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
      window.open(whatsappUrl, '_blank');

      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        produto: '',
        quantidade: '',
        pessoas: '',
        observacoes: ''
      });
      setErrors({});
    } catch (error) {
      const whatsappNumber = '5551985330121';
      const formattedMessage = `Olá, Marju!%0a%0aEstou fazendo um pedido de encomenda com os seguintes dados:%0a%0a` +
        `*Nome:* ${formData.nome}%0a` +
        `*E-mail:* ${formData.email}%0a` +
        `*WhatsApp:* ${formData.whatsapp}%0a` +
        `*Produto:* ${formData.produto}%0a` +
        `*Quantidade:* ${formData.quantidade}%0a` +
        `*Quantidade de Pessoas:* ${formData.pessoas || 'Não especificado'}%0a` +
        `*Observações:* ${formData.observacoes || 'Nenhuma'}%0a%0a` +
        `Por favor, aguardo o seu retorno para combinarmos os detalhes. Obrigado!`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
      window.open(whatsappUrl, '_blank');

      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        produto: '',
        quantidade: '',
        pessoas: '',
        observacoes: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <h2 className="section-title">Faça seu Pedido</h2>
        <form className="contact-form" onSubmit={handleSubmit} id="form-pedido">
          <div className="form-group">
            <label htmlFor="nome">Nome completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp *</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(11) 99999-9999"
              value={formData.whatsapp}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="produto">Produto desejado *</label>
            <input
              type="text"
              id="produto"
              name="produto"
              value={formData.produto}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            {errors.produto && <span className="error-message">{errors.produto}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantidade">Quantidade *</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                min="1"
                value={formData.quantidade}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
              />
              {errors.quantidade && <span className="error-message">{errors.quantidade}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="pessoas">Serve quantas pessoas?</label>
              <input
                type="text"
                id="pessoas"
                name="pessoas"
                placeholder="Ex: 10 pessoas"
                value={formData.pessoas}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="observacoes">Observações</label>
            <textarea
              id="observacoes"
              name="observacoes"
              rows="4"
              placeholder="Sabor, recheio, decoração, data de entrega..."
              value={formData.observacoes}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
            <i className="fab fa-whatsapp"></i>
            {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;