document.addEventListener('DOMContentLoaded', () => {

    const whatsappNumber = '5551985330121';

    const produtos = {
        doces: [
            { id: 'doce1', name: 'Brigadeiro Gourmet', price: 3.50, image: 'https://via.placeholder.com/250x200.png?text=Brigadeiro' },
            { id: 'doce2', name: 'Beijinho Tradicional', price: 3.00, image: 'https://via.placeholder.com/250x200.png?text=Beijinho' },
            { id: 'doce3', name: 'Cajuzinho', price: 3.20, image: 'https://via.placeholder.com/250x200.png?text=Cajuzinho' },
        ],
        salgados: [
            { id: 'salgado1', name: 'Coxinha de Frango', price: 4.00, image: 'https://via.placeholder.com/250x200.png?text=Coxinha' },
            { id: 'salgado2', name: 'Risole de Queijo', price: 3.80, image: 'https://via.placeholder.com/250x200.png?text=Risole' },
            { id: 'salgado3', name: 'Empadinha de Palmito', price: 4.20, image: 'https://via.placeholder.com/250x200.png?text=Empadinha' },
        ],
        bolos: [
            { id: 'bolo1', name: 'Bolo de Chocolate', price: 80.00, image: 'https://via.placeholder.com/250x200.png?text=Bolo+Chocolate' },
            { id: 'bolo2', name: 'Bolo de Morango', price: 95.00, image: 'https://via.placeholder.com/250x200.png?text=Bolo+Morango' },
        ],
        tortas: [
            { id: 'torta1', name: 'Torta de Limão', price: 70.00, image: 'https://via.placeholder.com/250x200.png?text=Torta+Limão' },
            { id: 'torta2', name: 'Torta Holandesa', price: 85.00, image: 'https://via.placeholder.com/250x200.png?text=Torta+Holandesa' },
        ],
    };

    let cart = [];

    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    closeButtons.forEach(btn => {
        btn.onclick = () => {
            modals.forEach(modal => modal.style.display = 'none');
        };
    });

    window.onclick = (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };

    const sobreModalBtn = document.querySelector('[data-modal="modal-sobre"]');
    sobreModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-sobre').style.display = 'flex';
    });

    const categoryItems = document.querySelectorAll('.category-item');
    const galeriaModal = document.getElementById('modal-galeria');
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryTitle = galeriaModal.querySelector('.gallery-title');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            const categoryData = produtos[category];
            
            galleryTitle.textContent = category.toUpperCase();
            galleryGrid.innerHTML = '';

            categoryData.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('gallery-item');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button class="btn add-to-cart-btn" data-id="${product.id}" data-category="${category}">Adicionar ao Carrinho</button>
                `;
                galleryGrid.appendChild(productElement);
            });
            galeriaModal.style.display = 'flex';
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
            alert(`${product.name} adicionado ao carrinho!`);
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
        cartModal.style.display = 'flex';
        updateCartModal();
    });

    document.getElementById('continue-shopping-btn').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
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
        cartModal.style.display = 'none';
    });

    const formPedido = document.getElementById('form-pedido');
    formPedido.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const produto = document.getElementById('produto').value;
        const quantidade = document.getElementById('quantidade').value;
        const pessoas = document.getElementById('pessoas').value;
        const observacoes = document.getElementById('observacoes').value;

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
    });
});