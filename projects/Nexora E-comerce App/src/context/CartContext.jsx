import React, { createContext, useContext, useState } from "react";

// 1. Create context
const CartContext = createContext();

// 2. Create provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook
export const useCart = () => useContext(CartContext);
