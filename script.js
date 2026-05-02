const products = [
  {
    name: "Al Noor Solitaire Ring",
    category: "Diamonds",
    price: 4850,
    material: "GIA diamond, 18k yellow gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    badge: "Signature",
  },
  {
    name: "Mahseri Heritage Bangles",
    category: "Gold",
    price: 2200,
    material: "Hand-finished 22k gold vermeil",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
    badge: "Heritage",
  },
  {
    name: "Lumiere Drop Earrings",
    category: "Diamonds",
    price: 3650,
    material: "White gold, pear-cut diamonds",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    badge: "New",
  },
  {
    name: "Zahra Wedding Necklace",
    category: "Bridal",
    price: 7900,
    material: "18k gold, diamond accents",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    badge: "Bridal",
  },
  {
    name: "Noura Diamond Tennis Bracelet",
    category: "Diamonds",
    price: 9200,
    material: "White gold, 4.2ct diamonds",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    badge: "Limited",
  },
  {
    name: "Layan Emerald Pendant",
    category: "Gold",
    price: 6400,
    material: "Emerald, diamond halo, 18k gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    badge: "Atelier",
  },
  {
    name: "Royal Noor Diamond Set",
    category: "Bridal",
    price: 18400,
    material: "Necklace, earrings, bracelet",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
    badge: "Bespoke",
  },
  {
    name: "Zahra Gold Cuff",
    category: "Gold",
    price: 2700,
    material: "Sculpted gold with satin polish",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
    badge: "Handcrafted",
  },
];

const state = {
  filter: "All",
  sort: "featured",
  cart: [],
};

const productGrid = document.querySelector("[data-product-grid]");
const filterButtons = document.querySelectorAll("[data-filter]");
const sortSelect = document.querySelector("[data-sort]");
const cartButton = document.querySelector("[data-cart-open]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartCloseButtons = document.querySelectorAll("[data-cart-close]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutButton = document.querySelector("[data-checkout]");
const checkoutNote = document.querySelector("[data-checkout-note]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const appointmentForm = document.querySelector("[data-appointment-form]");
const appointmentMessage = document.querySelector("[data-appointment-message]");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterMessage = document.querySelector("[data-newsletter-message]");
const year = document.querySelector("[data-year]");

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function getVisibleProducts() {
  const visibleProducts =
    state.filter === "All" ? [...products] : products.filter((product) => product.category === state.filter);

  if (state.sort === "price-asc") {
    visibleProducts.sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-desc") {
    visibleProducts.sort((a, b) => b.price - a.price);
  }

  return visibleProducts;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();

  productGrid.innerHTML = visibleProducts
    .map(
      (product, index) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="tag">${product.badge}</span>
            <button class="wishlist" type="button" aria-label="Save ${product.name}">♡</button>
          </div>
          <div class="product-info">
            <span class="product-meta">${product.category}</span>
            <div class="product-title-row">
              <h3>${product.name}</h3>
              <strong class="price">${formatCurrency(product.price)}</strong>
            </div>
            <p>${product.material}</p>
            <button class="btn outline" type="button" data-add-to-cart="${index}">Add to bag</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your selection is empty. Add a piece from the collection to begin.</p>';
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item, index) => `
          <article class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div>
              <h3>${item.name}</h3>
              <p>${formatCurrency(item.price)}</p>
              <div class="quantity-controls" aria-label="Quantity for ${item.name}">
                <button type="button" data-quantity="${index}" data-direction="-1" aria-label="Decrease quantity">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-quantity="${index}" data-direction="1" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button class="remove-item" type="button" data-remove-item="${index}">Remove</button>
          </article>
        `
      )
      .join("");
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatCurrency(total);
}

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartButton.setAttribute("aria-expanded", "true");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartButton.setAttribute("aria-expanded", "false");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts();
  });
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const wishButton = event.target.closest(".wishlist");
  if (wishButton) {
    wishButton.classList.toggle("active");
    wishButton.textContent = wishButton.classList.contains("active") ? "♥" : "♡";
    return;
  }

  const addButton = event.target.closest("[data-add-to-cart]");
  if (!addButton) return;

  const product = getVisibleProducts()[Number(addButton.dataset.addToCart)];
  const cartItem = state.cart.find((item) => item.name === product.name);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  checkoutNote.textContent = "";
  renderCart();
  openCart();
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove-item]");

  if (quantityButton) {
    const item = state.cart[Number(quantityButton.dataset.quantity)];
    item.quantity += Number(quantityButton.dataset.direction);

    if (item.quantity <= 0) {
      state.cart.splice(Number(quantityButton.dataset.quantity), 1);
    }

    renderCart();
  }

  if (removeButton) {
    state.cart.splice(Number(removeButton.dataset.removeItem), 1);
    renderCart();
  }
});

cartButton.addEventListener("click", openCart);
cartCloseButtons.forEach((button) => button.addEventListener("click", closeCart));

checkoutButton.addEventListener("click", () => {
  checkoutNote.textContent =
    state.cart.length === 0
      ? "Add at least one item to request a private checkout."
      : "Thank you. A secure checkout can be connected to your preferred payment provider next.";
});

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  appointmentForm.reset();
  appointmentMessage.textContent = "Your appointment request has been received. A concierge will follow up shortly.";
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterForm.reset();
  newsletterMessage.textContent = "You are on the list for private previews and collection launches.";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

year.textContent = new Date().getFullYear();
renderProducts();
renderCart();
