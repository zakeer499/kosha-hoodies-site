/* Renders the product grid on a category listing page. Call renderCategoryPage('hoodies'). */
function productCardHTML(p){
  const priceHtml = p.mrp
    ? `<div class="price">${fmt(p.price)} <span class="strike">${fmt(p.mrp)}</span></div>`
    : `<div class="price">${fmt(p.price)}</div>`;
  return `
    <div class="card reveal">
      <a class="card-link" href="product.html?id=${encodeURIComponent(p.id)}">
        <div class="card-img"><img src="${p.img}" alt="Kosha ${p.name}"></div>
        <div class="card-info">
          <h3><span class="swatch" style="background:${p.swatch};${p.swatch==='#F6F2EA' ? 'border:1px solid #d8d2c4;' : ''}"></span>${p.colorway}</h3>
          <div class="desc">${p.desc}</div>
          <div class="price-row">${priceHtml}</div>
        </div>
      </a>
      <div style="padding:0 22px 22px;">
        <button type="button" class="add-btn" data-id="${p.id}">+ Add</button>
      </div>
    </div>
  `;
}

function renderCategoryPage(catKey){
  const cat = CATEGORIES[catKey];
  const items = getProductsByCategory(catKey);
  const grid = document.getElementById('categoryGrid');
  if(grid){
    grid.innerHTML = items.map(productCardHTML).join('');
  }
  wireAddButtons();
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  els.forEach(el=>io.observe(el));
}
