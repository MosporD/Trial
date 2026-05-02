const products = [
  {
    name: "Al Noor Solitaire Ring",
    category: "Rings",
    collection: "Diamond Bridal",
    price: 3440,
    sku: "AM-R1001",
    stock: 1,
    material: "GIA round diamond, 18k yellow gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    badge: "Signature",
  },
  {
    name: "Mahseri Heritage Bangles",
    category: "Bracelets",
    collection: "Gold Heritage",
    price: 1560,
    sku: "AM-B2204",
    stock: 3,
    material: "Hand-finished 22k gold vermeil",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
    badge: "Heritage",
  },
  {
    name: "Lumiere Drop Earrings",
    category: "Earrings",
    collection: "High Jewellery",
    price: 2590,
    sku: "AM-E2758",
    stock: 2,
    material: "White gold, pear-cut diamonds",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    badge: "New",
  },
  {
    name: "Zahra Wedding Necklace",
    category: "Necklaces",
    collection: "Wedding 25",
    price: 5610,
    sku: "AM-N1466",
    stock: 1,
    material: "18k gold, diamond accents",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    badge: "Bridal",
  },
  {
    name: "Noura Diamond Tennis Bracelet",
    category: "Bracelets",
    collection: "Diamond Bridal",
    price: 6530,
    sku: "AM-B2234",
    stock: 1,
    material: "White gold, 4.2ct diamonds",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    badge: "Limited",
  },
  {
    name: "Layan Emerald Pendant",
    category: "Pendants",
    collection: "Gold Heritage",
    price: 4540,
    sku: "AM-P7301",
    stock: 2,
    material: "Emerald, diamond halo, 18k gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    badge: "Atelier",
  },
  {
    name: "Royal Noor Diamond Set",
    category: "Sets",
    collection: "High Jewellery",
    price: 13070,
    sku: "AM-S5007",
    stock: 1,
    material: "Necklace, earrings, bracelet",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
    badge: "Bespoke",
  },
  {
    name: "Zahra Gold Cuff",
    category: "Bracelets",
    collection: "Gold Heritage",
    price: 1920,
    sku: "AM-B2246",
    stock: 4,
    material: "Sculpted gold with satin polish",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
    badge: "Handcrafted",
  },
  {
    name: "Mira Pearl Rose Ring",
    category: "Rings",
    collection: "Rose Hope",
    price: 1190,
    sku: "AM-R1188",
    stock: 5,
    material: "Freshwater pearl, rose gold, diamonds",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80",
    badge: "Gift",
  },
  {
    name: "Nero Onyx Chain",
    category: "For Him",
    collection: "Nero",
    price: 1380,
    sku: "AM-M6102",
    stock: 2,
    material: "Black onyx, 18k white gold",
    image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=900&q=80",
    badge: "For Him",
  },
  {
    name: "Celeste Baby Bracelet",
    category: "Baby",
    collection: "Tiny Heirlooms",
    price: 720,
    sku: "AM-K0902",
    stock: 6,
    material: "18k gold, adjustable identity plate",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    badge: "Baby",
  },
  {
    name: "Sahara Diamond Pendant",
    category: "Pendants",
    collection: "Summer Edit",
    price: 2110,
    sku: "AM-P4108",
    stock: 3,
    material: "Yellow diamond, 18k gold chain",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=900&q=80",
    badge: "Summer",
  },
];

const state = {
  filter: "All",
  sort: "featured",
  query: "",
  wishlist: new Set(),
  cart: [],
};

const productGrid = document.querySelector("[data-product-grid]");
const resultCount = document.querySelector("[data-result-count]");
const filterButtons = document.querySelectorAll("[data-filter]");
const jumpFilterButtons = document.querySelectorAll("[data-jump-filter]");
const sortSelect = document.querySelector("[data-sort]");
const searchInput = document.querySelector("[data-search-input]");
const searchToggle = document.querySelector("[data-search-toggle]");
const clearSearchButton = document.querySelector("[data-clear-search]");
const cartButton = document.querySelector("[data-cart-open]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartCloseButtons = document.querySelectorAll("[data-cart-close]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const checkoutButton = document.querySelector("[data-checkout]");
const checkoutNote = document.querySelector("[data-checkout-note]");
const wishlistCount = document.querySelector("[data-wishlist-count]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const appointmentForm = document.querySelector("[data-appointment-form]");
const appointmentMessage = document.querySelector("[data-appointment-message]");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterMessage = document.querySelector("[data-newsletter-message]");
const year = document.querySelector("[data-year]");
const quickView = document.querySelector("[data-quick-view]");
const quickViewBody = document.querySelector("[data-quick-content]");
const quickViewClose = document.querySelector("[data-quick-close]");
const toast = document.querySelector("[data-toast]");

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-JO", {
    style: "currency",
    currency: "JOD",
    maximumFractionDigits: 0,
  }).format(value);

function matchesQuery(product) {
  const haystack = `${product.name} ${product.category} ${product.collection} ${product.sku} ${product.material}`.toLowerCase();
  return haystack.includes(state.query.toLowerCase());
}

function getVisibleProducts() {
  const visibleProducts = products.filter((product) => {
    const categoryMatch =
      state.filter === "All" ||
      product.category === state.filter ||
      product.collection === state.filter ||
      (state.filter === "Diamonds" && product.material.toLowerCase().includes("diamond")) ||
      (state.filter === "Gold" && product.material.toLowerCase().includes("gold")) ||
      (state.filter === "Bridal" && /bridal|wedding|solitaire/i.test(`${product.collection} ${product.name}`)) ||
      (state.filter === "Gifts" && /gift|baby|for him|pearl/i.test(`${product.badge} ${product.category} ${product.collection}`));
    return categoryMatch && matchesQuery(product);
  });

  if (state.sort === "price-asc") {
    visibleProducts.sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-desc") {
    visibleProducts.sort((a, b) => b.price - a.price);
  }

  return visibleProducts;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  resultCount.textContent = `${visibleProducts.length} pieces found`;

  if (visibleProducts.length === 0) {
    productGrid.innerHTML = '<p class="empty-state">No pieces match your search. Try another collection or category.</p>';
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map(
      (product, index) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="tag">${product.badge}</span>
            <button class="wishlist ${state.wishlist.has(product.sku) ? "active" : ""}" type="button" data-wishlist="${product.sku}" aria-label="Save ${product.name}">
              ${state.wishlist.has(product.sku) ? "♥" : "♡"}
            </button>
          </div>
          <div class="product-info">
            <span class="product-meta">${product.collection}</span>
            <div class="product-title-row">
              <h3>${product.name}</h3>
              <strong class="price">${formatCurrency(product.price)}</strong>
            </div>
            <p>${product.material}</p>
            <dl class="product-facts">
              <div><dt>SKU</dt><dd>${product.sku}</dd></div>
              <div><dt>Stock</dt><dd>${product.stock} in stock</dd></div>
            </dl>
            <div class="product-actions">
              <button class="btn outline" type="button" data-add-to-cart="${index}">Add to bag</button>
              <button class="text-button" type="button" data-quick-view-index="${index}">Quick view</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  wishlistCount.textContent = state.wishlist.size;

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
              <p>${formatCurrency(item.price)} · ${item.sku}</p>
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

function addProduct(product) {
  const cartItem = state.cart.find((item) => item.name === product.name);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  checkoutNote.textContent = "";
  renderCart();
  openCart();
}

function openQuickView(product) {
  quickViewBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div>
      <p class="eyebrow">${product.collection}</p>
      <h2>${product.name}</h2>
      <p>${product.material}</p>
      <dl class="product-facts">
        <div><dt>SKU</dt><dd>${product.sku}</dd></div>
        <div><dt>Availability</dt><dd>${product.stock} in stock</dd></div>
        <div><dt>Category</dt><dd>${product.category}</dd></div>
      </dl>
      <strong class="quick-price">${formatCurrency(product.price)}</strong>
      <button class="btn primary" type="button" data-quick-add="${product.sku}">Add to bag</button>
    </div>
  `;
  quickView.classList.add("is-open");
  quickView.setAttribute("aria-hidden", "false");
}

function closeQuickView() {
  quickView.classList.remove("is-open");
  quickView.setAttribute("aria-hidden", "true");
}

function setFilter(filter) {
  state.filter = filter;
  filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.filter === filter));
  renderProducts();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

jumpFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.jumpFilter);
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  });
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  renderProducts();
});

searchToggle.addEventListener("click", () => {
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  searchInput.focus();
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const wishButton = event.target.closest(".wishlist");
  if (wishButton) {
    if (state.wishlist.has(wishButton.dataset.wishlist)) {
      state.wishlist.delete(wishButton.dataset.wishlist);
      showToast("Removed from wishlist");
    } else {
      state.wishlist.add(wishButton.dataset.wishlist);
      showToast("Added to wishlist");
    }
    renderProducts();
    renderCart();
    return;
  }

  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    addProduct(getVisibleProducts()[Number(addButton.dataset.addToCart)]);
    return;
  }

  const quickButton = event.target.closest("[data-quick-view-index]");
  if (quickButton) {
    openQuickView(getVisibleProducts()[Number(quickButton.dataset.quickViewIndex)]);
  }
});

quickViewBody.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-quick-add]");
  if (!addButton) return;
  const product = products.find((item) => item.sku === addButton.dataset.quickAdd);
  addProduct(product);
  closeQuickView();
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
quickViewClose.addEventListener("click", closeQuickView);
quickView.addEventListener("click", (event) => {
  if (event.target === quickView) {
    closeQuickView();
  }
});

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
    closeQuickView();
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

year.textContent = new Date().getFullYear();
renderProducts();
renderCart();
