/* ---------- KOSHA CART (shared across every page) ---------- */
const RAZORPAY_KEY_ID = "rzp_test_3jGFYxmWHR6vWZ";
const CART_KEY = "kosha_cart_v1";
const fmt = (n) => "₹" + n.toLocaleString("en-IN");

function loadCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){ try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e){} }

let cart = loadCart();

function cartTotal(){ return cart.reduce((sum, item) => sum + item.price * item.qty, 0); }
function cartCount(){ return cart.reduce((sum, item) => sum + item.qty, 0); }

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const countEl = document.getElementById('cartCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  const checkoutBtn = document.getElementById('cartCheckout');
  if(!itemsEl) return;

  const count = cartCount();
  countEl.textContent = count;
  countEl.style.display = count > 0 ? 'flex' : 'none';

  if(cart.length === 0){
    itemsEl.innerHTML = '<div class="cart-empty">Your bag is empty. Add something you\'ll actually wear.</div>';
    checkoutBtn.disabled = true;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="name">${item.name}</div>
          <div class="unit-price">${fmt(item.price)} each</div>
          <div class="qty-stepper">
            <button type="button" data-action="dec">&minus;</button>
            <span>${item.qty}</span>
            <button type="button" data-action="inc">+</button>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:space-between; height:64px;">
          <div class="cart-item-total">${fmt(item.price * item.qty)}</div>
          <button type="button" class="cart-item-remove" data-action="remove">Remove</button>
        </div>
      </div>
    `).join('');
    checkoutBtn.disabled = false;
  }
  subtotalEl.textContent = fmt(cartTotal());
  saveCart(cart);
}

function addToCart(product){
  const existing = cart.find(i => i.id === product.id);
  if(existing){ existing.qty += 1; }
  else { cart.push({ ...product, qty: 1 }); }
  renderCart();
  openCart();
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function wireAddButtons(){
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      const p = getProduct(id);
      if(!p) return;
      addToCart({ id: p.id, name: p.name, price: p.price, img: p.img });
      btn.classList.add('just-added');
      const original = btn.dataset.label || btn.textContent;
      btn.dataset.label = original;
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.classList.remove('just-added'); btn.textContent = original; }, 1200);
    });
  });
}

function initCart(){
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  wireAddButtons();

  document.getElementById('cartItems').addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if(!action) return;
    const itemEl = e.target.closest('.cart-item');
    const id = itemEl.dataset.id;
    const item = cart.find(i => i.id === id);
    if(!item) return;
    if(action === 'inc'){ item.qty += 1; }
    if(action === 'dec'){ item.qty -= 1; if(item.qty <= 0){ cart = cart.filter(i => i.id !== id); } }
    if(action === 'remove'){ cart = cart.filter(i => i.id !== id); }
    renderCart();
  });

  document.getElementById('cartCheckout').addEventListener('click', () => {
    if(cart.length === 0) return;
    const amount = cartTotal() * 100; // paise
    const description = cart.map(i => `${i.name} x${i.qty}`).join(', ');
    const rzp = new Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "Kosha",
      description: description.length > 120 ? description.slice(0, 117) + '...' : description,
      theme: { color: "#7A2430" },
      handler: function(response){
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        cart = [];
        renderCart();
        closeCart();
      },
      modal: { ondismiss: function(){} }
    });
    rzp.open();
  });

  renderCart();
}

document.addEventListener('DOMContentLoaded', initCart);
