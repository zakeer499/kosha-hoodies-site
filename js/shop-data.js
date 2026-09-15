/* ---------- KOSHA SHOP DATA (single source of truth) ---------- */
const CATEGORIES = {
  hoodies: {
    key: "hoodies", label: "Hoodies", eyebrow: "01 · Hoodies",
    title: "The Terry Hoodie",
    desc: "420 GSM French terry, cut oversized for the cropped-not-cropped length we're known for.",
    longDesc: "Every Kosha hoodie shares the same pattern — relaxed shoulder, dropped sleeve, cropped-not-cropped length — so the only decision left is colour.",
    heroImage: "assets/lifestyle.png",
    icon: "assets/product-oxblood.png",
    href: "hoodies.html",
    ctaLabel: "Shop All Hoodies →"
  },
  tshirts: {
    key: "tshirts", label: "T-Shirts", eyebrow: "02 · T-Shirts",
    title: "The Everyday Tee",
    desc: "190 GSM combed cotton in a boxy, easy fit that layers under anything.",
    longDesc: "190 GSM combed cotton, a boxy drop-shoulder cut, and a neckline that keeps its shape after fifty washes — not fifteen.",
    heroImage: "assets/tshirt-graphite.png",
    icon: "assets/tshirt-ivory.png",
    href: "tshirts.html",
    ctaLabel: "Shop All T-Shirts →"
  },
  pants: {
    key: "pants", label: "Pants", eyebrow: "03 · Pants",
    title: "Wide-Leg & Joggers",
    desc: "Relaxed, considered fits built to move from desk to flight.",
    longDesc: "A relaxed, wide-leg block with a real waistband — cut generous through the hip and tapered enough at the ankle to wear with heels or sneakers.",
    heroImage: "assets/pants-stone.png",
    icon: "assets/pants-graphite.png",
    href: "pants.html",
    ctaLabel: "Shop All Pants →"
  },
  shorts: {
    key: "shorts", label: "Shorts", eyebrow: "04 · Shorts",
    title: "Warm-Weather Shorts",
    desc: "420 GSM terry with a 5\" inseam — the hoodie's off-duty partner.",
    longDesc: "The same 420 GSM terry as our hoodies, cut into a relaxed short with a 5\" inseam and real side pockets — made with Chennai and Hyderabad summers in mind.",
    heroImage: "assets/shorts-stone.png",
    icon: "assets/shorts-oxblood.png",
    href: "shorts.html",
    ctaLabel: "Shop All Shorts →"
  },
  inners: {
    key: "inners", label: "Inners", eyebrow: "05 · Inners",
    title: "Seamless Inners",
    desc: "Tag-free cotton-modal basics, made to disappear under everything else.",
    longDesc: "Tag-free, seam-free cotton-modal innerwear built to sit invisibly under everything else in this wardrobe — not an afterthought category, a real one.",
    heroImage: "assets/inners-black.png",
    icon: "assets/inners-nude.png",
    href: "inners.html",
    ctaLabel: "Shop All Inners →"
  }
};

const PRODUCTS = [
  { id:"hoodie-oxblood", category:"hoodies", name:"Hoodie — Oxblood", colorway:"Oxblood", price:5499, mrp:null, img:"assets/product-oxblood.png", gallery:["assets/product-oxblood.png","assets/model/hoodie-oxblood-model.png"], swatch:"#7A2430", desc:"Deep, wine-dark red. Our most-loved shade.", details:["420 GSM cotton-poly terry","Relaxed shoulder, dropped sleeve","Double-lined hood","Hidden zip pocket inside kangaroo pouch"] },
  { id:"hoodie-ivory-silk", category:"hoodies", name:"Hoodie — Ivory Silk", colorway:"Ivory Silk", price:4999, mrp:null, img:"assets/product-ivory.png", gallery:["assets/product-ivory.png","assets/model/hoodie-ivory-silk-model.png"], swatch:"#F6F2EA", desc:"Undyed cotton, brushed to a soft chalk finish.", details:["420 GSM cotton-poly terry","Relaxed shoulder, dropped sleeve","Double-lined hood","Hidden zip pocket inside kangaroo pouch"] },
  { id:"hoodie-graphite", category:"hoodies", name:"Hoodie — Graphite", colorway:"Graphite", price:5499, mrp:null, img:"assets/product-graphite.png", gallery:["assets/product-graphite.png","assets/model/hoodie-graphite-model.png"], swatch:"#15130F", desc:"Near-black, warmed with a hint of grey.", details:["420 GSM cotton-poly terry","Relaxed shoulder, dropped sleeve","Double-lined hood","Hidden zip pocket inside kangaroo pouch"] },
  { id:"hoodie-stone", category:"hoodies", name:"Hoodie — Stone", colorway:"Stone", price:5199, mrp:5999, img:"assets/lifestyle.png", gallery:["assets/lifestyle.png","assets/model/hoodie-stone-model.png"], swatch:"#B9AF9D", desc:"A quiet warm grey that pairs with everything.", details:["420 GSM cotton-poly terry","Relaxed shoulder, dropped sleeve","Double-lined hood","Hidden zip pocket inside kangaroo pouch"] },

  { id:"t-shirt-ivory", category:"tshirts", name:"T-Shirt — Ivory", colorway:"Ivory", price:1799, mrp:null, img:"assets/tshirt-ivory.png", gallery:["assets/tshirt-ivory.png","assets/model/t-shirt-ivory-model.png"], swatch:"#F6F2EA", desc:"Undyed combed cotton, boxy drop-shoulder fit.", details:["190 GSM combed cotton","Boxy drop-shoulder cut","Tag-free woven collar mark","Garment-washed for softness"] },
  { id:"t-shirt-graphite", category:"tshirts", name:"T-Shirt — Graphite", colorway:"Graphite", price:1799, mrp:null, img:"assets/tshirt-graphite.png", gallery:["assets/tshirt-graphite.png","assets/model/t-shirt-graphite-model.png"], swatch:"#15130F", desc:"Near-black, garment-washed for softness.", details:["190 GSM combed cotton","Boxy drop-shoulder cut","Tag-free woven collar mark","Garment-washed for softness"] },
  { id:"t-shirt-oxblood", category:"tshirts", name:"T-Shirt — Oxblood", colorway:"Oxblood", price:1899, mrp:null, img:"assets/tshirt-oxblood.png", gallery:["assets/tshirt-oxblood.png","assets/model/t-shirt-oxblood-model.png"], swatch:"#7A2430", desc:"Our signature red, in everyday cotton.", details:["190 GSM combed cotton","Boxy drop-shoulder cut","Tag-free woven collar mark","Garment-washed for softness"] },
  { id:"t-shirt-stone", category:"tshirts", name:"T-Shirt — Stone", colorway:"Stone", price:1799, mrp:null, img:"assets/tshirt-stone.png", gallery:["assets/tshirt-stone.png","assets/model/t-shirt-stone-model.png"], swatch:"#B9AF9D", desc:"A quiet warm grey for everyday layering.", details:["190 GSM combed cotton","Boxy drop-shoulder cut","Tag-free woven collar mark","Garment-washed for softness"] },

  { id:"pants-graphite-wide-leg", category:"pants", name:"Pants — Graphite Wide-Leg", colorway:"Graphite Wide-Leg", price:3299, mrp:null, img:"assets/pants-graphite.png", gallery:["assets/pants-graphite.png","assets/model/pants-graphite-wide-leg-model.png"], swatch:"#15130F", desc:"Structured cotton twill, side pockets, tab waist.", details:["Structured cotton twill","Wide-leg, tapered at ankle","Real waistband with tab closure","Side seam pockets"] },
  { id:"pants-stone-jogger", category:"pants", name:"Pants — Stone Jogger", colorway:"Stone Jogger", price:2999, mrp:null, img:"assets/pants-stone.png", gallery:["assets/pants-stone.png","assets/model/pants-stone-jogger-model.png"], swatch:"#B9AF9D", desc:"Brushed fleece, tapered leg, zip ankle cuff.", details:["Brushed fleece","Tapered leg with zip ankle cuff","Elastic drawcord waist","Side seam pockets"] },
  { id:"pants-ivory-wide-leg", category:"pants", name:"Pants — Ivory Wide-Leg", colorway:"Ivory Wide-Leg", price:3299, mrp:null, img:"assets/pants-ivory.png", gallery:["assets/pants-ivory.png","assets/model/pants-ivory-wide-leg-model.png"], swatch:"#F6F2EA", desc:"Undyed cotton twill, side pockets, tab waist.", details:["Structured cotton twill","Wide-leg, tapered at ankle","Real waistband with tab closure","Side seam pockets"] },
  { id:"pants-oxblood-jogger", category:"pants", name:"Pants — Oxblood Jogger", colorway:"Oxblood Jogger", price:2999, mrp:null, img:"assets/pants-oxblood.png", gallery:["assets/pants-oxblood.png","assets/model/pants-oxblood-jogger-model.png"], swatch:"#7A2430", desc:"Brushed fleece, tapered leg, zip ankle cuff.", details:["Brushed fleece","Tapered leg with zip ankle cuff","Elastic drawcord waist","Side seam pockets"] },

  { id:"shorts-oxblood", category:"shorts", name:"Shorts — Oxblood", colorway:"Oxblood", price:2199, mrp:null, img:"assets/shorts-oxblood.png", gallery:["assets/shorts-oxblood.png","assets/model/shorts-oxblood-model.png"], swatch:"#7A2430", desc:"Brushed terry, drawcord waist, side pockets.", details:["420 GSM brushed terry","5\" inseam","Drawcord waist","Real side pockets"] },
  { id:"shorts-stone", category:"shorts", name:"Shorts — Stone", colorway:"Stone", price:2199, mrp:null, img:"assets/shorts-stone.png", gallery:["assets/shorts-stone.png","assets/model/shorts-stone-model.png"], swatch:"#B9AF9D", desc:"A warm neutral grey, pairs with every tee.", details:["420 GSM brushed terry","5\" inseam","Drawcord waist","Real side pockets"] },
  { id:"shorts-graphite", category:"shorts", name:"Shorts — Graphite", colorway:"Graphite", price:2199, mrp:null, img:"assets/shorts-graphite.png", gallery:["assets/shorts-graphite.png","assets/model/shorts-graphite-model.png"], swatch:"#15130F", desc:"Near-black terry, our most versatile short.", details:["420 GSM brushed terry","5\" inseam","Drawcord waist","Real side pockets"] },
  { id:"shorts-ivory", category:"shorts", name:"Shorts — Ivory", colorway:"Ivory", price:2199, mrp:null, img:"assets/shorts-ivory.png", gallery:["assets/shorts-ivory.png","assets/model/shorts-ivory-model.png"], swatch:"#F6F2EA", desc:"Undyed brushed terry, drawcord waist.", details:["420 GSM brushed terry","5\" inseam","Drawcord waist","Real side pockets"] },

  { id:"inners-nude-set", category:"inners", name:"Inners — Nude Set", colorway:"Nude Set", price:1499, mrp:null, img:"assets/inners-nude.png", gallery:["assets/inners-nude.png"], swatch:"#D8B896", desc:"Camisole + brief, seamless cotton-modal.", details:["Seamless cotton-modal blend","Camisole + brief set","Tag-free construction","Breathable, four-way stretch"] },
  { id:"inners-black-set", category:"inners", name:"Inners — Black Set", colorway:"Black Set", price:1499, mrp:null, img:"assets/inners-black.png", gallery:["assets/inners-black.png"], swatch:"#15130F", desc:"Camisole + brief, seamless cotton-modal.", details:["Seamless cotton-modal blend","Camisole + brief set","Tag-free construction","Breathable, four-way stretch"] },
  { id:"inners-stone-set", category:"inners", name:"Inners — Stone Set", colorway:"Stone Set", price:1499, mrp:null, img:"assets/inners-stone.png", gallery:["assets/inners-stone.png"], swatch:"#B9AF9D", desc:"Camisole + brief, seamless cotton-modal.", details:["Seamless cotton-modal blend","Camisole + brief set","Tag-free construction","Breathable, four-way stretch"] },
  { id:"inners-ivory-set", category:"inners", name:"Inners — Ivory Set", colorway:"Ivory Set", price:1499, mrp:null, img:"assets/inners-ivory.png", gallery:["assets/inners-ivory.png"], swatch:"#F6F2EA", desc:"Camisole + brief, seamless cotton-modal.", details:["Seamless cotton-modal blend","Camisole + brief set","Tag-free construction","Breathable, four-way stretch"] }
];

function getProduct(id){ return PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(cat){ return PRODUCTS.filter(p => p.category === cat); }
