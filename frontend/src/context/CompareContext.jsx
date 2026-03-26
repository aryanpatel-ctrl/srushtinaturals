import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CompareContext = createContext(null);

const COMPARE_STORAGE_KEY = 'srushti_compare';
const MAX_COMPARE_ITEMS = 4;

export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState(() => {
    try {
      const stored = localStorage.getItem(COMPARE_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever compare list changes
  useEffect(() => {
    localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(compareItems));
  }, [compareItems]);

  // Add item to compare
  const addToCompare = useCallback((product) => {
    setCompareItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev; // Already in compare list
      }
      if (prev.length >= MAX_COMPARE_ITEMS) {
        // Remove first item and add new one
        return [...prev.slice(1), {
          id: product.id,
          slug: product.slug,
          name: product.name,
          img: product.img,
          hoverImg: product.hoverImg,
          price: product.price,
          oldPrice: product.oldPrice,
          category: product.category
        }];
      }
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        img: product.img,
        hoverImg: product.hoverImg,
        price: product.price,
        oldPrice: product.oldPrice,
        category: product.category
      }];
    });
  }, []);

  // Remove item from compare
  const removeFromCompare = useCallback((productId) => {
    setCompareItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  // Toggle item in compare list
  const toggleCompare = useCallback((product) => {
    setCompareItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      if (prev.length >= MAX_COMPARE_ITEMS) {
        return [...prev.slice(1), {
          id: product.id,
          slug: product.slug,
          name: product.name,
          img: product.img,
          hoverImg: product.hoverImg,
          price: product.price,
          oldPrice: product.oldPrice,
          category: product.category
        }];
      }
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        img: product.img,
        hoverImg: product.hoverImg,
        price: product.price,
        oldPrice: product.oldPrice,
        category: product.category
      }];
    });
  }, []);

  // Check if item is in compare list
  const isInCompare = useCallback((productId) => {
    return compareItems.some(item => item.id === productId);
  }, [compareItems]);

  // Clear entire compare list
  const clearCompare = useCallback(() => {
    setCompareItems([]);
  }, []);

  // Get compare count
  const compareCount = compareItems.length;

  // Check if compare list is full
  const isFull = compareItems.length >= MAX_COMPARE_ITEMS;

  const value = {
    compareItems,
    compareCount,
    maxItems: MAX_COMPARE_ITEMS,
    isFull,
    addToCompare,
    removeFromCompare,
    toggleCompare,
    isInCompare,
    clearCompare
  };

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}

export default CompareContext;
