const products = [
  {
    name: "Solitaire Diamond Ring",
    category: "Rings",
    price: 3440,
    detail: "GIA diamond, 18k yellow gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Heritage Gold Bangles",
    category: "Bracelets",
    price: 1560,
    detail: "Hand-finished 22k gold",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pear Diamond Earrings",
    category: "Earrings",
    price: 2590,
    detail: "White gold, pear-cut diamonds",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wedding Gold Necklace",
    category: "Necklaces",
    price: 5610,
    detail: "18k gold, diamond accents",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    price: 6530,
    detail: "White gold, 4.2ct diamonds",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Emerald Pendant",
    category: "Necklaces",
    price: 4540,
    detail: "Emerald, diamond halo, 18k gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
  },
];

const state = {
  filter: "All",
  sort: "featured",
  cart: [],
};

const productGrid = document.querySelector("[data-product-grid]");
const resultCount = document.querySelector("[data-result-count]");
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
const appointmentForms = document.querySelectorAll("[data-appointment-form]");
const newsletterForms = document.querySelectorAll("[data-newsletter-form]");
const yearTargets = document.querySelectorAll("[data-year]");
const panelToggle = document.querySelector("[data-panel-toggle]");
const sidePanel = document.querySelector("[data-left-panel]");
const hotProductPanel = document.querySelector("[data-hot-product-panel]");
const hotProductImage = document.querySelector("[data-hot-product-image]");
const hotProductKicker = document.querySelector("[data-hot-product-kicker]");
const hotProductName = document.querySelector("[data-hot-product-name]");
const hotProductDetail = document.querySelector("[data-hot-product-detail]");
const hotProductPrice = document.querySelector("[data-hot-product-price]");
const hotProductAdd = document.querySelector("[data-hot-product-add]");
const hotProductDots = document.querySelector("[data-hot-product-dots]");

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-JO", {
    style: "currency",
    currency: "JOD",
    maximumFractionDigits: 0,
  }).format(value);

const hotProducts = [
  {
    kicker: "Hot now",
    name: "Solitaire Diamond Ring",
    detail: "GIA diamond set in 18k yellow gold.",
    price: 3440,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    kicker: "Limited edit",
    name: "Diamond Tennis Bracelet",
    detail: "White gold bracelet with 4.2ct diamonds.",
    price: 6530,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    kicker: "New arrival",
    name: "Pear Diamond Earrings",
    detail: "Pear-cut diamonds with a clean white gold setting.",
    price: 2590,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
  },
];

let activeHotProduct = 0;

function visibleProducts() {
  const visible =
    state.filter === "All" ? [...products] : products.filter((product) => product.category === state.filter);

  if (state.sort === "price-asc") {
    visible.sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-desc") {
    visible.sort((a, b) => b.price - a.price);
  }

  return visible;
}

function renderProducts() {
  if (!productGrid) return;

  const productsToShow = visibleProducts();
  if (resultCount) {
    resultCount.textContent = `${productsToShow.length} pieces`;
  }

  productGrid.innerHTML = productsToShow
    .map(
      (product, index) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div>
            <p>${product.category}</p>
            <h3>${product.name}</h3>
            <span>${product.detail}</span>
            <div class="product-row">
              <strong>${formatCurrency(product.price)}</strong>
              <button type="button" data-add-to-cart="${index}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  if (!cartCount || !cartItems || !cartTotal) return;

  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<p class="muted">Your bag is empty.</p>';
  } else {
    cartItems.innerHTML = state.cart
      .map(
        (item, index) => `
          <article class="cart-item">
            <div>
              <h3>${item.name}</h3>
              <p>${formatCurrency(item.price)} · Qty ${item.quantity}</p>
            </div>
            <button type="button" data-remove-item="${index}">Remove</button>
          </article>
        `
      )
      .join("");
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatCurrency(total);
}

function addProductToCart(product) {
  const existing = state.cart.find((item) => item.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  if (checkoutNote) checkoutNote.textContent = "";
  renderCart();
  openCart();
}

function renderHotProduct(index) {
  if (!hotProductPanel) return;

  const product = hotProducts[index];
  hotProductPanel.classList.add("is-changing");

  window.setTimeout(() => {
    hotProductImage.style.backgroundImage = `linear-gradient(180deg, rgba(27, 24, 20, 0.02), rgba(27, 24, 20, 0.34)), url("${product.image}")`;
    hotProductKicker.textContent = product.kicker;
    hotProductName.textContent = product.name;
    hotProductDetail.textContent = product.detail;
    hotProductPrice.textContent = formatCurrency(product.price);
    hotProductAdd.dataset.hotProductAdd = String(index);

    if (hotProductDots) {
      hotProductDots.innerHTML = hotProducts
        .map(
          (_, dotIndex) =>
            `<button type="button" aria-label="Show hot product ${dotIndex + 1}" data-hot-product-dot="${dotIndex}" ${
              dotIndex === index ? 'class="active"' : ""
            }></button>`
        )
        .join("");
    }

    hotProductPanel.classList.remove("is-changing");
  }, 140);
}

function openCart() {
  if (!cartDrawer || !cartButton) return;
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartButton.setAttribute("aria-expanded", "true");
}

function closeCart() {
  if (!cartDrawer || !cartButton) return;
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartButton.setAttribute("aria-expanded", "false");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    renderProducts();
  });
}

if (productGrid) {
  productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");
    if (!addButton) return;

    const product = visibleProducts()[Number(addButton.dataset.addToCart)];
    addProductToCart(product);
  });
}

if (cartItems) {
  cartItems.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-item]");
    if (!removeButton) return;

    state.cart.splice(Number(removeButton.dataset.removeItem), 1);
    renderCart();
  });
}

if (cartButton) cartButton.addEventListener("click", openCart);
cartCloseButtons.forEach((button) => button.addEventListener("click", closeCart));

if (panelToggle && sidePanel) {
  const setPanelState = (isCollapsed) => {
    document.body.classList.toggle("panel-collapsed", isCollapsed);
    panelToggle.setAttribute("aria-expanded", String(!isCollapsed));
    panelToggle.setAttribute("aria-label", isCollapsed ? "Open navigation panel" : "Collapse navigation panel");
  };

  panelToggle.addEventListener("click", () => {
    setPanelState(!document.body.classList.contains("panel-collapsed"));
  });

  if (window.matchMedia("(max-width: 760px)").matches) {
    setPanelState(true);
  }
}

if (hotProductPanel) {
  renderHotProduct(activeHotProduct);
  window.setInterval(() => {
    activeHotProduct = (activeHotProduct + 1) % hotProducts.length;
    renderHotProduct(activeHotProduct);
  }, 4500);
}

if (hotProductAdd) {
  hotProductAdd.addEventListener("click", () => {
    const product = hotProducts[Number(hotProductAdd.dataset.hotProductAdd || 0)];
    addProductToCart(product);
  });
}

if (hotProductDots) {
  hotProductDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hot-product-dot]");
    if (!dot) return;

    activeHotProduct = Number(dot.dataset.hotProductDot);
    renderHotProduct(activeHotProduct);
  });
}

if (checkoutButton && checkoutNote) {
  checkoutButton.addEventListener("click", () => {
    checkoutNote.textContent =
      state.cart.length === 0
        ? "Add a piece before requesting checkout."
        : "A concierge checkout can be connected to your preferred payment provider.";
  });
}

appointmentForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector("[data-appointment-message]");
    form.reset();
    if (message) message.textContent = "Thank you. A specialist will contact you shortly.";
  });
});

newsletterForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.parentElement.querySelector("[data-newsletter-message]");
    form.reset();
    if (message) message.textContent = "You are subscribed to private previews.";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});
renderProducts();
renderCart();
