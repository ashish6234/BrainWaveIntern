const cartList = document.getElementById('cart-list');
const totalDiv = document.getElementById('total');

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartList.appendChild(div);
        total += item.price;
    });

    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

updateCart();
