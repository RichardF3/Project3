const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.00,
    image: "https://source.unsplash.com/random/200x200?sig=1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.00,
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 3,
    name: "Product 3",
    price: 20.00,
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40.00,
    image: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50.00,
    image: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 6,
    name: "Product 6",
    price: 60.00,
    image: "https://picsum.photos/200/200?random=5",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70.00,
    image: "https://picsum.photos/200/200?random=6",
  },
];


const cartItems = [];

const cart = document.querySelector(".cart ul");
const checkoutBtn = document.querySelector(".cart button");

// Function to render products
function renderProducts() {
  const productsList = document.querySelector(".products ul");

  // Clear the products list
  productsList.innerHTML = "";

  // Loop through the products array and create HTML elements for each product
  products.forEach((product) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    img.src = product.image;
    img.alt = product.name;
    h3.innerText = product.name;
    p.innerText = `$${product.price.toFixed(2)}`;
    button.innerText = "Add to Cart";

    // Add event listener to the Add to Cart button
    button.addEventListener("click", () => {
      addToCart(product);
    });

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(button);

    productsList.appendChild(li);
  });
}

// Function to add a product to the cart
function addToCart(product) {
  // Check if the product is already in the cart
  const cartItem = cartItems.find((item) => item.product.id === product.id);

  if (cartItem) {
    // Increment the quantity of the existing cart item
    cartItem.quantity += 1;
  } else {
    // Create a new cart item
    cartItems.push({ product: product, quantity: 1 });
  }

  // Render the updated cart
  renderCart();
}

// Function to render the cart
function renderCart() {
  // Clear the cart
  cart.innerHTML = "";

  // Loop through the cart items and create HTML elements for each item
  cartItems.forEach((cartItem) => {
    const li = document.createElement("li");
    const itemName = document.createElement("span");
    const itemQty = document.createElement("span");
    const itemPrice = document.createElement("span");

    itemName.innerText = cartItem.product.name;
    itemQty.innerText = ` x ${cartItem.quantity}`;
    itemPrice.innerText = `$${(cartItem.product.price * cartItem.quantity).toFixed(2)}`;

    li.appendChild(itemName);
    li.appendChild(itemQty);
    li.appendChild(itemPrice);

    cart.appendChild(li);
  });

  // Enable or disable the checkout button based on the cart contents
  if (cartItems.length > 0) {
    checkoutBtn.disabled = false;
  } else {
    checkoutBtn.disabled = true;
  }
}

// Call the renderProducts function to render the initial products list
renderProducts();

// Add event listener to the checkout button
checkoutBtn.addEventListener("click", () => {
  alert("Thank you for your purchase!");
  cartItems.length = 0;
  renderCart();
});








// Select DOM elements
const cartButton = document.querySelector('.cart button');
const cartList = document.querySelector('.cart ul');
const productsList = document.querySelector('.products ul');

// Add event listener to cart button
cartButton.addEventListener('click', () => {
  // Toggle shopping cart visibility
  cartList.classList.toggle('show');
});

// Add event listener to products list
productsList.addEventListener('click', (event) => {
  // Check if add to cart button was clicked
  if (event.target.tagName === 'BUTTON') {
    // Get product information
    const product = event.target.parentNode;
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;

    // Create cart item
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ${productPrice}`;

    // Add cart item to cart list
    cartList.appendChild(cartItem);
  }
});
