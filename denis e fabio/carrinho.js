document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarCarrinho() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p><strong>${item.nome}</strong></p>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                <button class="remover" data-index="${index}">Remover</button>
                <hr>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.preco;
        });

        totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remover')) {
            const index = e.target.getAttribute('data-index');
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }
    });

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        alert('Compra finalizada com sucesso!');
        localStorage.removeItem('carrinho');
        atualizarCarrinho();
    });

    atualizarCarrinho();
});

