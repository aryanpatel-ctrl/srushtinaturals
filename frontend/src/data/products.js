// Centralized product data for Srushti Naturals
// All product information extracted from components

export const products = [
  // Rice Products
  {
    id: "basmati-rice",
    slug: "basmati-rice",
    name: "Basmati Rice",
    category: "rice",
    img: "/assets/images/product/basmati-rice.webp",
    hoverImg: "/assets/images/product/basmati-rice-h.webp",
    price: 320.00,
    oldPrice: null,
    badges: ["New", "Trending"],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Premium quality Basmati Rice with aromatic fragrance.",
    sizes: [
      { label: "500 GM", price: 320.00 },
      { label: "1 KG", price: 600.00 },
      { label: "5 KG", price: 2800.00 }
    ]
  },
  {
    id: "kalanamak-rice",
    slug: "kalanamak-rice",
    name: "Kalanamak Rice",
    category: "rice",
    img: "/assets/images/product/kalanamak-rice.webp",
    hoverImg: "/assets/images/product/kalanamak-rice-h.webp",
    price: 320.00,
    oldPrice: 400.00,
    badges: ["New"],
    hasMarquee: true,
    hasCountdown: false,
    salePercent: 25,
    description: "Aromatic Kalanamak rice, known for its unique fragrance.",
    sizes: [
      { label: "500 GM", price: 320.00 },
      { label: "1 KG", price: 600.00 }
    ]
  },
  {
    id: "ponmani-rice",
    slug: "ponmani-rice",
    name: "Ponmani Rice",
    category: "rice",
    img: "/assets/images/product/ponmani-rice.webp",
    hoverImg: "/assets/images/product/ponmani-rice-h.webp",
    price: 120.00,
    oldPrice: 160.00,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: 25,
    description: "Traditional Ponmani rice with excellent taste.",
    sizes: [
      { label: "500 GM", price: 120.00 },
      { label: "1 KG", price: 220.00 }
    ]
  },
  {
    id: "dudhmali-rice",
    slug: "dudhmali-rice",
    name: "Dudhmali Rice",
    category: "rice",
    img: "/assets/images/product/dudhmali-rice.webp",
    hoverImg: "/assets/images/product/dudhmali-rice-h.webp",
    price: 180.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Organic Dudhmali rice with milky white grains.",
    sizes: [
      { label: "500 GM", price: 180.00 },
      { label: "1 KG", price: 340.00 }
    ]
  },

  // Pulses
  {
    id: "chana-dal",
    slug: "chana-dal",
    name: "Chana Dal",
    category: "pulses",
    img: "/assets/images/product/chanadal.webp",
    hoverImg: "/assets/images/product/chana-dal-h.webp",
    price: 80.00,
    oldPrice: null,
    badges: [],
    hasMarquee: true,
    hasCountdown: false,
    salePercent: 25,
    description: "Premium quality Chana Dal for delicious dishes.",
    sizes: [
      { label: "500 GM", price: 80.00 },
      { label: "1 KG", price: 150.00 }
    ]
  },
  {
    id: "udad-dal",
    slug: "udad-dal",
    name: "Udad Dal",
    category: "pulses",
    img: "/assets/images/product/udad-dal.webp",
    hoverImg: "/assets/images/product/udad-dal-h.webp",
    price: 90.00,
    oldPrice: 120.00,
    badges: [],
    hasMarquee: false,
    hasCountdown: true,
    salePercent: 25,
    description: "High-protein Udad Dal for nutritious meals.",
    sizes: [
      { label: "500 GM", price: 90.00 },
      { label: "1 KG", price: 170.00 }
    ]
  },
  {
    id: "green-gram",
    slug: "green-gram",
    name: "Green Gram",
    category: "pulses",
    img: "/assets/images/product/green-gram.webp",
    hoverImg: "/assets/images/product/green-gram-h.webp",
    price: 75.00,
    oldPrice: null,
    badges: ["New"],
    hasMarquee: false,
    hasCountdown: true,
    salePercent: null,
    description: "Fresh organic Green Gram (Moong Dal).",
    sizes: [
      { label: "500 GM", price: 75.00 },
      { label: "1 KG", price: 140.00 }
    ]
  },

  // Spices
  {
    id: "cumin-seeds",
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    category: "spices",
    img: "/assets/images/product/cuminseeds.webp",
    hoverImg: "/assets/images/product/cuminseeds-h.webp",
    price: 180.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: true,
    salePercent: 25,
    description: "Aromatic cumin seeds for authentic flavor.",
    sizes: [
      { label: "100 GM", price: 180.00 },
      { label: "250 GM", price: 420.00 }
    ]
  },
  {
    id: "fennel-seeds",
    slug: "fennel-seeds",
    name: "Fennel Seeds",
    category: "spices",
    img: "/assets/images/product/fennelseeds.webp",
    hoverImg: "/assets/images/product/fennelseeds-h.webp",
    price: 110.00,
    oldPrice: null,
    badges: [],
    hasMarquee: true,
    hasCountdown: false,
    salePercent: 25,
    description: "Fresh fennel seeds with natural sweetness.",
    sizes: [
      { label: "100 GM", price: 110.00 },
      { label: "250 GM", price: 250.00 }
    ]
  },

  // Oils
  {
    id: "sesame-oil",
    slug: "sesame-oil",
    name: "Sesame Oil",
    category: "oils",
    img: "/assets/images/product/sesameoil.webp",
    hoverImg: "/assets/images/product/sesameoil.webp",
    price: 450.00,
    oldPrice: 600.00,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: 25,
    description: "Pure cold-pressed sesame oil for cooking.",
    sizes: [
      { label: "500 ML", price: 450.00 },
      { label: "1 L", price: 850.00 }
    ]
  },
  {
    id: "cow-ghee",
    slug: "cow-ghee",
    name: "Pure Gir Cow Ghee",
    category: "oils",
    img: "/assets/images/product/cowghee.webp",
    hoverImg: "/assets/images/product/cowghee.webp",
    price: 850.00,
    oldPrice: null,
    badges: ["Premium"],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Premium A2 Gir Cow Ghee made using traditional bilona method.",
    sizes: [
      { label: "250 ML", price: 450.00 },
      { label: "500 ML", price: 850.00 },
      { label: "1 L", price: 1600.00 }
    ]
  },

  // Honey & Others
  {
    id: "honey",
    slug: "honey",
    name: "Honey",
    category: "others",
    img: "/assets/images/product/honey.webp",
    hoverImg: "/assets/images/product/honey.webp",
    price: 350.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Pure natural honey from organic farms.",
    sizes: [
      { label: "250 GM", price: 350.00 },
      { label: "500 GM", price: 650.00 }
    ]
  },
  {
    id: "gulkand",
    slug: "gulkand",
    name: "Gulkand",
    category: "others",
    img: "/assets/images/product/gulkand.webp",
    hoverImg: "/assets/images/product/gulkand.webp",
    price: 280.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Traditional rose petal preserve.",
    sizes: [
      { label: "250 GM", price: 280.00 },
      { label: "500 GM", price: 520.00 }
    ]
  },
  {
    id: "moringa-powder",
    slug: "moringa-powder",
    name: "Moringa Powder",
    category: "powders",
    img: "/assets/images/product/moringa.webp",
    hoverImg: "/assets/images/product/moringa.webp",
    price: 220.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Organic moringa leaf powder - superfood.",
    sizes: [
      { label: "100 GM", price: 220.00 },
      { label: "250 GM", price: 500.00 }
    ]
  },
  {
    id: "incense-sticks",
    slug: "incense-sticks",
    name: "Incense Sticks",
    category: "incense",
    img: "/assets/images/product/incense.webp",
    hoverImg: "/assets/images/product/incense.webp",
    price: 50.00,
    oldPrice: null,
    badges: [],
    hasMarquee: false,
    hasCountdown: false,
    salePercent: null,
    description: "Natural handmade incense sticks.",
    sizes: [
      { label: "Pack of 20", price: 50.00 },
      { label: "Pack of 50", price: 110.00 }
    ]
  }
];

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

// Helper function to get product by id
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};

// Get featured products (for FavoriteSection)
export const getFeaturedProducts = () => {
  return products.filter(p =>
    ['basmati-rice', 'chana-dal', 'cumin-seeds', 'dudhmali-rice', 'fennel-seeds', 'green-gram'].includes(p.id)
  );
};

// Get popular products (for PopularSection)
export const getPopularProducts = () => {
  return products.filter(p =>
    ['kalanamak-rice', 'ponmani-rice', 'sesame-oil', 'udad-dal'].includes(p.id)
  );
};

// Get recommended products (for cart sidebar)
export const getRecommendedProducts = () => {
  return products.filter(p =>
    ['basmati-rice', 'chana-dal', 'cumin-seeds'].includes(p.id)
  );
};

// Format price with rupee symbol
export const formatPrice = (amount) => {
  return `₹${amount.toFixed(2)}`;
};

export default products;
