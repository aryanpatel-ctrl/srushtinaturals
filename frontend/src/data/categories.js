// Centralized category data for Srushti Naturals

export const categories = [
  {
    id: "incense",
    slug: "incense",
    name: "Incense Stick",
    img: "/assets/images/category/incencestick.png",
    itemCount: 7
  },
  {
    id: "herbal-soaps",
    slug: "herbal-soaps",
    name: "Herbal Soaps",
    img: "/assets/images/category/herbalsoap.png",
    itemCount: 6
  },
  {
    id: "pulses",
    slug: "pulses",
    name: "Pulses",
    img: "/assets/images/category/pulses.png",
    itemCount: 5
  },
  {
    id: "spices",
    slug: "spices",
    name: "Spices",
    img: "/assets/images/category/spices.png",
    itemCount: 5
  },
  {
    id: "rice",
    slug: "rice",
    name: "Special Rice",
    img: "/assets/images/category/rice.png",
    itemCount: 4
  }
];

// Navigation categories for mega menu
export const navCategories = [
  { id: "rice", name: "Rice", slug: "rice" },
  { id: "pulses", name: "Pulses", slug: "pulses" },
  { id: "spices", name: "Spices", slug: "spices" },
  { id: "oils", name: "Oils", slug: "oils" },
  { id: "herbal-soaps", name: "Herbal Soaps", slug: "herbal-soaps" },
  { id: "incense", name: "Incense Sticks", slug: "incense" },
  { id: "powders", name: "Powders", slug: "powders" }
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(category => category.slug === slug);
};

// Helper function to get all categories
export const getAllCategories = () => {
  return categories;
};

export default categories;
