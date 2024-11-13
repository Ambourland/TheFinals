import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState([]);
  
   
    const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
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
  
 
  export const useCart = () => {
    return useContext(CartContext);
  };