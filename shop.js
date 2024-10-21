const products = [
    { id: 1, name: "Flight Simulator", price: 2500 },
    { id: 2, name: "Aviation Headset", price: 10000 },
    { id: 3, name: "Pilot's Logbook", price: 2000 },
];

let cart = [];

const productList = document.getElementById("product-list");

productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const productId = e.target.dataset.id;
        const product = products.find((p) => p.id === parseInt(productId));
        cart.push(product);
        renderCart();
    }
});

const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");

function renderCart() {
    cartList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((product) => {
        const cartItemHTML = `
            <li>
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button data-id="${product.id}">Remove</button>
            </li>
        `;
        cartList.innerHTML += cartItemHTML;
        totalPrice += product.price;
    });
    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

cartList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const productId = e.target.dataset.id;
        const index = cart.findIndex((p) => p.id === parseInt(productId));
        cart.splice(index, 1);
        renderCart();
    }
});

const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
    alert("Checkout successful!");
    cart = [];
    renderCart();
});
