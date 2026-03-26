import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'srushti_cart';
const FREE_SHIPPING_THRESHOLD = 500;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = useCallback((product, quantity = 1, selectedSize = null) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.selectedSize?.label === selectedSize?.label
      );

      if (existingIndex > -1) {
        // Update quantity if item exists
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }

      // Add new item
      return [...prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        img: product.img,
        price: selectedSize?.price || product.price,
        selectedSize,
        quantity
      }];
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((itemId, selectedSizeLabel = null) => {
    setCartItems(prev =>
      prev.filter(item =>
        !(item.id === itemId && item.selectedSize?.label === selectedSizeLabel)
      )
    );
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((itemId, selectedSizeLabel, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, selectedSizeLabel);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId && item.selectedSize?.label === selectedSizeLabel
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeFromCart]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calculate cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate amount needed for free shipping
  const amountForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Check if cart is empty
  const isEmpty = cartItems.length === 0;

  // Calculate free shipping progress percentage
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const value = {
    cartItems,
    cartCount,
    subtotal,
    amountForFreeShipping,
    freeShippingProgress,
    isEmpty,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;
