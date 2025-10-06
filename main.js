document.addEventListener('DOMContentLoaded', () => {
    const whatsappNumber = '5551985330121';
    
    emailjs.init('1zV_QTrVAKwhKpyL9');
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            mobileMenuToggle.classList.toggle('active');
        });
        
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        lastScrollY = window.scrollY;
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const produtos = {
        doces: [
            { id: 'doce1', name: 'Brigadeiro Gourmet', price: 3.50, image: 'assets/beijinho.jpeg' },
            { id: 'doce2', name: 'Beijinho Tradicional', price: 3.00, image: 'assets/beijinho.jpeg' },
            { id: 'doce3', name: 'Alfajor', price: 4.50, image: 'assets/alfajor.jpeg' },
            { id: 'doce4', name: 'Cupcake Decorado', price: 5.00, image: 'assets/cupcake.jpeg' },
            { id: 'doce5', name: 'Cupcake Green', price: 5.50, image: 'assets/cupcake-green.jpeg' },
            { id: 'doce6', name: 'Cupcake com Cobertura', price: 6.00, image: 'assets/cupcake-cobertura.jpeg' },
            { id: 'doce7', name: 'Doces Tradicionais', price: 3.00, image: 'assets/doces tradicionais.jpeg' },
        ],
        salgados: [
            { id: 'salgado1', name: 'Mini Sanduíches', price: 4.50, image: 'assets/mini-sanduiches.jpeg' },
        ],
        bolos: [
            { id: 'bolo1', name: 'Bolo Tradicional', price: 80.00, image: 'assets/bolo-tradicional.jpeg' },
            { id: 'bolo2', name: 'Bolo Cinema', price: 120.00, image: 'assets/bolo_cine.jpeg' },
            { id: 'bolo3', name: 'Bolo Halloween', price: 95.00, image: 'assets/bolo- halloween.jpeg' },
            { id: 'bolo4', name: 'Bolo 15 Anos Blue', price: 150.00, image: 'assets/bolo-15 anos-blue.jpeg' },
            { id: 'bolo5', name: 'Bolo 15 Anos Rosa Dourado', price: 160.00, image: 'assets/bolo-15anos-rosa-dourado.jpeg' },
            { id: 'bolo6', name: 'Bolo 2 Partes Dourado', price: 180.00, image: 'assets/bolo-2-partes-dourado.jpeg' },
            { id: 'bolo7', name: 'Bolo com Chantilly', price: 90.00, image: 'assets/bolo-com-cobertura-de-chantilly.png' },
            { id: 'bolo8', name: 'Bolo Coroa Red', price: 140.00, image: 'assets/bolo-coroa-red.jpeg' },
            { id: 'bolo9', name: 'Bolo Fortnite', price: 130.00, image: 'assets/bolo-fortnite.jpeg' },
            { id: 'bolo10', name: 'Bolo Oceano', price: 125.00, image: 'assets/bolo-oceano.jpeg' },
            { id: 'bolo11', name: 'Bolo Praia', price: 135.00, image: 'assets/bolo-praia.jpeg' },
            { id: 'bolo12', name: 'Bolo Redondo Arco', price: 110.00, image: 'assets/bolo-redondo arco.jpeg' },
            { id: 'bolo13', name: 'Bolo Redondo Dourado', price: 115.00, image: 'assets/bolo-redondo-dourado.jpeg' },
            { id: 'bolo14', name: 'Bolo Rosas', price: 105.00, image: 'assets/bolo-rosas.jpeg' },
            { id: 'bolo15', name: 'Bolo Rosa Quadrado', price: 100.00, image: 'assets/bolo-rozarquadrado.jpeg' },
            { id: 'bolo16', name: 'Bolo Branco e Negro', price: 95.00, image: 'assets/branq-negr-col.jpeg' },
            { id: 'bolo17', name: 'Halloween Simples', price: 85.00, image: 'assets/halloween-simples.jpeg' },
            { id: 'bolo18', name: 'Halloween Wandinha', price: 110.00, image: 'assets/halloween-wandinha.jpeg' },
        ],
        tortas: [
            { id: 'torta1', name: 'Torta de Morango', price: 70.00, image: 'assets/torta de morango.jpeg' },
            { id: 'torta2', name: 'Torta Gelada', price: 65.00, image: 'assets/torta gelada.jpeg' },
        ],
        especiais: [
            { id: 'especial1', name: 'Kit Festa', price: 120.00, image: 'assets/quanto bolo servir.png' },
            { id: 'especial2', name: 'Combo Aniversário', price: 150.00, image: 'assets/WhatsApp Image 2025-09-08 at 14.01.44 (1).jpeg' },
        ],
        'bolo-colher': [
            { id: 'colher2', name: 'Bolo de Colher Morango', price: 28.00, image: 'assets/bolo de colher 2.jpeg' },
            { id: 'colher3', name: 'Bolo de Colher Doce de Leite', price: 30.00, image: 'assets/bolo de colher 3.jpeg' },
            { id: 'colher4', name: 'Bolo de Colher Frutas Vermelhas', price: 32.00, image: 'assets/bolo de colher 4.jpeg' },
            { id: 'colher1', name: 'Bolo de Colher Chocolate', price: 25.00, image: 'assets/bolo de colher 1.jpeg' },
        ],
        'naked-cake': [
            { id: 'naked1', name: 'Naked Cake Frutas Vermelhas', price: 85.00, image: 'assets/nake de cake 1.jpeg' },
            { id: 'naked2', name: 'Naked Cake Chocolate', price: 90.00, image: 'assets/nake de cake 2.jpeg' },
        ],
        'salgados-premium': [
            { id: 'premium1', name: 'Panelinhas e Barquetes', price: 6.50, image: 'assets/panelinhas_barquetes_upscaled.png' },
            { id: 'premium2', name: 'Mini Calzones', price: 7.00, image: 'assets/mini_calzones_upscaled.png' },
            { id: 'premium3', name: 'Mini Hambúrguer e Doguinhos', price: 8.00, image: 'assets/mini_hamburguer_doguinhos_upscaled.png' },
        ],
        'brigadeiros': [
            { id: 'brig1', name: 'Brigadeiros Premium', price: 4.50, image: 'assets/brigadeiros_premium_upscaled.png' },
            { id: 'brig2', name: 'Brigadeiros Tradicionais', price: 3.50, image: 'assets/brigadeiros_tradicionais_upscaled.png' },
            { id: 'brig3', name: 'Brigadeiros Especiais', price: 5.00, image: 'assets/brigadeiros_especiais_upscaled.png' },
        ],
    };

    let cart = [];

    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    let lastFocusedElement = null;
    
    const openModal = (modal) => {
        lastFocusedElement = document.activeElement;
        modal.style.display = 'flex';
        
        setTimeout(() => {
            const closeBtn = modal.querySelector('.close-btn');
            if (closeBtn) closeBtn.focus();
        }, 100);
        
        modal.addEventListener('keydown', trapFocus);
    };
    
    const closeModal = (modal) => {
        modal.style.display = 'none';
        modal.removeEventListener('keydown', trapFocus);
        
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    };
    
    const trapFocus = (e) => {
        if (e.key === 'Escape') {
            closeModal(e.currentTarget);
            return;
        }
        
        if (e.key === 'Tab') {
            const modal = e.currentTarget;
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    };
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    const sobreModalBtns = document.querySelectorAll('[data-modal="modal-sobre"]');
    sobreModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(document.getElementById('modal-sobre'));
        });
    });
    
    const priceCard = document.querySelector('.price-card');
    const priceModal = document.getElementById('modal-price');
    
    if (priceCard && priceModal) {
        priceCard.addEventListener('click', () => {
            openModal(priceModal);
        });
        
        priceCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(priceModal);
            }
        });
    }

    const categoryItems = document.querySelectorAll('.category-card');
    const galeriaModal = document.getElementById('modal-galeria');
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryTitle = galeriaModal.querySelector('.gallery-title');

    categoryItems.forEach(item => {
        const openGallery = () => {
            const category = item.dataset.category;
            
            if (category === 'especiais') {
                openModal(document.getElementById('modal-bolo-servir'));
                return;
            }
            
            const categoryData = produtos[category];
            
            const categoryNames = {
                'doces': 'Doces',
                'salgados': 'Salgados', 
                'bolos': 'Bolos',
                'tortas': 'Tortas',
                'especiais': 'Especiais',
                'bolo-colher': 'Bolo de Colher',
                'naked-cake': 'Naked Cake',
                'salgados-premium': 'Salgados Premium',
                'brigadeiros': 'Brigadeiros'
            };
            galleryTitle.textContent = categoryNames[category] || category;
            galleryGrid.innerHTML = '';

            categoryData.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('gallery-item');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="gallery-image" data-src="${product.image}">
                    <h4>${product.name}</h4>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button class="btn add-to-cart-btn" data-id="${product.id}" data-category="${category}" aria-label="Adicionar ${product.name} ao carrinho">
                        Adicionar ao Carrinho
                    </button>
                `;
                galleryGrid.appendChild(productElement);
            });
            openModal(galeriaModal);
        };
        
        item.addEventListener('click', openGallery);
        
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGallery();
            }
        });
    });

    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('modal-carrinho');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    const cartCountElement = document.querySelector('.cart-count');

    const updateCartCount = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    };

    const updateCartModal = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            total += item.price * item.quantity;
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="add-item" data-id="${item.id}">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        cartTotalElement.textContent = total.toFixed(2);
        updateCartCount();
    };

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.id;
            const productCategory = e.target.dataset.category;
            const product = produtos[productCategory].find(p => p.id === productId);

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartModal();
            
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.textContent = `${product.name} adicionado ao carrinho`;
            announcement.style.position = 'absolute';
            announcement.style.left = '-10000px';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 1000);
            
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        }

        if (e.target.classList.contains('remove-item')) {
            const productId = e.target.dataset.id;
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                cart = cart.filter(item => item.id !== productId);
            }
            updateCartModal();
        }

        if (e.target.classList.contains('add-item')) {
            const productId = e.target.dataset.id;
            const existingItem = cart.find(item => item.id === productId);
            existingItem.quantity++;
            updateCartModal();
        }
    });

    cartIcon.addEventListener('click', () => {
        updateCartModal();
        openModal(cartModal);
    });

    document.getElementById('continue-shopping-btn').addEventListener('click', () => {
        closeModal(cartModal);
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-image')) {
            const imageSrc = e.target.dataset.src;
            const imageAlt = e.target.alt;
            const zoomImage = document.getElementById('zoom-image');
            const zoomModal = document.getElementById('modal-image-zoom');
            
            zoomImage.src = imageSrc;
            zoomImage.alt = imageAlt;
            openModal(zoomModal);
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.textContent = 'Seu carrinho está vazio!';
            announcement.style.position = 'absolute';
            announcement.style.left = '-10000px';
            document.body.appendChild(announcement);
            setTimeout(() => document.body.removeChild(announcement), 1000);
            return;
        }

        let message = `Olá, gostaria de fazer o seguinte pedido:%0a%0a`;
        let total = 0;

        cart.forEach(item => {
            message += `- ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}%0a`;
            total += item.price * item.quantity;
        });

        message += `%0a*Total: R$ ${total.toFixed(2)}*%0a%0aPor favor, aguardo o contato para combinar o pagamento e a entrega.`;
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        cart = [];
        updateCartModal();
        closeModal(cartModal);
    });

    const floatingInfoBox = document.querySelector('.floating-info-box');
    const footer = document.querySelector('.footer');
    
    const handleFloatingBoxVisibility = () => {
        if (footer && floatingInfoBox) {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (footerRect.top <= windowHeight) {
                floatingInfoBox.style.opacity = '0';
                floatingInfoBox.style.transform = 'translateX(-100%)';
            } else {
                floatingInfoBox.style.opacity = '1';
                floatingInfoBox.style.transform = 'translateX(0)';
            }
        }
    };
    
    window.addEventListener('scroll', handleFloatingBoxVisibility);
    handleFloatingBoxVisibility();

    const formPedido = document.getElementById('form-pedido');
    const formFields = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        whatsapp: document.getElementById('whatsapp'),
        produto: document.getElementById('produto'),
        quantidade: document.getElementById('quantidade')
    };
    
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
            const phoneRegex = /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;
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
    
    Object.keys(formFields).forEach(fieldName => {
        const field = formFields[fieldName];
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        field.addEventListener('blur', () => {
            const error = validators[fieldName](field.value);
            errorElement.textContent = error;
            field.setAttribute('aria-invalid', error ? 'true' : 'false');
        });
        
        field.addEventListener('input', () => {
            if (errorElement.textContent) {
                const error = validators[fieldName](field.value);
                errorElement.textContent = error;
                field.setAttribute('aria-invalid', error ? 'true' : 'false');
            }
        });
    });
    
    formFields.whatsapp.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            value = value.replace(/(\d{2})(\d{1,5})/, '($1) $2');
        }
        e.target.value = value;
    });
    
    formPedido.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let hasErrors = false;
        Object.keys(formFields).forEach(fieldName => {
            const field = formFields[fieldName];
            const errorElement = document.getElementById(`${fieldName}-error`);
            const error = validators[fieldName](field.value);
            
            errorElement.textContent = error;
            field.setAttribute('aria-invalid', error ? 'true' : 'false');
            
            if (error) {
                hasErrors = true;
                if (!field.closest('.form-group').querySelector(':focus')) {
                    field.focus();
                }
            }
        });
        
        if (hasErrors) {
            const errorAnnouncement = document.createElement('div');
            errorAnnouncement.setAttribute('aria-live', 'polite');
            errorAnnouncement.textContent = 'Por favor, corrija os erros no formulário';
            errorAnnouncement.style.position = 'absolute';
            errorAnnouncement.style.left = '-10000px';
            document.body.appendChild(errorAnnouncement);
            setTimeout(() => document.body.removeChild(errorAnnouncement), 1000);
            return;
        }
        
        const nome = formFields.nome.value;
        const email = formFields.email.value;
        const whatsapp = formFields.whatsapp.value;
        const produto = formFields.produto.value;
        const quantidade = formFields.quantidade.value;
        const pessoas = document.getElementById('pessoas').value;
        const observacoes = document.getElementById('observacoes').value;

        const submitBtn = formPedido.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Enviando...';
        submitBtn.disabled = true;

        const emailParams = {
            to_email: 'jadersoncunha@gmail.com',
            from_name: nome,
            from_email: email,
            phone: whatsapp,
            product: produto,
            quantity: quantidade,
            people: pessoas || 'Não especificado',
            observations: observacoes || 'Nenhuma',
            message: `Novo pedido de: ${nome}\\n\\nContato:\\nE-mail: ${email}\\nWhatsApp: ${whatsapp}\\n\\nPedido:\\nProduto: ${produto}\\nQuantidade: ${quantidade}\\nPessoas: ${pessoas || 'Não especificado'}\\n\\nObservações:\\n${observacoes || 'Nenhuma'}`
        };

        emailjs.send('service_kxu3xtn', 'template_qw0xn18', emailParams)
            .then(() => {
                const formattedMessage = `Olá, Marju!%0a%0aEstou fazendo um pedido de encomenda com os seguintes dados:%0a%0a` +
                    `*Nome:* ${nome}%0a` +
                    `*E-mail:* ${email}%0a` +
                    `*WhatsApp:* ${whatsapp}%0a` +
                    `*Produto:* ${produto}%0a` +
                    `*Quantidade:* ${quantidade}%0a` +
                    `*Quantidade de Pessoas:* ${pessoas || 'Não especificado'}%0a` +
                    `*Observações:* ${observacoes || 'Nenhuma'}%0a%0a` +
                    `Por favor, aguardo o seu retorno para combinarmos os detalhes. Obrigado!`;
                
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
                window.open(whatsappUrl, '_blank');

                const successMessage = document.createElement('div');
                successMessage.setAttribute('aria-live', 'polite');
                successMessage.textContent = 'Pedido enviado! E-mail enviado e redirecionando para WhatsApp...';
                successMessage.style.position = 'absolute';
                successMessage.style.left = '-10000px';
                document.body.appendChild(successMessage);
                
                formPedido.reset();
                Object.keys(formFields).forEach(fieldName => {
                    document.getElementById(`${fieldName}-error`).textContent = '';
                    formFields[fieldName].setAttribute('aria-invalid', 'false');
                });
                
                setTimeout(() => document.body.removeChild(successMessage), 3000);
            })
            .catch(() => {
                const formattedMessage = `Olá, Marju!%0a%0aEstou fazendo um pedido de encomenda com os seguintes dados:%0a%0a` +
                    `*Nome:* ${nome}%0a` +
                    `*E-mail:* ${email}%0a` +
                    `*WhatsApp:* ${whatsapp}%0a` +
                    `*Produto:* ${produto}%0a` +
                    `*Quantidade:* ${quantidade}%0a` +
                    `*Quantidade de Pessoas:* ${pessoas || 'Não especificado'}%0a` +
                    `*Observações:* ${observacoes || 'Nenhuma'}%0a%0a` +
                    `Por favor, aguardo o seu retorno para combinarmos os detalhes. Obrigado!`;
                
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
                window.open(whatsappUrl, '_blank');

                formPedido.reset();
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
});