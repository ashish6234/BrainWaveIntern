let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        const price = parseFloat(e.target.getAttribute('data-price'));

        cart.push({ product, price });
        alert(`${product} added to cart!`);
    });
});
