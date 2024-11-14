import React, { createContext, useState, useContext } from 'react';

// Named export for CartContext
export const CartContext = createContext();  // <-- Changed to named export

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.some(cartItem => cartItem.id === item.id)) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);