/* ---------- KOSHA CATEGORY MENU (hover preview only — pills are real links) ---------- */
(function(){
  const headerEl = document.getElementById('siteHeader');

  function setHeaderHeight(){
    if(!headerEl) return;
    document.documentElement.style.setProperty('--header-h', headerEl.offsetHeight + 'px');
    let styleTag = document.getElementById('scrollMarginStyle');
    if(!styleTag){
      styleTag = document.createElement('style');
      styleTag.id = 'scrollMarginStyle';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = '[id]{scroll-margin-top:' + (headerEl.offsetHeight + 14) + 'px;}';
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);

  const megaPanel = document.getElementById('megaPanel');
  if(!megaPanel) return; // page has no mega menu (shouldn't happen, but guard)

  const megaOverlay = document.getElementById('megaOverlay');
  const megaImage = document.getElementById('megaImage');
  const megaEyebrow = document.getElementById('megaEyebrow');
  const megaTitle = document.getElementById('megaTitle');
  const megaDesc = document.getElementById('megaDesc');
  const megaSwatches = document.getElementById('megaSwatches');
  const megaCta = document.getElementById('megaCta');
  const megaVisual = document.getElementById('megaVisual');
  const catPills = Array.from(document.querySelectorAll('.cat-pill'));

  let megaOpenTimer = null, megaCloseTimer = null, activeCat = null;
  const isMobileNav = () => window.innerWidth <= 860;

  function populateMega(catKey){
    const d = CATEGORIES[catKey];
    if(!d) return;
    const items = getProductsByCategory(catKey);
    megaEyebrow.textContent = d.eyebrow;
    megaTitle.textContent = d.title;
    megaDesc.textContent = d.desc;
    megaImage.src = d.heroImage;
    megaImage.alt = d.title;
    megaCta.href = d.href;
    megaCta.textContent = d.ctaLabel;
    megaSwatches.innerHTML = items.map(p =>
      '<a class="mega-swatch-item" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<span class="dot" style="background:' + p.swatch + ';"></span>' +
        '<span class="nm">' + p.colorway + '</span>' +
        '<span class="pr">' + fmt(p.price) + '</span>' +
      '</a>'
    ).join('');
  }

  function openMega(catKey){
    clearTimeout(megaCloseTimer);
    if(activeCat === catKey && megaPanel.classList.contains('open')) return;
    activeCat = catKey;
    populateMega(catKey);
    catPills.forEach(p => p.classList.toggle('active', p.dataset.cat === catKey));
    megaPanel.classList.add('open');
    megaOverlay.classList.add('open');
  }
  function closeMega(){
    if(!activeCat) return;
    megaPanel.classList.remove('open');
    megaOverlay.classList.remove('open');
    catPills.forEach(p => p.classList.remove('active'));
    activeCat = null;
  }

  catPills.forEach(pill => {
    const cat = pill.dataset.cat;
    pill.addEventListener('mouseenter', () => {
      if(isMobileNav()) return;
      clearTimeout(megaCloseTimer);
      clearTimeout(megaOpenTimer);
      megaOpenTimer = setTimeout(() => openMega(cat), 90);
    });
    pill.addEventListener('mouseleave', () => {
      if(isMobileNav()) return;
      clearTimeout(megaOpenTimer);
      megaCloseTimer = setTimeout(closeMega, 160);
    });
    pill.addEventListener('focus', () => { if(!isMobileNav()) openMega(cat); });
    // No click handling needed — pills are plain <a href> links that navigate normally.
  });

  megaPanel.addEventListener('mouseenter', () => clearTimeout(megaCloseTimer));
  megaPanel.addEventListener('mouseleave', () => {
    megaCloseTimer = setTimeout(closeMega, 160);
  });
  megaOverlay.addEventListener('click', closeMega);
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeMega(); });

  // Close immediately on scroll so the open panel never fights with scrolling.
  window.addEventListener('scroll', () => { if(activeCat) closeMega(); }, { passive: true });

  // 3D tilt + sheen tracking on the mega visual image — throttled to one calc per animation frame.
  if(megaVisual){
    let ticking = false, lastEvt = null;
    megaVisual.addEventListener('mousemove', (e) => {
      lastEvt = e;
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = megaVisual.getBoundingClientRect();
        const x = lastEvt.clientX - rect.left, y = lastEvt.clientY - rect.top;
        const px = (x / rect.width) * 100, py = (y / rect.height) * 100;
        megaVisual.style.setProperty('--mx', px + '%');
        megaVisual.style.setProperty('--my', py + '%');
        const rotY = ((x / rect.width) - 0.5) * 10;
        const rotX = ((y / rect.height) - 0.5) * -10;
        megaImage.style.transform = 'scale(1.06) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        ticking = false;
      });
    });
    megaVisual.addEventListener('mouseleave', () => {
      megaImage.style.transform = 'scale(1.02) rotateX(0deg) rotateY(0deg)';
    });
  }
})();
