import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const WishlistContext = createContext(null);

const WISHLIST_STORAGE_KEY = 'srushti_wishlist';

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add item to wishlist
  const addToWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev; // Already in wishlist
      }
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        img: product.img,
        hoverImg: product.hoverImg,
        price: product.price,
        oldPrice: product.oldPrice
      }];
    });
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = useCallback((productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  // Toggle item in wishlist
  const toggleWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        img: product.img,
        hoverImg: product.hoverImg,
        price: product.price,
        oldPrice: product.oldPrice
      }];
    });
  }, []);

  // Check if item is in wishlist
  const isInWishlist = useCallback((productId) => {
    return wishlistItems.some(item => item.id === productId);
  }, [wishlistItems]);

  // Clear entire wishlist
  const clearWishlist = useCallback(() => {
    setWishlistItems([]);
  }, []);

  // Get wishlist count
  const wishlistCount = wishlistItems.length;

  const value = {
    wishlistItems,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export default WishlistContext;
