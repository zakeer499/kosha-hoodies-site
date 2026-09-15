/* Renders a single product's detail page based on ?id= in the URL. */
function renderProductPage(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = getProduct(id);
  const root = document.getElementById('productRoot');
  if(!p){
    root.innerHTML = '<div class="wrap" style="padding:180px 0 100px; text-align:center;">' +
      '<h1 style="font-family:var(--serif); font-size:28px; margin-bottom:14px;">We couldn\'t find that product.</h1>' +
      '<p style="color:var(--ink-soft); margin-bottom:22px;">It may have been renamed or removed.</p>' +
      '<a class="mega-cta" href="index.html" style="display:inline-flex;">Back to Kosha →</a>' +
      '</div>';
    return;
  }
  const cat = CATEGORIES[p.category];
  document.title = "Kosha — " + p.name;

  const priceHtml = p.mrp
    ? `<span class="pd-price">${fmt(p.price)}</span><span class="pd-mrp">${fmt(p.mrp)}</span>`
    : `<span class="pd-price">${fmt(p.price)}</span>`;

  root.innerHTML = `
    <div class="wrap product-detail-grid">
      <div class="pd-gallery">
        <div class="pd-image"><img src="${p.img}" alt="Kosha ${p.name}" id="pdMainImage"></div>
      </div>
      <div class="pd-info">
        <div class="breadcrumb"><a href="index.html">Kosha</a> / <a href="${cat.href}">${cat.label}</a> / ${p.colorway}</div>
        <div class="pd-eyebrow">${cat.eyebrow}</div>
        <h1>${p.name}</h1>
        <div class="pd-colorway"><span class="swatch" style="background:${p.swatch};"></span>${p.colorway}</div>
        <div class="pd-price-row">${priceHtml}</div>
        <p class="pd-desc">${p.desc} ${cat.longDesc}</p>
        <div class="pd-sizes">
          <div class="lbl">Select Size</div>
          <div class="size-chips" id="sizeChips">
            ${["XS","S","M","L","XL","XXL"].map((s,i) => `<button type="button" class="size-chip${i===2?' selected':''}" data-size="${s}">${s}</button>`).join('')}
          </div>
        </div>
        <ul class="pd-details">
          ${p.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <button type="button" class="pd-add-btn add-btn" data-id="${p.id}">+ Add to Bag — ${fmt(p.price)}</button>
        <div class="pd-trust-mini">
          <span>↺ 15-day free returns</span>
          <span>◎ UPI, cards &amp; EMI</span>
          <span>✦ GST invoice included</span>
        </div>
      </div>
    </div>
    <div class="wrap pd-related">
      <h2>More from ${cat.label}</h2>
      <div class="product-grid" id="relatedGrid"></div>
    </div>
  `;

  document.getElementById('sizeChips').addEventListener('click', (e) => {
    const chip = e.target.closest('.size-chip');
    if(!chip) return;
    document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
  });

  const related = getProductsByCategory(p.category).filter(x => x.id !== p.id);
  document.getElementById('relatedGrid').innerHTML = related.map(productCardHTML).join('');

  wireAddButtons();

  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  els.forEach(el=>io.observe(el));
}
