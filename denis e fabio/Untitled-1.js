// Função para adicionar o produto ao carrinho
let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

document.querySelectorAll("#add-to-cart").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const produtos = [
            { nome: 'AstralVision Lite', preco: 5600 },
            { nome: 'AstralVision Pro', preco: 12000 },
            { nome: 'AstralVision Ultra', preco: 22000 }
        ];

        // Adiciona o produto ao carrinho
        cart.push(produtos[index]);
        localStorage.setItem('carrinho', JSON.stringify(cart));

        alert(`${produtos[index].nome} foi adicionado ao carrinho!`);
        updateCart();  // Atualiza o ícone do carrinho
    });
});

// Função para atualizar o ícone do carrinho
function updateCart() {
    const cartIcon = document.getElementById("cart-icon");
    if (cartIcon) {
        cartIcon.textContent = `🛒 (${cart.length})`;
    }
}

// Carrossel de imagens
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

function updateSlide() {
    slide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
});

// Inicializa o slide corretamente após carregar tudo
window.addEventListener('load', () => {
    updateSlide();
    // Atualiza o carrinho ao carregar a página
    updateCart();
});

// Definir o fundo da página
function definirFundo(imagem) {
    document.body.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)),
        url('${imagem}') no-repeat center center fixed
    `;
    document.body.style.backgroundSize = 'cover';
}

document.addEventListener('DOMContentLoaded', () => {
    definirFundo('fundo.jpg.jpg'); 
});
